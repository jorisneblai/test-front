import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class NumericDate extends Component {
  render() {
    return (
      <div className={`${css.dateBox}`}>
        <span className={`${css.dateDay}`}>{this.props.day}</span>
        <span className={`${css.dateMonth}`}>{this.props.month}</span>
      </div>
    )
  }
}

NumericDate.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
}

export default NumericDate;

