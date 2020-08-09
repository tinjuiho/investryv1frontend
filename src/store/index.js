import { createStore } from 'redux';

import { Journal } from '../reducers';

const store = createStore(Journal);

export default store;

export { default as AmplifyBridge } from './AmplifyBridge';
