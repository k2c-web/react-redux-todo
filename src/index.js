import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

//console.log(store.getState())
//store.subscribe(() => console.log(store.getState()))
//store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'Test dispatch' } })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
