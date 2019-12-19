import styled from 'styled-components'
import { backgroundColor2, fontSize2 } from '../layout/layout'

export const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`

export const SearchInpout = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1px solid;
    height: 25px;
    color: #1163c9;
    place-self: center left; 
`