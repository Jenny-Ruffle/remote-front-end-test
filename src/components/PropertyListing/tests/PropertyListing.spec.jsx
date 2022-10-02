import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import {mockProduct} from './mockData'

global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve([mockProduct, mockProduct, mockProduct, mockProduct, mockProduct])
}));

describe('PropertyListing', () => {        
    beforeEach(() => {
        fetch.mockClear();
    });
      
    it('should render five property cards', async () => {
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
