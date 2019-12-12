import React, { Component } from 'react'

export const AppContext = React.createContext()

export class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: 'settings',
            setPage: this.setPage
        }
    }

    setPage = pages => this.setState({ pages })

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}