var Game = React.createClass({

  reset: function () {
    store.dispatch({ type: 'RESET' });
  },

  render: function () {
    return (
      <div className="game-container">
        <h1>Lifeline</h1>
        <h2>Round {store.getState().round} ({getDeckSize(store.getState().deck)} Cards left)</h2>
        <Deck/>
        <CurrentCard/>
        <button
        onClick={this.reset}
        >Reset Game</button>
      </div>
    )
  }
});