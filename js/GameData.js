'use strict';

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * <https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array>
 * @author Laurens Holst
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var PPGame = {
    reset: function() {
        this.score = 0;
        this.levelId = 0;

        this.questionsCompleted = 0;
        this.questionOrder = shuffleArray([0, 1, 2, 3, 4]);
        this.questionId = this.questionOrder[0];

        this.chosenOptionId = 0;
    }
};
PPGame.reset();

const TextStyle = {
    centered: {
        font: '12pt "Comic Sans MS", "Comic Sans", "Chalkboard", cursive, sans-serif',
        align: 'center'
    },
    centeredLarge: {
        font: '14pt "Comic Sans MS", "Comic Sans", "Chalkboard", cursive, sans-serif',
        align: 'center'
    },
    centeredExtraLarge: {
        font: '16pt "Comic Sans MS", "Comic Sans", "Chalkboard", cursive, sans-serif',
        align: 'center'
    },
    centeredHeader: {
        font: '28pt "Comic Sans MS", "Comic Sans", "Chalkboard", cursive, sans-serif',
        align: 'center'
    },
    lineSpacing: -8
};

const TextData = {
    intro: [
        "HI FRIENDS! I'M\nPROFESSOR DAVIS GREEN.\nWILL YOU HELP ME PREVENT\nSTORMWATER POLLUTION?",
        "STORMWATER\nIS WATER THAT FLOWS\nACROSS THE GROUND\nWHEN IT RAINS.",
        [
            "STORMWATER RUNOFF\nCAN PICK UP POLLUTANTS\nAS IT FLOWS DOWN GUTTERS\nAND INTO STORMDRAIN\nINLETS IN THE STREET.",
            "POLLUTANTS ARE THINGS\nTHAT MAKE WATER DIRTY."
        ],
        [
            "STORMWATER IS NOT\nCLEANED. IT ISN'T TREATED\nBEFORE IT FLOWS TO\nLOCAL CREEKS, WETLANDS\nAND LOCAL WATERWAYS.",
            "POLLUTED, DIRTY WATER\nCAN MAKE FISH AND\nANIMALS SICK."
        ],
        "LET'S SEE HOW THE SIMPLE\nCHOICES YOU MAKE AFFECT\nTHE WATER QUALITY IN\nLOCAL WETLANDS\nAND WATERWAYS."
    ],
    chooseGame: "PLAY BOTH GAMES\nTO LEARN MORE ABOUT\nPREVENTING\nSTORMWATER POLLUTION!"
};

const PPGameData = {
    resultsHeader: [
        "CORRECT!",
        "OOPS!"
    ],
    finalScore: function(x) {
        return "FINAL SCORE\n" + x + " OUT OF 5 OF YOUR CHOICES\nPROTECTED THE WATERWAYS!"
    },
    levels: [
        [
            {
                name: "pp_1_1",
                options: [
                    {
                        name: "pp_1_1a",
                        correct: false,
                        wetlands: {
                            overlay: 1,
                            lilypad: true,
                            aliveFish: false,
                            deadFish: true,
                            soap: true,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "THAT SENT SOAP AND DIRTY WATER\nINTO THE GUTTER, DOWN THE STORMDRAIN\nAND POLLUTED LOCAL WATERWAYS!",
                        resultLowerText: "NEXT TIME, USE A CAR WASH FACILITY-WHERE THE DIRTY\nWATER IS SENT TO THE SEWER TO BE CLEANED.\n\n" +
                                        "IF YOU WASH YOUR CAR AT HOME, USE A SMALL AMOUNT OF\nWATER AND HAVE THE DIRTY WATER FLOW INTO YOUR YARD-JUST\n" +
                                        "MAKE SURE THE DIRTY WATER DOESN'T RUN OFF INTO THE STREET."
                    },
                    {
                        name: "pp_1_1b",
                        correct: true,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "YOU PREVENTED POLLUTION AND KEPT\nTHE LOCAL WATERWAYS CLEAN!",
                        resultLowerText: "A CAR WASH FACILITY IS A GREAT CHOICE BECAUSE THE\nDIRTY WATER IS SENT TO THE SEWER TO BE CLEANED.\n\n" + 
                                        "IF YOU WASH YOUR CAR AT HOME, USE A SMALL AMOUNT OF\nWATER AND HAVE THE DIRTY WATER FLOW INTO YOUR YARD."
                    },
                    {
                        name: "pp_1_1c",
                        correct: true,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "YOU PREVENTED POLLUTION AND KEPT\nTHE LOCAL WATERWAYS CLEAN!",
                        resultLowerText: "IF YOU WASH YOUR CAR AT HOME, USE A SMALL AMOUNT OF\nWATER AND HAVE THE DIRTY WATER FLOW INTO YOUR YARD.\n\n" + 
                                        "A CAR WASH FACILITY IS ANOTHER GREAT CHOICE BECAUSE THE\nDIRTY WATER IS SENT TO THE SEWER TO BE CLEANED."
                    }
                ]
            },
            {
                name: "pp_1_2",
                options: [
                    {
                        name: "pp_1_2a",
                        correct: false,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: false,
                            deadFish: true,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "THAT SENT PET WASTE INTO THE GUTTERS, DOWN THE\nSTORMDRAIN AND POLLUTED LOCAL WATERWAYS!",
                        resultLowerText: "PET WASTE CONTAINS HARMFUL BACTERIA THAT CAN\nKILL FISH AND MAKE OTHER ANIMALS SICK.\n\n" +
                                        "ALWAYS PICK UP PET WASTE AND PLACE IT IN THE TRASH."
                    },
                    {
                        name: "pp_1_2b",
                        correct: true,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "YOU PREVENTED POLLUTION AND KEPT\nTHE LOCAL WATERWAYS CLEAN!",
                        resultLowerText: "PET WASTE CONTAINS HARMFUL BACTERIA THAT CAN\nKILL FISH AND MAKE OTHER ANIMALS SICK.\n\n" +
                                        "ALWAYS PICK UP PET WASTE AND PLACE IT IN THE TRASH."
                    }
                ]
            },
            {
                name: "pp_1_3",
                options: [
                    {
                        name: "pp_1_3a",
                        correct: true,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "YOU PREVENTED POLLUTION AND KEPT\nTHE LOCAL WATERWAYS CLEAN!",
                        resultLowerText: "IF WASTE IS NOT PLACED IN A BIN WITH A CLOSED LID, IT\nCAN BE BLOWN BY WIND OR WASHED AWAY BY RAIN INTO\nSTORMDRAINS, WHERE IT WILL FLOW OUT TO LOCAL WATERWAYS."
                    },
                    {
                        name: "pp_1_3b",
                        correct: false,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: true
                        },
                        resultUpperText: "THAT SENT THE BOTTLE INTO THE GUTTER, DOWN THE\nSTORMDRAIN AND POLLUTED LOCAL WATERWAYS!",
                        resultLowerText: "IF WASTE IS PLACED ON THE GROUND IT CAN BE BLOWN\nBY WIND OR WASHED AWAY BY RAIN INTO STORMDRAINS,\n" +
                                        "WHERE IT WILL FLOW OUT TO LOCAL WATERWAYS.\n\nNEXT TIME, HOLD ONTO YOUR BOTTLE\nUNTIL YOU FIND A RECYCLING BIN THAT HAS SPACE INSIDE."
                    },
                    {
                        name: "pp_1_3c",
                        correct: false,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: true
                        },
                        resultUpperText: "THAT SENT THE BOTTLE INTO THE GUTTER, DOWN THE\nSTORMDRAIN AND POLLUTED LOCAL WATERWAYS!",
                        resultLowerText: "IF WASTE IS PLACED ON THE TOP OF A BIN IT CAN BE BLOWN\nBY WIND OR WASHED AWAY BY RAIN INTO STORMDRAINS,\n" +
                                        "WHERE IT WILL FLOW OUT TO LOCAL WATERWAYS.\n\nNEXT TIME, HOLD ONTO YOUR BOTTLE\nUNTIL YOU FIND A RECYCLING BIN THAT HAS SPACE INSIDE."
                    }
                ]
            },
            {
                name: "pp_1_4",
                options: [
                    {
                        name: "pp_1_4a",
                        correct: false,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: false,
                            deadFish: true,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: true,
                            bottle: false
                        },
                        resultUpperText: "THAT SENT TRASH INTO THE GUTTER, DOWN THE\nSTORMDRAIN AND POLLUTED LOCAL WATERWAYS!",
                        resultLowerText: "LIDS ON TRASH BINS SHOULD BE CLOSED TO KEEP RAINWATER\nOUT AND PREVENT WIND FROM BLOWING TRASH OUT OF THE\n" +
                                        "BIN AND INTO THE STORMDRAIN AND LOCAL WATERWAYS.\n\nNEXT TIME, TAKE OUT EXTRA WASTE SO THE LID WILL CLOSE.\n" +
                                        "BETTER YET, TAKE OUT RECYCLABLE AND COMPOSTABLE ITEMS."
                    },
                    {
                        name: "pp_1_4b",
                        correct: true,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "YOU PREVENTED POLLUTION AND KEPT\nTHE LOCAL WATERWAYS CLEAN!",
                        resultLowerText: "LIDS ON TRASH BINS SHOULD BE CLOSED TO KEEP RAINWATER\nOUT AND PREVENT WIND FROM BLOWING TRASH OUT OF THE\n" +
                                        "BIN AND INTO THE STORMDRAIN AND LOCAL WATERWAYS."
                    }
                ]
            },
            {
                name: "pp_1_5",
                options: [
                    {
                        name: "pp_1_5a",
                        correct: false,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: false,
                            deadFish: true,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: true,
                            bottle: false
                        },
                        resultUpperText: "THAT SENT TRASH INTO THE GUTTER, DOWN THE\nSTORMDRAIN AND POLLUTED LOCAL WATERWAYS!",
                        resultLowerText: "WHEN TRASH IS LEFT ON THE GROUND, WIND AND RAIN CAN\nCARRY IT TO STORMDRAINS AND OUT TO LOCAL WATERWAYS.\n\n" +
                                        "NEXT TIME, PICK UP TRASH WHEN YOU DROP IT."
                    },
                    {
                        name: "pp_1_5b",
                        correct: true,
                        wetlands: {
                            overlay: 0,
                            lilypad: true,
                            aliveFish: true,
                            deadFish: false,
                            soap: false,
                            mulch: false,
                            leaves: false,
                            trash: false,
                            bottle: false
                        },
                        resultUpperText: "YOU PREVENTED POLLUTION AND KEPT\nTHE LOCAL WATERWAYS CLEAN!",
                        resultLowerText: "WHEN TRASH IS LEFT ON THE GROUND, WIND AND RAIN CAN\nCARRY IT TO STORMDRAINS AND OUT TO LOCAL WATERWAYS."
                    }
                ]
            }
        ]
    ]
};
