import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from './SkillSection'

test('We see some skills', () => {
  render(<Page />)
  
  // Info that is for sure in your skills - please modify on your own
  expect(screen.getByText(/Python/i)).toBeInTheDocument()
  expect(screen.getByText(/React/i)).toBeInTheDocument()
  
  const allSkills = document.querySelectorAll('.tech-text')
  expect(allSkills.length).toBeGreaterThan(0)
})