import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

const ReminderForm = (props) => {
  const [text, setText] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [location, setLocation] = useState('')
  const [list, setList] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  const addReminder = (e) => {
    e.preventDefault()
    props.onSubmit({
      text, dateTime, location, list, isCompleted
    })
    setText('')
    setDateTime('')
    setLocation('')
    setList('')
    setIsCompleted(false)
  }

  return (
    <Grid centered columns={1}>
      <Grid.Column>
        <Form>
          <Form.Input
            fluid
            placeholder='Remind me to...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Input
            fluid
            icon='clock outline'
            iconPosition='left'
            placeholder='On a Day and Time'
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
          <Form.Input
            fluid
            icon='location arrow'
            iconPosition='left'
            placeholder='At a Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Form.Input
            fluid
            icon='flag'
            iconPosition='left'
            placeholder='Add to a List'
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <Button fluid size='medium' onClick={addReminder}>Done</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
export { ReminderForm as default }
