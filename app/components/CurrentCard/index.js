var CurrentCard = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{ store.getState().current }</h1>
      </div>
    );
  }
});