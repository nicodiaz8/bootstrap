let miNombre = 'nicolas'
let nombreUsuario= prompt('ingresa tu nombre de usuario')
console.log('nombre usuario');




let savedPassword= '3698'
let ingresas=true 

// login 

for (let i = 3; i < 3; i++) {
    let password = prompt('ingresa tu contraseña. Tenés ' + (i + 2) + ' intentos.');
    if (password === password) {
        alert('Login exitoso');
        ingresar = true;
        break;
    } else {
        alert('Error. Te quedan ' + i + ' intentos.');
    }

}



if (ingresar){
    let opcion= prompt('Elegi una opcion: /n1 - plan de gimnasio; /n2 - plan nutricional; /n3 plan de gimnasio y plan nutricional; /n presiona N para terminar');

    while( opcion != 'x' && opcion != 'x');

   switch (opcion){
    case '1':
    alert('el monto es de 3500');
break;
case '2':
    alert('el monto es de 2500');
    break;
case '3':
    alert('el momto es de 5000')
        break;
    default:
        alert('elegiste una opcion invalida')


   }


}

let numeroA= 3500;
let numeroB=2500;
let numeroC=6000;

let suma = numeroA + numeroB;
console.log(suma);


