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
            ["name" => "Fighting"],
            ["name" => "Strategy"],
            ["name" => "Simulation"],
            ["name" => "Sport"],
            ["name" => "Racing"],
            ["name" => "Horror"],
            ["name" => "Sandbox"],
            ["name" => "Survival"],
            ["name" => "Platformer"],
            ["name" => "Stealth"],
            ["name" => "Puzzle"],
            ["name" => "Rhythm"],
            ["name" => "Battle Royale"],
            ["name" => "Idle"],
            ["name" => "Visual Novel"],
            ["name" => "Card"],
            ["name" => "MOBA"],
            ["name" => "Virtual Reality"],
            ["name" => "Tactical Shooter"],
            ["name" => "Interactive"]
        ];

        foreach($tags as $tag){
            Tag::firstOrCreate($tag);
        }
    }
}
