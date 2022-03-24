// provider 使用context 传递 store
import React from 'react';

const Contextshili = React.createContext();
const Provider = (props) => {
    return (
        <Contextshili.Provider value={props.store}>
            {props.children}
        </Contextshili.Provider>
    );
}


const connect = ({
    mapstatetoprops,
    mapdispatchtoprops
}) => (Component) => {
    const store = React.useContext(Contextshili);
    const [state, setState] = React.useState(store.getState());

    store.subScribe(() => {
        setState(store.getState())
    });

    return (props) => {
        return <Component {...props} {...mapstatetoprops(state)} {...mapdispatchtoprops(store.dispatch)} />
    }
}