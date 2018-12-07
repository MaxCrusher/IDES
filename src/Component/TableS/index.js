import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap'

class TableS extends Component{
    constructor(props){
        super(props)
        this.state = {
            userMas: props.user,
            component: props.component,
        }
        this.deleteUser = this.deleteUser.bind(this)
        this.focusRadio =this.focusRadio.bind(this)
    }
    focusRadio(e){
      this.setState({
        value: Number(e.target.value)
      })
    }
    deleteUser(e){
      const mas = this.state.userMas
      mas.map((el, index) => {
        console.log(el.id+" "+this.state.value)
        if(el.id === this.state.value) {
          this.state.userMas.splice(index, 1)
          this.setState({}) 
        }
      })
    }
    render(){
      console.log(this.state)
        const {userMas} = this.state
        let mas = null
        let but = null
        if(this.state.component==='delete'){
          but = <Button bsStyle="danger" onClick={this.deleteUser}>DELETE USER</Button>
          mas = userMas.map((i,index)=>{
            return (
              <tr key={index} className='select'>
                <td>{++index}</td>
                <td>{i.Fname}</td>
                <td>{i.Sname}</td>
                <td> <input type='radio' name='user' value={i.id} onClick={this.focusRadio}/> </td>
              </tr>
            );
          })
        }
        if(this.state.component==='newuser'){
          mas = userMas.map((i,index)=>{
            return (
              <tr key={index} className='select'>
                <td>{++index}</td>
                <td>{i.Fname}</td>
                <td>{i.Sname}</td>
              </tr>
            );
          })
        }
        return(
            <div>
            <Table striped bordered responsive condensed hover>
              <thead>
                <tr>
                <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {mas}
              </tbody>
            </Table>
            {but}
          </div>
        )
    }
}
export default TableS