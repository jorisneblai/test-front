import React from 'react';
import { storiesOf } from "@storybook/react";

import NumericDate from "./";

storiesOf('Exercise/Components/NumericDate', module)
  .add('default', () => (
    <NumericDate date="23/03/2021"/>
  ))
