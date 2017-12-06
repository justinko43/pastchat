import * as types from '../constants/actionTypes';

const initialState = {
    number: 0,
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ONE:
            let number = ++state.number;
            return {
                number: number,
            }
    }
}