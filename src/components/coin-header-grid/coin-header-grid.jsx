import React, { Component } from 'react'

//styles
import { CoinHeaderGridStyled, CoinSymbol } from './coin-header-grid-layout'

export default class CoinHeaderGrid extends Component {
    render() {
        const { name, symbol } = this.props

        return(
            <CoinHeaderGridStyled>
                <div> { name } </div>
                <CoinSymbol> { symbol } </CoinSymbol>
            </CoinHeaderGridStyled>
        )
    }
}