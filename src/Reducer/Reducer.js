import * as types from '../action-type'

const initialState = {
    mas: [    
    {id:1, Fname: 'Max', Sname: 'Orlov'},
    {id:2, Fname: 'Liya', Sname: 'Gafurova'},
    {id:3, Fname: 'Misha', Sname: 'Timkov'},
    {id:4, Fname: 'Ruslan', Sname: 'Tagirov'} ],
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case types.ADD_USER:
            return Object.assign({}, {}, {mas: action.mas, update: true})
        case types.DELETE_USER:
            return Object.assign({}, {}, {mas: action.mas})
        default : {
            return state
        }
    }
}