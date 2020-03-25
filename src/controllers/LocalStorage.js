import { AsyncStorage } from 'react-native';

class LocalStorage {
  async setJwt(token) {
    this.token = token;
    await AsyncStorage.setItem('jwt', this.token);
  }

  async getJwt() {
    await AsyncStorage.getItem('jwt').then((token) => { this.token = token; });
    return this.token;
  }

  async setMatch(user) {
    this.user = user;
    await AsyncStorage.setItem('match', this.user);
  }

  async getMatch() {
    await AsyncStorage.getItem('match').then((user) => { this.user = user; });
    return this.user;
  }

  async setEmail(email) {
    this.email = email;
    await AsyncStorage.setItem('email', this.email);
  }

  async getEmail() {
    await AsyncStorage.getItem('email').then((email) => { this.email = email; });
    return this.email;
  }
}

export default LocalStorage;
