import React from 'react'

function Hambuger() {
    return (
        <div className="pointers" >
            <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="4" rx="2" fill="white"/>
            <rect y="7" width="25" height="4" rx="2" fill="white"/>
            <rect y="14" width="16" height="4" rx="2" fill="white"/>
            </svg>
        </div>
    )
}

export default React.memo(Hambuger)
