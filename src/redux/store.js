/* eslint-disable */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { locationsReducer } from './locationReducer';
import { preformanceReducer } from '../components/preformance/preformance.Reducer';

export const rootReducer = combineReducers({
    locations: locationsReducer,
    form: formReducer,
    preformance: preformanceReducer 
  });

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;