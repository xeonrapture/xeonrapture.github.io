[[Spaceship Details]]

# Basics
In combat, your ship only has so much energy, which is determined by the core. Most of the things you do with the ship will take energy.

If you're doing an encounter where you want characters to be able to use their own class abilities, where you're dealing with smaller vehicles or ships and are maybe even able to have characters jump between vehicles use the [[Vehicle Rules]] instead!

# Ship Sizes
In a small ship, all functionality is confined to the cockpit and there are no ship sections to get damaged individually.

In a medium-sized ship, your crew members may switch stations once per turn. 

In a large ship, your party members will be conducting a large crew made up of smaller teams which will need to be allocated. These teams may switch stations once per turn.

# Stats
Ships have almost the same stats as mechs. 

Here are the Main Stats that you'll use to make checks:

| Main Stat  | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| Agility    | How quick and dexterous your ship is.                                    |
| Strength   | How strong your ship is: for ramming, towing, and moving through debris. |
| Durability | How tough your ship is: for defense and resistance rolls.                |
| Aim        | How good your ships guns are at aiming.                                  |

These stats generally range from 0-100! They will generally be lower than the comparable Mech Stats because you add the Station Operator stat to the Ship stat.

And here are the Secondary Stats: 

| **Secondary Stat** | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| HP                 | Ship health (around 50 for a small ship and into the thousands for big ones)                      |
| Shield Strength    | A dmg threshold that beam dmg has to overcome in order to break through your shields and deal dmg |
| Move Speed         | How far you can move in a turn                                                                    |
| Passenger Capacity | How many passengers the ship can hold                                                             |
| **Energy**         |                                                                                                   |
| Energy Gain        | How much energy your ship gets per turn                                                           |
| Energy Capacity    | How much total energy your ship can hold                                                          |
| Energy             | How much energy your ship has stored right now                                                    |
| **Amethyst**       |                                                                                                   |
| Amethyst Capacity  | Your total amethyst energy capacity, used for warprunning                                         |
| Amethyst Energy    | Your total amethyst energy at the moment (costs 1 credit per AE)                                  |
| AE Charge Rate     | The minimum rate at which your ship synthesizes amethyst energy                                   |
| **Storage**        |                                                                                                   |
| Water Storage      | Total water capacity                                                                              |
| Food Storage       | Total food capacity                                                                               |
| Cargo Capacity     | How much cargo the ship can hold; could be in pounds, tons, or whatever                           |

## More Deets
- Warprunning and AE
	- It costs 1 AE to move 1,000 Light Years (1K light years = 1 Amethyst Unit or AU)! So it would take 200,000 AE to travel the entire distance of the Kotharak Field lengthwise. Good thing there are portals here and there.
	- AE Charge Rate is the rate at which your ship can synthesize amethyst energy when you're in the middle of nowhere and have to make purple xeon from gray xeon. If you're near a planet or a star or any source of gravity or heat you'll gain AE twice as fast!
		- If you're in a void, such as the space between currents, you gain a fourth of the AE that you normally would! Sort of a doldrums situation
- Water Storage and Food Storage use is usually 10 units of food and water per person per day, and can be reduced to 5 per person per day if you're rationing. Between 5 and 3 you'll be taking a level of wear every week, and anything below 3 and you'll be taking a level of wear each day.

# Stations and Actions
There are several stations your characters can be at and many things they can do at those stations. You must have a person at the station in order for your ship to take any of these actions! Each action that takes an energy is denoted with a "\*".

| Station        | Available Actions                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------- |
| Cockpit        | Piloting (Agi), defending (Agi or Dura), ramming (Str)*, vessel communication, front guns (Aim) |
| Guns           | Shooting (Aim)*                                                                                 |
| Core           | Boosting movement\*, recharging shields*                                                        |
| Terminal Room  | Hacking* (Wit) (if ship has hacking capability)                                                 |
| Hooks, Tethers | Tethering other ships or objects* (Aim)                                                         |

# Ship Sections
Your ship has a variety of sections that have different functionalities and have a certain amount of health before they go down. When taking damage, both the specific part of the ship and the ship as a whole will take damage. 

It takes one energy to repair it 10 HP, you have to be at a station to repair it, and if the section is offline it will go online the turn after being repaired. Each station usually has between 20 and 100 HP (up to 500 in very large ships).

| Ship Section     | Function  | Result of Damage                          |
| ---------------- | --------- | ----------------------------------------- |
| Cockpit          | Piloting  | Loss of steering and thruster control     |
| Guns             | Shooting  | Loss of attack capabilities from that gun |
| Shield Generator | Shielding | Loss of shield capabilities               |

# Gameplay
You roll 1d100 on any check you do with the ship. People must man the separate stations, and if anybody has a bonus to actions with their specific station then they can take their bonus and add it to ship checks at that station. Make sure to multiply the stat by 5 before adding it, and if you would add a proficiency die take the half of the max you could roll on the die and multiply that by 5 before adding!

For combat, initiative is decided by a contested, flat d100 roll between each group's leader. Initiative is taken between ships, and the crew members decide together what the ship will do.

## Attacking
There are different types of guns that do different things, and you may target different parts of a ship in order to damage functionality. See the ship sections for results of damage to certain areas.

You may also ram a vessel to attack, which does a certain amount of dmg depending on your own ship. If you don't have the right shielding on the front of your ship, however, it will also deal half the dmg you deal back to your own ship.

> [!NOTE] Attack Roll Formula
> 1d100 + Stat (Aim for guns or Str for ramming) + Operator Stat (Operator's Int or Wit x 5 for guns or Pilot's Int or Wit x 5 for ramming) = Attack Roll

## Defending
When defending against an attack you may decide to use either Agility or Durability to defend and then your enemy will roll against your Defense DC to see whether they hit you or not. To calculate your Defense DC use this formula: 

> [!NOTE] Defense DC Formula
> 50 + Stat (Agi or Dura) + Piloting Stat (Pilot's Int or Wit x 5) = Defense DC

When resisting an effect use your Durability Defense DC unless stated otherwise!

## Energy
Your ship can use as much energy a turn as you wish. You have half your max stored up outside of combat, and then your energy capacity opens up to your full max as you enter "combat mode".

For ships with both a red core and a jump core, this energy is generated per turn from your red core, and is separate from your store of jump energy, which is a different color of xeon.

## Hacking
If you have a hacking module then you may attempt to hack a ship or a mech!

- Get In (1 E): Do a Wit check vs the Wit of the operator or the person in the Terminal room of the opposite ship or a DC of 10 if there's no one in their Terminal room. If you succeed then you've hacked the ship!
- Disrupt (1 E): Pick a section of the ship or mech (list below). Do another Wit check vs Wit of defender or DC of 10. If you succeed, this section is offline and can't be used until it's brought back online!

Bringing a section back online is done from the Terminal Room, takes 1 E, and takes either a contest with whoever's in the Terminal Room or a DC 10 Wit check if no one is there.

Shutting someone out takes 1 E and takes either a Wit contest with whoever's in the Terminal Room or automatically wins if no one is there.

If someone's in the Cockpit they may defend a Hacking attempt targeting the Cockpit.

### Sections to Hack
Mechs
- Arms
	- Gives a -20 to attack rolls with Agi, Str, or Aim when hacked
- Head 
	- Gives a -20 to Aim when hacked
- Any Drone

Ships
- Cockpit
- Any specific gun section
- Engine
- Any other section besides the terminal room

## Docking
To attempt to dock, do an Agi piloting contest vs Dura or Agi piloting check of enemy. If you win you successfully dock and can cut a hole or open a door into their ship.

## Reaching 0 HP
If your ship reaches 0 HP it then stalls. Depending on your ship the gravity and/or power may go out, but all ships have backup atmosphere generators so you usually will have at least several hours of atmosphere left.

You may be looted, striped of parts, or whatever your assailant wants to do with you, and you might just have to send out a distress beacon and hope someone helps you! Depending on what's been done to your ship you might also be able to repair it and make an emergency jump.