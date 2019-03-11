import React, { Component } from 'react';
class Person  extends Component {
  constructor(props) {
  super(props);

  this.state = {
    firstName: "",
    submitedFirstName: "",
    firstDate :"",
      submitedFirstDate: "",
      firstAbout :"",
        submitedFirstAbout: ""
  };
}

inputChange = e => {
  const firstName = e.target.value;
  this.setState(() => ({ firstName }));
};
inputChange1 = e => {
  const firstDate = e.target.value;
  this.setState(() => ({ firstDate }));
};
inputChange2 = e => {
  const firstAbout = e.target.value;
  this.setState(() => ({ firstAbout }));
};
displayNameHandler = e => {
  e.preventDefault();
  this.setState(prevState => ({ submitedFirstName: prevState.firstName,
                                submitedFirstDate: prevState.firstDate,
                               submitedFirstAbout: prevState.firstAbout }));
};
render(){
  return(

      <div className='center'>
      <form onSubmit={this.handleSubmit}>
      <h4 className='container center'>Person Information</h4>
      <br/ >
      <h6 className='changes' >Name:<input type="text" name="firstName" onChange={this.inputChange}/>
      Birth Date:<input type="text" name="firstDate" onChange={this.inputChange1}/>
      <br/>
      <br/>
      About Me:
      <br/><textarea id="area" name="firstAbout" onChange={this.inputChange2}>
      </textarea>
      <br/>
      <br/>
      <br/>
      <input type="Submit" onClick={this.displayNameHandler}/>
      </h6>
      </form>
      <br/><br/><br/><br/><br/><br/><br/>
{this.state.firstName !=="" && this.state.firstDate !=="" &&this.state.firstAbout !=="" &&
      <div className="display">
          Name  :
          {this.state.submitedFirstName && this.state.submitedFirstName}
          <br/><br/>
          BirthDate  :
          {this.state.submitedFirstDate && this.state.submitedFirstDate}
          <br/><br/>
          About Me  :
          {this.state.submitedFirstAbout && this.state.submitedFirstAbout}
        </div>
      }
      </div>
  )
}
}
export default Person;
