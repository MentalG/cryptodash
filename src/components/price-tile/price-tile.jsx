import React, { Component } from 'react'
import { SelectableTile } from '../coin-grid/coin-grid-layout'

export default class PriceTile extends Component {

    render () {
        const { price, index } = this.props
        const symbol = Object.keys(price)[0]
        const data = price[symbol]['USD'] 

        // debugger
        return (
            <SelectableTile>
                {`${ symbol } ${ data.PRICE }`}
            </SelectableTile>
        )
    }
}