import styled from 'styled-components'
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow} from '../layout/layout'

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px; 
`

export const Tile = styled.div`
    ${subtleBoxShadow}
    ${lightBlueBackground}
    padding: 10px;
`

export const SelectableTitle = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${greenBoxShadow}
    }
`