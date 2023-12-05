import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import App from './App'

expect.extend(toHaveNoViolations)

describe('App Component', () => {
  describe('a11y', () => {
    it('should render', async () => {
      const { getByText } = render(<App />)

      expect(getByText('Temperatures')).toBeInTheDocument()
    })
    it('should have no accessibility violations', async () => {
      const { container } = render(<App />)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
