import React, { memo, useState } from 'react'
import Kitchen from '../../../components/Table/Kitchen'

interface Props {

}

const Welcome: React.FC<Props> = (props: any) => {
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },

    ])


    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const actions = [
        {
            name: "删除",
            key: 'delete',
            func: (params: any, source: any) => {
                console.log(params, source)
                dataSource.splice(Number(params.key - 1), Number(params.key))
                console.log(dataSource)
                setDataSource([...dataSource])
            }
        },
    ]

    return (
        <div>
            <Kitchen dataSource={dataSource} columns={columns} actions={actions} />
        </div>
    )
}

export default memo(Welcome)