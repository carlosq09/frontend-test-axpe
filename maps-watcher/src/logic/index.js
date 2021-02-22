const logic = {
    setInStorage(item, key) {
        const cache = sessionStorage.getItem(key)
        if(cache) return null;
    
        sessionStorage.setItem(key, JSON.stringify(item));
    },

    autocomplete(query) {
        return new Promise((resolve, reject) => {
            if (!query) {
                return reject('Need valid text query')
            }
            //check if search is stored previously
            const storage = sessionStorage.getItem(query);
            const cachedRequest = storage && JSON.parse(storage)
            if(cachedRequest) resolve(cachedRequest)
            //if not make request
            try {
                new window.google.maps.places.AutocompleteService().getPlacePredictions({ input: query }, resolve)
            } catch (e) {
                reject(e)
            }
        })
    },

    getDetailsfromId(map, placeId) {
        return new Promise((resolve, reject) => {
            if (!placeId) return reject('Need "placeId" to get coordinates')
            if (!map) return reject('"Map" needs to be loaded to retrieve Details')

            try {
                new window.google.maps.places.PlacesService(map).getDetails({
                    placeId
                }, resolve);
            } catch (e) {
                reject(e)
            }
        })
    }
}

export default logic