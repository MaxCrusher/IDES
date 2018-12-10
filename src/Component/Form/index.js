import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import * as Actions from '../../Actions/action'
import store from '../../store.js'

class FormExample extends Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.validationState = this.validationState.bind(this)
      this.SaveUser = this.SaveUser.bind(this);
      this.state = {
        valueF: '',
        valueS: '',
        validation: false,
        validationState: 'error'
      };
    }
    SaveUser(){
      if (this.state.validation) {
        let id = this.props.mas[this.props.mas.length - 1].id;
        const user = { id: id + 1, Fname: this.state.valueF, Sname: this.state.valueS };
        store.dispatch(Actions.addUser(user, this.props.mas));
        this.props.updateProps();
        this.setState({ valueF: "", valueS: "", validation: false, validationState: 'error' });
      } else {
        alert('Заполните все поля, минимальное кол-во символов 2')
      }
    }
    validationState(){
      if (this.state.valueF.match(/\d/) === null && this.state.valueS.match(/\d/) === null) {
        if (this.state.valueF.length > 1 && this.state.valueS.length > 1) {
          this.setState({validationState: 'success', validation: true})
        }
      }
    }
    handleChange(e) {
        e.target.name === 'FirstName' ?
            this.setState({ valueF: e.target.value}, this.validationState) :
            this.setState({ valueS: e.target.value}, this.validationState)
    }
  
    render() { 
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.state.validationState}
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