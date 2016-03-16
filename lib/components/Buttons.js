import React from 'react';

export default class Buttons extends React.Component {
  renderButtons() {
    return (
      <div className="picker-buttons-wrapper">
        <div className="picker-buttons">
          <button className="picker-button" onClick={this.props.nextDays.bind(null, 7)}>Next 7 days</button>
          <button className="picker-button" onClick={this.props.nextDays.bind(null, 15)}>Next 15 days</button>
          <button className="picker-button" onClick={this.props.nextDays.bind(null, 30)}>Next 30 days</button>
        </div>
      </div>
    );
  }

  render() {
    return (this.renderButtons());
  }
}