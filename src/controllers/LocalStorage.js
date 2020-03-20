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
}

export default LocalStorage;
