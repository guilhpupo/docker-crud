import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'invertColors'
>

const wrapperModifiers = {
  normal: () => css`
    width: 16rem;
    height: 4rem;
  `,
  small: () => css`
    width: 3rem;
    height: 3rem;
  `,
  withIcon: () => css`
    svg {
      width: 3rem;
      & + span {
        margin-left: 0.8rem;
      }
    }
  `,
  invertColors: () => css`
    background-color: #fafafa;
    color: #2e502a;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ size, hasIcon, invertColors }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2e502a;
    color: #fafafa;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    ${!!size && wrapperModifiers[size]};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${!!invertColors && wrapperModifiers.invertColors()};
  `}
`
