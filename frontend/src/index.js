import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './styles/bootstrap.min.css'
import './styles/index.css'
// import './styles/soft.css'
import './styles/style.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
