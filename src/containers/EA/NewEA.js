import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addHour} from '../../redux/actions/hourActions'

class NewEA extends Component {
 
  constructor(props) {
    super(props); 
    
    this.state = { 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {

    e.preventDefault();
    var hour = {
      id_emp: 1,
      activity: this.props.hour.activity,
      start_date: new Date(),
      end_date: new Date()
    }
    console.log(hour)
    this.props.addHour(hour);
    this.props.history.push('/ea')
  }
  
  handleChange(e) { 
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    })
    
    this.props.hour[name]= value;

  }

  render() {
    return (
      <div className="container">

        <br /><br /><br />
        <h4>New Hour</h4>

        <form onSubmit={this.handleSubmit}>
 
          <div class="form-group">
            <label for="dateInput">Date</label>
            <input type="date" class="form-control" id="dateInput" placeholder="" />
          </div>
          <div class="form-group">
            <label for="amountInput">Amount</label>
            <select class="form-control" id="amountInput" value={this.props.hour.amount} 
              onChange={this.handleChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="24">24</option>
            </select>
          </div>
          <div class="form-group">
            <label for="activitiesInput">Activities</label>
            <textarea class="form-control" id="activitiesInput" name="activity" value={this.props.hour.activity} onChange={this.handleChange} />
          </div>

        </form>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary float-right">Save</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    error: state.error,
    unpaidHours: state.hourReducer.unpaidHours,
    pending: state.pending,
    hour: state.hourReducer.hour
  }
}
 
const mapDispatchToProps = dispatch => bindActionCreators({ 
  addHour: addHour
}, dispatch)  

export default (connect(mapStateToProps, mapDispatchToProps))(NewEA); 
 
