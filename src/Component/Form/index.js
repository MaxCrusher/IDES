import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import * as Actions from '../../Actions/action'
import store from '../../store.js'

class FormExample extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      this.SaveUser = this.SaveUser.bind(this);
      this.state = {
        valueF: '',
        valueS: '',
        userMas: props.user
      };
    }
    
    getValidationState() {
      if(this.state.valueF.match(/\d/) === null && this.state.valueS.match(/\d/) === null) {
        if(this.state.valueF.length > 1 && this.state.valueS.length > 1) {
          return 'success'          
        } else {
          return 'error'
        }
        } else {
            return 'error'
        }
    }
    SaveUser(){
      let id = this.props.mas[this.props.mas.length-1].id
      const user = {id: id+1, Fname: this.state.valueF, Sname: this.state.valueS}
      store.dispatch(Actions.addUser(user, this.props.mas))
      this.props.updateProps()
    }
    handleChange(e) {
        e.target.name === 'FirstName' ?
            this.setState({ valueF: e.target.value}) :
            this.setState({ valueS: e.target.value})
    }
  
    render() { 
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              name="FirstName"
              type="text"
              value={this.state.valueF}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel>Second Name</ControlLabel>
            <FormControl
              name="SecondName"
              type="text"
              value={this.state.valueS}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button id='but' bsStyle="success" onClick={this.SaveUser}>Save</Button>   
        </form>
      );
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
  
 export default connect(mapStateToProps, mapDispatchToProps)(FormExample)