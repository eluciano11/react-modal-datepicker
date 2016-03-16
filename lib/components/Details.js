import React from 'react';
import moment from 'moment';

export default class Details extends React.Component {
  render () {
    return (
      <div className="picker-selected-date">
        <div className="picker-date-information">
          <div className="picker-date-information-day">
            {this.props.date.getDate()}
          </div>
          <div className="picker-date-information-details">
            {moment(this.props.date).format('MMMM YYYY')}
            {moment(this.props.date).format('dddd')}
          </div>
        </div>
      </div>
    );
  }
}
