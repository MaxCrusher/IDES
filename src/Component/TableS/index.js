import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table, Button } from 'react-bootstrap'
import * as Actions from '../../Actions/action'
import store from '../../store.js'

class TableS extends Component{
    constructor(props){
        super(props)
        this.state = {
            component: props.component,
        }
        this.deleteUser = this.deleteUser.bind(this)
        this.focusRadio =this.focusRadio.bind(this)
    }
    focusRadio(e){
      this.setState({
        value: e.target.value
      })
    }
    deleteUser(e){
      this.props.mas.map((el, index) => {
        if(el.id == this.state.value) {
          store.dispatch(Actions.deleteUser(el, this.props.mas))
        }
      })
    }
    render(){
        let mas = null
        let but = null
        if(this.state.component==='delete'){
          but = <Button bsStyle="danger" onClick={this.deleteUser}>DELETE USER</Button>
          mas = this.props.mas.map((i,index)=>{
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
          mas = this.props.mas.map((i,index)=>{
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
function mapStateToProps(state) {
  return {
    mas: state.mas.mas
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableS)