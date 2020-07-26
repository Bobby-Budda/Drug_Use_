import {extractn} from '.'

describe ('chart-helper', () => {
    describe('extractn', () => {
        it ('should return empty list on empty input', () => {
            expect(extractn([])).toEqual([])
        })

        it ('should return n in numbers', () => {
            const input = [{
                age: '18',
                n: '2469',
                alcohol_use: '58.7'
            
                
            }]
            expect(extractn(input)).toEqual([2469])
        })
    })
})