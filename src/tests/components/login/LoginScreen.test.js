import React from 'react'

import { mount } from "enzyme";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen/>', () => {

    const history = {
        replace:jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: 'Ivan'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history} />
        </AuthContext.Provider>
    );
    
    test('Se tiene que mostrar de manera correcta', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de realizar el dispatch y la navegacion', () => {
        
        const handleClick =  wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name : 'Ivan'
            }
        });

        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');
        
    })
    
})
