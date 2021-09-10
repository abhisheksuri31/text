let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");

let inputall = document.querySelectorAll("input");
for (let input of inputall) {
    input.addEventListener("input", () => {
        const val1 = input1.value;
        localStorage.setItem("val1", val1);
        const val2 = input2.value;
        localStorage.setItem("val2", val2);
        box1.innerHTML = val1;
        box2.innerHTML = val2;


        let split1 = val1.split(" ");
        let split2 = val2.split(" ");
        for (const ite1 of split1) {
            for (const ite2 of split2) {
                if (ite1 === ite2) {
                    let val3 = ite1;
                    box3.innerHTML = val3;
                    localStorage.setItem("vall3", val3);
                }
            }
        }
    })
}

input1.value = localStorage.getItem("val1");
input2.value = localStorage.getItem("val2");
box1.innerHTML = localStorage.getItem("val1");
box2.innerHTML = localStorage.getItem("val2");
box3.innerHTML = localStorage.getItem("vall3");



