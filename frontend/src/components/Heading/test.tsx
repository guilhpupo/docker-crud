import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading>Market List</Heading>)
    expect(
      screen.getByRole('heading', { name: /market list/i })
    ).toBeInTheDocument()
  })
})
