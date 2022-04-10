
import React from 'react';
import {Text,StyleSheet} from 'react-native';
import Login from "./src/screen/Login";
import Verification from "./src/screen/Verification";
import CreateInvoice from "./src/screen/CreateInvoice";
import Home from "./src/screen/Main/Home";
import ColorPicker from './src/component/ColorPicker'
import AuthNav from "./src/nav/auth/authNav";

const App = () => {

  return (
      <AuthNav/>
  );
};

const styles = StyleSheet.create({

});

export default App;
