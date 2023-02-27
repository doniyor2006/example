import React from 'react';
import { Component } from 'react';
import Appstyle from './AppStyled';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/main.css";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   Form,
//   FormFeedback,
//   FormGroup,
//   FormText,
//   Label,
//   Input,
//   Button,
// } from 'reactstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
      <Appstyle>
         <h1 className='wrapper'>Salom Doniyor</h1>
      </Appstyle>
      </>
    );
  }
}

export default App;
