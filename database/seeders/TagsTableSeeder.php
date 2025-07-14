<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            ["name" => "Action"],
            ["name" => "Adventure"],
            ["name" => "RPG"],
            ["name" => "MMO"],
            ["name" => "FPS"],
            ["name" => "Strategy"],
            ["name" => "Simulation"],
            ["name" => "Sports"],
            ["name" => "Racing"],
            ["name" => "Fighting"],
            ["name" => "Puzzle"],
            ["name" => "Platformer"],
            ["name" => "Survival"],
            ["name" => "Sandbox"],
            ["name" => "Horror"],
            ["name" => "Battle Royale"],
            ["name" => "Tactical Shooter"],
            ["name" => "Co-op"],
            ["name" => "Open World"],
            ["name" => "Indie"]
        ];  


        foreach($tags as $tag){
            Tag::firstOrCreate($tag);
        }
    }
}
