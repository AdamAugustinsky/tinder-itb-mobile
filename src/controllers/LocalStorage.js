import { AsyncStorage } from 'react-native';

class LocalStorage {
  async setUser(user) {
    this.user = user;
    await AsyncStorage.setItem('user', JSON.stringify(this.user));
  }

  async getUser() {
    await AsyncStorage.getItem('user').then((user) => { this.user = user; });
    return this.user;
  }

  async setMatch(match) {
    this.match = match;
    await AsyncStorage.setItem('match', this.match);
  }

  async getMatch() {
    await AsyncStorage.getItem('match').then((match) => { this.match = match; });
    return this.match;
  }

  async setEmail(email) {
    this.email = email;
    await AsyncStorage.setItem('email', this.email);
  }

  async getEmail() {
    await AsyncStorage.getItem('email').then((email) => { this.email = email; });
    return this.email;
  }

  async setPassword(password) {
    this.password = password;
    await AsyncStorage.setItem('password', this.password);
  }

  async getPassword() {
    await AsyncStorage.getItem('password').then((password) => { this.password = password; });
    return this.password;
  }
}

export default LocalStorage;
