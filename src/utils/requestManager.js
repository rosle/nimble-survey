import axios from 'axios';

class RequestManager {
  static post(url, body) {
    axios.post(url, body);
  }
}
