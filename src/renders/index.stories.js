import React from 'react';
import { storiesOf } from "@storybook/react";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

storiesOf('Exercise/Renders', module)
  .add('default', () => (
    <>
        <Title>My title</Title>
        <Subtitle>My subtitle</Subtitle>
        {/* Exemple : faire un map dans le Pane pour aller récupérer les données du json (icone, titre, etc) */}
        {[0, 1, 2, 3].map(item => item)}
    </>
  ))
