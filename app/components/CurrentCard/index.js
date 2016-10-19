var CurrentCard = React.createClass({

  getCardLabel: function () {

    if ( ! store.getState().current ) return;

    switch (store.getState().current) {
      case 'one':
        return '1';
      case 'two':
        return '2';
      case 'three':
        return '3';
      case 'doomsday':
        return '☠️';
      case 'firstPlayerEvent':
        return 'Die führende Person muss eine Runde aussetzen';
      case 'lastPlayerEvent':
        return 'Die letzte Person verliert eine Karte';
      case 'doubleOrNothing':
        return 'Jede Person kann entscheiden eine Karte zu verdoppeln/verlieren (Würfel)';
      case 'everyOneLoses':
        return 'Jede Person verliert die geringste Karte';
      default:
        return 'Unbekannte Karte';
    }

  },

  render: function () {
    return (
      <div>
        <h1>{ this.getCardLabel() }</h1>
      </div>
    );
  }
});