import React, { memo } from 'react'
interface Props {

}
const userInfo: React.FC<Props> = (props: any) => {
    return (
        <div>
            welcome to userInfo page
        </div>
    )
}
export default memo(userInfo)