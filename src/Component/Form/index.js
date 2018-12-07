import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

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
      let id = this.state.userMas[this.state.userMas.length-1].id
      this.state.userMas.push({id: id+1, Fname: this.state.valueF, Sname: this.state.valueS})
      this.props.updateProps({userMas: this.state.userMas})
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
  
 export default FormExample