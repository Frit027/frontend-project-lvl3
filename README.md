[![Actions Status](https://github.com/Frit027/frontend-project-lvl3/workflows/hexlet-check/badge.svg)](https://github.com/Frit027/frontend-project-lvl3/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/930caad48b51130a79af/maintainability)](https://codeclimate.com/github/Frit027/frontend-project-lvl3/maintainability)

# RSS-агрегатор

## Описание
Проект представляет собой веб-сайт с реализованным [RSS-агрегатором](https://ru.wikipedia.org/wiki/RSS-агрегатор) и доступен
по [ссылке](https://frontend-project-lvl3-jade-one.vercel.app/).  
Код проекта написан на основе паттерна [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller).

### Примеры данных для проверки работы
- [RSS-канал](https://74.ru/text/rss.region.xml) новостного сайта г. Челябинск;
- [генератор RSS-каналов](https://github.com/mbertolacci/lorem-rss), обновляемые через регулярные промежутки времени.

## Минимальные требования
- Node.js v12.22.9 или выше;
- установленный пакет [make](https://www.npmjs.com/package/make).

## Инструкция по установке и запуску
- клонировать репозиторий;
- выполнить команды:
    - make install;
    - npm run build.

## Технологии
### Frontend
- [Javascript ES6](https://www.w3schools.com/js/js_es6.asp)
- [Bootstrap](https://getbootstrap.com/) `[5.0]`
### Сборщик модулей
- [webpack](https://webpack.js.org/) `[5.74.0]`