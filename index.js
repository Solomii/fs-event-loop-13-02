"use strict";
"use strict";

const btn = document.getElementById("btn");

// console.log(1);
// setTimeout(() => {
//     console.log(3);
// }, 3000);

// console.log(2);

// const identificator = setTimeout(()=>{
//   console.log(555)
// },1500);

// btn.addEventListener("click", ()=>{
//   clearTimeout(identificator)
// })

// const identificator = setInterval(() => {
//     console.log(555);
// }, 1500);

// btn.addEventListener("click", () => {
//     clearInterval(identificator);
// });

/*
написати функцію яка буде послідовно через 1-ну секунду виводити числа від 0 до 10
 */

function getConsistentlyOutputNumber() {
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 2000);
    }
}

getConsistentlyOutputNumber();

// const getConsistentlyOutputNumber2 = () => {
//     for (let i = 0; i <= 10; i++) {
//         function helper(num) {
//             setTimeout(() => {
//                 console.log(num);
//             }, num * 1000);
//         }
//         helper(i);
//     }
// };
// getConsistentlyOutputNumber2();

function counterInterval(n = 10) {
    let count = 0;
    return function () {
        const idInterval = setInterval(() => {
            console.log(count++);
            for (let i = 0; i < 1000000000; i++) {}
            if (count >= n) {
                clearInterval(idInterval);
                console.timeEnd("marker");
            }
        }, 1000);
    };
}

const counterInterval1 = counterInterval();
// console.time("marker");
// counterInterval();

function counterTimeout(count) {
    if (count <= 10) {
        return;
    }

    console.log(count=0);
    const idTimeout = setTimeout(() => {
        counterTimeout(count + 1);
        if (count >= 9) {
          clearTimeout(idTimeout);
          console.timeEnd("marker");
          return
      }
    }, 1000);
}

console.time("marker");
counterTimeout();
