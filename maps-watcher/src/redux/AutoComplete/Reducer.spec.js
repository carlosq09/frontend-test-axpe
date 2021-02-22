import autocomplete from './Reducer';
import { AUTOCOMPLETE_SUCCESS, CLEAR_RESULTS } from './Action';

describe('Autocomplete reducer', () => {
    it('AUTOCOMPLETE_SUCCESS - should set search results', () => {
        const testResults = [{
            barcelona: {
                lat: 41.390205,
                lng: 2.154007,
            }
        }];

        const action = {
            type: AUTOCOMPLETE_SUCCESS,
            payload: {
                results: testResults,
                query: 'test'
            }
        };
        const state = autocomplete([], action);

        expect(state).toEqual({
            results: testResults,
            query: 'test'
        });
    })

    it('CLEAR_RESULTS - should clear results and query', () => {
        const initial = {
            results: [{
                barcelona: {
                    lat: 41.390205,
                    lng: 2.154007,
                }
            }],
            query: 'test'
        };

        const action = {
            type: CLEAR_RESULTS,
            payload: {
                results: [],
                query: ''
            }
        };
        const state = autocomplete(initial, action);

        expect(state).toEqual({
            results: [],
            query: ''
        });
    })
})