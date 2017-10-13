import React, { Component } from 'react';

class NumberInput extends Component{
constructor(props) {
  super(props)

  this.state = {
    your_number: '',
    number_fact: '',
    number_fact_show_hide: 'hide'
  }
}

update_num_input = (e) => {
  this.fetchNumberFact(e.target.value)
}

fetchNumberFact = (input_num) => {
  if (input_num) {
    fetch('http://numbersapi.com/'+input_num)
    .then(r => r.text())
    .then(data => {
      this.setState({
        number_fact: data,
        number_fact_show_hide: 'show'
      })
    })
    .catch(e => {
      console.log(e)
    })
    
  } else {
    this.setState({
      number_fact_show_hide: 'factHolder hide'
    })			
  }
}

submitFalse = (e) => {
  e.preventDefault();
}  

render() {
  return (
    <div>
      <div className="col-xs-12 col-md-3"></div>
      <div className="col-xs-12 col-md-6">
        <div className="formHolder">
          <h1>Enter a Number to Get an Interesting Fact</h1>
          <form onSubmit={this.submitFalse}>
            <div className="form-group">
              <input type="number" name="your_number" className="form-control num-input" onChange={this.update_num_input} />
            </div>
          </form>						
        </div>
        <div className={'factHolder '+this.state.number_fact_show_hide}>
          {this.state.number_fact}
        </div>
      </div>
    </div>
  )
}
}


export default NumberInput;