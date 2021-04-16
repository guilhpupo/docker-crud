import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.li`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem auto;
    padding: 1rem 2rem;
    width: 90%;

    ${media.greaterThan('medium')`
    width: 50%;`}

    background-color: #fafafa;
    border-radius: 2px;
  `}
`
export const Info = styled.div`
  ${() => css`
    font-size: 1.6rem;
  `}
`

export const Buttons = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    width: 20%;
  `}
`
