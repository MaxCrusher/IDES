import React, {Component} from 'react'
import './index.css';
import TableS from '../TableS'
import Form from '../Form'

class NewUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            userMas: props.user
        }
    }
    updateProps = (value) => {
        this.setState({
            userMas: value.userMas,
        })
    }
    render(){
        console.log(this.state)
        return (
            <div className='content'>
                <Form user={this.state.userMas} updateProps={this.updateProps}/>
                <TableS user={this.state.userMas} component='newuser'/>
            </div>
        )
    }
}
export default NewUser