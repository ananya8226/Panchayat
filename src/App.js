import './App.css';
import { BrowserRouter } from "react-router-dom";
import { MainRoute } from './router/MainRouter';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/app/modules/redux/store';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <MainRoute />
            <ToastContainer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;