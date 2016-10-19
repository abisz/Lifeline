var Deck = React.createClass({
  nextCard: function () {
    if ( ! store.getState().gameOver ) {
      store.dispatch({ type: 'DRAW' });
    }
  },

  render: function () {
    return (
      <div>
        <div className="card nextCard noselect"
          onClick={this.nextCard}
        >Nächste Karte</div>
      </div>
    );
  }
});