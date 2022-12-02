import React from 'react';
import { storiesOf } from "@storybook/react";

import Title from "./";

storiesOf('Exercise/Components/Title', module)
  .add('default', () => (
    <Title>My title</Title>
  )).add('thinner', () => (
    <Title type="thinner">My title</Title>
  )).add('white bolder', () => (
    <Title type="white-bolder">My title</Title>
  )).add('with emoji and text', () => (
    <Title type="thinner">🌞 My title</Title>
  ))
