import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class NumericDate extends Component {

  // Building here a state to handle the date format and more precisely the day and the month.
  constructor() {
    super();
    this.state = {
      day: undefined,
      month: undefined
    }
  }

  // Calling date formatting function on component mount.
  componentDidMount() {
    this.formatDate(this.props.date);
  }

  // Handle date received from props to comply with our component
  formatDate = (date) => {
    const dateArr = date.split("/");
    this.setState({ day: dateArr[0] })
    this.setState({ month: dateArr[1] })
  }

  render() {
    return (
      <div className={`${css.dateBox}`}>
        <span className={`${css.dateDay}`}>{this.state.day}</span>
        <span className={`${css.dateMonth}`}>{this.state.month}</span>
      </div>
    )
  }
}

NumericDate.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
}

export default NumericDate;

