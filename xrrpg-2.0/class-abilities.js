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
      0: { auto: ["Burst Strength Tier 0: Naturally very strong and fast."], choices: [] },
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
      0: { auto: ["Upped Endurance & Durability Tier 0."], choices: [] },
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
      0: { auto: ["Upped Senses Tier 0."], choices: [] },
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
      0: { auto: ["Mind Up Tier 0."], choices: [] },
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
    specializedPowers: [
      { id: "grab", name: "Grab", description: "Grab target 15/30/50 ft away, throw 15/20/25 ft, pull closer, or grapple. While grappled: +1d/2d/3d MD on Actions against them." },
      { id: "hurl", name: "Hurl", description: "Push target 20/30/50 ft away directly from you. At lvl 3 can push in any direction." },
      { id: "flash", name: "Flash", description: "Dash 30/50/100 ft. At lvl 2 dash before and 15/25/50 ft after an Action. At lvl 3 dash through walls." },
      { id: "reduce_mass", name: "Reduce Mass", description: "25%/50%/80% weight reduction in 10/20/40 ft bubble. At lvl 2 choose exemptions. At lvl 3 can nullify own gravity." },
      { id: "bend_fate", name: "Bend Fate", description: "Take a consequence from a willing target within 15/30/50 ft. At lvl 2 can affect unwilling. At lvl 3 transfer consequence to another target (3x/day)." },
      { id: "invigorate", name: "Invigorate", description: "Next Action of any visible target: +1d/+2d/+3d MD." },
      { id: "mind_invasion", name: "Mind Invasion", description: "Inhabit target's mind for 30 sec/1 min/5 min. Speak to them or hamper abilities (+1d MD on Actions against them)." },
      { id: "intense_aura", name: "Intense Aura", description: "Fill 15/30/50 ft radius with sensory distraction. Targets: +1d/+2d/+2d MD against them. At lvl 3 choose exemptions." },
      { id: "devil_weapons", name: "Devil Weapons", description: "Morph body to adopt devil's weapons: +1/+2/+3 dmg for 30 sec/1 min/5 min." },
      { id: "spirit_shield", name: "Spirit Shield", description: "Protect target from next Minor/Severe/Critical Injury. Ignoring Critical Injuries: 3x/day." },
      { id: "soothe_soul", name: "Soothe Soul", description: "Heal target 3/4/5 HP's worth of Injuries. At lvl 3 can heal Critical Injuries (3x/day)." },
      { id: "chaos", name: "Chaos", description: "Cast Enchanter Chaos at Tier I/II/III." }
    ],
    devilEmotions: [
      { id: "fear", label: "Fear", ability: "Terrify: Target terrified, +1d/+2d/+3d MD on Actions against them for up to 3 turns." },
      { id: "lust", label: "Lust / Attraction", ability: "Charm: Target charmed, treats you like close friend (breaks if attacked)." },
      { id: "anger", label: "Anger", ability: "Rage: 3/4/5 dmg attack, 3x/day." },
      { id: "grief", label: "Grief", ability: "Numbness: Target deals -1/-2/-3 dmg for 10 min." },
      { id: "protectiveness", label: "Protectiveness", ability: "Sacrifice: Take 1/2/3 dmg to block up to 3x that dmg done to allies (10 min, can block Critical)." },
      { id: "joy", label: "Joy / Worship", ability: "Glory: Heal up to 4/5/6 HP distributed among self and allies within 10/20/30 ft." },
      { id: "pride", label: "Pride", ability: "Hubris: Take 1/2/3 dmg to roll that many additional MD on your next Action." },
      { id: "envy", label: "Envy / Greed", ability: "Steal Vitality: Take 2/3/4 HP from target and heal yourself that much." },
      { id: "anxiety", label: "Anxiety", ability: "Preparation: Bank of 3d MD for you or allies to use anytime today (resets on Deep Rest, max 3d)." },
      { id: "shame", label: "Shame", ability: "Disappear: Invisible for 1/3/6 hours (breaks on attack or stamina ability)." },
      { id: "love", label: "Love", ability: "Selflessness: Heal someone else 3/5/7 HP. At lvl 3 can heal Critical Injuries." },
      { id: "disgust", label: "Disgust", ability: "Revulsion: Wave of force pushes everything 30/50/70 ft away. At lvl 3 choose exemptions." }
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
        auto: ["Devil Form: Merge with devil (+2d MD on everything). Lasts 10 min. 3x/day."],
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
      { id: "water_immaterial", label: "Water Immaterial Form", maxPerDay: 3 },
      { id: "light_immaterial", label: "Light Immaterial Form", maxPerDay: 3 },
      { id: "air_immaterial", label: "Air Immaterial Form", maxPerDay: 3 },
      { id: "fire_immaterial", label: "Fire Immaterial Form", maxPerDay: 3 }
    ]
  },

  // ─── MAGICIANS ───────────────────────────────────────────────────────────────

  "Alchemist": {
    stat: "Wit or Endurance",
    archetype: "Magicians",
    chromaRequired: null,
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
    spellPool: [
      { id: "terrifying_melody", name: "Terrifying Melody", tier: 1, description: "Reveal horrifying vision to enemy: 2 dmg on Success (psychic)." },
      { id: "song_of_health", name: "Song of Health", tier: 1, description: "Heal people you choose in range (can heal Minor Injuries)." },
      { id: "song_of_acuity", name: "Song of Acuity", tier: 1, concentration: true, description: "Everyone in range: +2d MD for sense checks for 10 min." },
      { id: "song_of_breath", name: "Song of Breath", tier: 1, concentration: true, description: "Create atmosphere everywhere in range centered on you." },
      { id: "healing_melody", name: "Healing Melody", tier: 1, description: "Heal one target (Severe Injuries or two Minor Injuries)." },
      { id: "slowing_melody", name: "Slowing Melody", tier: 1, description: "Slow enemy's actions for ~10 sec (overcome mental defenses; +1d MD against them)." },
      { id: "rejuvenating_melody", name: "Rejuvenating Melody", tier: 1, concentration: true, description: "Target ally: +1d MD for 10 min." },
      { id: "charming_melody", name: "Charming Melody", tier: 1, concentration: true, description: "Overcome enemy's mental defenses to charm them." },
      { id: "personal_illusion", name: "Personal Illusion", tier: 1, concentration: true, description: "Single target illusion (up to 50 ft radius, target can't see you can't see it)." },
      { id: "song_of_bolstering", name: "Song of Bolstering", tier: 2, concentration: true, description: "All allies in range: +2d MD to either Vig+End or Int+Wit for 10 min." },
      { id: "song_of_discord", name: "Song of Discord", tier: 2, description: "Overcome any number of enemies' mental defenses: +1d MD on next Action against each." },
      { id: "song_of_life", name: "Song of Life", tier: 2, concentration: true, description: "Heal up to 3 HP distributed among allies per round (stamina each round, no Critical)." },
      { id: "fortification_melody", name: "Fortification Melody", tier: 2, concentration: true, description: "One ally: reduce damage received by 1 (stamina each round)." },
      { id: "thwarting_melody", name: "Thwarting Melody", tier: 2, description: "Overcome enemy's confidence: -2 dmg on their next attack, hesitation and safer choices." },
      { id: "group_illusion", name: "Group Illusion", tier: 2, concentration: true, description: "Illusion for any number of enemies (up to 50 ft radius sphere)." },
      { id: "song_of_rejuvination", name: "Song of Rejuvenation", tier: 3, concentration: true, description: "Allies in range: +2d MD (stamina each round, 10 min)." },
      { id: "song_of_thwarting", name: "Song of Thwarting", tier: 3, description: "Overcome any number of enemies' confidence: -2 dmg, hesitation, safer choices." },
      { id: "passionate_melody", name: "Passionate Melody", tier: 3, description: "Allow ally one extremely empowered action: +4d MD on one Action." },
      { id: "delusion", name: "Delusion", tier: 3, concentration: true, description: "Full-sensory illusion encapsulating enemy's entire world, or plant a belief in their head (stamina/round)." }
    ],
    levels: {
      1: {
        auto: ["Passive emotion suggestion when performing (listeners can reject at will, no stamina).", "Max Spell Tier I. Max Concentration 2, 10 min. Range 20 ft."],
        choices: [
          { type: "text", id: "artform", label: "Instrument / Artform" },
          { type: "pick_spells", count: 6, maxTier: 1, label: "Pick 6 Tier I spells" }
        ]
      },
      2: {
        auto: ["Max Spell Tier II. Max Concentration 3, 30 min. Range 30 ft."],
        choices: [{ type: "pick_spells", count: 4, maxTier: 2, label: "Pick 4 more spells (10 total, Tier I–II)" }]
      },
      3: {
        auto: ["Max Spell Tier III. Max Concentration 4, 1 hr. Range 50 ft."],
        choices: [{ type: "pick_spells", count: 4, maxTier: 3, label: "Pick 4 more spells (14 total, Tier I–III)" }]
      },
      4: {
        auto: ["Know all spells. Max Concentration 6, 3 hr."],
        choices: []
      }
    },
    resources: []
  },

  "Physic": {
    stat: "Any",
    archetype: "Magicians",
    chromaRequired: null,
    spellPool: [
      // Red Spells
      { id: "heat_ray", name: "Heat Ray", tier: 1, color: "Red", description: "3 dmg on Success. Can't use red spells next turn." },
      { id: "scorching_bomb", name: "Scorching Bomb", tier: 1, color: "Red", aoe: true, description: "AOE 2 dmg on Success. Can upcast to Tier II: 3 dmg, can't use red next turn." },
      { id: "lighten_target", name: "Lighten Target", tier: 1, color: "Red", concentration: true, description: "Nullify fall dmg, double throw distance, half weight of object." },
      { id: "sense_up", name: "Sense Up", tier: 1, color: "Green", concentration: true, description: "Amplify all senses of a target (or nullify with consent). At Tier II can nullify unwilling." },
      { id: "healing_physic", name: "Healing", tier: 1, color: "Green", description: "Can heal Minor Injuries." },
      { id: "send_thoughts", name: "Send Thoughts", tier: 1, color: "Gray", description: "Send thoughts to others; they can send a little back." },
      { id: "xeon_sensing", name: "Xeon Sensing", tier: 1, color: "Gray", concentration: true, description: "See or reveal xenic spirits and other xeon sources including tech and magic items." },
      { id: "cold_ray", name: "Cold Ray", tier: 1, color: "Blue", description: "2 dmg + Frozen debuff (+1d MD on next Action against them)." },
      { id: "freezing_bomb", name: "Freezing Bomb", tier: 1, color: "Blue", aoe: true, description: "AOE 2 dmg. Upcast: 2 dmg + Frozen (+1d MD)." },
      { id: "grippy_target", name: "Grippy Target", tier: 1, color: "Blue", concentration: true, description: "On ally: climb proficiently. On small object: stick to surfaces." },
      { id: "scorch_ray", name: "Scorch Ray", tier: 2, color: "Red", description: "4 dmg on Success. Can't use red spells next turn." },
      { id: "percussive_bomb", name: "Percussive Bomb", tier: 2, color: "Red", aoe: true, description: "2 dmg in 15 ft radius. Enemies pushed to edge of radius." },
      { id: "high_jump", name: "High Jump", tier: 2, color: "Red", concentration: true, description: "Jump up to 30 ft. Lasts 1 hr." },
      { id: "slippery_target", name: "Slippery Target", tier: 2, color: "Red", concentration: true, description: "Target can't move well; +1d MD on Actions against them while active." },
      { id: "lighten_group", name: "Lighten Group", tier: 2, color: "Red", concentration: true, aoe: true, description: "Nullify fall dmg, double throw distance, half weight of group." },
      { id: "freeze_ray", name: "Freeze Ray", tier: 2, color: "Blue", description: "2 dmg + Advanced Frozen (+2d MD on next Action against them)." },
      { id: "force_field", name: "Force Field", tier: 2, color: "Blue", concentration: true, aoe: true, description: "Ignore Minor Injuries from xenic attacks (breaks on Severe)." },
      { id: "leaden_foe", name: "Leaden Foe", tier: 2, color: "Blue", concentration: true, description: "Triple fall dmg, lock target in place, 2 dmg/turn on Success." },
      { id: "electromag_seeing", name: "Electromagnetic Seeing", tier: 2, color: "Green", concentration: true, description: "See full electromagnetic spectrum (heat signatures, X-rays, radio waves)." },
      { id: "atmosphere_physic", name: "Atmosphere", tier: 2, color: "Green", concentration: true, aoe: true, description: "Create breathable atmosphere in range." },
      { id: "create_darkness", name: "Create Darkness", tier: 2, color: "Gray", concentration: true, aoe: true, description: "No one can see in range unless they have heat vision or xeon sensing." },
      { id: "binding", name: "Binding", tier: 2, color: "Gray", concentration: true, description: "Xenic tethers: up to 400 lbs, 5 tethers, 5 min. Manipulate length/direction." },
      { id: "onyx_shielding_physic", name: "Onyx Shielding", tier: 2, color: "Gray", concentration: true, aoe: true, description: "Defense vs onyx/obsidian/physical. Flat surface only. Ignore Minor from physical." },
      { id: "flash_heat_trigger", name: "Flash Heat Trigger", tier: 3, color: "Red", concentration: true, aoe: true, description: "Heat blast in triggering rune. Spec conditions or manual (r×2). Lasts 1 day. 3 dmg, can't use red next turn." },
      { id: "heat_wall", name: "Heat Wall", tier: 3, color: "Red", concentration: true, aoe: true, description: "40 ft wall (can bend). Heat damage 10 ft radius on one side (3 dmg, can't use red next turn)." },
      { id: "force_wave_physic", name: "Force Wave", tier: 3, color: "Red", aoe: true, description: "Move everything in a 30 ft cube in one direction." },
      { id: "slippery_group", name: "Slippery Group", tier: 3, color: "Red", concentration: true, aoe: true, description: "Enemies stuck/slippery; +1d MD on Actions against them." },
      { id: "flash_cold_trigger", name: "Flash Cold Trigger", tier: 3, color: "Blue", concentration: true, aoe: true, description: "Cold blast in triggering rune. 2 dmg + Advanced Frozen (+2d MD on next two Actions against them). Lasts 1 day." },
      { id: "cold_wall", name: "Cold Wall", tier: 3, color: "Blue", concentration: true, aoe: true, description: "40 ft wall (can bend). Frozen debuff (+1d MD) and 2 dmg on one side." },
      { id: "grippy_group", name: "Grippy Group", tier: 3, color: "Blue", concentration: true, aoe: true, description: "Enemies stuck to ground, can't move; +1d MD on Actions against them." },
      { id: "life_force", name: "Life Force", tier: 3, color: "Green", concentration: true, aoe: true, description: "Allies: +1d MD continuously. Stamina each round." },
      { id: "shade", name: "Shade", tier: 3, color: "Gray", concentration: true, description: "Make someone a stealthy shade (invisible, move silently)." },
      { id: "triggered_spell", name: "Triggered Spell", tier: 3, color: "Clear", description: "Attach any existing spell to a triggering rune. Lasts 1 day. Costs ≥2 Stamina." },
      { id: "ranged_spell", name: "Ranged Spell", tier: 3, color: "Clear", description: "Cast any existing spell at r×4 range. Costs ≥2 Stamina." },
      { id: "amplified_spell", name: "Amplified Spell", tier: 3, color: "Clear", description: "Cast any existing spell with +2 extra damage. Costs ≥2 Stamina." },
      { id: "empowered_spell", name: "Empowered Spell", tier: 3, color: "Clear", description: "Cast any existing spell with +2d MD. Costs ≥2 Stamina." }
    ],
    levels: {
      1: {
        auto: ["Max Spell Tier I. Max Concentration 1, 10 min. Range 20 ft."],
        choices: [
          { type: "pick_one", id: "casting_style", label: "Pick a spellcasting style", options: ["Chroma Generalist: +1d MD if prev spell was opposite color (Red↔Blue, Green↔Gray)", "Chroma Specialist: +1d MD if prev spell same color (also removes Red Heat cooldown)", "AOE Caster: +1d MD if spell is AOE", "Single-Target Caster: +1d MD if spell has one target"] },
          { type: "pick_spells", count: 9, maxTier: 1, label: "Pick 9 Tier I spells" }
        ]
      },
      2: {
        auto: ["Max Spell Tier II. Max Concentration 2, 30 min. Range 30 ft."],
        choices: [{ type: "pick_spells", count: 6, maxTier: 2, label: "Pick 6 more spells (15 total, Tier I–II)" }]
      },
      3: {
        auto: ["Max Spell Tier III. Max Concentration 3, 1 hr. Range 50 ft."],
        choices: [{ type: "pick_spells", count: 6, maxTier: 3, label: "Pick 6 more spells (21 total, Tier I–III)" }]
      },
      4: {
        auto: ["Know all spells. Max Concentration 5, 3 hr."],
        choices: []
      }
    },
    resources: []
  },

  "Possessor": {
    stat: "Any",
    archetype: "Magicians",
    chromaRequired: null,
    spellPool: [
      // Red
      { id: "heat_ray_pos", name: "Heat Ray", tier: 1, color: "Red", description: "3 dmg on Success. Can't use red spells next turn." },
      { id: "scorching_bomb_pos", name: "Scorching Bomb", tier: 1, color: "Red", aoe: true, description: "AOE 2 dmg on Success." },
      { id: "flash_heat_trigger_pos", name: "Flash Heat Trigger", tier: 2, color: "Red", description: "Heat blast in triggering rune. Spec conditions or manual. 3 dmg." },
      { id: "heat_wall_pos", name: "Heat Wall", tier: 2, color: "Red", description: "40 ft wall, heat damage one side." },
      { id: "percussive_bomb_pos", name: "Percussive Bomb", tier: 2, color: "Red", aoe: true, description: "2 dmg, push enemies to edge of radius." },
      // Blue
      { id: "cold_ray_pos", name: "Cold Ray", tier: 1, color: "Blue", description: "2 dmg + Frozen (+1d MD on next Action against them)." },
      { id: "freezing_bomb_pos", name: "Freezing Bomb", tier: 1, color: "Blue", aoe: true, description: "AOE 2 dmg." },
      { id: "flash_cold_trigger_pos", name: "Flash Cold Trigger", tier: 2, color: "Blue", description: "Cold blast in triggering rune. 2 dmg + Advanced Frozen." },
      { id: "cold_wall_pos", name: "Cold Wall", tier: 2, color: "Blue", description: "40 ft wall, cold damage and Frozen on one side." },
      // Gray
      { id: "create_darkness_pos", name: "Create Darkness", tier: 1, color: "Gray", aoe: true, description: "No one can see in range unless heat vision or xeon sensing." },
      { id: "shade_pos", name: "Shade", tier: 1, color: "Gray", description: "Make someone a stealthy shade." },
      { id: "xeon_sensing_pos", name: "Xeon Sensing", tier: 1, color: "Gray", concentration: true, description: "Reveal xenic spirits and xeon sources." },
      // Dark
      { id: "wither_flesh", name: "Wither Flesh", tier: 1, color: "Dark", description: "Wither a target's flesh, weakening them." },
      { id: "corporealize_spirit", name: "Corporealize Spirit", tier: 1, color: "Dark", description: "Make a spirit partially physical." },
      { id: "take_spirit_appearance", name: "Take Spirit Appearance", tier: 1, color: "Dark", description: "Take on the appearance of a spirit." },
      { id: "haunting_figures", name: "Haunting Figures", tier: 2, color: "Dark", description: "Create ghostly haunting figures to terrify and confuse enemies." },
      { id: "necrotic_beam", name: "Necrotic Beam", tier: 2, color: "Dark", description: "Beam of necrotic energy that drains life." },
      { id: "raise_hoard", name: "Raise Hoard", tier: 2, color: "Dark", description: "Raise a small horde of undead spirits." },
      { id: "physical_thrall", name: "Physical Thrall", tier: 2, color: "Dark", description: "Bind a target as a physical thrall." },
      { id: "raise_dead_i", name: "Raise Dead I", tier: 1, color: "Dark", description: "Raise a basic undead construct. 3x/day." },
      { id: "raise_dead_ii", name: "Raise Dead II / Create Construct I", tier: 2, color: "Dark", description: "Raise stronger undead or create a basic construct. 3x/day." },
      { id: "raise_dead_iii", name: "Raise Dead III / Create Construct II (Elite)", tier: 3, color: "Dark", description: "Raise elite undead or create advanced construct. 2x/day." }
    ],
    levels: {
      1: {
        auto: ["Max Spell Tier I. Max Concentration 1, 10 min. Range 20 ft."],
        choices: [{ type: "pick_spells", count: 7, maxTier: 1, label: "Pick 7 Tier I spells" }]
      },
      2: {
        auto: ["Max Spell Tier II. Max Concentration 3, 30 min. Range 30 ft."],
        choices: [{ type: "pick_spells", count: 4, maxTier: 2, label: "Pick 4 more spells (11 total, Tier I–II)" }]
      },
      3: {
        auto: ["Max Spell Tier III. Max Concentration 4, 1 hr. Range 50 ft."],
        choices: [{ type: "pick_spells", count: 4, maxTier: 3, label: "Pick 4 more spells (15 total, Tier I–III)" }]
      },
      4: {
        auto: ["Know all spells. Max Concentration 5, 3 hr."],
        choices: []
      }
    },
    resources: [
      { id: "raise_dead_i_uses", label: "Raise Dead I", maxPerDay: 3 },
      { id: "raise_dead_ii_uses", label: "Raise Dead II / Construct I", maxPerDay: 3 },
      { id: "raise_dead_iii_uses", label: "Raise Dead III / Construct II (Elite)", maxPerDay: 2 }
    ]
  },

  "Enchanter": {
    stat: "Vigor or Intuition",
    archetype: "Magicians",
    chromaRequired: null,
    spellPool: [
      // Tier I
      { id: "prestidigitation", name: "Prestidigitation", tier: 1, substance: "Predigitase (orange, red, green, yellow gem)", description: "Create a small magical effect: gust of wind, small illusion (2 ft square), ground rumble, open/close doors, light or put out fires, harmless sparkles, clean or soil a small area. Cannot do damage unless very creative. Range: 30 ft." },
      { id: "mending", name: "Mending", tier: 1, substance: "Dioptase (dark green gem)", description: "Mend a non-magical, non-xenic object (2 ft square max). Can mend larger objects with multiple uses. Range: 15 ft." },
      { id: "charm_enc", name: "Charm", tier: 1, substance: "Rose Quartz (light pink with white streaks)", concentration: true, description: "[Concentration] +2d MD bonus to interpersonal Actions for up to 10 min. Range: 15 ft." },
      { id: "little_heal_enc", name: "Little Heal", tier: 1, substance: "Amber (golden orange gem)", description: "Heal up to 3 HP's worth of Injuries distributed among any amount of targets. Range: 30 ft." },
      { id: "electric_zap", name: "Electric Zap", tier: 1, substance: "Barite (light blue or yellow gem)", description: "Zap a target, deals 3 dmg on Success. Range: 30 ft." },
      { id: "comprehend_languages", name: "Comprehend and Speak Languages", tier: 1, substance: "Tincalconite (white solid gem or powder)", concentration: true, description: "[Concentration] For the next 10 min you can comprehend and speak any language (certain ancient or secret languages have protections against this)." },
      { id: "clone_image", name: "Clone Image", tier: 1, substance: "Gypsum (soft clear gem)", concentration: true, description: "[Concentration] Create an illusory version of yourself you can command to do whatever you like. It can interact with the world physically but can't deal damage or use your xenic abilities. Range: 50 ft." },
      { id: "breath_of_chaos", name: "Breath of Chaos", tier: 1, substance: "Kairidium (rainbow in light, black in darkness)", description: "Roll a d8, cast that Tier I Enchanter spell for free (1/turn). You must cast that spell even if disruptive. Roll 8 = pick any Tier I spell for free; every consecutive 8 you roll also lets you pick a free spell." },
      // Tier II
      { id: "petrify", name: "Petrify", tier: 2, substance: "Cerussite (clear white crystal shards)", concentration: true, description: "[Concentration] Partially petrify a target: +1d MD on all Actions against them for up to 1 min. Three successes against the same target = full petrification for 1 hour. Range: 30 ft." },
      { id: "poison_enc", name: "Poison", tier: 2, substance: "Peridot (light green gem)", description: "Inflict poison upon a target: next two Actions against this target get +2d MD. Range: 30 ft." },
      { id: "scrying", name: "Scrying", tier: 2, substance: "Purpurite (deep purple rare gem)", concentration: true, description: "[Concentration] See remotely from up to 100 ft away (eyes must be closed). Can also be used to see into the xenic plane. Range: 100 ft." },
      { id: "illusion_enc", name: "Illusion", tier: 2, substance: "Garnet (any color)", concentration: true, description: "[Concentration] Create an illusion up to 50 ft square. Range: 100 ft." },
      { id: "ghostwalk", name: "Ghostwalk", tier: 2, substance: "Amazonite (light blue gem)", concentration: true, description: "[Concentration] Become ethereal: you're immaterial, can move through cracks and through substances up to 5 ft thick. Can't attack, take damage, cast spells, or use abilities in this form. Lasts up to 10 min." },
      { id: "solid_illusion", name: "Solid Illusion", tier: 2, substance: "Onidium (white, brown, black gem)", concentration: true, description: "[Concentration] Create an object out of xeon up to 30 ft square (max 1000 lbs). Must start stationary on the ground. Range: 50 ft." },
      { id: "pocket_dimension", name: "Pocket Dimension", tier: 2, substance: "Pomjite (purple and gray gem)", description: "Create a small rift in the xenic plane: 3×3×3 ft cube, holds unlimited weight, entrance up to 3×3 ft. You can change dimensions (max 27 cubic ft). Location can't change while open. You can open it from within; no one else can. Range: 30 ft." },
      { id: "touch_of_chaos", name: "Touch of Chaos", tier: 2, substance: "Kairidium (rainbow in light, black in darkness)", description: "Roll a d8, cast that Tier II Enchanter spell for free (1/turn). You must cast that spell even if disruptive. Roll 8 = pick any Tier II spell for free." },
      // Tier III
      { id: "xenic_portal", name: "Xenic Plane Portal", tier: 3, substance: "Malachite (bright green and dark green gem)", description: "Create a portal into or out of the xenic plane. Range: 15 ft." },
      { id: "swap_places", name: "Swap Places", tier: 3, substance: "Black Rutile (clear gem with black streaks)", description: "Swap places with a person or creature, or swap two creatures. Willing targets: no Action needed (still costs Stamina), range up to 10 miles if you know both targets. Unwilling targets: must see them and do an Action Roll (100 ft range)." },
      { id: "stasis_lock", name: "Stasis Lock", tier: 3, substance: "Wolframite (blue metal)", concentration: true, description: "[Concentration] Lock a person or thing to a fixed point in space for up to 10 minutes. Range: 50 ft." },
      { id: "animate_object", name: "Animate Object", tier: 3, substance: "Topaz (clear crystal, many colors)", concentration: true, description: "[Concentration] Animate an object up to 10×10×10 ft. Follows your orders; large objects can deal up to 4 dmg on Success. Range: 15 ft." },
      { id: "tiny_pocket_hut", name: "Tiny Pocket Hut", tier: 3, substance: "Pomjite (purple and gray gem)", description: "Create a large rift in the xenic plane: 20×20×20 ft Pocket Dimension with the same rules as Pocket Dimension. Range: 30 ft." },
      { id: "enbiggen", name: "Enbiggen", tier: 3, substance: "Fluorite (green and purple gem)", concentration: true, description: "[Concentration] Double the size of an ally or yourself: weight ×8, End and Vig get +2d MD, deal +3 extra damage. Lasts up to 1 minute. Range: 15 ft." },
      { id: "ensmallen", name: "Ensmallen", tier: 3, substance: "Fluorite (green and purple gem)", concentration: true, description: "[Concentration] Half the size of an ally or yourself: weight ÷8, Int gets +2d MD, speed +50 ft. Lasts up to 1 minute. Range: 15 ft." },
      { id: "call_of_chaos", name: "Call of Chaos", tier: 3, substance: "Kairidium (rainbow in light, black in darkness)", description: "Roll a d8, cast that Tier III Enchanter spell for free (1/turn). You must cast that spell even if disruptive. Roll 8 = pick any Tier III spell for free." }
    ],
    levels: {
      1: {
        auto: ["All Tier I spells available (see spell list below).", "Pocket Space: Carry up to 3 handheld items in a pocket dimension (rip a small hole in space anywhere; the hole can't move without closing/reopening it).", "Max Concentration 1, 10 min. Range 30 ft."],
        choices: []
      },
      2: {
        auto: ["All Tier I and II spells available.", "Chaos: Roll on the Chaos Table for 0 stamina (3×/day) — roll d10, apply the Minor Chaos Table result. You must enact the effect.", "Max Concentration 2, 30 min."],
        choices: []
      },
      3: {
        auto: ["All Tier I, II, and III spells available.", "Controlled Chaos: Roll on both Minor and Major Chaos Tables (d20) and pick the result you want — 3×/day, 0 stamina. Replaces the level 2 Chaos ability.", "Max Concentration 3, 1 hr."],
        choices: []
      }
    },
    resources: [
      { id: "chaos_uses", label: "Chaos / Controlled Chaos", maxPerDay: 3, minLevel: 2 }
    ]
  },

  // ─── SPIRITUALISTS ───────────────────────────────────────────────────────────

  "Elementalist": {
    stat: "Vigor or Endurance",
    archetype: "Spiritualists",
    chromaRequired: null,
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
        auto: ["All Tier I elemental techniques available (element must be present in range). See techniques listed below. Range 30 ft."],
        choices: [{ type: "pick_one", id: "specialty", label: "Pick your elemental specialty", options: ["Red: +1 dmg on all elemental technique attacks", "Blue: +1d MD on Actions against moving targets", "Green: may exempt any target or area from your AOE techniques", "Gray: all techniques get 2× range"] }]
      },
      2: {
        auto: ["All Tier II elemental techniques available. Range 50 ft."],
        choices: []
      },
      3: {
        auto: ["All Tier III elemental techniques available. Range 75 ft."],
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
      { id: "mortal_spirit", name: "Mortal Spirit", focus: "Buffs and Debuffs", description: "Spirit of a deceased mortal. Specializes in helping allies and hurting foes." },
      { id: "animal_spirit", name: "Animal Spirit", focus: "Utility", description: "Spirit of a deceased animal or green xenic sprite. Specializes in buffing abilities and utility." },
      { id: "light_spirit", name: "Light Spirit", focus: "Buffs and Healing", description: "A light spirit or good mortal spirit. Specializes in healing, buffs, and blessings." },
      { id: "dark_spirit", name: "Dark Spirit", focus: "Debuffs and Curses", description: "A devil, demon, or evil mortal spirit. Specializes in debuffs, curses, and damage over time." },
      { id: "xenic_sprite", name: "Xenic Sprite", focus: "Utility", description: "Spirit made of pure xeon. Specializes in illusion, trickery, and mischief." }
    ],
    levels: {
      1: {
        auto: ["Spirit Range 40 ft. You see the xenic plane equal to Mystic Level times per day (10 min each).", "Character Level ÷ 3 (min 1) bonus MD on spirit checks (no stamina)."],
        choices: [{ type: "pick_spirits", count: 3, label: "Pick 3 spirits (start at Tier I)" }]
      },
      2: {
        auto: ["Spirit Range 60 ft."],
        choices: [{ type: "upgrade_spirits", count: 2, label: "Upgrade 2 spirits to Tier II" }]
      },
      3: {
        auto: ["Spirit Range 80 ft."],
        choices: [{ type: "upgrade_spirits", count: 2, label: "Upgrade 2 spirits to Tier III" }]
      },
      4: {
        auto: ["Spirit Range 90 ft."],
        choices: [
          { type: "pick_spirits", count: 1, startTier: 2, label: "Gain 1 new spirit at Tier II" },
          { type: "upgrade_spirits", count: 1, label: "Upgrade 1 spirit to Tier II" }
        ]
      },
      5: {
        auto: ["Spirit Range 90 ft."],
        choices: [
          { type: "pick_spirits", count: 1, startTier: 2, label: "Gain 1 new spirit at Tier II" },
          { type: "upgrade_spirits", count: 1, toTier: 3, label: "Upgrade 1 spirit to Tier III" }
        ]
      },
      6: {
        auto: ["Spirit Range 90 ft."],
        choices: [{ type: "upgrade_spirits", count: 2, toTier: 3, label: "Upgrade 2 spirits to Tier III" }]
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
    chromaRequired: null,
    effectPool: [
      { id: "cold_fist", name: "Cold Fist", description: "Inflict Frozen debuff (2 dmg on Success, +1d/+2d/+3d MD on next Action against them)." },
      { id: "heat_fist", name: "Heat Fist", description: "+1/+2/+3 dmg but must cool down next turn." },
      { id: "inertial_dampening", name: "Inertial Dampening", description: "Attempt to stop enemy attack or movement (reaction Action Roll). Range 15/30/50 ft." },
      { id: "tethering_whip", name: "Tethering Whip", description: "Xeon binding whip from gauntlet. Attaches 25/50/100 ft away; pull yourself to target or target to you." },
      { id: "propulsion", name: "Propulsion", description: "Boost speed 2×/3×/5× with boots. Push targets 15/30/50 ft with gauntlets." },
      { id: "onyx_shield", name: "Onyx Shield", description: "Black xeon armor plates. Ignore Minor/Severe/1 Critical from physical sources (lasts 10 min, then breaks)." },
      { id: "blue_shield", name: "Blue Shield", description: "Bubble of blue xeon. Ignore Minor/Severe/1 Critical from xenic sources (lasts 10 min, then breaks)." },
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
          { type: "pick_effects", knownCount: 6, installedCount: 4, label: "Know 6 effects; install 4 into your suit" }
        ]
      },
      2: {
        auto: [],
        choices: [
          { type: "pick_effects", knownCount: 8, installedCount: 6, label: "Know 8 effects (pick 2 more); install 6" }
        ]
      },
      3: {
        auto: ["Know all 12 effects."],
        choices: [
          { type: "pick_effects", knownCount: 12, installedCount: 8, label: "Install 8 effects from all 12 known" }
        ]
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
    chromaRequired: null,
    droneEffectPool: [
      { id: "beam", name: "Beam", tier: 1, description: "Basic attack beam, deals damage at range." },
      { id: "shielding", name: "Shielding", tier: 1, description: "Provides a defensive shield bubble to an ally." },
      { id: "hacking", name: "Hacking", tier: 1, description: "Hack into nearby electronic systems." },
      { id: "recon", name: "Recon", tier: 1, description: "Scouting and surveillance: relay visuals back to you." },
      { id: "healing_drone", name: "Healing", tier: 1, description: "Heals an ally (5×/day per drone)." },
      { id: "advanced_beam", name: "Advanced Beam", tier: 2, description: "Stronger attack beam with additional effects." },
      { id: "animal_mech", name: "Animal Mech", tier: 2, description: "Drone takes on animal-like form for traversal or combat." },
      { id: "atmosphere_drone", name: "Atmosphere", tier: 2, description: "Drone generates a breathable atmosphere bubble." },
      { id: "onyx_drone", name: "Onyx", tier: 2, description: "Drone projects onyx shielding." },
      { id: "advanced_recon", name: "Advanced Recon", tier: 2, description: "More detailed reconnaissance with xenic detection." },
      { id: "projector", name: "Projector", tier: 2, description: "Projects illusions or displays information." },
      { id: "xeon_binding_drone", name: "Xeon Binding", tier: 3, description: "Drone creates xenic tethers." },
      { id: "inertial_dampening_drone", name: "Inertial Dampening", tier: 3, description: "Drone dampens inertial forces around a target." },
      { id: "weight_control_drone", name: "Weight Control", tier: 3, description: "Drone controls weight of targets in range." },
      { id: "advanced_healing", name: "Advanced Healing", tier: 3, description: "Stronger healing (5×/day per drone)." },
      { id: "diamond", name: "Diamond", tier: 3, description: "Extreme defense — diamond-hard shielding." },
      { id: "force_wave_drone", name: "Force Wave", tier: 3, description: "Drone emits a force wave pushing enemies back." },
      { id: "advanced_hacking", name: "Advanced Hacking", tier: 3, description: "Hack complex systems (1×/day per target per drone)." }
    ],
    levels: {
      1: {
        auto: ["2 active drones. Max Tier I effects only. 1 effect per drone. Range 20 ft, height 10 ft. Each drone has 3 HP.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: [{ type: "configure_drones", maxDrones: 2, maxEffectsPerDrone: 1, maxEffectTier: 1, label: "Configure your 2 drones (1 Tier I effect each)" }]
      },
      2: {
        auto: ["3 active drones. Tier I and II effects. 2 effects per drone. Range 30 ft, height 20 ft. Each drone has 4 HP."],
        choices: [{ type: "configure_drones", maxDrones: 3, maxEffectsPerDrone: 2, maxEffectTier: 2, label: "Configure your 3 drones (up to 2 effects each, Tier I–II)" }]
      },
      3: {
        auto: ["4 active drones. All tier effects. 2 effects per drone. Unlimited range/height. Each drone has 5 HP."],
        choices: [{ type: "configure_drones", maxDrones: 4, maxEffectsPerDrone: 2, maxEffectTier: 3, label: "Configure your 4 drones (up to 2 effects each, all tiers)" }]
      }
    },
    resources: [
      { id: "healing_drone_1", label: "Drone Healing #1", maxPerDay: 5 },
      { id: "healing_drone_2", label: "Drone Healing #2", maxPerDay: 5 },
      { id: "adv_healing_1", label: "Advanced Healing Drone #1", maxPerDay: 5 },
      { id: "adv_hacking_1", label: "Advanced Hacking #1 (per target)", maxPerDay: 1 }
    ]
  },

  "Emitter Specialist": {
    stat: "Wit or Intuition",
    archetype: "Technologists",
    chromaRequired: null,
    levels: {
      1: {
        auto: ["All Tier I emitters available. 3 active emitters max. Duration 1 min. Radius 10 ft. Gun range 40 ft.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["All Tier I and II emitters available. 5 active emitters max. Duration 2 min. Radius 20 ft. Gun range 60 ft."],
        choices: []
      },
      3: {
        auto: ["All emitters available. 7 active emitters max. Duration 5 min. Radius 50 ft. Gun range 150 ft."],
        choices: []
      }
    },
    resources: []
  },

  "Explosives Expert": {
    stat: "Any",
    archetype: "Technologists",
    chromaRequired: null,
    levels: {
      1: {
        auto: ["All Tier I bombs available. 7 bombs made per day. Store up to 10. AOE 15 ft. Cannon range 40 ft.", "Basic Damage and Basic Heal bombs: unlimited (not counted toward daily limit).", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: []
      },
      2: {
        auto: ["All Tier I and II bombs available. 9 bombs per day. Store up to 15. AOE 25 ft. Cannon range 70 ft."],
        choices: []
      },
      3: {
        auto: ["All bombs available. 15 bombs per day. Store up to 20. AOE 50 ft. Cannon range 150 ft."],
        choices: []
      }
    },
    resources: [
      { id: "bombs_made_today", label: "Bombs made today", maxPerDay: 7 }
    ]
  },

  "Gunslinger": {
    stat: "Wit or Intuition",
    archetype: "Technologists",
    chromaRequired: null,
    gunPool: [
      { id: "healing_gun", name: "Healing Gun", tier: 1, description: "Fires healing bolts at allies (5×/day)." },
      { id: "freeze_gun", name: "Freeze Gun", tier: 1, description: "Inflicts Frozen debuff on hit." },
      { id: "heat_gun", name: "Heat Gun", tier: 1, description: "Fire damage, may ignite targets." },
      { id: "damage_gun", name: "Damage Gun", tier: 1, description: "Standard combat damage." },
      { id: "binding_gun", name: "Binding Gun", tier: 1, description: "Fires xenic tethers to bind targets." },
      { id: "advanced_healing_gun", name: "Advanced Healing Gun", tier: 2, description: "Stronger healing bolts (5×/day)." },
      { id: "advanced_damage_gun", name: "Advanced Damage Gun", tier: 2, description: "High-power damage." },
      { id: "scatter_gun", name: "Scatter Gun", tier: 2, description: "AOE burst in a cone." },
      { id: "onyx_gun", name: "Onyx Gun", tier: 2, description: "Fires obsidian/onyx bolts that bypass xenic defenses." },
      { id: "uranium_gun", name: "Uranium Gun", tier: 3, description: "Devastating damage; 3×/day (4th use destroys the gun)." },
      { id: "gravity_gun", name: "Gravity Gun", tier: 3, description: "Manipulate gravity and mass of targets." },
      { id: "xenic_gun", name: "Xenic Gun", tier: 3, description: "Fire raw xenic energy for varied effects." }
    ],
    levels: {
      1: {
        auto: ["All Tier I guns and effects available. 1 effect slot per gun. Max 2 Large guns on person.", "Character Level ÷ 3 (min 1) bonus MD on non-combat tech checks (no stamina)."],
        choices: [{ type: "configure_guns", maxEffectsPerGun: 1, maxEffectTier: 1, label: "Configure your guns (1 Tier I effect each)" }]
      },
      2: {
        auto: ["All Tier II guns and effects available. 2 effect slots per gun."],
        choices: [{ type: "configure_guns", maxEffectsPerGun: 2, maxEffectTier: 2, label: "Configure guns (up to 2 effects each, Tier I–II)" }]
      },
      3: {
        auto: ["All guns and effects available. 3 effect slots per gun. Max 3 Large guns on person."],
        choices: [{ type: "configure_guns", maxEffectsPerGun: 3, maxEffectTier: 3, label: "Configure guns (up to 3 effects each, all tiers)" }]
      }
    },
    resources: [
      { id: "healing_gun_uses", label: "Healing Gun shots", maxPerDay: 5 },
      { id: "adv_healing_gun_uses", label: "Advanced Healing Gun shots", maxPerDay: 5 },
      { id: "uranium_gun_uses", label: "Uranium Gun shots (destroys on 4th use)", maxPerDay: 3 }
    ]
  },

  "Swordmaster": {
    stat: "Any",
    archetype: "Technologists",
    chromaRequired: null,
    swordPowers: [
      { id: "cold_heat", name: "Cold / Heat", tier: 1, description: "Cold: 2 dmg + Frozen (+1d MD on next Action). Heat: +1 dmg but cools down next turn." },
      { id: "weight_control_sword", name: "Weight Control", tier: 1, description: "Control your weight and sword weight (1/4× to 2×)." },
      { id: "force", name: "Force", tier: 2, description: "Force target in any direction up to 15 ft." },
      { id: "obsidian", name: "Obsidian", tier: 2, description: "+1 dmg vs targets with only physical or xenic defenses (completely blocked by onyx)." },
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
      { id: "second_wind_uses", label: "Second Wind", maxPerDay: 3 }
    ]
  }

};
