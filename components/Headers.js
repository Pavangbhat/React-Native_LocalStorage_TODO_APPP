import React from 'react';
import {Header, Title, Left} from 'native-base';

const Headers = ({title, icon}) => {
  return (
    <Header
      style={{backgroundColor: '#63b7af'}}
      androidStatusBarColor="#63b7af">
      <Title style={{fontSize: 25, fontFamily: 'Kalam-Bold'}}>{title}</Title>
    </Header>
  );
};

export default Headers;
