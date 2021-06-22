/**
 * name:""   --路径名
 * path:""   --路径
 * component:""   --路径组件
 */
import Land from '../pages/navigator/land'
import FirstPage from '../pages/firstPage'
import Login from '../pages/login'
import Origin from '../pages/origin'
import Welcome from '../pages/navigator/welcome'

import {
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    // UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';


export const router: Array<any> = [
    {
        name: "启动页",
        path: "/",
        component: FirstPage
    },
    {
        name: "登录页",
        path: "/login",
        component: Login
    },
    {
        name: "首页",
        path: "/origin",
        component: Origin
    }
]
/**
 * name  -- 导航名
 * path  -- 导航路径
 * component -- 组件
 */
export const navigator: Array<any> = [
    {
        name: "导航栏1",
        path: '/index',
        component: Land,
        icon: UploadOutlined,
        subTitle: "One-Two-Three",
        exact: true
    },
    {
        name: "导航栏2",
        path: '/useInfo',
        component: Welcome,
        icon: VideoCameraOutlined,
        subTitle: "用户信息",
        exact: true
    },
]

// eslint-disable-next-line import/no-anonymous-default-export