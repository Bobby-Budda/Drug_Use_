import parse from 'csv-parse/lib/sync'
import React, {createContext, useState, useEffect} from 'react'
export function loadDrugUseData () {
    return fetch('/drug-use-by-age.csv')
    .then((response) => response.text())
    .then((text) => parse(text, {columns:true}))
}

export const DrugUseContext = createContext()

export function DrugUseProvider (props) {
  const [druguse, setdruguse] = useState ([{age: '0'}])
  useEffect (() => {
    loadDrugUseData().then((DrugUseData)=>{
      setdruguse(DrugUseData)
    })
  })
    return (
      <DrugUseContext.Provider value= {[druguse, setdruguse]}>
      { props.children }
      </DrugUseContext.Provider>
    )
}
