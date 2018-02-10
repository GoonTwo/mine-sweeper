# MineSweeper

A simple implementation of the classic mindsweepr game using React and Node.

to play: 

single click to uncover a block or double click (i.e. menu click) to place a flag. 

*Uncover all spots with no mines to win!*

## Features

* Mine flagging (click with 2 fingers)
* Timer (starts on first move)
* Block animations (CSS trnasisitons)
* Three possible difficulties (number of mines and blocks increases)
  * Easy: 10x10 board - 7 mines
  * Medium: 15x15 board - 25 mines
  * Hard: 20x20 board - 50 mines
* Testing outline (no implementation)

## Methodology
React componentes are split into two sub categoreies: `Components` and `Presentational`.

`Components`: Handle game logic and updating state. These components do not directly render anyhting to the DOM.

`Presentational`: Render HTML to the DOM and set event listeners.

This seperates our concerns and makes the components more modular and reusable.

Logic surrounding board creation (when the board is reset) and turn-taking is split into seperate modules. This keeps the components clean, readable, and improves testing.

## Todos
1. Write tests
2. Refactor util functions to be more pure and testable

## To Run

From the terminal, run the following commands:

Transpile:
```sh
npm run build
```

Start:
```sh
npm run start
```

## To Test

Using Jest:
```sh
npm run test
```