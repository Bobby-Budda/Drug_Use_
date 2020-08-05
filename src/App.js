import React, {useContext} from 'react'
import { DrugUseContext } from "./drug-use-context/DrugUseContext";
import  MyChart from './MyChart';


export default function App() {
  const [DrugUseData] = useContext(DrugUseContext)
  return (
    <body>
      <div class="container">
        <h1>Drug Use by Age</h1>
        <p>Percentage of those in an age group from 18-30 who used these drugtypes in the past 12 months</p>
        <MyChart/>
      </div>
    </body>
  )

  
}
