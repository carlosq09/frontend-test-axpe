import logic from '.'

describe('logic', () => {
    let windowSpy

    beforeEach(() => {
        windowSpy = jest.spyOn(window, "window", "get");

        windowSpy.mockImplementation(() => ({
            google: {
              maps: {
                  places: {
                      PlacesService: jest.fn().mockReturnValue({
                        getDetails: jest.fn().mockImplementation((placeId, cb) => cb(placeId))
                    }),
                      AutocompleteService: jest.fn().mockReturnValue({
                        getPlacePredictions: jest.fn().mockImplementation((query, cb) => cb(query))
                      })
                  }
              }
            }
        }))
    }),

    afterEach(() => {
        jest.restoreAllMocks()
      });

    describe('autocomplete', () => {
        it('should give make the request object for google places loader',  (done) => {
            const query = 'test'
            
            logic.autocomplete(query).then((requestObject) => {
                expect(requestObject.input).toBe(query)
                done()
            })
            windowSpy.mockRestore();
        })
        it('should fail if no query',  (done) => {
            
            logic.autocomplete().then(() => { 
                throw Error('should not reach this point')
            }).catch(error => {
                expect(error).toBe('Need valid text query')

                done()
            })
        })
    }),

    describe('getDetails', () => {
        it('should give make the request object for google places to retrieve detail',  (done) => {
            const TestId = '12345test'
            const fakeMap = {}
            
            logic.getDetailsfromId(fakeMap, TestId).then((requestObject) => {
                expect(requestObject.placeId).toBe(TestId)
                done()
            })

        }),

        it('should fail if no query',  (done) => {
            const fakeMap = {}

            logic.getDetailsfromId(fakeMap).then(() => { 
                throw Error('should not reach this point')
            }).catch(error => {
                expect(error).toBe('Need "placeId" to get coordinates')

                done()
            })
        }),

        it('should fail if no map object',  (done) => {
            const TestId = '12345test'

            logic.getDetailsfromId(null, TestId).then(() => { 
                throw Error('should not reach this point')
            }).catch(error => {
                expect(error).toBe('"Map" needs to be loaded to retrieve Details')

                done()
            })
        })
    }),

    describe('sessionStorage', () => {
        it('should set result object in session storage',  () => {
            const testQuery = 'test'
            const testObject = { test: 'test'}

            const StorageSpy = jest.spyOn(Storage.prototype, 'setItem');

            logic.setInStorage(testObject, testQuery)
            expect(StorageSpy).toHaveBeenCalledWith(testQuery, JSON.stringify(testObject))
        })
    })
})