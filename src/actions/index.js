import axios from 'axios';

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = (results) => ({
    type: 'LOAD_RESULT',
    payload: results
});

export const getResult = searchTerm => {
    console.log(searchTerm)
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const repos = await fetchRepos(searchTerm)
            console.log('repos', repos)
            dispatch(loadResult(repos))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
const fetchRepos = async searchTerm => {
    try {
        console.log('fetch')
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
        console.log(data)
        return data;
    } catch (err) {
        // if (data.status === 404) { throw Error('No repos found for that user') }
        throw new Error(err.message)
    }
}