import React, {useContext} from 'react'
import { Bubble } from 'react-chartjs-2'
import { DrugUseContext } from "./drug-use-context/DrugUseContext";
import { DrugUseProvider} from "./drug-use-context/DrugUseProvider";
import { extractn } from './chart-helper';
import  MyChart from './MyChart';


export default function App() {
  const [DrugUseData] = useContext(DrugUseContext)
  return (
  <div>
    <h1>Drug Use by Age</h1>
    <MyChart/>
  </div>
  )

  
}

// export default function App() {
//     const [DrugUseData] = useContext(DrugUseContext)

//     const labels = DrugUseData ? DrugUseData
//         .map((entry) => {
//           return entry.druguse
//         })
//     :[]
    
//     return <Bubble data= {{
//       labels: labels,
//       datasets: [{
//           label: '# of Prozent',
//           data: extractn(DrugUseData),
//           backgroundColor: 'yellow',
//           borderColor: '#fff',
//           borderWidth: 1
//       }]
              //     labels: labels,
              //     datasets: [{
              //         label: 'Alcohol',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor:'rgba(255, 99, 132, 0.2)',
              //         borderColor: 'rgba(255, 99, 132, 1)',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Marijuana',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "green",
              //         borderColor: 'green',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Cocaine',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "blue",
              //         borderColor: 'blue',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Crack',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "silver",
              //         borderColor: 'silver',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Heroin',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "yellow",
              //         borderColor: 'yellow',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Hallucinogen',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "red",
              //         borderColor: 'red',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Inhalant',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "black",
              //         borderColor: 'black',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Pain Releiver',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "silver",
              //         borderColor: 'silver',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Oxycontin',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "orange",
              //         borderColor: 'orange',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Tranquilizer',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "green",
              //         borderColor: 'green',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Stimulant',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "blue",
              //         borderColor: 'blue',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Meth',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor: "red",
              //         borderColor: 'red',
              //         borderWidth: 1
                      
              //     },
              //     {
              //         label: 'Sedative',
              //         data: extractn(DrugUseData),
              //         //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
              //         backgroundColor:'rgba(255, 99, 132, 0.2)',
              //         borderColor: 'rgba(255, 99, 132, 1)',
              //         borderWidth: 1
                      
              //     }
              //   ],            

              // },
              
              
          
//     }}/>

    
      
// };



