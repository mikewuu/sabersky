<?php

use App\Company;
use App\Http\Requests\AddItemRequest;
use App\Http\Requests\MakePurchaseRequestRequest;
use App\Item;
use App\PurchaseRequest;
use App\User;
use App\Utilities\BuildPhoto;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Mockery as m;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ItemTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     */
    public function it_adds_a_new_item()
    {
        $request = new AddItemRequest([
            'sku' => 'abcd1234',
            'brand' => 'foo',
            'name' => 'bar',
            'specification' => 'best foobar in the world',
            'product_subcategory_id' => 1
        ]);

        $user = factory(User::class)->create();

        $this->dontSeeInDatabase('activities', ['name' => 'added_item', 'user_id' => $user->id]);
        $this->assertEmpty(User::find($user->id)->company->items);
        
        Item::add($request, $user);

        $this->assertEquals('abcd1234', User::find($user->id)->company->items->first()->sku);
        $this->seeInDatabase('activities', ['name' => 'added_item', 'user_id' => $user->id]);
    }

    /** @test */
    public function it_calls_attachPhoto_for_matching_files()
    {
        // Create partial mock with methods to stub out
        $item = m::mock('\App\Item[attachPhoto]');

        // How many times should attachPhoto be called
        $item->shouldReceive('attachPhoto')
             ->times(3);

        $uploadedFiles = [
            m::mock(UploadedFile::class),
            null,
            m::mock(UploadedFile::class),
            'not valid type',
            m::mock(UploadedFile::class),
        ];

        $this->assertEquals($item, $item->handleFiles($uploadedFiles));
    }

    /** @test */
    public function it_attaches_a_photo_to_an_item()
    {
        $file = m::mock(UploadedFile::class, [
            'getClientOriginalName' => 'foo',
            'getClientOriginalExtension' => 'jpg',
            'move' => ''
        ]);

        $photoBuilder = m::mock(BuildPhoto::class);

        $item = factory(Item::class)->create();

        $photo = factory(\App\Photo::class)->create();

        $photoBuilder
            ->shouldReceive('item')
            ->once()
            ->with($item)
            ->andReturn($photo);

        $this->assertEmpty(Item::find($item->id)->photos->all());

        $item->attachPhoto($file, $photoBuilder);

        $this->assertNotEmpty(Item::find($item->id)->photos->all());
        $this->assertEquals($photo->id, Item::find($item->id)->photos()->first()->id);
    }

    /**
     * @test
     */
    public function it_gets_the_right_amount_of_approved_line_items()
    {
        $item = factory(Item::class)->create();
        $this->assertCount(0, $item->approved_line_items);

        $pr = factory(PurchaseRequest::class)->create([
            'item_id' => $item->id,
            'project_id' => factory(\App\Project::class)->create([
                'company_id' => $item->company_id
            ])->id,
            'user_id' => factory(User::class)->create([
                'company_id' => $item->company_id,
            ])->id
        ]);

        $po = factory(\App\PurchaseOrder::class)->create(['status' => 'pending']);
        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => $po->id
        ]);

        $po = factory(\App\PurchaseOrder::class)->create(['status' => 'approved']);
        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => $po->id
        ]);

        $po = factory(\App\PurchaseOrder::class)->create(['status' => 'approved']);
        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => $po->id
        ]);

        $po = factory(\App\PurchaseOrder::class)->create(['status' => 'rejected']);
        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => $po->id
        ]);

        // We should get 2 approved_line_items (ignoring pending and cancelled)
        $this->assertCount(2, Item::find($item->id)->approved_line_items);
    }

    /**
     * @test
     */
    public function it_calculates_the_correct_means()
    {
        $item = factory(Item::class)->create();

        $this->assertEquals(0, $item->mean);

        $pr = factory(PurchaseRequest::class)->create([
            'item_id' => $item->id,
            'project_id' => factory(\App\Project::class)->create([
                'company_id' => $item->company_id
            ])->id,
            'user_id' => factory(User::class)->create([
                'company_id' => $item->company_id,
            ])->id,
            'quantity' => 30
        ]);

        // USD Line items

            factory(\App\LineItem::class)->create([
                'purchase_request_id' => $pr->id,
                'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 840])->id,
                'quantity' => 10,
                'price' => 5.5
            ]);

            factory(\App\LineItem::class)->create([
                'purchase_request_id' => $pr->id,
                'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 840])->id,
                'quantity' => 10,
                'price' => 13
            ]);

            factory(\App\LineItem::class)->create([
                'purchase_request_id' => $pr->id,
                'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 840])->id,
                'quantity' => 10,
                'price' => 32.28
            ]);

        // JPY Line Items
            factory(\App\LineItem::class)->create([
                'purchase_request_id' => $pr->id,
                'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 392])->id,
                'quantity' => 10,
                'price' => 10
            ]);
            factory(\App\LineItem::class)->create([
                'purchase_request_id' => $pr->id,
                'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 392])->id,
                'quantity' => 10,
                'price' => 20
            ]);

        // USD mean
        $this->assertEquals(16.67, round(Item::find($item->id)->getMean(840), 2));

        // JPY Mean
        $this->assertEquals(15, Item::find($item->id)->getMean('JPY'));
    }

    /**
     * @test
     */
    public function it_sets_sku_as_null()
    {
        $item = factory(Item::class)->create(['sku' => '']);
        $this->assertNull($item->sku);
    }

    /**
     * @test
     */
    public function it_sets_brand_as_null()
    {
        $item = factory(Item::class)->create(['brand' => '']);
        $this->assertNull($item->brand);
    }

    /**
     * @test
     */
    public function it_determines_if_item_is_new_without_approved_line_items()
    {
        $item = factory(Item::class)->create();

        $this->assertTrue(Item::find($item->id)->new);;

        $pr = factory(PurchaseRequest::class)->create([
            'item_id' => $item->id,
            'project_id' => factory(\App\Project::class)->create([
                'company_id' => $item->company_id
            ])->id,
            'user_id' => factory(User::class)->create([
                'company_id' => $item->company_id,
            ])->id,
            'quantity' => 30
        ]);

        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 392])->id,
            'quantity' => 10,
            'price' => 10
        ]);

        $this->assertFalse(Item::find($item->id)->new);
    }

    /**
     * @test
     */
    public function it_gets_line_items_that_are_approved()
    {
        $item = factory(Item::class)->create();

        $pr = factory(PurchaseRequest::class)->create([
            'item_id' => $item->id,
            'project_id' => factory(\App\Project::class)->create([
                'company_id' => $item->company_id
            ])->id,
            'user_id' => factory(User::class)->create([
                'company_id' => $item->company_id,
            ])->id,
            'quantity' => 30
        ]);

        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 392])->id,
            'quantity' => 10,
            'price' => 10
        ]);

        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'approved', 'currency_id' => 392])->id,
            'quantity' => 10,
            'price' => 10
        ]);

        factory(\App\LineItem::class)->create([
            'purchase_request_id' => $pr->id,
            'purchase_order_id' => factory(\App\PurchaseOrder::class)->create(['status' => 'pending', 'currency_id' => 392])->id,
            'quantity' => 10,
            'price' => 10
        ]);

        $this->assertCount(2, Item::find($item->id)->approvedLineItems);
    }


}
