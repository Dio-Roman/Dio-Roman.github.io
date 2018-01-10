"use strict";

//  Выделить дни матчей
let a = document.getElementsByClassName("datepicker--cell-day");

function week() {
    a.item(4).innerHTML = `5*`;
    a.item(15).innerHTML = `16*`;
    a.item(24).innerHTML = `25*`;
}
setTimeout(week, 100);

//  Показать матч в выбраный день
let day = document.querySelector("#date");

day.onclick = function (event) {
    let d = event.target.getAttribute('data-date');
    // var m = event.target.getAttribute('data-month') ; В этом примере не обязательно.
    // var y = event.target.getAttribute('data-year') ;  В этом примере не обязательно.

    let game = document.createElement('div');
    game.className = "game z-depth-1";
    let length = document.getElementById('date').children.length;
    let divCollection = document.getElementById('date').children;

    const Jan5 = "<strong>5 января 2018</strong> <p>Россия - Египет (Стадион Санкт-Петербург - СПб).</p>";
    const Jan16 = "<strong>16 января 2018</strong> <p>Испания - Италия (Стадион Лужники - Москва).</p>";
    const Jan25 = "<strong>25 января 2018</strong> <p>Чехия - Германия (Стадион Фишт - Сочи).</p>";

    switch (d) {
        case '5':

            if (length < 2) {
                game.innerHTML = Jan5;
                date.appendChild(game)
            } else {
                document.querySelector(".game").innerHTML = Jan5
            };
            break;

        case '16':

            if (length < 2) {
                game.innerHTML = Jan16;
                date.appendChild(game)
            } else {
                document.querySelector(".game").innerHTML = Jan16
            };
            break;

        case '25':

            if (length < 2) {
                game.innerHTML = Jan25;
                date.appendChild(game)
            } else {
                document.querySelector(".game").innerHTML = Jan25
            };
            break;
    }
    setTimeout(week, 100);
}