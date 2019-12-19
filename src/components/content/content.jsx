import React,{ Component } from 'react'
import { AppContext } from '../app-provider/app-provider'

export default class Content extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ coinList, firstVisit, prices }) => {
                    if (!coinList) {
                        return <div> Loading coins... </div>
                    }
                    if (!firstVisit && !prices) {
                        return <div> Loading prices... </div>
                    }
                    return <div> { this.props.children } </div>
                }}
            </AppContext.Consumer>
        )
    }
} 
