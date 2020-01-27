import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';

import icon from '../assets/icon.png';

export default function Messages( props) {
  const { navigate } = props.navigation;

  return (
    <>
    <Header navigate={navigate} message={true} />
    <ScrollView style={styles.container}>
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
      <MatchChat icon={icon} name='Cauã' />
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
})

