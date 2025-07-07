<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
              "title" => "Minecraft July Update Brings Copper Golem, Tools, Armor & More",
              "subtitle" => "Copper takes the spotlight with functional golems, storage chests, and enhanced early-game gear.",
              "featured_image_url" => "featured_images/minecraft.png",
              "body" => <<<MD
                ### 📦 Update Overview

                Mojang’s **July 2025 update** reimagines the role of copper in *Minecraft*, giving it both aesthetic flair and practical applications.  
                Read the original news here:  
                👉 [IndiaTimes – Minecraft July Update](https://indiatimes.com/trending/minecraft-july-update-copper-golem-finally-arrives-with-tools-armor-and-storage-662663.html?utm_source=chatgpt.com)

                ---

                ### 🧱 Copper Golem

                - **Crafting recipe:** Copper blocks + carved pumpkin (similar to Iron/Snow Golem).  
                - **Functionality:** Acts as an item-sorting assistant — picks up items and distributes them into nearby chests.  
                - **Oxidization mechanic:** Turns green over time unless waxed with honeycomb.  

                More details:  
                👉 [TrueAchievements – Minecraft Copper Golem Update](https://www.trueachievements.com/news/minecraft-copper-update-july-2025?utm_source=chatgpt.com)

                ---

                ### 🛠️ Copper Chests & Gear

                - **Copper chests:** A new type of storage block that oxidizes visually (wax can prevent it).  
                - **Tools & armor:** Introduces copper weapons and gear:  
                - Swords, pickaxes, axes, shovels, hoes, helmets, chestplates, leggings, boots.  
                - Durability and strength fall between **stone** and **iron**.  

                ---

                ### 🎯 Why This Matters

                - Copper now serves a **real survival gameplay purpose**, not just aesthetics.  
                - The **Copper Golem** adds utility and character to player builds.  
                - Early-game players get more viable options beyond wood and stone.  

                ---

                ### 📸 Visual Sneak Peek

                ![Copper Golem and Copper Chest in Minecraft](https://example.com/copper-golem-screenshot.png)  

                *(Note: Image is for illustration — update visuals may vary in-game.)*

                ---

                ### ✅ Final Thoughts

                The **Minecraft July 2025 update** elevates copper from a rarely-used material to a vital part of early gameplay.  
                From **golems that organize your items** to **tools that look cool and get the job done**, this update hits the sweet spot for both builders and survival players.
                MD,
              "category_id" => 1,
              "author_id" => 1,
              "tag_ids" => [1,3,8,13]
            ]
        ];

        foreach($posts as $post){

            $tagIds = Arr::pull($post, "tag_ids");

            $postData = Post::firstOrCreate(
                ['title' => $post['title']],
                $post
            );

            $postData->tags()->sync($tagIds);
        }
    }
}
