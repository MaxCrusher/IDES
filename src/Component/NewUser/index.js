import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.css';
import TableS from '../TableS'
import Form from '../Form'

class NewUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            update: false
        }
    }
    updateProps = () =>{
        this.setState({
            update: true
        })
    }
    render(){
        return (
            <div className='content'>
                <Form updateProps={this.updateProps}/>
                <TableS update={this.state.update} component='newuser'/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      mas: state.mas.mas
    }
  }
export default connect(mapStateToProps)(NewUser)