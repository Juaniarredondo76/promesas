function recibirCredenciales(nombre,correo,password,plan){
     
     let promesa=new Promise(function(resolve,resject){

        setTimeout(function(){
            let usuario={
                nombre:nombre,
                correo:correo,
                password:password,
                plan:plan
            }
            console.log("Hey baby")
            //resolve("bienbenido a HBO Max " + usuario.nombre)
            resject("PAGUE GONORREA " + usuario.nombre)
        },3000)
     })
     return promesa
}
recibirCredenciales("Juanita","correofalso123@gmail.com","falso1234567","1")
//.then(function(respuesta){
  .catch(function(respuesta){
    console.log(respuesta)
})



