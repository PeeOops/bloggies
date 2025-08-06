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

                ![Copper Golem and Copper Chest in Minecraft](https://cdn2.steamgriddb.com/hero/3d2c7bb8be9ea80c1477b6778fbd2cf6.jpg)  

                *(Note: Image is for illustration — update visuals may vary in-game.)*

                ---

                ### ✅ Final Thoughts

                The **Minecraft July 2025 update** elevates copper from a rarely-used material to a vital part of early gameplay.  
                From **golems that organize your items** to **tools that look cool and get the job done**, this update hits the sweet spot for both builders and survival players.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [2,3,13,19]
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

                ![Age of Empires IV Korean fortress and Trưng Sisters campaign](https://cdn2.steamgriddb.com/hero/bde4a681eceb6f2c6d01c533b80a7a6e.png)

                ---

                ### 🏁 Final Verdict

                With **expanded civilizations**, deep campaigns, and **dynamic environmental effects**, *Dynasties of the East* is a must-play DLC for RTS fans and history buffs alike.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,3,6,18]
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

                ![Custom spell interface and dragon raid attack in Whiterun](https://cdn2.steamgriddb.com/hero/14e19d3d73ca4e39b42feb61ae4d1ab3.png)

                ---

                ### 💬 Community Buzz

                Fans have praised the update for “bringing back *Oblivion-style magic*” and adding “true danger to the open world again.”

                ---

                ### 🐉 Final Thoughts

                **Skyrim’s 2025 patch** proves this legendary RPG still has surprises left.  
                Whether you’re a battlemage or stealth archer, this update adds **depth, danger, and delight** to your next adventure.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,2,3,13,14,19]
            ],
            [
                "title" => "The Witcher 3: Wild Hunt Gets Next-Gen Combat & Monster AI Overhaul",
                "subtitle" => "CDPR’s major July patch modernizes monster behavior, combat responsiveness, and adds a new gear tier.",
                "featured_image_url" => "featured_images/witcher.jpg",
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

                ![Witcher fighting enhanced Leshen with new particle effects](https://cdn2.steamgriddb.com/hero/310ce61c90f3a46e340ee8257bc70e93.png)

                ---

                ### 🧩 Final Impressions

                This **2025 combat-focused patch** brings *The Witcher 3* closer to modern RPG standards.  
                Whether it’s the upgraded swordplay or smarter foes, veterans and newcomers alike have fresh reasons to dive back into the Continent.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,2,3]
            ],
            [
                "title" => "The Binding of Isaac: Repentance – A Beautiful Descent into Chaos",
                "subtitle" => "This final expansion delivers a roguelike masterpiece filled with pain, polish, and pixel-perfect madness.",
                "featured_image_url" => "featured_images/isaac.png",
                "body" => <<<MD
                ### 🩸 A Darker, Deeper Isaac

                **Repentance** isn’t just more Isaac—it’s the *ultimate* version.  
                With **new floors, hundreds of items**, and brutal bosses, this is Edmund McMillen’s chaotic vision fully realized.

                Original review:  
                👉 [Polygon – Isaac Repentance Final Review](https://polygon.com/reviews/isaac-repentance-review-2025?utm_source=chatgpt.com)

                ---

                ### 🌀 What’s Changed?

                - Over **130 new enemies** and **100+ bosses**, many with alternate forms.  
                - **True co-op** support lets two players battle hell together.  
                - **Alternate paths and endings** offer replay value like never before.

                ---

                ### 🎯 Gameplay Verdict

                - Tight, twitchy combat with endless item synergy chaos.  
                - New characters like **Bethany** and **Jacob & Esau** bring wild twists.  
                - “Greedier Mode” is punishing and addictive.

                ---

                ### 💀 Difficulty & Design

                - Not for the faint of heart.  
                - RNG still reigns, but feels more “earned” than ever.  
                - “Delirium” and “The Beast” are **final bosses worthy of the name**.

                ---

                ### 🧷 Final Score

                **9.5/10 – A definitive roguelike experience.**  
                Repentance is both a celebration and culmination.  
                There’s *no going back* to older versions after this.
                MD,
                "type" => "Blog",
                "category_id" => 2,
                "author_id" => 1,
                "tag_ids" => [1,3,12,15,20]
            ],
            [
                "title" => "Spiritfarer Review – Saying Goodbye Has Never Been So Beautiful",
                "subtitle" => "A cozy management game about death that’s more heartwarming than heartbreaking.",
                "featured_image_url" => "featured_images/spiritfarer.png",
                "body" => <<<MD
                ### ⛵ A Journey of Farewells

                **Spiritfarer** is a game about guiding souls to the afterlife—but somehow, it’s incredibly life-affirming.  
                With hand-drawn art, gentle pacing, and real emotional weight, it’s a one-of-a-kind experience.

                Full review:  
                👉 [Kotaku – Spiritfarer Is a Gentle Goodbye](https://kotaku.com/spiritfarer-review-2025?utm_source=chatgpt.com)

                ---

                ### 🎨 Visuals & Atmosphere

                - Gorgeously animated 2D sprites with warm, expressive design.  
                - Day/night cycles and dynamic weather feel alive.  
                - Music shifts gently with mood and moment.

                ---

                ### 🌱 Gameplay Loop

                - Build and upgrade a boat to house spirits.  
                - Farm, cook, fish, and craft—all **woven with story**.  
                - Platforming and exploration provide light challenge.

                ---

                ### 😢 Themes of Loss

                - Every spirit represents a past relationship and lesson.  
                - Dialogue explores grief, regret, and peace.  
                - Saying goodbye never gets easier—but that’s the point.

                ---

                ### ⭐ Final Thoughts

                **8.8/10 – A warm hug of a game about death.**  
                Spiritfarer balances light simulation gameplay with heavy emotional storytelling.  
                A must-play for anyone who’s lost—and loved.
                MD,
                "type" => "Blog",
                "category_id" => 2,
                "author_id" => 1,
                "tag_ids" => [3,7,20]
            ],
            [
                "title" => "Fantasy Life i: 10 Starter Tips for Your First Loop",
                "subtitle" => "Beginner’s guide to crafting, combat, and island building in this charming time-loop RPG.",
                "featured_image_url" => "featured_images/fantasy_life.jpg",
                "body" => <<<MD
                ### ⏳ Getting Started in Fantasy Life i

                The **Girl Who Steals Time** mixes life-sim charm with time-traveling adventure.  
                Whether you’re gathering apples or battling beetles, here are some **tips to thrive on Mystery Island**.

                Full guide:  
                👉 [GamesRadar – Fantasy Life i Starter Tips](https://gamesradar.com/fantasy-life-i-tips-2025?utm_source=chatgpt.com)

                ---

                ### 🛠️ 1. Pick the Right Life Early

                - Start with **Gatherer or Carpenter** for easier progression.  
                - You can switch Lives at any time—no commitment stress!

                ---

                ### 🌱 2. Rebuild Your Town Strategically

                - Focus on **farming buildings** first for early resources.  
                - Roads and shops speed up crafting and commerce.

                ---

                ### ⚔️ 3. Combat Isn’t Just Button-Mashing

                - Dodging is key in later fights—especially during boss events.  
                - Upgrade your gear regularly with crafted materials.

                ---

                ### ⌛ 4. Time Loop Perks

                - After each loop, you **retain progress** and unlock new areas.  
                - Don’t rush the main quest—explore and master your skills!

                ---

                ### 📚 Bonus Tip

                - **Talk to everyone**—NPCs often unlock quests or recipes.

                ---  

                Enjoy your journey through time. 🌙  
                There’s always more to craft, build, and discover!
                MD,
                "type" => "Blog",
                "category_id" => 4,
                "author_id" => 1,
                "tag_ids" => [2,3,19,20]
            ],
            [
                "title" => "Cult of the Lamb Runs Smooth on Steam Deck – But With Caveats",
                "subtitle" => "Devolver’s cult hit is fully playable on Steam Deck with minor tweaks to optimize performance.",
                "featured_image_url" => "featured_images/cult_of_the_lamb.png",
                "body" => <<<MD
                ### 🎮 Steam Deck Ready? Mostly Yes.

                **Cult of the Lamb** is marked *Verified* on Steam Deck, but players report best results after some tweaks.

                Community findings:  
                👉 [Reddit Thread – Cult of the Lamb Steam Deck Settings](https://reddit.com/r/SteamDeck/comments/cult_settings_2025?utm_source=chatgpt.com)

                ---

                ### ✅ What Works Well

                - **Default controls** feel tight and intuitive.  
                - 720p @ 60fps is consistent in most dungeon runs.  
                - Sleep/resume works without crashing.

                ---

                ### ⚙️ Recommended Settings

                - **VSync ON** + Frame cap to 45fps for battery savings.  
                - Set Texture Quality to Medium to avoid minor stutter.  
                - Proton 8.0 is the most stable runtime as of July 2025.

                ---

                ### ⚠️ Minor Drawbacks

                - UI occasionally clips on certain aspect ratios.  
                - Some users report longer load times post-patch.

                ---

                ### 🎯 Final Verdict

                **Play it on Deck? Absolutely.**  
                With a few adjustments, *Cult of the Lamb* is just as addictive on the go as it is on PC or console.
                MD,
                "type" => "News",
                "category_id" => 5,
                "author_id" => 1,
                "tag_ids" => [1,12,20]
            ],
            [
                "title" => "Sea of Stars Gets Boss Rush Mode, Photo Features in July Update",
                "subtitle" => "Sabotage Studio’s retro RPG adds new late-game challenge and cosmetic fun in its 2025 summer patch.",
                "featured_image_url" => "featured_images/sea_of_stars.png",
                "body" => <<<MD
                ### ✨ What’s New This Month?

                The **July 2025 update** brings exciting extras to *Sea of Stars*, including a long-requested **Boss Rush mode** and **Photo Mode**.

                Full patch notes:  
                👉 [Sea of Stars Official Site](https://seaofstarsgame.com/updates/july-2025?utm_source=chatgpt.com)

                ---

                ### 🌀 Boss Rush Arena

                - Challenge all story bosses back-to-back.  
                - **Speedrun timers** and rankings included.  
                - Rewards include **new skins and aura effects**.

                ---

                ### 📸 Photo Mode

                - Pause the action anywhere to take shots.  
                - Includes filters, poses, and sprite scaling.  
                - Even works mid-battle!

                ---

                ### 🛠️ Bug Fixes & Tweaks

                - Fixed softlock in Dweller’s Vault.  
                - Improved frame pacing on Steam Deck.  
                - Accessibility toggles added (combat speed, contrast).

                ---

                ### 🧡 Fans React

                “Photo Mode was made for this game’s stunning pixel art.” – Reddit User  
                “Boss Rush is a dream for New Game+ lovers.”

                ---

                A small update—but a mighty one.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,3,20]
            ],
            [
                "title" => "Oxygen Not Included: 8 Essential Tips to Keep Your Dupes Alive",
                "subtitle" => "Surviving the first 50 cycles in Klei’s colony sim isn’t easy—here’s how to avoid catastrophe.",
                "featured_image_url" => "featured_images/oni.png",
                "body" => <<<MD
                ### 🧪 Surviving the Asteroid

                *Oxygen Not Included* is one of the most complex survival sims out there.  
                Here are 8 tips to **keep your base running smoothly**—and your dupes breathing.

                Deep dive:  
                👉 [Steam Guides – ONI New Player Tips](https://steamcommunity.com/guides/oni2025?utm_source=chatgpt.com)

                ---

                ### 🌬️ 1. Don’t Trust the Starter Oxygen

                - Algae runs out fast—research **Electrolyzers** ASAP.  
                - Use airflow tiles and doors to control gas flow.

                ---

                ### 🔥 2. Heat Is a Silent Killer

                - Plan ahead: **Insulated tiles and wheezeworts** are your friends.  
                - Avoid early metal refinery overuse—it gets hot quick.

                ---

                ### 💩 3. Manage Waste and Water

                - Compost early on, then automate with **polluted water loops**.  
                - Separate clean and dirty water zones.

                ---

                ### ⚙️ 4. Automation Wins Long-Term

                - Smart batteries, pressure plates, and sensors make a huge difference.  
                - Don’t fear automation—it reduces dupe micromanagement.

                ---

                ### 🛠️ Bonus Tip

                - **Pause often** to plan. Panic builds kill more colonies than bad RNG.

                ---

                Build smart. Survive longer. Thrive eventually. 🌑
                MD,
                "type" => "Blog",
                "category_id" => 4,
                "author_id" => 1,
                "tag_ids" => [6,7,13,14,20]
            ],
            [
                "title" => "Steam Deck OLED Launches Worldwide: Release Dates and Specs",
                "subtitle" => "Valve's upgraded handheld arrives with better battery life and an OLED display.",
                "featured_image_url" => "featured_images/steamdeck.png",
                "body" => <<<MD
                ### 🕹️ Steam Deck OLED Has Arrived

                Valve’s Steam Deck OLED is rolling out globally, bringing **enhanced display and thermals** to handheld gaming.

                📅 **Release Date:**  
                - North America & Europe: **November 16, 2024**  
                - Asia-Pacific: **December 5, 2024**

                🔋 **Upgrades include:**
                - Brighter OLED screen
                - Longer battery life
                - Quieter fans & better thermals

                💬 More at:  
                👉 [Steam Deck OLED FAQ](https://store.steampowered.com/steamdeck)

                Get ready to dock or go. 🎮
                MD,
                "type" => "News",
                "category_id" => 5,
                "author_id" => 1,
                "tag_ids" => []
            ],
            [
                "title" => "Black Myth: Wukong – Critics Weigh In",
                "subtitle" => "The long-awaited Chinese action-RPG draws praise—and some critique.",
                "featured_image_url" => "featured_images/wukong.png",
                "body" => <<<MD
                ### 🐒 A Stunning Soulslike

                *Black Myth: Wukong* impressed reviewers with its visuals and combat, but some noted a steep difficulty curve.

                **Highlights from early reviews:**
                - 🎨 "Visually breathtaking" – IGN  
                - ⚔️ "Deep, punishing combat" – GameSpot  
                - 🧭 "Sparse tutorials may frustrate casual players"

                📊 **Metacritic average (as of July 2025):** 84/100  
                👉 [Full Review Roundup](https://blackmyth.game/news)

                Is it GOTY material or just flashy? You decide.
                MD,
                "type" => "Blog",
                "category_id" => 2,
                "author_id" => 1,
                "tag_ids" => [1,3,10]
            ],
            [
                "title" => "Path of Exile 2: July Patch Adds New Skills and Bosses",
                "subtitle" => "Grinding Gear Games drops a major mid-season update with balance changes and new gear.",
                "featured_image_url" => "featured_images/poe2.png",
                "body" => <<<MD
                ### ⚔️ POE2 Grows Stronger

                The July 2025 patch for *Path of Exile 2* introduces **six new active skills**, fresh legendary drops, and a long-awaited fix for dual-wield bugs.

                🛠️ **Highlights:**
                - New skill gems: Shatter Bolt, Flame Loop
                - Act 3 boss rework: Crimson Maws
                - UI/UX improvements for controller support

                🧪 Full patch notes:  
                👉 [pathofexile.com/patch-notes](https://www.pathofexile.com)

                Exiles, your grind continues.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,3,4,18,19]
            ],
            [
                "title" => "Fantasy Life 2: All Redeem Codes for July 2025",
                "subtitle" => "Get free items, gems, and more with these active codes.",
                "featured_image_url" => "featured_images/fl2.jpg",
                "body" => <<<MD
                ### 🎁 Free Rewards This Month

                Use these **Fantasy Life 2** codes before they expire! Valid through **July 31, 2025**.

                🔑 **Active Codes:**
                - `LIFE2025GIFT` – 100 Gems  
                - `FREEDOMCRAFT` – Furniture set  
                - `GOLDENBLAZE` – Legendary sword skin

                📌 Redeem in-game or at:  
                👉 [codes.fantasylife.jp](https://codes.fantasylife.jp)

                Codes change monthly—grab yours now!
                MD,
                "type" => "News",
                "category_id" => 4,
                "author_id" => 1,
                "tag_ids" => [2,3,19,20]
                ],
            [
                "title" => "Palworld and Terraria Join Forces: Crossover Event Details",
                "subtitle" => "Pals meet pixelated chaos in a surprising indie crossover.",
                "featured_image_url" => "featured_images/palworld.jpg",
                "body" => <<<MD
                ### 🧩 Unexpected Combo

                *Palworld* players can now enjoy **Terraria-inspired content** as part of a July 2025 crossover event.

                🔨 What's included:
                - Terraria biome island
                - Pal skin based on the Eye of Cthulhu
                - Craftable Terraria-themed gear

                ⏳ **Event ends August 15, 2025**  
                👉 [palworld.com/events](https://palworld.com/events)

                Grab your grappling hook—it’s building time.
                MD,
                "type" => "News",
                "category_id" => 1,
                "author_id" => 1,
                "tag_ids" => [1,2,3,19]
            ],
            [
                "title" => "Valorant Champions Tour 2025: Key Dates and Locations",
                "subtitle" => "Riot reveals the global VCT schedule leading to Champions.",
                "featured_image_url" => "featured_images/valorant.jpg",
                "body" => <<<MD
                ### 🎯 Valorant Esports Heats Up

                The 2025 VCT season is in full swing with **international LANs**, regional showdowns, and the **Champions final in Seoul**.

                🗓️ Upcoming Events:
                - Masters Tokyo: **August 2–10**
                - LCQ Europe: **July 18–23**
                - Champions Seoul: **September 12–21**

                📺 Stream on:  
                👉 [Twitch.tv/Valorant](https://twitch.tv/valorant)

                Watch the world’s best duel it out.
                MD,
                "type" => "News",
                "category_id" => 3,
                "author_id" => 1,
                "tag_ids" => [5]
            ],
            [
                "title" => "Dota 2 The International 2025: Dates Confirmed",
                "subtitle" => "TI heads to Singapore with the biggest prize pool yet.",
                "featured_image_url" => "featured_images/dota.png",
                "body" => <<<MD
                ### 🧙 TI Returns in Style

                Valve has officially confirmed **The International 2025** will be hosted in **Singapore**.

                📅 **Key Dates:**
                - Group Stage: **October 3–7**  
                - Main Event: **October 10–17**

                🏆 Prize Pool: Over **\$35 million** (and counting)

                👉 [dota2.com/international](https://www.dota2.com/international)

                Who will lift the Aegis this year?
                MD,
                "type" => "News",
                "category_id" => 3,
                "author_id" => 1,
                "tag_ids" => [18]
            ],
            [
                "title" => "CS2 Major 2025: Dates, Teams, and What to Expect",
                "subtitle" => "Counter-Strike 2 enters its second year with a packed esports calendar.",
                "featured_image_url" => "featured_images/cs2.png",
                "body" => <<<MD
                ### 🔫 CS2 Esports in 2025

                *Counter-Strike 2* continues its momentum with the 2025 Major circuit, featuring revamped maps and refined mechanics.

                🗓️ **Upcoming Events:**
                - BLAST Paris Major: **August 21–31, 2025**
                - ESL Pro League Season 20: **September 15–October 5**
                - IEM Katowice Qualifiers: **Starting October 18**

                💰 Prize pools remain strong with **\$1.25M+** per major.

                👉 Watch on: [twitch.tv/ESL_CSGO](https://twitch.tv/ESL_CSGO)

                Smoke mid. Flash long. Watch legends rise.
                MD,
                "type" => "News",
                "category_id" => 3,
                "author_id" => 1,
                "tag_ids" => [5]
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
