import * as axios from 'axios';

const SET_RATES = 'SET_RATES';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    base: null,
    date: null,
    rates: [],
    isFetching: false
}

const rateReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RATES:
        return{
            ...state,
            ...action.payload
        }
        case IS_FETCHING:
        return{
            ...state,
            isFetching: action.isfetching
        }
        default: 
            return state;
    }
}
export default rateReducer;

const setRates = ({base, date, rates}) => ({type: SET_RATES, payload: {base, date, rates}});
const isFetching = (isfetching) => ({type: IS_FETCHING, isfetching});

export const requestRates = () => async (dispatch) => {
    dispatch(isFetching(true))
    let response = await axios.get(`https://api.exchangeratesapi.io/latest?base=USD`);
    let {base, date, rates} = response.data;
    dispatch(setRates({base, date, rates}))
    dispatch(isFetching(false))
}
export const requestBaseValue = (value) => async (dispatch) => {
    if(value !== '--select value--'){
        dispatch(isFetching(true))
        let response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${value}`);
        let {base, date, rates} = response.data;
        dispatch(setRates({base, date, rates}))
        dispatch(isFetching(false))
    }
}
