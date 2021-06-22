import React, { useState, memo, } from 'react'
import { Layout, Menu, PageHeader, Card, Tag } from 'antd';
import logo from '../assets/head-logo.jpg'
// import { Route, HashRouter as Router } from 'react-router-dom'
// import Land from '../pages/navigator/land'
import { useLocation } from '../hooks/router'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
} from '@ant-design/icons';

import HeaderLeft from '../components/Origin/headerLeft'
import { navigator } from '../router';



const { Header, Sider, Content } = Layout;


interface Props {
    // historic: any,
    // children: any
}

let obj = { name: '', subTitle: '', path: '' }

const Origin: React.FC<Props> = props => {
    const his = useLocation()
    const [collapsed, setCollapsed] = useState(false)
    const [historic, setHistoric] = useState(obj)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const handleItemClick = (item: any) => {
        const { key = "" } = item
        let obj = JSON.parse(key)
        // console.log(obj)
        if (obj.path === historic.path) return
        setHistoric(obj)
        his.replace(`/origin${obj.path}`)
    }

    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="top-toggle">{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggleCollapsed,
                    })}</div>
                    <div className="logo" >
                        <img src={logo} alt="" />
                        {
                            !collapsed ? <span>Electron</span> : null
                        }
                    </div>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/origin/']}
                        onClick={handleItemClick}>
                        {
                            navigator.map(item => {
                                return (
                                    <Menu.Item key={JSON.stringify(item)} icon={<item.icon />}>
                                        {item.name}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box', paddingRight: '20px' }}>
                            <div>
                                <PageHeader
                                    className="site-page-header"
                                    onBack={his.goBack}
                                    title={historic.name}
                                    subTitle={historic.subTitle}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: "center", paddingBottom: 10 }}>
                                <Tag color="lime" style={{ marginRight: 20 }}>超级管理员</Tag>
                                <HeaderLeft />
                            </div>
                        </div>


                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            // padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Card title={historic.name} bordered={false} headStyle={{ textAlign: "left" }}  >
                            {props.children}
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default memo(Origin)