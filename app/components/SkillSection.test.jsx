import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from './SkillSection'
import { myCvInfo } from "../data";

test('We see some skills', () => {
  render(<Page />)

  const types_skills = screen.getAllByTestId('skill-type')
  expect(types_skills.length).toBe(myCvInfo.skills.length)
  
  const allSkills = document.querySelectorAll('.tech-text')
  expect(allSkills.length).toBeGreaterThan(0)
})