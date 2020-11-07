let buttonEng = document.querySelector(".button__eng");
let buttonRus = document.querySelector(".button__rus");

let arr = {
    "eng": ["Apple", "Orange", "Pineapple", "Cherry"],
    "rus": ["Яблоко", "Апельсин", "Ананас", "Вишня"]
}

buttonRus.addEventListener("click", function () {
for (let i = 0; i < arr["rus"].length; i++){
        console.log(arr["rus"][i]);
    }
})

buttonEng.addEventListener("click", function () {
for (let i = 0; i < arr["eng"].length; i++){
        console.log(arr["eng"][i]);
    }
})

