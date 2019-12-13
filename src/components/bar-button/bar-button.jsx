import React, { Component } from 'react'
import { AppContext } from '../app-provider/app-provider'

//styles
import { ControlButtonElem } from './bar-button-layout'

export default class BarButton extends Component {

    toProperCase(string) {
        return string.charAt(0).toUpperCase() + string.substr(1)
    }

    render () {
        const { name } = this.props

        return (
            <AppContext.Consumer>
                {({ page, setPage }) => (
                    <ControlButtonElem 
                        active={page === name}
                        onClick={() => setPage(name)}
                    > 
                        {this.toProperCase(name)}
                    </ControlButtonElem>
                 )}
            </AppContext.Consumer>
        )
    }
}
