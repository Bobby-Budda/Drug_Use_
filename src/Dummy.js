import React, {useContext} from 'react'
import { DrugUseContext } from './drug-use-context'
export default function Dummy (){
    const [druguse] = useContext(DrugUseContext)
    // return <h1>Dummy {JSON.stringify(druguse)} </h1> 
    return <h1>Dummy {druguse[0].age} </h1> 
}