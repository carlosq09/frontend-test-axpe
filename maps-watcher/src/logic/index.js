const logic = {
    autocomplete(input) {
        
        new Promise((resolve, reject) => {
            if (!input) {
                return reject("Need valid text input")
            }

            try {
                
                new window.google.maps.places.AutocompleteService().getPlacePredictions(
                    { input, componentRestrictions: { country: "gb" } },
                    resolve
                )
            } catch (e) {
                reject(e)
            }

        })
    }
}

export default logic