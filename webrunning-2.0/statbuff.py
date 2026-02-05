import math
import random

""" 
statbuff!!

- name: stat buff name
- normalName: stat buff name without stars or anything
- formula: standard formula in text
- calc: calculated stat based on luck


 """

class StatBuff:
    def __init__(self, luck, rarity, color = None, gearType = None, isTrinket = False):
        self.name = ""
        self.normalName = ""
        self.luck = luck
        self.rarity = rarity
        self.rarityNumber = 0
        self.color = color
        self.gearType = gearType

        self.isTrinket = isTrinket

        self.formula = None
        self.calc = None

        self.rarityDict = {
            "Common" : 0,
            "Uncommon" : 1,
            "Rare" : 2,
            "Epic" : 3,
            "Legendary" : 4
        }

        self.formulaDict = {
            "Luck": ["1","2","3","5","8"],
            "Luck ✦": ["2","3","4","6","9"],
            "Luck ✦✦": ["3","4","5","7","10"],
            "Inventory Slots": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Inventory Slots ✦": ["L÷3","L÷2","L","Lx1.25","Lx1.5"],
            "Energy Cap": ["L÷5","L÷4","L÷3","L÷2","L"],
            "Energy Cap ✦": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Kernel Slots": ["L÷5","L÷4","L÷3","L÷2","L"],
            
            "Attack Plus": ["L÷5","L÷4","L÷3","L÷2","L"],
            "Attack Plus ✦": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Damage Plus": ["L÷5","L÷4","L÷3","L÷2","L"],
            "Damage Plus ✦": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Power": [None,None,None,"D","D+1"],

            "HP": ["L÷2","L","Lx1.25","Lx1.5","Lx2"],
            "HP ✦": ["L","Lx1.25","Lx1.5","Lx2","Lx2.5"],
            "Defense DC": ["L÷5","L÷4","L÷3","L÷2","L"],
            "Defense DC ✦": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Armor": ["L÷5","L÷5","L÷4","L÷4","L÷3"],
            "Armor ✦": ["L÷4","L÷4","L÷3","L÷3","L÷2"],
            "Defense": [None,None,None,"D","D+1"],

            "Initiative": ["L÷5","L÷4","L÷3","L÷2","L"],
            "Initiative ✦": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Movement Speed": ["L÷2","L","Lx1.25","Lx1.5","Lx2"],
            "Movement Speed ✦": ["L","Lx1.25","Lx1.5","Lx2","Lx2.5"],
            "Range": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Range ✦": ["L÷3","L÷2","L","Lx1.25","Lx1.5"],
            "Speed": [None,None,None,"D","D+1"],

            "Perception": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Perception ✦": ["L÷3","L÷2","L","Lx1.25","Lx1.5"],
            "Hacking": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Hacking ✦": ["L÷3","L÷2","L","Lx1.25","Lx1.5"],
            "Intelligence": [None,None,None,"D","D+1"],

            "Energy Generation": ["1","1","2","2","3"],
            "Energy Conversion": ["1","2","3","4","5"],
            "Group XP Gain": ["1","2","3","4","5"],
            "HP Regen": ["L÷4","L÷3","L÷2","L","Lx1.25"],
            "Resell Value": ["x1.25","x1.5","x2","x2","x2.5"]
        }

        self.calcDict = {
            "Luck": [1,2,3,5,8],
            "Luck ✦": [2,3,4,6,9],
            "Luck ✦✦": [3,4,5,7,10],
            "Inventory Slots": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Inventory Slots ✦": [self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive],
            "Energy Cap": [self.divFive, self.divFour, self.divThree, self.divTwo, self.nothing],
            "Energy Cap ✦": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Kernel Slots": [self.kernelSlotsDivFive, self.kernelSlotsDivFour, self.kernelSlotsDivThree, self.kernelSlotsDivTwo, self.kernelSlotsNothing],

            "Attack Plus": [self.divFive, self.divFour, self.divThree, self.divTwo, self.nothing],
            "Attack Plus ✦": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Damage Plus": [self.divFive, self.divFour, self.divThree, self.divTwo, self.nothing],
            "Damage Plus ✦": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Power": [None,None,None,self.digits, self.digitsPlusOne],

            "HP": [self.divTwo, self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive, self.timesTwo],
            "HP ✦": [self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive, self.timesOnePointSevenFive, self.timesTwoPointFive],
            "Defense DC": [self.divFive, self.divFour, self.divThree, self.divTwo, self.nothing],
            "Defense DC ✦": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Armor": [self.divFive, self.divFive, self.divFour, self.divFour, self.divThree],
            "Armor ✦": [self.divFour, self.divFour, self.divThree, self.divThree, self.divTwo],
            "Defense": [None,None,None,self.digits, self.digitsPlusOne],

            "Initiative": [self.divFive, self.divFour, self.divThree, self.divTwo, self.nothing],
            "Initiative ✦": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Movement Speed": [self.divTwo, self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive, self.timesTwo],
            "Movement Speed ✦": [self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive, self.timesOnePointSevenFive, self.timesTwoPointFive],
            "Range": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Range ✦": [self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive],
            "Speed": [None,None,None,self.digits, self.digitsPlusOne],

            "Perception": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Perception ✦": [self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive],
            "Hacking": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Hacking ✦": [self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive, self.timesOnePointFive],
            "Intelligence": [None,None,None,self.digits, self.digitsPlusOne],

            "Energy Generation": [1,1,2,2,3],
            "Energy Conversion": [1,2,3,4,5],
            "Group XP Gain": [1,2,3,4,5],
            "HP Regen": [self.divFour, self.divThree, self.divTwo, self.nothing, self.timesOnePointTwoFive],
            "Resell Value": ["x1.25","x1.5","x2","x2","x2.5"]
        }

        self.colorBuffsDict = {
            "Neutral" : ["Luck", "Luck ✦", "Luck ✦✦", "Inventory Slots", "Inventory Slots ✦", "Energy Cap","Energy Cap ✦","Kernel Slots"],
            "Red" : ["Attack Plus","Attack Plus ✦","Damage Plus","Damage Plus ✦","Power"],
            "Blue" : ["HP","HP ✦","Defense DC","Defense DC ✦","Armor","Armor ✦","Defense"],
            "Green" : ["Initiative","Initiative ✦","Movement Speed","Movement Speed ✦","Range","Range ✦","Speed"],
            "Gray" : ["Perception","Perception ✦","Hacking","Hacking ✦","Intelligence"],
            "Other" : ["Energy Generation","Energy Conversion","Group XP Gain","HP Regen","Resell Value"]
        }

        self.basicBuffsDict = {
            "One-Handed Weapon" : ["Attack Plus ✦","Damage Plus ✦","Initiative ✦","Movement Speed ✦","Energy Conversion","Group XP Gain"],
            "Two-Handed Weapon" : ["Attack Plus ✦","Damage Plus ✦","Armor ✦","Defense DC ✦","Energy Generation","HP Regen"],
            "Head" : ["Perception ✦","Initiative ✦","Group XP Gain","Resell Value","HP ✦","Range ✦"],
            "Torso" : ["HP ✦","Armor ✦","Defense DC ✦","HP Regen","Kernel Slots","Inventory Slots ✦"],
            "Hands" : ["Hacking ✦","Attack Plus ✦","Damage Plus ✦","Range ✦","Resell Value","Luck ✦"],
            "Legs" : ["Movement Speed ✦","Armor ✦","Energy Generation","Inventory Slots ✦","Defense DC ✦","Kernel Slots"],
            "Feet" : ["Movement Speed ✦","Initiative ✦","Energy Generation","HP Regen","Group XP Gain","Energy Conversion"],
            "Ring" : ["Luck ✦","Range ✦","Energy Conversion","Energy Cap ✦","HP ✦","Resell Value"],
            "Neck" : ["Energy Cap ✦","HP ✦","Group XP Gain","Energy Cap ✦","Luck ✦","Resell Value"]
        }

        self.baubleBuffsList =  ["Persuasion (Int)","Performance (Int)","Intimidation (Power)","Climbing (Power/Speed)","Jumping (Power/Speed)","Swimming (Power/Speed)","Push/Pull (Power)","Singing (Int)","Balance (Speed)","Gambling (Int)","Trap Defusion (Int)","Navigation (Int)","Stealth (Speed)","Insight (Int)","Slight of Hand (Speed)","Haggling (Int)","History (Int)","Endurance (Defense)","Trickery (Int)","Pick a Skill!"]

        self.baubleFormulaList = ["L÷3","L÷2","L","Lx1.25","Lx1.5"]

        self.colorOrBasicStatBuffCheck()
        self.pickBuff()
        self.makeNormalName()
        self.assignRarityNumber()
        self.pickFormula()
        self.resolveCalc()

    def colorOrBasicStatBuffCheck(self):
        if self.color != None and self.gearType != None:
            raise Exception("Only provide color OR gearType!")
        elif self.color == None and self.gearType == None:
            raise Exception("Must provide color OR gearType!")
        
    def assignRarityNumber(self):
        self.rarityNumber = self.rarityDict[self.rarity]

    def pickBuff(self):
        if not self.color and not self.gearType:
            raise Exception("they're both none???")
        if self.color:
            colorList = self.colorBuffsDict[self.color]
            self.name = colorList[random.randint(0, len(colorList)-1)]
        elif self.gearType:
            if not self.isTrinket:
                gearList = self.basicBuffsDict[self.gearType]
                self.name = gearList[random.randint(0, len(gearList)-1)]
            else:
                gearList = self.baubleBuffsList
                self.name = gearList[random.randint(0, len(gearList)-1)]

    def makeNormalName(self):
        self.normalName = self.name.removesuffix(" ✦✦").removesuffix(" ✦")

    def pickFormula(self):
        if self.isTrinket:
            self.formula = self.baubleFormulaList[self.rarityNumber]
        else:
            self.formula = self.formulaDict[self.name][self.rarityNumber]
            if not self.formula:
                self.pickBuff()
                self.makeNormalName()
                self.pickFormula()

    def resolveCalc(self):
        if self.gearType == "Bauble":
            pass
        else:
            self.calc = self.calcDict[self.name][self.rarityNumber]
            if isinstance(self.calc, (int, str)):
                return
            elif callable(self.calc):
                self.calc = self.calc()
            elif not self.calc:
                self.pickBuff()
                self.makeNormalName()
                self.resolveCalc()
    
    def divFive(self):
        return max(1, math.floor(self.luck / 5))

    def divFour(self):
        return max(1, math.floor(self.luck / 4))

    def divThree(self):
        return max(1, math.floor(self.luck / 3))

    def divTwo(self):
        return max(1, math.floor(self.luck / 2))

    def nothing(self):
        return max(1, math.floor(self.luck))

    def timesOnePointTwoFive(self):
        return max(1, math.floor(self.luck * 1.25))

    def timesOnePointFive(self):
        return max(1, math.floor(self.luck * 1.5))

    def timesOnePointSevenFive(self):
        return max(1, math.floor(self.luck * 1.75))

    def timesTwo(self):
        return max(1, math.floor(self.luck * 2))

    def timesTwoPointFive(self):
        return max(1, math.floor(self.luck * 2.5))

    def digits(self):
        return len(str(self.luck))

    def digitsPlusOne(self):
        return len(str(self.luck)) + 1

    def kernelSlotsDivFive(self):
        return min(3, max(1, math.floor(self.luck / 5)))

    def kernelSlotsDivFour(self):
        return min(3, max(1, math.floor(self.luck / 4)))

    def kernelSlotsDivThree(self):
        return min(3, max(1, math.floor(self.luck / 3)))

    def kernelSlotsDivTwo(self):
        return min(3, max(1, math.floor(self.luck / 2)))

    def kernelSlotsNothing(self):
        return min(3, max(1, math.floor(self.luck)))

rarityList = ["Common","Uncommon","Rare","Epic","Legendary"]

colorDict = {
        0: "Neutral",
        1: "Red",
        2: "Blue",
        3: "Green",
        4: "Gray"
    }

def main():
    luck = 10
    times = 100
    for i in range(times):
        rarity = random.choice(rarityList)
        color = random.choice(colorDict)
        statBuff = StatBuff(luck, rarity, color, None)
        print(f"{statBuff.name}, {statBuff.rarity}, {statBuff.color}, {statBuff.gearType}, {statBuff.normalName}, {statBuff.formula}, {statBuff.calc}")

if __name__ == "__main__":

    main()



