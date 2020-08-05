
export function loadDrugUseData () {
  return fetch("/drug-use-by-age.csv")
    .then((response) => {
        return response.text()
    })
}
