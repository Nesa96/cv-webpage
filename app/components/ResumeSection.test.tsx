import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Page from './ResumeSection'
import { myCvInfo } from "../data";


test('Name of all the resume sections', () => {
    render(<Page />)

    const experienceHeading = screen.getByText(/Work Experience/i)
    const educationHeading = screen.getByText(/Education/i)
    const certificationsHeading = screen.getByText(/Certifications/i)

    expect(experienceHeading).toBeInTheDocument()
    expect(educationHeading).toBeInTheDocument()
    expect(certificationsHeading).toBeInTheDocument()
})

test('Resume sections should not be empty', () => {
    render(<Page />)

    expect(screen.queryByText(/Full-Stack Engineer/i)).toBeInTheDocument()
    expect(screen.queryByText(/Master of Science/i)).toBeInTheDocument()
    expect(screen.queryByText(/Complete Web Design/i)).toBeInTheDocument()

    // Check if there are dates
    const dates = screen.queryAllByText(/\d{4}/)
    expect(dates.length).toBeGreaterThan(0)
})