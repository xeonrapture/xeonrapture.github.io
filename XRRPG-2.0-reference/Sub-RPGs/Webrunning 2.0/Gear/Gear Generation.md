# In This Document

- Steps for Gear Generation (including a prodigious amount of rolling tables)
	- Input Luck stat, get a Weapon, piece of Clothing, a Kernel, a Consumable, or a Bauble
- Local Node Features at the bottom (including a Local Shop, details for Gear Upgrading, Gear Condensing, Rerolling Gear Modifiers, and Gear Aesthetic Modification)

## If you don't want to roll for gear...

Go [here](https://xeonrapture.github.io/webrunning-2.0-gear-generator/) to generate gear yourself!

Or go [here](https://xeonrapture.github.io/webrunning-2.0-loot-charts/), a bunch of rolling tables of gear sorted by Rarity, Rarity + Color, and Rarity + Gear Type.

Each page contains 1000 pieces of Gear and instructions for rolling a random one using a d10 and d100.

If you want to see the code I used to generate all the gear, click [here](https://github.com/xeonrapture/webrunning-2.0-gear-generator).

# Gear Generation

## Intro Instructions

### Trait Overview

Below are the traits that each piece of gear should have when their creation is finished.

| Type of Gear                         | Traits They Should Have                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------ |
| ALL GEAR                             | Rarity, Color, Gear Type, Aesthetic, Essence Value, Credit Value                           |
| Weapons<br>(One-Handed & Two-Handed) | Gear Item, Weapon Damage, Basic Stat Buff(s), Color Stat Buff(s), Active Ability/Abilities |
| Clothing                             | Gear Item, Basic Stat Buff(s), Color Stat Buff(s), Active Ability/Abilities                |
| Kernels                              | Passive Abilities                                                                          |
| Consumables & Baubles                | Effects                                                                                    |

### Roll Order

And here's the order in which stats should be rolled (though the only important thing is that Rarity, Color, and Gear Type are rolled before anything else):

1. Rarity
	1. Higher Luck stat = better odds for higher Gear Rarity
	2. Essence & Credit Value go up with Rarity
2. Color
3. Gear Type
4. Depending on gear type you'll roll the following:
	1. Weapons roll Weapon Damage
	2. Clothing rolls Clothing Stat Buff(s)
	3. Weapons and Clothing both roll
		1. Gear Item
		2. Color Stat Buff(s) (from the [[#Stat Buff Table]])
		3. Active Ability/Abilities
	4. Kernels roll Passive Abilities
	5. Consumables & Baubles roll Effects
5. Aesthetic

All Stat Buffs are better the higher your Luck is, and each piece of Gear (besides Consumables) can be upgraded into a piece of Gear of higher Rarity at your Local Node. This upgrades their Stat Buffs, Actives, Passives, and Bauble Effects and often adds new Stat Buffs and Actives for Weapons and Clothing.

### Some Tips for GM Gear Generation

- Each piece of gear takes about 10 rolls, so don't plan on doing this during a session!
- For each session just roll a bunch of gear before (depending on how many nodes, fights, and gear boxes you plan on giving them).
- Always roll for Rarity, but there's no need to necessarily roll for everything else if you don't want to or if it'll take too much time.
	- Choosing gear traits can also be thematic: for example you beat a virus that has poison powers the gear they drop might apply poison.

## Rarity

Roll d100
Meet or get below threshold to get that rarity!

|           | Common | Uncommon | Rare     | Epic       | Legendary |
| --------- | ------ | -------- | -------- | ---------- | --------- |
| **Luck ** | -      | 7 * luck | 3 * luck | 1.2 * luck | .4 * luck |
| 0         | 100    | 7        | 3        | 2          | 1         |
| 1         | 100    | 7        | 3        | 2          | 1         |
| 2         | 100    | 14       | 6        | 3          | 1         |
| 3         | 100    | 21       | 9        | 4          | 2         |
| 4         | 100    | 28       | 12       | 5          | 2         |
| 5         | 100    | 35       | 15       | 6          | 2         |
| 6         | 100    | 42       | 18       | 8          | 3         |
| 7         | 100    | 49       | 21       | 9          | 3         |
| 8         | 100    | 56       | 24       | 10         | 4         |
| 9         | 100    | 63       | 27       | 11         | 4         |
| 10        | 100    | 70       | 30       | 12         | 4         |
| 11        | 100    | 77       | 33       | 14         | 5         |
| 12        | 100    | 84       | 36       | 15         | 5         |
| 13        | 100    | 91       | 39       | 16         | 6         |
| 14        | 100    | 98       | 42       | 17         | 6         |
| 15        | -      | 100      | 45       | 18         | 6         |
| 16        | -      | 100      | 48       | 20         | 7         |
| 17        | -      | 100      | 51       | 21         | 7         |
| 18        | -      | 100      | 54       | 22         | 8         |
| 19        | -      | 100      | 57       | 23         | 8         |
| 20        | -      | 100      | 60       | 24         | 8         |
| 25        | -      | 100      | 75       | 30         | 10        |
| 30        | -      | 100      | 90       | 36         | 12        |
| 40        | -      | -        | 100      | 48         | 16        |
| 50        | -      | -        | 100      | 60         | 20        |

### Rarity Value

| Rarity    | Essence Value | Credit Value |
| --------- | ------------- | ------------ |
| Common    | 500           | 50           |
| Uncommon  | 1000          | 100          |
| Rare      | 2000          | 200          |
| Epic      | 5000          | 500          |
| Legendary | 10000         | 1000         |

## Color

| d6  | Type                         |
| --- | ---------------------------- |
| 1   | Neutral                      |
| 2   | Red                          |
| 3   | Blue                         |
| 4   | Green                        |
| 5   | Gray                         |
| 6   | Reroll, if 6 again Color Mix |

For Color Mixes, roll twice and write down *both* colors. Reroll Neutral and 6s.

## Gear Type

| d12 | Gear Type         | Description                                                                                       |
| --- | ----------------- | ------------------------------------------------------------------------------------------------- |
| 1   | One-Handed Weapon | Guns, swords, shields, staves, wands, rocket launchers, etc.                                      |
| 2   | Two-Handed Weapon | See above, but big so they have to be wielded with 2 hands                                        |
| 3   | Head              | Hats, helmets, headbands, diadems                                                                 |
| 4   | Torso             | Cloaks, shirts, armor                                                                             |
| 5   | Hands             | Gloves, gauntlets, bracelets                                                                      |
| 6   | Legs              | Pants, greaves                                                                                    |
| 7   | Feet              | Shoes, boots                                                                                      |
| 8   | Rings             | Rings!                                                                                            |
| 9   | Neck              | Necklaces, collars                                                                                |
| 10  | Kernels           | Grant passive abilities! Slots go up per level.                                                   |
| 11  | Consumables       | Healing items, etc. Keep these very limited.                                                      |
| 12  | Baubles           | Items that you keep in your inventory and grant buffs or level up after a certain amount of time. |

## Weapons

### Weapon Rarity Instructions

Weapons get the following:
- Basic Damage (determined by checking out [[#Weapon Damage]])
- Color Stat Buffs (which you roll on the Stat Buff table in the section that matches its Color)
- Basic Stat Buff(s) (determined by going to [[#Weapon Stat Buffs]] and then rolled on the Stat Buff table)
- Weapon Active(s)

If you ever roll the same Stat Buff more than once (or a normal and ✦ of the same Stat Buff), just reroll.

All Red and Blue weapons are melee, and Green weapons are ranged, and Gray weapons are ranged with an area of effect! 

For Neutral Weapons roll a 1d4 where 1-4 = Red-Gray, roll for a specific weapon of that color, and then take the weapon damage of the color you rolled for.

For Color Mix weapons just roll a specific item for the first color you rolled (or if you don't remember roll a d4 and on odds it's the first color and on the evens it's the second color). Also roll another Color Stat Buff (or **a** Color Stat Buff, if it's a Common item) for the second color rolled.

| Rarity    | Basic <br>Stat <br>Buff(s) | Color <br>Stat <br>Buffs | Weapon<br>Actives |
| --------- | -------------------------- | ------------------------ | ----------------- |
| Common    | 1                          | 0                        | 0 Actives         |
| Uncommon  | 1                          | 1                        | 1 Active          |
| Rare      | 1                          | 2                        | 1 Actives         |
| Epic      | 2                          | 2                        | 2 Actives         |
| Legendary | 2                          | 3                        | 2 Actives         |

### Weapon Stat Buffs

| d4 -->            | 1             | 2             | 3            | 4                | 5                 | 6             |
| ----------------- | ------------- | ------------- | ------------ | ---------------- | ----------------- | ------------- |
| One-Handed Weapon | Attack Plus ✦ | Damage Plus ✦ | Initiative ✦ | Movement Speed ✦ | Energy Conversion | Group XP Gain |
| Two-Handed Weapon | Attack Plus ✦ | Damage Plus ✦ | Armor ✦      | Defense DC ✦     | Energy Generation | HP Regen      |

### One-Handed Weapon Rolling Table

| #   | Red         | Blue           | Green          | Gray              |
| --- | ----------- | -------------- | -------------- | ----------------- |
| 1   | Dagger      | Buckler Shield | Pistol         | Wand              |
| 2   | Morningstar | Mace           | Crossbow       | Orb               |
| 3   | Shortsword  | Hammer         | Boomerang      | Totem             |
| 4   | Katar       | Club           | Snowball       | Crystal           |
| 5   | Rapier      | Shillelagh     | Shuriken       | Rod               |
| 6   | Scimitar    | Gauntlet       | Throwing Knife | Lantern           |
| 7   | Katana      |                | Javelin        | Ice Cube          |
| 8   | Machete     |                | Rock           | Pineapple         |
| 9   | Handaxe     |                | Uzi Gun        | Bomb              |
| 10  | Flail       |                | Coin           | Lightning Javelin |
| 11  | Pickaxe     |                | Sling          | Mirror            |
| 12  | Whip        |                | Atlatl         | Bell              |

### Two-Handed Weapon Rolling Table

| #   | Red                  | Blue                | Green         | Gray              |
| --- | -------------------- | ------------------- | ------------- | ----------------- |
| 1   | Lance                | Kite Shield         | Sniper Rifle  | Magic Staff       |
| 2   | Dual Scimitars       | Brass Knuckles      | Shortbow      | Grenade Launcher  |
| 3   | Knife and Broadsword | Quarterstaff        | Shotgun       | Caster Gloves     |
| 4   | Greatsword           | Nunchucks           | Longbow       | Statue            |
| 5   | Trident              | Greathammer         | Hand Cannon   | Astral Greatsword |
| 6   | Pollaxe              | Three-section Staff | Rifle         | Flute             |
| 7   | Odachi               | Eku                 | Boulder       | Guitar            |
| 8   | Ngao                 | Dual Gauntlets      | Harpoon Gun   | Rocket Launcher   |
| 9   | Spear/Glaive         |                     | Minigun       | Drum              |
| 10  | Scythe               |                     | Blunderbuss   | Trumpet           |
| 11  | Greataxe             |                     | Deck of Cards | Flamethrower      |
| 12  | Halberd              |                     | Blowgun       | Exploding Pumpkin |

### Weapon Damage

Ranged weapons don't run out of ammo. All Red and Blue Weapons are melee, and all Green and Gray weapons are ranged!

Green Weapons are single-target, and Gray Weapons do AOE dmg, where you pick a tile and do one attack roll attempting to damage everything in that tile and up to your Perception Stat away from that tile. 

Gray Weapons are either magical or ranged weapons that deal AOE damage. Feel free to customize what the magic or effect of a Gray Weapon looks like!

Neutral Weapons are melee if you roll a melee weapon and ranged if you roll a ranged weapon (see [[#Weapon Rarity Instructions]] above.

Color Mix weapons take the higher of the two damages if they're both ranged or both melee. If the mix includes a melee and ranged color then you can do melee and ranged attacks using the damage of the melee color for melee attacks and the damage of the ranged color for ranged attacks.

#### One-Handed

|           | Red  | Blue, <br>Green | Gray |
| --------- | ---- | --------------- | ---- |
| Common    | d8   | d6              | d2   |
| Uncommon  | d10  | d8              | d4   |
| Rare      | d12  | d10             | d6   |
| Epic      | 2d8  | d12             | d8   |
| Legendary | 2d10 | 2d8             | d10  |

- d2 = d4 ÷ 2, round up

#### Two-Handed

|           | Red  | Blue, <br>Green | Gray |
| --------- | ---- | --------------- | ---- |
| Common    | d10  | d8              | d4   |
| Uncommon  | d12  | d10             | d6   |
| Rare      | 2d8  | d12             | d8   |
| Epic      | 2d10 | 2d8             | d10  |
| Legendary | 2d12 | 2d10            | d12  |

### Weapon Actives

See [[Gear Actives]] for Weapon Actives!

## Clothing

### Clothing Rarity Instructions

Clothing gets the following:
- Color Stat Buffs (which you roll on the Stat Buff table in the section that matches its Color)
- Basic Stat Buff(s) (determined by going to [[#Clothing Stat Buffs]] and then rolled on the Stat Buff table)
- Active(s)

If you ever roll the same Stat Buff more than once (or a - and + of the same Stat Buff), just reroll.

Also if your roll a Color Mix, roll another Color Stat Buff (or **a** Color Stat Buff, if it's a Common item) for the second color rolled.

| Rarity    | Basic <br>Stat <br>Buff(s) | Color <br>Stat <br>Buffs | Actives   |
| --------- | -------------------------- | ------------------------ | --------- |
| Common    | 1                          | 0                        | 0 Actives |
| Uncommon  | 1                          | 1                        | 1 Active  |
| Rare      | 1                          | 2                        | 1 Actives |
| Epic      | 2                          | 2                        | 2 Actives |
| Legendary | 2                          | 3                        | 2 Actives |

### Clothing Stat Buffs

Roll a d4 for which of these stat buffs you get, and then calculate their value with the [[#Stat Buff Table]] below.

| d4 --> | 1                | 2             | 3                 | 4                 | 5             | 6                 |
| ------ | ---------------- | ------------- | ----------------- | ----------------- | ------------- | ----------------- |
| Head   | Perception ✦     | Initiative ✦  | Group XP Gain     | Resell Value      | HP ✦          | Range ✦           |
| Torso  | HP ✦             | Armor ✦       | Defense DC ✦      | HP Regen          | Kernel Slots  | Inventory Slots ✦ |
| Hands  | Hacking ✦        | Attack Plus ✦ | Damage Plus ✦     | Range ✦           | Resell Value  | Luck ✦            |
| Legs   | Movement Speed ✦ | Armor ✦       | Energy Generation | Inventory Slots ✦ | Defense DC ✦  | Kernel Slots      |
| Feet   | Movement Speed ✦ | Initiative ✦  | Energy Generation | HP Regen          | Group XP Gain | Energy Conversion |
| Rings  | Luck ✦           | Range ✦       | Energy Conversion | Energy Cap ✦      | HP ✦          | Resell Value      |
| Neck   | Energy Cap ✦     | HP ✦          | Group XP Gain     | Energy Cap ✦      | Luck ✦        | Resell Value      |


### Clothing Item Rolling Table

Roll a dice with as many sides as there are Gear Item options.

| #   | 1 One-Handed | 2 Two-Handed         | 3 Head                      | 4 Torso          | 5 Hands    | 6 Legs  | 7 Feet         | 8 Rings    | 9 Neck   | #   |
| --- | ------------ | -------------------- | --------------------------- | ---------------- | ---------- | ------- | -------------- | ---------- | -------- | --- |
| 1   | Pistol       | Longsword            | Hat                         | Cloak + tunic    | Gloves     | Pants   | Boots          | Large Gem  | Necklace | 1   |
| 2   | Shortsword   | Rifle                | Helmet                      | T-Shirt          | Gauntlets  | Shorts  | Sneakers       | Small Band | Chain    | 2   |
| 3   | Shield       | Sniper Rifle         | Headband                    | Longsleeve Shirt | Bracelets  | Greaves | Platform Shoes | Thick Band | Collar   | 3   |
| 4   | Staff        | Hammer               | Diadem                      | Hoodie           | Hand Chain | Baggy   | Sandals        | Small Gem  | Choker   | 4   |
| 5   | Wand         | Tower Shield         | Facemask                    | Armor            |            | Skirt   | Heels          |            |          | 5   |
| 6   | Dagger       | Maul                 | Goggles                     | Shirt + cape     |            | Kilt    | Flats          |            |          | 6   |
| 7   | Handaxe      | Falchion             | Earrings or Other Piercings | Dress            |            |         |                |            |          | 7   |
| 8   | Hammer       | Odachi (Long Katana) | Glasses or Shades           | Jumpsuit         |            |         |                |            |          | 8   |
| 9   | Mace         | Greataxe             |                             |                  |            |         |                |            |          | 9   |
| 10  | Rapier       | Rocket Launcher      |                             |                  |            |         |                |            |          | 10  |
| 11  | Dart         |                      |                             |                  |            |         |                |            |          | 11  |
| 12  | Katana       |                      |                             |                  |            |         |                |            |          | 12  |

Platform Shoes could be heels, large sole, etc.

### Actives

Roll your actives from this page: [[Gear Actives]]

## Odd Items

### Kernels

Kernels are special items that grant passives, abilities that are always on and modify how webrunning works. They can be anything from letting you spend essence before entering a node to give your party advantages, increasing the amount of movement you have, giving you plusses on melee or ranged attacks, or increasing resistance of certain effects.

To start, make sure that you have rolled for Rarity, Color, Gear Type, and Aesthetic and recorded Essence Value and Credit Value. Then roll Kernel passives from this page: [[Kernels]]

### Baubles

Baubles are pieces of gear that sit in your inventory and grant stat ups, "eggs" that transform into valuable gear after a certain amount of time, or ones that give you other stat buffs or abilities.

To start, make sure that you have rolled for Rarity, Color, Gear Type, and Aesthetic and recorded Essence Value and Credit Value. Then roll Bauble type from this page: [[Baubles]]

### Consumables

Consumables are one-use items like healing pods, respec gems, or items that let you upgrade a piece of gear or reroll its stats.

To start, make sure that you have rolled for Rarity, Color, Gear Type, and Aesthetic and recorded Essence Value and Credit Value. Then roll Consumable effects from this page: [[Consumables]]

## Aesthetic

Roll below (or pick) an aesthetic for the piece of gear!

| d8  | Aesthetic        |                                                                                                                                                                              |
| --- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Valdan           | Cyberpunk, all synthetic materials, gnarly metals and high-tech gear                                                                                                         |
| 2   | Ydilikian        | Medieval, iron and linens and suits of armor                                                                                                                                 |
| 3   | Asticarian       | Cotton and polyester, normal metals and woods (think "modern" aesthetic)                                                                                                     |
| 4   | Rtolkan          | Linens and brass and copper and gears and suits and lots of wood (think steampunky)                                                                                          |
| 5   | Pbosh            | Heavy furs and leathers, heavy metals (think viking)                                                                                                                         |
| 6   | Cortez (Western) | Cowboys, leathers, rugged materials and sturdy metals                                                                                                                        |
| 7   | Cortez (Pirates) | Tunics and colors and gold and flourishing designs                                                                                                                           |
| 8   | Jiyyagan         | Like survivor stuff, all plant matter and rough alien animal leather and bone shards and massive pieces of bug creature chitin (think jungly)                                |
| 9   | Exozinik         | Shiny, chrome metals and futuristic materials: breathable rubbers and plastics, light metals of all sorts of colors, brighter and cleaner than the cyberpunk aesthetic above |
| 10  | Drokk            | Heavy linens, carved stone, and lots and lots of precious metals                                                                                                             |

# Stat Buff Table

Always round down (min of 1)

L=Luck
D=how many digits in your Luck stat

| #       | Stats                | Common | Uncommon | Rare   | Epic   | Legendary |
| ------- | -------------------- | ------ | -------- | ------ | ------ | --------- |
| Neutral | ---                  | ---    | ---      | ---    | ---    | ---       |
| 1       | Luck                 | 1      | 2        | 3      | 5      | 8         |
| 2       | Luck ✦               | 2      | 3        | 4      | 6      | 9         |
| 3       | Luck ✦✦              | 3      | 4        | 5      | 7      | 10        |
| 4       | Inventory Slots      | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 5       | Inventory Slots ✦    | L÷3    | L÷2      | L      | Lx1.25 | Lx1.5     |
| 6       | Energy Cap           | L÷5    | L÷4      | L÷3    | L÷2    | L         |
| 7       | Energy Cap ✦         | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 8       | Kernel Slots (max 3) | L÷5    | L÷4      | L÷3    | L÷2    | L         |
| Red     | ---                  | ---    | ---      | ---    | ---    | ---       |
| 1       | Luck                 | 1      | 2        | 3      | 5      | 8         |
| 2       | Attack Plus          | L÷5    | L÷4      | L÷3    | L÷2    | L         |
| 3       | Attack Plus ✦        | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 4       | Damage Plus          | L÷5    | L÷4      | L÷3    | L÷2    | L         |
| 5       | Damage Plus ✦        | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 6       | Power                | reroll | reroll   | reroll | D      | D+1       |
| Blue    | ---                  | ---    | ---      | ---    | ---    | ---       |
| 1       | Luck                 | 1      | 2        | 3      | 5      | 8         |
| 2       | HP                   | L÷2    | L        | Lx1.25 | Lx1.5  | Lx2       |
| 3       | HP ✦                 | L      | Lx1.25   | Lx1.5  | Lx1.75 | Lx2.5     |
| 4       | Defense DC           | L÷5    | L÷4      | L÷3    | L÷2    | L         |
| 5       | Defense DC ✦         | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 6       | Armor                | L÷5    | L÷5      | L÷4    | L÷4    | L÷3       |
| 7       | Armor ✦              | L÷4    | L÷4      | L÷3    | L÷3    | L÷2       |
| 8       | Defense              | reroll | reroll   | reroll | D      | D+1       |
| Green   | ---                  | ---    | ---      | ---    | ---    | ---       |
| 1       | Luck                 | 1      | 2        | 3      | 5      | 8         |
| 2       | Initiative           | L÷5    | L÷4      | L÷3    | L÷2    | L         |
| 3       | Initiative ✦         | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 4       | Movement Speed       | L÷2    | L        | Lx1.25 | Lx1.5  | Lx2       |
| 5       | Movement Speed ✦     | L      | Lx1.25   | Lx1.5  | Lx1.75 | Lx2.5     |
| 6       | Range                | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 7       | Range ✦              | L÷3    | L÷2      | L      | Lx1.25 | Lx1.5     |
| 8       | Speed                | reroll | reroll   | reroll | D      | D+1       |
| Gray    | ---                  | ---    | ---      | ---    | ---    | ---       |
| 1       | Luck                 | 1      | 2        | 3      | 5      | 8         |
| 2       | Perception           | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 3       | Perception ✦         | L÷3    | L÷2      | L      | Lx1.25 | Lx1.5     |
| 4       | Hacking              | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 5       | Hacking ✦            | L÷3    | L÷2      | L      | Lx1.25 | Lx1.5     |
| 6       | Intelligence         | reroll | reroll   | reroll | D      | D+1       |
| Other   | ---                  | ---    | ---      | ---    | ---    | ---       |
| 1       | Energy Generation    | 1      | 1        | 2      | 2      | 3         |
| 2       | Energy Conversion    | 1      | 2        | 3      | 4      | 5         |
| 3       | Group XP Gain        | 1      | 2        | 3      | 4      | 5         |
| 4       | HP Regen             | L÷4    | L÷3      | L÷2    | L      | Lx1.25    |
| 5       | Resell Value         | x1.25  | x1.5     | x1.75  | x2     | x2.5      |

## Clothing Buff-Exclusive Stats

The stat buffs in the Basic category above can only be rolled when choosing Clothing Basic Stat Buffs, and so can only apply to certain types of clothing.

- Energy
	- Energy Generation: How much extra Energy you generate during your Start Phase. Energy Color generated is the same as the piece of gear.
	- Energy Conversion: Once per turn at the Start Phase after energy generation you may convert this amount of energy into the color of the item. 
	- For both Energy Generation and Conversion, if the item is a Color Mix you may choose either of the colors to generate or convert to, and if it's Neutral you can choose any color.
- Group XP Gain: The amount of XP each member of your group gains every time you clear a node.
- HP Regen: The amount of HP you regain every time you move to a new node.
- Resell Value: Can sell gear for more than usual (does not apply to essence gained from destroying an item). Multiples of this buff **add** together (e.g. a x1.25 and a x2 become x2.25).
