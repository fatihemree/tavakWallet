import React from 'react';

import Container from '../components/core/Container.js';
import Title from '../components/core/Text.js';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <ImageBackground
          source={require('../assets/img/headerTree.png')}
          style={{flex: 0.6}}
        />
        <Container>
          <Input placeholder="Adınız" />
          <Input placeholder="Soyadınız" />
          <Button
            buttonStyle={{
              backgroundColor: '#00D811',
            }}
            containerStyle={{
              marginTop: 12,
              width: '100%',
              height: '20%'
            }}
            title="Devam Et"
          />
        </Container>
      </>
    );
  }
}

export default LoginPage;
