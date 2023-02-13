!!! CURRENT BUGS:

-   Radio button dots not filling properly on responsive screen sizes sub 900px width
-   Seek again button broken on game over page
-   User persistence JWT token not currently set up; login or refresh to play again.
-   Various responsive screen size issues.
-   Should player guess soup correctly on first souple, the soup card will load the same three soups again on the following souple.

# Deployed Link

https://soup-seeker.netlify.app/

\*\*\* This link represents an unfinished version of the app and may not be mobile-responsive depending on your device. If you have any suggestions, concerns, or comments, please feel free to contact me and fill me in!

## About

Soup Seeker is a Wordle spinoff (a "souple", if you will) that adds a slight twist to the regular Wordle formula. In Soup Seeker, players must not only guess the correct five-letter-word, but also choose the soup displayed on the screen with each word they concoct. Should they get nine soups correct without ever failing the Wordle, they become the Soup Lord; should they fail the Wordle without getting nine soups correct, they shall simply remain a soup-wolfing peasant.

## Why

I created Soup Seeker to work on two primary skillsets I consider vital to my growth as a starting developer:

    - Becoming more comfortable in React, especially changing states across components, using useEffect, and using App Contexts.
    - Becoming more comfortable with vanilla JavaScript puzzles and algorithms that encourage website interactivity, of which I wanted Soup Seeker to have plenty of.

## Challenges

Soup Seeker presented a number of challenges throughout its development cycle. Below some of (but certainly not all) of those challenges are listed in bullet format:

    - Creating consistent states across components that would provide for the board-tracking I desired without crossover effects.
    - Creating a presentable style card for the board that would allow all components to fit on a single screen.
    - Generating and regenerating a correct word and matching it to the looped current word entered by user; I spent a significant amount of time trying to figure out why the current/correct were not matching before determining that there was unknown white space.
    - Building a responsive app was/is/continues to be a large process in learning/relearning CSS; this is why things are designed mobile first.
