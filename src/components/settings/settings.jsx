import React from 'react'

//components
import Page from '../page/page'
import CoinGrid from '../coin-grid/coin-grid'
import ConfirmButton from '../confirn-button/confirm-button'
import WelcomeMessage from '../welcome-message/welcome-message'

const Settings = () => {
    return(
        <Page name={'settings'}>
            <WelcomeMessage />
            <CoinGrid topSection/>
            <ConfirmButton />
            <CoinGrid />
        </Page>
    )
}

export default Settings