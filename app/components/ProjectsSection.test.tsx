import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from './ProjectsSection'
import { myCvInfo } from "../data";

test('All the projects have their images', () => {
  render(<Page />)
  
  const images = screen.getAllByRole('img')
  const numberProjects = myCvInfo.projects.length

  expect(images.length).toBeGreaterThanOrEqual(numberProjects)
  expect(images[0]).toHaveAttribute('src')
})