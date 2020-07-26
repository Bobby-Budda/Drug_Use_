export function extractn(input) {
    return input ? input.map((entry) => {
        return entry.n 
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}