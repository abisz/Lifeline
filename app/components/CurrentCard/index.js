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

  getClassName: function () {
    const current = store.getState().current;
    let className = 'currentCard';

    if ( ! current ) return 'empty';

    switch (current) {
      case 'one':
      case 'two':
      case 'three':
        return className;
      case 'doomsday':
        return className + ' doomsday';
      default:
        return className + ' event';
    }

  },

  render: function () {
    return (
      <div className={ this.getClassName() }>
        <h1 className="number">{ this.getCardLabel() }</h1>
      </div>
    );
  }
});