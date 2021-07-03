//import logo from './logo.svg';
import {applyMiddleware, createStore} from 'redux';
import productReducer from './reducers/product_reducer';
import restapiReducer from './reducers/restapireducer';
import urlrestapiReducer from './reducers/url_restapireducer'; 
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import {ProductApp} from './components/productapp'
import FProductApp from './func_components/appfunc';
import FRProductApp from './reduxfunc_components/rappfunc';
import FRAProductApp from './restapi_reduxfunc_components/rappfunc';
import FRAPProductApp from './url_restapi_reduxfunc_components/rappfunc';
import EditProductForm from './url_restapi_reduxfunc_components/reditfunc';

function App() {
const UrlRestapiStore=createStore(urlrestapiReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)));
const RestapiStore=createStore(restapiReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)));
const ProductStore=createStore(productReducer);

  return (
    <div className="App">
      <div className="half">
       <ProductApp/> 
       </div>
       <div className="half">
      <FProductApp/>
      </div>
      <Provider store={ProductStore}>
      <div className="half">
      <FRProductApp/>
      </div>
      </Provider>
      <Provider store={RestapiStore}>
      <div className="half">
      <FRAProductApp/>
      </div>
      </Provider>
      <Provider store={UrlRestapiStore}>
      <div className="half">
        <BrowserRouter>
        <Switch>
          <Route path='/' component={FRAPProductApp} exact/>
          <Route path='/edit/:id' component={EditProductForm}/>
        </Switch>    
        </BrowserRouter>
      </div>
      </Provider>
    </div>
  );
}

export default App;
