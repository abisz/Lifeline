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
        <h2>Runde {store.getState().round} <span className="cardsLeft">noch {getDeckSize(store.getState().deck)} Karten</span></h2>
        <div className="cardsWrapper">
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