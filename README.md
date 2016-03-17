# React Modal DatePicker
Simple react.js modal datepicker component made with Flexbox.

#Screenshots
![Modal DatePicker] (https://s3-us-west-2.amazonaws.com/github-open-source/react-moda-datepicker.png?X-Amz-Date=20160317T130029Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=f2a5731d136ff93f765d0cffb79978edcea95db245d3009d7b4412a745ee5325&X-Amz-Credential=ASIAI2UDHESVU2RCX2EA/20160317/us-west-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEI7//////////wEagAKOvd3LXABivzKqFEwaBx0kM6FeLe%2Bbeh%2BuEmsb7X3rIwSnHUjksn0nbiepP0fLNoRO9mxby55YPR6M//7Ne%2B4XaITqdNKL2SLG2/UGY9NsX2X6xj1d5Hr9l2Du4pz1sTGBI8zYaSh6URngdvWrNUUJu%2BjGxbRonpgSk9tPZmO7/X9gpKxWLSfxl6Ff3jne6gokEHn4yvJsvJuFfXzYiU09oCRRZUgEscKMkrBBozhDFPK8igRKkMvWPzoW6440tKeko41kVtZY9/QEGhE%2B/xDUB2oVslQ3wcwWjKKGnBAWIdAHemjJ//v7bHhRd8MBPXUaYRKNckf3pvZY3rjctjKfIPPTqrcF)

![Modal DatePicker GIF] (http://g.recordit.co/WwEHCGShlz.gif)

#Installation
`npm install --save react-modal-datepicker`

#Animations
The animations implemented in this components are made by [Magic] (http://minimamente.com/example/magic_animations/) a CSS3 animation library.

#Usage
##API
Name | Description | Type | Default | Required
-----|-------------|------|---------|----------
isOpen | Property that determines if the modal is open. | Boolean | `false` | Yes
handleSelectDate | Function that is called after a date is selected on the calendar. The function receives the date selected. The date returned is in a Date object format. | Function | | Yes
handleClosePicker | Function that is called when the user closes the modal. | Function | | Yes
selectedDate | Date to be highlighted in the calendar. | Date Object | Current date | No
initialMonth | Month to start displaying on the picker calendar .| Number | Current month | No
initialYear | Year to start displaying on the picker calendar. | Number | Current year | No
highlightSelected | Highlight the selected date on the calendar. | Boolean | `true` | No
animationClose | Animation to use when the modal is closed. | String | slideUp | No
animationOpen | Animation to use when the modal is opened. | String | slideUpRetourn | No
animationNext | Animation to use when transitioning to the next month. | String | boingInUp | No
animationPrev | Animation to use when transitioning to the previous month. | String | boingInUp | No
##Example
```javascript
import React from 'react';
import DatePicker from 'react-modal-datepicker';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      isOpen: false
    };

    this.openPicker = this.openPicker.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  openPicker() {
    this.setState({
      isOpen: true
    });
  }

  closePicker() {
    this.setState({
      isOpen: false
    });
  }

  selectDate(date) {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    return (
      <div>
        <h2>React Modal DatePicker</h2>
        <button onClick={this.openPicker.bind(null)}>Open Picker</button>
        <DatePicker
          isOpen={this.state.isOpen}
          selectedDate={this.state.selectedDate}
          handleClosePicker={this.closePicker}
          handleSelectDate={this.selectDate} />
      </div>
    );
  }
}
```
