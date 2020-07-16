import parse from "csv-parse/lib/sync";
export function loadDrugUseData() {
  return fetch("/drug-use-by-age.csv")
    .then((response) => response.text())
    .then((text) => parse(text, { columns: true }));
}
