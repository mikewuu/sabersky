<?php

use App\Company;
use App\User;
use Illuminate\Database\Seeder;

class PusakaSetupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->truncate();
        DB::table('users')->truncate();

        $company = Company::create([
            'name' => 'Pusaka Jaya',
            'description' => 'EPC Contractor & Independent Power Producer for over 20 years.'
        ]);

        $user = User::create([
            'name' => 'Michael Sutono',
            'email' => 'mail@wumike.com',
            'password' => bcrypt('password')
        ]);

        $company->employees()->save($user);
        $user->update([
            'role_id' => 1
        ]);

        $project = $company->projects()->create([
            'name' => 'Tanjung Selor 7MW',
            'location' => 'Jawa Tengah',
            'description' => 'Gallia est omnis divisa in partes tres, quarum. Ab illo tempore, ab est sed immemorabili. Nihil hic munitissimus habendi senatus locus, nihil horum? Quam diu etiam furor iste tuus nos eludet? Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus.
A communi observantia non est recedendum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Quae vero auctorem tractata ab fiducia dicuntur. Quam temere in vitiis, legem sancimus haerentia. Unam incolunt Belgae, aliam Aquitani, tertiam. Curabitur est gravida et libero vitae dictum.'
        ]);

        $user->projects()->save($project);


    }
}