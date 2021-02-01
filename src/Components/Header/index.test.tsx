import React from 'react';
import Header from './index';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
describe('Tests for header component', () => {
    it('Should render', async () => {
        const { getByRole } = render(<Header />);
        const containerElement = getByRole('banner');
        expect(containerElement).toBeTruthy();
    });
     it('Should render all Menu items', () => {
         const { getByText, getAllByRole } = render(<Header />);
         expect(getByText('Filmes')).toBeInTheDocument();
         const containerElement = getAllByRole('img');
         expect(containerElement.length).toEqual(2);
     })

})