// const work = true;
// function demopromise() {
//   console.log("start demo workeng...");
//   const promise = new Promise(function (resolve, reject) {
//     if (work) {
//       resolve("Working ahead...");
//     } else {
//       reject("not working");
//     }
//   });
//   return promise;
// }
// demopromise()
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// ===================== promise =======================
// const status = true;
// const mark = 80;

// function enroll() {
//   console.log("Your enroll is progress");
//   const promise = new Promise(function (resolve, rejects) {
//     setTimeout(function () {
//       if (status) {
//         resolve();
//       } else {
//         rejects("your enroll is faill");
//       }
//     }, 2000);
//   });
//   return promise;
// }
// function progress() {
//   console.log("your task progresing...");
//   const promis = new Promise(function (resolve, rejects) {
//     setTimeout(function () {
//       if (mark >= 80) {
//         resolve();
//       } else {
//         rejects("your progress is not ahed");
//       }
//     }, 3000);
//   });
//   return promis;
// }
// function getCrtificat() {
//   console.log("your are pass");
//   const promis = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("congrates !");
//     }, 1000);
//   });
//   return promis;
// }

// enroll()
//   .then(progress)
//   .then(getCrtificat)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// ============================ async and await ===================================
const status = true;
const mark = 80;
function enroll() {
  console.log("Your enroll is progress");
  const promise = new Promise(function (resolve, rejects) {
    setTimeout(function () {
      if (status) {
        resolve();
      } else {
        rejects("your enroll is faill");
      }
    }, 2000);
  });
  return promise;
}
function progress() {
  console.log("your task progresing...");
  const promis = new Promise(function (resolve, rejects) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        rejects("your progress is not ahed");
      }
    }, 3000);
  });
  return promis;
}
function getCrtificat() {
  console.log("your are pass");
  const promis = new Promise(function (resolve, rejects) {
    setTimeout(function () {
      resolve("congrates !");
    }, 1000);
  });
  return promis;
}

async function course() {
  try {
    await enroll();
    await progress();
    const msg = await getCrtificat();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}
course();
