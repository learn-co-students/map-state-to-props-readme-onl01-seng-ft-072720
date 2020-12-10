import React, { Component } from 'react';
// goal: to only re-render our App component when specific changes to the state occur,
//this  synced up to our store, listening to each change in the state that occurs
import { connect } from 'react-redux'; /* code change */
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// start of code change
//When a change occurs, it calls a function that we write called mapStateToProps(), 
//and in mapStateToProps() we specify exactly which slice of the state we want to provide to
// our component. Here, we want to provide state.items, and allow our component to have access to them through a prop called items. 
const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
//Then we have to say which component in our application we are providing this 
//data to: you can see that we write connect(mapStateToProps)(App) to specify 
//that we are connecting this state to the App component. 
// Finally this entire connect() method returns a new component, it looks like 
//the App component we wrote, but now it also receives the correct data. 
//This is the component we wish to export. So at the bottom of the file, you see: