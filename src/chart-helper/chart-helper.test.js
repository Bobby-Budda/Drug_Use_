import {extractn} from '.'
import {extractUsePerDrug} from '.'



describe ('chart-helper', () => {
    describe ('extractUsePerDrug', () => {
        const input = [{

            "age":"18","n":"2469",
            "alcohol-use":"58.7",
            "marijuana-use":"33.7",
            "cocaine-use":"3.2",
            "crack-use":"0.4",
            "heroin-use":"0.4",
            "hallucinogen-use":"7.0",
            "inhalant-use":"1.8",
            "pain-releiver-use":"9.2",
            "oxycontin-use":"1.7",
            "tranquilizer-use":"4.9",
            "stimulant-use":"3.0",
            "meth-use":"0.5",
            "sedative-use":"0.4"
        }] 
        
        let result 
        beforeEach(()=>{ //wird vor jedem it ausgeführt
            result = extractUsePerDrug (input)
        })
        it ('should contain alcohol usage', () => {
            const input2 = input+'';
    
            const table = input2.split('\n').slice(1);
            const columns = table[1].split(',');
            expect (columns[2].toEqual([58.7])

        })
    })

    
//     describe('extractn', () => {
//         it ('should return empty list on empty input', () => {
//             expect(extractn([])).toEqual([])
//         })

//         it ('should return n in numbers', () => {
//             const input = [{
//                 age: '18',
//                 n: '2469',
//                 alcohol_use: '58.7'
            
                
//             }]
//             expect(extractn(input)).toEqual([2469])
//         })
//     })
})