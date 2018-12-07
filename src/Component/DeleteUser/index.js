import React, { Component } from 'react';
import './index.css';
import TableS from '../TableS'

class DeleteUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
          style: '',
          userMas: props.user,
          value: null
        };
      }
    render(){
        return (
          <div className='content'>
            <TableS user={this.state.userMas} component='delete'/>
          </div>
        )
    }
}
export default DeleteUser