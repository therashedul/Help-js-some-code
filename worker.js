let w;
function startWorker() {
  if (typeof Worker !== "undefined") {
    // if worker has
    if (typeof w == "undefined") {
      w = new Worker("demo_workers.js");
      // lessenar for demo_worker work message
      w.onmessage = function (event) {
        document.getElementById("result").innerHTML = event.data;
      };
    }
  } else {
    alert("your browser not supported for worker");
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
