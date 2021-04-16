import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: JSX.Element
  size?: 'normal' | 'small'
  invertColors?: boolean
}
const Button = ({
  children,
  icon,
  size = 'normal',
  invertColors = false
}: ButtonProps) => (
  <S.Wrapper size={size} hasIcon={!!icon} invertColors={invertColors}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
