import React from 'react'

//components
import Page from '../page/page'
import Search from '../search/search'
import CoinGrid from '../coin-grid/coin-grid'
import ConfirmButton from '../confirn-button/confirm-button'
import WelcomeMessage from '../welcome-message/welcome-message'

const Settings = () => {
    return(
        <Page name={'settings'}>
            <WelcomeMessage />
            <CoinGrid topSection/>
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    )
}

export default Settings