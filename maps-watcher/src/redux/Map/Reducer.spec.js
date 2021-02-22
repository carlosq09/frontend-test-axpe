import map from './Reducer';
import { SET_MAP_ENTITY } from './Action';

describe('Map reducer', () => {
    it('SET_MAP_ENTITY - should set map object', () => {
        const action = {
            type: SET_MAP_ENTITY,
            payload: {
                map: {
                    testMap: 'test map'
                }
            }
        };
        const state = map([], action);

        expect(state).toEqual({
            map: {
                testMap: 'test map'
            }
        });
    })
})