const startState = {
  deck: {
    one: 30,
    two: 40,
    three: 20,
    doomsday: 1,
    firstPlayerEvent: 1,
    lastPlayerEvent: 1,
    doubleOrNothing: 2
  },

  round: 0,

  gameOver: false
};

const deckReducer = (state, action) => {

  if (typeof state === 'undefined') {
    state = Object.assign({}, startState);
    state.deck = Object.assign({}, startState.deck);
  }

  switch (action.type) {
    case 'DRAW':
      var randomCard = getRandomCard(state);
      while (state.round <= 12 && randomCard === 'doomsday') {
        randomCard = getRandomCard(state);
      }

      var newState = Object.assign({}, state);
      newState.round++;
      newState.deck[randomCard]--;
      newState.current = randomCard;
      if (randomCard === 'doomsday') newState.gameOver = true;

      console.log(newState);
      return newState;
      break;

    case 'RESET':
      var resetState = Object.assign({}, startState);
      resetState.deck = Object.assign({}, startState.deck);
      console.log(resetState);
      return resetState;

    default:
      console.log('Action not known');
      return state;
  }
};

function getDeckSize (deck) {
  let counter = 0;
  for (let type in deck) {
    if(deck.hasOwnProperty(type)) counter += deck[type];
  }
  return counter;
}

function getRandomCard (state) {
  const random = Math.random() * getDeckSize(state.deck);
  let counter = 0;

  for (let type in state.deck) {
    if (state.deck.hasOwnProperty(type)) {
      if ( counter < random && random < ( state.deck[type] + counter ) ) return type;
      counter += state.deck[type];
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