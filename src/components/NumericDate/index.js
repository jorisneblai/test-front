import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class NumericDate extends Component {
  constructor() {
    super();
    this.state = {
      day: undefined,
      month: undefined
    }
  }

  componentDidMount() {
    this.formatDate(this.props.date);
  }

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

