

export const orting: any = (payload: any) => {
    // console.log(payload, '+++++ 这是actions')
}

export const increaseCount: any = (payload: any) => {
    console.log('actions', payload)
    return { type: "INCREASE", count: payload }
}

export const increaseCountAsyn: any = (payload: any) => {
    return (dispatch: any) => {
        console.log('actions', payload, dispatch)
        dispatch(increaseCount(payload))
    }
}