import LocalStorage from './LocalStorage';
import api from '../services/api';

export default class ApiController {
  constructor() {
    this.Storage = new LocalStorage();
  }

  async getNewMatch() {
    const response = await api.get('/users', { headers: { Authorization: `Bearer ${this.jwt}` } });
    await this.Storage.setMatch(response.data[0]);
    this.match = await this.Storage.getMatch();
    return this.match;
  }

  async like(matchId) {
    await api.post(`/profile/likes/${matchId}`, {}, { headers: { Authorization: `Bearer ${this.jwt}` } });
  }

  async dislike(matchId) {
    await api.post(`/profile/deslikes/${matchId}`, {}, { headers: { Authorization: `Bearer ${this.jwt}` } });
  }
}
