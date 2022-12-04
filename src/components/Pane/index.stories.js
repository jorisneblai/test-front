import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Pane from "./";
import Img from "./gardener_cover.png";

storiesOf('Exercise/Components/Pane', module)
  .add('default', () => (
    <Pane />
  )).add('with cover', () => (
    <Pane cover={Img} title="Le printemps des jardiniers" subtitle="My subtitle" subtitleType="white" />
  )).add('with button', () => (
    <Pane button={true} />
  )).add('with cover and date', () => (
    <Pane cover={Img} title="Le printemps des jardiniers" subtitle={<><em>My subtitle</em></>} date={"23/03/2021"} titleType="white-bolder" subtitleType="white" />
  ))