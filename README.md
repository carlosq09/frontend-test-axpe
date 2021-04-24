# Frontend-test-AXPE

## Exercise 1

Problemas:

![Alt text](./doc/images/uml-original.png "mapa original")
![Alt text](./doc/images/original-code.png "codigo original")

1 - El codigo hace uso de muchos condicionales (if) para las operaciones, a futuro esto puede resultar en un codigo dificil de mantener

2- El precio no viene incluido en el servicio, si no que depende una segunda clase (MultimediaContent)

3- el valor añadido va condicionado(if) al tipo de contenido, a futuro podria existir mas tipos de contenidos con valor añadido (Premium, Exclusivo, etc...)

El enunciado ya menciona que el codigo es pseudocodigo, pero a tomar en cuenta:

 - el uso de "typeof" retorna uno de los tipos basicos (string, number, boolean, object, function), no puede ser utilizado para comprobar si una variable es instancia de una clase (en ese caso usariamos "instanceOf")

 - como esperamos recibir un valor unico a partir de un array, podemos utilizar el metodo "reduce" en vez de "forEach" (haciendo el codigo mas semantico y legible)

Soluciones:

![Alt text](./doc/images/uml-modified.png "mapa modificado")

 ```js
  class RegisteredUser{
      constructor(service = []){
          this.services = services;
      }

      getTotal (){
        return this.services.reduce((total, service) => {
            const servicePrice = service.price;
            
            if(service.hasOwnProperty('aditionalFee')){
                servicePrice += service.aditionalFee
            }

            return total + servicePrice
        })
      }
  }
    
```

1 - Se aplica el principio KISS, dado que los precios (tanto el precio base como el aditionalFee) vienen incluido en el servicio directamente

2-  Se depende solamente de la clase mas cercana "Service" y no de la segunda clase "MultimediaContent", la cual si a futuro llegase a cambiar la implementacion de esta segunda clase, afectaria al comportamiento (ley de Demeter)

## Exercise 2
Ir a /maps-watcher
* [React Marker Demo](maps-watcher/README.md)
