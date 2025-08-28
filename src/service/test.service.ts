
import ENV from '../env/environment';
import { Storage } from '@ionic/storage';
import HttpService from './HttpService';

const store = new Storage();

export default {
  testENV(payload: any) {
    store.create()
    store.set('test', payload)
    return ENV.MAIN_ENDPOINT
  },
  getAccount() {
    store.create()
    const data = store.get('test')
    return data
  },
  removeAccount() {
    store.create()
    const data = store.remove('test')
  },
};
