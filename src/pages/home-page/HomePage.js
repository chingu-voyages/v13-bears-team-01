import React from 'react'
import { Container, Header, List } from 'semantic-ui-react'

import './home-page.styles.css'

const HomePage = () => (
  <div id='home-page'>
    <Container text>
      <section id='reminders'>
        <Header as='h2'>Reminders</Header>
        <List celled>
          <List.Item>Reminder 1</List.Item>
          <List.Item>Reminder 2</List.Item>
        </List>
      </section>
      <section id='lists'>
        <Header as='h2'>Lists</Header>
        <List celled>
          <List.Item>List 1</List.Item>
          <List.Item>List 2</List.Item>
        </List>
      </section>
    </Container>
  </div>
)

export default HomePage
