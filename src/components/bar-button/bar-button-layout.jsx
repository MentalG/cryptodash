import styled, { css } from 'styled-components'

export const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        color: pink;
    `}
`