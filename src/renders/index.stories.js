import React from 'react';
import { storiesOf } from "@storybook/react";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import NumericDate from "../components/NumericDate";
import Pane from "../components/Pane";

import mockData from "../mocks/events.json";

import Img from "../components/Pane/gardener_cover.png";

storiesOf('Exercise/Renders', module)
  .add('default', () => (
    <main>
      { mockData.map((elm, index) =>
          index === 0 ?
            <Pane 
              title={elm.title} 
              subtitle={<em>{elm.address.place}</em>}
              url={elm.url}
              date={elm.date}
              titleType="white-bolder"
              subtitleType="white"
              cover={elm.cover == "gardener_cover.png" && Img}
              mainPane={true}
              button={true}
            />
          :
            <Pane 
              titleIcon={elm.icon}
              title={elm.title}
              subtitle={elm.address.place}
              url={elm.url}
              date={elm.date}
              titleType="thinner"
            />
        )
      }
    </main>
  ))