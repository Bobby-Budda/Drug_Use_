import React, { useContext } from "react"; 
import { DrugUseContext } from "./drug-use-context/DrugUseContext";
import { Bubble } from 'react-chartjs-2';

//Auf Daten zugreifen
export default function MyChart() { 
const [drugUseData] = useContext(DrugUseContext)
    return ( 
<h1>{JSON.stringify(drugUseData[0])}</h1>
)
}
