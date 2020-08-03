import React, { useState, useEffect } from "react";
import { loadDrugUseData } from "./loadDrugUseData";
import { DrugUseContext } from "./DrugUseContext";

export function DrugUseProvider(props) {
  const [druguse, setdruguse] = useState([]);
  useEffect(() => {
    loadDrugUseData().then((DrugUseData) => {
      setdruguse(DrugUseData);
    });
  });
  return (
    <DrugUseContext.Provider value={[druguse, setdruguse]}>
      {props.children}
    </DrugUseContext.Provider>
  );
}
