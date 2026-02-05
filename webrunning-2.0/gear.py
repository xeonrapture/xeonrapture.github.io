import random
from miscFunc import d
from statbuff import StatBuff
from ability import Ability
from abc import ABC, abstractmethod

file = "output.txt"

class Gear:

    COUNT = 1

    def __init__(self, luck, gearType, rarity = None, color = None, color2 = None):
        # if nothing passed in they should randomize based on luck
        self.luck = luck
        self.rarity = rarity
        self.color = color
        self.color2 = color2
        self.gearType = gearType

        self.rarityActiveMessage = ""

        if self.color2:
            if self.color == self.color2:
                raise Exception(f"Color must be different than Color2! {self.color} == {self.color2}")
            self.isColorMix = True
        else:
            self.isColorMix = False

        self.specificItem = ""
        self.aesthetic = ""

        self.basicBuffCount = 0
        self.colorBuffCount = 0
        self.abilityCount = 0

        self.basicStatBuffs = []
        self.colorStatBuffs = []
        self.normalBuffNames = []
        self.abilities = []

        self.essenceValue = 0
        self.creditValue = 0

        self.colorDict = {
                1: "Neutral",
                2: "Red",
                3: "Blue",
                4: "Green",
                5: "Gray"
            }

        self.rarityList = ["Common","Uncommon","Rare","Epic","Legendary"]

        self.aestheticDict = {
            1: "Valdan (Cyberpunk)",
            2: "Ydilikian (Medieval)",
            3: "Asticarian (Modern)",
            4: "Rtolkan (Steampunk)",
            5: "Pbosh (Viking/Heavy, Rough Metal)",
            6: "Cortez (Western)",
            7: "Cortez (Pirate)",
            8: "Jiyyagan (Survivor/Jungle)"
        }

        self.defineColor()
        self.defineRarity()
        self.defineValue()
        self.defineAesthetic()
        self.defineGearType()

    def defineGearType(self):
        match self.gearType:
            case "One-Handed Weapon" | "Two-Handed Weapon":
                self.__class__ = Weapon
                self.convert()
            case "Head" | "Torso" | "Hands" | "Legs" | "Feet" | "Ring" | "Neck":
                self.__class__ = Clothing
                self.convert()
            case "Kernel":
                self.__class__ = Kernel
                self.convert()
            case "Consumable":
                self.__class__ = Consumable
                self.convert()
            case "Bauble":
                self.__class__ = Bauble
                self.convert()
            case _:
                raise Exception(f"GearType was {self.gearType}\nGearType must be one of the following:\nOne-Handed Weapon, Two-Handed Weapon, Head, Torso, Hands, Legs, Feet, Ring, Neck, Kernel, Consumable, Bauble")

    def defineRarity(self):
        uncommon = min(100, round(7 * self.luck))
        rare = min(100, round(3 * self.luck))
        epic = min(100, round(1.2 * self.luck))
        legendary = min(100, round(0.4 * self.luck))
        if self.rarity == None:
            roll = d(100)
            if roll <= legendary: 
                self.rarity = "Legendary"
                self.rarityActiveMessage = "You have access to Tiers I-IV of each of your Actives."
            elif roll <= epic: 
                self.rarity = "Epic"
                self.rarityActiveMessage = "You have access to Tiers I-III of each of your Actives."
            elif roll <= rare: 
                self.rarity = "Rare"
                self.rarityActiveMessage = "You have access to Tiers I-II your Active."
            elif roll <= uncommon: 
                self.rarity = "Uncommon"
                self.rarityActiveMessage = "You have access to Tier I of your Active."
            else: self.rarity = "Common"
        elif self.rarity in self.rarityList:
            match self.rarity:
                case "Legendary":
                    self.rarityActiveMessage = "You have access to Tiers I-IV of each of your Actives."
                case "Epic":
                    self.rarityActiveMessage = "You have access to Tiers I-III of each of your Actives."
                case "Rare":
                    self.rarityActiveMessage = "You have access to Tiers I-II your Active."
                case "Uncommon":
                    self.rarityActiveMessage = "You have access to Tier I of your Active."
        else: raise Exception(f"Rarity is {self.rarity}\nRarity must be Common, Uncommon, Rare, Epic, or Legendary")
            
    def defineValue(self):
        match self.rarity:
            case "Common":
                self.essenceValue = 500
                self.creditValue = 50
            case "Uncommon":
                self.essenceValue = 1000
                self.creditValue = 100
            case "Rare":
                self.essenceValue = 2000
                self.creditValue = 200
            case "Epic":
                self.essenceValue = 5000
                self.creditValue = 500
            case "Legendary":
                self.essenceValue = 10000
                self.creditValue = 1000

    def defineBuffCounts(self):
        match self.rarity:
            case "Common":
                self.basicBuffCount = 1
            case "Uncommon":
                self.basicBuffCount = 1
                self.colorBuffCount = 1
                self.abilityCount = 1
            case "Rare":
                self.basicBuffCount = 1
                self.colorBuffCount = 2
                self.abilityCount = 2
            case "Epic":
                self.basicBuffCount = 2
                self.colorBuffCount = 2
                self.abilityCount = 2
            case "Legendary":
                self.basicBuffCount = 2
                self.colorBuffCount = 3
                self.abilityCount = 3

    def defineBuffs(self):
        for i in range(self.colorBuffCount):
            statBuff = StatBuff(self.luck, self.rarity, self.color, None)
            while statBuff.normalName in self.normalBuffNames:
                statBuff = StatBuff(self.luck, self.rarity, self.color, None)
            self.colorStatBuffs.append(statBuff)
            self.normalBuffNames.append(statBuff.normalName)
        if self.isColorMix:
            statBuff = StatBuff(self.luck, self.rarity, self.color2, None)
            while statBuff.normalName in self.normalBuffNames:
                statBuff = StatBuff(self.luck, self.rarity, self.color2, None)
            self.colorStatBuffs.append(statBuff)
            self.normalBuffNames.append(statBuff.normalName)
        for i in range(self.basicBuffCount):
            statBuff = StatBuff(self.luck, self.rarity, None, self.gearType)
            while statBuff.normalName in self.normalBuffNames:
                statBuff = StatBuff(self.luck, self.rarity, None, self.gearType)
            self.basicStatBuffs.append(statBuff)
            self.normalBuffNames.append(statBuff.normalName)
        
    def defineColor(self):
        if self.color == None:
            randInt = d(6)
            if 0 < randInt < 6: 
                self.color = self.colorDict[randInt]
            elif randInt == 6:
                randInt2 = d(6)
                if 0 < randInt2 < 6: 
                    self.color = self.colorDict[randInt2]
                elif randInt2 == 6:
                    self.isColorMix = True
                    randInt3 = d(4)+1
                    randInt4 = d(4)+1
                    while randInt3 == randInt4:
                        randInt4 = d(4)+1
                    self.color = self.colorDict[randInt3]
                    self.color2 = self.colorDict[randInt4]
        else:
            if self.color not in self.colorDict.values():
                raise Exception(f"Color was {self.color}\nColor must be one of the following: Neutral, Red, Blue, Green, Gray")
            if self.color2 != None and self.color2 not in self.colorDict.values():
                raise Exception(f"Color was {self.color2}\nColor must be one of the following: Neutral, Red, Blue, Green, Gray")
            
    def defineAbilities(self):
        for i in range (self.abilityCount):
            self.abilities.append(Ability(self.rarity, self.color, self.gearType, self.color2))

    def defineAesthetic(self):
        randInt = d(8)
        self.aesthetic = self.aestheticDict[randInt]

    def defineSpecificItem(self):
        pass

    def printDebug(self):
        print(f"luck is {self.luck}")
        print(f"geartype is {self.gearType}")
        print(f"color is {self.color}")
        if self.isColorMix: print(f"color 2 is {self.color2}")
        print(f"rarity is {self.rarity}")
        print(f"ability count is: {self.abilityCount}")
        print(f"abilities are:")
        for each in self.abilities:
            print(f"ability: {each}")
        print(f"essencevalue is {self.essenceValue}")
        print(f"creditvalue is {self.creditValue}")
        print(f"aesthetic is {self.aesthetic}")

    @abstractmethod
    def printGear(self):
        print(f"Gear: {self.specificItem}")
        print(f"Rarity: {self.rarity}")

    @abstractmethod
    def printToFile(self):
        with open(file, "a", encoding="utf-8") as f:
            print("",file=f)
            print(f"#{Gear.COUNT}",file=f)
            print("",file=f)
            print(f"- Gear: {self.specificItem}",file=f)
            print(f"- Rarity: {self.rarity}",file=f)
            Gear.COUNT += 1
        
    @abstractmethod
    def printCalc(self):
        print(f"Gear: {self.specificItem}")
        print(f"Rarity: {self.rarity}")

class Weapon(Gear):
    def convert(self):
        self.damage = ""
        self.damage2 = ""
        self.damageType = ""
        self.damageType2 = ""

        self.isNeutral = False
        self.fakeColor = ""

        self.oneHandedWeaponDict = {
            "Red": ["Dagger","Morningstar","Shortsword","Katar","Rapier","Scimitar",
        "Katana","Machete","Handaxe","Flail","Pickaxe","Whip"],
            "Blue": ["Buckler Shield","Mace","Hammer","Club","Shillelagh","Gauntlet"],
            "Green": ["Pistol","Crossbow","Boomerang","Snowball","Shuriken","Throwing Knife",
        "Javelin","Rock","Uzi Gun","Coin","Sling","Atlatl"],
            "Gray": ["Wand","Orb","Totem","Crystal","Rod","Lantern","Ice Cube","Pineapple",
        "Bomb","Lightning Javelin","Mirror","Bell"]
        }

        self.twoHandedWeaponDict = {
            "Red": ["Lance","Dual Scimitars","Knife and Broadsword","Greatsword","Trident",
        "Pollaxe","Odachi","Ngao","Spear/Glaive","Scythe","Greataxe","Halberd"],
            "Blue": ["Kite Shield","Brass Knuckles","Quarterstaff","Nunchucks","Greathammer",
        "Three-section Staff","Eku","Dual Gauntlets"],
            "Green": ["Sniper Rifle","Shortbow","Shotgun","Longbow","Hand Cannon","Rifle",
        "Boulder","Harpoon Gun","Minigun","Blunderbuss","Deck of Cards","Blowgun"],
            "Gray": ["Magic Staff","Grenade Launcher","Caster Gloves","Statue","Astral Greatsword",
        "Flute","Guitar","Rocket Launcher","Drum","Trumpet","Flamethrower",
        "Exploding Pumpkin"]
        }

        self.oneHandedDamageDict = {
            "Neutral": ["d6","d8","d10","d12","2d8"],
            "Red": ["d8","d10","d12","2d8","2d10"],
            "Blue": ["d6","d8","d10","d12","2d8"],
            "Green": ["d6","d8","d10","d12","2d8"],
            "Gray": ["d2","d4","d6","d8","d10"]
        }

        self.twoHandedDamageDict = {
            "Neutral": ["d8","d10","d12","2d8","2d10"],
            "Red": ["d10","d12","2d8","2d10","2d12"],
            "Blue": ["d8","d10","d12","2d8","2d10"],
            "Green": ["d8","d10","d12","2d8","2d10"],
            "Gray": ["d4","d6","d8","d10","d12"]
        }

        self.rarityDict = {
            "Common" : 1,
            "Uncommon" : 2,
            "Rare" : 3,
            "Epic" : 4,
            "Legendary" : 5
            }
        
        self.damageTierDict = {
            "d2": 1,
            "d4": 2,
            "d6": 3,
            "d8": 4,
            "d10": 5,
            "d12": 6,
            "2d8": 7,
            "2d10": 8,
            "2d12" : 9
        }

        self.inverseDamageTierDict = {
            1 : "d2",
            2 : "d4",
            3 : "d6",
            4 : "d8",
            5 : "d10",
            6 : "d12",
            7 : "2d8",
            8 : "2d10",
            9 : "2d12"
        }

        self.handleNeutral()

        self.defineAbilities()
        self.defineSpecificItem()

        
        self.defineBuffCounts()
        self.defineBuffs()
        if self.isColorMix:
            self.handleColorMix()
        else:
            self.defineDamage()
            self.defineDamageType()

    def defineAbilities(self):
        match self.rarity:
            case "Uncommon" | "Rare":
                self.abilityCount = 1
            case "Epic" | "Legendary":
                self.abilityCount = 2
            case _:
                pass
        for i in range (self.abilityCount):
            ability = Ability(self.rarity, self.color, self.gearType, self.color2)
            for each in self.abilities:
                while ability.name == each.name:
                    ability = Ability(self.rarity, self.color, self.gearType, self.color2)
            self.abilities.append(ability)

    def handleNeutral(self):
        if self.color == "Neutral":
            self.isNeutral = True
            self.fakeColor = self.colorDict[d(4)+1]
        elif self.color2 == "Neutral":
            self.fakeColor = self.colorDict[d(4)+1]
        else:
            return

    def defineSpecificItem(self):
        match self.gearType:
            case "One-Handed Weapon":
                if self.isNeutral:
                    itemList = self.oneHandedWeaponDict[self.fakeColor]
                    self.specificItem = random.choice(itemList)
                else:
                    itemList = self.oneHandedWeaponDict[self.color]
                    self.specificItem = random.choice(itemList)
            case "Two-Handed Weapon":
                if self.isNeutral:
                    itemList = self.twoHandedWeaponDict[self.fakeColor]
                    self.specificItem = random.choice(itemList)
                else:
                    itemList = self.twoHandedWeaponDict[self.color]
                    self.specificItem = random.choice(itemList)

    def defineDamage(self):
        match self.gearType:
            case "One-Handed Weapon":
                if self.isNeutral:
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.fakeColor]
                    self.damage = damageList[rarityNumber]
                else:
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]                    
            case "Two-Handed Weapon":
                if self.isNeutral:
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.fakeColor]
                    self.damage = damageList[rarityNumber]
                else:
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber] 

    def defineDamageType(self):
        match self.color:
            case "Neutral":
                match self.fakeColor:
                    case "Red" | "Blue":
                        self.damageType = "Melee"
                    case "Green":
                        self.damageType = "Ranged"
                    case "Gray":
                        self.damageType = "AOE Ranged"
            case "Red" | "Blue":
                self.damageType = "Melee"
            case "Green":
                self.damageType = "Ranged"
            case "Gray":
                self.damageType = "AOE Ranged"

    def handleColorMix(self):        
        if self.gearType == "One-Handed Weapon":
            match self.color:
                case "Neutral":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.fakeColor]
                    self.damage = damageList[rarityNumber]
                    match self.fakeColor:
                        case "Red" | "Blue":
                            self.damageType = "Melee"
                        case "Green":
                            self.damageType = "Ranged"
                        case "Gray":
                            self.damageType = "AOE Ranged"
                case "Red" | "Blue":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]    
                    self.damageType = "Melee"
                case "Green":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]    
                    self.damageType = "Ranged"
                case "Gray":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]    
                    self.damageType = "AOE Ranged"
            match self.color2:
                case "Neutral":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.fakeColor]
                    self.damage2 = damageList[rarityNumber]
                    match self.fakeColor:
                        case "Red" | "Blue":
                            self.damageType2 = "Melee"
                        case "Green":
                            self.damageType2 = "Ranged"
                        case "Gray":
                            self.damageType2 = "AOE Ranged"
                case "Red" | "Blue":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color2]
                    self.damage2 = damageList[rarityNumber] 
                    self.damageType2 = "Melee"
                case "Green":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color2]
                    self.damage2 = damageList[rarityNumber] 
                    self.damageType2 = "Ranged"
                case "Gray":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.oneHandedDamageDict[self.color2]
                    self.damage2 = damageList[rarityNumber] 
                    self.damageType2 = "AOE Ranged"
        elif self.gearType == "Two-Handed Weapon":
            match self.color:
                case "Neutral":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.fakeColor]
                    self.damage = damageList[rarityNumber]
                    match self.fakeColor:
                        case "Red" | "Blue":
                            self.damageType = "Melee"
                        case "Green":
                            self.damageType = "Ranged"
                        case "Gray":
                            self.damageType = "AOE Ranged"
                case "Red" | "Blue":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]    
                    self.damageType = "Melee"
                case "Green":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]    
                    self.damageType = "Ranged"
                case "Gray":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color]
                    self.damage = damageList[rarityNumber]    
                    self.damageType = "AOE Ranged"
            match self.color2:
                case "Neutral":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.fakeColor]
                    self.damage2 = damageList[rarityNumber]
                    match self.fakeColor:
                        case "Red" | "Blue":
                            self.damageType2 = "Melee"
                        case "Green":
                            self.damageType2 = "Ranged"
                        case "Gray":
                            self.damageType2 = "AOE Ranged"
                case "Red" | "Blue":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color2]
                    self.damage2 = damageList[rarityNumber] 
                    self.damageType2 = "Melee"
                case "Green":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color2]
                    self.damage2 = damageList[rarityNumber] 
                    self.damageType2 = "Ranged"
                case "Gray":
                    rarityNumber = self.rarityDict[self.rarity] - 1
                    damageList = self.twoHandedDamageDict[self.color2]
                    self.damage2 = damageList[rarityNumber] 
                    self.damageType2 = "AOE Ranged"

        if self.damageType == self.damageType2:
            damageNumber = self.damageTierDict[self.damage]
            damageNumber2 = self.damageTierDict[self.damage2]
            damageNumberMax = max(damageNumber, damageNumber2)
            self.damage = self.inverseDamageTierDict[damageNumberMax]
            self.damage2 = ""

    def printDebug(self):
        for each in self.abilities:
            print(each.link)
        
    def printGear(self):
        super().printGear()
        print(f"Gear Type: {self.gearType}")
        if not self.isColorMix:
            print(f"Color: {self.color}")
            print(f"Weapon Damage: {self.damage} {self.damageType}")
        elif self.isColorMix and self.damage2 != "":
            print(f"Color 1: {self.color}")
            print(f"Weapon Damage 1: {self.damage} {self.damageType}")
            print(f"Color 2: {self.color2}")
            print(f"Weapon Damage 2: {self.damage2} {self.damageType2}")
        elif self.isColorMix and self.damage2 == "":
            print(f"Color 1: {self.color}")
            print(f"Color 2: {self.color2}")
            print(f"Weapon Damage: {self.damage} {self.damageType}")
        print("Stat Buffs")
        for each in self.basicStatBuffs:
            print(f"- {each.name} = {each.formula}") 
        for each in self.colorStatBuffs:
            print(f"- {each.name} = {each.formula}") 
        i = 1
        for each in self.abilities:
            blank = '"_blank"'
            print(f"Active {i}: <a target={blank} href={each.link}>{each.name}</a>")
            i += 1
        if self.rarity != "Common":
            print(self.rarityActiveMessage)
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        print(f"Aesthetic: {self.aesthetic}")  

    def printToFile(self):
        super().printToFile()
        with open(file, "a", encoding="utf-8") as f:
            print(f"- Gear Type: {self.gearType}",file=f)
            if not self.isColorMix:
                print(f"- Color: {self.color}",file=f)
                print(f"- Weapon Damage: {self.damage} {self.damageType}",file=f)
            elif self.isColorMix and self.damage2 != "":
                print(f"- Color 1: {self.color}",file=f)
                print(f"- Weapon Damage 1: {self.damage} {self.damageType}",file=f)
                print(f"- Color 2: {self.color2}",file=f)
                print(f"- Weapon Damage 2: {self.damage2} {self.damageType2}",file=f)
            elif self.isColorMix and self.damage2 == "":
                print(f"- Color 1: {self.color}",file=f)
                print(f"- Color 2: {self.color2}",file=f)
                print(f"- Weapon Damage: {self.damage} {self.damageType}",file=f)
            print("- Stat Buffs",file=f)
            for each in self.basicStatBuffs:
                print(f"    - {each.name} = {each.formula}",file=f )
            for each in self.colorStatBuffs:
                print(f"    - {each.name} = {each.formula}",file=f )
            i = 1
            if self.rarity != "Common":
                print(f"- Actives:",file=f )    
            for each in self.abilities:
                print(f"    - [{each.name}]({each.link})",file=f )
                i += 1
            if self.rarity != "Common":
                print(f"    - {self.rarityActiveMessage}",file=f )
            print(f"- Essence Value: {self.essenceValue}",file=f)
            print(f"- Credit Value: {self.creditValue}",file=f)
            print(f"- Aesthetic: {self.aesthetic}",file=f)

    def printCalc(self):
        super().printCalc()
        print(f"Gear Type: {self.gearType}")
        if not self.isColorMix:
            print(f"Color: {self.color}")
            print(f"Weapon Damage: {self.damage} {self.damageType}")
        elif self.isColorMix and self.damage2 != "":
            print(f"Color 1: {self.color}")
            print(f"Weapon Damage 1: {self.damage} {self.damageType}")
            print(f"Color 2: {self.color2}")
            print(f"Weapon Damage 2: {self.damage2} {self.damageType2}")
        elif self.isColorMix and self.damage2 == "":
            print(f"Color 1: {self.color}")
            print(f"Color 2: {self.color2}")
            print(f"Weapon Damage: {self.damage} {self.damageType}")
        print("Stat Buffs")
        for each in self.basicStatBuffs:
            print(f"- {each.name} = {each.calc}") 
        for each in self.colorStatBuffs:
            print(f"- {each.name} = {each.calc}") 
        i = 1
        for each in self.abilities:
            blank = '"_blank"'
            print(f"Active {i}: <a target={blank} href={each.link}>{each.name}</a>")
            i += 1
        if self.rarity != "Common":
            print(self.rarityActiveMessage)
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        print(f"Aesthetic: {self.aesthetic}") 
      
class Clothing(Gear):
    def convert(self):
        self.clothingGearTable = {
            "Head": ["Hat","Helmet","Headband","Diadem","Facemask","Goggles","Earrings or Other Piercings","Glasses or Shades"],
            "Torso": ["Cloak + Tunic","T-Shirt","Longsleeve Shirt","Hoodie","Armor","Shirt + Cape","Dress","Jumpsuit"],
            "Hands": ["Gloves","Gauntlets","Bracelets", "Hand Chain"],
            "Legs": ["Pants","Shorts","Greaves","Baggy","Skirt","Kilt"],
            "Feet": ["Boots","Sneakers","Platform Shoes","Sandals", "Heels", "Flats"],
            "Ring": ["Large Gem","Small Band","Thick Band","Small Gem"],
            "Neck": ["Necklace","Collar","Chain","Choker"]
        }

        self.defineAbilities()
        self.defineSpecificItem()

        self.defineBuffCounts()
        self.defineBuffs()

    def defineAbilities(self):
        match self.rarity:
            case "Uncommon" | "Rare":
                self.abilityCount = 1
            case "Epic" | "Legendary":
                self.abilityCount = 2
            case _:
                pass
        for i in range (self.abilityCount):
            ability = Ability(self.rarity, self.color, self.gearType, self.color2)
            for each in self.abilities:
                while ability.name == each.name:
                    ability = Ability(self.rarity, self.color, self.gearType, self.color2)
            self.abilities.append(ability)

    def defineSpecificItem(self):
        itemList = self.clothingGearTable[self.gearType]
        self.specificItem = random.choice(itemList)


    def printDebug(self):
        # make sure to handle color mixes in the print
        super().printDebug()
        print(f"specificgear is {self.specificItem}")
        for each in self.basicStatBuffs:
            print("basic stat buffs")
            print(f"buff is {each.name} = {each.formula}") 
        for each in self.colorStatBuffs:
            print("color stat buffs")
            print(f"buff is {each.name} = {each.formula}") 

    def printGear(self):
        super().printGear()
        print(f"Gear Type: {self.gearType}")
        print(f"Color: {self.color}")
        if self.isColorMix:
            print(f"Color 2: {self.color2}")
        print("Stat Buffs")
        for each in self.basicStatBuffs:
            print(f"- {each.name} = {each.formula}") 
        for each in self.colorStatBuffs:
            print(f"- {each.name} = {each.formula}") 
        i = 1
        for each in self.abilities:
            blank = '"_blank"'
            print(f"Active {i}: <a target={blank} href={each.link}>{each.name}</a>")
            i += 1
        if self.rarity != "Common":
            print(self.rarityActiveMessage)
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        print(f"Aesthetic: {self.aesthetic}") 

    def printToFileButKindaOld(self):
        super().printToFile()
        with open(file, "a", encoding="utf-8") as f:
            print(f"- Gear Type: {self.gearType}",file=f )
            print(f"- Color: {self.color}",file=f )
            if self.isColorMix:
                print(f"- Color 2: {self.color2}",file=f )
            print("- Stat Buffs",file=f )
            for each in self.basicStatBuffs:
                print(f"    - {each.name} = {each.formula}",file=f ) 
            for each in self.colorStatBuffs:
                print(f"    - {each.name} = {each.formula}",file=f ) 
            i = 1
            for each in self.abilities:
                print(f"- Active {i}: {each.name}",file=f )
                for key, value in each.tierDetails.items():
                    newValue = value.replace("\n","\n        - ").replace("\n        - - ","\n            - ")
                    print(f"    - {key}  \n        - {newValue}",file=f )
                print(f"    - Ability Link: {each.link}",file=f )
                i += 1
            print(f"- Essence Value: {self.essenceValue}",file=f )
            print(f"- Credit Value: {self.creditValue}",file=f )
            print(f"- Aesthetic: {self.aesthetic}",file=f ) 

    def printToFile(self):
        super().printToFile()
        with open(file, "a", encoding="utf-8") as f:
            print(f"- Gear Type: {self.gearType}",file=f )
            print(f"- Color: {self.color}",file=f )
            if self.isColorMix:
                print(f"- Color 2: {self.color2}",file=f )
            print("- Stat Buffs",file=f )
            for each in self.basicStatBuffs:
                print(f"    - {each.name} = {each.formula}",file=f ) 
            for each in self.colorStatBuffs:
                print(f"    - {each.name} = {each.formula}",file=f ) 
            i = 1
            if self.rarity != "Common":
                print(f"- Actives:",file=f )  
            for each in self.abilities:
                print(f"    - [{each.name}]({each.link})",file=f )
                i += 1
            if self.rarity != "Common":
                print(f"    - {self.rarityActiveMessage}",file=f )
            print(f"- Essence Value: {self.essenceValue}",file=f )
            print(f"- Credit Value: {self.creditValue}",file=f )
            print(f"- Aesthetic: {self.aesthetic}",file=f ) 

    def printCalc(self):
        super().printCalc()
        print(f"Gear Type: {self.gearType}")
        print(f"Color: {self.color}")
        if self.isColorMix:
            print(f"Color 2: {self.color2}")
        print("Stat Buffs")
        for each in self.basicStatBuffs:
            print(f"- {each.name} = {each.calc}") 
        for each in self.colorStatBuffs:
            print(f"- {each.name} = {each.calc}") 
        i = 1
        for each in self.abilities:
            blank = '"_blank"'
            print(f"Active {i}: <a target={blank} href={each.link}>{each.name}</a>")
            i += 1
        if self.rarity != "Common":
            print(self.rarityActiveMessage)
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        print(f"Aesthetic: {self.aesthetic}") 

class Kernel(Gear):
    def convert(self):
        self.abilityCount = 1

        self.defineAbilities()
        self.defineSpecificItem()

    def defineSpecificItem(self):
        self.specificItem = "Kernel"

    def printDebug(self):
        super().printDebug()
        print(f"specificgear is {self.specificItem}")

    def printGear(self):
        super().printGear()
        print(f"Gear Type: {self.gearType}")
        print(f"Color: {self.color}")
        if self.isColorMix:
            print(f"Color 2: {self.color2}")
        for each in self.abilities:
            print(f"Passive: {each.name}")
            for key, value in each.tierDetails.items():
                print(f"- {value}")
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        print(f"Aesthetic: {self.aesthetic}") 

    def printToFile(self):
        super().printToFile()
        with open(file, "a", encoding="utf-8") as f:
            print(f"- Gear Type: {self.gearType}",file=f)
            print(f"- Color: {self.color}",file=f)
            if self.isColorMix:
                print(f"- Color 2: {self.color2}",file=f)
            for each in self.abilities:
                print(f"- Passive: {each.name}",file=f)
                for key, value in each.tierDetails.items():
                    newValue = value.replace("\n","\n    - ").replace("\n    - - ","\n    - ")
                    print(f"    - {newValue}",file=f)
            print(f"- Essence Value: {self.essenceValue}",file=f)
            print(f"- Credit Value: {self.creditValue}",file=f)
            print(f"- Aesthetic: {self.aesthetic}",file=f) 

    def printCalc(self):
        self.printGear()

class Consumable(Gear):
    def convert(self):
        self.abilityCount = 1
        self.colorBuffCount = 1
        self.consumableType = ""
        self.consumableAesthetic = ""

        self.abilities = Ability(self.rarity, self.color, self.gearType, self.color2).abilityCatalog.abilities
        self.specificEffect = ""

        self.consumableAestheticList = ["Pills","Medic Kit","Injectable Drug","Potion","Smokable Drug","Energy Drink","Juice Box","Powder Drug","Candy","Sandwich","Soup Cup","Steak","Ramen","Sushi","Chewing Gum","Firework","Toothpaste","Candle","Soap","Tea"]

        self.defineSpecificItem()

        self.defineConsumableType()

        # reminder that abilities are done COMPLETELY differently in consumables, it just takes the ability list from the Ability class and randomizes and handles rarity completely within Consumable; it ignores the way Ability picks a random ability
        self.defineAbilities()
        self.defineBuffs()


    def defineSpecificItem(self):
        self.consumableAesthetic = random.choice(self.consumableAestheticList)

    def defineBuffs(self):
        if self.consumableType == "Temp Buff":
            for i in range(self.colorBuffCount):
                statBuff = StatBuff(self.luck, self.rarity, self.color, None)
                self.colorStatBuffs.append(statBuff)
                self.normalBuffNames.append(statBuff.normalName)
                if self.isColorMix:
                    statBuff = StatBuff(self.luck, self.rarity, self.color2, None)
                    while statBuff.normalName in self.normalBuffNames:
                        statBuff = StatBuff(self.luck, self.rarity, self.color2, None)
                    self.colorStatBuffs.append(statBuff)

    def defineConsumableType(self):
        roll = d(20)
        if 1 <= roll <= 10:
            self.consumableType = "Healing"
        elif 11 <= roll <= 12:
            self.consumableType = "Temp Buff"
        elif 13 <= roll <= 14:
            self.consumableType = "Gear Mod"
        elif 15 <= roll <= 16:
            self.consumableType = "Energy"
        elif roll == 17:
            self.consumableType = "Local Shop Upgrade"
        elif roll == 18:
            self.consumableType = "Gear Type Change"
        elif roll == 19:
            self.consumableType = "Gear Color Change"
        elif roll == 20:
            self.consumableType = "Respec Stats"
        self.baubleAesthetic = random.choice(self.consumableAestheticList)
        self.specificItem = self.consumableType

    def defineAbilities(self):
        match self.consumableType:
            case "Healing":
                self.specificEffect = random.choice(self.abilities[self.consumableType][self.rarity])
            case "Energy" | "Local Shop Upgrade" | "Respec Stats":
                self.specificEffect = self.abilities[self.consumableType][self.rarity]
            case "Gear Mod":
                self.specificEffect = random.choice(self.abilities[self.consumableType])
            case _:
                self.specificEffect = self.abilities[self.consumableType]

    def printDebug(self):
        # super().printDebug()
        if self.consumableType == "Respec Stats":
            print(self.rarity)
            print(self.specificEffect)
            print()

    def printGear(self):
        print(f"Gear: {self.consumableAesthetic}")
        print(f"Rarity: {self.rarity}")
        print(f"Gear Type: {self.consumableType} {self.gearType}")
        if self.consumableType == "Temp Buff":
            print(f"Color: {self.color}")
            if self.isColorMix:
                print(f"Color 2: {self.color2}")
            for each in self.colorStatBuffs:
                print(f"- {each.name}: {each.formula}")
        print(f"Effect: {self.specificEffect}")
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        print(f"Aesthetic: {self.aesthetic}") 

    def printToFile(self):
        with open(file, "a", encoding="utf-8") as f:
            print("",file=f)
            print(f"#{Gear.COUNT}",file=f)
            print("",file=f)
            Gear.COUNT += 1
            print(f"- Gear: {self.consumableAesthetic}",file=f)
            print(f"- Rarity: {self.rarity}",file=f)
            print(f"- Gear Type: {self.consumableType} {self.gearType}",file=f)
            if self.consumableType == "Temp Buff":
                print(f"- Color: {self.color}",file=f)
                if self.isColorMix:
                    print(f"- Color 2: {self.color2}",file=f)
                for each in self.colorStatBuffs:
                    print(f"    - {each.name}: {each.formula}",file=f)
            print(f"- Effect: {self.specificEffect}",file=f)
            print(f"- Essence Value: {self.essenceValue}",file=f)
            print(f"- Credit Value: {self.creditValue}",file=f)
            print(f"- Aesthetic: {self.aesthetic}",file=f) 

    def printCalc(self):
        self.printGear()

class Bauble(Gear):
    def convert(self):
        self.abilityCount = 1
        self.colorBuffCount = 1
        self.baubleType = ""
        self.baubleAesthetic = ""

        self.eggXP = 0
        self.isEggRandom = False

        self.baubleTypeList = ["Diamond", "Orb", "Egg", "Curio", "Key Item", "Trinket","Knickknack"]

        self.baubleAestheticList = {
            "Diamond" : ["Black, opaque","Transparent, glassy","Deep blue","Crystal green","Swirls of purple","Mirrored","Clear rainbow","Pink and green","Milky sky blue","Warm amber","Black and red","Piercing white"],
            "Orb" : ["Swirling orange and green","Sparkles within, always moving","Solid black","Sky blue far away, can see an ocean swirling within when you get close","Eye within that opens and disappears randomly","Super clear, can barely see that it's there","Emits extremely bright light (but not quite blinding)","Contains a tree that grows massive, dies, becomes a seed, and repeats the cycle","Mirrored","A hurricane that turns into a tornado that turns into a hurricane...etc.","Color-changing flame floats within","As small as a marble, roll again for aesthetic"],
            "Egg" : ["Small, round, leathery and black like bat wings","Large, scaled, warm to the touch","Looks just like a chicken egg","Blue, cold, constantly beaded with moisture","Glassy, smooth, black, opaque","Covered in thick fur, sometimes squirms slightly","Has two eyes, a mouth, and a nose in random places and orientations on a small, stone egg","Small, covered in grass","Looks like glowing hot metal, is very hot to the touch but can be held without getting hurt","Emits a warm light glow, very large","Jelly egg, wet on the outside with a wriggling creature on the inside","Covered in brown, tough carapace"],
            "Curio" : ["Painting","Tightly sealed urn filled with visous liquid","Stuffed animal","Magazines","Ancient, unusable tool","Book of stamps","Tome of lore","Unique piece of clothing","Tiny chest filled with gold coins","Fancy watch","Film on a disc","Plant in a jar","Massive gemstone","Coin","Musical instrument","Skull made of gold","Music disc","Fancy handbag","Golden idol","Old journal"],
            "Key Item" : ["A talking worm","Node address scrawled on a random object","Journal filled with frantic scribbles","Taxidermied animal","Talking plant","AI contained in an object","Egg that will hatch in a couple nodes","Piece of ancient technology","Tiny talking stuffed animal","Orb that only fits a particular hole","Map leading to a vault full of something valuable or dangerous","Large, golden key","Passport or other id that might have been faked","Skull","8-ball that answers your questions","Live animal","Compass that only points one direction","Book of names with a node addresses by each","Deed to land in a specific node","Flame in a jar that never goes out"],
            "Trinket" : [ "Silver acorn","Jade elephant","Magnet","Flat, oblong stone","Teal lipstick","Petrified heart","Rat's skull","Rosary bead","Vial of purple goo","Set of dice","Twisting animal horn","Piece of parchment covered in runes","Bar of soap","Dragon eye amulet","Lint ball","Twisted paper clip","Tiny shield of gold","Small, cylindrical battery","Eyeball in a tiny jar","Game cartridge" ],
            "Knickknack" : [ "Silver acorn","Jade elephant","Magnet","Flat, oblong stone","Teal lipstick","Petrified heart","Rat's skull","Rosary bead","Vial of purple goo","Set of dice","Twisting animal horn","Piece of parchment covered in runes","Bar of soap","Dragon eye amulet","Lint ball","Twisted paper clip","Tiny shield of gold","Small, cylindrical battery","Eyeball in a tiny jar","Game cartridge" ]
        }

        self.trinketSkillsList = []

        self.eggXPList = {
            "Common" : 5,
            "Uncommon" : 10,
            "Rare" : 18,
            "Epic" : 30,
            "Legendary" : 80
        }

        self.defineAbilities()
        
        self.defineEffects()
        self.defineSpecificItem()
        self.defineBuffs()

        if self.baubleType == "Curio":
            self.definePreciousValue()
        else:
            self.defineValue()
        
    def defineSpecificItem(self):
        self.baubleType = random.choice(self.baubleTypeList)
        self.baubleAesthetic = random.choice(self.baubleAestheticList[self.baubleType])
        self.specificItem = self.baubleType

    def defineBuffs(self):
        if self.baubleType != "Trinket":
            for i in range(self.colorBuffCount):
                statBuff = StatBuff(self.luck, self.rarity, self.color, None)
                self.colorStatBuffs.append(statBuff)
                self.normalBuffNames.append(statBuff.normalName)
                if self.isColorMix:
                    statBuff = StatBuff(self.luck, self.rarity, self.color2, None)
                    while statBuff.normalName in self.normalBuffNames:
                        statBuff = StatBuff(self.luck, self.rarity, self.color2, None)
                    self.colorStatBuffs.append(statBuff)
            if self.baubleType == "Egg":
                if d(5) == 5:
                    self.isEggRandom = True
                self.eggXP = self.eggXPList[self.rarity]
        else:
            for i in range(self.colorBuffCount):
                statBuff = StatBuff(self.luck, self.rarity, None, "Bauble", True)
                self.colorStatBuffs.append(statBuff)

    def defineEffects(self):
        # use self.abilities
        pass

    def defineValue(self):
        match self.rarity:
            case "Common":
                self.essenceValue = 500
                self.creditValue = 50
            case "Uncommon":
                self.essenceValue = 1000
                self.creditValue = 100
            case "Rare":
                self.essenceValue = 2000
                self.creditValue = 200
            case "Epic":
                self.essenceValue = 5000
                self.creditValue = 500
            case "Legendary":
                self.essenceValue = 10000
                self.creditValue = 1000

    def definePreciousValue(self):
        match self.rarity:
            case "Common":
                self.essenceValue = 750
                self.creditValue = 75
            case "Uncommon":
                self.essenceValue = 2000
                self.creditValue = 200
            case "Rare":
                self.essenceValue = 5000
                self.creditValue = 500
            case "Epic":
                self.essenceValue = 15000
                self.creditValue = 1500
            case "Legendary":
                self.essenceValue = 35000
                self.creditValue = 3500
    
    def printDebug(self):
        # super().printDebug()
        pass

    def printGear(self):
        super().printGear()
        print(f"Gear Type: Bauble")
        if self.baubleType == "Diamond" or self.baubleType == "Orb" or self.baubleType == "Egg":
            print(f"Bauble Aesthetic: {self.baubleAesthetic}")
            if self.isEggRandom != True:
                print(f"Color: {self.color}")
                if self.isColorMix:
                    print(f"Color 2: {self.color2}")
            else:
                print(f"Color: Random")
        else:
            print(f"{self.baubleType}: {self.baubleAesthetic}")
        if self.baubleType == "Diamond":
            print(f"Stat Buff(s):")
            for each in self.colorStatBuffs:
                print(f"- {each.name} = {each.formula}") 
        elif self.baubleType == "Orb":
            print(f"Stat Buff(s):")
            for each in self.colorStatBuffs:
                if isinstance(each.formula, str):
                    newCalc = each.formula.replace("L", "G")
                    print(f"- {each.name} = {newCalc}") 
                else:
                    print(f"- {each.name} = {each.formula}")
        elif self.baubleType == "Trinket":
            buff = self.colorStatBuffs[0]
            print(f"Skill Buff: {buff.name} = {buff.formula}")
        elif self.baubleType == "Knickknack":
            for each in self.abilities:
                print(f"Ability: {each.name}")
                for key, value in each.tierDetails.items():
                    if key == self.rarity:
                        print(f"- Details: {value}")
        elif self.baubleType == "Egg":
            print(f"XP to Hatch: {self.eggXP}")
        print(f"Essence Value: {self.essenceValue}")
        print(f"Credit Value: {self.creditValue}")
        if self.baubleType == "Curio":
            print(f"Aesthetic: {self.aesthetic}") 

    def printToFile(self):
        super().printToFile()
        with open(file, "a", encoding="utf-8") as f:
            print(f"- Gear Type: Bauble",file=f)
            if self.baubleType == "Diamond" or self.baubleType == "Orb" or self.baubleType == "Egg":
                print(f"- Bauble Aesthetic: {self.baubleAesthetic}",file=f)
                if self.isEggRandom != True:
                    print(f"- Color: {self.color}",file=f)
                    if self.isColorMix:
                        print(f"- Color 2: {self.color2}",file=f)
                else:
                    print(f"- Color: Random",file=f)
            else:
                print(f"- {self.baubleType}: {self.baubleAesthetic}",file=f)
            if self.baubleType == "Diamond":
                print(f"- Stat Buff(s):",file=f)
                for each in self.colorStatBuffs:
                    print(f"    - {each.name} = {each.formula}",file=f) 
            elif self.baubleType == "Orb":
                print(f"- Stat Buff(s):",file=f)
                for each in self.colorStatBuffs:
                    if isinstance(each.formula, str):
                        newCalc = each.formula.replace("L", "G")
                        print(f"    - {each.name} = {newCalc}",file=f) 
                    else:
                        print(f"    - {each.name} = {each.formula}",file=f)
            elif self.baubleType == "Trinket":
                buff = self.colorStatBuffs[0]
                print(f"- Skill Buff: {buff.name} = {buff.formula}",file=f)
            elif self.baubleType == "Knickknack":
                for each in self.abilities:
                    print(f"- Ability: {each.name}",file=f)
                    for key, value in each.tierDetails.items():
                        if key == self.rarity:
                            print(f"    - Details: {value}",file=f)
            elif self.baubleType == "Egg":
                print(f"- XP to Hatch: {self.eggXP}",file=f)
            print(f"- Essence Value: {self.essenceValue}",file=f)
            print(f"- Credit Value: {self.creditValue}",file=f)
            if self.baubleType == "Curio":
                print(f"- Aesthetic: {self.aesthetic}",file=f) 

    def printCalc(self):
        self.printGear()

gearTypeMap = {
0: None,
1: "One-Handed Weapon",
2: "Two-Handed Weapon",
3: "Head",
4: "Torso",
5: "Hands",
6: "Legs",
7: "Feet",
8: "Ring",
9: "Neck",
10: "Kernel",
11: "Consumable",
12: "Bauble"
}

def main():
    gearTypeNumber = 3
    gearType = gearTypeMap[gearTypeNumber]
    Gear(10, gearType, "Legendary", None).printDebug()

if __name__ == "__main__":

    main()




