const configurations = {
    still: [
        {name: "block", positions: [0, 0, 0, 1, 1, 0, 1, 1]},
        {name: "bee-hive", positions: [1, 0, 0, 1, 0, 2, 1, 3, 2, 2, 2, 1]},
        {name: "loaf", positions: [1, 0, 0, 1, 0, 2, 1, 3, 2, 3, 3, 2, 2, 1]},
        {name: "boat", positions: [0, 0, 0, 1, 1, 0, 2, 1, 1, 2]},
        {name: "tub", positions: [0, 1, 1, 0, 2, 1, 1, 2]},
    ],
    oscillators: [
        {name: "blinker", positions: [0, 1, 1, 1, 2, 1]},
        {name: "toad", positions: [1, 3, 2, 1, 2, 4, 3, 1, 3, 4, 4, 2]},
        {name: "beacon", positions: [1, 1, 1, 2, 2, 1, 2, 2, 3, 3, 3, 4, 4, 3, 4, 4]},
        {
            name: "pulsar",
            positions: [3, 5, 3, 6, 3, 7, 3, 11, 3, 12, 3, 13, 5, 3, 5, 8, 5, 10, 5, 15, 6, 3, 6, 8, 6, 10, 6, 15, 7, 3, 7, 8, 7, 10, 7, 15, 8, 5, 8, 6, 8, 7, 8, 11, 8, 12, 8, 13, 10, 5, 10, 6, 10, 7, 10, 11, 10, 12, 10, 13, 11, 3, 11, 8, 11, 10, 11, 15, 12, 3, 12, 8, 12, 10, 12, 15, 13, 3, 13, 8, 13, 10, 13, 15, 15, 5, 15, 6, 15, 7, 15, 11, 15, 12, 15, 13],
        },
        {
            name: "penta-decathlon",
            positions: [2, 6, 3, 6, 4, 5, 4, 6, 4, 7, 7, 5, 7, 6, 7, 7, 8, 6, 9, 6, 10, 6, 11, 6, 12, 5, 12, 6, 12, 7, 15, 5, 15, 6, 15, 7, 16, 6, 17, 6],
        },
    ],
    spaceships: [
        {name: "glider", positions: [1, 3, 2, 4, 3, 2, 3, 3, 3, 4]},
        {
            name: "light-weight spaceship",
            positions: [3, 7, 3, 8, 4, 5, 4, 6, 4, 8, 4, 9, 5, 5, 5, 6, 5, 7, 5, 8, 6, 6, 6, 7]
        },
        {
            name: "middle-weight spaceship",
            positions: [2, 4, 2, 5, 2, 6, 2, 7, 2, 8, 3, 3, 3, 8, 4, 8, 5, 3, 5, 7, 6, 5]
        },
        {
            name: "heavy-weight spaceship",
            positions: [2, 4, 2, 5, 2, 6, 2, 7, 2, 8, 2, 9, 3, 3, 3, 9, 4, 9, 5, 3, 5, 8, 6, 5, 6, 6]
        },
    ],
    guns: [
        {
            name: "gosper glider gun",
            positions: [0, 24, 1, 22, 1, 24, 2, 12, 2, 13, 2, 20, 2, 21, 2, 34, 2, 35, 3, 11, 3, 15, 3, 20, 3, 21, 3, 34, 3, 35, 4, 0, 4, 1, 4, 10, 4, 16, 4, 20, 4, 21, 5, 0, 5, 1, 5, 10, 5, 14, 5, 16, 5, 17, 5, 22, 5, 24, 6, 10, 6, 16, 6, 24, 7, 11, 7, 15, 8, 12, 8, 13]
        },
        {
            name: "simkin glider gun",
            positions: [6, 1, 6, 2, 6, 8, 6, 9, 7, 1, 7, 2, 7, 8, 7, 9, 9, 5, 9, 6, 10, 5, 10, 6, 15, 23, 15, 24, 15, 26, 15, 27, 16, 22, 16, 28, 17, 22, 17, 29, 17, 32, 17, 33, 18, 22, 18, 23, 18, 24, 18, 28, 18, 32, 18, 33, 19, 27, 23, 21, 23, 22, 24, 21, 25, 22, 25, 23, 25, 24, 26, 24]
        },
    ],
}