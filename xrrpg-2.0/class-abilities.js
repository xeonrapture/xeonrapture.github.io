// Backward compat — existing references to classAbilities still work
window.XRRPG_CLASS_ABILITIES = {};

// Full class definitions used by the character sheet's Class Abilities section
window.XRRPG_CLASS_DEFS = {

  // ─── ADEPTS ─────────────────────────────────────────────────────────────────

  "Warrior": {
    stat: "Vigor",
    archetype: "Adepts",
    chromaRequired: "Red",
    basicPower: {
      name: "Burst Strength",
      tiers: [
        "Naturally very strong and fast.",
        "As strong and fast as the strongest of the species. Can withstand own strength. Deal base 3 dmg on Success.",
        "Far stronger and faster than the strongest and fastest of the species.",
        "Can move many times own weight, devastating blows. Barely visible movement. Deal base 4 dmg on Success."
      ]
    },
    advancedPowers: [
      {
        name: "Lightening",
        tiers: [
          "1/4 own weight → 5 seconds.",
          "1/8 own weight → 5 sec. 1/4 own weight → 1 min. Touch someone → 1/4 their weight ~10 sec.",
          "Nullify own weight → 5 sec. 1/8 own weight → 1 min. 1/4 own weight → unlimited. Touch → 1/8 weight ~10 sec. AOE 10 ft radius 1/4 weight ~10 sec."
        ]
      },
      {
        name: "Heat Control",
        tiers: [
          "Temps up to 600°F don't affect you. 2nd degree burn touch (3 dmg). Heat aura 10 ft (2 dmg, 10 min).",
          "Temps up to 3000°F. 3rd degree burn touch (4 dmg). 1st degree burn aura 10 ft (3 dmg, 10 min).",
          "Temps up to 10,000°F. 4th degree burn touch (5 dmg). 2nd degree burn aura 10 ft (4 dmg, 10 min)."
        ]
      },
      {
        name: "Decrease Friction",
        tiers: [
          "Halve friction on any part of your body, slide around.",
          "Eliminate friction on your body. Touch object/person → halve their friction for 1 min.",
          "Eliminate friction on everything within 10 ft for up to 10 min. Can be AOE or selective."
        ]
      },
      {
        name: "Propulsion",
        tiers: [
          "Launch yourself up to 50 ft. Push up to 300 lbs in one direction up to 30 ft.",
          "Fly freely up to 10 min at 100 ft/turn. Push 600 lbs one direction 50 ft or 400 lbs AOE 30 ft.",
          "Fly forever at 200 ft/turn. Push 1500 lbs in one direction 100 ft, 1000 lbs cone 50 ft, or 600 lbs AOE 30 ft."
        ]
      },
      {
        name: "Explosions",
        tiers: [
          "Explosions from body up to 10 ft radius, touch or self-centered (4 dmg on Success).",
          "Explosions up to 25 ft radius. Throw explosions up to 30 ft away.",
          "70 ft radius explosions. Throw up to 50 ft. Focused blast 10 ft cone: 6 dmg, double to structures."
        ]
      }
    ],
    levels: {
      1: { auto: ["Burst Strength Tier 1"], choices: [{ type: "pick_advanced_power", count: 1 }] },
      2: { auto: ["Burst Strength Tier 2", "Chosen Advanced Power advances to Tier 2"], choices: [] },
      3: { auto: ["Burst Strength Tier 3", "Chosen Advanced Power advances to Tier 3"], choices: [] },
      default: { auto: [], choices: [{ type: "pick_advanced_power", count: 1 }] }
    },
    resources: []
  },

  "Tank": {
    stat: "Endurance",
    archetype: "Adepts",
    chromaRequired: "Blue",
    basicPower: {
      name: "Upped Endurance & Durability",
      tiers: [
        "Pretty strong, intense endurance. Fairly hard to hurt.",
        "Strong. Endurance surpasses normal limits, work hours without rest. Far harder to hurt. Ignore -1 debuff from Minor Injuries.",
        "As strong as the strongest of the species. Endurance knows no bounds. Only strong attacks deal damage. Ignores -1 from first Severe Injury.",
        "Far stronger than strongest of species. Work weeks/months/years on endurance. Extremely durable. Can't take Minor Injuries."
      ]
    },
    advancedPowers: [
      {
        name: "Heavening",
        tiers: [
          "2x own weight → 5 seconds.",
          "5x own weight → 5 sec. 2x own weight → 1 min. Touch someone → 2x their weight ~10 sec.",
          "20x own weight → 5 sec. 5x own weight → 1 min. 2x own weight → unlimited. Touch → 5x weight ~10 sec. AOE 10 ft radius 2x weight ~10 sec."
        ]
      },
      {
        name: "Cold Control",
        tiers: [
          "Temps down to freezing don't affect you. Touch attack 2 dmg + Frozen (+1d MD on next Action against them). Cold aura freezing temp 10 ft (1 dmg, 10 min).",
          "Temps down to -200°F. Touch 3 dmg + Advanced Frozen (+2d MD). Cold aura -100°F 10 ft (2 dmg + Frozen, 10 min).",
          "Temps down to 1 K. Touch 3 dmg + Extreme Frozen (+3d MD). Cold aura -200°F 10 ft (2 dmg + Advanced Frozen, 10 min)."
        ]
      },
      {
        name: "Increase Friction",
        tiers: [
          "Double friction on body parts, stick to most surfaces (not overhangs). Lasts 10 min.",
          "4x friction, stick to nearly any substance including overhangs. Touch → double target's friction for 1 min.",
          "10x friction, stick to all substances. Touch → quadruple target's friction for 10 min."
        ]
      },
      {
        name: "Force Fields",
        tiers: [
          "Personal bubble: deflects normal xenic effects. Ignore Minor Injuries from xenic sources. Lasts 10 min.",
          "Personal bubble: deflects strong effects (Ignore Severe from xenic). 5 ft radius bubble: ignore Minor from xenic. Lasts 10 min.",
          "Personal bubble: ignore Critical (but breaks on Critical). 5 ft bubble: ignore Severe. 20 ft bubble: ignore Minor. Lasts 10 min."
        ]
      },
      {
        name: "Inertial Dampening",
        tiers: [
          "Stop own inertia up to half terminal velocity. Ignore Minor Injuries from physical sources.",
          "Stop own inertia at will, no limit. Stop very strong physical force. Stop inertia of anything in a 30 ft bubble.",
          "Rebound inertial forces. Very high limit. Stop inertia of anything in a 100 ft bubble."
        ]
      }
    ],
    levels: {
      1: { auto: ["Upped Endurance & Durability Tier 1"], choices: [{ type: "pick_advanced_power", count: 1 }] },
      2: { auto: ["Upped Endurance & Durability Tier 2", "Chosen Advanced Power → Tier 2"], choices: [] },
      3: { auto: ["Upped Endurance & Durability Tier 3", "Chosen Advanced Power → Tier 3"], choices: [] },
      default: { auto: [], choices: [{ type: "pick_advanced_power", count: 1 }] }
    },
    resources: []
  },

  "Druid": {
    stat: "Intuition",
    archetype: "Adepts",
    chromaRequired: "Green",
    basicPower: {
      name: "Upped Senses",
      tiers: [
        "Body awareness, good dex and balance, sharp senses.",
        "Greater body awareness, higher dex and balance. Roll double Mastery Dice on perception Action Rolls.",
        "Very sharp senses. See far away, feel tiny tremors, smell trace scents on the breeze. Extreme body awareness and very high dexterity.",
        "See and hear miles away, smell anything from miles away. Crazy dexterity and body awareness."
      ]
    },
    advancedPowers: [
      {
        name: "Sense Emotions",
        tiers: [
          "Sense emotions, surface and deeper. Small charisma bonus.",
          "Sense deep emotions easily, influence surface emotions. Larger charisma bonus.",
          "Influence emotions strongly. Extreme charisma bonus."
        ]
      },
      {
        name: "Healing",
        tiers: [
          "Heal surface and deep wounds with time. Can heal Minor Injuries. Touch only.",
          "Heal deeper wounds quickly, diseases. Heal Severe Injuries or 2 HP's worth of Injuries.",
          "Heal maimings (grow eyes/limbs), nasty diseases, some mental disorders. Can heal 1 Critical Injury/day or 3 HP's worth."
        ]
      },
      {
        name: "Turn into Animals",
        tiers: [
          "Normal beasts, normal size. Can swim. Attacks up to 3 dmg on Success.",
          "Exotic beasts, smaller or larger (fox to hippo). Can fly. Attacks up to 4 dmg on Success.",
          "Xenic beasts, huge beasts. Scale from ant to small wyvern size. Attacks up to 5 dmg on Success."
        ]
      },
      {
        name: "Life Force Aura",
        tiers: [
          "(Passive) Heal living beings around you passively, stamina regeneration. Shallow Rests heal 75% HP in Injuries. +2 Stamina Exhaustion Limit for self and allies.",
          "(Passive) Wick exhaustion, accelerate natural healing. Deep Rests heal 1 Critical Injury. +4 Stamina Exhaustion Limit.",
          "(Passive) People exhaust slowly, don't need food/water, greatly accelerated healing. Shallow Rests heal all non-Critical Injuries. Deep Rests heal all Critical Injuries. +6 Stamina Exhaustion Limit."
        ]
      },
      {
        name: "Sight & Speak with Animals",
        tiers: [
          "Understand and speak to animals. See in the dark. See through animal eyes (5 mile range). Gently guide animals. Usually gains an animal companion.",
          "See infrared and ultraviolet, hear higher/lower tones. Understand plants and bugs. Sense through plants/bugs (50 mile range).",
          "Sense through huge numbers of living beings simultaneously. Sense through any living being on the planet (Action Roll vs persons). Works through contiguous bodies of green xeon."
        ]
      },
      {
        name: "Control Metabolism",
        tiers: [
          "Control own metabolism, pain response (defer incapacitation 1 turn). Touch → make target sick (next Action against them +1d MD). Control own sleep, attempt sleep on touch (3 successes → 10 min sleep). Deep/Safe Rest lasts 4 hrs.",
          "Induce self-controlled coma, freeze self safely. Cause/soothe pain or discomfort on touch (defer incapacitation 1 turn). Stronger sickness (+2d MD). Sleep: 2 successes → 10 min. Deep/Safe Rest 3 hrs.",
          "Absolute control over own body (defer incapacitation 3 turns). Range 10 ft for sickness/sleep/pain. Extreme sickness (+3d MD). Very powerful sleep (2 successes → 1 hr). Deep/Safe Rest 1 hr, no sleep needed."
        ]
      },
      {
        name: "Atmosphere",
        tiers: [
          "30 ft bubble of breathable atmosphere. Non-breathable gas bubble 15 ft radius. Hold breath 10 min.",
          "100 ft atmosphere radius. 30 ft non-breathable gas. Poisonous gas 15 ft (2 dmg). Hold breath 1 hr.",
          "5,000 ft atmosphere range. 50 ft non-breathable gas. 30 ft poisonous gas. 15 ft explosive gas (4 dmg) or acidic gas (3 dmg). Bubbles can be thrown 50 ft. No need to breathe."
        ]
      }
    ],
    levels: {
      1: { auto: ["Upped Senses Tier 1"], choices: [{ type: "pick_advanced_power", count: 1 }] },
      2: { auto: ["Upped Senses Tier 2", "Chosen Advanced Power → Tier 2"], choices: [] },
      3: { auto: ["Upped Senses Tier 3", "Chosen Advanced Power → Tier 3"], choices: [] },
      default: { auto: [], choices: [{ type: "pick_advanced_power", count: 1 }] }
    },
    resources: []
  },

  "Mentalist": {
    stat: "Wit",
    archetype: "Adepts",
    chromaRequired: "Grey",
    basicPower: {
      name: "Mind Up",
      tiers: [
        "Some mind quickening and memory boosting.",
        "More mind quickening and memory boosting. Learn skills quickly (half Decaying DRs). Roll double Mastery Dice on mental Action Rolls.",
        "Photographic memory, memorize and analyze in an instant.",
        "Basically instant memorization and analysis. Immortal-level intelligence."
      ]
    },
    advancedPowers: [
      {
        name: "Telepathy",
        tiers: [
          "Send simple ideas, words, basic images; recipient can send the same back. Psychic attack 2 dmg on Success.",
          "Send complex strings of ideas, words, images. Group chat up to ~10 people. Psychic attack 3 dmg on Success.",
          "Send pure ideas very quickly. Force into someone's mind for information. Group chat up to 100 people. Psychic attack 4 dmg on Success."
        ]
      },
      {
        name: "Xeon Binding",
        tiers: [
          "Ghostly white xenic tethers. Up to 400 lbs total, 5 tethers. Lasts 5 min. Range 25 ft. Opponents can break if strong.",
          "700 lbs total, 10 tethers. Bind other things together for 10 min, manipulate length/direction remotely. 50 ft range. Harder to break.",
          "Unlimited tethers. Unlimited time/count for remote tethers. 4000 lb limit. 200 ft range. Very hard to break."
        ]
      },
      {
        name: "Shade Form",
        tiers: [
          "Semi-invisible, invisible in shadows. Ethereal up to 1 min (through walls ≤1 ft thick). Can't attack or be attacked except by xenic effects.",
          "Group of ~10 can share shade form. Ethereal up to 10 min (through ≤10 ft of wall).",
          "Travel between connected shadows (200 ft range). Group ethereal up to 10 min (≤1 ft material). Self ethereal up to 1 hr, any amount of material. Only affected by certain spiritual effects."
        ]
      },
      {
        name: "Pointy Sharp Xeon",
        tiers: [
          "Black xeon blades up to 2 in. Can't cut armor or xenic force fields (3 dmg). Can cut weak xenic tethers. Blocked completely by onyx.",
          "Blades up to 6 in, slice most armor and xenic force fields (4 dmg). Can damage other weapons. Cut stronger tethers. Can throw blades.",
          "Blades up to 6 ft. Cut almost anything atom-thin (5 dmg). Cut all tethers (even industrial). Still blocked by onyx and other obsidian."
        ]
      },
      {
        name: "Seership",
        tiers: [
          "Feel strong xeon sources up to 60 ft. See up to 100 ft from any angle (eyes closed). See possibilities up to 3 sec in future.",
          "Feel subtle xeon sources up to 200 ft, sense composition of xenic objects. See in darkness. See 500 ft from any angle. See 5 min into future.",
          "See xenic ley lines and sky currents. Physical and xenic planes overlap perpetually. Find natural/artificial xenic portals from miles away. See 10 miles from any angle. See up to 1 day into future."
        ]
      },
      {
        name: "Onyx Shielding",
        tiers: [
          "Hard black xeon shield, max 1 ft radius. Ignore Minor Injuries from physical sources. Lasts 10 min. Also form shield on fists/feet (3 dmg on Success).",
          "Shield up to 3 ft radius. Ignore Severe Injuries from physical sources. Lasts 10 min. Can throw shields (3 dmg).",
          "Full box/polyhedral shield up to 6 ft radius. Ignore Critical Injuries (breaks on Critical). Create onyx platforms that last up to 10 sec."
        ]
      }
    ],
    levels: {
      1: { auto: ["Mind Up Tier 1"], choices: [{ type: "pick_advanced_power", count: 1 }] },
      2: { auto: ["Mind Up Tier 2", "Chosen Advanced Power → Tier 2"], choices: [] },
      3: { auto: ["Mind Up Tier 3", "Chosen Advanced Power → Tier 3"], choices: [] },
      default: { auto: [], choices: [{ type: "pick_advanced_power", count: 1 }] }
    },
    resources: []
  },

  // ─── MAGES ──────────────────────────────────────────────────────────────────

  "Cleric": {
    stat: "Any",
    archetype: "Mages",
    chromaRequired: null,
    levels: {
      1: {
        auto: ["Target Heal: Heal a target (can heal Minor Injuries and Minor Curse).", "Seal Spirit: Attempt to seal or end a possession.", "Communicate with Spirits: See xenic plane and speak to spirits (10 min). Plus deity ability."],
        choices: [{ type: "pick_one", id: "deity", label: "Choose your deity or entity", options: ["Ai (Goddess of Wisdom)", "Toko (God of the Law)", "Torrena (Goddess of Survival)", "Vaiana (Goddess of Change)", "Exon (God of Progress)", "Pbosh (God of Passion)", "Rtolka (God of Knowledge)", "Gatrathki (God of the One)", "Osadona (Goddess of the Many)", "Dodat (God of the Dead)", "Red Dragon", "Blue Dragon", "Green Dragon", "Gray Dragon", "Immortal (custom)"] }]
      },
      2: { auto: ["Aeonic Smite: +2d MD on Action, +2 dmg to spirits.", "Hamper Enemy: Next Action against target +2d MD.", "Group Heal: AOE heal 10 ft (up to 3 HP distributed; no Critical)."], choices: [] },
      3: { auto: ["Protect: Holy shield on self or ally (ignore next damage taken, even Critical).", "Bolster: +3d MD on next Action for self or ally.", "Cleanse: Cleanse Minor Spirit Decay and Major Curse Critical Injury."], choices: [] }
    },
    deityAbilities: {
      "Ai (Goddess of Wisdom)": "Passive: +1d MD on Int and Wit for self and allies within 20 ft (no stamina).",
      "Toko (God of the Law)": "Give an ally 5 temporary HP (once per day, goes away on Deep Rest).",
      "Torrena (Goddess of Survival)": "Self and allies within 20 ft immune to Exhausted Severe Injury.",
      "Vaiana (Goddess of Change)": "Spend up to 3 Stamina → give +1d MD per Stamina to an ally's Action (up to 3x/day). Also gain +5 to one chosen skill.",
      "Exon (God of Progress)": "Permanent +2 Powerful Item Limit. Double roll for Decaying DRs on technology/science skills.",
      "Pbosh (God of Passion)": "Roll +3d MD on a 1-Stamina Action (up to 3x/day).",
      "Rtolka (God of Knowledge)": "Roll double MD on mental Action Rolls dealing with strategy, memorization, and mathematics.",
      "Gatrathki (God of the One)": "Empower self or one person: +2d MD on all skills/abilities for 1 minute (3x/day).",
      "Osadona (Goddess of the Many)": "Empower a group (may include self): all Group Actions +1d MD for 1 minute (3x/day).",
      "Dodat (God of the Dead)": "Resurrect someone dead ≤10 min (needs majority of body). Heal 1 Critical Injury/day.",
      "Red Dragon": "Fly unaided for 10 min (can grant this to an ally by touch).",
      "Blue Dragon": "Ignore next Minor or Severe Injury taken (3x/day).",
      "Green Dragon": "Heal all allies within 30 ft up to 5 HP (no Critical), 3x/day.",
      "Gray Dragon": "Mark up to 10 people psychically; communicate mentally regardless of distance.",
      "Immortal (custom)": "Custom ability (discuss with GM)."
    },
    resources: [
      { id: "deity_toko_temphp", label: "Toko: Give 5 Temp HP", maxPerDay: 1, requiresDeity: "Toko (God of the Law)" },
      { id: "deity_pbosh_burst", label: "Pbosh: Energy Burst (+3d MD)", maxPerDay: 3, requiresDeity: "Pbosh (God of Passion)" },
      { id: "deity_gatrathki_empower", label: "Gatrathki: Empower One", maxPerDay: 3, requiresDeity: "Gatrathki (God of the One)" },
      { id: "deity_osadona_group", label: "Osadona: Group Empower", maxPerDay: 3, requiresDeity: "Osadona (Goddess of the Many)" },
      { id: "deity_vaiana_md", label: "Vaiana: Stamina → MD Grant", maxPerDay: 3, requiresDeity: "Vaiana (Goddess of Change)" },
      { id: "deity_blue_dragon_defense", label: "Blue Dragon: Ignore Injury", maxPerDay: 3, requiresDeity: "Blue Dragon" },
      { id: "deity_green_dragon_heal", label: "Green Dragon: Group Heal", maxPerDay: 3, requiresDeity: "Green Dragon" }
    ]
  },

  "Warlock": {
    stat: "Any",
    archetype: "Mages",
    chromaRequired: null,
    levels: {
      1: {
        auto: ["Dark Flame: A dark, xenic attack dealing 2 dmg on Success.", "Seal Spirit: Attempt to seal or end a possession.", "Communicate with Spirits: See xenic plane and speak to spirits (10 min). Plus dark god ability."],
        choices: [{ type: "pick_one", id: "deity", label: "Choose your dark god or entity", options: ["Mot", "Qzoth", "Txazuk", "Uulith-btha", "Xotl", "Zvithwa", "Nythyn", "G'nolog", "Kthal", "Nomonon", "Zythix", "Demons (general)", "Red Dragon", "Blue Dragon", "Green Dragon", "Gray Dragon"] }]
      },
      2: { auto: ["Menonic Smite: Dark energy strike +2d MD, +2 dmg to spirits.", "Hamper Enemy: Next Action against target +2d MD.", "Vampirism: On a successful attack, steal HP from target and heal yourself."], choices: [] },
      3: { auto: ["Curse: Inflict a curse on a target (2x/day).", "Invite Possession: Invite a spirit to possess a willing or unwilling target."], choices: [] }
    },
    resources: [
      { id: "curse_uses", label: "Curse", maxPerDay: 2 },
      { id: "uulith_steal", label: "Uulith-btha: Steal HP", maxPerDay: 3, requiresDeity: "Uulith-btha" }
    ]
  },

  "Sorcerer": {
    stat: "Any",
    archetype: "Mages",
    chromaRequired: null,
    maxLevel: 4,
    specializedPowers: [
      { id: "grab", name: "Grab", descriptions: [
        "Grab target 15 ft away, throw 15 ft, pull closer, or grapple. While grappled: +1d MD on Actions against them.",
        "Grab target 30 ft away, throw 20 ft, pull closer, or grapple. While grappled: +2d MD on Actions against them.",
        "Grab target 50 ft away, throw 25 ft, pull closer, or grapple. While grappled: +3d MD on Actions against them."
      ]},
      { id: "hurl", name: "Hurl", descriptions: [
        "Push target 20 ft away directly from you.",
        "Push target 30 ft away directly from you.",
        "Push target 50 ft away in any direction."
      ]},
      { id: "flash", name: "Flash", descriptions: [
        "Dash 30 ft.",
        "Dash 50 ft. May also dash 25 ft before and after an Action.",
        "Dash 100 ft. May dash 50 ft before and after an Action. Can dash through walls."
      ]},
      { id: "reduce_mass", name: "Reduce Mass", descriptions: [
        "25% weight reduction in a 10 ft bubble.",
        "50% weight reduction in a 20 ft bubble. Can choose who is exempted.",
        "80% weight reduction in a 40 ft bubble. At lvl 3 can nullify own gravity entirely."
      ]},
      { id: "bend_fate", name: "Bend Fate", descriptions: [
        "Take a consequence from a willing target within 15 ft.",
        "Take a consequence from a willing target within 15 ft, or from an unwilling target within 30 ft.",
        "Take a consequence from a willing or unwilling target within 50 ft. Can also transfer it to a different target instead of taking it yourself (3x/day)."
      ]},
      { id: "invigorate", name: "Invigorate", descriptions: [
        "Grant +1d MD to the next Action of any visible target.",
        "Grant +2d MD to the next Action of any visible target.",
        "Grant +3d MD to the next Action of any visible target."
      ]},
      { id: "mind_invasion", name: "Mind Invasion", descriptions: [
        "Inhabit target's mind for 30 sec. Speak to them or hamper abilities (+1d MD on Actions against them).",
        "Inhabit target's mind for 1 min. Speak to them or hamper abilities (+1d MD on Actions against them).",
        "Inhabit target's mind for 5 min. Speak to them or hamper abilities (+1d MD on Actions against them)."
      ]},
      { id: "intense_aura", name: "Intense Aura", descriptions: [
        "Fill 15 ft radius with sensory distraction. Targets: +1d MD on Actions against them.",
        "Fill 30 ft radius with sensory distraction. Targets: +2d MD on Actions against them.",
        "Fill 50 ft radius with sensory distraction. Targets: +2d MD on Actions against them. Can choose exemptions."
      ]},
      { id: "devil_weapons", name: "Devil Weapons", descriptions: [
        "Morph body to adopt devil's weapons: +1 dmg for 30 sec.",
        "Morph body to adopt devil's weapons: +2 dmg for 1 min.",
        "Morph body to adopt devil's weapons: +3 dmg for 5 min."
      ]},
      { id: "spirit_shield", name: "Spirit Shield", descriptions: [
        "Protect target from next Minor Injury.",
        "Protect target from next Minor or Severe Injury.",
        "Protect target from next Minor, Severe, or Critical Injury (3x/day for Critical)."
      ]},
      { id: "soothe_soul", name: "Soothe Soul", descriptions: [
        "Heal target 3 HP's worth of Injuries.",
        "Heal target 4 HP's worth of Injuries.",
        "Heal target 5 HP's worth of Injuries. Can heal Critical Injuries (3x/day)."
      ]},
      { id: "chaos", name: "Chaos", descriptions: [
        "Cast the Tier I <a href='https://xeonrapture.com/xr/XRRPG+2.0/Classes/Magicians/Enchanter' target='_blank'>Enchanter</a> Chaos spell (Breath of Chaos) without spending stamina (1/turn): Roll a d8 --> you <em>must</em> cast the corresponding spell of that Enchanter Spell Tier, even if disruptive. Roll 8 = cast any Tier I spell for free; every consecutive 8 also lets you pick a free spell.",
        "Cast the Tier I/II <a href='https://xeonrapture.com/xr/XRRPG+2.0/Classes/Magicians/Enchanter' target='_blank'>Enchanter</a> Chaos spell (Breath of Chaos or Touch of Chaos) without spending stamina (1/turn): Roll a d8 --> you <em>must</em> cast the corresponding spell of that Enchanter Spell Tier, even if disruptive. Roll 8 = cast any spell of the corresponding spell tier for free; every consecutive 8 also lets you pick a free spell.",
        "Cast the Tier I/II/III <a href='https://xeonrapture.com/xr/XRRPG+2.0/Classes/Magicians/Enchanter' target='_blank'>Enchanter</a> Chaos spell (Breath of Chaos, Touch of Chaos, or Call of Chaos) without spending stamina (1/turn): Roll a d8 --> you <em>must</em> cast the corresponding spell of that Enchanter Spell Tier, even if disruptive. Roll 8 = cast any spell of the corresponding spell tier for free; every consecutive 8 also lets you pick a free spell."
      ]}
    ],
    devilEmotions: [
      { id: "fear", label: "Fear", ability: "Terrify: Target terrified, +1d/+2d/+3d MD on Actions against them for up to 3 turns.", descriptions: [
        "Terrify: Target terrified, +1d MD on Actions against them for up to 3 turns.",
        "Terrify: Target terrified, +2d MD on Actions against them for up to 3 turns.",
        "Terrify: Target terrified, +3d MD on Actions against them for up to 3 turns."
      ]},
      { id: "lust", label: "Lust / Attraction", ability: "Charm: Target charmed, treats you like close friend (breaks if attacked).", descriptions: [
        "Charm: Target charmed, treats you like close friend (breaks if attacked).",
        "Charm: Target charmed, treats you like close friend (breaks if attacked).",
        "Charm: Target charmed, treats you like close friend (breaks if attacked)."
      ]},
      { id: "anger", label: "Anger", ability: "Rage: 3/4/5 dmg attack, 3x/day.", descriptions: [
        "Rage: 3 dmg attack, 3×/day.",
        "Rage: 4 dmg attack, 3×/day.",
        "Rage: 5 dmg attack, 3×/day."
      ]},
      { id: "grief", label: "Grief", ability: "Numbness: Target deals -1/-2/-3 dmg for 10 min.", descriptions: [
        "Numbness: Target deals -1 dmg for 10 min.",
        "Numbness: Target deals -2 dmg for 10 min.",
        "Numbness: Target deals -3 dmg for 10 min."
      ]},
      { id: "protectiveness", label: "Protectiveness", ability: "Sacrifice: Take 1/2/3 dmg to block up to 3x that dmg done to allies (10 min, can block Critical).", descriptions: [
        "Sacrifice: Take 1 dmg to block up to 3 dmg done to allies (10 min, can block Critical).",
        "Sacrifice: Take 2 dmg to block up to 6 dmg done to allies (10 min, can block Critical).",
        "Sacrifice: Take 3 dmg to block up to 9 dmg done to allies (10 min, can block Critical)."
      ]},
      { id: "joy", label: "Joy / Worship", ability: "Glory: Heal up to 4/5/6 HP distributed among self and allies within 10/20/30 ft.", descriptions: [
        "Glory: Heal up to 4 HP distributed among self and allies within 10 ft.",
        "Glory: Heal up to 5 HP distributed among self and allies within 20 ft.",
        "Glory: Heal up to 6 HP distributed among self and allies within 30 ft."
      ]},
      { id: "pride", label: "Pride", ability: "Hubris: Take 1/2/3 dmg to roll that many additional MD on your next Action.", descriptions: [
        "Hubris: Take 1 dmg to roll 1 additional MD on your next Action.",
        "Hubris: Take 2 dmg to roll 2 additional MD on your next Action.",
        "Hubris: Take 3 dmg to roll 3 additional MD on your next Action."
      ]},
      { id: "envy", label: "Envy / Greed", ability: "Steal Vitality: Take 2/3/4 HP from target and heal yourself that much.", descriptions: [
        "Steal Vitality: Take 2 HP from target and heal yourself that much.",
        "Steal Vitality: Take 3 HP from target and heal yourself that much.",
        "Steal Vitality: Take 4 HP from target and heal yourself that much."
      ]},
      { id: "anxiety", label: "Anxiety", ability: "Preparation: Bank of 3d MD for you or allies to use anytime today (resets on Deep Rest, max 3d).", descriptions: [
        "Preparation: Bank of 3d MD for you or allies to use anytime today (resets on Deep Rest, max 3d).",
        "Preparation: Bank of 3d MD for you or allies to use anytime today (resets on Deep Rest, max 3d).",
        "Preparation: Bank of 3d MD for you or allies to use anytime today (resets on Deep Rest, max 3d)."
      ]},
      { id: "shame", label: "Shame", ability: "Disappear: Invisible for 1/3/6 hours (breaks on attack or stamina ability).", descriptions: [
        "Disappear: Invisible for 1 hour (breaks on attack or stamina ability).",
        "Disappear: Invisible for 3 hours (breaks on attack or stamina ability).",
        "Disappear: Invisible for 6 hours (breaks on attack or stamina ability)."
      ]},
      { id: "love", label: "Love", ability: "Selflessness: Heal someone else 3/5/7 HP. At lvl 3 can heal Critical Injuries.", descriptions: [
        "Selflessness: Heal someone else 3 HP.",
        "Selflessness: Heal someone else 5 HP.",
        "Selflessness: Heal someone else 7 HP. Can heal Critical Injuries."
      ]},
      { id: "disgust", label: "Disgust", ability: "Revulsion: Wave of force pushes everything 30/50/70 ft away. At lvl 3 choose exemptions.", descriptions: [
        "Revulsion: Wave of force pushes everything 30 ft away.",
        "Revulsion: Wave of force pushes everything 50 ft away.",
        "Revulsion: Wave of force pushes everything 70 ft away. Can choose exemptions."
      ]}
    ],
    levels: {
      1: {
        auto: ["Devil Touch: Take on devil's appearance; harmless sensory effects related to your theme."],
        choices: [
          { type: "text", id: "devil_name", label: "Devil Name" },
          { type: "text", id: "devil_description", label: "Devil Description (appearance, backstory, personality)" },
          { type: "pick_one", id: "devil_emotion", label: "Devil Emotion (determines special ability)", options: ["Fear", "Lust / Attraction", "Anger", "Grief", "Protectiveness", "Joy / Worship", "Pride", "Envy / Greed", "Anxiety", "Shame", "Love", "Disgust"] },
          { type: "pick_specialized_powers", count: 4, label: "Pick 4 Specialized Powers" }
        ]
      },
      2: {
        auto: ["Infect Emotion: Influence group within 30 ft to feel any of your devil's emotions."],
        choices: [{ type: "pick_specialized_powers", count: 2, label: "Pick 2 more Specialized Powers (6 total)" }]
      },
      3: {
        auto: ["Devil Form: Merge with devil (+2d MD on everything). Lasts 10 min. 3x/day. Note: while this is active, however, the devil might be trying to get into your ear and get you to do certain things, or their personality and appetites might heavily affect yours. "],
        choices: [{ type: "pick_specialized_powers", count: 2, label: "Pick 2 more Specialized Powers (8 total)" }]
      },
      4: {
        auto: ["Gain all remaining Specialized Powers."],
        choices: []
      }
    },
    resources: [
      { id: "devil_form", label: "Devil Form (merge with devil, +2d MD, 10 min)", maxPerDay: 3, minLevel: 3 },
      { id: "rage", label: "Rage Attack (Anger — 3/4/5 dmg)", maxPerDay: 3, requiresEmotion: "Anger" },
      { id: "steal_vitality", label: "Steal Vitality (Envy/Greed — steal HP)", maxPerDay: 3, requiresEmotion: "Envy, Greed" },
      { id: "spirit_shield_critical", label: "Spirit Shield: ignore Critical Injury", maxPerDay: 3, minLevel: 3, requiresPower: "Spirit Shield" },
      { id: "soothe_soul_critical", label: "Soothe Soul: heal Critical Injury", maxPerDay: 3, minLevel: 3, requiresPower: "Soothe Soul" },
      { id: "bend_fate_transfer", label: "Bend Fate: transfer consequence", maxPerDay: 3, minLevel: 3, requiresPower: "Bend Fate" }
    ]
  },

  "Demititan": {
    stat: "Vigor, Endurance, or Intuition",
    archetype: "Mages",
    chromaRequired: null,
    maxLevel: 6,
    elementPool: [
      { id: "stone", name: "Stone", tier: "I", focus: "++defense", levelAbilities: {
        1: "You can turn your skin to stone, giving you a plus to defense (ignore Minor Injuries from physical sources)\nCan turn an object to stone or grab a block of stone out of a surface and throw it, dealing damage (2 dmg on success)",
        2: "Can touch an ally to cover them with stone armor for up to a minute, protecting them (they ignore Minor Injuries)",
        3: "You can now become stone, becoming even harder to damage (you ignore Minor Injuries)! You may still move around in this state."
      }},
      { id: "metal", name: "Metal", tier: "I", focus: "+defense, +attack", levelAbilities: {
        1: "Now able to transmute you skin into metal; get a small bonus to defense (ignore the -1 debuff from Minor Injuries)\nCan morph body into metal blades and spines to deal damage (3 dmg on success up to 3/day)",
        2: "Can create metal weapons and tools from the environment (3 dmg on success)",
        3: "The weapons and tools you make are sharper and even more effective, and can be larger than before (4 dmg on success)"
      }},
      { id: "plant", name: "Plant", tier: "I", focus: "++effect", levelAbilities: {
        1: "You get plant ranged attacks as you grow whipping and shooting plants from your skin, they can do several things if the enemy is hit by your attack:\n- slowing attack (next Action Difficulty against them is lowered by one tier)\n- bleeding attack (next three Attacks against them do +1 dmg)\n- binding attack (wraps up the enemy)",
        2: "Can bind every enemy up to 20 feet from you as vines grow from your feet\nCan poison one target as you fire a poison dart or whip them with a poison vine (Actions against them get a +1d Mastery Die for up to a minute, effect can't stack)\nCan make climbing vines from a surface you touch that can extend up to 50 ft for a turn or 300ft if you spend 5 minutes",
        3: "Turn into plants (a tree, vines, flowers, grass, etc.) and move around in vine mode\nCan merge with plants and travel along any connected plant\nExtremely intense single-target binds as you cover them in tree roots or vines"
      }},
      { id: "flesh", name: "Flesh", tier: "I", focus: "+defense, +attack", levelAbilities: {
        1: "Can morph your body and give yourself attack claws and long teeth for a bite (3 dmg on success up to 3/day)\nYou can also give yourself scales for defense (ignore the -1 debuff from Minor Injuries)\nVision up to 1,000 ft",
        2: "More intense attack claws and bite (3 dmg on success)\nGreat vision (darkvision up to 60 ft, regular vision up to 2,500 ft)\nSpeed legs (deer or rabbit) and jumps (30 ft jumps and quick dashes)\nSwimming speed and climbing speed up",
        3: "Even more intense attack claws and bite (4 dmg on success)\nTransform (1 hour duration):\n- Give yourself wings and feathers and you can fly\n- Give yourself gills and scales and you can swim super fast\n- Give yourself digging claws and you can sense through the ground up to 60 ft"
      }},
      { id: "water", name: "Water", tier: "II", focus: "+++defense", levelAbilities: {
        2: "Massive defense bonus as you turn partially to water (Ignores the -1 they get from their first Severe Injury)\nShoot ice spikes that can freeze enemies in place",
        3: "You're extremely quick and hard to hit (Can't take Minor Injuries)\nDo a smother attack as you partially turn into water and cover an enemy (can do up to 2 dmg per turn upon Success, must keep Succeeding to keep this effect up)\nCan become completely water, you're immaterial, can move through cracks, make things wet, etc. (3/day, can't attack, take damage, cast spells, or do abilities in this form but you can do the smother attack, lasts up to 1 hr)"
      }},
      { id: "light", name: "Light", tier: "II", focus: "++effect, ++attack", levelAbilities: {
        2: "You can create a massive flash of light, blinding your enemies (can last up to a minute, Action Difficulty goes down by one tier for any Action done against this enemy)\nYou can bend light within a 30 ft range of you, giving you extreme vision around corners and stuff\nYou can go almost invisible, goes away when you attack (makes it extremely hard to hit you)\nCan shoot laser beams, can go around corners (30 ft, does 3 dmg on Success)",
        3: "You may do a light warp (warp up to 60ft from you at will)\nYou turn into light, you're immaterial, can move through cracks, fly, etc. (3/day, can't attack, take damage, cast spells, or do abilities in this form, lasts up to 1 hr)\nMove extremely fast as you turn partially to light\nMassive laser you can only do 3 times a day (5 dmg on Success)"
      }},
      { id: "air", name: "Air", tier: "II", focus: "++defense, ++effect", levelAbilities: {
        2: "You can do big air pushes up to 30 ft from you (10 ft width, does no damage)\nYour speed goes up quite a bit\nCrazy jumps (up to 50 ft) and lunges (up to 50 ft)\nBig air blast that does quite a bit of damage but you can only do 3 times a day (5 ft width and 30 ft range cone, does 2 dmg on Success)\nCan throw ranged air blasts (30 ft, does 2 dmg on success, one target)",
        3: "You become almost impossible to hit as you can turn partially to air to dodge (ignore up to 3 Severe Injuries per day)\nYou can become air, you're immaterial, can move through cracks, pick small things up, etc. (3/day, can't attack, take damage, cast spells, or do abilities in this form, lasts up to 1 hr)\nCan now push up to 60 ft away from you\nYou can do an aoe blast centered on you that goes 30 ft (3 dmg on success)"
      }},
      { id: "fire", name: "Fire", tier: "II", focus: "+++attack", levelAbilities: {
        2: "Up-close attack blasts in a 10-ft cone (3 dmg on Success)\nThrow fire in a ranged attack, can go up to 30 ft away from you (4 dmg on Success)",
        3: "Become fire, you're immaterial, can move through cracks, set things on fire, etc. (3/day, can't attack, take damage, cast spells, or do abilities in this form, lasts up to 1 hr)\nIf you engulf someone while you're made of fire you can do up to 3 dmg per turn upon Success, must keep Succeeding to keep this effect up\nDo a single-target touch damage attack that does a massive amount of damage 3 times a day (6 dmg on Success)\nFire AOE in a 30 ft range centered on you 3 of times a day (5 dmg on Success)"
      }}
    ],
    levels: {
      1: { auto: [], choices: [{ type: "pick_elements", count: 2, tier: "I", label: "Pick 2 Tier I Elements" }] },
      2: { auto: ["Existing Tier I elements advance to Tier II version."], choices: [{ type: "pick_elements", count: 1, tier: "II", label: "Pick 1 Tier II Element" }] },
      3: { auto: ["All Tier I and Tier II elements advance again."], choices: [] },
      4: { auto: [], choices: [{ type: "pick_elements", count: 2, tier: "I", label: "Pick 2 more Tier I Elements" }] },
      5: { auto: [], choices: [{ type: "pick_elements", count: 2, tier: "II", label: "Pick 2 Tier II Elements" }] },
      6: { auto: ["Gain Empowered Immaterial Mode for all Tier II elements."], choices: [{ type: "pick_elements", count: 1, tier: "II", label: "Pick 1 more Tier II Element" }] }
    },
    resources: [
      { id: "water_immaterial", label: "Water Immaterial Form", maxPerDay: 3, requiresElement: "Water", minLevel: 3 },
      { id: "light_immaterial", label: "Light Immaterial Form", maxPerDay: 3, requiresElement: "Light", minLevel: 3 },
      { id: "air_immaterial",   label: "Air Immaterial Form",   maxPerDay: 3, requiresElement: "Air",   minLevel: 3 },
      { id: "fire_immaterial",  label: "Fire Immaterial Form",  maxPerDay: 3, requiresElement: "Fire",  minLevel: 3 }
    ]
  },

  // ─── MAGICIANS ───────────────────────────────────────────────────────────────

  "Alchemist": {
    stat: "Wit or Endurance",
    archetype: "Magicians",
    chromaRequired: null,
    maxLevel: 3,
    potionPool: [
      { id: "basic_damage", name: "Basic Damage", minLevel: 1, unlimited: true, description: "Deals 2 dmg to one target." },
      { id: "basic_buff", name: "Basic Buff", minLevel: 1, unlimited: true, description: "Gives target +1d MD on next Action." },
      { id: "healing_i", name: "Healing I", minLevel: 1, brewedPerDay: 3, description: "Heal 3 HP's worth of Injuries (no Critical)." },
      { id: "buff_i", name: "Buff I", minLevel: 1, brewedPerDay: 3, description: "Target's next 3 Actions: +1d MD." },
      { id: "weak_i", name: "Weak I", minLevel: 1, brewedPerDay: 3, description: "Next 3 Actions against target: +1d MD." },
      { id: "corrupt_i", name: "Corrupt I", minLevel: 2, brewedPerDay: 3, description: "Must be ingested. Horrible nightmares tonight; reduced awareness next day." },
      { id: "healing_ii", name: "Healing II", minLevel: 2, brewedPerDay: 2, description: "Heal 5 HP's worth of Injuries (no Critical)." },
      { id: "fire_i", name: "Fire I", minLevel: 2, brewedPerDay: 3, description: "10 ft radius explosion, 3 dmg on Success." },
      { id: "buff_ii", name: "Buff II", minLevel: 3, brewedPerDay: 2, description: "Target's next 3 Actions: +2d MD." },
      { id: "weak_ii", name: "Weak II", minLevel: 3, brewedPerDay: 2, description: "Next 3 Actions against target: +2d MD." },
      { id: "fire_ii", name: "Fire II", minLevel: 3, brewedPerDay: 2, description: "15 ft radius explosion, 4 dmg on Success." }
    ],
    levels: {
      1: {
        auto: [
          "9 potions per day total. 30 ft throw distance.",
          "Potions available: Basic Damage (unlimited), Basic Buff (unlimited), Healing I (3/day), Buff I (3/day), Weak I (3/day).",
          "Know 2 two-potion mixes and 1 three-potion mix. Mix any two potions for combo effects (both Strength I and II variants).",
          "It takes 30 min total to mix all potions each morning. Leftover potions from the previous day lose their effect after a Deep Rest.",
          "Costs 1 Stamina to throw or administer a potion."
        ],
        choices: []
      },
      2: {
        auto: [
          "17 potions per day total. 50 ft throw distance.",
          "New potions unlocked: Corrupt I (3/day), Healing II (2/day), Fire I (3/day).",
          "Know up to 10 two-potion mixes and 16 three-potion mixes total."
        ],
        choices: []
      },
      3: {
        auto: [
          "23 potions per day total. 70 ft throw distance. Can now choose to reduce the radius of any potion blast.",
          "New potions unlocked: Buff II (2/day), Weak II (2/day), Fire II (2/day).",
          "Know up to 14 two-potion mixes and 20 three-potion mixes total."
        ],
        choices: []
      }
    },
    resources: [
      { id: "healing_i_used", label: "Healing I (3 HP, no Critical)", maxPerDay: 3 },
      { id: "buff_i_used", label: "Buff I (+1d MD on next 3 Actions)", maxPerDay: 3 },
      { id: "weak_i_used", label: "Weak I (+1d MD vs target for next 3 Actions)", maxPerDay: 3 },
      { id: "corrupt_i_used", label: "Corrupt I (ingested — horrible nightmares, reduced awareness)", maxPerDay: 3, minLevel: 2 },
      { id: "healing_ii_used", label: "Healing II (5 HP, no Critical)", maxPerDay: 2, minLevel: 2 },
      { id: "fire_i_used", label: "Fire I (10 ft AOE, 3 dmg on Success)", maxPerDay: 3, minLevel: 2 },
      { id: "buff_ii_used", label: "Buff II (+2d MD on next 3 Actions)", maxPerDay: 2, minLevel: 3 },
      { id: "weak_ii_used", label: "Weak II (+2d MD vs target for next 3 Actions)", maxPerDay: 2, minLevel: 3 },
      { id: "fire_ii_used", label: "Fire II (15 ft AOE, 4 dmg on Success)", maxPerDay: 2, minLevel: 3 }
    ],
    twoPotionMixes: [
      { potions: "Healing + Buff", strengthI: { minLevel: 1, name: "Buff Heal I", effect: "Heals 2 HP's worth of Injuries and gives +1d Mastery Die on next Action (10 ft radius)." }, strengthII: { minLevel: 2, name: "Buff Heal II", effect: "Heals 3 HP's worth of Injuries (not Critical) and gives +2d Mastery Dice on next Action (10 ft radius)." } },
      { potions: "Buff + Weak", strengthI: { minLevel: 1, name: "Tentacles", effect: "You get up to 10 ft tentacles, up to 10 tentacles, can stick to any surface, are strong (1 hr)." }, strengthII: { minLevel: 3, name: "Wings", effect: "You get wings, can fly (1 hr)." } },
      { potions: "Healing + Corrupt", strengthI: { minLevel: 2, name: "Poison I", effect: "Deals 2 dmg to target. If ingested gives Poisoned Critical Injury and does 3 dmg for 3 turns." }, strengthII: { minLevel: 2, name: "Corrupted Strength", effect: "Gives target Poisoned Severe Injury but they get +3d Mastery Dice on next 3 Actions." } },
      { potions: "Fire + Healing", strengthI: { minLevel: 2, name: "Barkskin", effect: "Ignore next 3 HP's worth of Injuries (no Critical), heal 2 HP." }, strengthII: { minLevel: 2, name: "Stoneskin", effect: "Ignore next 5 HP's worth of Injuries, can ignore Critical Injuries (dmg spilled over 5 HP is also ignored)." } },
      { potions: "Corrupt + Weak", strengthI: { minLevel: 2, name: "Deep Weak I", effect: "Gives +1d Mastery Die to all Actions done against everyone in range (15 ft radius)." }, strengthII: { minLevel: 3, name: "Deep Weak II", effect: "Gives +2d Mastery Die to all Actions done against everyone in range (15 ft radius)." } },
      { potions: "Fire + Buff", strengthI: { minLevel: 2, name: "Holy Fire I", effect: "+1 dmg to attacks (1 hr)." }, strengthII: { minLevel: 3, name: "Holy Fire II", effect: "+2 dmg to attacks (1 hr)." } },
      { potions: "Fire + Corrupt", strengthI: { minLevel: 2, name: "Concentrated Fire", effect: "15 ft explosion, does 6 dmg on Success." }, strengthII: { minLevel: 3, name: "Sticky Fire", effect: "25 ft radius explosion, 3 dmg for 3 turns to everything in radius as it coats the ground and hangs in the air." } }
    ],
    threePotionMixes: [
      { potions: "Fire + Healing + Buff", strengthI: { minLevel: 2, name: "Enlarge I", effect: "You 150% the size of an ally (or yourself). End and Vig Actions get +1d Mastery Dice, deal +1 extra damage. Lasts up to a minute." }, strengthII: { minLevel: 2, name: "Enlarge II", effect: "You double the size of an ally (or yourself). End and Vig Actions get +2d Mastery Dice, deal +3 extra damage. Lasts up to a minute." } },
      { potions: "Fire + Corrupt + Weak", strengthI: { minLevel: 2, name: "Shrink I", effect: "You 75% the size of an ally (or yourself). Int Actions get +1d Mastery Dice, speed increases by 25 ft. Lasts up to a minute." }, strengthII: { minLevel: 3, name: "Shrink II", effect: "You half the size of an ally (or yourself). Int Actions get +2d Mastery Dice, speed increases by 50 ft. Lasts up to a minute." } },
      { potions: "Healing + Buff + Corrupt", strengthI: { minLevel: 2, name: "Charm", effect: "Target is charmed. They will go along with things you say and treat you like a close friend. If attacked by you or your allies this ends immediately." }, strengthII: { minLevel: 2, name: "Love/Hate Potion", effect: "See the Tier III Infect Emotions Mystic spell. This effect is the same." } },
      { potions: "Healing + Weak + Corrupt", strengthI: { minLevel: 2, name: "Invisibility", effect: "The target is invisible for up to an hour, dissipates when they attack or do any ability that costs stamina." }, strengthII: { minLevel: 2, name: "Ethereality", effect: "Become ethereal, you're immaterial, can move through cracks and through substances up to 5 ft thick (can't attack, take damage, cast spells, or do abilities, lasts up to 10 min)." } },
      { potions: "Fire + Buff + Weak", strengthI: { minLevel: 2, name: "Prettify", effect: "Makes the target hotter for up to an hour." }, strengthII: { minLevel: 3, name: "Forgetting", effect: "The target forgets a small thing or memory of your choosing, it returns after an hour." } },
      { potions: "Buff + Weak + Corrupt", strengthI: { minLevel: 2, name: "Poison II", effect: "Deals 3 dmg to target. If ingested gives Poisoned Critical Injury and does 9 dmg for five turns." }, strengthII: { minLevel: 3, name: "Chaos", effect: "Roll on the Enchanter Chaos Table (roll a d20 and whatever you get on the Minor and Major Chaos Table happens)." } },
      { potions: "Buff + Healing + Weak", strengthI: { minLevel: 1, name: "Speak and Comprehend Languages", effect: "For the next 10 min the target can comprehend and speak any language (certain ancient or secret languages have protections against this)." }, strengthII: { minLevel: 2, name: "Rejuvenate", effect: "The target doesn't have to breathe for up to an hour and gains half their Stamina Max immediately." } },
      { potions: "Fire + Buff + Corrupt", strengthI: { minLevel: 2, name: "Structure Bomb", effect: "Does 3 dmg on Success but does double damage to structures (50 ft radius)." }, strengthII: { minLevel: 3, name: "Cluster Bomb", effect: "Does 5 dmg on Success, flows around corners (50 ft radius)." } },
      { potions: "Fire + Healing + Weak", strengthI: { minLevel: 2, name: "Soothe Emotions", effect: "You can make this potion a mist to soothe the emotions of anything within a 30 ft square." }, strengthII: { minLevel: 2, name: "Sleep", effect: "You can make this potion a mist to make anything within a 30 ft square fall asleep." } },
      { potions: "Fire + Healing + Corrupt", strengthI: { minLevel: 2, name: "Illusion", effect: "Can create an illusion up to 50 ft square." }, strengthII: { minLevel: 2, name: "Animate Object", effect: "You animate an object up to 10 ft × 10 ft × 10 ft. This object follows your orders and if it's large can deal up to 4 dmg on a Success." } }
    ]
  },

  "Bard": {
    stat: "Intuition",
    archetype: "Magicians",
    chromaRequired: null,
    maxLevel: 4,
    baseRange: { 1: 20, 2: 30, 3: 50, 4: 50 },
    spellPool: [
      { id: "terrifying_melody", name: "Terrifying Melody", tier: 1, range: "r x 2", description: "Reveal horrifying vision to enemy: 2 dmg on Success (psychic)." },
      { id: "song_of_health", name: "Song of Health", tier: 1, range: "r", description: "Heal people you choose in range (can heal Minor Injuries)." },
      { id: "song_of_acuity", name: "Song of Acuity", tier: 1, range: "r / 2", concentration: true, description: "Everyone in range: +2d MD for sense checks for 10 min." },
      { id: "song_of_breath", name: "Song of Breath", tier: 1, range: "r x 2", concentration: true, description: "Create atmosphere everywhere in range centered on you." },
      { id: "healing_melody", name: "Healing Melody", tier: 1, range: "r / 2", description: "Heal one target (Severe Injuries or two Minor Injuries)." },
      { id: "slowing_melody", name: "Slowing Melody", tier: 1, range: "r", description: "Slow enemy's actions for ~10 sec (overcome mental defenses; +1d MD against them)." },
      { id: "rejuvenating_melody", name: "Rejuvenating Melody", tier: 1, range: "r", concentration: true, description: "Target ally: +1d MD for 10 min." },
      { id: "charming_melody", name: "Charming Melody", tier: 1, range: "r", concentration: true, description: "Overcome enemy's mental defenses to charm them." },
      { id: "personal_illusion", name: "Personal Illusion", tier: 1, range: "r", concentration: true, description: "Single target illusion (up to 50 ft radius, target can't see you can't see it)." },
      { id: "song_of_bolstering", name: "Song of Bolstering", tier: 2, range: "r / 2", concentration: true, description: "All allies in range: +2d MD to either Vig+End or Int+Wit for 10 min." },
      { id: "song_of_discord", name: "Song of Discord", tier: 2, range: "r", description: "Overcome any number of enemies' mental defenses: +1d MD on next Action against each." },
      { id: "song_of_life", name: "Song of Life", tier: 2, range: "r / 2", concentration: true, description: "Heal up to 3 HP distributed among allies per round (stamina each round, no Critical)." },
      { id: "fortification_melody", name: "Fortification Melody", tier: 2, range: "r", concentration: true, description: "One ally: reduce damage received by 1 (stamina each round)." },
      { id: "thwarting_melody", name: "Thwarting Melody", tier: 2, range: "r x 2", description: "Overcome enemy's confidence: -2 dmg on their next attack, hesitation and safer choices." },
      { id: "group_illusion", name: "Group Illusion", tier: 2, range: "r", concentration: true, description: "Illusion for any number of enemies (up to 50 ft radius sphere)." },
      { id: "song_of_rejuvination", name: "Song of Rejuvenation", tier: 3, range: "r / 2", concentration: true, description: "Allies in range: +2d MD (stamina each round, 10 min)." },
      { id: "song_of_thwarting", name: "Song of Thwarting", tier: 3, range: "r x 2", description: "Overcome any number of enemies' confidence: -2 dmg, hesitation, safer choices." },
      { id: "passionate_melody", name: "Passionate Melody", tier: 3, range: "r", description: "Allow ally one extremely empowered action: +4d MD on one Action." },
      { id: "delusion", name: "Delusion", tier: 3, range: "r", concentration: true, description: "Full-sensory illusion encapsulating enemy's entire world, or plant a belief in their head (stamina/round)." }
    ],
    levels: {
      1: {
        auto: ["Passive emotion suggestion when performing (listeners can reject at will, no stamina).", { text: "Max Spell Tier I. Max Concentration 2, 10 min. Range 20 ft.", key: "descriptor" }],
        choices: [
          { type: "text", id: "artform", label: "Instrument / Artform" },
          { type: "pick_spells", count: 6, maxTier: 1, label: "Pick 6 Tier I spells" }
        ]
      },
      2: {
        auto: [{ text: "Max Spell Tier II. Max Concentration 3, 30 min. Range 30 ft.", key: "descriptor" }],
        choices: [{ type: "pick_spells", count: 4, maxTier: 2, label: "Pick 4 more spells (10 total, Tier I–II)" }]
      },
      3: {
        auto: [{ text: "Max Spell Tier III. Max Concentration 4, 1 hr. Range 50 ft.", key: "descriptor" }],
        choices: [{ type: "pick_spells", count: 4, maxTier: 3, label: "Pick 4 more spells (14 total, Tier I–III)" }]
      },
      4: {
        auto: [{ text: "Know all spells. Max Concentration 6, 3 hr.", key: "descriptor" }],
        choices: []
      }
    },
    resources: [
      { id: "concentration_active", label: "Active Concentration", maxByLevel: { 1: 2, 2: 3, 3: 4, 4: 6 } }
    ]
  },

  "Physic": {
    stat: "Any",
    archetype: "Magicians",
    chromaRequired: null,
    maxLevel: 4,
    baseRange: { 1: 20, 2: 30, 3: 50, 4: 50 },
    spellPool: [
      // Red Spells
      { id: "heat_ray", name: "Heat Ray", tier: 1, color: "Red", range: "r x 2", description: "3 dmg on Success. Can't use red spells next turn." },
      { id: "scorching_bomb", name: "Scorching Bomb", tier: 1, color: "Red", range: "r", aoe: true, description: "AOE 2 dmg on Success. Can upcast to Tier II: 3 dmg, can't use red next turn." },
      { id: "lighten_target", name: "Lighten Target", tier: 1, color: "Red", range: "r", concentration: true, description: "Nullify fall dmg, double throw distance, half weight of object." },
      { id: "sense_up", name: "Sense Up", tier: 1, color: "Green", range: "r / 2", concentration: true, description: "Amplify all senses of a target (or nullify with consent). At Tier II can nullify unwilling." },
      { id: "healing_physic", name: "Healing", tier: 1, color: "Green", range: "r", description: "Can heal Minor Injuries." },
      { id: "send_thoughts", name: "Send Thoughts", tier: 1, color: "Gray", range: "r", description: "Send thoughts to others; they can send a little back." },
      { id: "xeon_sensing", name: "Xeon Sensing", tier: 1, color: "Gray", range: "r x 2", concentration: true, description: "See or reveal xenic spirits and other xeon sources including tech and magic items." },
      { id: "cold_ray", name: "Cold Ray", tier: 1, color: "Blue", range: "r x 2", description: "2 dmg + Frozen debuff (+1d MD on next Action against them)." },
      { id: "freezing_bomb", name: "Freezing Bomb", tier: 1, color: "Blue", range: "r", aoe: true, description: "AOE 2 dmg. Upcast: 2 dmg + Frozen (+1d MD)." },
      { id: "grippy_target", name: "Grippy Target", tier: 1, color: "Blue", range: "r", concentration: true, description: "On ally: climb proficiently. On small object: stick to surfaces." },
      { id: "scorch_ray", name: "Scorch Ray", tier: 2, color: "Red", range: "r x 2", description: "4 dmg on Success. Can't use red spells next turn." },
      { id: "percussive_bomb", name: "Percussive Bomb", tier: 2, color: "Red", range: "r x 2", aoe: true, description: "2 dmg in 15 ft radius. Enemies pushed to edge of radius." },
      { id: "high_jump", name: "High Jump", tier: 2, color: "Red", range: "0", concentration: true, description: "Jump up to 30 ft. Lasts 1 hr." },
      { id: "slippery_target", name: "Slippery Target", tier: 2, color: "Red", range: "r", concentration: true, description: "Target can't move well; +1d MD on Actions against them while active." },
      { id: "lighten_group", name: "Lighten Group", tier: 2, color: "Red", range: "r", concentration: true, aoe: true, description: "Nullify fall dmg, double throw distance, half weight of group." },
      { id: "freeze_ray", name: "Freeze Ray", tier: 2, color: "Blue", range: "r x 2", description: "2 dmg + Advanced Frozen (+2d MD on next Action against them)." },
      { id: "force_field", name: "Force Field", tier: 2, color: "Blue", range: "r / 2", concentration: true, aoe: true, description: "Ignore Minor Injuries from xenic attacks (breaks on Severe)." },
      { id: "leaden_foe", name: "Leaden Foe", tier: 2, color: "Blue", range: "r", concentration: true, description: "Triple fall dmg, lock target in place, 2 dmg/turn on Success." },
      { id: "electromag_seeing", name: "Electromagnetic Seeing", tier: 2, color: "Green", range: "r / 2", concentration: true, description: "See full electromagnetic spectrum (heat signatures, X-rays, radio waves)." },
      { id: "atmosphere_physic", name: "Atmosphere", tier: 2, color: "Green", range: "r", concentration: true, aoe: true, description: "Create breathable atmosphere in range." },
      { id: "create_darkness", name: "Create Darkness", tier: 2, color: "Gray", range: "r", concentration: true, aoe: true, description: "No one can see in range unless they have heat vision or xeon sensing." },
      { id: "binding", name: "Binding", tier: 2, color: "Gray", range: "r", concentration: true, description: "Xenic tethers: up to 400 lbs, 5 tethers, 5 min. Manipulate length/direction." },
      { id: "onyx_shielding_physic", name: "Onyx Shielding", tier: 2, color: "Gray", range: "r / 2", concentration: true, aoe: true, description: "Defense vs onyx/obsidian/physical. Flat surface only. Ignore Minor from physical." },
      { id: "flash_heat_trigger", name: "Flash Heat Trigger", tier: 3, color: "Red", range: "r", concentration: true, aoe: true, description: "Heat blast in triggering rune. Spec conditions or manual (r×2). Lasts 1 day. 3 dmg, can't use red next turn." },
      { id: "heat_wall", name: "Heat Wall", tier: 3, color: "Red", range: "r", concentration: true, aoe: true, description: "40 ft wall (can bend). Heat damage 10 ft radius on one side (3 dmg, can't use red next turn)." },
      { id: "force_wave_physic", name: "Force Wave", tier: 3, color: "Red", range: "r", aoe: true, description: "Move everything in a 30 ft cube in one direction." },
      { id: "slippery_group", name: "Slippery Group", tier: 3, color: "Red", range: "r", concentration: true, aoe: true, description: "Enemies stuck/slippery; +1d MD on Actions against them." },
      { id: "flash_cold_trigger", name: "Flash Cold Trigger", tier: 3, color: "Blue", range: "r", concentration: true, aoe: true, description: "Cold blast in triggering rune. 2 dmg + Advanced Frozen (+2d MD on next two Actions against them). Lasts 1 day." },
      { id: "cold_wall", name: "Cold Wall", tier: 3, color: "Blue", range: "r", concentration: true, aoe: true, description: "40 ft wall (can bend). Frozen debuff (+1d MD) and 2 dmg on one side." },
      { id: "grippy_group", name: "Grippy Group", tier: 3, color: "Blue", range: "r", concentration: true, aoe: true, description: "Enemies stuck to ground, can't move; +1d MD on Actions against them." },
      { id: "life_force", name: "Life Force", tier: 3, color: "Green", range: "r / 2", concentration: true, aoe: true, description: "Allies: +1d MD continuously. Stamina each round." },
      { id: "shade", name: "Shade", tier: 3, color: "Gray", range: "0", concentration: true, description: "Make someone a stealthy shade (invisible, move silently)." },
      { id: "triggered_spell", name: "Triggered Spell", tier: 3, color: "Clear", range: "r", description: "Attach any existing spell to a triggering rune. Lasts 1 day. Costs ≥2 Stamina." },
      { id: "ranged_spell", name: "Ranged Spell", tier: 3, color: "Clear", range: "r x 4", description: "Cast any existing spell at r×4 range. Costs ≥2 Stamina." },
      { id: "amplified_spell", name: "Amplified Spell", tier: 3, color: "Clear", description: "Cast any existing spell with +2 extra damage. Costs ≥2 Stamina." },
      { id: "empowered_spell", name: "Empowered Spell", tier: 3, color: "Clear", description: "Cast any existing spell with +2d MD. Costs ≥2 Stamina." }
    ],
    levels: {
      1: {
        auto: [{ text: "Max Spell Tier I. Max Concentration 1, 10 min. Range 20 ft.", key: "descriptor" }],
        choices: [
          { type: "pick_one", id: "casting_style", label: "Pick a spellcasting style", options: ["Chroma Generalist: +1d MD if prev spell was opposite color (Red↔Blue, Green↔Gray)", "Chroma Specialist: +1d MD if prev spell same color (also removes Red Heat cooldown)", "AOE Caster: +1d MD if spell is AOE", "Single-Target Caster: +1d MD if spell has one target"] },
          { type: "pick_spells", count: 9, maxTier: 1, label: "Pick 9 Tier I spells" }
        ]
      },
      2: {
        auto: [{ text: "Max Spell Tier II. Max Concentration 2, 30 min. Range 30 ft.", key: "descriptor" }],
        choices: [{ type: "pick_spells", count: 6, maxTier: 2, label: "Pick 6 more spells (15 total, Tier I–II)" }]
      },
      3: {
        auto: [{ text: "Max Spell Tier III. Max Concentration 3, 1 hr. Range 50 ft.", key: "descriptor" }],
        choices: [{ type: "pick_spells", count: 6, maxTier: 3, label: "Pick 6 more spells (21 total, Tier I–III)" }]
      },
      4: {
        auto: [{ text: "Know all spells. Max Concentration 5, 3 hr.", key: "descriptor" }],
        choices: []
      }
    },
    resources: [
      { id: "concentration_active", label: "Active Concentration", maxByLevel: { 1: 1, 2: 2, 3: 3, 4: 5 } }
    ]
  },

  "Possessor": {
    stat: "Any",
    archetype: "Magicians",
    chromaRequired: null,
    maxLevel: 4,
    baseRange: { 1: 20, 2: 30, 3: 50, 4: 50 },
    spellPool: [
      // Red
      { id: "heat_ray_pos", name: "Heat Ray", tier: 1, color: "Red", range: "r x 2", description: "3 dmg on Success. Can't use red spells next turn." },
      { id: "scorching_bomb_pos", name: "Scorching Bomb", tier: 1, color: "Red", aoe: true, range: "r", description: "AOE 2 dmg on Success. Can cast at Tier II for 3 dmg (can't use red next turn)." },
      { id: "flash_heat_trigger_pos", name: "Flash Heat Trigger", tier: 3, color: "Red", concentration: true, aoe: true, range: "r", description: "Heat blast in triggering rune. Manual trigger range r x 2. Lasts 1 day. 3 dmg (can't use red next turn)." },
      { id: "heat_wall_pos", name: "Heat Wall", tier: 3, color: "Red", concentration: true, aoe: true, range: "r", description: "40 ft wall (can bend); one side exudes heat and damage in 10 ft radius. 3 dmg (can't use red next turn)." },
      { id: "percussive_bomb_pos", name: "Percussive Bomb", tier: 2, color: "Red", aoe: true, range: "r x 2", description: "2 dmg in 15 ft radius; enemies pushed to edge of radius." },
      // Blue
      { id: "cold_ray_pos", name: "Cold Ray", tier: 1, color: "Blue", range: "r x 2", description: "2 dmg + Frozen (+1d MD on next Action against them)." },
      { id: "freezing_bomb_pos", name: "Freezing Bomb", tier: 1, color: "Blue", aoe: true, range: "r", description: "AOE 2 dmg. Can cast at Tier II: 2 dmg + Frozen (+1d MD)." },
      { id: "flash_cold_trigger_pos", name: "Flash Cold Trigger", tier: 3, color: "Blue", concentration: true, aoe: true, range: "r", description: "Cold blast in triggering rune. Lasts 1 day. 2 dmg + Advanced Frozen (+2d MD on next two Actions against them)." },
      { id: "cold_wall_pos", name: "Cold Wall", tier: 3, color: "Blue", concentration: true, aoe: true, range: "r", description: "40 ft wall (can bend); cold damage and Frozen (+1d MD) on one side. 2 dmg." },
      // Gray
      { id: "create_darkness_pos", name: "Create Darkness", tier: 2, color: "Gray", concentration: true, aoe: true, range: "r", description: "No one can see in range unless they have heat vision or xeon sensing." },
      { id: "shade_pos", name: "Shade", tier: 3, color: "Gray", concentration: true, range: "0", description: "Make someone a stealthy shade (invisible, move silently)." },
      { id: "xeon_sensing_pos", name: "Xeon Sensing", tier: 1, color: "Gray", concentration: true, range: "r x 2", description: "See xenic spirits and other sources of xeon, including tech and magic items. Lasts 10 min." },
      // Dark
      { id: "wither_flesh", name: "Wither Flesh", tier: 1, color: "Dark", range: "r", description: "Spirits suck life force from a creature, weakening them (3 dmg on Success)." },
      { id: "corporealize_spirit", name: "Corporealize Spirit", tier: 1, color: "Dark", concentration: true, range: "r / 2", description: "Give a spirit physical form; they can speak and interact with the world. Give simple commands. Lasts up to 1 hr." },
      { id: "take_spirit_appearance", name: "Take Spirit Appearance", tier: 2, color: "Dark", range: "0", description: "Take on the appearance of one of your servant spirits for up to 2 hours." },
      { id: "haunting_figures", name: "Haunting Figures", tier: 2, color: "Dark", concentration: true, range: "r", description: "Spirits torment a target; 2 dmg per 10 sec on Success. Lasts up to 5 min (target can keep trying to escape)." },
      { id: "necrotic_beam", name: "Necrotic Beam", tier: 3, color: "Dark", aoe: true, range: "r", description: "Beam of necrotic energy hits everyone on a line in 60 ft range (5 dmg on Success)." },
      { id: "raise_hoard", name: "Raise Hoard", tier: 2, color: "Dark", concentration: true, range: "r / 2", description: "Raise a hoard of undead spirits. As a whole has health of one strong servant. Can't do damage but can restrain, block spaces, break doors/walls." },
      { id: "physical_thrall", name: "Physical Thrall", tier: 3, color: "Dark", concentration: true, range: "r / 2", description: "A spirit attempts to inhabit a mortal's body. Take over for ~1 min. Every time hurt they can try to escape." },
      { id: "raise_dead_i", name: "Raise Dead/Create Construct", tier: 1, color: "Dark", concentration: true, range: "r / 2", description: "Servant HP: 3. A spirit inhabits a deceased creature/person or animates non-living matter. Base 2 dmg on Success. (3/day)" },
      { id: "raise_dead_ii", name: "Raise Dead/Create Construct II", tier: 2, color: "Dark", concentration: true, range: "r / 2", description: "Servant HP: 5. The servant is Special, imbued with one Lvl 1 Adept Basic and Advanced power. (3/day)" },
      { id: "raise_dead_iii", name: "Raise Dead/Create Construct III (Elite)", tier: 3, color: "Dark", concentration: true, range: "r / 2", description: "Servant HP: 7. The servant is Elite, imbued with one Lvl 2 Adept Basic and Advanced power. Extremely strong and hard to take down. (2/day)" }
    ],
    levels: {
      1: {
        auto: [{ text: "Max Spell Tier I. Max Concentration 2, 10 min. Range (r) = 20 ft.", key: "descriptor" }, "Possessors can't use the same spell more than once in a row (thrall spirits tire out). Can combine multiple spells in one Action for 1 Stamina."],
        choices: [{ type: "pick_spells", count: 7, maxTier: 1, label: "Pick 7 Tier I spells" }]
      },
      2: {
        auto: [{ text: "Max Spell Tier II. Max Concentration 3, 30 min. Range (r) = 30 ft.", key: "descriptor" }],
        choices: [{ type: "pick_spells", count: 4, maxTier: 2, label: "Pick 4 more spells (11 total, Tier I–II)" }]
      },
      3: {
        auto: [{ text: "Max Spell Tier III. Max Concentration 4, 1 hr. Range (r) = 50 ft.", key: "descriptor" }],
        choices: [{ type: "pick_spells", count: 4, maxTier: 3, label: "Pick 4 more spells (15 total, Tier I–III)" }]
      },
      4: {
        auto: [{ text: "Know all spells. Max Concentration 5, 3 hr. Range (r) = 50 ft.", key: "descriptor" }],
        choices: []
      }
    },
    resources: [
      { id: "concentration_active", label: "Active Concentration", maxByLevel: { 1: 2, 2: 3, 3: 4, 4: 5 } },
      { id: "raise_dead_i_uses", label: "Raise Dead/Create Construct (3 HP servant)", maxPerDay: 3, requiresSpell: "Raise Dead/Create Construct" },
      { id: "raise_dead_ii_uses", label: "Raise Dead/Create Construct II (5 HP, Special)", maxPerDay: 3, requiresSpell: "Raise Dead/Create Construct II" },
      { id: "raise_dead_iii_uses", label: "Raise Dead/Create Construct III Elite (7 HP)", maxPerDay: 2, requiresSpell: "Raise Dead/Create Construct III (Elite)" }
    ]
  },

  "Enchanter": {
    stat: "Vigor or Intuition",
    archetype: "Magicians",
    chromaRequired: null,
    maxLevel: 3,
    substanceNote: "You need the listed material to cast each spell — feel free to find a place to buy it or go on a small quest to find it.",
    spellPool: [
      // Tier I
      { id: "prestidigitation", name: "Prestidigitation", tier: 1, roll: 1, range: "30 ft", substance: "Predigitase (orange, red, green, yellow gem)", description: "Create a small magical effect: gust of wind, small illusion (2 ft square), ground rumble, open/close doors, light or put out fires, harmless sparkles, clean or soil a small area. Cannot do damage unless very creative." },
      { id: "mending", name: "Mending", tier: 1, roll: 2, range: "15 ft", substance: "Dioptase (dark green gem)", description: "Mend a non-magical, non-xenic object (2 ft square max). Can mend larger objects with multiple uses." },
      { id: "charm_enc", name: "Charm", tier: 1, roll: 3, range: "15 ft", substance: "Rose Quartz (light pink with white streaks)", concentration: true, description: "[Concentration] +2d MD bonus to interpersonal Actions for up to 10 min." },
      { id: "little_heal_enc", name: "Little Heal", tier: 1, roll: 4, range: "30 ft", substance: "Amber (golden orange gem)", description: "Heal up to 3 HP's worth of Injuries distributed among any amount of targets." },
      { id: "electric_zap", name: "Electric Zap", tier: 1, roll: 5, range: "30 ft", substance: "Barite (light blue or yellow gem)", description: "Zap a target, deals 3 dmg on Success." },
      { id: "comprehend_languages", name: "Comprehend and Speak Languages", tier: 1, roll: 6, range: "—", substance: "Tincalconite (white solid gem or powder)", concentration: true, description: "[Concentration] For the next 10 min you can comprehend and speak any language (certain ancient or secret languages have protections against this)." },
      { id: "clone_image", name: "Clone Image", tier: 1, roll: 7, range: "50 ft", substance: "Gypsum (soft clear gem)", concentration: true, description: "[Concentration] Create an illusory version of yourself you can command to do whatever you like. It can interact with the world physically but can't deal damage or use your xenic abilities." },
      { id: "breath_of_chaos", name: "Breath of Chaos", tier: 1, roll: 8, range: "—", substance: "Kairidium (rainbow in light, black in darkness)", description: "Roll a d8, cast that Tier I Enchanter spell for free (1/turn). You must cast that spell even if disruptive. Roll 8 = pick any Tier I spell for free; every consecutive 8 you roll also lets you pick a free spell." },
      // Tier II
      { id: "petrify", name: "Petrify", tier: 2, roll: 1, range: "30 ft", substance: "Cerussite (clear white crystal shards)", concentration: true, description: "[Concentration] Partially petrify a target: +1d MD on all Actions against them for up to 1 min. Three successes against the same target = full petrification for 1 hour." },
      { id: "poison_enc", name: "Poison", tier: 2, roll: 2, range: "30 ft", substance: "Peridot (light green gem)", description: "Inflict poison upon a target: next two Actions against this target get +2d MD." },
      { id: "scrying", name: "Scrying", tier: 2, roll: 3, range: "100 ft", substance: "Purpurite (deep purple rare gem)", concentration: true, description: "[Concentration] See remotely from up to 100 ft away (eyes must be closed). Can also be used to see into the xenic plane." },
      { id: "illusion_enc", name: "Illusion", tier: 2, roll: 4, range: "100 ft", substance: "Garnet (any color)", concentration: true, description: "[Concentration] Create an illusion up to 50 ft square." },
      { id: "ghostwalk", name: "Ghostwalk", tier: 2, roll: 5, range: "—", substance: "Amazonite (light blue gem)", concentration: true, description: "[Concentration] Become ethereal: you're immaterial, can move through cracks and through substances up to 5 ft thick. Can't attack, take damage, cast spells, or use abilities in this form. Lasts up to 10 min." },
      { id: "solid_illusion", name: "Solid Illusion", tier: 2, roll: 6, range: "50 ft", substance: "Onidium (white, brown, black gem)", concentration: true, description: "[Concentration] Create an object out of xeon up to 30 ft square (max 1000 lbs). Must start stationary on the ground." },
      { id: "pocket_dimension", name: "Pocket Dimension", tier: 2, roll: 7, range: "30 ft", substance: "Pomjite (purple and gray gem)", description: "Create a small rift in the xenic plane: 3×3×3 ft cube, holds unlimited weight, entrance up to 3×3 ft. You can change dimensions (max 27 cubic ft). Location can't change while open. You can open it from within; no one else can." },
      { id: "touch_of_chaos", name: "Touch of Chaos", tier: 2, roll: 8, range: "—", substance: "Kairidium (rainbow in light, black in darkness)", description: "Roll a d8, cast that Tier II Enchanter spell for free (1/turn). You must cast that spell even if disruptive. Roll 8 = pick any Tier II spell for free." },
      // Tier III
      { id: "xenic_portal", name: "Xenic Plane Portal", tier: 3, roll: 1, range: "15 ft", substance: "Malachite (bright green and dark green gem)", description: "Create a portal into or out of the xenic plane." },
      { id: "swap_places", name: "Swap Places", tier: 3, roll: 2, range: "100 ft (unwilling) / 10 miles (willing)", substance: "Black Rutile (clear gem with black streaks)", description: "Swap places with a person or creature, or swap two creatures. Willing targets: no Action needed (still costs Stamina), range up to 10 miles if you know both targets. Unwilling targets: must see them and do an Action Roll." },
      { id: "stasis_lock", name: "Stasis Lock", tier: 3, roll: 3, range: "50 ft", substance: "Wolframite (blue metal)", concentration: true, description: "[Concentration] Lock a person or thing to a fixed point in space for up to 10 minutes." },
      { id: "animate_object", name: "Animate Object", tier: 3, roll: 4, range: "15 ft", substance: "Topaz (clear crystal, many colors)", concentration: true, description: "[Concentration] Animate an object up to 10×10×10 ft. Follows your orders; large objects can deal up to 4 dmg on Success." },
      { id: "tiny_pocket_hut", name: "Tiny Pocket Hut", tier: 3, roll: 5, range: "30 ft", substance: "Pomjite (purple and gray gem)", description: "Create a large rift in the xenic plane: 20×20×20 ft Pocket Dimension with the same rules as Pocket Dimension." },
      { id: "enbiggen", name: "Enbiggen", tier: 3, roll: 6, range: "15 ft", substance: "Fluorite (green and purple gem)", concentration: true, description: "[Concentration] Double the size of an ally or yourself: weight ×8, End and Vig get +2d MD, deal +3 extra damage. Lasts up to 1 minute." },
      { id: "ensmallen", name: "Ensmallen", tier: 3, roll: 7, range: "15 ft", substance: "Fluorite (green and purple gem)", concentration: true, description: "[Concentration] Half the size of an ally or yourself: weight ÷8, Int gets +2d MD, speed +50 ft. Lasts up to 1 minute." },
      { id: "call_of_chaos", name: "Call of Chaos", tier: 3, roll: 8, range: "—", substance: "Kairidium (rainbow in light, black in darkness)", description: "Roll a d8, cast that Tier III Enchanter spell for free (1/turn). You must cast that spell even if disruptive. Roll 8 = pick any Tier III spell for free." }
    ],
    chaosTableMinor: [
      { roll: 1,  name: "Self-Petrify",  range: "—",     effect: "Paralyzes you for a turn (cannot take Actions)." },
      { roll: 2,  name: "Rot",           range: "50 ft",  effect: "Rot flesh; cloud of smell 15 ft radius does 1 dmg to target and everyone around for 3 rounds." },
      { roll: 3,  name: "Future Sight",  range: "—",     effect: "You see something that will happen in the future." },
      { roll: 4,  name: "Eyes to See",   range: "—",     effect: "See the whole electromagnetic spectrum and into the xenic plane for 1d10 min." },
      { roll: 5,  name: "Faraway Voice", range: "—",     effect: "Send a short message to anyone you've met or seen in person, anywhere." },
      { roll: 6,  name: "Summon Spirit", range: "—",     effect: "Summon a minor spirit (roll d4: 1=demon, 2=devil, 3=elemental sprite, 4=mortal spirit). No control over this being." },
      { roll: 7,  name: "Forgetting",    range: "50 ft",  effect: "Make a target forget one thought or small memory of your choosing." },
      { roll: 8,  name: "Little Heal",   range: "—",     effect: "Heal yourself up to 5 HP's worth of Injuries." },
      { roll: 9,  name: "Paralyze Foe",  range: "50 ft",  effect: "Paralyze a foe; allies get +2d MD on all Actions against them for 1d4 turns." },
      { roll: 10, name: "Rejuvenation",  range: "—",     effect: "Gain half your Stamina Max immediately." }
    ],
    chaosTableMajor: [
      { roll: 11, name: "Degradation",    range: "—",      effect: "Gain a level of Spirit Decay immediately!" },
      { roll: 12, name: "Mass Heal",      range: "50 ft",   effect: "Heal up to 20 HP's worth of Injuries distributed among anybody within range." },
      { roll: 13, name: "Wings to Fly",   range: "—",      effect: "You can fly for 10 min." },
      { roll: 14, name: "Confuse",        range: "100 ft",  effect: "An enemy is forced to attempt to attack an ally this round." },
      { roll: 15, name: "Explode",        range: "50 ft",   effect: "Explosion around an enemy: 5 dmg in a 30 ft radius." },
      { roll: 16, name: "Reverse Time",   range: "50 ft",   effect: "Reverse one thing that anyone has done in the past 10 minutes." },
      { roll: 17, name: "Electric Shock", range: "30 ft",   effect: "Shock the enemy with electricity, 7 dmg." },
      { roll: 18, name: "Cleanse Spirit", range: "—",      effect: "Cleanse all your Spirit Decay, or that of an ally if you don't have any." },
      { roll: 19, name: "Energize",       range: "—",      effect: "You or any ally may immediately do an Action using +3d MD for no Stamina." },
      { roll: 20, name: "Channel Chaos",  range: "—",      effect: "You may immediately do an ability of any other class." }
    ],
    levels: {
      1: {
        auto: [{ text: "All Tier I spells available (see spell list below).", key: "spell_tier" }, "Pocket Space: Carry up to 3 handheld items in a pocket dimension (rip a small hole in space anywhere; the hole can't move without closing/reopening it).", { text: "Max Concentration 1, 10 min.", key: "concentration" }],
        choices: []
      },
      2: {
        auto: [{ text: "All Tier I and II spells available.", key: "spell_tier" }, { text: "Chaos: Roll on the Minor Chaos Table for 0 stamina (3×/day) — roll d10. You must enact the effect.", key: "chaos_ability" }, { text: "Max Concentration 2, 30 min.", key: "concentration" }],
        choices: []
      },
      3: {
        auto: [{ text: "All Tier I, II, and III spells available.", key: "spell_tier" }, { text: "Controlled Chaos: Roll a d20 on the full Chaos Table and pick the result you want — 3×/day, 0 stamina. Replaces the level 2 Chaos ability.", key: "chaos_ability" }, { text: "Max Concentration 3, 1 hr.", key: "concentration" }],
        choices: []
      }
    },
    resources: [
      { id: "concentration_active", label: "Active Concentration", maxByLevel: { 1: 1, 2: 2, 3: 3 } },
      { id: "chaos_uses", label: "Chaos / Controlled Chaos", maxPerDay: 3, minLevel: 2 }
    ]
  },

  // ─── SPIRITUALISTS ───────────────────────────────────────────────────────────

  "Elementalist": {
    stat: "Vigor or Endurance",
    archetype: "Spiritualists",
    chromaRequired: null,
    rangeByLevel: { 1: 30, 2: 50, 3: 75 },
    specialties: [
      { id: "red", label: "Red (Fire/Heat)", bonus: "+1 dmg on successful elemental attacks." },
      { id: "blue", label: "Blue (Water/Ice)", bonus: "+1d MD on Actions against moving targets." },
      { id: "green", label: "Green (Nature/Life)", bonus: "Exempt chosen targets from your AOE effects." },
      { id: "gray", label: "Gray (Shadow/Air)", bonus: "2× range on all elemental techniques." }
    ],
    techniquePool: [
      // Tier I
      { id: "combust",       name: "Combust",         tier: 1, element: "Fire",  requirements: "5 ft cube air or gas around target",  description: "Target in range combusts, deals 3 dmg on Success. The air used has to be around the target." },
      { id: "boulder",       name: "Boulder",          tier: 1, element: "Stone", requirements: "6 ft cube stone or earth",             description: "Shape a boulder into any shape or push a 6 ft square of stone or earth around in range. Can push a target." },
      { id: "phytoheal",     name: "Phytoheal",        tier: 1, element: "Plant", requirements: "1 lb of biomass",                      description: "Shape biomass into a plant that can heal Minor Injuries." },
      { id: "water_lash",    name: "Water Lash",       tier: 1, element: "Water", requirements: "3 ft cube water",                      description: "Use water to push or pull a target in any direction except up, or just move the water itself." },
      { id: "flash_el",      name: "Flash",            tier: 1, element: "Light", requirements: "No xenic darkness",                    description: "Blind targets in a 25° cone; next Action against them gets +1d MD." },
      { id: "chromespear",   name: "Chromespear",      tier: 1, element: "Metal", requirements: "1 ft cube of metal",                   description: "Use metal to deal 3 dmg to one target. Can throw a spear of metal or have the metal appear from the terrain. Can pin target on Success." },
      { id: "chitinous_armor", name: "Chitinous Armor", tier: 1, element: "Flesh", requirements: "Biological target",                  description: "Target grows chitinous, scaly, or leathery armor; can ignore physical Minor or Severe Injuries for up to 30 seconds." },
      { id: "wind_tunnel",   name: "Wind Tunnel",      tier: 1, element: "Air",   requirements: "10 ft cube air or gas",               description: "Push or pull a target in range in any direction, or just move the air itself." },
      // Tier II
      { id: "flamewave",     name: "Flamewave",        tier: 2, element: "Fire",  requirements: "20 ft cube air or gas",               description: "A wave of fire sweeps through a 20 ft cube, deals 3 dmg on Success." },
      { id: "stonewall",     name: "Stonewall",        tier: 2, element: "Stone", requirements: "20 ft cube stone or earth",            description: "Shape stone or earth into a wall or any other shape, or push a 20 ft cube's worth around in range. Can push targets around." },
      { id: "constrict",     name: "Constrict",        tier: 2, element: "Plant", requirements: "5 lbs of biomass",                    description: "Shape biomass into vines or another plant type that constricts one humanoid target. Spend multiple Actions to constrict a larger target." },
      { id: "wave",          name: "Wave",             tier: 2, element: "Water", requirements: "15 ft cube water",                    description: "Use water to push or pull targets in a 30 ft area in any direction except up, or just move the water itself." },
      { id: "lightshift",    name: "Lightshift",       tier: 2, element: "Light", requirements: "No xenic darkness",                   description: "Use light in a 30 ft square to create an illusion of the same size. Can also suck all light from that area to create deep darkness." },
      { id: "shardbomb",     name: "Shardbomb",        tier: 2, element: "Metal", requirements: "5 ft cube of metal",                  description: "Use metal to throw spears or create a sharp flower of metal dealing 3 dmg in a 15 ft radius. Can pin targets on Success." },
      { id: "pestilence",    name: "Pestilence",       tier: 2, element: "Flesh", requirements: "Biological targets",                  description: "All targets in up to a 30 ft sphere are attacked by a powerful disease or poison: they take 2 dmg and Actions against them get +1d MD." },
      { id: "gust",          name: "Gust",             tier: 2, element: "Air",   requirements: "30 ft cube air or gas",               description: "Push or pull all targets in a 30 ft cube in any direction, or just move the air itself." },
      // Tier III
      { id: "fireball_el",   name: "Fireball",         tier: 3, element: "Fire",  requirements: "20 ft radius sphere air or gas",      description: "Massive fireball, deals 3 dmg on Success." },
      { id: "stoneshape",    name: "Stoneshape",       tier: 3, element: "Stone", requirements: "100 ft cube stone or earth",           description: "Shape stone or earth into a wall or any other shape, or push a 100 ft cube's worth around in range. Can push targets around." },
      { id: "create_plant",  name: "Create Plant",     tier: 3, element: "Plant", requirements: "Over 100 lbs of biomass (max 500 lbs)", description: "Use biomass to create and control whatever plants you want. Can be used for multiple Actions to create and shape bigger plants." },
      { id: "waterbomb",     name: "Waterbomb",        tier: 3, element: "Water", requirements: "30 ft radius sphere water",            description: "Use water to push or pull targets in a 50 ft radius area in any direction except up, or just move the water itself." },
      { id: "starbeam",      name: "Starbeam",         tier: 3, element: "Light", requirements: "No xenic darkness",                   description: "Do a laser beam that deals 4 dmg to all targets in a line." },
      { id: "magnetize",     name: "Magnetize",        tier: 3, element: "Metal", requirements: "25 ft cube of metal",                 description: "Move metal and metal objects in range however you'd like. Deals up to 5 dmg on Success with a large amount of metal." },
      { id: "flesh_puppet",  name: "Flesh Puppet",     tier: 3, element: "Flesh", requirements: "Biological target",                   description: "Attempt to take control of a target's body. Difficult Action; if Successful lasts up to 10 min. Does not control the target's mind." },
      { id: "supercell",     name: "Supercell",        tier: 3, element: "Air",   requirements: "50 ft radius sphere air or gas",      description: "Move all targets in a 50 ft radius sphere in any direction, or just move the air itself." }
    ],
    levels: {
      1: {
        auto: [{ text: "All Tier I elemental techniques available (element must be present in range).", key: "technique_tier" }],
        choices: [{ type: "pick_one", id: "specialty", label: "Pick your elemental specialty", options: ["Red: +1 dmg on all elemental technique attacks", "Blue: +1d MD on Actions against moving targets", "Green: may exempt any target or area from your AOE techniques", "Gray: all techniques get 2× range"] }]
      },
      2: {
        auto: [{ text: "All Tier I and II elemental techniques available.", key: "technique_tier" }],
        choices: []
      },
      3: {
        auto: [{ text: "All Tier I, II, and III elemental techniques available.", key: "technique_tier" }],
        choices: []
      }
    },
    resources: []
  },

  "Mystic": {
    stat: "Any",
    archetype: "Spiritualists",
    chromaRequired: null,
    spiritTypes: [
      { id: "mortal_spirit", name: "Mortal Spirit", focus: "Buffs and Debuffs", description: "Spirit of a deceased mortal. Specializes in helping allies and hurting foes.",
        spells: {
          1: [
            { name: "Mystic Trickery", latch: false, effect: "Creates small harmless sensory effects, moves objects, affects lights, overlaps voice, opens/closes doors, or becomes visible." },
            { name: "Spirit Scry", latch: false, effect: "See through spirit's eyes anywhere within double Spirit Range; invisible unless commanded." },
            { name: "Soothe", latch: true, effect: "Heals ally 2 HP's worth of Injuries for 3 turns." },
            { name: "Sludge", latch: true, effect: "All Actions against enemy: +1d MD for up to 3 turns (breakable on Failed roll)." },
            { name: "Warp Sound", latch: true, effect: "Creates 15 ft diameter cylinder of silence or sound-cancelling." }
          ],
          2: [
            { name: "Wither", latch: false, effect: "Saps enemy defenses: next Action against them gets +2d MD." },
            { name: "Charm", latch: true, effect: "Target treats you as close friend (breaks if attacked or trust broken)." },
            { name: "Bind Person", latch: true, effect: "Bind a humanoid from moving for up to 3 turns; they can't act and attacks have advantage (breakable)." },
            { name: "Illusion", latch: true, effect: "Detailed illusion within 20 ft cube including all senses, can move within range (immaterial)." }
          ],
          3: [
            { name: "Instill Passion", latch: false, effect: "Energizes ally with +3d MD on their next Action. (3/day)" },
            { name: "Infect Emotions", latch: false, effect: "Increase/decrease target's reputation by ±1 for up to 10 days; resets if Successful each day (max ±5)." },
            { name: "Possession", latch: true, effect: "Attempt to possess a mortal's body for 3 turns (breakable on Failed roll)." }
          ]
        }
      },
      { id: "animal_spirit", name: "Animal Spirit", focus: "Utility", description: "Spirit of a deceased animal or green xenic sprite. Specializes in buffing abilities and utility.",
        spells: {
          1: [
            { name: "Mystic Trickery", latch: false, effect: "Creates small harmless effects including sensory effects, moves objects, causes ground tremors, overlaps voice, opens/closes doors, or becomes visible." },
            { name: "Spirit Scry", latch: false, effect: "See through spirit's eyes anywhere within double Spirit Range; invisible unless commanded." },
            { name: "Animal Instinct", latch: false, effect: "Materializes to assist on animal handling, tracking, survival, or nature Actions (+2d MD); allows speaking to animals." },
            { name: "Primal Energy", latch: true, effect: "Attaches to ally: +1d MD to adventuring (non-combat) checks with one stat for 10 min max." },
            { name: "Primal Nature", latch: true, effect: "Attaches to ally: doubles speed and jump distance." },
            { name: "Ferocity", latch: true, effect: "Attaches to ally: +2 damage for 3 turns." }
          ],
          2: [
            { name: "Wither", latch: false, effect: "Saps enemy defenses: next Action against them gets +2d MD." },
            { name: "Distraction", latch: true, effect: "Distracts enemy: +1d MD on all Actions against them for next 3 turns." },
            { name: "Bind Monster", latch: true, effect: "Bind a non-humanoid creature from moving for up to 3 turns; they can't act and attacks have advantage (breakable)." },
            { name: "Create Atmosphere", latch: true, effect: "Creates 100 ft aura of breathable atmosphere around spirit." }
          ],
          3: [
            { name: "Primal Power", latch: false, effect: "Grants ally +3d MD to their next Action. (3/day)" },
            { name: "Fly", latch: true, effect: "Attaches to a person and allows them to fly unaided for up to 3 rounds." },
            { name: "Tough Skin", latch: true, effect: "Protects ally: absorbs up to 5 HP's worth of Injuries for up to 3 rounds (can absorb Critical Injuries)." }
          ]
        }
      },
      { id: "light_spirit", name: "Light Spirit", focus: "Buffs and Healing", description: "A light spirit or good mortal spirit. Specializes in healing, buffs, and blessings.",
        spells: {
          1: [
            { name: "Mystic Trickery", latch: false, effect: "Creates small harmless effects including sensory effects, overlaps beautiful voice, opens/closes doors, becomes bright 30 ft radius light, or becomes visible." },
            { name: "Spirit Scry", latch: false, effect: "See through spirit's eyes anywhere within double Spirit Range; invisible unless commanded." },
            { name: "Healing Touch", latch: true, effect: "Attaches to ally: heals them up to 3 HP's worth of Injuries each turn for 3 turns (no Critical Injuries)." },
            { name: "Charisma", latch: true, effect: "Attaches to ally: +2d MD on rolls dealing with communicating with others for 3 turns." },
            { name: "Seal Spirit", latch: false, effect: "Attempts to seal away a spirit or spiritual entity (can end possessions and latching); gets +1d MD." }
          ],
          2: [
            { name: "Wither", latch: false, effect: "Saps enemy defenses: next Action against them gets +2d MD." },
            { name: "Xenic Shield", latch: true, effect: "Attaches to ally: blocks all up to Severe Injuries from xenic sources for 3 turns." },
            { name: "Soothe", latch: false, effect: "Heals ally for up to 5 HP's worth of Injuries (no Critical); suppresses Spirit Decay effects for 1d10 hours." },
            { name: "Anoint Protector", latch: true, effect: "Attaches to ally with +1d MD; enemies in 10 ft radius can only attack this ally for up to 3 turns." }
          ],
          3: [
            { name: "Healing Presence", latch: true, effect: "Attaches to ally: heals them 3 HP's worth of Injuries each turn for 3 turns (no Critical)." },
            { name: "Energize", latch: true, effect: "Attaches to ally: grants +3d MD for 3 turns." },
            { name: "Block Decay", latch: true, effect: "Attaches to ally: they cannot take Spirit Decay for 3 turns." },
            { name: "Rejuvenate", latch: true, effect: "Cleanses all Minor Spirit Decay and Critical Injuries (except Death Blows) from ally, heals 1 HP; ally can't gain Critical Injuries for 3 turns." }
          ]
        }
      },
      { id: "dark_spirit", name: "Dark Spirit", focus: "Debuffs and Curses", description: "A devil, demon, or evil mortal spirit. Specializes in debuffs, curses, and damage over time.",
        spells: {
          1: [
            { name: "Mystic Trickery", latch: false, effect: "Creates small harmless effects including otherworldly and terrifying voice, moves objects, affects lights, opens/closes doors, or becomes visible." },
            { name: "Spirit Scry", latch: false, effect: "See through spirit's eyes anywhere within double Spirit Range; invisible unless commanded." },
            { name: "Hamper", latch: true, effect: "Enemy gets -3 debuff to adventuring (non-combat) checks with one chosen stat for 10 minutes (on failure vs stat)." },
            { name: "Torment", latch: true, effect: "Enemy takes +2 more damage from every attack for 3 turns (on failure vs stat)." }
          ],
          2: [
            { name: "Wither", latch: false, effect: "Saps enemy defenses: next Action against them gets +2d MD." },
            { name: "Empower", latch: true, effect: "Attaches to ally: +1d MD on Attack Actions and +2 damage for up to 3 turns." },
            { name: "Incite", latch: true, effect: "Forces enemy to attack a chosen target for next 3 turns (breakable on Failed roll)." },
            { name: "Frighten", latch: false, effect: "Enemy can't move closer to chosen person/thing and can't attack them (breakable)." }
          ],
          3: [
            { name: "Torture", latch: true, effect: "Target can't move, deal damage, do actions, or speak; all attacks against them are easier; 2 dmg at end of each turn for 3 turns (breakable)." },
            { name: "Waking Nightmare", latch: true, effect: "Enemy gets -2 to all damage dealt for up to 3 turns." },
            { name: "Pain Transfer", latch: true, effect: "All damage and healing taken by you is dealt as damage to enemy for 3 turns." }
          ]
        }
      },
      { id: "xenic_sprite", name: "Xenic Sprite", focus: "Utility", description: "Spirit made of pure xeon. Specializes in illusion, trickery, and mischief.",
        spells: {
          1: [
            { name: "Mystic Trickery", latch: false, effect: "Creates small harmless effects including sensory effects, moves objects, affects lights, causes ground tremors, overlaps voice, opens/closes doors, or becomes bright 30 ft radius light." },
            { name: "Spirit Scry", latch: false, effect: "See through spirit's eyes anywhere within double Spirit Range; invisible unless commanded." },
            { name: "Fog Cloud", latch: true, effect: "Becomes fog cloud up to 50 ft diameter sphere; reduces visibility to 5 ft." },
            { name: "Nature Form", latch: true, effect: "Attaches to ally: they can walk on water, talk to plants, and not need to breathe for up to 10 minutes." },
            { name: "Mending", latch: false, effect: "Mends broken object within 15 ft cube of any complexity level (must be Tier I power or less)." }
          ],
          2: [
            { name: "Wither", latch: false, effect: "Saps enemy defenses: next Action against them gets +2d MD." },
            { name: "Animate Object", latch: true, effect: "Inhabits object no bigger than 20 ft cube (max 350 lbs); can move it and unlock doors. In a computer: +2d MD to hack/search." },
            { name: "Illusion", latch: true, effect: "Detailed illusion within 20 ft cube with all senses; can move within range (breakable on Failed roll; immaterial)." },
            { name: "Ghostwalk", latch: true, effect: "Attaches to ally: they become ethereal (not invisible), can walk through substances and can't affect the physical realm for 10 min max." }
          ],
          3: [
            { name: "Truth", latch: true, effect: "Attempts to possess enemy; on success they enter trance and answer questions honestly (damage ends it; max 10 minutes)." },
            { name: "Bend Physics", latch: false, effect: "Cast any Physics spell (range 50 ft, AOE 25 ft radius), including Clear spells. Concentration spells require Sprite engagement. (3/day)" }
          ]
        }
      }
    ],
    spiritRange: { 1: 40, 2: 60, 3: 80, 4: 90, 5: 90, 6: 90 },
    levels: {
      1: {
        auto: ["You see the xenic plane equal to Mystic Level times per day (10 min each).", "Character Level ÷ 3 (min 1) bonus MD on spirit checks (no stamina)."],
        choices: [{ type: "pick_spirits", count: 3, label: "Pick 3 spirits (start at Tier I)" }]
      },
      2: {
        auto: [],
        choices: [{ type: "upgrade_spirits", count: 2, label: "Upgrade 2 spirits" }]
      },
      3: {
        auto: [],
        choices: [{ type: "upgrade_spirits", count: 2, label: "Upgrade 2 spirits" }]
      },
      4: {
        auto: [],
        choices: [
          { type: "pick_spirits", count: 1, startTier: 2, label: "Gain 1 new spirit at Tier II" },
          { type: "upgrade_spirits", count: 1, label: "Upgrade 1 spirit" }
        ]
      },
      5: {
        auto: [],
        choices: [
          { type: "pick_spirits", count: 1, startTier: 2, label: "Gain 1 new spirit at Tier II" },
          { type: "upgrade_spirits", count: 1, toTier: 3, label: "Upgrade 1 spirit" }
        ]
      },
      6: {
        auto: [],
        choices: [{ type: "upgrade_spirits", count: 2, toTier: 3, label: "Upgrade 2 spirits" }]
      }
    },
    resources: [
      { id: "instill_passion", label: "Instill Passion (Mortal Spirit T3: +3d MD)", maxPerDay: 3 },
      { id: "primal_power", label: "Primal Power (Animal Spirit T3: +3d MD)", maxPerDay: 3 }
    ]
  },

  "Summoner": {
    stat: "Any",
    archetype: "Spiritualists",
    chromaRequired: null,
    spiritTypes: [
      { id: "hovering", name: "Hovering Spirit", description: "A floating spirit specializing in ranged attacks and area control." },
      { id: "strong", name: "Strong Spirit", description: "A powerful spirit specializing in physical force and protection." },
      { id: "healing", name: "Healing Spirit", description: "A restorative spirit specializing in healing allies." },
      { id: "volatile", name: "Volatile Spirit", description: "An explosive spirit that can self-destruct for massive area damage (spirit destroyed on use)." }
    ],
    levels: {
      1: {
        auto: ["Spirit Range 25 ft. Spirits at Level 1 stats.", "Basic spells: Onyx Dart (Tier I)."],
        choices: [{ type: "pick_spirits", count: 2, label: "Pick 2 spirits (Hovering, Strong, Healing, or Volatile)" }]
      },
      2: {
        auto: ["Spirit Range 50 ft. All spirits → Level 2 stats. Onyx Bomb (Tier II) available."],
        choices: [{ type: "pick_spirits", count: 1, label: "Pick 1 more spirit" }]
      },
      3: {
        auto: ["Spirit Range 100 ft. All spirits → Level 3 stats. Resurrect Spirit (Tier III) available."],
        choices: [{ type: "pick_spirits", count: 1, label: "Pick 1 more spirit" }]
      }
    },
    resources: [
      { id: "healing_spirit_empower", label: "Healing Spirit Empower", maxPerDay: 3 },
      { id: "volatile_spirit_1", label: "Volatile Spirit #1 Self-Destruct (spirit destroyed)", maxPerDay: 1 },
      { id: "volatile_spirit_2", label: "Volatile Spirit #2 Self-Destruct (spirit destroyed)", maxPerDay: 1 },
      { id: "volatile_spirit_3", label: "Volatile Spirit #3 Self-Destruct (spirit destroyed)", maxPerDay: 1 }
    ]
  },

  // ─── TECHNOLOGISTS ───────────────────────────────────────────────────────────

  "Brawler": {
    stat: "Vigor or Endurance",
    archetype: "Technologists",
    maxLevel: 3,
    chromaRequired: null,
    effectPool: [
      { id: "cold_fist", name: "Cold Fist", description: "Inflict Frozen debuff (2 dmg on Success, +1d/+2d/+3d MD on next Action against them)." },
      { id: "heat_fist", name: "Heat Fist", description: "+1/+2/+3 dmg but must cool down next turn." },
      { id: "inertial_dampening", name: "Inertial Dampening", description: "Attempt to stop enemy attack or movement (reaction Action Roll). Range 15/30/50 ft." },
      { id: "tethering_whip", name: "Tethering Whip", description: "Xeon binding whip from gauntlet. Attaches 25/50/100 ft away; pull yourself to target or target to you." },
      { id: "propulsion", name: "Propulsion", description: "Boost speed 2×/3×/5× with boots. Push targets 15/30/50 ft with gauntlets." },
      { id: "onyx_shield", name: "Onyx Shield", description: "Black xeon armor plates. Ignore Minor/Severe/1 Critical from physical sources (lasts 10 min, breaks after blocking Critical)." },
      { id: "blue_shield", name: "Blue Shield", description: "Bubble of blue xeon. Ignore Minor/Severe/1 Critical from xenic sources (lasts 10 min, breaks after blocking Critical)." },
      { id: "friction_control", name: "Friction Control", description: "Friction Up: sticky, grapple bonus, wall climbing. Friction Down: slippery, dodge bonus. Each lasts 5/10/30 min." },
      { id: "weight_control", name: "Weight Control", description: "Weight Up: +2/+3/+4 extra dmg (5×/day). Weight Down: 4× jump height/distance, half fall dmg (10 min/30 min/1 hr)." },
      { id: "hp_gain", name: "HP Gain", description: "Heal 3/5/7 HP worth of Injuries (3×/day, no Critical)." },
      { id: "stamina_module", name: "Stamina Module", description: "Increase Stamina Exhaustion Limit by +2/+4/+6." },
      { id: "env_protection", name: "Environmental Protection", description: "Immune to temps 600°F to -200°F. Generate atmosphere bubble 30/50/200 ft radius." }
    ],
    levels: {
      1: {
        auto: ["Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina). Takes 30 min and tools to switch effects."],
        choices: [
          { type: "pick_effects", count: 6, installedCount: 4, label: "Know 6 effects; install 4 into your suit" }
        ]
      },
      2: {
        auto: [],
        choices: [
          { type: "pick_effects", count: 8, installedCount: 6, label: "Know 8 effects (pick 2 more); install 6" }
        ]
      },
      3: {
        auto: ["Know all 12 effects."],
        choices: []
      }
    },
    resources: [
      { id: "hp_gain_uses", label: "HP Gain", maxPerDay: 3 },
      { id: "weight_up_uses", label: "Weight Up (+dmg)", maxPerDay: 5 }
    ]
  },

  "Dronemaster": {
    stat: "Wit or Intuition",
    archetype: "Technologists",
    maxLevel: 3,
    chromaRequired: null,
    droneEffectPool: [
      { id: "beam", name: "Beam", tier: 1, description: "Can fire an ice ray that inflicts the Frozen debuff (grants +1d Mastery Die on next Action against them). Fire beam deals +1 damage but it has to cool down next turn." },
      { id: "shielding", name: "Shielding", tier: 1, description: "Can hover around a person and give them a bonus to defense against beam damage (target ignores Minor Injuries from xenic sources, but the shield breaks if it takes Severe or higher)." },
      { id: "hacking", name: "Hacking", tier: 1, description: "Can do a check for it to hack into things remotely; it can also look things up on the web. Hacking can't be used to disrupt weapons or other combat machinery." },
      { id: "recon", name: "Recon", tier: 1, description: "The Recon Drone has a drone connection range of 500 ft and you can see through its eyes and hear through its ears." },
      { id: "healing_drone", name: "Healing", tier: 1, trackUses: 5, trackLabel: "Healing uses (per day)", description: "Can heal up to 2 HP's worth of Injuries up to 5 times a day (one target). Can also heal other drones and repair them if they've been destroyed (but if they've been disintegrated then tough luck)." },
      { id: "advanced_beam", name: "Advanced Beam", tier: 2, description: "Ice ray inflicts Advanced Frozen debuff (grants +2d Mastery Die on next Action against them). Fire beam deals +2 damage but it has to cool down next turn." },
      { id: "animal_mech", name: "Animal Mech", tier: 2, description: "This mech drone is in the shape of a small animal. This animal can do up to 2 damage on a Success during combat, but it has all the abilities of the animal otherwise. May be used to scout." },
      { id: "atmosphere_drone", name: "Atmosphere", tier: 2, description: "Creates a 30 ft radius bubble of atmosphere." },
      { id: "onyx_drone", name: "Onyx", tier: 2, description: "Can hover around a person and give them a defense bonus against physical damage (target ignores Minor Injuries from physical sources). It can also create floating black platforms (up to 2 at a time)." },
      { id: "advanced_recon", name: "Advanced Recon", tier: 2, description: "The Advanced Recon Drone has extremely advanced auditory and visual sensors. It can also go semi-invisible, making it extremely stealthy, and can sense sources of xeon." },
      { id: "projector", name: "Projector", tier: 2, description: "Can create holographic projections up to a 20 ft square." },
      { id: "xeon_binding_drone", name: "Xeon Binding", tier: 3, description: "Can bind two things together with a white glowing tether. This tether can last up to 5 minutes, and the drone can have up to 3 tethers going at a time. The tethers can hold up to 1000 lbs, and the drone can manipulate the direction and length of these tethers (max 30 ft). It can also attempt to move another person but it's not quite as effective at that." },
      { id: "inertial_dampening_drone", name: "Inertial Dampening", tier: 3, description: "This drone can shoot a blue beam at a person to either stop them moving (no charge) or hamper the person's attacks and defense for the next turn (has to charge for 1 turn, +2d Mastery Dice on Actions against this target)." },
      { id: "weight_control_drone", name: "Weight Control", tier: 3, description: "Can shoot an orb of blue or red xeon at a person:<br>- Blue makes them go up to 2x their weight, which stops them in their tracks for the turn and damages them 2 on a Success<br>- Red makes them extra light, which makes them easier to push around" },
      { id: "advanced_healing", name: "Advanced Healing", tier: 3, trackUses: 5, trackLabel: "Adv. Healing uses (per day)", description: "Can heal up to 5 HP's worth of Injuries up to 5 times a day (any amount of targets, can't heal Critical Injuries)." },
      { id: "diamond", name: "Diamond", tier: 3, description: "When hit by beam attacks (blue or red) it amplifies them, multiplying the amount damage they do by 1.5. Has to cooldown for a turn after use." },
      { id: "force_wave_drone", name: "Force Wave", tier: 3, description: "Can create force waves in up to a 30 ft cube in any direction. These force waves can throw up to 500 lbs of weight (if the weight is spread out), and anyone caught in it must attempt to resist the effect." },
      { id: "advanced_hacking", name: "Advanced Hacking", tier: 3, trackUses: 1, trackLabel: "Adv. Hacking (1× per target, per day)", description: "You can now attempt to hack cybermods, weaponry, and most other technological objects. If successful all the enemy's cybermods go down for a turn, or the select tech or weaponry goes down. This ability can only be used on any individual person or object once per day." }
    ],
    levels: {
      1: {
        auto: ["2 active drones + 1 docked slot. Max Tier I effects only. 1 effect per drone. Drone connection range: 20 ft, max height: 10 ft. Drone shooting range: always 30 ft. Each drone has 3 HP.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["3 active drones + 1 docked slot. Tier I and II effects. 2 effects per drone. Drone connection range: 30 ft, max height: 20 ft. Drone shooting range: always 30 ft. Each drone has 4 HP."],
        choices: []
      },
      3: {
        auto: ["4 active drones + 1 docked slot. All tier effects. 2 effects per drone. Unlimited connection range/max height. Drone shooting range: always 30 ft. Each drone has 5 HP."],
        choices: []
      }
    },
    resources: []
  },

  "Emitter Specialist": {
    stat: "Wit or Intuition",
    archetype: "Technologists",
    maxLevel: 3,
    chromaRequired: null,
    emitterNote: "Emitters are small devices you throw (20 ft by hand) or launch from a gun. They stick to floors, walls, or ceilings, stay tethered to you, and return when spent or dismissed. Upgraded emitters can also perform the abilities of their lower-tier counterparts.",
    emitterPool: [
      { id: "blue_shield",        name: "Blue Shield",           tier: 1, description: "Blocks xenic damage (can be destroyed by sustained fire). Does not block sight. Ignore Minor Injuries from xenic sources; Severe Injuries break it." },
      { id: "onyx_shield",        name: "Onyx Shield",           tier: 1, description: "Shield itself has to to be a flat surface, no curves! Blocks physical, onyx, and obsidian dmg. Ignore Minor Injuries from physical sources, Severe Injuries break it Surface can hold up to 2000 lbs of weight. Does not block sight!" },
      { id: "healing_zone",       name: "Healing Zone",          tier: 1, description: "Heals a Minor Injury for everyone in range every round it's active." },
      { id: "damage_zone",        name: "Damage Zone",           tier: 1, description: "Deals 1 damage to everyone in range every round it's active." },
      { id: "force_wall",         name: "Force Wall",            tier: 2, description: "Creates a wall or chamber of invisible force in range. Takes strength to overcome." },
      { id: "cold_heat_wall",     name: "Cold/Heat Wall",        tier: 2, description: "Creates a wall in range. Deals 2 dmg to anyone who passes through it." },
      { id: "projection_emitter", name: "Projection Emitter",    tier: 2, description: "Projects a realistic illusion; others may attempt to discern that it's not real." },
      { id: "buff_zone",          name: "Buff Zone",             tier: 2, description: "Empowers everyone in range: +1d Mastery Die to all Actions." },
      { id: "debuff_zone",        name: "Debuff Zone",           tier: 2, description: "Debuffs everyone in range: +1d Mastery Die on all Actions done against targets in range." },
      { id: "atmosphere_zone",    name: "Atmosphere Zone",       tier: 2, description: "Generates breathable atmosphere in range." },
      { id: "adv_onyx_shield",    name: "Advanced Onyx Shield",  tier: 3, description: "Can now make full boxes of onyx to contain or protect, rules are same as Onyx Shield above except you ignore up to Severe Injuries from physical sources, breaks on Critical Injuries." },
      { id: "adv_blue_shield",    name: "Advanced Blue Shield",  tier: 3, description: "	More intense xenic shield. Ignore up to Severe Injuries from physical sources, breaks on Critical Injuries." },
      { id: "adv_healing_zone",   name: "Advanced Healing Zone", tier: 3, description: "Heals everyone in range up to 2 HP's worth of Injuries per turn it's active." },
      { id: "adv_buff_zone",      name: "Advanced Buff Zone",    tier: 3, description: "Empowers everyone in range: +2d Mastery Dice to all Actions." },
      { id: "adv_debuff_zone",    name: "Advanced Debuff Zone",  tier: 3, description: "Debuffs everyone in range: +2d Mastery Dice on all Actions done against targets in range." }
    ],
    levels: {
      1: {
        auto: ["All Tier I emitters available. 3 active emitters max. Duration 1 min. Radius 10 ft. Gun range 40 ft.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["All Tier I and II emitters available. 5 active emitters max. Duration 2 min. Radius 20 ft. Gun range 60 ft.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      3: {
        auto: ["All emitters available. 7 active emitters max. Duration 5 min. Radius 50 ft. Gun range 150 ft.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      }
    },
    resources: []
  },

  "Explosives Expert": {
    stat: "Any",
    archetype: "Technologists",
    maxLevel: 3,
    chromaRequired: null,
    bombNote: "Explosives can be thrown by hand (20 ft) or launched from a cannon. Effects don't flow around corners unless stated. Basic Damage and Basic Heal bombs are unlimited and don't count toward the daily limit. Higher-tier bombs include all lower-tier bomb capabilities.",
    bombPool: [
      { id: "basic_damage",    name: "Basic Damage",      tier: 1, unlimited: true,  description: "Deals 1 damage on Success." },
      { id: "basic_heal",      name: "Basic Heal",        tier: 1, unlimited: true,  description: "Heals 1 HP worth of Injuries to everyone in range." },
      { id: "heat",            name: "Heat",              tier: 1, description: "Deals 3 damage on Success. Cannon can't throw Heat Bombs next turn." },
      { id: "cold",            name: "Cold",              tier: 1, description: "Inflicts Frozen debuff (+1d Mastery Die on next Action against them). Deals 2 dmg on Success." },
      { id: "obsidian",        name: "Obsidian",          tier: 1, description: "Throws out small black daggers that do physical damage." },
      { id: "healing",         name: "Healing",           tier: 1, description: "Heals up to 3 HP's worth of Injuries to everyone in range." },
      { id: "sticky",          name: "Sticky",            tier: 1, description: "Everyone caught in the blast has half movement for the next round." },
      { id: "force",           name: "Force",             tier: 2, description: "	Doesn't do damage, but forces everything up to 500 lbs within its range away from the center of the blast to the rim of it. If any object caught in the blast hits anything it will take damage." },
      { id: "atmosphere",      name: "Atmosphere",        tier: 2, description: "Creates atmosphere in its area for the next 30 minutes." },
      { id: "darkness",        name: "Darkness",          tier: 2, description: "Creates impenetrable darkness within range. Sound and xeon sensors still work." },
      { id: "adv_heat",        name: "Advanced Heat",     tier: 2, description: "Deals 4 damage on Success. Cannon can't throw Heat Bombs next turn." },
      { id: "adv_cold",        name: "Advanced Cold",     tier: 2, description: "Inflicts Advanced Frozen debuff (+2d Mastery Die on next Action against them). Deals 2 dmg on Success." },
      { id: "stamina",         name: "Stamina",           tier: 2, description: "Gives everyone in range +1d Mastery Die for their next Action." },
      { id: "cluster",         name: "Cluster Explosion", tier: 3, description: "Does 5 damage on Success. Flows around corners." },
      { id: "adv_obsidian",    name: "Advanced Obsidian", tier: 3, description: "Obsidian shards shred the defenses of anyone inside." },
      { id: "tentacle",        name: "Tentacle",          tier: 3, description: "Pick three targets within double your AOE range. 5 ft-wide beams of energy arc from the bomb and hits the targets and everyone in between the target and the bomb. Does 4 dmg to everything hit." },
      { id: "structure",       name: "Structure",         tier: 3, description: "Does 3 dmg on Success but does double damage to structures." },
      { id: "adv_stamina",     name: "Advanced Stamina",  tier: 3, description: "Gives everyone in range +2d Mastery Dice for their next Action." },
      { id: "slippery",        name: "Slippery",          tier: 3, description: "Decreases friction for everything in range. Targets have half movement and +1d Mastery Die on all Actions done against them for the next 10 seconds." }
    ],
    levels: {
      1: {
        auto: ["All Tier I bombs available. 7 bombs made per day. Store up to 10. AOE 15 ft. Cannon range 40 ft.", "Basic Damage and Basic Heal bombs: unlimited (not counted toward daily limit).", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["All Tier I and II bombs available. 9 bombs per day. Store up to 15. AOE 25 ft. Cannon range 70 ft.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      3: {
        auto: ["All bombs available. 15 bombs per day. Store up to 20. AOE 50 ft. Cannon range 150 ft.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      }
    },
    storageByLevel: { 1: 10, 2: 15, 3: 20 },
    resources: []
  },

  "Gunslinger": {
    stat: "Wit or Intuition",
    archetype: "Technologists",
    maxLevel: 3,
    chromaRequired: null,
    gunTypes: [
      { id: "pistol",      name: "Pistol",      tier: 1, size: "small", dmg: 1, maxRange: "150 ft",    special: "+2 HP healing and +1d MD on non-damage effects." },
      { id: "shotgun",     name: "Shotgun",     tier: 1, size: "large", dmg: 2, maxRange: "100 ft",    special: "Can hit up to 2 targets within 5 ft of each other." },
      { id: "rifle",       name: "Rifle",       tier: 1, size: "large", dmg: 2, minRange: "30 ft",  maxRange: "2,500 ft" },
      { id: "revolver",    name: "Revolver",    tier: 2, size: "small", dmg: 2, maxRange: "150 ft" },
      { id: "musket",      name: "Musket",      tier: 2, size: "large", dmg: 4, minRange: "15 ft",  maxRange: "1,000 ft", special: "Every other turn only (charge time)." },
      { id: "machine_gun", name: "Machine Gun", tier: 3, size: "large", dmg: 3, maxRange: "2,500 ft",  special: "Can hit up to 3 targets per attack." },
      { id: "sniper",      name: "Sniper",      tier: 3, size: "large", dmg: 4, minRange: "100 ft", maxRange: "5,000 ft" }
    ],
    gunPool: [
      { id: "healing_gun", name: "Healing Gun", tier: 1, trackUses: 5, trackLabel: "Healing shots (per day)", description: "Heals 2 HP's worth of Injuries up to 5 times a day (one target)." },
      { id: "freeze_gun", name: "Cold Gun", tier: 1, description: "Inflicts Frozen (grants +1d Mastery Die on next Action against them). Gun does -1 dmg than usual (can't go below 0)." },
      { id: "heat_gun", name: "Heat Gun", tier: 1, description: "Deals +1 damage but it has to cool down next turn." },
      { id: "onyx_gun", name: "Onyx Gun", tier: 1, description: "Normal percussive gun, does physical damage." },
      { id: "grapple_gun", name: "Grapple Gun", tier: 1, description: "Can use to either move yourself to any place within 30 ft of you or attempt to attach to an enemy and move them to you, 30 ft range." },
      { id: "hacking_gun", name: "Hacking Gun", tier: 1, description: "Shoots a small device that hooks into the target's computer, enabling hacking." },
      { id: "advanced_cold_gun", name: "Advanced Cold Gun", tier: 2, description: "Inflicts Advanced Frozen debuff (grants +2d Mastery Die on next Action against them). Gun does -1 dmg than usual on its own." },
      { id: "advanced_heat_gun", name: "Advanced Heat Gun", tier: 2, description: "Deals +2 damage but it has to cool down next turn." },
      { id: "obsidian_gun", name: "Advanced Obsidian Gun", tier: 2, description: "Obsidian gun deals an extra +1 dmg when the target only has physical or xenic defenses (but is completely blocked by onyx shielding)." },
      { id: "stamina_gun", name: "Stamina Gun", tier: 2, description: "The target gets to subtract one from their Stamina Used Total." },
      { id: "recon_gun", name: "Recon Gun", tier: 2, description: "Gun shoots tiny cameras, mics, or xeon sensors that stick to the target. These are easily destroyed, but blend into their environments. Can also shoot trackers." },
      { id: "tranq_dart_gun", name: "Tranq Dart Gun", tier: 2, description: "Target's attacks are hampered; if it's a super good shot or if they're hit with multiple they can put the target to sleep (gives a +1d Mastery Die to all actions against target for 1 minute, 3 Tranq Darts puts the target to sleep)." },
      { id: "advanced_healing_gun", name: "Advanced Healing Gun", tier: 3, trackUses: 5, trackLabel: "Adv. Healing shots (per day)", description: "Can heal up to 5 HP's worth of Injuries up to 5 times a day (one target, can't heal Critical Injuries)." },
      { id: "uranium_gun", name: "Uranium Gun", tier: 3, trackUses: 3, trackLabel: "Uranium shots (4th = EXPLOSION!)", description: "Deals +5 dmg but can only be used 3 times a day and inflicts a Minor Injury on its wielder when used.<br>On 4th time it explodes dealing 20 dmg to everything in a 10 ft radius and 10 dmg in the 10 ft after that. Everything surviving in a 100 ft radius takes a level of Spirit Decay." },
      { id: "gravity_nullifier_gun", name: "Gravity Nullifier Gun", tier: 3, description: "Target's gravity is nullified for the next three turns." },
      { id: "buff_gun", name: "Buff Gun", tier: 3, description: "The target gets a +2d Mastery Die for the next minute (can't stack with another Buff Gun effect)." },
      { id: "force_gun", name: "Force Gun", tier: 3, description: "On hit forces the target to move up to 15 ft in any direction." }
    ],
    levels: {
      1: {
        auto: ["All Tier I guns and effects available. 1 effect slot per gun.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["All Tier II guns and effects available. 2 effect slots per gun.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      3: {
        auto: ["All guns and effects available. 3 effect slots per gun. Max 3 Large guns on person.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      }
    },
    resources: []
  },

  "Swordmaster": {
    stat: "Any",
    archetype: "Technologists",
    maxLevel: 3,
    chromaRequired: null,
    swordPowers: [
      { id: "cold_heat", name: "Cold / Heat", tier: 1, description: "Cold: 2 dmg + Frozen (+1d MD on next Action against target). Heat: +1 dmg but heat power has to cool down next turn." },
      { id: "weight_control_sword", name: "Weight Control", tier: 1, description: "Control your weight and sword weight (1/4× to 2×)." },
      { id: "force", name: "Force", tier: 2, description: "Force target in any direction up to 15 ft." },
      { id: "obsidian", name: "Obsidian", tier: 2, description: "+1 dmg vs targets with only physical or xenic defenses (completely blocked by onyx shielding)." },
      { id: "second_wind", name: "Second Wind", tier: 3, description: "Heal yourself up to 5 HP worth of Injuries (3×/day)." },
      { id: "reflect", name: "Reflect", tier: 3, description: "Reflect xenic effects back to origin or to another target. Massive damage potential based on what's reflected." }
    ],
    levels: {
      1: {
        auto: ["Tier I sword powers available (Cold/Heat, Weight Control).", "Normal attack: 3 dmg. Powerful attack: 5 dmg. Powerful attack range: beam up to 15 ft (single target).", "3 Powerful Attacks per day. Missed powerful attack is saved (not spent).", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["Tier II sword powers available (Force, Obsidian).", "Normal attack: 4 dmg. Powerful attack: 6 dmg. Powerful attack: now does AOE 90° arc (10 ft)."],
        choices: []
      },
      3: {
        auto: ["Tier III sword powers available (Second Wind, Reflect).", "Normal attack: 5 dmg. Powerful attack: 7 dmg. Powerful attack beam range: 30 ft through all targets in a line."],
        choices: []
      }
    },
    resources: [
      { id: "powerful_attack", label: "Powerful Attacks", maxPerDay: 3 },
      { id: "second_wind_uses", label: "Second Wind", maxPerDay: 3, minLevel: 3 }
    ]
  }

};
