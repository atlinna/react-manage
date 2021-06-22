import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { increaseCountAsyn } from '../../actions/origin'

interface Props {
    increaseCountAsyn: Function,
    counter: any
}

const Land: React.FC<Props> = props => {
    const { increaseCountAsyn, counter } = props
    const { count } = counter
    const handleINClick = () => {
        // console.log(props)
        increaseCountAsyn(count + 1)
    }
    const handleDEClick = () => {
        increaseCountAsyn(count - 1)
    }
    return (
        <div>
            <p>Land One</p>
            <p>{count}</p>
            <Button style={{ marginRight: 12 }} type="primary" onClick={handleINClick}>+ INCREASE</Button>
            <Button type="primary" onClick={handleDEClick}>- DECREASE</Button>
        </div>

    )
}

export default connect((state: Props) => ({ counter: state.counter }), { increaseCountAsyn })(memo(Land))