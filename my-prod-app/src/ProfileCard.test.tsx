import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ProfileCard } from './ProfileCard'

describe('ProfileCard', () => {
  describe('a11y', () => {
    it('should be accessible', async () => {
      const { container } = render(<ProfileCard variant="success">children</ProfileCard>)

      await act(async () => {
        expect(await axe(container)).toHaveNoViolations()
      })
    })
  })

  describe('api', () => {
    it('should render success', () => {
      render(<ProfileCard variant="success">children</ProfileCard>)

      const node = screen.getByText('children')

      expect(node).toBeInTheDocument()
      expect(screen.getByText('children')).toBeInTheDocument()
    })
  })
})
