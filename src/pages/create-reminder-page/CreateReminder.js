import React from 'react'
import ReminderForm from '../../components/reminder-form/ReminderForm'
import { Container, Header } from 'semantic-ui-react'

const CreateReminder = () => {
  const onSubmit = (reminder) => {
    console.log(reminder)
  }
  return (
    <Container>
      <Header as='h3'>
        <Header.Content>Add a Reminder</Header.Content>
      </Header>
      <ReminderForm onSubmit={onSubmit} />
    </Container>
  )
}
export { CreateReminder as default }
