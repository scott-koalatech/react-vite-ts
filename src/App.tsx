import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import RouterComponent from './routes'
// import { DotLoading } from 'antd-mobile'; // mobile version


function App() {

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          Hello World
          <RouterComponent />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
