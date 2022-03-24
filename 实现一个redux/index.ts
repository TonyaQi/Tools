// const store = createStore(reducer, init, middle);--=


const createStore = (reducers, middle) => {
    if(middle) {
        return middle(createStore)(reducers);
    }
    let store = {};
    let listen = [];
    let isDispatching = false;
    
    return {
        getState: () => {
            return store;
        },
        subScribe: (fn) => {
            listen.push(fn);
            return () => {
                listen.filter(item => item !== fn);
            }
        },
        dispatch: (action) => {
            if(!isDispatching) {
                store = reducers(store, action);
                listen.forEach((item) => item());
                isDispatching = false;
            }
            return action;
        }
    }
}

const combineReducers = (reducers) => {
    return function newReducer (state, action) {
        let nextStates = {};
        let changed = false;
        Object.keys(reducers).forEach((key) => {
            nextStates[key] = reducers[key](state[key], action);
            changed = false || nextStates[key] !== state[key]
        })

        return changed ? nextStates : state;
    }
}

const applyMiddleware = (...middles) => {
    return (createStore) => {
        return (reducer) => {
            const store = createStore(reducer);
            const midApi = {
                getState: store.getState,
                dispatch: store.dispatch
            }

            const middlesList = middles.map(middle => middle(midApi));
            const dispatchPlus = compose(...middlesList)(store.dispatch);

            return {
                state: store.getState,
                dispatchPlus,
            }
        }
    } 
}

const compost = (fnList) => {
    if(fnList.length === 0) return arg => arg;
    if(fnList.length === 1) return (arg) => fnList[0](arg)
    return fnList.reduce((a, b) => (...arg) => a(b(...arg)));
}

const myMiddle = ({getState, dispatch}) => {
    return (dispatchPlus) => {
        return function returnDispatch (action) {
            console.log('before');
            dispatchPlus(action); // 向下执行
            console.log('after');
        }
    };
}
