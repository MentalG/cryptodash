import React from 'react'

//styles
import { ControlButtonElem } from './bar-button-layout'

const BarButton = ({ name, active = false }) => {
    return (
        <ControlButtonElem active={active}> { name } </ControlButtonElem>
    )
}

export default BarButton