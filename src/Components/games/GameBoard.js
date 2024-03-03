// Combined.js

import React from 'react';
import './GameBoard.css';

const Data = [
  {
    id: 1,
    name: "react",
    img: "/images/RTedu.jpeg",
    matched: false,
  },
  {
    id: 2,
    name: "java",
    img:
      "/images/RTdev.png",
    matched: false,
  },
  {
    id: 3,
    name: "css",
    img:
      "/images/RTdis.jpeg",
    matched: false,
  },
  {
    id: 4,
    name: "node",
    img:
      "/images/RTpro.jpeg",
    matched: false,
  },
  {
    id: 5,
    name: "html",
    img:
      "/images/RTpar.png",
    matched: false,
  },
  {
    id: 6,
    name: "js",
    img:
      "/images/RTsur.jpeg",
    matched: false,
  },
  {
    id: 7,
    name: "react",
    img: "/images/RTedu.jpeg",
    matched: false,
  },
  {
    id: 8,
    name: "java",
    img:
      "/images/RTdev.png",
    matched: false,
  },
  {
    id: 9,
    name: "css",
    img:
      "/images/RTdis.jpeg",
    matched: false,
  },
  {
    id: 10,
    name: "node",
    img:
      "/images/RTpro.jpeg",
    matched: false,
  },
  {
    id: 11,
    name: "html",
    img:
      "/images/RTpar.png",
    matched: false,
  },
  {
    id: 12,
    name: "js",
    img:
      "/images/RTsur.jpeg",
    matched: false,
  },

];

// function Card({ item, handleSelectedCards, toggled, stopflip }) {
//   return (
//     <div className="item">
//       <div className={toggled ? "toggled" : ""}>
//         <img className="face" src={item.img} alt="face" />
//         <div
//           className="back"
//           onClick={() => !stopflip && handleSelectedCards(item)}
//         >
//           {" "}
//         </div>
//       </div>
//     </div>
//   );
// }

// function GameBoard() {
//   const [cardsArray, setCardsArray] = React.useState([]);
//   const [moves, setMoves] = React.useState(0);
//   const [firstCard, setFirstCard] = React.useState(null);
//   const [secondCard, setSecondCard] = React.useState(null);
//   const [stopFlip, setStopFlip] = React.useState(false);
//   const [won, setWon] = React.useState(0);

//   function NewGame() {
//     setTimeout(() => {
//       const randomOrderArray = Data.sort(() => 0.5 - Math.random());
//       setCardsArray(randomOrderArray);
//       setMoves(0);
//       setFirstCard(null);
//       setSecondCard(null);
//       setWon(0);
//     }, 1200);
//   }

//   function handleSelectedCards(item) {
//     if (firstCard !== null && firstCard.id !== item.id) {
//       setSecondCard(item);
//     } else {
//       setFirstCard(item);
//     }
//   }

//   React.useEffect(() => {
//     if (firstCard && secondCard) {
//       setStopFlip(true);
//       if (firstCard.name === secondCard.name) {
//         setCardsArray((prevArray) => {
//           return prevArray.map((unit) => {
//             if (unit.name === firstCard.name) {
//               return { ...unit, matched: true };
//             } else {
//               return unit;
//             }
//           });
//         });
//         setWon((preVal) => preVal + 1);
//         removeSelection();
//       } else {
//         setTimeout(() => {
//           removeSelection();
//         }, 1000);
//       }
//     }
//   }, [firstCard, secondCard]);

//   function removeSelection() {
//     setFirstCard(null);
//     setSecondCard(null);
//     setStopFlip(false);
//     setMoves((prevValue) => prevValue + 1);
//   }

//   React.useEffect(() => {
//     NewGame();
//   }, []);

//   return (
//      <div>
//       <div className="sam">
//         <h1 className="mg-heading">Memory Game</h1>
//       </div>
//       <div className="board">
//         {cardsArray.map((item) => (
//           <Card
//             item={item}
//             key={item.id}
//             handleSelectedCards={handleSelectedCards}
//             toggled={
//               item === firstCard ||
//               item === secondCard ||
//               item.matched === true
//             }
//             stopflip={stopFlip}
//           />
//         ))}
//       </div>

//       {won !== 6 ? (
//         <div className="comments">Moves : {moves}</div>
//       ) : (
//         <div className="comments">
//           You Won in {moves} moves
//         </div>
//       )}
//       <button className="button" onClick={NewGame}>
//         New Game
//       </button>
//       {/* <Link to ="/Memory " className="btn btn-primary">Start the Game</Link> */}
//     </div>

//   );
// }

// export default GameBoard;

function Card({ item, handleSelectedCards, toggled, stopflip }) {
  return (
    <div className="item">
      <div className={toggled ? "toggled" : ""}>
        <img className="face" src={item.img} alt="face" />
        <div
          className="back"
          onClick={() => !stopflip && handleSelectedCards(item)}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

function GameBoard() {
  const [cardsArray, setCardsArray] = React.useState([]);
  const [moves, setMoves] = React.useState(0);
  const [firstCard, setFirstCard] = React.useState(null);
  const [secondCard, setSecondCard] = React.useState(null);
  const [stopFlip, setStopFlip] = React.useState(false);
  const [won, setWon] = React.useState(0);

  function NewGame() {
    setTimeout(() => {
      const randomOrderArray = Data.sort(() => 0.5 - Math.random());
      setCardsArray(randomOrderArray);
      setMoves(0);
      setFirstCard(null);
      setSecondCard(null);
      setWon(0);
    }, 1200);
  }

  function handleSelectedCards(item) {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  }

  React.useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true };
            } else {
              return unit;
            }
          });
        });
        setWon((preVal) => preVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  function removeSelection() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  }

  React.useEffect(() => {
    NewGame();
  }, []);

  return (
    <div className="edu">
      <div className="memMain">
        <div className="header">
          <h1 className="mg-heading">Memory Game</h1>
        </div>
        <div className="board">
          {cardsArray.map((item) => (
            <Card
              item={item}
              key={item.id}
              handleSelectedCards={handleSelectedCards}
              toggled={
                item === firstCard || item === secondCard || item.matched === true
              }
              stopflip={stopFlip}
            />
          ))}
        </div>
        <br/>
        {won !== 6 ? (
          
          <div className="comments">Moves: {moves}</div>
        ) : (
          <div className="comments">You Won in {moves} moves!</div>
        )}
        <br/>
        <button className="button" onClick={NewGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default GameBoard;