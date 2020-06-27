/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import LoginPage from './screens/LoginPage.js';
import styled from 'styled-components';
import {Input} from 'react-native-elements';



const App: () => React$Node = () => {
  return (
    <LoginPage></LoginPage>
  );
};

export default App;
