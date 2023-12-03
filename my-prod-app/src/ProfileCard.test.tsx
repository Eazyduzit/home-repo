import '@testing-library/jest-dom'
import { act, render } from '@testing-library/react'
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
})
