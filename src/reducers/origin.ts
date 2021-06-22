// import { increaseCount } from '../actions/origin'


const initialState: Object = {
    count: 0
}

export const counter = (state: any = initialState, action: any) => {
    // console.log(state, action, "++++++这是reducers")
    switch (action.type) {
        case "INCREASE":
            return { ...state, count: action.count }
        default:
            return state

    }
}