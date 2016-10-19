const startState = {
  deck: {
    one: 29,
    two: 39,
    three: 17,
    doomsday: 1,
    firstPlayerEvent: 1,
    lastPlayerEvent: 1,
    doubleOrNothing: 2,
    everyOneLoses: 1
  },

  safeCards: {
    one: 5,
    two: 5,
    three: 1
  },

  round: 0,

  gameOver: false,

  colorMode: 1
};

const deckReducer = (state, action) => {

  if (typeof state === 'undefined') {
    state = Object.assign({}, startState);
    state.deck = Object.assign({}, startState.deck);
    state.safeCards = Object.assign({}, startState.safeCards);
  }

  switch (action.type) {
    case 'DRAW':
      var randomCard = getRandomCard(state);

      var newState = Object.assign({}, state);
      newState.round++;

      if (isSafe(state)) {
        newState.safeCards[randomCard]--;
      } else {
        newState.deck[randomCard]--;
      }

      newState.current = randomCard;
      if (randomCard === 'doomsday') newState.gameOver = true;

      newState.colorMode = state.colorMode === 1 ? 2 : 1;

      console.log(newState);
      return newState;
      break;

    case 'RESET':
      var resetState = Object.assign({}, startState);
      resetState.deck = Object.assign({}, startState.deck);
      resetState.safeCards = Object.assign({}, startState.safeCards);
      console.log(resetState);
      return resetState;

    default:
      console.log('Action not known');
      return state;
  }
};

function getTotalSize (state) {
  return getDeckSize(state.deck) + getDeckSize(state.safeCards);
}

function getDeckSize (deck) {
  let counter = 0;
  for (let type in deck) {
    if(deck.hasOwnProperty(type)) counter += deck[type];
  }

  return counter;
}

function isSafe (state) {
  return getDeckSize(state.safeCards);
}

function getRandomCard (state) {
  let counter = 0;

  const deck = getDeckSize(state.safeCards) ? state.safeCards : state.deck;

  const random = Math.random() * getDeckSize(deck);

  for (let type in deck) {
    if (deck.hasOwnProperty(type)) {
      if ( counter < random && random < ( deck[type] + counter ) ) return type;
      counter += deck[type];
    }
  }
}

const { createStore } = Redux;
const store = createStore(deckReducer);

const render = () =>  {

  ReactDOM.render(
    <Game/>,
    document.getElementById('root')
  );
};

render();


store.subscribe(render);