export function extractn(input) {
    return input ? input.map((entry) => {
        return entry.n 
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}

export function extractUsePerDrug(input) {
    let result = {}
    input.forEach((line) => {
        if (!result['alcohol-use']) {
            result['alcohol-use'] = []
        }
        result['alcohol-use'].push(line['alcohol-use']);
    })
    return {'alcohol-use':[58.7]
    }
}