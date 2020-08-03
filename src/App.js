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
    
    <MyChart/>
  </div>
  )

  
}

{/* <DrugUseProvider>
  <App>
    //Context 
    <div>
    <h1>Drug Use by Age</h1>
    <MyChart>
         wird die Chart aufgebaut
         <Bubble> die eigentliche Chart
         </Bubble>
    </MyChart>
    </div>
  </App>
</DrugUseProvider> */}