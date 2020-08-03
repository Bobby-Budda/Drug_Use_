import React, { useContext} from "react"; 
import { Bubble } from 'react-chartjs-2';

import {ExtractUsePerDrug} from "./chart-helper"
import {DrugUseContext} from "./drug-use-context/DrugUseContext";





export default function MyChart(){
        
        const [drugUseData] = useContext(DrugUseContext); 
        var usePerDrug = new ExtractUsePerDrug(drugUseData);
         
           
         console.log(usePerDrug['alcohol']);
       
                return(
        

                    <Bubble
                        data = {{
                            datasets: [{
                                label: 'Alcohol',
                                data: usePerDrug['alcohol'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor:'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Cocaine',
                                data: usePerDrug['cocaine'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "blue",
                                borderColor: 'blue',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Crack',
                                data: usePerDrug['crack'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "silver",
                                borderColor: 'silver',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Heroin',
                                data: usePerDrug['heroin'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "yellow",
                                borderColor: 'yellow',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Hallucinogen',
                                data: usePerDrug['hallucinogen'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "red",
                                borderColor: 'red',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Inhalant',
                                data: usePerDrug['inhalant'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "black",
                                borderColor: 'black',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Pain Releiver',
                                data: usePerDrug['painreleiver'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "silver",
                                borderColor: 'silver',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Oxycontin',
                                data: usePerDrug['oxycontin'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "orange",
                                borderColor: 'orange',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Tranquilizer',
                                data: usePerDrug['tranquilizer'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "green",
                                borderColor: 'green',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Stimulant',
                                data: usePerDrug['stimulant'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "blue",
                                borderColor: 'blue',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Meth',
                                data: usePerDrug['meth'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor: "red",
                                borderColor: 'red',
                                borderWidth: 1
                                
                            },
                            {
                                label: 'Sedative',
                                data: usePerDrug['sedative'],
                                //Die Farbangaben können durch ein Array auf die einzelnen Punkte unterschieden werden. 
                                backgroundColor:'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1
                                
                            }
                          ],            
          
                
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                      callback: function(value, index, values) {
                                       return values + '%';
                                     }
                                    }
                                }]
                            
                              },
                              title: {
                                display: true,
                                fontSize : 25,
                                text: 'Drug Usage By Age'
                            }
                            
                        }}
                    
                        }
                        />
            
                     )
                    }
  
//Auf Daten zugreifen

    

               
