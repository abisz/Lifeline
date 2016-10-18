var Deck = React.createClass({
  nextCard: function () {
    if ( ! store.getState().gameOver ) {
      store.dispatch({ type: 'DRAW' });
    }
  },

  render: function () {
    return (
      <div>
        <button
          onClick={this.nextCard}
        >Next Card</button>
      </div>
    );
  }
});