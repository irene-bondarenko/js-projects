let name = prompt("Введите Ваше имя");
let age = prompt("Введите Ваш возраст");

if (16 <= age >0) {
    console.log("Привет, ", name, "!", "Вы подросток!");
} else if (40 <= age >= 17) {
    console.log("Привет, ", name, "!", "Вы молодой человек");
} else if (age >= 41) {
    console.log("Привет,", name, "!", "Вы старичок");
} else if (age < 0) { 
    alert("Возраст не может быть отрицтельным!");
}