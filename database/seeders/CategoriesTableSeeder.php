<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ["name" => "Game releases & updates"],
            ["name" => "Reviews & critiques"],
            ["name" => "eSports & competition"],
            ["name" => "Guides & tips"],
            ["name" => "Hardware & accessories"]
        ];
        
        foreach ($categories as $category){
            Category::firstOrCreate($category);
        }
    }
}
