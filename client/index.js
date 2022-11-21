import { configureStore } from '@reduxjs/toolkit'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './slices'
import App from './components/App'

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})

// import { configureStore } from '@reduxjs/toolkit'
// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import App from '../components/App'
// import reducer from '../slices'
// // import stuff from './stuff'

// document.addEventListener('DOMContentLoaded', () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>,
//     document.getElementById('app')
//   )
// })
