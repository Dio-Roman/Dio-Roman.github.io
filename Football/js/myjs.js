"use strict";

//  Выделить дни матчей
let a = document.getElementsByClassName("datepicker--cell-day");


function week() {
    let date = new Date();
    date.setDate(1);
    let dayPosition = date.getDay();
    let addCell;

    if (dayPosition == 0) {
        addCell = 6;
    } else {
        addCell = dayPosition-1;
    }
    
    a.item(addCell+4).innerHTML = `5*`;
    a.item(addCell+15).innerHTML = `16*`;
    a.item(addCell+24).innerHTML = `25*`;

    return date.toLocaleString('ru', {month: 'long'});
}
setTimeout(week, 100);

//  Показать матч в выбраный день
let day = document.querySelector("#date");

day.onclick = function (event) {
    let d = event.target.getAttribute('data-date');

    let game = document.createElement('div');
    game.className = "game z-depth-1";
    let length = document.getElementById('date').children.length;
    console.log(document.getElementById('date').children);

    const date5 = `<strong>5 ${week()} 2018</strong> <p>Россия - Египет (Стадион Санкт-Петербург - СПб).</p>`;
    const date16 = `<strong>16 ${week()} 2018</strong> <p>Испания - Италия (Стадион Лужники - Москва).</p>`;
    const date25 = `<strong>25 ${week()} 2018</strong> <p>Чехия - Германия (Стадион Фишт - Сочи).</p>`;

    switch (d) {
        case '5':

            if (length < 2) {
                game.innerHTML = date5;
                date.appendChild(game)
            } else {
                document.querySelector(".game").innerHTML = date5
            };
            break;

        case '16':

            if (length < 2) {
                game.innerHTML = date16;
                date.appendChild(game)
            } else {
                document.querySelector(".game").innerHTML = date16
            };
            break;

        case '25':

            if (length < 2) {
                game.innerHTML = date25;
                date.appendChild(game)
            } else {
                document.querySelector(".game").innerHTML = date25
            };
            break;
    }
    setTimeout(week, 100);
}