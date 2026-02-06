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
    
    const cards = screen.getAllByTestId('education-card')
    expect(cards.length).toBe(myCvInfo.education.length + myCvInfo.certifications.length)

    const cards_exp = screen.getAllByTestId('experience-card')
    expect(cards_exp.length).toBe(myCvInfo.experience.length)

    // Check if there are dates
    const dates = screen.queryAllByText(/\d{4}/)
    expect(dates.length).toBeGreaterThan(0)
})