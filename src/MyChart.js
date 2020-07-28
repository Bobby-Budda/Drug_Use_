import React, { useContext } from "react"; 
import { DrugUseContext } from "./drug-use-context/DrugUseContext";
import { Bubble } from 'react-chartjs-2';
import {extractUsePerDrug} from "./chart-helper"

//Auf Daten zugreifen
export default function MyChart() { 
const [drugUseData] = useContext(DrugUseContext)
const usePerDrug = extractUsePerDrug(drugUseData)
    return ( 
        <div>
            <h1>{JSON.stringify(drugUseData[0])}</h1>
            <Bubble
                data={usePerDrug["alcohol-use"]}
                options= {{
                    backgroundColor:'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }}
                      
            />
        </div>

)
}
