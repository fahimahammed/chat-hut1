import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';

import Login from '../components/Login';

test('renders learn react link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  
    expect(getByText(/learn/i)).toBeInTheDocument();
  });