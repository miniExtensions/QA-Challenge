import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../components/App'

test('you can mock things with jest.mock', () => {
  render(<App />)
  expect(screen.getByText('Hello world')).toBeTruthy()
  userEvent.click(screen.getByText('Toggle'))
  expect(screen.queryByText('Hello World')).toBeNull()
})
