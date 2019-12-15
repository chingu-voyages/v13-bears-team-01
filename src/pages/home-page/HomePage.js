import React from 'react'
import { Button, Container, Header, List } from 'semantic-ui-react'
import ReminderList from '../../components/reminder-list/ReminderList'

import './home-page.styles.css'

const HomePage = () => (
  <div id='home-page'>
    <Container text>
      <section id='reminders'>
        <Header as='h2'>Reminders</Header>
        <List celled>
          <ReminderList />
        </List>
      </section>
      <section id='lists'>
        <Header as='h2'>Lists</Header>
        <List celled>
          <List.Item>List 1</List.Item>
          <List.Item>List 2</List.Item>
        </List>
      </section>
      <Button circular icon='plus' floated='right' color='green' />
    </Container>
  </div>
)

export default HomePage
