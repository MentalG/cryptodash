import styled, { css } from 'styled-components'

export const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        color: pink;
        text-shadow: 0px 0px 60px pink
    `}
`