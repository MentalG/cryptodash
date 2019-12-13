import React,{ Component } from 'react'
import { AppContext } from '../app-provider/app-provider'

export default class Content extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({coinList}) => {
                    if (!coinList) {
                        return <div> Loading coins... </div>
                    }
                    return <div> { this.props.children } </div>
                }}
            </AppContext.Consumer>
        )
    }
} 
