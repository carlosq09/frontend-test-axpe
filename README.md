# frontend-test-axpe

Problemas:

1 - Uno de los problemas que podria traer realizar condicionales especificos (hard-coded) a futuro, es que si en algun momento se cambia el nombre del servicio (a por ejemplo en vez de llamarse StreamingService, se llama StreamingContent) fallaran estos campos y no se tomara en cuenta el valor del servicio aunque aun exista y tenga un valor, teniendo que aplicar este cambio en todas las capas involucradas

2- El precio no viene incluido en el servicio, si no que se debe consultar al contenido multimedia sobre el precio

3- el valor añadido va condicionado al tipo de contenido, dado que el campo es aditionalFee, si se quisiera añadir mas de un tipo de contenido (Premium, Estreno, Para niños, etc...) que tiene un valor añadido, habra que hacer multiples condicionales para poder sumar el valor




 ```js
  class RegisteredUser{
      constructor(service = []){
          this.services = services;
          this.total = 0;
      }

      getTotal (){
        return this.services.reduce((total, service) => {
            const multimediaContent = service.getMultimediaContent();

            total += service.contractedPrice;
            
            if(multimediaContent.hasOwnProperty(aditionalFee)){
                total += multimediaContent.aditionalFee
            }
        })
      }
  }
    
```