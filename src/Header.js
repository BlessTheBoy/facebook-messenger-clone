import React from 'react'
import Hambuger from './Hambuger'
import HeadActiveUsers from './HeadActiveUsers'
import Options from './Options'
import Title from './Title'
import './css/header.css'

function Header({userH}) {
    return (
        <header className="header">
            <Hambuger />
            <div className="header_wrap">
                <h1 className="header_wrap_title">Chat App</h1>
                <HeadActiveUsers users = {userH}/>
            </div>
            <Options />
        </header>
    )
}

export default Header
