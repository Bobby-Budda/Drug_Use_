import { loadDrugUseData } from './loadDrugUseData'
import {readFileSync} from 'fs'

//siehe Branch "Bugfix" -> hier funktionieren die tests  

describe('drug-use-context', () => {

    describe('loadDrugUseData', () =>{

        it('soll drug-use-by-age.csv umwandeln in json promise', async () =>{
            const csvContent = readFileSync(__dirname +  '/../../public/drug-use-by-age.csv', 'utf8') 
            const rows = csvContent.split('\n')
            const labels = rows[0].split(',')
            console.log(labels)
            fetch.mockResponseOnce(csvContent)

            const data = await loadDrugUseData();
            expect(data.length).toEqual(rows.length-2)

            data.forEach((DrugUse) => {
                expect(Object.keys(DrugUse)).toEqual(labels)

            })
        })
    })
})