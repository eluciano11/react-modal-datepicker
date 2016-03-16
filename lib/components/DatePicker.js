import React from 'react';
import Calendar from './Calendar';
import Buttons from './Buttons';
import Details from './Details';

import moment from 'moment';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: props.initialMonth,
      year: props.initialYear,
      selectedDate: props.selectedDate,
      isOpen: props.isOpen
    };

    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.handlePrevMonth = this.handlePrevMonth.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.handleNextDays = this.handleNextDays.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.handleClosePicker = this.handleClosePicker.bind(this);
  }

  animationTimeout(id, className) {
    setTimeout(function() {
      const wrapper = document.getElementById(id);

      wrapper.className = className;
    }, 800);
  }

  handleSelectDate(date) {
    this.setState({
      selectedDate: date
   });

   this.props.handleSelectDate(date);
  }

  handleNextMonth() {
    const wrapper = document.getElementById('calendar-wrapper');

    wrapper.className += `magictime ${this.props.animationNext}`;

    if (this.state.month === 11) {
      this.setState({
        year: (this.state.year + 1),
        month: 0
      });
    } else {
      this.setState({
        month: (this.state.month + 1)
      });
    }

    this.animationTimeout('calendar-wrapper', '');
  }

  handlePrevMonth() {
    const wrapper = document.getElementById('calendar-wrapper');

    wrapper.className += `magictime ${this.props.animationPrev}`;

    if (this.state.month === 0) {
      this.setState({
        year: (this.state.year - 1),
        month: 11
      });
    } else {
      this.setState({
        month: (this.state.month - 1)
      });
    }

    this.animationTimeout('calendar-wrapper', '');
  }

  handleNextDays(days) {
    const currentDate = this.state.selectedDate;
    const futureDate = currentDate.getDate() + days;

    currentDate.setDate(futureDate);

    this.setState({
      selectedDate: currentDate
    });
  }

  handleClosePicker() {
    const wrapper = document.getElementById('picker-modal');

    wrapper.className = `picker-modal-wrapper magictime ${this.props.animationClose}`;

    setTimeout(() => {
      this.props.handleClosePicker();
    }, 650);
  }

  renderModal() {
    const modalClass = (this.props.isOpen) ? `picker-modal-wrapper magictime ${this.props.animationOpen}` : 'picker-modal-wrapper';

    if (this.props.isOpen) {
      return (
        <div className='picker-background'>
          <div className='picker-close'>
            <span className='clickable' onClick={this.handleClosePicker.bind(null)}>
              &times;
            </span>
          </div>
          <div className='picker-wrapper'>
            <div id='picker-modal' className={modalClass}>
              <h3>Select a date</h3>
              <hr/>
              <div className="picker-options">
                <Calendar
                  selectedDate={this.state.selectedDate}
                  month={this.state.month}
                  year={this.state.year}
                  highlight={this.props.highlightSelected}
                  monthDisplay={moment(new Date(this.state.year, this.state.month)).format('MMMM YYYY')}
                  goToNextMonth={this.handleNextMonth}
                  goToPrevMonth={this.handlePrevMonth}
                  selectDate={this.handleSelectDate}/>
                <div className="picker-information-wrapper">
                  <Details
                    date={this.state.selectedDate}/>
                  <Buttons
                    nextDays={this.handleNextDays}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderModal()}
      </div>
    );
  }
}

DatePicker.defaultProps = {
  isOpen: false,
  initialMonth: new Date().getMonth(),
  initialYear: new Date().getFullYear(),
  highlightSelected: true,
  selectedDate: new Date(),
  animationClose: 'slideUp',
  animationOpen: 'slideUpRetourn',
  animationNext: 'boingInUp',
  animationPrev: 'boingInUp'
};

DatePicker.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  handleSelectDate: React.PropTypes.func.isRequired,
  handleClosePicker: React.PropTypes.func.isRequired,
  initialMonth: React.PropTypes.number,
  initialYear: React.PropTypes.number,
  selectedDate: React.PropTypes.object,
  highlightSelected: React.PropTypes.bool,
  animationClose: React.PropTypes.string,
  animationOpen: React.PropTypes.string,
  animationNext: React.PropTypes.string,
  animationPrev: React.PropTypes.string
};

export default DatePicker;