import React, { useContext } from "react";
import { DrugUseContext } from "./drug-use-context/DrugUseContext";
import { loadDrugUseData } from "./drug-use-context/loadDrugUseData";
export default function Dummy() {
  const [druguse, setdruguse] = useContext(DrugUseContext);
  // return <h1>Dummy {JSON.stringify(druguse)} </h1>
  return <h1>Age{(DrugUseData.length) > 0 ? JSON.stringify(DrugUseData.slice(0,1)[0].druguse)} </h1>;
}
