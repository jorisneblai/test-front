import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Title from '../Title';
import Subtitle from '../Subtitle';
import NumericDate from '../NumericDate';

import css from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Pane extends Component {
  render() {
    return(
      <div className={`${css.pane} ${this.props.cover && css.withCover}`}>
        {
          this.props.cover && (
            <>
              <div className={css.cover} style={{ backgroundImage: "url(" + this.props.cover + ")" }}></div>
              <div className={css.overlay}></div>
            </>
          )
        }
        <div className={css.paneRow}>
          <div className={css.paneCol}>
            <div className={css.paneRow}>
              {
                this.props.date && (
                  <NumericDate date={this.props.date} />
                )
              }
              { this.props.mainPane ? 
                  <Title type={this.props.titleType}>{this.props.title}</Title> 
                :
                  <>
                    <div className={css.titleIcon}>{this.props.titleIcon}</div>
                    <div className={css.paneCol}>
                      <Title type={this.props.titleType}>{this.props.title}</Title>
                      <Subtitle icon={faMapMarkerAlt} type={this.props.subtitleType}>{this.props.subtitle}</Subtitle>
                    </div>
                  </>
              }
            </div>
            { this.props.mainPane && <Subtitle icon={faMapMarkerAlt} type={this.props.subtitleType}>{this.props.subtitle}</Subtitle>}
          </div>
          {
            this.props.button && (
              <div className={css.divBtn}>
                <Button size="sm" icon={faChevronRight} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

Pane.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  button: PropTypes.bool
};

Pane.defaultProps = {
  title: "Default title",
};

export default Pane;

// premier cas : 
// <Row>
//   <Col>
//     <Row>
//       Date Titre
//     </Row>
//     Sous titre
//   </Col>
//   <Row>
//       bouton
//   </Row>
// </Row>

// 2 cas : 
// <Row>
//   date
//   icon
//   <Col>
//     titre
//     Sous titre
//   </Col>
// </Row>
