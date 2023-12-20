import React, { createContext, useReducer } from 'react';

const initialState = {
    userName: "",
    appointmentData: [],
    reviewFormData: [],
    isLoggedIn: false
};

export const AppContext = createContext();

