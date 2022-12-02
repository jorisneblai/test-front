import React from 'react';
import { storiesOf } from "@storybook/react";

import NumericDate from "./";

storiesOf('Exercise/Components/NumericDate', module)
  .add('default', () => (
    <NumericDate day="23" month="03"/>
  ))
