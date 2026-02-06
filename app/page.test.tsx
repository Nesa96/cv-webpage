import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from './page'
import { myCvInfo } from './data'

test('Main Page has the correct info', () => {
  render(<Page />)

  expect(screen.getByText('Console.log("Hi")')).toBeInTheDocument()
  expect(screen.getByText(/About me/)).toBeInTheDocument()
  expect(screen.getByText(myCvInfo.summary)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Resume/ })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Projects/ })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Skills/ })).toBeInTheDocument()
})

test('links have the correct rutes', () => {
  render(<Page />)
  
  expect(screen.getByRole('link', { name: /Resume/ })).toHaveAttribute('href', '/resume')
  expect(screen.getByRole('link', { name: /Projects/ })).toHaveAttribute('href', '/projects')
  expect(screen.getByRole('link', { name: /Skills/ })).toHaveAttribute('href', '/skills')
})

test('Correct picture in the main page', () => {
  render(<Page />)
  const img = screen.getByRole('img', { name: /Perfil image/i })
  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('src')
})