
/*------------------------------ DECLARACION DE ARRAYS---------------------------------*/

const flota = [
    {locomotora: "8231", eot: "44000"},
    {locomotora: "8232", eot: "44001" },
    {locomotora: "8233", eot: "44002"},
    {locomotora: "9090", eot: "44003"},
    {locomotora: "9101", eot: "44004" },
    {locomotora: "9100", eot: "44005" },
    {locomotora: "9037", eot: "44006"},
    {locomotora: "6596", eot: "44007" },
    {locomotora: "6624", eot: "44008" },
    {locomotora: "6634", eot: "44009" }

]



/* -------------------------------DECLARACION DE VARIABLES---------------------------------- */


let agregarLoc = 0
let agregarEot = 0
let solo = 0
let seleccion 

const resultadoLoc = 0

/* --------------------------FUNCIONES------------------------- */

   function agregar() { // Funcion para agregar un nuevo objeto a la flota     
                             
                    
               
                  agregarLoc = prompt("Ingrese la locomotora que desea ingresar a la flota")
                   
                   const resultadoLoc = flota.some((i) => i.locomotora == agregarLoc)
                   const resultadoObj = flota.find((i) => i.locomotora == agregarLoc)                                  
                                                                     
                   if ( resultadoLoc == true) { // Verifica si la Loc ingresada se encuentra en la base de datos
                     
                   alert ("Loc: " + agregarLoc + " ya figura en la base de datos")
                   
                   console.log(resultadoObj) // Muestra por consola el objeto completo donde se encuentra la Loc ingresada
                   }                 
                                 
                                    
                   else if(resultadoLoc != true){
                   
                    masEot() // Llama a la funcion masEot   
                  }     
                      
                    }



    
        function masEot(){




            agregarEot = prompt("Ingrese el EOT que se asignará a loc: " + agregarLoc)
            
            const resultado = flota.some((el) => el.eot == agregarEot)
            
             if (resultado == true){ // Verifica si el EOT ingresado ya existe en la base de datos
           alert("EOT N°: " + agregarEot  + " ya está asignado")
           
          
          }
           else if(resultado != true){ // Si la Locomotora y el EOT no existen en la base de datos, agrega un nuevo objeto a la flota
            alert("Se dará de alta en el registro: Locomotora: " + agregarLoc + ";" + "Telémetro N°: " + agregarEot)
            flota.push({locomotora: agregarLoc, eot: agregarEot })
           
           }

        }


        function modificar(){ //modifica un EOT a una locomotora existente
                                    
          let busquedaEot = prompt("Ingrese el número de EOT que desea asignarle a Loc: " ) 

         const resultadoEot = flota.some( (el) => el.eot == busquedaEot) // true o false
          
         if (resultadoEot == true){  // Verifica si el EOT ingresado ya está cargado
         
            alert("Este EOT ya se encuentra cargado")

          const resultado = flota.find((i) => i.eot == busquedaEot) // Busca el elemento para mostrar a que locomotora está asignado el EOT ingresado

          
          
          console.log(resultado)}

            else if (resultadoEot != true){ // busca la posición de la locomotora
         
               let busquedaLoc = prompt("Ingrese el número de locomotora a la que desea asignar el EOT N°: " + busquedaEot)  
        
         let posicion
          for (let i = 0; i < flota.length; i++){
            if(flota[i].locomotora == busquedaLoc){
               posicion = i
               break
            }
          }


          flota.splice(posicion, 1) // Elimina el objeteo de la posición obtenida anteriormente
          flota.push({locomotora: busquedaLoc, eot: busquedaEot }) //agrega el objeto ingresado por el usuario
          
          
         }}
         


         function eliminar(){ // Elimina un objeto de la lista


                 
         let busquedaLoc = prompt("ingrese el número de locomotora que desea eliminar del registro ")  
           
         const ubicacion = flota.some((i) => i.locomotora == busquedaLoc)

         if(ubicacion == true){ // Verifica si existe la Loc ingresada en la base de datos

            let posicion

             for (let i = 0; i < flota.length; i++){
               if(flota[i].locomotora == busquedaLoc){
                  posicion = i
                  break
               }
             }
             const resultado = flota.find((i) => i.locomotora == busquedaLoc) 
             
             console.log(resultado ) // Muestra el objeto eliminado por consola

             flota.splice(posicion, 1) // Elimina el objeteo de la posición obtenida anteriormente
                       
             
            }
         else if(ubicacion != true){

            console.log("La locomotora ingresada no está registrada en el sistema")
            console.log(flota)
         }
         
         
         }
          
    /*-----------------------------PROGRAMA PRINCIPAL---------------------------------------*/
   
   
    do{ 
   
      seleccion = prompt("1- Agregar objeto a la flota" + "\n" + "2- Modificar Eot a una locomotora" + "\n" +
    "3- Eliminar una locomotora de la flota" + "\n" +"4- Ver lista de la flota" + "\n"  + "5- terminar")

   

   if(seleccion == 1){
      agregar()
   }

   else if(seleccion == 2){
      modificar()
   }

   else if(seleccion == 3){
      eliminar()
   }

   else if (seleccion == 4){
      flota.forEach( (el) => {
         console.log(el)
         
      } )
      break
      
   }
   
    else if(seleccion == 0 || seleccion == 4 || seleccion > 5){
      alert("Ingresó una opción inválida")
   
    }
   }  while(seleccion != 5)

