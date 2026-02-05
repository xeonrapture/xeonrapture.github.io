"""
https://xeonrapture.com/Public+XR+Info/Xeon+Rapture#Classes
"""

class AbilityCatalog:

    def __init__(self, color, color2 = None):
        self.color = color
        self.color2 = color2

        if color2:
            self.colorMix = self.color + " " + self.color2

        self.abilities = {}

class WeaponActiveCatalog(AbilityCatalog):
    def __init__(self, color, color2):
        super().__init__(color, color2)
        
        if not color2:
            match self.color:
                case "Neutral":
                    self.abilities = {
                        "Bomb" : {
                            "Tier I": "Do a ranged AOE attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- Deal d8+Damage Plus damage to any target whose Defense DC you beat",
                            "Tier II": "Do a ranged AOE attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- Deal 2d10+Damage Plus damage to any target whose Defense DC you beat",
                            "Tier III": "Do a ranged AOE attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- Deal 3d12+Damage Plus damage to any target whose Defense DC you beat",
                            "Tier IV": "Do a ranged AOE attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- Deal 8d8+Damage Plus damage to any target whose Defense DC you beat"
                        },
                        "Emptiness as Fuel" : {
                            "Tier I": "Do a melee attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d6 of damage per every 3 empty inventory slots + your Damage Plus",
                            "Tier II": "Do a melee attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d8 of damage per every 3 empty inventory slots + your Damage Plus",
                            "Tier III": "Do a melee attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage per every 2 empty inventory slots + your Damage Plus",
                            "Tier IV": "Do a melee attack:\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d12 of damage per every 2 empty inventory slots + your Damage Plus"
                        },
                        "Neutral Combo Attack" : {
                            "Tier I": "You and an ally do a melee combo attack (ally spends 1 Energy):\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, deal 2d10 damage + both you and your ally's Damage Plus",
                            "Tier II": "You and an ally do a melee combo attack (ally spends 1 Energy):\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, deal 4d12 damage + both you and your ally's Damage Plus",
                            "Tier III": "You and an ally do a melee combo attack (ally spends 2 Energy):\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, deal 12d8 damage + both you and your ally's Damage Plus",
                            "Tier IV": "You and an ally do a melee combo attack (ally spends 2 Energy):\n- Add Basic Stat of your choice and your Attack Plus to your attack roll\n- If you hit, deal 14d10 damage + both you and your ally's Damage Plus"
                        }
                    }
                case "Red":
                    self.abilities = {
                        "Heat Cone" : {
                            "Tier I": "Do a cone AOE attack:\n- Add Power and your Attack Plus to your attack roll\n- Cone has a 90° area and must be done along tile lines\n- Deal d12+Damage Plus damage to any target whose Defense DC you beat",
                            "Tier II": "Do a cone AOE attack:\n- Add Power and your Attack Plus to your attack roll\n- Cone has a 90° area and must be done along tile lines\n- Deal 4d8+Damage Plus damage to any target whose Defense DC you beat",
                            "Tier III": "Do a cone AOE attack:\n- Add Power and your Attack Plus to your attack roll\n- Cone has a 90° area and must be done along tile lines\n- Deal 6d10+Damage Plus damage to any target whose Defense DC you beat",
                            "Tier IV": "Do a cone AOE attack:\n- Add Power and your Attack Plus to your attack roll\n- Cone has a 90° area and must be done along tile lines\n- Deal 8d12+Damage Plus damage to any target whose Defense DC you beat"
                        },
                        "Flaming Smite" : {
                            "Tier I": "Do a melee attack:\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d12 of damage + your Damage Plus and apply a stack of Burn",
                            "Tier II": "Do a melee attack:\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing a 2d8 of damage + your Damage Plus and applying a stack of Burn",
                            "Tier III": "Do a melee attack:\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing a 2d10 of damage + your Damage Plus and applying a stack of Burn",
                            "Tier IV": "Do a melee attack:\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing a 2d12 of damage + your Damage Plus and applying a stack of Burn"
                        },
                        "Red Combo Attack" : {
                            "Tier I": "You and an ally do a melee combo attack (ally spends 1 Energy):\n- Add Power and your Attack Plus to your attack roll\n- If you hit, deal 2d12 damage + both you and your ally's Damage Plus",
                            "Tier II": "You and an ally do a melee combo attack (ally spends 1 Energy):\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing 3d8 damage + both you and your ally's Damage Plus",
                            "Tier III": "You and an ally do a melee combo attack (ally spends 2 Energy):\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing 3d10 damage + both you and your ally's Damage Plus",
                            "Tier IV": "You and an ally do a melee combo attack (ally spends 2 Energy):\n- Add Power and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing 3d12 damage + both you and your ally's Damage Plus"
                        }
                    }
                case "Blue":
                    self.abilities = {
                        "Ramming Speed" : {
                            "Tier I": "Use Movement tiles to do a ramming attack:\n- Run up to half your Movement Speed in a straight line (no wonky movement across tiles, only straights and diagonals)\n- Add Defense and your Attack Plus to an attack roll\n- Deal each enemy that you hit a d10 of damage + Damage Plus",
                            "Tier II": "Use Movement tiles to do a ramming attack:\n- Run up to 3/4 your Movement Speed in a straight line (no wonky movement across tiles, only straights and diagonals)\n- Add Defense and your Attack Plus to an attack roll\n- Deal each enemy that you hit a d12 of damage + Damage Plus\n- You may run through solid wood this way",
                            "Tier III": "Use Movement tiles to do a ramming attack:\n- Run up to all your Movement Speed in a straight line (no wonky movement across tiles, only straights and diagonals)\n- Add Defense and your Attack Plus to an attack roll\n- Deal each enemy that you hit a 2d8 of damage + Damage Plus\n- You may run through solid wood and stone this way",
                            "Tier IV": "Use Movement tiles to do a ramming attack:\n- Run up to all your Movement Speed in a straight line (no wonky movement across tiles, only straights and diagonals)\n- Add Defense and your Attack Plus to an attack roll\n- Deal each enemy that you hit a 2d8 of damage + Damage Plus\n- You may run through solid wood, stone, and metal this way"
                        },
                        "Freezing Smite" : {
                            "Tier I": "Do a melee attack:\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus and apply a stack of Freeze",
                            "Tier II": "Do a melee attack:\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing a 1d12 of damage + your Damage Plus and applying a stack of Freeze",
                            "Tier III": "Do a melee attack:\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing a 2d8 of damage + your Damage Plus and applying a stack of Freeze",
                            "Tier IV": "Do a melee attack:\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing a 2d10 of damage + your Damage Plus and applying a stack of Freeze"
                        },
                        "Blue Combo Attack" : {
                            "Tier I": "You and an ally protect a friend in range (ally spends 1 Energy):\n- Can be done at any time during a round when an enemy attacks an ally\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, nullify the damage the enemy would have dealt and deal 2d10 damage + both you and your ally's Damage Plus",
                            "Tier II": "You and an ally protect a friend in range (ally spends 1 Energy):\n- Can be done at any time during a round when an enemy attacks an ally\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, nullify the damage the enemy would have dealt and deal 4d12 damage + both you and your ally's Damage Plus",
                            "Tier III": "You and an ally protect a friend in range (ally spends 2 Energy):\n- Can be done at any time during a round when an enemy attacks an ally\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, nullify the damage the enemy would have dealt and deal 12d8 damage + both you and your ally's Damage Plus",
                            "Tier IV": "You and an ally protect a friend in range (ally spends 2 Energy):\n- Can be done at any time during a round when an enemy attacks an ally\n- Add Defense and your Attack Plus to your attack roll\n- If you hit, nullify the damage the enemy would have dealt and deal 14d10 damage + both you and your ally's Damage Plus"
                        }
                    }
                case "Green":
                    self.abilities = {
                        "Clone Bullet" : {
                            "Tier I": "Do a ranged attack against up to 2 targets:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus\n- Attack goes behind cover",
                            "Tier II": "Do a ranged attack against up to 3 targets:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 2d12 of damage + your Damage Plus\n- Attack goes behind cover",
                            "Tier III": "Do a ranged attack against up to 4 targets:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 6d8 of damage + your Damage Plus\n- Attack goes behind cover",
                            "Tier IV": "Do a ranged attack against up to 5 targets:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 8d10 of damage + your Damage Plus\n- Attack goes behind cover"
                        },
                        "Poison Bullet" : {
                            "Tier I": "Do a ranged attack:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus and apply a stack of Poison",
                            "Tier II": "Do a ranged attack:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing a 1d12 of damage + your Damage Plus and applying a stack of Poison",
                            "Tier III": "Do a ranged attack:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing a 2d8 of damage + your Damage Plus and applying a stack of Poison",
                            "Tier IV": "Do a ranged attack:\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing a 2d10 of damage + your Damage Plus and applying a stack of Poison"
                        },
                        "Green Combo Attack" : {
                            "Tier I": "You and an ally do a ranged combo attack (ally spends 1 Energy):\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, deal 2d10 damage + both you and your ally's Damage Plus\n- Does 2d12 damage + Damage Plusses instead if the ally is within melee range",
                            "Tier II": "You and an ally do a ranged combo attack (ally spends 1 Energy):\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, deal 4d12 damage + both you and your ally's Damage Plus\n- Does 6d8 damage + Damage Plusses instead if the ally is within melee range",
                            "Tier III": "You and an ally do a ranged combo attack (ally spends 1 Energy):\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, deal 12d8 damage + both you and your ally's Damage Plus\n- Does 12d10 damage + Damage Plusses instead if the ally is within melee range",
                            "Tier IV": "You and an ally do a ranged combo attack (ally spends 1 Energy):\n- Add Speed and your Attack Plus to your attack roll\n- If you hit, deal 14d10 damage + both you and your ally's Damage Plus\n- Does 14d12 damage + Damage Plusses instead if the ally is within melee range"
                        }
                    }
                case "Gray":
                    self.abilities = {
                        "Vulnerabilize" : {
                            "Tier I": "Do a ranged attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus and give the target -1 Defense DC and +1 damage against them till your next Start Turn.",
                            "Tier II": "Do a ranged attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 2d12 of damage + your Damage Plus and give the target -2 Defense DC and +2 damage against them till your next Start Turn.",
                            "Tier III": "Do a ranged attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 6d8 of damage + your Damage Plus and give the target -3 Defense DC and +3 damage against them till your next Start Turn.",
                            "Tier IV": "Do a ranged attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 8d10 of damage + your Damage Plus and give the target -5 Defense DC and +5 damage against them till your next Start Turn."
                        },
                        "Empowered AOE Attack" : {
                            "Tier I": "Do a ranged AOE attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.5\n- Deal d8+Damage Plus damage to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE",
                            "Tier II": "Do a ranged AOE attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.75\n- Do two attacks with d10+Damage Plus damage each to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE",
                            "Tier III": "Do a ranged AOE attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2\n- Do three attacks with d12+Damage Plus damage each to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE",
                            "Tier IV": "Do a ranged AOE attack:\n- Add Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2.5\n- Do four attacks with 2d8+Damage Plus damage each to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE"
                        },
                        "Gray Combo Attack" : {
                            "Tier I": "You and an ally do a ranged combo attack (ally spends 1 Energy):\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, both you and your ally may auto-hit with a Tier I Active of your choice (you choose who hits first)\n- Melee Actives can be done at range\n- AOE Actives only autohit the combo attack target (you must do an attack roll to hit anyone else in range)",
                            "Tier II": "You and an ally do a ranged combo attack (ally spends 1 Energy):\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, both you and your ally may auto-hit with a Tier II or lower Active of your choice (you choose who hits first)\n- Melee Actives can be done at range\n- AOE Actives only autohit the combo attack target (you must do an attack roll to hit anyone else in range)",
                            "Tier III": "You and an ally do a ranged combo attack (ally spends 2 Energy):\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, both you and your ally may auto-hit with a Tier III or lower Active of your choice (you choose who hits first)\n- Melee Actives can be done at range\n- AOE Actives only autohit the combo attack target (you must do an attack roll to hit anyone else in range)",
                            "Tier IV": "You and an ally do a ranged combo attack (ally spends 2 Energy):\n- Add Intelligence and your Attack Plus to your attack roll\n- If you hit, both you and your ally may auto-hit with a Tier IV or lower Active of your choice (you choose who hits first)\n- Melee Actives can be done at range\n- AOE Actives only autohit the combo attack target (you must do an attack roll to hit anyone else in range)"
                        }
                    }
        elif color2:
            match self.colorMix:
                case "Red Blue" | "Blue Red":
                    self.abilities = {
                        "Frostburn Smite" : {
                            "Tier I": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d12 of damage + your Damage Plus and apply a stack of Burn and a stack of Frozen",
                            "Tier II": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing a 2d8 of damage + your Damage Plus and applying a stack of Burn and a stack of Frozen",
                            "Tier III": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing a 2d10 of damage + your Damage Plus and applying a stack of Burn and a stack of Frozen",
                            "Tier IV": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing a 2d12 of damage + your Damage Plus and applying a stack of Burn and a stack of Frozen"
                        },
                        "Self-Defense" : {
                            "Tier I": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d12 of damage + your Damage Plus and gain a +2 Defense DC till your next Start Turn",
                            "Tier II": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 4d8 of damage + your Damage Plus and gain a +3 Defense DC till your next Start Turn",
                            "Tier III": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 6d10 of damage + your Damage Plus and gain a +4 Defense DC till your next Start Turn",
                            "Tier IV": "Do a melee attack:\n- Add Power or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 8d12 of damage + your Damage Plus and gain a +5 Defense DC till your next Start Turn"
                        }
                    }
                case "Red Green" | "Green Red":
                    self.abilities = {
                        "Life Sap" : {
                            "Tier I": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus and heal yourself 5 HP",
                            "Tier II": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing 2d12 damage + your Damage Plus and heal yourself 10 HP",
                            "Tier III": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing 6d8 damage + your Damage Plus and heal yourself 15 HP",
                            "Tier IV": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing 8d10 damage + your Damage Plus and heal yourself 20 HP"
                        },
                        "Poisonburn Smite" : {
                            "Tier I": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus and apply a stack of Poison and a stack of Burn",
                            "Tier II": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing a 1d12 of damage + your Damage Plus and applying a stack of Poison and a stack of Burn",
                            "Tier III": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing a 2d8 of damage + your Damage Plus and applying a stack of Poison and a stack of Burn",
                            "Tier IV": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing a 2d10 of damage + your Damage Plus and applying a stack of Poison and a stack of Burn"
                        }
                    }
                case "Blue Green" | "Green Blue":
                    self.abilities = {
                        "Poisonfreeze Smite" : {
                            "Tier I": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d10 of damage + your Damage Plus and apply a stack of Poison and a stack of Burn",
                            "Tier II": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do two attacks each dealing a 1d12 of damage + your Damage Plus and applying a stack of Poison and a stack of Burn",
                            "Tier III": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do three attacks each dealing a 2d8 of damage + your Damage Plus and applying a stack of Poison and a stack of Burn",
                            "Tier IV": "Do a ranged attack:\n- Add Speed or Power and your Attack Plus to your attack roll\n- If you hit, do four attacks each dealing a 2d10 of damage + your Damage Plus and applying a stack of Poison and a stack of Burn"
                        },
                        "Reinforcing Strike" : {
                            "Tier I": "Do a ranged attack:\n- Add Speed or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d8 of damage + your Damage Plus and gain a +2 Defense DC till your next Start Turn",
                            "Tier II": "Do a ranged attack:\n- Add Speed or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing 2d10 damage + your Damage Plus and gain a +3 Defense DC till your next Start Turn",
                            "Tier III": "Do a ranged attack:\n- Add Speed or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing 3d12 damage + your Damage Plus and gain a +4 Defense DC till your next Start Turn",
                            "Tier IV": "Do a ranged attack:\n- Add Speed or Defense and your Attack Plus to your attack roll\n- If you hit, do an attack dealing 8d8 damage + your Damage Plus and gain a +5 Defense DC till your next Start Turn"
                        }
                    }
                case "Blue Gray" | "Gray Blue":
                    self.abilities = {
                        "FIGHT ME" : {
                            "Tier I": "Do an AOE attack with yourself as the centerpoint (don't deal yourself damage):\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- If you hit any of them, deal d6+Damage Plus damage and their first attack on their turn must be against you\n- They do their attack against you with a -2 Attack Plus.",
                            "Tier II": "Do an AOE attack with yourself as the centerpoint (don't deal yourself damage):\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- If you hit any of them, deal d6+Damage Plus damage and their first two attacks on their turn must be against you\n- They do their attacks against you with a -3 Attack Plus.",
                            "Tier III": "Do an AOE attack with yourself as the centerpoint (don't deal yourself damage):\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- If you hit any of them, deal d6+Damage Plus damage and their first three attacks on their turn must be against you\n- They do their attacks against you with a -4 Attack Plus.",
                            "Tier IV": "Do an AOE attack with yourself as the centerpoint (don't deal yourself damage):\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- If you hit any of them, deal d6+Damage Plus damage and all of their attacks on their turn must be against you\n- They do their attacks against you with a -5 Attack Plus."
                        },
                        "Freezing Bomb" : {
                            "Tier I": "Do a ranged AOE attack:\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.5\n- Deal d6+Damage Plus damage and apply a stack of Freeze to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE",
                            "Tier II": "Do a ranged AOE attack:\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.75\n- For each target whose Defense DC you beat do two attacks against them, each of which does d8+Damage Plus damage and applies a stack of Freeze\n- You can choose to exclude any target from the AOE",
                            "Tier III": "Do a ranged AOE attack:\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2\n- For each target whose Defense DC you beat do three attacks against them, each of which does d10+Damage Plus damage and applies a stack of Freeze\n- You can choose to exclude any target from the AOE",
                            "Tier IV": "Do a ranged AOE attack:\n- Add Defense or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2.5\n- For each target whose Defense DC you beat do four attacks against them, each of which does d12+Damage Plus damage and applies a stack of Freeze\n- You can choose to exclude any target from the AOE"
                        }
                    }
                case "Red Gray" | "Gray Red":
                    self.abilities = {
                        "Aggression" : {
                            "Tier I": "Do up to 2 basic weapon attacks immediately (may repeat one basic weapon attack any number of times).",
                            "Tier II": "Do up to 3 basic weapon attacks immediately (may repeat one basic weapon attack any number of times).",
                            "Tier III": "Do up to 4 basic weapon attacks immediately (may repeat one basic weapon attack any number of times).",
                            "Tier IV": "Do up to 5 basic weapon attacks immediately (may repeat one basic weapon attack any number of times)."
                        },
                        "Burning Bomb" : {
                            "Tier I": "Do a ranged AOE attack:\n- Add Power or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.5\n- Deal d6+Damage Plus damage and apply a stack of Burn to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE",
                            "Tier II": "Do a ranged AOE attack:\n- Add Power or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.75\n- For each target whose Defense DC you beat do two attacks against them, each of which does d8+Damage Plus damage and applies a stack of Burn\n- You can choose to exclude any target from the AOE",
                            "Tier III": "Do a ranged AOE attack:\n- Add Power or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2\n- For each target whose Defense DC you beat do three attacks against them, each of which does d10+Damage Plus damage and applies a stack of Burn\n- You can choose to exclude any target from the AOE",
                            "Tier IV": "Do a ranged AOE attack:\n- Add Power or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2.5\n- For each target whose Defense DC you beat do four attacks against them, each of which does d12+Damage Plus damage and applies a stack of Burn\n- You can choose to exclude any target from the AOE"
                        }

                    }
                case "Green Gray" | "Gray Green":
                    self.abilities = {
                        "Shifty Sharpshooter" : {
                            "Tier I": "Teleport up to your Movement Speed worth of tiles.\n- Do a ranged attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a d12 of damage + your Damage Plus",
                            "Tier II": "Teleport up to your Movement Speed x1.5 worth of tiles.\n- Do a ranged attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 4d8 of damage + your Damage Plus",
                            "Tier III": "Teleport up to your Movement Speed x2 worth of tiles.\n- Do a ranged attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 6d10 of damage + your Damage Plus",
                            "Tier IV": "Teleport up to your Movement Speed x2.5 worth of tiles.\n- Do a ranged attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- If you hit, do an attack dealing a 8d12 of damage + your Damage Plus"
                        },
                        "Poison Bomb" : {
                            "Tier I": "Do a ranged AOE attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.5\n- Deal d6+Damage Plus damage and apply a stack of Poison to any target whose Defense DC you beat\n- You can choose to exclude any target from the AOE",
                            "Tier II": "Do a ranged AOE attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x1.75\n- For each target whose Defense DC you beat do two attacks against them, each of which does d8+Damage Plus damage and applies a stack of Poison\n- You can choose to exclude any target from the AOE",
                            "Tier III": "Do a ranged AOE attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2\n- For each target whose Defense DC you beat do three attacks against them, each of which does d10+Damage Plus damage and applies a stack of Poison\n- You can choose to exclude any target from the AOE",
                            "Tier IV": "Do a ranged AOE attack:\n- Add Speed or Intelligence and your Attack Plus to your attack roll\n- AOE Radius for this attack = Perception x2.5\n- For each target whose Defense DC you beat do four attacks against them, each of which does d12+Damage Plus damage and applies a stack of Poison\n- You can choose to exclude any target from the AOE"
                        }
                    }

class ClothingActiveCatalog(AbilityCatalog):
    def __init__(self, color, color2):
        super().__init__(color, color2)
        
        if not color2:
            match self.color:
                case "Neutral":
                    self.abilities = {
                        "Delayed Gratification" : {
                            "Tier I": "Spend 1 Energy of any color now to get 2 Energy of any colors at next Start Phase. This Energy can go over your Energy Cap.\nCan only be used once every other turn.",
                            "Tier II": "Spend 2 Energy of any color now to get 4 Energy of any colors at next Start Phase. This Energy can go over your Energy Cap.\nCan only be used once every other turn.",
                            "Tier III": "Spend 3 Energy of any color now to get 7 Energy of any colors at next Start Phase. This Energy can go over your Energy Cap.\nCan only be used once every other turn.",
                            "Tier IV": "Spend 4 Energy of any color now to get 10 Energy of any colors at next Start Phase. This Energy can go over your Energy Cap.\nCan only be used once every other turn."
                        },
                        "Energize" : {
                            "Tier I": "Give 2 Energy to an ally in range; this Energy can go over their Energy Cap.",
                            "Tier II": "Give 3 Energy to an ally in range; this Energy can go over their Energy Cap.",
                            "Tier III": "Give 5 Energy to an ally in range; this Energy can go over their Energy Cap.",
                            "Tier IV": "Give 7 Energy to an ally in range; this Energy can go over their Energy Cap."
                        },
                        "Cleanse" : {
                            "Tier I": "Clear up to 2 Status Effect stacks on yourself or an ally in range (Burn, Freeze, Poison).",
                            "Tier II": "Clear up to 5 Status Effect stacks on yourself or an ally in range (Burn, Freeze, Poison). May apply to any number of targets.",
                            "Tier III": "Clear up to 7 Status Effect stacks on yourself or any allies in range (Burn, Freeze, Poison). May apply to any number of targets.",
                            "Tier IV": "Clear up to 10 Status Effect stacks on yourself or any allies in range (Burn, Freeze, Poison). May apply to any number of targets."
                        }
                    }
                case "Red":
                    self.abilities = {
                        "Flaming Gaze" : {
                            "Tier I": "Do a contest with a target in range, your Power Stat vs target's Defense Stat. If you win, apply 2 stacks of Burn.",
                            "Tier II": "Do a contest with a target in range, your Power Stat vs target's Defense Stat. If you win, apply 5 stacks of Burn.",
                            "Tier III": "Do a contest with a target in range, your Power Stat vs target's Defense Stat. If you win, apply 7 stacks of Burn.",
                            "Tier IV": "Do a contest with a target in range, your Power Stat vs target's Defense Stat. If you win, apply 10 stacks of Burn."
                        },
                        "Lighten Target" : {
                            "Tier I": "Do a contest with a target in range, your Power Stat vs target's Intelligence Stat. If you win, reduce their weight by a third, making their Movement Speed 2/3 what it was and making push and pull effects 1.5x more effective.",
                            "Tier II": "Do a contest with a target in range, your Power Stat vs target's Intelligence Stat. If you win, reduce their weight by half, making their Movement Speed half what it was and making push and pull effects 2x more effective.",
                            "Tier III": "Do a contest with a target in range, your Power Stat vs target's Intelligence Stat. If you win, reduce their weight by 3/4, making their Movement Speed a quarter what it was and making push and pull effects 3x more effective.",
                            "Tier IV": "Do a contest with a target in range, your Power Stat vs target's Intelligence Stat. If you win, reduce their weight by 7/8, making their Movement Speed an eighth what it was and making push and pull effects 4x more effective."
                        },
                        "Push and Pull" : {
                            "Tier I": "Do a contest with a target in range, your Power Stat vs target's Speed Stat. If you win, push or pull the target up to 10 tiles.",
                            "Tier II": "Do a contest with a target in range, your Power Stat vs target's Speed Stat. If you win, push or pull the target up to 20 tiles.",
                            "Tier III": "Do a contest with a target in range, your Power Stat vs target's Speed Stat. If you win, push or pull the target up to 35 tiles.",
                            "Tier IV": "Do a contest with a target in range, your Power Stat vs target's Speed Stat. If you win, push or pull the target up to 50 tiles."
                        }
                    }
                case "Blue":
                    self.abilities = {
                        "Fight Me" : {
                            "Tier I": "Do a contest with a target in range, your Defense Stat vs target's Intelligence Stat. If you win, their first attack on their turn must be against you. That attack has a -2 Attack Plus.",
                            "Tier II": "Do a contest with a target in range, your Defense Stat vs target's Intelligence Stat. If you win, their first two attacks on their turn must be against you. Those attacks each have a -3 Attack Plus.",
                            "Tier III": "Do a contest with a target in range, your Defense Stat vs target's Intelligence Stat. If you win, their first three attacks on their turn must be against you. Those attacks each have a -4 Attack Plus.",
                            "Tier IV": "Do a contest with a target in range, your Defense Stat vs target's Intelligence Stat. If you win, all of their attacks on their turn must be against you. Those attacks each have a -5 Attack Plus."
                        },
                        "Leaden Target" : {
                            "Tier I": "Do a contest with a target in range, your Defense Stat vs target's Power Stat. If you win, increase their weight by a third till your next Start Turn, making their Movement Speed 2/3 what it was and giving them a -1 Defense DC and a -1 Attack Plus.",
                            "Tier II": "Do a contest with a target in range, your Defense Stat vs target's Power Stat. If you win, increase their weight by a half till your next Start Turn, making their Movement Speed half what it was and giving them a -2 Defense DC and a -2 Attack Plus.",
                            "Tier III": "Do a contest with a target in range, your Defense Stat vs target's Power Stat. If you win, increase their weight by a 3/4 till your next Start Turn, making their Movement Speed a quarter what it was and giving them a -3 Defense DC and a -3 Attack Plus.",
                            "Tier IV": "Do a contest with a target in range, your Defense Stat vs target's Power Stat. If you win, increase their weight by a 7/8 till your next Start Turn, making their Movement Speed an eighth what it was and giving them a -5 Defense DC and a -5 Attack Plus."
                        },
                        "Protect Ally" : {
                            "Tier I": "Give an ally in range +2 Armor and +2 Defense DC till your next Start Turn.",
                            "Tier II": "Give an ally in range +3 Armor and +3 Defense DC till your next Start Turn.",
                            "Tier III": "Give an ally in range +4 Armor and +4 Defense DC till your next Start Turn.",
                            "Tier IV": "Give an ally in range +5 Armor and +5 Defense DC till your next Start Turn."
                        }
                    }
                case "Green":
                    self.abilities = {
                        "Healing Touch" : {
                            "Tier I": "Heal one person in range up to 5 HP.",
                            "Tier II": "Heal up to 15 HP distributed among any number of targets in range.",
                            "Tier III": "Heal up to 25 HP distributed among any number of targets in range.",
                            "Tier IV": "Heal up to 40 HP distributed among any number of targets in range."
                        },
                        "Here! A Gift!" : {
                            "Tier I": "Transfer up to 2 Status Effect stacks (Burn, Freeze, Poison) on yourself or an ally in range to another target in range.",
                            "Tier II": "Transfer up to 5 Status Effect stacks (Burn, Freeze, Poison) on yourself or an ally in range to another target in range.",
                            "Tier III": "Transfer up to 7 Status Effect stacks (Burn, Freeze, Poison) on yourself or an ally in range to another target in range.",
                            "Tier IV": "Transfer up to 10 Status Effect stacks (Burn, Freeze, Poison) on yourself or an ally in range to another target in range."
                        },
                        "Thorns" : {
                            "Tier I": "Apply thorns to a target in range: till your next Start Turn, each time the target is attacked deal the attacker 7 damage.",
                            "Tier II": "Apply thorns to a target in range: till your next Start Turn, each time the target is attacked deal the attacker 15 damage.",
                            "Tier III": "Apply thorns to a target in range: till your next Start Turn, each time the target is attacked deal the attacker 25 damage.",
                            "Tier IV": "Apply thorns to a target in range: till your next Start Turn, each time the target is attacked deal the attacker 40 damage."
                        }
                    }
                case "Gray":
                    self.abilities = {
                        "Darkness" : {
                            "Tier I": "Create a cloud of darkness with radius equal to AOE Radius:\n- Anybody within the cloud has disadvantage to do any Attack Roll or check to resist any effect\n- Anybody outside the cloud has disadvantage to attack or apply an effect to anybody within the cloud",
                            "Tier II": "Create a cloud of darkness with radius equal to AOE Radius x1.5:\n- Anybody within the cloud has disadvantage to do any Attack Roll or check to resist any effect\n- Anybody outside the cloud has -2 to attack or apply an effect to anybody within the cloud",
                            "Tier III": "Create a cloud of darkness with radius equal to AOE Radius x1.75:\n- Anybody within the cloud has disadvantage to do any Attack Roll or check to resist any effect\n- Anybody outside has no penalty to Attack Rolls and effects targeting anybody within the cloud",
                            "Tier IV": "Create a cloud of darkness with radius equal to AOE Radius x2:\n- Anybody within the cloud has disadvantage to do any Attack Roll or check to resist any effect\n- Anybody outside or any ally within the cloud has a +3 to Attack Rolls and effects targeting anybody within the cloud"
                        },
                        "Teleport Ally" : {
                            "Tier I": "Teleport a willing ally in range an amount of tiles equal or less than 1.5x your Perception stat.\nGive them 2 Energy of any color; this Energy can go over their Energy Cap.",
                            "Tier II": "Teleport a willing ally in range an amount of tiles equal or less than 2x your Perception stat.\nGive them 3 Energy of any color; this Energy can go over their Energy Cap.",
                            "Tier III": "Teleport a willing ally in range an amount of tiles equal or less than 2.5x your Perception stat.\nGive them 4 Energy of any color; this Energy can go over their Energy Cap.",
                            "Tier IV": "Teleport a willing ally in range an amount of tiles equal or less than 3x your Perception stat.\nGive them 5 Energy of any color; this Energy can go over their Energy Cap."
                        },
                        "Leadership" : {
                            "Tier I": "Let an ally in range immediately use up to 2 Energy on Actives and basic weapon attacks for free.\nEach Active Tier and basic weapon attack cannot be used more than once.",
                            "Tier II": "Let an ally in range immediately use up to 3 Energy on Actives and basic weapon attacks for free.\nEach Active Tier and basic weapon attack cannot be used more than once.",
                            "Tier III": "Let an ally in range immediately use up to 5 Energy on Actives and basic weapon attacks for free.\nEach Active Tier and basic weapon attack cannot be used more than once.",
                            "Tier IV": "Let an ally in range immediately use up to 7 Energy on Actives and basic weapon attacks for free.\nEach Active Tier and basic weapon attack cannot be used more than once."
                        }
                    }
        elif color2:
            match self.colorMix:
                case "Red Blue" | "Blue Red":
                    self.abilities = {
                        "Touch of Frostburn" : {
                            "Tier I": "Do a contest with a target in range, your Power or Defense Stat vs target's Defense Stat. If you win, apply 2 stacks of Burn and Freeze each.",
                            "Tier II": "Do a contest with a target in range, your Power or Defense Stat vs target's Defense Stat. If you win, apply 5 stacks of Burn and Freeze each.",
                            "Tier III": "Do a contest with a target in range, your Power or Defense Stat vs target's Defense Stat. If you win, apply 7 stacks of Burn and Freeze each.",
                            "Tier IV": "Do a contest with a target in range, your Power or Defense Stat vs target's Defense Stat. If you win, apply 10 stacks of Burn and Freeze each."
                        },
                        "Teleport Self" : {
                            "Tier I": "Teleport up to (Power + Defense) x5 tiles away.\nGain a +1 Attack Plus or +1 Defense DC till your next Start Phase.",
                            "Tier II": "Teleport up to (Power + Defense) x7 tiles away.\nGain a +1 Attack Plus and +1 Defense DC till your next Start Phase.",
                            "Tier III": "Teleport up to (Power + Defense) x10 tiles away.\nGain a +2 Attack Plus and +2 Defense DC till your next Start Phase.",
                            "Tier IV": "Teleport up to (Power + Defense) x15 tiles away.\nGain a +3 Attack Plus and +3 Defense DC till your next Start Phase."
                        }
                    }
                case "Red Green" | "Green Red":
                    self.abilities = {
                        "Quicken Body" : {
                            "Tier I": "Gain extra tiles of Movement Speed equal to your Movement Speed.\nYou get +2 Attack Plus and +2 Damage Plus till your next Start Phase.",
                            "Tier II": "Gain extra tiles of Movement Speed equal to your Movement Speed x1.5.\nYou get +3 Attack Plus and +3 Damage Plus till your next Start Phase.",
                            "Tier III": "Gain extra tiles of Movement Speed equal to your Movement Speed x2.\nYou get +4 Attack Plus and +4 Damage Plus till your next Start Phase.",
                            "Tier IV": "Gain extra tiles of Movement Speed equal to your Movement Speed x3.\nYou get +5 Attack Plus and +5 Damage Plus till your next Start Phase."
                        },
                        "Rejuvinate Self" : {
                            "Tier I": "Heal yourself 5 HP.\nYou get +2 Attack Plus and +2 Damage Plus till your next Start Phase.",
                            "Tier II": "Heal yourself 10 HP.\nYou get +3 Attack Plus and +3 Damage Plus till your next Start Phase.",
                            "Tier III": "Heal yourself 15 HP.\nYou get +4 Attack Plus and +4 Damage Plus till your next Start Phase.",
                            "Tier IV": "Heal yourself 20 HP.\nYou get +5 Attack Plus and +5 Damage Plus till your next Start Phase."
                        }
                    }
                case "Blue Green" | "Green Blue":
                    self.abilities = {
                        "Healing Shield" : {
                            "Tier I": "Heal yourself 5 HP.\nYou get +2 Defense Plus and resist the next 2 Status Effects stacks that are applied to you between now and your next Start Phase.",
                            "Tier II": "Heal yourself 10 HP.\nYou get +3 Defense Plus and resist the next 5 Status Effects stacks that are applied to you between now and your next Start Phase.",
                            "Tier III": "Heal yourself 15 HP.\nYou get +4 Defense Plus and resist the next 7 Status Effects stacks that are applied to you between now and your next Start Phase.",
                            "Tier IV": "Heal yourself 20 HP.\nYou get +5 Defense Plus and resist the next 10 Status Effects stacks that are applied to you between now and your next Start Phase."
                        },
                        "Healing Armor" : {
                            "Tier I": "Heal yourself 5 HP.\nYou get +2 Defense Plus and +2 Armor till your next Start Phase.",
                            "Tier II": "Heal yourself 10 HP.\nYou get +3 Defense Plus and +3 Armor till your next Start Phase.",
                            "Tier III": "Heal yourself 15 HP.\nYou get +4 Defense Plus and +4 Armor till your next Start Phase.",
                            "Tier IV": "Heal yourself 20 HP.\nYou get +5 Defense Plus and +5 Armor till your next Start Phase."
                        }
                    }
                case "Blue Gray" | "Gray Blue":
                    self.abilities = {
                        "Fight Me and Freeze" : {
                            "Tier I": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first attack on their turn must be against you\n- The attack is done with a -2 Attack Plus\n- They get a stack of Freeze",
                            "Tier II": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first two attacks on their turn must be against you\n- These attacks are done with a -3 Attack Plus\n- They get 2 stacks of Freeze",
                            "Tier III": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first three attacks on their turn must be against you\n- These attacks are done with a -4 Attack Plus\n- They get 3 stacks of Freeze",
                            "Tier IV": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- All their attacks on their turn must be against you\n- These attacks are done with a -5 Attack Plus\n- They get 4 stacks of Freeze"
                        },
                        "Freezing Cloud" : {
                            "Tier I": "Create a freezing cloud with radius equal to AOE Radius.\nAnybody within the cloud at the start of their turn gets a stack of Freeze",
                            "Tier II": "Create a freezing cloud with radius equal to AOE Radius x1.5.\nAnybody within the cloud at the start of their turn gets 2 stacks of Freeze",
                            "Tier III": "Create a freezing cloud with radius equal to AOE Radius x1.75.\nAnybody within the cloud at the start of their turn gets 3 stacks of Freeze\nYou may exempt any of your allies from this effect",
                            "Tier IV": "Create a freezing cloud with radius equal to AOE Radius x2.\nAnybody within the cloud at the start of their turn gets 4 stacks of Freeze\nYou may exempt any of your allies from this effect"
                        }
                    }
                case "Red Gray" | "Gray Red":
                    self.abilities = {
                        "Fight Me and Burn" : {
                            "Tier I": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first attack on their turn must be against you\n- The attack is done with a -2 Attack Plus\n- They get a stack of Burn",
                            "Tier II": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first two attacks on their turn must be against you\n- These attacks are done with a -3 Attack Plus\n- They get 2 stacks of Burn",
                            "Tier III": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first three attacks on their turn must be against you\n- These attacks are done with a -4 Attack Plus\n- They get 3 stacks of Burn",
                            "Tier IV": "Do a contest with a target in range, your Defense or Intelligence Stat vs target's Intelligence Stat. If you win:\n- All their attacks on their turn must be against you\n- These attacks are done with a -5 Attack Plus\n- They get 4 stacks of Burn"
                        },
                        "Inferno" : {
                            "Tier I": "Create a burning cloud with radius equal to AOE Radius.\nAnybody within the cloud at the start of their turn gets a stack of Burn",
                            "Tier II": "Create a burning cloud with radius equal to AOE Radius x1.5.\nAnybody within the cloud at the start of their turn gets 2 stacks of Burn",
                            "Tier III": "Create a burning cloud with radius equal to AOE Radius x1.75.\nAnybody within the cloud at the start of their turn gets 3 stacks of Burn\nYou may exempt any of your allies from this effect",
                            "Tier IV": "Create a burning cloud with radius equal to AOE Radius x2.\nAnybody within the cloud at the start of their turn gets 4 stacks of Burn\nYou may exempt any of your allies from this effect"
                        }
                    }
                case "Green Gray" | "Gray Green":
                    self.abilities = {
                        "Fight Me and Sicken" : {
                            "Tier I": "Do a contest with a target in range, your Speed or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first attack on their turn must be against you\n- The attack is done with a -2 Attack Plus\n- They get a stack of Poison",
                            "Tier II": "Do a contest with a target in range, your Speed or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first two attacks on their turn must be against you\n- These attacks are done with a -3 Attack Plus\n- They get 2 stacks of Poison",
                            "Tier III": "Do a contest with a target in range, your Speed or Intelligence Stat vs target's Intelligence Stat. If you win:\n- Their first three attacks on their turn must be against you\n- These attacks are done with a -4 Attack Plus\n- They get 3 stacks of Poison",
                            "Tier IV": "Do a contest with a target in range, your Speed or Intelligence Stat vs target's Intelligence Stat. If you win:\n- All their attacks on their turn must be against you\n- These attacks are done with a -5 Attack Plus\n- They get 4 stacks of Poison"
                        },
                        "Poison Fog" : {
                            "Tier I": "Create a poison cloud with radius equal to AOE Radius.\nAnybody within the cloud at the start of their turn gets a stack of Poison",
                            "Tier II": "Create a poison cloud with radius equal to AOE Radius x1.5.\nAnybody within the cloud at the start of their turn gets 2 stacks of Poison",
                            "Tier III": "Create a poison cloud with radius equal to AOE Radius x1.75.\nAnybody within the cloud at the start of their turn gets 3 stacks of Poison\nYou may exempt any of your allies from this effect",
                            "Tier IV": "Create a poison cloud with radius equal to AOE Radius x2.\nAnybody within the cloud at the start of their turn gets 4 stacks of Poison\nYou may exempt any of your allies from this effect"
                        }
                    }

class PassiveCatalog(AbilityCatalog):
    def __init__(self, color, color2):
        super().__init__(color, color2)
        
        if not color2:
            match self.color:
                case "Neutral":
                    self.abilities = {
                        "Battery" : {
                            "Tier I": "Can store up to 3 Energy for use later.",
                            "Tier II": "Can store up to 5 Energy for use later.",
                            "Tier III": "Can store up to 7 Energy for use later.",
                            "Tier IV": "Can store up to 10 Energy for use later.",
                            "Tier V": "Can store up to 15 Energy for use later."
                        },
                        "Side-Jobs" : {
                            "Tier I": "Each member of your party gets 50 Essence per enemy killed.",
                            "Tier II": "Each member of your party gets 50 Essence per enemy killed, node completed, and loot stash opened.",
                            "Tier III": "Each member of your party gets 100 Essence per enemy killed, node completed, loot stash opened, and hack completed.",
                            "Tier IV": "Each member of your party gets 200 Essence per enemy killed, node completed, loot stash opened, and hack completed.",
                            "Tier V": "Each member of your party gets 300 Essence per enemy killed, node completed, loot stash opened, and hack completed."
                        },
                        "Extra Gear Slots" : {
                            "Tier I": "Gain 1 extra Gear Slot of your choice.",
                            "Tier II": "Gain 2 extra Gear Slots of your choice.",
                            "Tier III": "Gain 3 extra Gear Slots of your choice.",
                            "Tier IV": "Gain 4 extra Gear Slots of your choice.",
                            "Tier V": "Gain 5 extra Gear Slots of your choice."
                        },
                        "More Gear" : {
                            "Tier I": "Get an extra piece of gear per drop once per run.",
                            "Tier II": "Get an extra piece of gear per drop twice per run.",
                            "Tier III": "Get an extra piece of gear per drop three times per run.",
                            "Tier IV": "Get an extra piece of gear per drop once per node.",
                            "Tier V": "Get an extra piece of gear per drop twice per node."
                        },
                        "Node Map" : {
                            "Tier I": "Get a very vague map of one node per run.",
                            "Tier II": "Get a very vague map of every node you enter.",
                            "Tier III": "Get a vague map of every node you enter as well as one hint to where a secret might be.",
                            "Tier IV": "Get a vague map of every node you enter as well as a hint to a secret and vague descriptions of what enemies are in one area of the node.",
                            "Tier V": "Get a map of every node you enter as well as a hint to a secret and descriptions of what enemies are in each area of the node."
                        },
                        "Shortcuts" : {
                            "Tier I": "Spend:\n- 1000 Essence to return to your home node from within low-security nodes without clearing them",
                            "Tier II": "Spend:\n- 500 Essence to return to your home node from within low-security nodes without clearing them\n- 250 Essence to get a small preview of what the next node is like.",
                            "Tier III": "Spend:\n- 500 Essence to return to your home node from within low-security nodes without clearing them\n- 500 Essence to drop a marker, allowing you to warp back to that node even if it's within a secure sector\n- 250 Essence to get a small preview of what the next node is like",
                            "Tier IV": "Spend:\n- 250 Essence to return to return to your home node from within low-security nodes without clearing them\n- 250 Essence to drop a marker, allowing you to warp back to that node even if it's within a secure sector\n- 100 Essence to get a small preview of what the next node is like",
                            "Tier V": "Spend:\n- 250 Essence to use all the functions within your Local Node wherever you are (including the Shop; Essence to Credit conversion and vice versa; and Gear Upgrading, Rerolling, and Condensing)\n- 100 Essence to return to your home node from within low-security nodes without clearing them\n- 100 Essence to drop a marker, allowing you to warp back to that node even if it's within a secure sector\n- 50 Essence to get a small preview of what the next node is like"
                        },
                        "Inter-Node Patch-up" : {
                            "Tier I": "Heal up to 5 HP between each node.",
                            "Tier II": "Heal up to 10 HP between each node.",
                            "Tier III": "Heal the party up to 15 HP between each node.",
                            "Tier IV": "Heal the party up to 25 HP between each node.",
                            "Tier V": "Heal the party up to 40 HP between each node."
                        },
                        "Color Spread" : {
                            "Tier I": "If you have a piece of gear of each color equipped you get the following buffs:\n- Luck: +1\n- Inventory Slots: +2",
                            "Tier II": "If you have a piece of gear of each color equipped you get the following buffs:\n- Luck: +2\n- Inventory Slots: +3\n- HP: +4",
                            "Tier III": "If you have a piece of gear of each color equipped you get the following buffs:\n- Luck: +3\n- Inventory Slots: +5\n- HP: +8",
                            "Tier IV": "If you have a piece of gear of each color equipped you get the following buffs:\n- Luck: +4\n- Inventory Slots: +5\n- HP: +10\n- Group XP Gain: +2",
                            "Tier V": "If you have a piece of gear of each color equipped you get the following buffs:\n- Luck: +5\n- Inventory Slots: +7\n- HP: +20\n- Group XP Gain: +4\n- Kernel Slots: +1\n- (a Basic Stat of your choice): +1"
                        }
                    }
                case "Red":
                    self.abilities = {
                        "Pain Rage" : {
                            "Tier I": "Spend HP to get a Damage Plus on one attack equal to the HP spent. (Can only be done once per turn.)",
                            "Tier II": "Spend HP to get a Damage Plus on one attack equal to the HP spent x1.25. (Can only be done once per turn.)",
                            "Tier III": "Spend HP to get a Damage Plus on one attack equal to the HP spent x1.5. (Can only be done once per turn.)",
                            "Tier IV": "Spend HP to get a Damage Plus on one attack equal to the HP spent x1.75. (Can only be done once per turn.)",
                            "Tier V": "Spend HP to get a Damage Plus on one attack equal to the HP spent x2. (Can only be done once per turn.)"
                        },
                        "Burn" : {
                            "Tier I": "Once per turn when you hit with an attack apply a stack of Burn.",
                            "Tier II": "Twice per turn when you hit with an attack apply a stack of Burn.",
                            "Tier III": "Each of your attacks that hit apply a stack of Burn.",
                            "Tier IV": "Each of your attacks that hit apply a stack of Burn. When you hit Burning enemies deal 2 extra damage per stack instead of 1.",
                            "Tier V": "Each of your attacks that hit apply a stack of Burn. When you hit Burning enemies deal 3 extra damage per stack instead of 1."
                        },
                        "Damage Buff" : {
                            "Tier I": "Once per turn when you hit with an attack you may raise the Tier of the Damage Dice.",
                            "Tier II": "Twice per turn when you hit with an attack you may raise the Tier of the Damage Dice.",
                            "Tier III": "Once per turn when you hit with an attack you may raise the Tier of the Damage Dice twice.",
                            "Tier IV": "Twice per turn when you hit with an attack you may raise the Tier of the Damage Dice twice.",
                            "Tier V": "Twice per turn when you hit with an attack you may raise the Tier of the Damage Dice three times."
                        },
                        "Knockback" : {
                            "Tier I": "Once per turn when you hit with an attack you may knock the target back up to three tiles.",
                            "Tier II": "Once per turn when you hit with an attack you may knock the target back up to five tiles.",
                            "Tier III": "Twice per turn when you hit with an attack you may knock the target back up to five tiles.",
                            "Tier IV": "Three times per turn when you hit with an attack you may knock the target back up to seven tiles.",
                            "Tier V": "Whenever you hit with an attack you may knock the target back up to ten tiles."
                        },
                        "Critical Hits" : {
                            "Tier I": "Whenever you roll a 20 on an attack roll you deal x1.5 damage.",
                            "Tier II": "Whenever you roll a 20 on an attack roll you deal x2 damage.",
                            "Tier III": "Whenever you roll a 19-20 on an attack roll you deal x2 damage.",
                            "Tier IV": "Whenever you roll a 18-20 on an attack roll you deal x2 damage.",
                            "Tier V": "Whenever you roll a 18-20 on an attack roll you deal x3 damage."
                        },
                        "Antiburn" : {
                            "Tier I": "While Burning all sources deal -1 damage to you.",
                            "Tier II": "While Burning all sources deal -2 damage to you. You deal +.5 points of damage for each stack of Burn you have.",
                            "Tier III": "While Burning all sources deal -2 damage to you. You deal +1 point of damage for each stack of Burn you have.",
                            "Tier IV": "While Burning all sources deal -3 damage to you. You deal +2 point of damage for each stack of Burn you have.",
                            "Tier V": "While Burning all sources deal -3 damage to you. You deal +3 points of damage for each stack of Burn you have."
                        },
                        "Flying" : {
                            "Tier I": "You may now use up to half your Movement Speed to fly each turn. You cannot hover.",
                            "Tier II": "You may now use up to all your Movement Speed to fly each turn. You cannot hover.",
                            "Tier III": "You may now use up to all your Movement Speed to fly each turn. You can now hover up to three tiles above the ground.",
                            "Tier IV": "You may now use up to all your Movement Speed to fly double your Movement Speed each turn. You can now hover up to five tiles above the ground.",
                            "Tier V": "You may now use up to all your Movement Speed to fly triple your Movement Speed each turn. You can now hover up to ten tiles above the ground."
                        },
                        "Red Buff" : {
                            "Tier I": "G = The amount of Red Pieces of gear you have equipped.\n- Attack Plus: G÷4\n- Damage Plus: G÷4",
                            "Tier II": "G = The amount of Red Pieces of gear you have equipped.\n- Attack Plus: G÷3\n- Damage Plus: G÷3\n- HP: Gx1.25",
                            "Tier III": "G = The amount of Red Pieces of gear you have equipped.\n- Attack Plus: G÷2\n- Damage Plus: G÷2\n- HP: Gx1.5\n- Initiative: G÷2",
                            "Tier IV": "G = The amount of Red Pieces of gear you have equipped.\n- Attack Plus: G\n- Damage Plus: G\n- HP: Gx1.75\n- Initiative: G\n- Armor: G÷3",
                            "Tier V": "G = The amount of Red Pieces of gear you have equipped.\n- Attack Plus: Gx1.25\n- Damage Plus: Gx1.25\n- HP: Gx2.5\n- Initiative: Gx1.25\n- Armor: G÷2\n- Power: +1"
                        }
                    }
                case "Blue":
                    self.abilities = {
                        "Best Defense is a Bad Offense" : {
                            "Tier I": "At the start of each turn you may take +1 Defense DC and -1 Attack Plus.",
                            "Tier II": "At the start of each turn you may take one of the following:\n- +1 Defense DC and -1 Attack Plus\n- +1 Armor and -1 Damage Plus",
                            "Tier III": "At the start of each turn you may take one of the following:\n- +2 Defense DC and -1 Attack Plus\n- +2 Armor and -1 Damage Plus",
                            "Tier IV": "At the start of each turn you may take one of the following:\n- +3 Defense DC and -1 Attack Plus\n- +3 Armor and -1 Damage Plus\n- +3 Defense DC, +3 Armor, -1 Attack Plus, and -1 Damage Plus",
                            "Tier V": "At the start of each turn you may take one of the following:\n- +4 Defense DC and -1 Attack Plus\n- +4 Armor and -1 Damage Plus\n- +4 Defense DC, +4 Armor, -1 Attack Plus, and -1 Damage Plus"
                        },
                        "Freeze" : {
                            "Tier I": "Once per turn when you hit with an attack apply a stack of Freeze.",
                            "Tier II": "Twice per turn when you hit with an attack apply a stack of Freeze.",
                            "Tier III": "Each of your attacks that hit apply a stack of Freeze.",
                            "Tier IV": "Each of your attacks that hit apply a stack of Freeze. When you hit Freezing enemies you deal 1 extra point of damage per stack of Freeze.",
                            "Tier V": "Each of your attacks that hit apply a stack of Freeze. When you hit Freezing enemies you deal 2 extra points of damage per stack of Freeze."
                        },
                        "Defense Buff" : {
                            "Tier I": "At the End Phase of each turn you may take either a +1 Defense DC against melee attacks or ranged attacks.",
                            "Tier II": "At the End Phase of each turn you may take either a +2 Defense DC against melee attacks or ranged attacks.\nYou may also choose to resist up to 1 stack of one Status Effect.",
                            "Tier III": "At the End Phase of each turn you may take either a +2 Defense DC and +2 Armor against melee attacks or ranged attacks.\nYou may also choose to resist up to 2 stacks of one Status Effect.",
                            "Tier IV": "At the End Phase of each turn you may take either a +3 Defense DC and +3 Armor against melee attacks or ranged attacks.\nYou may also choose to resist up to 3 stacks of one Status Effect.",
                            "Tier V": "At the End Phase of each turn you may take either a +4 Defense DC and +4 Armor against melee attacks or ranged attacks.\nYou may also choose to resist up to 4 stacks of one Status Effect."
                        },
                        "Resist Effects" : {
                            "Tier I": "Whenever you are pushed or pulled you may reduce it by 2 tiles.",
                            "Tier II": "Whenever you are pushed or pulled you may reduce it by 4 tiles.\nOnce per turn you may heal yourself of up to 1 stack of any Status Effect.",
                            "Tier III": "Whenever you or anyone within 3 tiles of you is pushed or pulled you may reduce it by 5 tiles.\nOnce per turn you may heal yourself or anybody else of up to 3 stacks of any Status Effect.",
                            "Tier IV": "Whenever you or anyone within 5 tiles of you is pushed or pulled you may reduce it by 7 tiles.\nOnce per turn you may heal up to 6 stacks of any Status Effect (may be split up any way you'd like).",
                            "Tier V": "Whenever you or anyone you choose within 10 tiles of you is pushed or pulled you may reduce it by 10 tiles.\nOnce per turn you may heal up to 8 stacks of any Status Effect (may be split up any way you'd like)."
                        },
                        "Block and Parry" : {
                            "Tier I": "Once per round you may block an attack that's coming for another target within 3 tiles of you.",
                            "Tier II": "Twice per round you may block an attack that's coming for another target within 5 tiles of you.",
                            "Tier III": "Twice per round you may block an attack that's coming for another target within 5 tiles of you.\nOnce per round when you successfully defend against an attack you may do a free weapon attack against the attacker.",
                            "Tier IV": "Twice per round you may block an attack that's coming for another target within 7 tiles of you with a +3 to your Defense DC.\nOnce per round when you successfully defend against an attack you may auto-hit with a free weapon attack against the attacker with a +3 to your Damage Plus.",
                            "Tier V": "Three times per round you may block an attack that's coming for another target within 10 tiles of you with a +5 to your Defense DC.\nTwice per round when you successfully defend against an attack you may auto-hit with a free weapon attack against the attacker with a +7 to your Damage Plus."
                        },
                        "Antifreeze" : {
                            "Tier I": "While Freezing you get +1 Defense DC and Armor.",
                            "Tier II": "While Freezing you get +2 Defense DC and Armor.",
                            "Tier III": "While Freezing you get +2 Defense DC and Armor. You deal +.5 point of damage for each stack of Freeze you have.",
                            "Tier IV": "While Freezing you get +3 Defense DC and Armor. You deal +1 point of damage for each stack of Freeze you have.",
                            "Tier V": "While Freezing you get +3 Defense DC and Armor. You deal +2 points of damage for each stack of Freeze you have."
                        },
                        "Environmental Damage" : {
                            "Tier I": "When you cause a target to fall, you can make the target take a d8 of damage per tile it falls.",
                            "Tier II": "When you cause a target to fall, you can make the target take a d10 of damage per tile it falls.",
                            "Tier III": "When you cause a target to fall, you can make the target take a d12 of damage per tile it falls. You may deal a d10 of damage per tile a target travels when you push or pull them against a wall or hard surface.",
                            "Tier IV": "When you cause a target to fall, you can make the target take 2d8 of damage per tile it falls. You may deal a d12 of damage per tile a target travels when you push or pull them against a wall or hard surface.",
                            "Tier V": "When you cause a target to fall, you can make the target take 2d10 of damage per tile it falls. You may deal 2d8 of damage per tile a target travels when you push or pull them against a wall or hard surface."
                        },
                        "Blue Buff" : {
                            "Tier I": "G = The amount of Blue pieces of gear you have equipped.\n- Defense DC: G÷4\n- Armor: G÷4",
                            "Tier II": "G = The amount of Blue pieces of gear you have equipped.\n- Defense DC: G÷3\n- Armor: G÷4\n- Inventory Slots: G÷2",
                            "Tier III": "G = The amount of Blue pieces of gear you have equipped.\n- Defense DC: G÷2\n- Armor: G÷3\n- Inventory Slots: G\n- HP: Gx1.5",
                            "Tier IV": "G = The amount of Blue pieces of gear you have equipped.\n- Defense DC: G\n- Armor: G÷3\n- Inventory Slots: Gx1.25\n- HP: Gx1.75\n- HP Regen: G",
                            "Tier V": "G = The amount of Blue pieces of gear you have equipped.\n- Defense DC: Gx1.25\n- Armor: G÷2\n- Inventory Slots: Gx1.5\n- HP: Gx2.5\n- HP Regen: Gx1.25\n- Defense: +1"
                        }
                    }
                case "Green":
                    self.abilities = {
                        "Movement for Damage" : {
                            "Tier I": "Can spend 4 tiles of Movement Speed per +1 damage on an attack.\nYou can decide to spend tiles after knowing whether the attack hits or not.",
                            "Tier II": "Can spend 3 tiles of Movement Speed per +1 damage on an attack.\nYou can decide to spend tiles after knowing whether the attack hits or not.",
                            "Tier III": "Can spend 2 tiles of Movement Speed per +1 damage on an attack.\nYou can decide to spend tiles after knowing whether the attack hits or not.",
                            "Tier IV": "Can spend 3 tiles of Movement Speed per +2 damage on an attack.\nYou can decide to spend tiles after knowing whether the attack hits or not.",
                            "Tier V": "Can spend 1 tile of Movement Speed per +1 damage on an attack.\nYou can decide to spend tiles after knowing whether the attack hits or not."
                        },
                        "Initiative Buff" : {
                            "Tier I": "Can gain +3 Initiative for 2 fights per run.",
                            "Tier II": "Can gain +3 Initiative for 3 fights per run.\nCan trade Initiative scores with an ally at the start of a fight twice per run.",
                            "Tier III": "Can gain +5 Initiative for 3 fights per run.\nCan trade Initiative scores with an ally at the start of a fight three times per run.\nWhole party gets +1 Initiative for every fight.",
                            "Tier IV": "Can gain +7 Initiative for 4 fights per run.\nCan trade Initiative scores with an ally at the start of any fight.\nWhole party gets +3 Initiative for every fight.",
                            "Tier V": "Can gain +10 Initiative for 5 fights per run.\nCan trade Initiative scores with an ally at the start of any fight.\nWhole party gets +5 Initiative for every fight."
                        },
                        "Wild Growth" : {
                        "Tier I": "Whenever you gain HP in combat you may deal 1 damage to any target for every 3 HP you heal.",
                        "Tier II": "Whenever you gain HP in combat you may deal 1 damage to any target for every 2 HP you heal.",
                        "Tier III": "Whenever you gain HP in combat you may deal 1 damage to any target for every 1 HP you heal.\nWhenever anybody else in your party gains HP in combat you may deal 1 damage to any target for every 3 HP they heal.",
                        "Tier IV": "Whenever you or anybody in your party gains HP in combat you may deal 1 damage to any target for every 1 HP they heal.",
                        "Tier V": "Whenever you or anybody in your party gains HP in combat you may deal 2 damage to any target for every 1 HP they heal."
                        },
                        "Poison" : {
                            "Tier I": "Once per turn when you hit with an attack apply a stack of Poison.",
                            "Tier II": "Twice per turn when you hit with an attack apply a stack of Poison.",
                            "Tier III": "Each of your attacks that hit apply a stack of Poison.",
                            "Tier IV": "Each of your attacks that hit apply a stack of Poison. When you hit Poisoned enemies you deal 1 extra point of damage per stack of Poison.",
                            "Tier V": "Each of your attacks that hit apply a stack of Poison. When you hit Poisoned enemies you deal 2 extra points of damage per stack of Poison."
                        },
                        "Movement Buff" : {
                            "Tier I": "Gain 1 Energy of any color for every 12 tiles of Movement you use.",
                            "Tier II": "Gain 1 Energy of any color for every 10 tiles of Movement you use.",
                            "Tier III": "Gain 1 Energy of any color for every 8 tiles of Movement you use.\nYou may now spend Energy for tiles of Movement (1 E for 5 tiles).",
                            "Tier IV": "Gain 1 Energy of any color for every 6 tiles of Movement you use.\nYou may now spend Energy for tiles of Movement (1 E for 10 tiles).",
                            "Tier V": "Gain 1 Energy of any color for every 4 tiles of Movement you use.\nYou may now spend Energy for tiles of Movement (1 E for 15 tiles)."
                        },
                        "Overheal" : {
                            "Tier I": "You may now heal over your Max HP at a 2/1 ratio (every 2 points of HP healed over Max becomes 1 point of Overheal HP).\nYou can have as much Overheal HP as half your Max HP.",
                            "Tier II": "Your Overheal ratio is 2/1.\nYou can have as much Overheal HP as half your Max HP.\nHeal 2 HP each End Phase in combat.",
                            "Tier III": "Your Overheal ratio is now 1/1.\nYou can have as much Overheal HP as your Max HP.\nHeal 3 HP each End Phase in combat.",
                            "Tier IV": "Your Overheal ratio is now 1/1.5.\nYou can have as much Overheal HP as x1.5 your Max HP.\nHeal 4 HP each End Phase in combat.",
                            "Tier V": "Your Overheal ratio is now 1/2.\nYou can have as much Overheal HP as x2 your Max HP.\nHeal 5 HP each End Phase in combat."
                        },
                        "Range Buff" : {
                            "Tier I": "Your Range stat is x1.5.",
                            "Tier II": "Your Range stat is x2.",
                            "Tier III": "Your Range stat is x2.\nOnce per turn you can do a ranged attack aimed at two targets at once.",
                            "Tier IV": "Your Range stat is x3.\nTwice per turn you can do a ranged attack aimed at two targets at once.",
                            "Tier V": "Your Range stat is x4.\nThree times per turn you can do a ranged attack aimed at three targets at once."
                        },
                        "Green Buff" : {
                            "Tier I": "G = The amount of Green pieces of gear you have equipped.\n- Movement Speed: G\n- Range: G÷3",
                            "Tier II": "G = The amount of Green pieces of gear you have equipped.\n- Movement Speed: Gx1.25\n- Range: G÷2\n- Initiative: G÷3",
                            "Tier III": "G = The amount of Green pieces of gear you have equipped.\n- Movement Speed: Gx1.5\n- Range: G\n- Initiative: G÷2\n- Attack Plus: G÷2",
                            "Tier IV": "G = The amount of Green pieces of gear you have equipped.\n- Movement Speed: Gx1.75\n- Range: Gx1.25\n- Initiative: G\n- Attack Plus: G\n- HP Regen: G",
                            "Tier V": "G = The amount of Green pieces of gear you have equipped.\n- Movement Speed: Gx2.5\n- Range: Gx1.5\n- Initiative: Gx1.25\n- Attack Plus: Gx1.25\n- HP Regen: Gx1.25\n- Speed: +1"
                        }
                    }
                case "Gray":
                    self.abilities = {
                        "Buff Combos" : {
                            "Tier I": "Combos deal an extra d8 of damage (if the combo does multiple attacks, just add this damage to the first one).",
                            "Tier II": "Combos deal an extra d12 of damage (if the combo does multiple attacks, just add this damage to the first one).",
                            "Tier III": "Combos deal an extra 2d10 of damage (if the combo does multiple attacks, just add this damage to the first one).",
                            "Tier IV": "Combos deal an extra 3d8 of damage (if the combo does multiple attacks, just add this damage to the first one).",
                            "Tier V": "Combos deal an extra 3d12 of damage (if the combo does multiple attacks, just add this damage to the first one)."
                        },
                        "Cover Master" : {
                            "Tier I": "Bypass half cover; full cover becomes half cover.",
                            "Tier II": "Bypass half cover; full cover becomes half cover.\nYour half cover becomes full cover.",
                            "Tier III": "Bypass half cover; full cover becomes half cover.\nYour half cover becomes full cover.\nDeal x1.5 damage while behind cover.",
                            "Tier IV": "Bypass half and full cover.\nYour half cover becomes full cover.\nDeal x1.75 damage while behind cover.\nYou're in half cover when you're covered in shadows.",
                            "Tier V": "Bypass half and full cover.\nYour half cover becomes full cover.\nDeal x2 damage while behind cover.\nYou're in full cover when you're covered in shadows."
                        },
                        "Stat Peek" : {
                            "Tier I": "Once per Start Phase you can do a Perception check against the enemy's Defense DC; if you win, learn what the max value of one Basic or Secondary Stat is.",
                            "Tier II": "Once per Start Phase you can do a Perception check against the enemy's Defense DC; if you win, learn what three Basic or Secondary Stats are at this moment.\nThe next attack done against this enemy gets a +3 Attack Plus.",
                            "Tier III": "Once per Start Phase you can do a Perception check against the enemy's Defense DC; if you win, learn what all the target's stats are.\nThe next attack done against this enemy gets a +5 Attack Plus.",
                            "Tier IV": "Once per Start Phase you can do a Perception check against the enemy's Defense DC; if you win, learn what all the target's stats are.\nFor the next round all attacks against this enemy gets a +3 Attack Plus.",
                            "Tier V": "Once per Start Phase you can do a Perception check against the enemy's Defense DC; if you win, learn what all the target's stats and battle intentions are.\nFor the next round all attacks against this enemy gets a +5 Attack Plus."
                        },
                        "Lend Passive" : {
                            "Tier I": "Once at each End Phase you can let an ally use one of your Passives; you can't benefit from this Passive till your next Start Phase.",
                            "Tier II": "Once at each End Phase you can let an ally use up to two of your Passives; you can't benefit from this Passive till your next Start Phase.",
                            "Tier III": "Once at each End Phase you can let an ally use up to three of your Passives. You can still benefit from these Passives.",
                            "Tier IV": "Once at each End Phase you can let up to two allies use up to two of your Passives. You can still benefit from these Passives.",
                            "Tier V": "Once at each End Phase you can let up to three allies use up to three of your Passives. You can still benefit from these Passives."
                        }, 
                        "Opportunity Attack" : {
                            "Tier I": "Once per round when an enemy leaves your melee range you may target them with a free weapon attack.",
                            "Tier II": "Once per round when an enemy leaves your melee range you may target them with a free weapon attack that gets a +3 Attack Plus.",
                            "Tier III": "Up to twice per round when an enemy leaves your melee range you may target them with a free weapon attack that gets a +3 Attack Plus and +3 Damage Plus.\nIf you hit you can choose to make them stop in their tracks, wasting all their Movement Speed.",
                            "Tier IV": "Up to twice per round when an enemy leaves your melee range you may target them with a free weapon attack that gets a +4 Attack Plus and +4 Damage Plus.\nIf you hit you can choose to make them stop in their tracks, wasting all their Movement Speed, or you may choose to move them up to 5 tiles in any direction.",
                            "Tier V": "Up to three times per round when an enemy leaves your melee or ranged weapon range you may target them with a free weapon attack that gets a +5 Attack Plus and +5 Damage Plus.\nIf you hit you can choose to make them stop in their tracks, wasting all their Movement Speed, or you may choose to move them up to 10 tiles in any direction."
                        },
                        "AOE Buff" : {
                            "Tier I": "Your AOE Radius now = Perception x1.5",
                            "Tier II": "Your AOE Radius now = Perception x1.75\nYour AOEs now get a +2 Damage Plus.\nOnce a turn you can push everyone who got hit by an AOE attack to the tiles right beyond your AOE Radius.",
                            "Tier III": "Your AOE Radius now = Perception x2\nYour AOEs now get a +3 Damage Plus.\nOnce a turn you can either push everyone who got hit by an AOE attack to the tiles right beyond your AOE Radius or pull them as close as they can be to the center of your AOE.",
                            "Tier IV": "Your AOE Radius now = Perception x2.25\nYour AOEs now get a +5 Damage Plus.\nYou can exclude anyone you want from your AOEs.\nTwice a turn you can either push everyone who got hit by an AOE attack to the tiles right beyond your AOE Radius or pull them as close as they can be to the center of your AOE.",
                            "Tier V": "Your AOE Radius now = Perception x2.5\nYour AOEs now get a +7 Damage Plus.\nYou can exclude anyone you want from your AOEs.\nThree times a turn you can either push everyone who got hit by an AOE attack to the tiles right beyond your AOE Radius or pull them as close as they can be to the center of your AOE."
                        },
                        "Instant Hack" : {
                            "Tier I": "Once a run you can add 10 to a Hacking check.",
                            "Tier II": "Twice a run you can add 15 to a Hacking check. Each time you finish a Hack successfully gain 250 Essence.",
                            "Tier III": "Twice a run you can add 15 to a Hacking check. Each time you finish a Hack successfully gain 500 Essenceand a random piece of gear.",
                            "Tier IV": "Three times a run you can add 15 to a Hacking check. Each time you finish a Hack successfully gain 500 Essence and a random piece of gear with +1 Luck.",
                            "Tier V": "Three times a run you can add 20 to a Hacking check. Each time you finish a Hack successfully gain 1000 Essence and a random piece of gear with +3 Luck."
                        },
                        "Gray Buff" : {
                            "Tier I": "G = The amount of Gray pieces of gear you have equipped.\n- Perception: G÷3\n- Hacking: G÷3",
                            "Tier II": "G = The amount of Gray pieces of gear you have equipped.\n- Perception: G÷2\n- Hacking: G÷2\n- Luck: +2",
                            "Tier III": "G = The amount of Gray pieces of gear you have equipped.\n- Perception: G\n- Hacking: G\n- Luck: +3\n- HP: Gx1.5",
                            "Tier IV": "G = The amount of Gray pieces of gear you have equipped.\n- Perception: Gx1.25\n- Hacking: Gx1.25\n- Luck: +4\n- HP: Gx1.75\n- Group XP Gain: 4",
                            "Tier V": "G = The amount of Gray pieces of gear you have equipped.\n- Perception: Gx1.5\n- Hacking: Gx1.5\n- Luck: +5\n- HP: Gx2.5\n- Group XP Gain: 5\n- Intelligence: +1"
                        }
                    }
        elif color2:
            match self.colorMix:
                case "Red Blue" | "Blue Red":
                    self.abilities = {
                        "Sides of a Coin" : {
                            "Tier I": "Once per turn when you successfully hit an enemy gain a +1 to Defense DC for the next round.\nOnce per round when you successfully defend against an enemy attack gain a +1 to Attack Plus for the next round.\nBoth these effects end on your next End Phase.",
                            "Tier II": "Twice per turn when you successfully hit an enemy gain a +1 to Defense DC and a +1 to Armor for the next round.\nTwice per round when you successfully defend against an enemy attack gain a +1 to Attack Plus and a +1 to Damage Plus for the next round.\nBoth these effects end on your next End Phase.",
                            "Tier III": "Twice per turn when you successfully hit an enemy gain a +2 to Defense DC and a +2 to Armor for the next round.\nTwice per round when you successfully defend against an enemy attack gain a +2 to Attack Plus and a +2 to Damage Plus for the next round.\nBoth these effects end on your next End Phase.",
                            "Tier IV": "Three times per turn when you successfully hit an enemy gain a +2 to Defense DC and a +2 to Armor for the next round.\nThree times per round when you successfully defend against an enemy attack gain a +2 to Attack Plus and a +2 to Damage Plus for the next.\nBoth these effects end on your next End Phase.",
                            "Tier V": "Every time you successfully hit an enemy gain a +2 to Defense DC and a +2 to Armor for the next round.\nEvery time you successfully defend against an enemy attack gain a +2 to Attack Plus and a +2 to Damage Plus for the next round.\nBoth these effects end on your next End Phase."
                        },
                        "Thorny Defense" : {
                            "Tier I": "Whenever you block damage with Armor deal that amount of damage back to the attacker.",
                            "Tier II": "Whenever you block damage with Armor deal that amount of damage x1.5 back to the attacker.",
                            "Tier III": "Whenever you block damage with Armor deal that amount of damage x2 back to the attacker.\nWhenever your party blocks damage with Armor they deal that amount of damage back to the attacker.",
                            "Tier IV": "Whenever you block damage with Armor deal that amount of damage x2.5 back to the attacker.\nWhenever your party blocks damage with Armor they deal that amount of damage x1.5 back to the attacker.",
                            "Tier V": "Whenever you block damage with Armor deal that amount of damage x3 back to the attacker.\nWhenever your party blocks damage with Armor they deal that amount of damage x2 back to the attacker."
                        },
                        "Frostburn" : {
                            "Tier I": "Deal 1 damage when applying Freeze to a Burning enemy and vice versa.\nAttacks against enemies that are Freezing and Burning deal an additional +1 damage.",
                            "Tier II": "Deal 2 damage when applying Freeze to a Burning enemy and vice versa.\nAttacks against enemies that are Freezing and Burning deal an additional +2 damage.",
                            "Tier III": "Deal 3 damage when applying Freeze to a Burning enemy and vice versa.\nAttacks against enemies that are Freezing and Burning deal an additional +3 damage.",
                            "Tier IV": "Deal 4 damage when applying Freeze to a Burning enemy and vice versa.\nAttacks against enemies that are Freezing and Burning deal an additional +4 damage.",
                            "Tier V": "Deal 5 damage when applying Freeze to a Burning enemy and vice versa.\nAttacks against enemies that are Freezing and Burning deal an additional +5 damage."
                        }
                    }
                case "Red Green" | "Green Red":
                    self.abilities = {
                        "Long Reach" : {
                            "Tier I": "Your melee attacks now have a range equal to Range÷3.",
                            "Tier II": "Your melee attacks now have a range equal to Range÷2.",
                            "Tier III": "Your melee attacks now have a range equal to Range x1.25.",
                            "Tier IV": "Your melee attacks now have a range equal to Range x1.5.",
                            "Tier V": "Your melee attacks now have a range equal to Range x2."
                        },
                        "Surprise" : {
                            "Tier I": "You have +2 Attack Plus and +2 Damage Plus on the first round of combat.",
                            "Tier II": "You have +4 Attack Plus and +4 Damage Plus on the first round of combat.",
                            "Tier III": "You gain the following on the first round of combat:\n- +5 Attack Plus and +5 Damage Plus\n- Generate 2 more Energy of your choice",
                            "Tier IV": "You gain the following on the first round of combat:\n- +7 Attack Plus and +7 Damage Plus\n- Generate 3 more Energy of your choice\n- Whole party gets +2 Attack Plus and +2 Damage Plus",
                            "Tier V": "You gain the following on the first round of combat:\n- +10 Attack Plus and +10 Damage Plus\n- Generate 5 more Energy of your choice\n- Whole party gets +5 Attack Plus and +5 Damage Plus"
                        },
                        "Poisonburn" : {
                            "Tier I": "Deal 1 damage when applying Poison to a Burning enemy and vice versa.\nAttacks against enemies that are Poisoned and Burning deal an additional +1 damage.",
                            "Tier II": "Deal 2 damage when applying Poison to a Burning enemy and vice versa.\nAttacks against enemies that are Poisoned and Burning deal an additional +2 damage.",
                            "Tier III": "Deal 3 damage when applying Poison to a Burning enemy and vice versa.\nAttacks against enemies that are Poisoned and Burning deal an additional +3 damage.",
                            "Tier IV": "Deal 4 damage when applying Poison to a Burning enemy and vice versa.\nAttacks against enemies that are Poisoned and Burning deal an additional +4 damage.",
                            "Tier V": "Deal 5 damage when applying Poison to a Burning enemy and vice versa.\nAttacks against enemies that are Poisoned and Burning deal an additional +5 damage."
                        }
                    }
                case "Blue Green" | "Green Blue":
                    self.abilities = {
                        "Toughness" : {
                            "Tier I": "Increase your HP Max by a quarter your current Max.\nHeal 1 HP when you successfully defend.",
                            "Tier II": "Increase your HP Max by half your current Max.\nHeal 2 HP when you successfully defend.",
                            "Tier III": "Increase your HP Max by 3/4 your current Max.\nHeal 3 HP when you successfully defend.",
                            "Tier IV": "Increase your HP Max by 3/4 your current Max.\nHeal 4 HP when you successfully defend.",
                            "Tier V": "Double your HP Max.\nHeal 5 HP when you successfully defend."
                        },
                        "Poisonfreeze" : {
                            "Tier I": "Deal 1 damage when applying Poison to a Frozen enemy and vice versa.\nAttacks against enemies that are Poisoned and Frozen deal an additional +1 damage.",
                            "Tier II": "Deal 2 damage when applying Poison to a Frozen enemy and vice versa.\nAttacks against enemies that are Poisoned and Frozen deal an additional +2 damage.",
                            "Tier III": "Deal 3 damage when applying Poison to a Frozen enemy and vice versa.\nAttacks against enemies that are Poisoned and Frozen deal an additional +3 damage.",
                            "Tier IV": "Deal 4 damage when applying Poison to a Frozen enemy and vice versa.\nAttacks against enemies that are Poisoned and Frozen deal an additional +4 damage.",
                            "Tier V": "Deal 5 damage when applying Poison to a Frozen enemy and vice versa.\nAttacks against enemies that are Poisoned and Frozen deal an additional +5 damage."
                        },
                        "Revive" : {
                            "Tier I": "Can revive a downed ally with one quarter HP once per run.",
                            "Tier II": "Can revive a downed ally with half HP once per run.",
                            "Tier III": "Can revive a downed ally with half HP twice per run.",
                            "Tier IV": "Can revive a downed ally with half HP three times per run.",
                            "Tier V": "Can revive a downed ally with half HP once per node."
                        }
                    }
                case "Blue Gray" | "Gray Blue":
                    self.abilities = {
                        "Hardiness" : {
                            "Tier I": "Gain +2 Armor.\nAll your allies gain +1 Armor.",
                            "Tier II": "Gain +4 Armor.\nAll your allies gain +2 Armor.",
                            "Tier III": "Gain +6 Armor.\nAll your allies gain +3 Armor.",
                            "Tier IV": "Gain +8 Armor.\nAll your allies gain +4 Armor.",
                            "Tier V": "Gain +10 Armor.\nAll your allies gain +5 Armor."
                        },
                        "Nullify Damage" : {
                            "Tier I": "During your End Phase you may choose an ally; the next attack that hits them deals half damage.",
                            "Tier II": "During your End Phase you may choose an ally; the next attack that hits them deals no damage.",
                            "Tier III": "During your End Phase you may choose an ally; the next attack that hits them deals no damage.\nTwice per round when an ally gets hit by an attack you may choose to have it deal half damage.",
                            "Tier IV": "During your End Phase you may choose two allies; the next attack that hits them deals no damage.\nThree times per round when an ally gets hit by an attack you may choose to have it deal half damage.",
                            "Tier V": "Five times per round when an ally gets hit by an attack you may choose to have it deal no damage."
                        },
                        "AOE Freeze" : {
                            "Tier I": "Once per turn you may have an AOE attack apply Freeze to everyone it hits.",
                            "Tier II": "Once per turn you may have an AOE attack apply Freeze to everyone in range, whether it hits them or not.",
                            "Tier III": "Twice per turn you may have an AOE attack apply Freeze to everyone in range, whether it hits them or not.\nYou may choose to have all the stacks of Freeze that would be applied by an AOE attack all be applied to one target in range instead.",
                            "Tier IV": "Twice per turn you may have an AOE attack apply Freeze to everyone in range, whether it hits them or not.\nOnce per turn you may have an AOE attack apply a stack of Freeze per tile it targets to one target instead.",
                            "Tier V": "Three times per turn you may have an AOE attack apply Freeze to everyone in range, whether it hits them or not.\nTwice per turn you may have an AOE attack apply a stack of Freeze per tile it targets to one target instead."
                        }
                    }
                case "Red Gray" | "Gray Red":
                    self.abilities = {
                        "Damage Buff +" : {
                            "Tier I": "You and each of your allies may raise the Tier of the Damage Dice when they hit with an attack (one use per turn each).",
                            "Tier II": "You and each of your allies may raise the Tier of the Damage Dice when they hit with an attack (two uses per turn each).",
                            "Tier III": "You and each of your allies may raise the Tier of the Damage Dice twice when they hit with an attack (two uses per turn each).",
                            "Tier IV": "You and each of your allies may raise the Tier of the Damage Dice twice when they hit with an attack (three uses per turn each).",
                            "Tier V": "You and each of your allies may raise the Tier of the Damage Dice three times when they hit with an attack (three uses per turn each)."
                        },
                        "Party Critical Hits" : {
                            "Tier I": "Whenever you or any of your allies roll a 20 on an attack roll they deal x1.5 damage.",
                            "Tier II": "Whenever you or any of your allies roll a 20 on an attack roll they deal x2 damage.",
                            "Tier III": "Whenever you or any of your allies roll a 19-20 on an attack roll they deal x2 damage.",
                            "Tier IV": "Whenever you or any of your allies roll a 18-20 on an attack roll they deal x2 damage.",
                            "Tier V": "Whenever you or any of your allies roll a 18-20 on an attack roll they deal x3 damage."
                        },
                        "Party Jump" : {
                            "Tier I": "You and anybody in your party may now spend Movement tiles to jump with a 2/1 ratio (2 Movement tiles for 1 tiles of jump).",
                            "Tier II": "Jump ratio is now 3/2.",
                            "Tier III": "Jump ratio is now 1/1. You and anyone in your party can now do a jump attack that does a 2d8 of damage per Energy spent on the attack.",
                            "Tier IV": "Jump ratio is now 1/2. You and anyone in your party can now do a jump attack that does a 2d10 of damage per Energy spent on the attack.",
                            "Tier V": "Jump ratio is now 1/3. You and anyone in your party can now do a jump attack that does a 2d12 of damage per Energy spent on the attack."
                        }
                    }
                case "Green Gray" | "Gray Green":
                    self.abilities = {
                        "Party Wild Growth" : {
                            "Tier I": "Whenever you or anyone in your party gains HP in combat you may deal 1 damage to any target for every 3 HP they heal.",
                            "Tier II": "Whenever you or anyone in your party gains HP in combat you may deal 1 damage to any target for every 2 HP they heal.",
                            "Tier III": "Whenever you or anyone in your party gains HP in combat you may deal 1 damage to any target for every 1 HP they heal.",
                            "Tier IV": "Whenever you or anyone in your party gains HP in combat you may deal 1 damage to any two targets for every 1 HP they heal.",
                            "Tier V": "Whenever you or anyone in your party gains HP in combat you may deal 1 damage to any three targets for every 1 HP they heal."
                        },
                        "Party Opportunity Attack" : {
                            "Tier I": "Once per round when an enemy leaves you or anyone in your party's melee range they may target the enemy with a free weapon attack.",
                            "Tier II": "Once per round when an enemy leaves you or anyone in your party's melee range they may target the enemy with a free weapon attack that gets a +3 Attack Plus.",
                            "Tier III": "Up to twice per round when an enemy leaves you or anyone in your party's melee range they may target them with a free weapon attack that gets a +3 Attack Plus and +3 Damage Plus.\nIf they hit they can choose to make the enemy stop in their tracks, wasting all their Movement Speed.",
                            "Tier IV": "Up to twice per round when an enemy leaves you or anyone in your party's melee range they may target them with a free weapon attack that gets a +4 Attack Plus and +4 Damage Plus.\nIf they hit they can choose to make the enemy stop in their tracks, wasting all their Movement Speed, or they may choose to move the enemy up to 5 tiles in any direction.",
                            "Tier V": "Up to three times per round when an enemy leaves you or anyone in your party's melee or ranged weapon range they may target them with a free weapon attack that gets a +5 Attack Plus and +5 Damage Plus.\nIf they hit they can choose to make the enemy stop in their tracks, wasting all their Movement Speed, or they may choose to move the enemy up to 10 tiles in any direction."
                        },
                        "Reposition" : {
                            "Tier I": "You may use your Movement tiles to move willing allies on your turn.",
                            "Tier II": "You may use your Movement tiles to move willing allies on your turn at a 2/3 ratio (2 Movement tiles to move a teammate 3 tiles).",
                            "Tier III": "You may use your Movement tiles to move willing allies on your turn at a 1/2 ratio.\nYou may teleport an ally using your own Movement tiles at a 1/1 ratio.",
                            "Tier IV": "You may use your Movement tiles to move willing allies on your turn at a 1/3 ratio.\nYou may teleport an ally using your own Movement tiles at a 1/2 ratio.\nOnce per turn you may swap two allies (teleporting them to where the other was).",
                            "Tier V": "You may use your Movement tiles to move willing allies on your turn at a 1/4 ratio.\nYou may teleport an ally using your own Movement tiles at a 1/3 ratio.\nTwice per turn you may swap two allies (teleporting them to where the other was)."
                        }
                    }

class ConsumableEffectCatalog(AbilityCatalog):
    def __init__(self, color, color2):
        super().__init__(color, color2)
        
        self.abilities = {
            "Healing" : {
                "Common" : ["Cleanse one person of up to 2 stacks of any Status Effect","Heal 1 person 20% of Max HP","Heal 1 person 30% of Max HP","Heal 1 person 40% of Max HP (can't use during combat)"],
                "Uncommon" : ["Cleanse one person of up to 4 stacks of any Status Effect","Heal 1 person 40% of Max HP","Heal 1 person 50% of Max HP","Heal 1 person 75% of Max HP (can't use during combat)"],
                "Rare" : ["Cleanse up to two people of 6 stacks of any Status Effect each","Heal up to 2 people 40% of Max HP","Heal 1 person 100% of Max HP","Heal up to 3 people 50% of Max HP (can't use during combat)"],
                "Epic" : ["Cleanse up to three people of 8 stacks of any Status Effect each","Heal up to 3 people 50% of Max HP","Heal up to 3 people 100% of Max HP","Bring unlimited cyberghosts back to life (can't use during combat)"],
                "Legendary" : ["Bring unlimited cyberghosts back to life","Heal unlimited people 75% of Max HP","Heal unlimited people 100% of Max HP","Increase Max HP by 20% (can't use during combat)"]
            },            
            "Energy" : {
                "Common" : "Grants 3 Energy of any one color instantly (can go above Energy Cap)",
                "Uncommon" : "Grants 5 Energy of any one color instantly (can go above Energy Cap)",
                "Rare" : "Grants 7 Energy of any one color instantly (can go above Energy Cap)",
                "Epic" : "Grants 10 Energy of any two colors instantly (can go above Energy Cap)",
                "Legendary" : "Grants 15 Energy of any colors instantly (can go above Energy Cap)"
            },
            "Local Shop Upgrade" : {
                "Common" : "Get 1 free Local Shop Upgrade (moves one category up one tier)",
                "Uncommon" : "Get 2 free Local Shop Upgrades (moves two categories up one tier)",
                "Rare" : "Get 2 free double Local Shop Upgrades (moves two categories up two tiers)",
                "Epic" : "Get 3 free double Local Shop Upgrades (moves two categories up two tiers)",
                "Legendary" : "Move all Local Shop Upgrade categories up two tiers"
            },
            "Respec Stats" : {
                "Common" : "You may reallocate your Basic Stats (Power, Defense, Speed, Intelligence) any way you like; make sure to not reallocate any Basic Stat Buffs given by Gear",
                "Uncommon" : "You may reallocate your Basic Stats (Power, Defense, Speed, Intelligence) any way you like; make sure to not reallocate any Basic Stat Buffs given by Gear",
                "Rare" : "You may add one point to any Basic Stat and/or reallocate your Basic Stats (Power, Defense, Speed, Intelligence) any way you like; make sure to not reallocate any Basic Stat Buffs given by Gear",
                "Epic" : "You may add one point to any Basic Stat and/or reallocate your Basic Stats (Power, Defense, Speed, Intelligence) any way you like; make sure to not reallocate any Basic Stat Buffs given by Gear",
                "Legendary" : "You may add one point to any two Basic Stats and/or reallocate your Basic Stats (Power, Defense, Speed, Intelligence) any way you like; make sure to not reallocate any Basic Stat Buffs given by Gear"
            },
            "Gear Mod" : ["Upgrade a piece of Gear that has the same or lower rarity as this Consumable","Reroll the Stat Buffs of a piece of Gear that has the same or lower rarity as this Consumable","Condense a piece of Gear that has the same or lower rarity as this Consumable (can condense as many modifiers as you'd like)","Change the Aesthetic of any piece of Gear, regardless of rarity"],
            "Temp Buff" : "These Stat Buffs last one full node (and disappear when you transition to the next node)",
            "Gear Type Change" : "Change a piece of Gear to a type that you decide (must have the same or lower rarity as this Consumable)",
            "Gear Color Change" : "Change a piece of Gear to a color that you decide (must have the same or lower rarity as this Consumable)"
        }
             
class BaubleEffectCatalog(AbilityCatalog):
    def __init__(self, color, color2):
        super().__init__(color, color2)

        self.abilities = {
            "Empowered Ghost" : {
                "Common" : "Add L÷4 to all cyberghost abilities (min of 1).",
                "Uncommon" : "Add L÷3 to all cyberghost abilities (min of 1). You can now move small objects as a cyberghost.",
                "Rare" : "Add L÷2 to all cyberghost abilities (min of 1). Can now add half your Power stat plus L÷2 to an ally's Attack Roll twice per turn.",
                "Epic" : "Add L to all cyberghost abilities (min of 1). Can now add half your Power stat plus L to the damage of an ally's successful attack once per turn.",
                "Legendary" : "Add Lx1.25 to all cyberghost abilities (min of 1). Can now add half your Power stat plus Lx1.25 to the damage of an ally's successful attack twice per turn."},
            "Resurrection" : {
                "Common" : "Can revive a downed ally with one quarter HP once per run.",
                "Uncommon" : "Can revive a downed ally with half HP once per run.",
                "Rare" : "Can revive a downed ally with half HP twice per run.",
                "Epic" : "Can revive a downed ally with half HP three times per run.",
                "Legendary" : "Can revive a downed ally with half HP once per node."},
            "Instant Reroll" : {
                "Common" : "Can reroll a piece of gear right after collapsing it once per run.",
                "Uncommon" : "Can reroll two pieces of gear right after collapsing them once per run.",
                "Rare" : "Get two rerolls for a piece of gear right after collapsing it twice per run (reroll, and if you don't like the result you can reroll again).",
                "Epic" : "Get three rerolls for a piece of gear right after collapsing it twice per run (reroll, and if you don't like the result you can reroll one or two times more).",
                "Legendary" : "Get three rerolls for a piece of gear right after collapsing it once per node (reroll, and if you don't like the result you can reroll one or two times more)."},
            "Magnify Luck" : {
                "Common" : "Can double your luck stat for a gear drop once per run.",
                "Uncommon" : "Can double your luck stat for a gear drop twice per run.",
                "Rare" : "Can double your luck stat for a gear drop three times per run.",
                "Epic" : "Can double your luck stat for a gear drop once per node.",
                "Legendary" : "Can triple your luck stat for a gear drop once per node."},
            "Hidden Essence" : {
                "Common" : "x1.25 value when reducing an item to essence",
                "Uncommon" : "x1.5 value when reducing an item to essence",
                "Rare" : "x1.75 value when reducing an item to essence",
                "Epic" : "x2 value when reducing an item to essence",
                "Legendary" : "x2.5 value when reducing an item to essence"},
            "Gear Select" : {
                "Common" : "Can choose what type of gear you get from a drop once per run.",
                "Uncommon" : "Can choose what type of gear you get from a drop twice per run.",
                "Rare" : "Can choose what type of gear you get from a drop three times per run.",
                "Epic" : "Can choose what type of gear you get from a drop once per node.",
                "Legendary" : "Can choose what type of gear you get from a drop once per node (and you can reroll the gear you get twice)."},
            "Color Select" : {
                "Common" : "Can choose what color a gear drop is once per run.",
                "Uncommon" : "Can choose what color a gear drop is twice per run.",
                "Rare" : "Can choose what color a gear drop is three times per run.",
                "Epic" : "Can choose what color a gear drop is once per node.",
                "Legendary" : "Can choose what color a gear drop is once per node (and you can reroll the gear you get twice)."},
            "Shop Enhancement" : {
                "Common" : "Local node shop luck +2.",
                "Uncommon" : "Local node shop luck +4, 15% off original prices.",
                "Rare" : "Local node shop luck +6, 25% off original prices.",
                "Epic" : "Local node shop luck +8, 30% off original prices, 5% off original refresh price.",
                "Legendary" : "Local node shop luck +10, 35% off original prices, 10% off original refresh price."}
        }

        




