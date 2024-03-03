
// import React, { useState, useEffect } from 'react';
// import './WordSearchGame.css';

// const WordSearchGame = () => {
//   const [grid, setGrid] = useState([]);
//   const [words, setWords] = useState([]);
//   const [selectedCells, setSelectedCells] = useState([]);
//   const [score, setScore] = useState(0);
//   const [level, setLevel] = useState(1);
//   const gridSize = 8;

//   const levels = [
//     { words: ['CHILD', 'PARENT', 'POWER', 'BOOK', 'BAG'], gridSize: 10 },
//     { words: ['TEACHER', 'RIGHTS', 'FREEDOM', 'EDUCATION', 'EMPOWERMENT'], gridSize: 10 },
//     // Add more levels as needed
//   ];

//   useEffect(() => {
//     // Initialize the grid and words for the current level
//     const currentLevel = levels[level - 1];
//     const newGrid = Array.from({ length: currentLevel.gridSize }, () =>
//       Array.from({ length: currentLevel.gridSize }, () =>
//         String.fromCharCode(65 + Math.floor(Math.random() * 26))
//       )
//     );
//     setGrid(newGrid);
//     setWords(currentLevel.words);
//   }, [level]);

//   const handleCellClick = (row, col) => {
//     // Toggle the selected state of the cell
//     const newSelectedCells = [...selectedCells];
//     const isSelected = newSelectedCells.some(
//       (cell) => cell.row === row && cell.col === col
//     );

//     if (isSelected) {
//       setSelectedCells(newSelectedCells.filter((cell) => !(cell.row === row && cell.col === col)));
//     }
//     else {
//       setSelectedCells([...newSelectedCells, { row, col }]);
//     }
//   };

//   const checkSelectedWords = () => {
//     const selectedWord = selectedCells.map(
//       (cell) => grid[cell.row][cell.col]
//     ).join('');

//     if (words.includes(selectedWord)) {
//       setScore(score + selectedWord.length);
//       setSelectedCells([]);
//     }
//   };

//   const handleLevelChange = () => {
//     setLevel((prevLevel) => (prevLevel < levels.length ? prevLevel + 1 : 1));
//     setScore(0);
//     setSelectedCells([]);
//   };

//   const renderGrid = () => {
//     return grid.map((row, rowIndex) => (
//       <div key={rowIndex} className="grid-row">
//         {row.map((cell, colIndex) => (
//           <div
//             key={colIndex}
//             className={`grid-cell ${selectedCells.some(
//               (selectedCell) =>
//                 selectedCell.row === rowIndex && selectedCell.col === colIndex
//             ) ? 'selected' : ''}`}
//             onClick={() => handleCellClick(rowIndex, colIndex)}
//           >
//             {cell}
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div className="edu">
//       <div className="word-search-game">
//         <div className="scoreboard">
//           <div className="score">Score: {score}</div>

//           <div className="level">Level: {level}</div>

//           <button onClick={handleLevelChange}>Next Level</button>
//           <br />

//         </div>
//         <div className="grid">{renderGrid()}</div>
//         <div className="word-list">
//           <h3>WORD LIST:</h3>
//           <ul>
//             {words.map((word, index) => (
//               <li key={index} className={selectedCells.length === word.length && selectedCells.every((cell, i) => cell.row === index && cell.col === i) ? 'found' : ''}>
//                 {word}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <br />
//         <button onClick={checkSelectedWords}>Check score of Selected Word</button>
//       </div>
//       </div>
//       );
// };

// export default WordSearchGame;



import React, { Component } from 'react';
import './WordSearchGame.css';

const gridSize = 10;
const wordList = ["EDUCATION", "EMPOWER", "COURAGE", "FREEDOM", "CHILD"];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class App extends Component {
  state = {
    grid: [],
    score: 0,
    selectedWords: [],
    currentSelection: [],
  };

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    let grid = this.generateEmptyGrid();
    this.placeWordsInGrid(grid);
    this.fillGridWithRandomLetters(grid);
    this.setState({ grid });
  };

  generateEmptyGrid = () => {
    return Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => ''));
  };

  placeWordsInGrid = (grid) => {
    wordList.forEach(word => {
      let placed = false;
      while (!placed) {
        const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (this.canPlaceWord(grid, word, row, col, direction)) {
          for (let i = 0; i < word.length; i++) {
            if (direction === 'horizontal') grid[row][col + i] = word[i];
            else grid[row + i][col] = word[i];
          }
          placed = true;
        }
      }
    });
  };


  canPlaceWord = (grid, word, row, col, direction) => {
    const len = word.length;
    if (direction === 'horizontal' && col + len > gridSize) return false;
    if (direction === 'vertical' && row + len > gridSize) return false;
    for (let i = 0; i < len; i++) {
      if (direction === 'horizontal' && grid[row][col + i] !== '') return false;
      if (direction === 'vertical' && grid[row + i][col] !== '') return false;
    }
    return true;
  };

  fillGridWithRandomLetters = (grid) => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (grid[row][col] === '') {
          grid[row][col] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
      }
    }
  };

  handleCellClick = (row, col) => {
    const newSelection = { row, col, letter: this.state.grid[row][col] };
    this.setState(prevState => ({
      currentSelection: [...prevState.currentSelection, newSelection]
    }), this.checkSelection);
  };

  checkSelection = () => {
    const { currentSelection, selectedWords } = this.state;
    const selectionString = currentSelection.map(cell => cell.letter).join('');

    const foundWord = wordList.find(word => {
      return word === selectionString && !selectedWords.includes(word);
    });

    if (foundWord) {
      this.setState(prevState => ({
        score: prevState.score + foundWord.length * 10,
        selectedWords: [...prevState.selectedWords, foundWord],
        currentSelection: [] // Clear current selection after a word is found
      }));
    }
  };

  renderGrid = () => {
    const { currentSelection, grid } = this.state;
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => {
          const isSelected = currentSelection.some(selection => selection.row === rowIndex && selection.col === cellIndex);
          return (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`cell ${isSelected ? 'selected' : ''}`}
              onClick={() => this.handleCellClick(rowIndex, cellIndex)}
            >
              {cell}
            </div>
          );
        })}
      </div>
    ));
  };

  render() {
    const { score } = this.state;
    return (
      <div className='edu'>
        <div className="App">
          <h1>WORD PUZZLE GAME</h1>
          <div className="game-layout">
            <div className="wordlist">
              <h2>Words</h2>
              <ul>{wordList.map((word, index) => <li key={index}>{word}</li>)}</ul>
            </div>
            <div className="grid">{this.renderGrid()}</div>
          </div>
          <div className="scoreboard">
            <h2>Score</h2>
            <p>{score}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
