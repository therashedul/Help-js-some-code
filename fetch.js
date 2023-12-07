let fetchdata = document.getElementById("fetchdata");
async function getData() {
  const res = await fetch("http://localhost:8000/data.txt");
  const data = await res.text();
  fetchdata.innerText = data;
}
// function getData() {
//   fetch("http://localhost:8000/data.txt") // fetch function all time retur Promise()
//     .then((res) => res.text())
//     .then((data) => {
//       console.log("hello world");
//       fetchdata.innerText = data;
//     });
//   console.log("hello");
// }
