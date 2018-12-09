import store from '../store'
import * as types from '../action-type'

function addUserC(mas){
    return {
        type: types.ADD_USER,
        mas,
    }
}
function deleteUserC(mas){
    return {
        type: types.DELETE_USER,
        mas,
    }
}
export function addUser(user, mas){
    mas.push(user)
    return store.dispatch(addUserC(mas))
}
export function deleteUser(user, mas){
    mas.splice(mas.indexOf(user), 1)
    return store.dispatch(deleteUserC(mas))
}