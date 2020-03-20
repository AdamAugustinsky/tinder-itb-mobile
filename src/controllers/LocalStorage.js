import { AsyncStorage } from 'react-native';

class LocalStorage {
  async setJwt(token) {
    this.jwtToken = token;
    await AsyncStorage.setItem('jwt', this.jwtToken);
  }

  async getJwt() {
    await AsyncStorage.getItem('jwt').then((jwt) => { this.token = jwt; });
    return this.token;
  }

  async setMatch(user) {
    this.userInformations = user;
    await AsyncStorage.setItem('match', this.userInformations);
  }

  async getMatch() {
    this.user = await AsyncStorage.getItem('match');
    return this.user;
  }
}

export default LocalStorage;
