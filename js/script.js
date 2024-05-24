/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const add = document.querySelectorAll('.promo__adv img'),
    marsianinGener = document.querySelector('.promo__genre'),
    marsianinBackground = document.querySelector('.promo__bg');
let interactiveFilmList = document.querySelector('.promo__interactive-list'); 
    
add.forEach(item => {
    item.remove();
})

marsianinGener.innerHTML = 'драма';

marsianinBackground.style.cssText = 'background: url(../img/bg.jpg) center center / cover no-repeat';

interactiveFilmList.innerHTML = '';

const moviesLength = movieDB.movies.length;

function filmSorting(a, b) {
    return a.localeCompare(b);
};

let sortedMovies = movieDB.movies.sort(filmSorting);

sortedMovies.forEach((item, i) => {
    interactiveFilmList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}.${item}
    <div class="delete"></div>
</li>`
})