[![Maintainability](https://api.codeclimate.com/v1/badges/930caad48b51130a79af/maintainability)](https://codeclimate.com/github/Frit027/frontend-project-lvl3/maintainability)
[![Actions Status](https://github.com/Frit027/frontend-project-lvl3/workflows/hexlet-check/badge.svg)](https://github.com/Frit027/frontend-project-lvl3/actions)

<h1>
    <div align="right">
        <code><a href="#"><img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg" width="32" alt="English" title="English"/></a></code>
        <a href="README-RU.md"><img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ru.svg" width="32" alt="Russian" title="Russian"/></a>
    </div>
    RSS aggregator
</h1>

## About
The website is an [RSS aggregator](https://en.wikipedia.org/wiki/News_aggregator) that accepts a link to an RSS resource
and downloads all available news items.  
New posts from the added feed appear dynamically on the page.
The user can read a preview of the news item in a modal window or follow the link to the original news item.

## Try
The website is available at: https://frontend-project-lvl3-jade-one.vercel.app

#### Examples of RSS feeds to demonstrate how the application works
https://feeds.arstechnica.com/arstechnica/index - News about information technology  
https://lorem-rss.herokuapp.com/feed?unit=second - Updates every second

## Demonstration


## Dependencies
**Node.js** v12.22.9 or later.

## Installation and Usage
Clone the repository.  
In the project root run the commands:
```console
npm i
npm run build
```
Open the file [index.html](public/index.html) in your browser.

## Technologies
### Main
- [Javascript ES6](https://www.w3schools.com/js/js_es6.asp)
- [Bootstrap](https://getbootstrap.com/) `[5.0]`
### Module bundler
- [webpack](https://webpack.js.org/) `[5.74.0]`
