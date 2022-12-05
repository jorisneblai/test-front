import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from "./";

storiesOf('Exercise/Components/Button', module)
  .add('with text', () => (
    <Button>My button</Button>
  )).add('with size', () => (
    <Button size="sm">My button</Button>
  )).add('with fa chevron', () => (
    <Button>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  ));
