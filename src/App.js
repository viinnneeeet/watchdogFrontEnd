import { Provider } from 'react-redux'//todo
import { store, persistor } from './Redux/Store'//todo
import { PersistGate } from 'redux-persist/integration/react'//todo
import { createBrowserHistory } from 'history'//todo

function App() {
    const hist = createBrowserHistory()
    console.log(hist)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>Watchdog</PersistGate>
        </Provider>
    )
}

export default App
