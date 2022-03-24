const saga = (store) => {
    const sagamid = (next) => {
        return (action) => {
            let result = next(action);
            return result;
        };
    };

    sagemid.run = () => {

    }
    return sagamid;
}