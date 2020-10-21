export const ADD = 'ADD'
export const SET_NAME = 'SET_NAME'

function add(num) {
    return {
        type: ADD,
        payload: num,
    }
}

function setName(name) {
    return {
        type: SET_NAME,
        payload: name,
    }
}

export function setAdd() {
    return (dispatch, getState) => {
        const { count } = getState()
        setTimeout(() => {
            dispatch(add(count + 5))
        }, 1000)
    }
}

export function changeName(val) {
    return (dispatch, getState) => {
        const { name } = getState()
        setTimeout(() => {
            dispatch(setName(val))
        }, 1000)
    }
}
