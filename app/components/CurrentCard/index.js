var CurrentCard = React.createClass({
  render: function () {
    return (
      <div className="currentCard">
        <h1 className="number">{ store.getState().current }</h1>
      </div>
    );
  }
});