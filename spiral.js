const horizontal = [19, 6, 1, 2, 11];
const vertical = [15, 4, 1, 8, 23];
const diagonal_Left = [17, 5, 1, 9, 25];
const diagonal_Right = [21, 7, 1, 3, 13];

//REQUIRED NUMBER = 289326

///From this initial data, I found that the difference between each number was 8 more than the previous one.
//Therefore, to generate the numbers I would need to take the last number and add the current difference, plus 8

function spiralGenerator(array) {
  for (let i = 0; i < 268; i++) {
    /// trial and error for loop to be 268, this gave me the max numbers I wanted
    let currentFirst = array[0];
    let currentLast = array[array.length - 1];
    let currentDiffLeft = currentFirst - array[1];
    let currentDiffRight = currentLast - array[array.length - 2];

    array.unshift(currentFirst + currentDiffLeft + 8);
    array.push(currentLast + currentDiffRight + 8);
  }

  return array;
}

const newVertical = spiralGenerator(vertical);
const newHorizontal = spiralGenerator(horizontal);
const newDiagonal_Left = spiralGenerator(diagonal_Left);
const newDiagonal_Right = spiralGenerator(diagonal_Right);

//From these new arrays, the outer square I wanted looked like this

//[289445, 289176, 288907]
//[289714, 1, 288638]
//[289983, 290252, 290521]

// I know that my number, 289326, lives on the top row between 289445 and 289176, so there's 150 spaces right to the middle

const downSpaces = newVertical.indexOf(1) - 1; //to work out the space vertically down to the entry port, 1.

const answer = 150 + downSpaces;

console.log(answer);

module.exports = {
  spiralGenerator,
};
