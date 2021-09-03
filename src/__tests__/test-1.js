import * as React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../components/App'

test('Challenge', () => {
  render(<App />)

  expect(screen.getByText('PaperTodo')).toBeVisible()

  // Add your test here

// 1) Add a new todo list item
// 2) Check that the item that you added is now visible on the screen
// 3) Click the clear button
// 4) Check that "Chill scenes." is visible, and that the item you added is not visible anymore
})
