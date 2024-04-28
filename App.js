import React from 'react'
import StackNavigatior from './src/navigation/index'
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigatior />
    </Provider>
  )
}

