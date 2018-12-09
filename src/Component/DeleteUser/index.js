import React, { Component } from 'react';
import './index.css';
import TableS from '../TableS'

class DeleteUser extends Component{
    render(){
        return (
          <div className='content'>
            <TableS component='delete'/>
          </div>
        )
    }
}
export default DeleteUser