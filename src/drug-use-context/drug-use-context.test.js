// import { loadDrugUseData } from './'
import { execPath } from 'process'
import { isTSAnyKeyword } from '@babel/types'
import {readFileSync} from 'fs'
import {shallow} from 'enzyme';
import logo from "../PillsLogo.jpeg";



// //describe('drug-use-context', () => {

//     // describe('loadDrugUseData', () =>{

//     //     it('soll drug-use-by-age.csv umwandeln in json promise', async () =>{
//     //         const csvContent = readFileSync(__dirname +  '/../../public/drug-use-by-age.csv', 'utf8') 
//     //         const rows = csvContent.split('\r')
//     //         const labels = rows[0].split(',')
//     //         console.log(labels)
//     //         fetch.mockResponseOnce(csvContent)

//     //         const data = await loadDrugUseData();
//     //         expect(data.length).toEqual(rows.length-2)

//     //         data.forEach((DrugUse) => {
//     //             expect(Object.keys(DrugUse)).toEqual(labels)

//     //         })
//     //     })
//     // })
//     describe("<Logo />", () => {
//         it("renders an image", () => {
//             const logotag = shallow(<Logo />);
    
//             expect(logotag.find("img").prop("src")).toEqual(logo);
    
//          });
//      });
// })
// //