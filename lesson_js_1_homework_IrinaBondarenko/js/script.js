let name = prompt("Введите Ваше имя");
let age = prompt("Введите Ваш возраст");

if (age > 0 & age <=16) {
    console.log("Привет, " + name + "!" + "Вы подросток!");
} else if (age >= 17 & age <= 40) {
    console.log("Привет, " + name + "!"+" Вы молодой человек");
} else if (age >= 41) {
    console.log("Привет," + name + "!" + "Вы старичок");
} else if (age < 0) { 
    alert("Возраст не может быть отрицтельным!");
}