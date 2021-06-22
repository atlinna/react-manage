import React, { useEffect } from 'react'
import { useLocation } from '../hooks/router'

interface Props {

}

const Login: React.FC<Props> = () => {
    let loc = useLocation()
    useEffect(() => {
        // console.log(storeSource)
        console.log(loc)
        
    }, [loc])
    return (
        <div>
            hello world login page!
        </div>
    )
}

export default Login