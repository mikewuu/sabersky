<?php

use App\Company;
use App\Item;
use App\ProductCategory;
use App\Project;
use App\Repositories\CompanyItemsRepository;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CompanyItemsRepositoryTest extends TestCase
{

    use DatabaseTransactions;

    protected static $company;

    public function setUp()
    {
        parent::setUp();
        static::$company = factory(Company::class)->create();
    }

    /**
     * @test
     */
    public function it_creates_an_instance()
    {
        $instance = CompanyItemsRepository::forCompany(static::$company);
        $this->assertTrue($instance instanceof  CompanyItemsRepository);
    }

    /**
     * @test
     */
    public function it_fetches_items_that_belong_to_certain_category()
    {
        $targetCategory = ProductCategory::all()->random();

        // Make 5 items for target cat
        factory(Item::class, 5)->create([
            'company_id' => static::$company->id,
            'product_subcategory_id' => $targetCategory->subcategories->random()->id
        ]);

        // Make 10 for different categories
        for ($i = 0; $i < 10; $i++) {
            do {
                $irrelevantCategory = ProductCategory::all()->random();
            } while ($irrelevantCategory->id === $targetCategory->id);
            factory(Item::class)->create([
                'company_id' => static::$company->id,
                'product_subcategory_id' => $irrelevantCategory->subcategories->random()->id
            ]);
        }

        // Unfiltered get 15
        $this->assertCount(15, CompanyItemsRepository::forCompany(static::$company)->getWithoutQueryProperties());

        // Target Category = 5
        $this->assertCount(5, CompanyItemsRepository::forCompany(static::$company)->belongsToCategory($targetCategory->id)->getWithoutQueryProperties());
    }

    /**
     * @test
     */
    public function it_retrieves_only_given_brand()
    {
        factory(Item::class)->create([
            'company_id' => static::$company->id,
            'brand' => 'foobar'
        ]);

        factory(Item::class, 10)->create([
            'company_id' => static::$company->id,
        ]);

        // 11 items - 11 brands
        $this->assertCount(11, array_filter(CompanyItemsRepository::forCompany(static::$company)->get()->pluck('brand')->toArray()));

        // Only retrieve 1 - where brand is foobar
        $this->assertCount(1, array_filter(CompanyItemsRepository::forCompany(static::$company)->withBrand('foobar')->getWithoutQueryProperties()->pluck('brand')->toArray()));
        $this->assertEquals('foobar', array_filter(CompanyItemsRepository::forCompany(static::$company)->withBrand('foobar')->get()->pluck('brand')->toArray())[0]);
    }

    /**
     * @test
     */
    public function it_retrieves_where_projects_has()
    {
        $targetProject = factory(Project::class)->create([
            'company_id' => static::$company->id
        ]);

        $otherProject = factory(Project::class)->create([
            'company_id' => static::$company->id
        ]);

        // Create 3 w/ single target project
        $items = factory(Item::class, 3)->create([
            'company_id' => static::$company->id
        ]);

        foreach ($items as $item) {
            // create PR (attach to project) for each item
            factory(\App\PurchaseRequest::class)->create([
                'item_id' => $item->id,
                'project_id' => $targetProject->id,
                'user_id' => factory(User::class)->create([
                    'company_id' => static::$company->id
                ])->id
            ]);
        }

        // Creater 2 w/ multiple projects containing target project
        $items = factory(Item::class, 2)->create([
            'company_id' => static::$company->id
        ]);

        foreach ($items as $item) {
            // create PR (attach to project) for each item
            factory(\App\PurchaseRequest::class)->create([
                'item_id' => $item->id,
                'project_id' => $targetProject->id,
                'user_id' => factory(User::class)->create([
                    'company_id' => static::$company->id
                ])->id
            ]);

            factory(\App\PurchaseRequest::class)->create([
                'item_id' => $item->id,
                'project_id' => $otherProject->id,
                'user_id' => factory(User::class)->create([
                    'company_id' => static::$company->id
                ])->id
            ]);
        }

        // Create 5 w/o target project
        factory(Item::class, 5)->create([
            'company_id' => static::$company->id
        ]);

        // assertions
            // we have 10 items to start
            $this->assertCount(10, array_filter(CompanyItemsRepository::forCompany(static::$company)->get()->pluck('name')->toArray()));
            // filtering by project - we get 5 items
            $this->assertCount(5, array_filter(CompanyItemsRepository::forCompany(static::$company)->forProject($targetProject->id)->get()->pluck('name')->toArray()));
            // Filtering by other project - we get 2 items
            $this->assertCount(2, array_filter(CompanyItemsRepository::forCompany(static::$company)->forProject($otherProject->id)->get()->pluck('name')->toArray()));
    }

    /**
     * @test
     */
    public function it_finds_the_right_sku()
    {
        // Make 1 target item
        factory(Item::class)->create([
            'company_id' => static::$company->id,
            'sku' => 'SNAFU'
        ]);

        // Make 10 random items
        factory(Item::class, 10)->create([
            'company_id' => static::$company->id
        ]);

        // Get 11 on start
        $this->assertCount(11, array_filter(CompanyItemsRepository::forCompany(static::$company)->get()->pluck('name')->toArray()));
        // get 1 on search for snafu
        $this->assertCount(1, array_filter(CompanyItemsRepository::forCompany(static::$company)->searchFor('snafu', ['sku', 'brand', 'name'])->get()->pluck('name')->toArray()));
    }

    /**
     * @test
     */
    public function it_finds_the_right_brand()
    {
        // Make 1 target item
        factory(Item::class)->create([
            'company_id' => static::$company->id,
            'brand' => 'SNAFU'
        ]);

        // Make 10 random items
        factory(Item::class, 10)->create([
            'company_id' => static::$company->id
        ]);

        // Get 11 on start
        $this->assertCount(11, array_filter(CompanyItemsRepository::forCompany(static::$company)->get()->pluck('name')->toArray()));
        // get 1 on search for snafu
        $this->assertCount(1, array_filter(CompanyItemsRepository::forCompany(static::$company)->searchFor('snafu', ['sku', 'brand', 'name'])->get()->pluck('name')->toArray()));
    }

    /**
     * @test
     */
    public function it_finds_the_right_name()
    {
        // Make 1 target item
        factory(Item::class)->create([
            'company_id' => static::$company->id,
            'name' => 'SNAFU'
        ]);

        // Make 10 random items
        factory(Item::class, 10)->create([
            'company_id' => static::$company->id
        ]);

        // Get 11 on start
        $this->assertCount(11, array_filter(CompanyItemsRepository::forCompany(static::$company)->get()->pluck('name')->toArray()));
        // get 1 on search for snafu
        $this->assertCount(1, array_filter(CompanyItemsRepository::forCompany(static::$company)->searchFor('snafu', ['sku', 'brand', 'name'])->get()->pluck('name')->toArray()));
    }

}
