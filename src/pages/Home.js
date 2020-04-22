/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';

import UserImage from '../components/UserImage';
import Header from '../components/MainHeader';
import Match from '../components/Match';

import Like from '../assets/like.svg';
import Dislike from '../assets/dislike.svg';

import ApiController from '../controllers/ApiController';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    bottom: 0,
    alignItems: 'center',
  },
  dislike: {
    left: '50%',
    marginLeft: '18%',
  },
  textComponent: {
    width: '100%',
    maxWidth: 350,
    height: '100%',
    maxHeight: 550,

    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',

    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 28,
  },
});

const Home = ({ navigation }) => {
  const { navigate } = navigation;
  const [isMatch, setIsMatch] = useState(false);
  const [match, setMatch] = useState();

  const Api = new ApiController();
  
  const handleGetNewMatch = async () => {
    const ApiMatch = await Api.getNewMatch();
    setMatch(ApiMatch);
  };

  const handleLike = async (matchId) => {
    await Api.like(matchId);
    handleGetNewMatch();
  };

  const handleDislike = async (matchId) => {
    await Api.dislike(matchId);
    handleGetNewMatch();
  };

  useEffect(async () => {
    await handleGetNewMatch();
  }, []);

  return (
    <>
      <Header main navigate={navigate} />
    
      <View style={styles.container}>
        {match ? (
          <>
            <UserImage user={match} />
            <Match
              match={match}
              isMatch={isMatch}
              setIsMatch={setIsMatch}
            />
          </>
        ) : (
          <View style={styles.textComponent}>
            <Text style={styles.text}> Sem pretendentes, redefina suas preferencias</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislike} onPress={() => handleDislike(match._id)}>
          <Dislike />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dislike} onPress={() => handleLike(match._id)}>
          <Like />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
