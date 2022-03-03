function recibirCredenciales(nombre,correo,password,plan, callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            correo:correo,
            password:password,
            plan:plan
        }
    callback(usuario)
    },10000)
}
recibirCredenciales("Juanita","correofalso123@gmail.com","falso1234567","1",function(usuario){
    console.log(`señor usuario ${usuario.nombre} bienvenido a HBO max, disfrutaras de tu plan que es: ${usuario.plan}`)
})

