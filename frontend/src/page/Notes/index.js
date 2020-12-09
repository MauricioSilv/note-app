import React from 'react';

import ButtonDefault from '../../components/Button';
import { Container, Header, Title, BreadCrumb, TextBread, TextMark, LineBread, TitlePublicNotes } from './styles';

function Notes(){
  return (
    <Container>
      <Header>
        <Title>Notes</Title>
        <ButtonDefault>Create a public note</ButtonDefault>
      </Header>
      <BreadCrumb>
        <TextBread>
          Public
        <TextMark />
        </TextBread>
        <LineBread />
      </BreadCrumb>
      <TitlePublicNotes>All public notes</TitlePublicNotes>
    </Container>
  );
}

export default Notes;