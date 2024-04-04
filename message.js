export const name = "rasel";
export const mobile = 88001818401065;
// default export 
export function demo() {
  let text =
    '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

  const obj = JSON.parse(text);
  let txt = "";
  for (let i = 0; i < obj.employees.length; i++) {
    txt +=
      obj.employees[i].firstName + " - " + obj.employees[i].lastName + "<br>";
  }
  // return txt;
}

export function notDefault() {
  console.log("Hello from the Not default export!");
}
// default function export
export default function test() {
    console.log("Hello from the default export!");
}
// export default name;
// `template interpolution lekhar niyom allways `` diye lekhte hobe` 
