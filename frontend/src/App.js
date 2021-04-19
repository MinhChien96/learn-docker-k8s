import { Provider } from 'react-redux';
import logo from './logo.svg';
import Product from 'Features/Product';
import ConfigureStore from 'Store/ConfigureStore';
import './App.css';

const store = ConfigureStore();

function App() {
    return (
        <Provider store={store}>
            <Product />
        </Provider>
    );
}

export default App;
