import React from 'react'

//components
import BarButton from '../bar-button/bar-button'

//styles
import { Bar, Logo } from './app-bar-layout'

export default function() {
    return (
        <Bar> 
            <Logo> Crypto Dash </Logo>
            <div></div>
            <BarButton active={false} name={'Dashboard'}/>
            <BarButton active={true} name={'Settings'}/>
        </Bar>
    )
}