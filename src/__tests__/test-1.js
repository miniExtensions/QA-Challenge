import * as React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../components/App'

test('Test that you can add a new todo list item, then click it to mark it as completed, and then change the filter to "active"', () => {
  render(<App />)

  expect(screen.getByText('PaperTodo')).toBeVisible()

  
  
  // Add your test here
})
