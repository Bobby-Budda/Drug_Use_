import { loadDrugUseData } from './'
import { execPath } from 'process'
import { isTSAnyKeyword } from '@babel/types'
import {readFileSync} from 'fs'

describe('drug-use-context', () => {

    describe('loadDrugUseData', () =>{

        it('soll drug-use-by-age.csv umwandeln in json promise', async () =>{
            const csvContent = readFileSync(__dirname +  '/../../public/drug-use-by-age.csv', 'utf8') 
            const rows = csvContent.split('\r')
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