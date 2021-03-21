# PicrossJs

<h1 align="center">
  <a href="https://picrossuniverse.netlify.app/">	
    <img alt="Picross Universe" title="Picross Universe" src="/docs/logo.png" />
  </a>
</h1>

<p align="center">
  <strong >
    A random generate Picross game web application. <br>
    <a href="https://picrossuniverse.netlify.app/">Click here</a> for a live version.
  </strong>  
</p>
<br>

<p align="center">
  <a href="#star2-Features"><strong>Features</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#speech_balloon-About"><strong>About</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-Layout"><strong>Layout</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#robot-Technologies-and-Tools"><strong>Technologies</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man_technologist-Running-Locally"><strong>Running Locally</strong></a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-License"><strong>License</strong></a>
</p>

<a href="https://picrossuniverse.netlify.app/">	
  <img src="/docs/icon.png" align="right" />
</a>

##  :star2: Features:
- <strong>Generate random picross games:</strong> You can generate games from 5x5 up to 30x30 with random values, you are totally free to match any number between 5 and 30.<br>
For example: You can create a 12x24 game.

- <strong>Clear Picross Values:</strong> Clear all the marked squares and try again from scratch.

- <strong>Auto fill completed lines:</strong> If the option is checked, lines that have the requirements completed, will be automatic filled with crossed squares, making things easy to see.

- <strong>PWA:</strong> This project has progressive web app support, so you can install it on your phone and computer, this will allow you to launch it from your home screen. If you wish to install it, just click on the third button on the left (the one with the downside arrow).

- <strong>Responsive layout:</strong> Even thought the game was first made to be played on a computer's screen, the layout was optimized for mobile users. It will be a little harder to play bigger size games on a small screen because there will be a lot of squares to take note of, but it is still totally viable.

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :speech_balloon: About:

<a href="https://picrossuniverse.netlify.app/">	
  <img src="/docs/layout-preview.png" />
</a>

### What is a picross?

Picross, also know as Nonograms, are picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the side of the grid to reveal a hidden picture.
In this puzzle type, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive sets - [Wikipedia](https://en.wikipedia.org/wiki/Nonogram)

### Why did I decide to do this project?

I always loved puzzle and logic related games like Sudoku, Sokoban and Picross.
<br>
Since I really wanted to do something that could be challenging and could help me improve my logic, JS and CSS skills, I decided to recreate a game that would use a bunch of logic and that would put me out of my comfort zone.
<br>
While thinking about my options, I notice that I had no idea how it was to work with mouse events on JS (aside from the vanilla click), so the Picross seemed like a good way to take a real challenge.

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :art: Layout:

I created the base layout using Figma. 

<a href="https://www.figma.com/file/bgFxNN47lpezdBnIxyQPSK/Picross-Universe?node-id=332%3A10">	
  <img src="/docs/layout-figma.png" />
</a>

You can **[click here](https://www.figma.com/file/bgFxNN47lpezdBnIxyQPSK/Picross-Universe?node-id=332%3A10)** to see the layout on Figma.
<br>
You can duplicate this layout to own Figma account and use it as you wish by **[clicking here](https://www.figma.com/file/bgFxNN47lpezdBnIxyQPSK/Picross-Universe/duplicate)**. Just remember you must have a Figma account and be logged in.

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :robot: Technologies and Tools
<p>Technologies:</p>

-  HTML, CSS and JS
-  [Yarn](https://yarnpkg.com/)
-  [Parcel Bundler](https://parceljs.org/)
-  [Sass](https://sass-lang.com/)

<p>Tools: </p>

-  [VS Code](https://code.visualstudio.com/)
-  [Normalize](https://necolas.github.io/normalize.css/)
-  [IconMoon](https://icomoon.io/)
-  [Figma](https://www.figma.com/)
-  [PWAbuilder](https://www.pwabuilder.com/imageGenerator)
-  [RealFaviconGenerator](https://realfavicongenerator.net/)

For the confetti animation on the winning screen, I used the [confetti.js](https://github.com/mathusummut/confetti.js) created by [mathusummut](https://github.com/mathusummut).

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :man_technologist: Running Locally
<p>You must have <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Git</a>, <a href="https://nodejs.org/en/">Node</a> and <a href="https://yarnpkg.com/">Yarn</a> installed.

On your favorite terminal, run the following commands:

```bash
# Install Parcel Bundler:
$ yarn global add parcel-bundler

# Clone the repository
$ git clone https://github.com/LuanSergio/PicrossUniverse.git

# Navigate to the repository
$ cd PicrossUniverse

# Install dependencies
$ yarn install 

# Run the aplication locally and have fun coding
$ yarn start

# Build the aplication for production
$ yarn build
```

<div align="center">
  <img  src="/docs/division.png" />
</div>

## :memo: License
This project is under the MIT license.
**[Click here for more information](LICENSE)**.
