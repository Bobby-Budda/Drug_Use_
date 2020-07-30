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
