import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Header from '../components/MainHeader';
import Footer from '../components/Footer';
import School from '../assets/school.svg';
import Grade from '../assets/grade.svg';


export default function Main( props ) {
  const {navigate} = props.navigation;

  return(
    <>
    <Header main={true} navigate={navigate}/>

      <View style={styles.container}>

        <ImageBackground style={styles.profileImage} imageStyle={{ borderRadius: 25 }} source={require('../assets/match.jpeg')}>
          <LinearGradient
              style={{width: '100%', height:'100%', borderRadius: 25}}
              colors={['transparent', '#000']}
              start={[0.3,0.4]}
              end={[2,2]}>
            <View style={styles.description}>
              <Text style={styles.texts}>
                <Text style={styles.name}> Dani </Text>
                16
              </Text>
              <Text style={styles.texts}><School /> ITB brasílio flores de azevedo</Text>
              <Text style={styles.texts}><Grade /> Informatica 1F</Text>
            </View>
          </LinearGradient>
        </ImageBackground>

      </View>

    <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    maxWidth: 350,
    height: '100%',
    maxHeight: 550
  },
  description: {
    marginLeft: 20,
    position: 'absolute',
    bottom: 10
  },
  texts: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
  },
  name: {
    fontSize: 32,
    fontWeight: '500',
  },
  icon: {
    height: 20,
    width: 20,
  }
})