import React from 'react'

//components
import WelcomeMessage from '../welcome-message/welcome-message'
import ConfirmButton from '../confirn-button/confirm-button'
import Page from '../page/page'

const Settings = () => {
    return(
        <Page name={'settings'}>
            <WelcomeMessage />
            <ConfirmButton />
        </Page>
    )
}

export default Settings