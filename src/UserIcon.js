import React from 'react'

const UserIcon = React.forwardRef(({username}, ref) => {        
    let userColor = ['EB3C27', '#FEC925', '#2E3588', '#FA8A3B', '#FDD944', '#3B73B9', '#FABBA3'][Math.floor(Math.random() * 7)]
    return (
        <div ref={ref} className="active-users__icon" style={{backgroundColor: userColor }}>{username[0]}</div>
    )
})

export default React.memo(UserIcon)
