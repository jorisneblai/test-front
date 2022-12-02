import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class NumericDate extends Component {
  render() {
    return(
     <p>{this.props.day} - {this.props.month}</p>
    )
  }
}


NumericDate.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
}

export default NumericDate;