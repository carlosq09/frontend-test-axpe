import suggestions from './Reducer';
import { ADD_MARKER, REMOVE_MARKER } from './Action';

describe('Markers reducer', () => {
    it('ADD_MARKER - should set marker object', () => {
        const testMarker = [{
            description: 'barcelona',
            place_id: 'testId',
            barcelona: {
                lat: 41.390205,
                lng: 2.154007,
            }
        }];

        const action = {
            type: ADD_MARKER,
            payload: testMarker
        };
        const state = suggestions([], action);

        expect(state).toEqual([testMarker]);
    }),

    it('REMOVE_MARKER - should one specified marker', () => {
        const initialState = [{
            description: 'barcelona',
            place_id: 'testId',
            barcelona: {
                lat: 41.390205,
                lng: 2.154007,
            }
        }];

        const action = {
            type: REMOVE_MARKER,
            payload: 'testId'
        };
        const state = suggestions(initialState, action);

        expect(state).toEqual([]);
    })
})