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

// getConsistentlyOutputNumber();

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

// const counterInterval1 = counterInterval();
// console.time("marker");
// counterInterval();

function counterTimeout(count) {
    if (count <= 10) {
        return;
    }

    console.log((count = 0));
    const idTimeout = setTimeout(() => {
        counterTimeout(count + 1);
        if (count >= 9) {
            clearTimeout(idTimeout);
            console.timeEnd("marker");
            return;
        }
    }, 1000);
}

// console.time("marker");
// counterTimeout();

///// !!!! JSON !!!

const user = {
    id: 1,
    firstName: "Brad",
    lastName: "Pitt",
    age: 59,
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    children: ["Alex", "Vax", "Tom"],
    isAdult: true,
    ukrainePasport: null,
    pet: undefined,

    [Symbol("mitka")]: "mitka",
    bday: {
        year: 1963,
        month: 12,
    },
};

console.log(user);
const serializeUser = JSON.stringify(user);
console.log(serializeUser);

const deSerializeUser = JSON.parse(serializeUser);
console.log(deSerializeUser);

/*
створіть обєкт продукт, який має властивості таких типів: рядок, масив, число, булевий, нічого, невідомо

обєкт залогувати, 
серіалізувати,
 залогувати результат серіалізації, 
десеріалізувати,
залогувати результат серіалізації, 
*/

const product = {
    id: 1,
    name: "sweets",
    curency: "uh",
    getName() {
        return this.name + " " + this.curency;
    },
    variety: ["dark", "white", "milk"],
    isOnStore: true,
    discount: null,
    pet: undefined,
};

console.log(product);
const serializeProduct = JSON.stringify(product);
console.log(serializeProduct);

const deSerializeProduct = JSON.parse(serializeProduct);
console.log(deSerializeProduct);

/////!!!!! fetch()

// const promise = fetch("./assets/js/data.json");
// console.log(promise);

// promise.then(
//     (response) => {
//         const responsePromise = response.json();
//         console.log("ok",responsePromise);
//         responsePromise.then((data)=>{
//             console.table(data);
//         },
//         ()=>{
//             console.log('error responsePromise')
//         })
//     },
//     () => {
//         console.log("error promise");
//     }
// );

// const responsePromise = promise.then((response) => {
//     return response.json();
// });

// responsePromise.then((data) => {
//     console.table(data);
// });

//// 
// fetch("./assets/js/data.json")
//     .then(
//         (response) => response.json(),
//         (error) => {
//             console.log("error promise", error);
//         }
//     )
//     .then(
//         (data) => console.table(data),
//         (error) => {
//             console.log("error responsePromise".error);
//         }
//     );

fetch("./assets/js/data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach ((user)=>{
            console.log(user.firstName,user.age)
        })
        // console.table(data)
    }
    )
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });
