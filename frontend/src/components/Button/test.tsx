import { render, screen } from '@testing-library/react'
import { Plus } from '@styled-icons/bootstrap/Plus'
import Button from '.'

describe('<Button />', () => {
  it('should render a default button', () => {
    render(<Button>Click me!</Button>)

    const button = screen.getByRole('button', { name: /click me!/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ width: '16rem' })
  })

  it('should render a small button', () => {
    render(<Button size="small">Click me!</Button>)

    expect(screen.getByRole('button', { name: /click me!/i })).toHaveStyle({
      width: '3rem'
    })
  })

  it('should render a only icon small button', () => {
    render(<Button size="small" icon={<Plus data-testid="icon" />}></Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      width: '3rem'
    })
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
