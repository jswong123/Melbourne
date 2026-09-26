// data/campaigns.js
// ============================================================
// 《战线 1937-1945》
// 多战场 / 阶段 / 战役目录
// ============================================================

export const CAMPAIGNS = [

    // ========================================================
    // 苏德战场
    // ========================================================
    {
        id: "eastern_front",
        name: "苏德战场",
        subtitle: "Eastern Front",

        phases: [

            // ------------------------------------------------
            // 1941 巴巴罗萨
            // ------------------------------------------------
            {
                id: "barbarossa_1941",
                name: "1941：巴巴罗萨",

                scenarios: [

                    {
                        id: "dubno",
                        name: "杜布诺战役",
                        subtitle: "Battle of Dubno",

                        dateText: "1941年6月26日",
                        location: "乌克兰西部",

                        status: "available",

                        scenarioPath: "./data/scenario.json",
                        unitsPath: "./data/units.json",

                        factions: ["GER", "USSR"],

                        roles: {
                            attacker: "german",
                            defender: "soviet"
                        },

                        start: {
                            year: 1941,
                            month: 6,
                            day: 26,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 2,
                            startingPhase: "german"
                        }
                    },

                    {
                        id: "smolensk",
                        name: "斯摩棱斯克战役",
                        subtitle: "Battle of Smolensk",

                        dateText: "1941年7月10日",
                        location: "斯摩棱斯克",

                        status: "available",

                        scenarioPath: "./data/scenario-smolensk.json",
                        unitsPath: "./data/units-smolensk.json",

                        factions: ["GER", "USSR"],

                        roles: {
                            attacker: "german",
                            defender: "soviet"
                        },

                        start: {
                            year: 1941,
                            month: 7,
                            day: 10,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 2,
                            startingPhase: "german"
                        }
                    }
                ]
            },

            {
                id: "blue_1942",
                name: "1942：蓝色方案",
                scenarios: []
            },

            {
                id: "counteroffensive_1943",
                name: "1943：战略反攻",
                scenarios: []
            },

            // ------------------------------------------------
            // 1944-45 攻入德国
            // ------------------------------------------------
            {
                id: "germany_1944_45",
                name: "1944–45：攻入德国",

                scenarios: [

                    {
                        id: "berlin",
                        name: "柏林战役",
                        subtitle: "Battle of Berlin",

                        dateText: "1945年4月—5月",
                        location: "德国·柏林",

                        status: "available",

                        scenarioPath: "./data/scenario-berlin.json",
                        unitsPath: "./data/units-berlin.json",

                        factions: ["USSR", "GER"],

                        roles: {
                            attacker: "soviet",
                            defender: "german"
                        },

                        start: {
                            year: 1945,
                            month: 4,
                            day: 16,
                            hour: 5,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "soviet"
                        }
                    }
                ]
            }
        ]
    },


    // ========================================================
    // 中国战场
    // ========================================================
    {
        id: "china_front",
        name: "中国战场",
        subtitle: "China Front",

        phases: [

            // ------------------------------------------------
            // 1937
            // ------------------------------------------------
            {
                id: "china_1937",
                name: "1937：全面战争爆发",

                scenarios: [

                    {
                        id: "shanghai",
                        name: "淞沪会战",
                        subtitle: "Battle of Shanghai",

                        dateText: "1937年8月—11月",
                        location: "上海",

                        status: "available",

                        scenarioPath: "./data/scenario-shanghai.json",
                        unitsPath: "./data/units-shanghai.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1937,
                            month: 8,
                            day: 13,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    },

                    {
                        id: "sihang",
                        name: "四行仓库保卫战",
                        subtitle: "Defense of Sihang Warehouse",

                        dateText: "1937年10月26日—11月1日",
                        location: "上海·闸北·四行仓库",

                        status: "available",

                        scenarioPath: "./data/scenario-sihang.json",
                        unitsPath: "./data/units-sihang.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1937,
                            month: 10,
                            day: 26,
                            hour: 20,
                            minute: 0,
                            hoursPerTurn: 4,
                            startingPhase: "japanese"
                        }
                    },

                    {
                        id: "nanjing",
                        name: "南京保卫战",
                        subtitle: "Battle of Nanjing",

                        dateText: "1937年12月",
                        location: "南京",

                        status: "available",

                        scenarioPath: "./data/scenario-nanjing.json",
                        unitsPath: "./data/units-nanjing.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1937,
                            month: 12,
                            day: 1,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    }
                ]
            },


            // ------------------------------------------------
            // 1938 徐州—武汉阶段
            // ------------------------------------------------
            {
                id: "china_1938",
                name: "1938：徐州—武汉阶段",

                scenarios: [

                    {
                        id: "taierzhuang",
                        name: "台儿庄战役",
                        subtitle: "Battle of Taierzhuang",

                        dateText: "1938年3月—4月",
                        location: "山东·台儿庄",

                        status: "available",

                        scenarioPath: "./data/scenario-taierzhuang.json",
                        unitsPath: "./data/units-taierzhuang.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1938,
                            month: 3,
                            day: 24,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 2,
                            startingPhase: "japanese"
                        }
                    },

                    {
                        id: "xuzhou",
                        name: "徐州会战",
                        status: "locked"
                    },

                    {
                        id: "wanjialing",
                        name: "万家岭战役",
                        subtitle: "Battle of Wanjialing",

                        dateText: "1938年10月",
                        location: "江西·德安·万家岭",

                        status: "available",

                        scenarioPath: "./data/scenario-wanjialing.json",
                        unitsPath: "./data/units-wanjialing.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1938,
                            month: 10,
                            day: 2,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 2,
                            startingPhase: "japanese"
                        }
                    }
                ]
            },


            // ------------------------------------------------
            // 1939-41 战略相持
            // ------------------------------------------------
            {
                id: "china_1939_41",
                name: "1939–41：战略相持",

                scenarios: [

                    {
                        id: "kunlun",
                        name: "昆仑关战役",
                        subtitle: "Battle of Kunlun Pass",

                        dateText: "1939年12月—1940年1月",
                        location: "广西·昆仑关",

                        status: "available",

                        scenarioPath: "./data/scenario-kunlun.json",
                        unitsPath: "./data/units-kunlun.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "chinese",
                            defender: "japanese"
                        },

                        start: {
                            year: 1939,
                            month: 12,
                            day: 18,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "chinese"
                        }
                    },

                    {
                        id: "changsha3",
                        name: "第三次长沙会战",
                        subtitle: "Third Battle of Changsha",

                        dateText: "1941年12月—1942年1月",
                        location: "湖南·长沙",

                        status: "available",

                        scenarioPath: "./data/scenario-changsha3.json",
                        unitsPath: "./data/units-changsha3.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1941,
                            month: 12,
                            day: 24,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    }
                ]
            },


            // ------------------------------------------------
            // 1944 豫湘桂
            // ------------------------------------------------
            {
                id: "china_1944_ichigo",
                name: "1944：豫湘桂会战",

                scenarios: [

                    {
                        id: "hengyang",
                        name: "衡阳保卫战",
                        subtitle: "Battle of Hengyang",

                        dateText: "1944年6月23日—8月8日",
                        location: "湖南·衡阳",

                        status: "available",

                        scenarioPath: "./data/scenario-hengyang.json",
                        unitsPath: "./data/units-hengyang.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1944,
                            month: 6,
                            day: 23,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    },

                    {
                        id: "guilin_liuzhou",
                        name: "桂柳会战",
                        subtitle: "Battle of Guilin–Liuzhou",

                        dateText: "1944年9月—11月",
                        location: "广西·桂林—柳州",

                        status: "available",

                        scenarioPath: "./data/scenario-guilin_liuzhou.json",
                        unitsPath: "./data/units-guilin_liuzhou.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1944,
                            month: 9,
                            day: 14,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    }
                ]
            },


            // ------------------------------------------------
            // 1942-45 战争后期
            // ------------------------------------------------
            {
                id: "china_1942_45",
                name: "1942–45：战争后期",

                scenarios: [

                    {
                        id: "changde",
                        name: "常德会战",
                        subtitle: "Battle of Changde",

                        dateText: "1943年11月—12月",
                        location: "湖南·常德",

                        status: "available",

                        scenarioPath: "./data/scenario-changde.json",
                        unitsPath: "./data/units-changde.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1943,
                            month: 11,
                            day: 2,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    },

                    {
                        id: "west_hunan",
                        name: "湘西会战",
                        subtitle: "Battle of West Hunan",

                        dateText: "1945年4月—6月",
                        location: "湖南西部",

                        status: "available",

                        scenarioPath: "./data/scenario-west_hunan.json",
                        unitsPath: "./data/units-west_hunan.json",

                        factions: ["CHN", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "chinese"
                        },

                        start: {
                            year: 1945,
                            month: 4,
                            day: 9,
                            hour: 8,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    }
                ]
            }
        ]
    },


    // ========================================================
    // 东欧战场
    // ========================================================
    {
        id: "eastern_europe",
        name: "东欧战场",
        subtitle: "Eastern Europe",

        phases: [

            {
                id: "poland_1939",
                name: "1939：波兰战役",
                scenarios: []
            },

            {
                id: "balkans_1941",
                name: "1941：巴尔干战役",
                scenarios: []
            },

            {
                id: "romania_hungary_1944",
                name: "1944：罗马尼亚—匈牙利",
                scenarios: []
            },

            {
                id: "central_europe_1945",
                name: "1945：中欧决战",
                scenarios: []
            }
        ]
    },


    // ========================================================
    // 北非战场
    // ========================================================
    {
        id: "north_africa",
        name: "北非战场",
        subtitle: "North Africa",

        phases: [

            {
                id: "desert_1940_41",
                name: "1940–41：沙漠战争初期",
                scenarios: []
            },

            {
                id: "rommel_1941_42",
                name: "1941–42：隆美尔攻势",
                scenarios: []
            },

            {
                id: "el_alamein_1942",
                name: "1942：阿拉曼阶段",
                scenarios: []
            },

            {
                id: "tunisia_1942_43",
                name: "1942–43：突尼斯战役",
                scenarios: []
            }
        ]
    },


    // ========================================================
    // 架空太平洋战场
    // ========================================================
    {
        id: "alternate_pacific",
        name: "架空太平洋战场",
        subtitle: "Alternate Pacific War",

        phases: [

            {
                id: "australia_1943",
                name: "1943：澳洲最后防线",

                scenarios: [

                    {
                        id: "melbourne_1943",
                        name: "墨尔本保卫战",
                        subtitle: "Defense of Melbourne",

                        dateText: "1943年9月",
                        location: "澳大利亚·墨尔本",

                        status: "available",

                        scenarioPath: "./data/scenario-melbourne.json",
                        unitsPath: "./data/units-melbourne.json",

                        factions: ["ALLIED", "JPN"],

                        roles: {
                            attacker: "japanese",
                            defender: "allied"
                        },

                        start: {
                            year: 1943,
                            month: 9,
                            day: 15,
                            hour: 6,
                            minute: 0,
                            hoursPerTurn: 6,
                            startingPhase: "japanese"
                        }
                    }
                ]
            }
        ]
    }

];


// ============================================================
// 战役查找
// ============================================================

/**
 * 根据 scenario id 查找战役。
 *
 * @param {string} id
 * @returns {{theater: object, phase: object, scenario: object}|null}
 */
export function findScenarioById(id) {

    if (!id) {
        return null;
    }

    for (const theater of CAMPAIGNS) {

        if (!theater || !Array.isArray(theater.phases)) {
            continue;
        }

        for (const phase of theater.phases) {

            if (!phase || !Array.isArray(phase.scenarios)) {
                continue;
            }

            const scenario = phase.scenarios.find(
                item => item && item.id === id
            );

            if (scenario) {
                return {
                    theater,
                    phase,
                    scenario
                };
            }
        }
    }

    return null;
}
