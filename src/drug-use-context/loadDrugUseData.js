import parse from "csv-parse/lib/sync";

export function loadDrugUseData () {
  return fetch("/drug-use-by-age.csv")
    .then((response) => {
        return response.text()
    })
    .then((text) => {
        return parse(text, { 
            columns: true 
        })
    })

}
