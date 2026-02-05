from helperFunc import d, printGear, printCalcs, printDebug, printToFile
import sys
import codecs

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
    luck = 8
    gearTypeNumber = 0
    gearType = gearTypeMap[gearTypeNumber]
    rarity = None
    color = None
    color2 = None

    amount = 5

    printGear(luck, amount, gearType, rarity, color, color2)
    # printToFile(luck, amount, gearType, rarity, color, color2)
    # printDebug(luck, amount, gearType, rarity, color, color2)


if __name__ == "__main__":
    main()