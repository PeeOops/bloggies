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
                "type" => "news",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,3,8,13]
            ],
            [
                "title" => "Age of Empires IV Expands With ‘Dynasties of the East’ DLC",
                "subtitle" => "New civilizations, campaigns, and strategic mechanics arrive in a major summer expansion.",
                "featured_image_url" => "featured_images/age_of_empires.jpg",
                "body" => <<<MD
                ### ⚔️ Expansion Highlights

                The **‘Dynasties of the East’ DLC** brings fresh content to *Age of Empires IV* in July 2025, enriching historical RTS gameplay with dynamic new mechanics.

                Read the original news here:  
                👉 [PC Gamer – AoE IV Dynasties Expansion](https://pcgamer.com/aoe4-dynasties-of-the-east-dlc-announced-july-2025?utm_source=chatgpt.com)

                ---

                ### 🏯 New Civilizations

                - **Koreans:** Focus on defensive structures and turtle ship naval units.  
                - **Vietnamese:** Guerrilla tactics and jungle ambush mechanics.  
                - Unique units, architectures, and bonuses per civ.

                ---

                ### 📜 New Campaigns

                - **Yi Sun-sin’s Naval Legacy:** Fight Japan’s invasions using Korea’s maritime forces.  
                - **Trưng Sisters' Revolt:** Reclaim Vietnam from foreign control in a guerrilla-style narrative.

                ---

                ### 🧠 Gameplay Additions

                - **Weather-based strategies:** Monsoons and fog impact visibility and movement.  
                - **Dynasty system:** Evolve ruling families for unique tech trees and economy boosts.

                ---

                ### 🎥 First Look

                ![Age of Empires IV Korean fortress and Trưng Sisters campaign](https://example.com/aoe4-dynasties-screenshot.png)

                ---

                ### 🏁 Final Verdict

                With **expanded civilizations**, deep campaigns, and **dynamic environmental effects**, *Dynasties of the East* is a must-play DLC for RTS fans and history buffs alike.
                MD,
                "type" => "news",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,7,8]
            ],
            [
                "title" => "Skyrim 2025 Anniversary Patch Adds Spellcrafting & Dragon Raids",
                "subtitle" => "Bethesda breathes new life into the classic with powerful spell customization and randomized dragon encounters.",
                "featured_image_url" => "featured_images/skyrim.jpg",
                "body" => <<<MD
                ### 🧙‍♂️ Spellcrafting Returns

                In a surprise **Anniversary 2025 patch**, Bethesda reintroduces *spellcrafting* to *Skyrim*, letting players create their own magical arsenal.

                Full patch notes:  
                👉 [GameSpot – Skyrim 2025 Update Details](https://gamespot.com/skyrim-spellcrafting-dragon-raids-update?utm_source=chatgpt.com)

                ---

                ### 🔮 New Features

                - **Spell Lab:** A new location in Winterhold for combining runes and magical essences.  
                - **Custom spells:** Control damage, area, and elemental type — at a cost of magicka efficiency.  
                - **Dragon Raids:** Towns can now be assaulted randomly by **multiple dragons** at once.

                ---

                ### 🛡️ Combat Balance Changes

                - **Shield enchantments:** Added cooldown-based abilities.  
                - **Stealth mechanics:** Revised detection system in dark environments.  
                - **AI overhaul:** Enemies use smarter group tactics in higher difficulties.

                ---

                ### 📸 Screenshot Preview

                ![Custom spell interface and dragon raid attack in Whiterun](https://example.com/skyrim-spellcraft-dragon-raid.png)

                ---

                ### 💬 Community Buzz

                Fans have praised the update for “bringing back *Oblivion-style magic*” and adding “true danger to the open world again.”

                ---

                ### 🐉 Final Thoughts

                **Skyrim’s 2025 patch** proves this legendary RPG still has surprises left.  
                Whether you’re a battlemage or stealth archer, this update adds **depth, danger, and delight** to your next adventure.
                MD,
                "type" => "news",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [2,3,13]
            ],
            [
                "title" => "The Witcher 3: Wild Hunt Gets Next-Gen Combat & Monster AI Overhaul",
                "subtitle" => "CDPR’s major July patch modernizes monster behavior, combat responsiveness, and adds a new gear tier.",
                "featured_image_url" => "featured_images/witcher3.jpg",
                "body" => <<<MD
                ### ⚔️ What’s New in the July Patch?

                The **Witcher 3 July 2025 update** is the biggest combat overhaul since its launch.  
                CD Projekt Red introduces improved responsiveness, smarter AI, and new **Relic+ gear tier**.

                Original article:  
                👉 [IGN – Witcher Combat Rework 2025](https://ign.com/articles/witcher-3-ai-combat-update-2025?utm_source=chatgpt.com)

                ---

                ### 👹 Smarter Monsters

                - Monsters **read your attack patterns** and adjust mid-battle.  
                - Group AI: Packs of drowners flank and overwhelm instead of swarming blindly.  
                - Boss monsters have new **enrage and phase abilities**.

                ---

                ### 🧬 Combat Overhaul

                - Light attacks now **chain fluidly** with signs and dodge.  
                - Criticals and parries reward **precise timing**.  
                - New **Relic+ gear**: A prestige gear class with visual effects and set bonuses.

                ---

                ### 🏞️ Visual Enhancements

                - Ray-traced fog, weather transitions, and volumetric clouds.  
                - Updated facial animations for key characters.

                ---

                ### 🎮 Screenshot Sneak Peek

                ![Witcher fighting enhanced Leshen with new particle effects](https://example.com/witcher3-ai-overhaul.png)

                ---

                ### 🧩 Final Impressions

                This **2025 combat-focused patch** brings *The Witcher 3* closer to modern RPG standards.  
                Whether it’s the upgraded swordplay or smarter foes, veterans and newcomers alike have fresh reasons to dive back into the Continent.
                MD,
                "type" => "news",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,6,8,3]
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
