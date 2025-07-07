<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                "email" => "peepoop@gmail.com",
                "username" => "PeePoop",
                "password" => "password",
                "bio" => "Pee and poop"
            ]
        ];

        foreach($users as $user){
            User::firstOrCreate($user);
        }
    }
}
