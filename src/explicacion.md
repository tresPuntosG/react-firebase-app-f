React & Firebase Login con API Context (Firebase Authentication) y Tailwindcss
Fazt 
Youtube:  https://www.youtube.com/watch?v=H_vEJt5Id_I&t=4557s

Requisitos: 
NodeJs
Visual Stucio Code
Conocimientos de  html  css  js  node  react  Firebase




COMENZANDO, INSTALANDO DEPENDENCIAS, FIREBASE

Desde Consola
En la carpeta donde queramos el proyecto:
    npx create-react-app [nombre del proyecto]

En la carpeta  src  elimino cosas que no voy a usar:  
    logo  App.test

Edito App.js,  elimino todo el contenido
Creo un componente basico de react:
    rfce    autocompleta
    elimino import (ya no es necesario)   cambio el return


Instalo dependencias:

Tailwindcss:  https://tailwindcss.com/
framework de css  o   biblioteca de utilidades
Get started  -  frameworks guides  -  create-react-app 
    npm install -D tailwindcss postcss autoprefixer
se instalan esas 3 dependencias
    npx tailwindcss init -p
crea archivo de configuracion de  tailwinds
Edito  tailwinds.config.js
en content   añado esto dentro de la lista content: (esto esta explicado en la web paso a paso)
    "./src/**/*.{js,jsx,ts,tsx}",
Edito   index.css,  borro lo que tenga y añado:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;    
En App.js  cambio el return por:
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
asi verificamos que todo funciona
Probamos con    
    npm start

[7:50]
ir a Firebase en la web,  Consola
Crear proyecto [react-fb-auth]

Para CONECTAR la aplicacion al proyecto  
buscar   firebase npm
https://www.npmjs.com/package/firebase

(
Documentacion oficial:
buscar Firebase doc
comienza a usar web
https://firebase.google.com/docs/web/setup
)

instalo con 
    npm i firebase

para configurarlo  CREO un archivo   firebase.js  en src
allí hay que poner las CREDENCIALES DE FIREBASE  (usuario / contraseña ...)

en Firebase / descripcion del proyecto / configuracion:
ir abajo en  tus App    <>   Registrar app

Se genera una porcion de  codigo js  para agregar a nuestro  html
copiar  y  pegar en  firebase.js

    el import trae una funcion   initializeApp  desde  firebase/app
    al ejecutarla (initializeAPP) le pasa un objeto de configuracion (firebaseConfig) 
    devuelve una aplicacion   guardo en  (var) const app
    con esto se inicializa la conexion a Firebase

agrego  import {getAuth} from 'firebase/auth';
esa funcion sirve para autnenticar 

ejecuto  getAuth, le paso parametro (app) lo guardo en var  auth
con este objeto voy a poder autenticar usuario (tambien con google, FB, etc...)

exporto las dos 
comprobar con  npm start  q siga todo OK

[14:00]



REACT ROUTER DOM
Creando las RUTAS de la aplicacion
https://reactrouter.com/
buscar  instalacion  create-react-app
    npm install react-router-dom

hay que englobar toda la aplicacion en un componente llamado
    BrowserRouter
se puede hacer en   index.js   donde esta el componente  inicial / root 
importo el componente BrowserRouter  de  react-router-dom
[16:00]



