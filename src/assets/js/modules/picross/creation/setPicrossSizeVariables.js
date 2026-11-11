// Gives the CSS what it needs to size the board for any viewport:
// the grid size and how much room the clues need, in "cells".
// The clue font is half a cell (see _values.scss), so 1em = 0.5 cell.
const EM_IN_CELLS = 0.5;
const DIGIT_WIDTH = 0.6; // em
const NUMBER_GAP = 0.4; // em, matches the `gap` of the row clues
const ROW_CLUES_PADDING = 1; // em, left + right padding
const LINE_HEIGHT = 1.15; // em, matches the clues line-height
const COLUMN_CLUES_PADDING = 0.6; // em, top + bottom padding

// The top-left cell also holds the timer, so the clue areas never get too small.
const MIN_CLUES_WIDTH = 2.2; // cells
const MIN_CLUES_HEIGHT = 1.3; // cells

function getClues(numbers) {
  return numbers.length > 0 ? numbers : [0];
}

function getRowCluesWidth(rowNumbers) {
  const widths = rowNumbers.map(numbers => {
    const clues = getClues(numbers);
    const digits = clues.join('').length;
    const em = digits * DIGIT_WIDTH + (clues.length - 1) * NUMBER_GAP + ROW_CLUES_PADDING;

    return em * EM_IN_CELLS;
  });

  return Math.max(MIN_CLUES_WIDTH, ...widths);
}

function getColumnCluesHeight(columnNumbers) {
  const heights = columnNumbers.map(numbers => {
    const em = getClues(numbers).length * LINE_HEIGHT + COLUMN_CLUES_PADDING;

    return em * EM_IN_CELLS;
  });

  return Math.max(MIN_CLUES_HEIGHT, ...heights);
}

export default function setPicrossSizeVariables(width, height, rowNumbers, columnNumbers) {
  const picross = document.querySelector('[data-picross]');

  picross.style.setProperty('--picross-columns', width);
  picross.style.setProperty('--picross-rows', height);
  picross.style.setProperty('--picross-clues-width', getRowCluesWidth(rowNumbers).toFixed(2));
  picross.style.setProperty('--picross-clues-height', getColumnCluesHeight(columnNumbers).toFixed(2));
}
