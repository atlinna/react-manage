import React, { useEffect } from 'react'
import logo from '../logo.svg'
import { useLocation } from '../hooks/router'

interface Props {
    // name: string,
    // uri: any
}

const FirstPage: React.FC<Props> = props => {

    let loc = useLocation()

    useEffect(() => {
        console.log(loc)
    }, [loc])

    const handleClick = () => {
        // console.log(1)
        loc.push('/origin')
    }
    // console.log(useLocation)
    // const { uri, name } = props
    return (
        <div>
            <header className="App-header">
                <div onClick={handleClick}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                {/* <div>{name}</div> */}
            </header>
        </div>
    )
}

export default FirstPage
