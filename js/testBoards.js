const testBoards = [
    {
        board: {
            width: 10,
            height: 10,
            fieldSize: 50,
        },
        probability: 0,
        borders: {
            borderTop: true,
            borderBottom: true,
            borderLeft: true,
            borderRight: true,
        },
        fractionNeighbors: true,
        timeInterval: 200,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        setBlock: false,
        setDead: false,
        setAlive: false,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: true,
        disappearsAfter: 10,
        appearsAfter: 10,
        cells: [
            {
                type: "alive",
                positions: [
                    {x: 9, y: 0},
                    {x: 0, y: 7}
                ],
                life: 1.0
            },
            {
                type: "block",
                positions: [
                    {x: 2, y: 0},
                    {x: 3, y: 0},
                    {x: 7, y: 0},
                    {x: 2, y: 1},
                    {x: 3, y: 1},
                    {x: 7, y: 1},
                    {x: 0, y: 2},
                    {x: 1, y: 2},
                    {x: 2, y: 2},
                    {x: 3, y: 2},
                    {x: 4, y: 2},
                    {x: 5, y: 2},
                    {x: 6, y: 2},
                    {x: 7, y: 2},
                    {x: 8, y: 2},
                    {x: 9, y: 2},
                    {x: 0, y: 3},
                    {x: 1, y: 3},
                    {x: 2, y: 3},
                    {x: 3, y: 3},
                    {x: 4, y: 3},
                    {x: 5, y: 3},
                    {x: 6, y: 3},
                    {x: 7, y: 3},
                    {x: 8, y: 3},
                    {x: 9, y: 3},
                    {x: 0, y: 4},
                    {x: 1, y: 4},
                    {x: 2, y: 4},
                    {x: 3, y: 4},
                    {x: 4, y: 4},
                    {x: 5, y: 4},
                    {x: 6, y: 4},
                    {x: 7, y: 4},
                    {x: 8, y: 4},
                    {x: 9, y: 4},
                    {x: 2, y: 5},
                    {x: 3, y: 5},
                    {x: 7, y: 5},
                    {x: 2, y: 6},
                    {x: 3, y: 6},
                    {x: 7, y: 6},
                    {x: 2, y: 7},
                    {x: 3, y: 7},
                    {x: 7, y: 7},
                    {x: 0, y: 8},
                    {x: 1, y: 8},
                    {x: 2, y: 8},
                    {x: 3, y: 8},
                    {x: 4, y: 8},
                    {x: 5, y: 8},
                    {x: 6, y: 8},
                    {x: 7, y: 8},
                    {x: 8, y: 8},
                    {x: 9, y: 8},
                    {x: 2, y: 9},
                    {x: 3, y: 9},
                    {x: 7, y: 9},
                ],
                blockIntensity: 0.5,
                flashing: true,
                disappearsAfter: 10,
                appearsAfter: 10,
                counter: 0
            }
        ]
    },
    {
        board: {width: 100, height: 100, fieldSize: 5},
        probability: 80,
        borders: {borderTop: true, borderBottom: true, borderLeft: false, borderRight: false},
        fractionNeighbors: true,
        timeInterval: 200,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        colors: ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"],
        setBlock: false,
        setDead: false,
        setAlive: true,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: true,
        disappearsAfter: 15,
        appearsAfter: 15,
        neighboursRange: 1,
        cells: [{
            type: "block",
            positions: [{x: 0, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 0, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 1, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 2, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 3, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 4, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 5, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 6, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 7, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 8, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 9, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 10, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 11, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 12, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 13, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 14, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 15, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 16, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 17, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 18, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 19, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 20, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 21, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 22, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 23, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 24, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 25, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 26, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 27, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 28, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 29, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 30, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 31, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 32, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 33, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 34, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 35, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 36, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 37, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 38, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 39, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 40, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 41, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 42, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 43, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 44, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 45, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 46, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {type: "alive", positions: [{x: 47, y: 8}], life: 0.64, color: "255,0,0"}, {
            type: "block",
            positions: [{x: 47, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 47, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 48, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 49, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 50, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 51, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 52, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 53, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 54, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 55, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 56, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 57, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 58, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 59, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 60, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 61, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 62, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 63, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 64, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 65, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 66, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 67, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 68, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 69, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 70, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 71, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 72, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 73, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 74, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 75, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 76, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 77, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 78, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 79, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 80, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 81, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 82, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 83, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 84, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 85, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 86, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 87, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 88, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 89, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 90, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 91, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 92, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 93, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 94, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 95, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 96, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 97, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 98, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 28}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 33}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 40}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 46}],
            flashing: true,
            disappearsAfter: 10,
            appearsAfter: 10,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 57}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 58}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 59}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 60}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 61}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 62}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 63}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 64}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 65}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 66}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 67}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 68}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 69}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 70}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 71}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 72}],
            flashing: true,
            disappearsAfter: 5,
            appearsAfter: 5,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 90}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 91}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 92}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 93}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 94}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 95}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 96}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }, {
            type: "block",
            positions: [{x: 99, y: 97}],
            flashing: true,
            disappearsAfter: 15,
            appearsAfter: 15,
            counter: 0,
            blockIntensity: 0.5
        }]
    },
	{
        board: {width: 100, height: 100, fieldSize: 5},
        probability: 80,
        borders: {borderTop: true, borderBottom: true, borderLeft: true, borderRight: true},
        fractionNeighbors: true,
        timeInterval: 200,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        colors: ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"],
        setBlock: false,
        setDead: false,
        setAlive: true,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: true,
        disappearsAfter: 15,
        appearsAfter: 15,
        neighboursRange: 1,
        cells: [
            {
                type: "alive",
                positions: [
                    {x: 9, y: 0},
                    {x: 0, y: 7}
                ],
                life: 1.0
            }
        ]
    },
    {
        board: {width: 100, height: 100, fieldSize: 5},
        probability: 80,
        borders: {borderTop: true, borderBottom: true, borderLeft: true, borderRight: true},
        fractionNeighbors: true,
        timeInterval: 50,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        colors: ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"],
        setBlock: false,
        setDead: false,
        setAlive: true,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: false,
        disappearsAfter: 15,
        appearsAfter: 15,
        neighboursRange: 1,
        cells: [
            {
                type: "alive",
                positions: [
                    {x: 50, y: 30}
                ],
                life: 1.0
            }
        ]
    },
    {
        board: {width: 100, height: 100, fieldSize: 5},
        probability: 80,
        borders: {borderTop: true, borderBottom: true, borderLeft: true, borderRight: true},
        fractionNeighbors: true,
        timeInterval: 50,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        colors: ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"],
        setBlock: false,
        setDead: false,
        setAlive: true,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: false,
        disappearsAfter: 15,
        appearsAfter: 15,
        neighboursRange: 1,
        cells: [
            {
                type: "alive",
                positions: [
                    {x: 50, y: 30},
                    {x: 52, y: 30},
                    {x: 51, y: 31}
                ],
                life: 0.3
            }
        ]
    },
    {
        board: {width: 100, height: 100, fieldSize: 5},
        probability: 80,
        borders: {borderTop: true, borderBottom: true, borderLeft: true, borderRight: true},
        fractionNeighbors: true,
        timeInterval: 50,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        colors: ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"],
        setBlock: false,
        setDead: false,
        setAlive: true,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: true,
        disappearsAfter: 15,
        appearsAfter: 15,
        neighboursRange: 1,
        cells: [
            {
                type: "alive",
                positions: [
                    {x: 50, y: 10}
                ],
                life: 0.5
            },
            {
                type: "block",
                positions: [
                    {x: 0, y: 50},
                    {x: 1, y: 50},
                    {x: 2, y: 50},
                    {x: 3, y: 50},
                    {x: 4, y: 50},
                    {x: 5, y: 50},
                    {x: 6, y: 50},
                    {x: 7, y: 50},
                    {x: 8, y: 50},
                    {x: 9, y: 50},
                    {x: 10, y: 50},
                    {x: 11, y: 50},
                    {x: 12, y: 50},
                    {x: 13, y: 50},
                    {x: 14, y: 50},
                    {x: 15, y: 50},
                    {x: 16, y: 50},
                    {x: 17, y: 50},
                    {x: 18, y: 50},
                    {x: 19, y: 50},
                    {x: 20, y: 50},
                    {x: 21, y: 50},
                    {x: 22, y: 50},
                    {x: 23, y: 50},
                    {x: 24, y: 50},
                    {x: 26, y: 50},
                    {x: 27, y: 50},
                    {x: 28, y: 50},
                    {x: 29, y: 50},
                    {x: 30, y: 50},
                    {x: 31, y: 50},
                    {x: 32, y: 50},
                    {x: 33, y: 50},
                    {x: 34, y: 50},
                    {x: 35, y: 50},
                    {x: 36, y: 50},
                    {x: 37, y: 50},
                    {x: 38, y: 50},
                    {x: 39, y: 50},
                    {x: 40, y: 50},
                    {x: 41, y: 50},
                    {x: 42, y: 50},
                    {x: 43, y: 50},
                    {x: 44, y: 50},
                    {x: 45, y: 50},
                    {x: 46, y: 50},
                    {x: 47, y: 50},
                    {x: 48, y: 50},
                    {x: 49, y: 50},
                    {x: 50, y: 50},
                    {x: 51, y: 50},
                    {x: 52, y: 50},
                    {x: 53, y: 50},
                    {x: 54, y: 50},
                    {x: 55, y: 50},
                    {x: 56, y: 50},
                    {x: 57, y: 50},
                    {x: 58, y: 50},
                    {x: 59, y: 50},
                    {x: 60, y: 50},
                    {x: 61, y: 50},
                    {x: 62, y: 50},
                    {x: 63, y: 50},
                    {x: 64, y: 50},
                    {x: 65, y: 50},
                    {x: 66, y: 50},
                    {x: 67, y: 50},
                    {x: 68, y: 50},
                    {x: 69, y: 50},
                    {x: 70, y: 50},
                    {x: 71, y: 50},
                    {x: 72, y: 50},
                    {x: 73, y: 50},
                    {x: 74, y: 50},
                    {x: 76, y: 50},
                    {x: 77, y: 50},
                    {x: 78, y: 50},
                    {x: 79, y: 50},
                    {x: 80, y: 50},
                    {x: 81, y: 50},
                    {x: 82, y: 50},
                    {x: 83, y: 50},
                    {x: 84, y: 50},
                    {x: 85, y: 50},
                    {x: 86, y: 50},
                    {x: 87, y: 50},
                    {x: 88, y: 50},
                    {x: 89, y: 50},
                    {x: 90, y: 50},
                    {x: 91, y: 50},
                    {x: 92, y: 50},
                    {x: 93, y: 50},
                    {x: 94, y: 50},
                    {x: 95, y: 50},
                    {x: 96, y: 50},
                    {x: 97, y: 50},
                    {x: 98, y: 50},
                    {x: 99, y: 50},
                ],
                blockIntensity: 0.5,
                flashing: false,
                disappearsAfter: 10,
                appearsAfter: 10,
                counter: 0
            }
        ]
    },
    {
        board: {width: 100, height: 100, fieldSize: 5},
        probability: 80,
        borders: {borderTop: true, borderBottom: true, borderLeft: true, borderRight: true},
        fractionNeighbors: true,
        timeInterval: 50,
        tribesNumber: 1,
        innerBorders: false,
        subtractGenerating: true,
        showFullColor: false,
        gaussRange: 20,
        massOfTribe: 5,
        underpopulation: 0.3,
        overpopulation: 0.6,
        minDeadCell: 0.45,
        maxDeadCell: 0.7,
        toManyOtherTribes: 0.3,
        colors: ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"],
        setBlock: false,
        setDead: false,
        setAlive: true,
        wholeColumn: false,
        wholeRow: false,
        mouseDown: false,
        blockIntensity: 50,
        flashing: true,
        disappearsAfter: 15,
        appearsAfter: 15,
        neighboursRange: 1,
        cells: [
            {
                type: "alive",
                positions: [
                    {x: 50, y: 10}
                ],
                life: 0.5
            },
            {
                type: "block",
                positions: [
                    {x: 0, y: 30},
                    {x: 1, y: 30},
                    {x: 2, y: 30},
                    {x: 3, y: 30},
                    {x: 4, y: 30},
                    {x: 5, y: 30},
                    {x: 6, y: 30},
                    {x: 7, y: 30},
                    {x: 8, y: 30},
                    {x: 9, y: 30},
                    {x: 10, y: 30},
                    {x: 11, y: 30},
                    {x: 12, y: 30},
                    {x: 13, y: 30},
                    {x: 14, y: 30},
                    {x: 15, y: 30},
                    {x: 16, y: 30},
                    {x: 17, y: 30},
                    {x: 18, y: 30},
                    {x: 19, y: 30},
                    {x: 20, y: 30},
                    {x: 21, y: 30},
                    {x: 22, y: 30},
                    {x: 23, y: 30},
                    {x: 24, y: 30},
                    {x: 26, y: 30},
                    {x: 27, y: 30},
                    {x: 28, y: 30},
                    {x: 29, y: 30},
                    {x: 30, y: 30},
                    {x: 31, y: 30},
                    {x: 32, y: 30},
                    {x: 33, y: 30},
                    {x: 34, y: 30},
                    {x: 35, y: 30},
                    {x: 36, y: 30},
                    {x: 37, y: 30},
                    {x: 38, y: 30},
                    {x: 39, y: 30},
                    {x: 40, y: 30},
                    {x: 41, y: 30},
                    {x: 42, y: 30},
                    {x: 43, y: 30},
                    {x: 44, y: 30},
                    {x: 45, y: 30},
                    {x: 46, y: 30},
                    {x: 47, y: 30},
                    {x: 48, y: 30},
                    {x: 49, y: 30},
                    {x: 50, y: 30},
                    {x: 51, y: 30},
                    {x: 52, y: 30},
                    {x: 53, y: 30},
                    {x: 54, y: 30},
                    {x: 55, y: 30},
                    {x: 56, y: 30},
                    {x: 57, y: 30},
                    {x: 58, y: 30},
                    {x: 59, y: 30},
                    {x: 60, y: 30},
                    {x: 61, y: 30},
                    {x: 62, y: 30},
                    {x: 63, y: 30},
                    {x: 64, y: 30},
                    {x: 65, y: 30},
                    {x: 66, y: 30},
                    {x: 67, y: 30},
                    {x: 68, y: 30},
                    {x: 69, y: 30},
                    {x: 70, y: 30},
                    {x: 71, y: 30},
                    {x: 72, y: 30},
                    {x: 73, y: 30},
                    {x: 74, y: 30},
                    {x: 76, y: 30},
                    {x: 77, y: 30},
                    {x: 78, y: 30},
                    {x: 79, y: 30},
                    {x: 80, y: 30},
                    {x: 81, y: 30},
                    {x: 82, y: 30},
                    {x: 83, y: 30},
                    {x: 84, y: 30},
                    {x: 85, y: 30},
                    {x: 86, y: 30},
                    {x: 87, y: 30},
                    {x: 88, y: 30},
                    {x: 89, y: 30},
                    {x: 90, y: 30},
                    {x: 91, y: 30},
                    {x: 92, y: 30},
                    {x: 93, y: 30},
                    {x: 94, y: 30},
                    {x: 95, y: 30},
                    {x: 96, y: 30},
                    {x: 97, y: 30},
                    {x: 98, y: 30},
                    {x: 99, y: 30},
                    {x: 0, y: 60},
                    {x: 1, y: 60},
                    {x: 2, y: 60},
                    {x: 3, y: 60},
                    {x: 4, y: 60},
                    {x: 5, y: 60},
                    {x: 6, y: 60},
                    {x: 7, y: 60},
                    {x: 8, y: 60},
                    {x: 9, y: 60},
                    {x: 10, y: 60},
                    {x: 11, y: 60},
                    {x: 12, y: 60},
                    {x: 13, y: 60},
                    {x: 14, y: 60},
                    {x: 15, y: 60},
                    {x: 16, y: 60},
                    {x: 17, y: 60},
                    {x: 18, y: 60},
                    {x: 19, y: 60},
                    {x: 20, y: 60},
                    {x: 21, y: 60},
                    {x: 22, y: 60},
                    {x: 23, y: 60},
                    {x: 24, y: 60},
                    {x: 26, y: 60},
                    {x: 27, y: 60},
                    {x: 28, y: 60},
                    {x: 29, y: 60},
                    {x: 30, y: 60},
                    {x: 31, y: 60},
                    {x: 32, y: 60},
                    {x: 33, y: 60},
                    {x: 34, y: 60},
                    {x: 35, y: 60},
                    {x: 36, y: 60},
                    {x: 37, y: 60},
                    {x: 38, y: 60},
                    {x: 39, y: 60},
                    {x: 40, y: 60},
                    {x: 41, y: 60},
                    {x: 42, y: 60},
                    {x: 43, y: 60},
                    {x: 44, y: 60},
                    {x: 45, y: 60},
                    {x: 46, y: 60},
                    {x: 47, y: 60},
                    {x: 48, y: 60},
                    {x: 49, y: 60},
                    {x: 50, y: 60},
                    {x: 51, y: 60},
                    {x: 52, y: 60},
                    {x: 53, y: 60},
                    {x: 54, y: 60},
                    {x: 55, y: 60},
                    {x: 56, y: 60},
                    {x: 57, y: 60},
                    {x: 58, y: 60},
                    {x: 59, y: 60},
                    {x: 60, y: 60},
                    {x: 61, y: 60},
                    {x: 62, y: 60},
                    {x: 63, y: 60},
                    {x: 64, y: 60},
                    {x: 65, y: 60},
                    {x: 66, y: 60},
                    {x: 67, y: 60},
                    {x: 68, y: 60},
                    {x: 69, y: 60},
                    {x: 70, y: 60},
                    {x: 71, y: 60},
                    {x: 72, y: 60},
                    {x: 73, y: 60},
                    {x: 74, y: 60},
                    {x: 76, y: 60},
                    {x: 77, y: 60},
                    {x: 78, y: 60},
                    {x: 79, y: 60},
                    {x: 80, y: 60},
                    {x: 81, y: 60},
                    {x: 82, y: 60},
                    {x: 83, y: 60},
                    {x: 84, y: 60},
                    {x: 85, y: 60},
                    {x: 86, y: 60},
                    {x: 87, y: 60},
                    {x: 88, y: 60},
                    {x: 89, y: 60},
                    {x: 90, y: 60},
                    {x: 91, y: 60},
                    {x: 92, y: 60},
                    {x: 93, y: 60},
                    {x: 94, y: 60},
                    {x: 95, y: 60},
                    {x: 96, y: 60},
                    {x: 97, y: 60},
                    {x: 98, y: 60},
                    {x: 99, y: 60},
                ],
                blockIntensity: 0.5,
                flashing: false,
                disappearsAfter: 10,
                appearsAfter: 10,
                counter: 0
            }
        ]
    }
]