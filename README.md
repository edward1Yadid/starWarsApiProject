
#     starWarsApiProject

Welcome to The Star Wars API Project! This project is a web-based platform that allows users to explore and find various  details by using a third-party API.

## Overview

The Cooking Recipes Project is a web application that provides a platform for users to discover a wide range of cooking recipes. Utilizing a third-party API, users can search for recipes based on categories, and making it easier to find their desired recipes.

## Features

1. Character Information:
Fetches and displays detailed information about Star Wars characters, including their name, birth year, height, mass, and more.

2. Vehicles Information:
Fetches and displays detailed information about Star Wars vehicles, including their name, model, manufacturer, and more.

3. Starships Information:
Fetches and displays detailed information about Star Wars starships, including their name, model, manufacturer, and more.

4. Films Information:
Fetches and displays detailed information about Star Wars films, including their title, director, release date, and more.

5. Interactive Interface:

Provides a user-friendly interface designed for desktop use, allowing users to easily browse and explore the Star Wars information for characters, vehicles, starships, and films.

## Prerequisites

1. Web browser
2. Stable internet connection

## Installation
To use the Star Wars API Project, follow these steps:

1. Clone the Repository:

git clone https://edward1yadid.github.io/starWarsApiProject/

## Usage
1. View Star Wars Films:
Open the index.html file in a web browser.


2. View Star Wars Films:
Once the application is loaded, it will fetch Star Wars people from the Star Wars API and display them on the page.
(films,starships,vehicles,homeworld)


## API Integration
This project utilizes starwar API to fetch people. starwar api offers a free API without requiring an API key. Here's how you can integrate starwar API into the project:

1. Use starwar API:
You can make HTTP requests to these endpoints directly from your JavaScript code.

2. Example API Request:
Below is an example of how you can make an API request to fetch a list of meal categories using JavaScript's Fetch API.

const apiUrl = 'https://swapi.dev/api/films/';

async function fetchStarWarsFilms() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching Star Wars films:', error);
    }
}

// Function to display Star Wars films
function displayStarWarsFilms(films) {
    const filmsContainer = document.getElementById('star-wars-films');
    films.forEach(film => {
        const filmItem = document.createElement('div');
        filmItem.classList.add('film-item');
        filmItem.textContent = `Title: ${film.title}, Director: ${film.director}`;
        filmsContainer.appendChild(filmItem);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const starWarsFilms = await fetchStarWarsFilms();
    displayStarWarsFilms(starWarsFilms);
});


This request fetches a list of meal categories from starwars api
3. Explore API Endpoints:
Refer to SWAPI API documentation for more details on available endpoints and how to structure requests to get specific PEOPLE data. Documentation:  SWAPI API Documentation - https://swapi.dev/


