import { ADD, SET_NAME } from './actions'

export default {
    count(state = 5, action) {
        const { type, payload } = action
        switch (type) {
            case ADD:
                return payload
            default:
                return state
        }
    },
    name(state = 'tao', action) {
        const { type, payload } = action
        switch (type) {
            case SET_NAME:
                return payload
            default:
                return state
        }
    },
}
