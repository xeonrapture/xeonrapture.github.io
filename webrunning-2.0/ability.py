import abilityCatalog as abilityCatalog
import random

"""
ability class

- name
- tier
- type
- lists of all the abilities
"""

class Ability:
    def __init__(self, rarity, color, gearType, color2 = None):
        self.rarity = rarity
        self.gearType = gearType
        self.color = color
        self.color2 = color2

        self.abilityCatalog = None

        self.name = ""
        self.link = ""
        self.linkSuffix = ""
        self.tier = 0
        
        # whether or not it includes the rarity abilities before it
        self.isUpToRarity = False
        # whether or not it's just a single ability
        self.isSingle = False

        # the actual details we print (after choosing an ability)
        self.tierDetails = {}

        self.rarityDict = {
            "Common" : 0,
            "Uncommon" : 1,
            "Rare" : 2,
            "Epic" : 3,
            "Legendary" : 4
            }
        
        self.defineTier()
        self.defineGearType()
        self.pickAbility()
        

    def defineTier(self):
        self.tier = self.rarityDict[self.rarity]

    def defineGearType(self):
        match self.gearType:
            case "One-Handed Weapon" | "Two-Handed Weapon":
                if self.tier:
                    self.abilityCatalog = abilityCatalog.WeaponActiveCatalog(self.color, self.color2)
                    self.isUpToRarity = True
                    self.linkSuffix = "https://xeonrapture.com/xr/XRRPG+2.0/Sub-RPGs/Webrunning+2.0/Gear+Generation/Gear+Actives#"
            case "Head" | "Torso" | "Hands" | "Legs" | "Feet" | "Ring" | "Neck":
                if self.tier:
                    self.abilityCatalog = abilityCatalog.ClothingActiveCatalog(self.color, self.color2)
                    self.isUpToRarity = True
                    self.linkSuffix = "https://xeonrapture.com/xr/XRRPG+2.0/Sub-RPGs/Webrunning+2.0/Gear+Generation/Gear+Actives#"
            case "Kernel":
                self.abilityCatalog = abilityCatalog.PassiveCatalog(self.color, self.color2)
                self.isSingle = True
                self.linkSuffix = "https://xeonrapture.com/xr/XRRPG+2.0/Sub-RPGs/Webrunning+2.0/Gear+Generation/Kernels#"
            case "Consumable":
                self.abilityCatalog = abilityCatalog.ConsumableEffectCatalog(self.color, self.color2)
                self.isSingle = True
                self.linkSuffix = "https://xeonrapture.com/xr/XRRPG+2.0/Sub-RPGs/Webrunning+2.0/Gear+Generation/Consumables#"
            case "Bauble":
                self.abilityCatalog = abilityCatalog.BaubleEffectCatalog(self.color, self.color2)
                self.isSingle = True
                self.linkSuffix = "https://xeonrapture.com/xr/XRRPG+2.0/Sub-RPGs/Webrunning+2.0/Gear+Generation/Baubles#"
            case _:
                raise Exception(f"GearType was {self.gearType}\nGearType must be one of the following:\nOne-Handed Weapon, Two-Handed Weapon, Head, Torso, Hands, Legs, Feet, Ring, Neck, Kernel, Consumable, Bauble")
            
    def pickAbility(self):
        if self.abilityCatalog:
            keys = list(self.abilityCatalog.abilities.keys())
            self.name = random.choice(keys)
            self.link = self.linkSuffix + self.name.replace(" ", "+")

        if isinstance(self.abilityCatalog.abilities[self.name], str):
            self.tierDetails = self.abilityCatalog.abilities[self.name]
        elif isinstance(self.abilityCatalog.abilities[self.name], list):
            for i in self.abilityCatalog.abilities[self.name]:
                self.tierDetails = random.choice(self.abilityCatalog.abilities[self.name])
        elif self.isUpToRarity:
            i = 0
            for key, value in self.abilityCatalog.abilities[self.name].items():
                if i == self.tier:
                    break
                self.tierDetails[key] = value
                i += 1
        elif self.isSingle:
            i = 0
            for key, value in self.abilityCatalog.abilities[self.name].items():
                if i == self.tier:
                    self.tierDetails[key] = value
                    break
                i += 1
        else:
            i = 0
            for key, value in self.abilityCatalog.abilities[self.name].items():
                if i == self.tier+1:
                    break
                self.tierDetails[key] = value
                i += 1
        



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
    rarity = "Legendary"
    color = "Blue"
    gearTypeNumber = random.randint(1,12)
    gearType = gearTypeMap[gearTypeNumber]
    color2 = "Red"
    ability = Ability(rarity, color, gearType, color2)
    print(ability.rarity)
    print(ability.gearType)
    print(ability.name)
    print(ability.tierDetails)

if __name__ == "__main__":

    main()
