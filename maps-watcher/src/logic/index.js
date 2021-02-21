const logic = {
    autocomplete(input) {
        return new Promise((resolve, reject) => {
            if (!input) {
                return reject('Need valid text input')
            }

            try {
                new window.google.maps.places.AutocompleteService().getPlacePredictions(
                    { input },
                    resolve
                )
            } catch (e) {
                reject(e)
            }
        })
    },

    getDetailsfromId(map, placeId) {
        return new Promise((resolve, reject) => {
            if (!placeId) return reject('Need "placeId" to get coordinates')
            if (!map) return reject('"Map" needs to be loaded to use retrieve Detail')

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