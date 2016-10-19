var Game = React.createClass({

  reset: function () {
    store.dispatch({ type: 'RESET' });
  },

  isSave: function () {
    return isSafe(store.getState());
  },

  render: function () {
    return (
      <div className={ this.isSave() ? 'game-container safe' : 'game-container' }>
        <h1>Lifeline</h1>
          <div className="cardsWrapper">
          <h2>Round {store.getState().round} ({getDeckSize(store.getState().deck)} Cards left)</h2>
          <Deck/>
          <CurrentCard/>
        </div>
        <button
        onClick={this.reset}
        >Reset Game</button>
      </div>
    )
  }
});