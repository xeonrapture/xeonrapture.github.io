import random
from gear import Gear

file = "output.txt"

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

def d(number):
    return random.randint(1, number)

# make sets of gear given luck and a number of pieces you want (can define rarity and color if needed)
def printDebug(luck, piecesOfGear = 1, gearType = None, rarity = None, color = None, color2 = None):
    if gearType == None:
        for i in range(piecesOfGear):
            gearType = gearTypeMap[random.randint(1, 12)]
            Gear(luck, gearType, rarity, color, color2).printDebug()
    else:
        for i in range(piecesOfGear):
            Gear(luck, gearType, rarity, color, color2).printDebug()

def printGear(luck, piecesOfGear = 1, gearType = None, rarity = None, color = None, color2 = None):
    if gearType == None:
        for i in range(piecesOfGear):
            gearType = gearTypeMap[random.randint(1, 12)]
            # print(i+1)
            Gear(luck, gearType, rarity, color, color2).printGear()
            print()
    else:
        for i in range(piecesOfGear):
            # print(i+1)
            Gear(luck, gearType, rarity, color, color2).printGear()
            print()

def printToFile(luck, piecesOfGear = 1, gearType = None, rarity = None, color = None, color2 = None):
    with open(file, "w", encoding="utf-8") as f:
        print("", file=f)
    with open(file, "a", encoding="utf-8") as f:
        if gearType == None:
            for i in range(piecesOfGear):
                gearType = gearTypeMap[random.randint(1, 12)]
                # print(f"# #{i+1}", file=f)
                Gear(luck, gearType, rarity, color, color2).printToFile()
                # print("", file=f)
        else:
            for i in range(piecesOfGear):
                # print(f"# #{i+1}", file=f)
                Gear(luck, gearType, rarity, color, color2).printToFile()
                # print("", file=f)

def printCalcs(luck, piecesOfGear = 1, gearType = None, rarity = None, color = None, color2 = None):
    print(f"Luck = {luck}\n")
    if gearType == None:
        for i in range(piecesOfGear):
            gearType = gearTypeMap[random.randint(1, 12)]
            # print(i+1)
            Gear(luck, gearType, rarity, color, color2).printCalc()
            print()
    else:
        for i in range(piecesOfGear):
            # print(i+1)
            Gear(luck, gearType, rarity, color, color2).printCalc()
            print()

def main():
    print('WRONG FILE')

if __name__ == "__main__":
    main()