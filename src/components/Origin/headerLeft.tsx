import { Menu, Dropdown } from 'antd';
import logo from '../../assets/head-logo.jpg'
import React from 'react'

interface UserProps {
    userLogo: any
}

interface Props {

}

const menu: any = (
    <Menu>
        <Menu.Item key="0">
            列表项1
            {/* <a href="https://www.antgroup.com">1st menu item</a> */}
        </Menu.Item>
        <Menu.Item key="1">
            列表项2
            {/* <a href="https://www.aliyun.com">2nd menu item</a> */}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
);

const UserLogo: React.FC<UserProps> = props => {
    const { userLogo } = props
    return (
        <>
            <img className="user-logo" src={userLogo} alt="" />
        </>
    )
}

const HeaderLeft: React.FC<Props> = props => {
    return (
        <>
            <Dropdown overlay={menu} trigger={['click']}>
                <div>
                    <UserLogo userLogo={logo} />
                </div>
            </Dropdown>
        </>
    )
}

export default HeaderLeft