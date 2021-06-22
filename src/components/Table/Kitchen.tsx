import { Table, Button } from 'antd'
import React, { memo, useState, useEffect } from 'react'


interface Props {
    dataSource: Array<any>,
    columns: Array<any>
    actions: Array<any>
}

const Kitchen: React.FC<Props> = (props: Props) => {
    const [loading, setLoading] = useState(true)
    const { dataSource = [], columns, actions } = props
    const action = [
        {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render: (text: any, record: any) => (
                <div>
                    {
                        actions.map(item => {
                            return <Button type="link" key={item.key} onClick={() => item.func(text, record)}>{item.name}</Button>
                        })
                    }
                </div>
            ),
        },
    ]

    useEffect(() => {
        if (!loading) setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataSource, columns, actions])

    return (
        <>
            <Table
                loading={loading}
                rowSelection={{ type: 'checkbox' }}
                dataSource={dataSource}
                columns={actions.length > 0 ? columns.concat(action) : columns}
            />
        </>
    )
}

export default memo(Kitchen)