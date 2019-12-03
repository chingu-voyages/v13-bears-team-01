import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const CreateReminder = () => {
  return (
    <Container>
      <Header as='h3'>
        <Header.Content>Add a Reminder</Header.Content>
      </Header>
      <div>Remind me to ...</div>
      <div>On a Day and Time</div>
      <div>At a Location</div>
      <div>Add to a List</div>
      <Button fluid size='medium'>Done</Button>
    </Container>
  )
}
export { CreateReminder as default }
