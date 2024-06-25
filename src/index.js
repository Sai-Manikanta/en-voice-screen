import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
// import GoogleTranslate from './GoogleTranslate'
// import TransliterateComponent from './TransliterateComponent'
// import GoogleTextToSpeech from './GoogleTextToSpeech'
// import AzureTextToSpeech from './AzureTextToSpeech'
// import AzureSpeech from './AzureSpeech'
// import SelectText from './TextSelect';
import reportWebVitals from './reportWebVitals';

// WORKING - TransliterateComponent.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <SelectText /> */}
      {/* <GoogleTranslate /> */}
      <App />
      {/* <TransliterateComponent /> */}
      {/* <GoogleTextToSpeech /> */}
      {/* <AzureTextToSpeech /> */}
      {/* <AzureSpeech /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
