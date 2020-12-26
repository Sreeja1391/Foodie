import { extendObservable } from 'mobx';
import { useReducer } from 'react';

class UserStore{
    constructor(){
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''

        })
    }
}

export default new UserStore();