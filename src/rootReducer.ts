import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as authReducer } from './auth/reducer';
import { reducer as formReducer } from './form/reducer';

import { combineReducers } from 'redux';
import { IFetchFulfilledAction } from './async';

const dataReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_ROOT_JSON_FULFILLED':
            return action.response;
        case 'UPDATE_OLD_DATA':
            return action.currentData;
        default: return state;
    }
};

const schemaReducer = (state: any = {}, action: IFetchFulfilledAction) => {
    switch (action.type) {
        case 'FETCH_SCHEMA_FULFILLED':
            return action.response;
        default: return state;
    }
};

export const rootReducer = combineReducers({
    auth:    authReducer,
    current: formReducer,
    data:    dataReducer,
    schema:  schemaReducer,
    toastr:  toastrReducer
});
