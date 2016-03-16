import React from 'react';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.renderCalendarHeader = this.renderCalendarHeader.bind(this);
    this.renderCalendarDate = this.renderCalendarDate.bind(this);
    this.generateMonth = this.generateMonth.bind(this);
  }

  renderCalendarHeader() {
    return (
      <div className='picker-calendar-controls'>
        <p className='picker-calendar-header-prev clickable' onClick={this.props.goToPrevMonth}>
          &#60;
        </p>
        <div className='picker-calendar-header-month'>
          {this.props.monthDisplay}
        </div>
        <p className='picker-calendar-header-prev clickable' onClick={this.props.goToNextMonth}>
          &#62;
        </p>
      </div>
    );
  }

  renderDaysOfTheWeek() {
    return (
      <div className='picker-calendar-week-days'>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
    )
  }

  renderCalendarDate(date) {
    if(date) {
      const highlight = (this.props.highlight && this.props.selectedDate.toDateString() === date.toDateString()) ? 'picker-calendar-days clickable today':'picker-calendar-days clickable';

      return (<div className={highlight} onClick={this.props.selectDate.bind(null, date)}>{date.getDate()}</div>);
    }

    return (<div className='picker-calendar-days-empty' disabled>&nbsp;</div>);
  }

  renderCalendarContent() {
    const calendar = this.calendar();

    return (
      <div className='picker-calendar-weeks-wrapper'>
        <div id='calendar-wrapper'>
          {calendar.map(dates => {
            return (
              <div className='picker-calendar-weeks'>
                {dates.map(date => {
                  return this.renderCalendarDate(date);
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  initializeCalendar() {
    let calendar = new Array(6);
    let index = 0;

    while(index < calendar.length) {
      calendar[index] = [null, null, null, null, null, null, null];

      index++;
    }

    return calendar;
  }

  generateMonth(calendar, day, date) {
    calendar.forEach((week, row) => {
      let position = 0;

      while(position <= 6 && date.getMonth() === this.props.month) {
        if (date.getDay() === position) {
          calendar[row][position] = date;
          day++;

          date = new Date(this.props.year, this.props.month, day);

          if ((position + 1) >= 6) {
            position = 0;
          }
        }

        position++;
      }
    });

    return calendar;
  }

  calendar() {
    let calendar = this.initializeCalendar();
    let day = 1;
    let date = new Date(this.props.year, this.props.month, day);

    return this.generateMonth(calendar, day, date);
  }

  render() {
    return (
      <div className="picker-calendar">
        <div className='picker-calendar-header'>
          {this.renderCalendarHeader()}
          {this.renderDaysOfTheWeek()}
        </div>
        {this.renderCalendarContent()}
      </div>
    );
  }
}