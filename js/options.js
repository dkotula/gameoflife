const options = {
    board: {
        width: 10,
        height: 10,
        fieldSize: 50,
    },
    probability: 100,
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
    underpopulation: 0.3,
    overpopulation: 0.6,
    minDeadCell: 0.45,
    maxDeadCell: 0.7,
    toManyOtherTribes: 0.3,
}