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

En  app.js   importo 2 componentes desde   react-router-dom,  Routes y Route 
Se utilizan para definir  multiples rutas  y una sola ruta

En el return:
    coloco el componente <Routes>  y dentro cada <Route >
    con su path (ruta)  y  element(*1)

Creo en  src  la carpeta  components
Creo dentro los archivos .js   Home, Login, Register, Alert, ProtectedRoute

Componente Home:
    rfce (react funcional export component  TAB)
    quito import, export en lin function, 

En App (*1)  en element coloco el componente Home (lo importo arriba)
Hago lo mismo para los compoonentes   Login y Register

ESTILIZANDO CON TAILWINDCSS
envuelvo el <Route> dentro de un div con las clases
    .bg-slate-300-  h-screen   (colocan fondo, tamaño, abarcar alto max pantalla...)
[24:00]



CREANDO EL FORMULARIO PARA AÑADIR USUARIO
para poder conocer el estado de un usuario (logueado etc.) en forma general se usa el  CONTEXTO de REACT
Creo carpeta  context
Creo archivo   authContext.js
Creando un contexto:
    importo la funcion de React {createContext} desde 'react'
    la ejecuto   createContext(), devuelve un objeto, lo llamo context y guardo en variable 
Ese context  permite   definir un proveedor  y  devolver objetos

Creo una funcion   AuthProvider  *EN MAYUSCULAS pq es un COMPONENTE, va a devolver  JSX*
que retorna un componente  <context.Provider> desde context trae un provider
Dentro de este componente Provider  voy a colocar los componentes  HIJOS  Login Register, 
al ser hijos pueden acceder al Provider
paso la propiedad  children a la funcion  p q los componentes hijos accedan a las propiedades del padre

Dentro de AuthProvider  defino un objeto  user   con  login en true
Digo al Provider que va a tener un valor   value, que va a ser un objeto {}   el objeto user
Ahora los elementos  hijos  (children)  van a poder acceder a la propiedad  user
Exporto la funcion  p poder usarla en otro lado

Como a este componente  AuthProvider lo voy a tener que usar en varios componentes (Login, register y seguramente mas)
En vez de importarlo en c/u de ellos
lo hago en App

Ahora  ENVUELVO todas las RUTAS <Routes>  en el AuthProvider
Asi todos los componentes tienen acceso a   user   siempre

En  authContext  exporto el contexto   p poder usarlo en otro lugar
Ese contexto me va a permitir  p ej  desde  home  acceder al valor de user
El que CONTIENE EL VALOR  ES ESE CONTEXT
EL AUTHPROVIDER ES EL QUE PERMITE UTILIZARLO EN CUALQUIER COMPONENTE
en el home   importo el context  Y  el useContext  PARA PODER USAR EL DATO QUE DA CONTEXT
EN EL AUTHCONTEXT  se CREO EL CONTEXTO,  ahora en el home para USARLO debo usar la funcion    useContext

Ahora  en  home  puedo leer ese contexto
    const authContext = useContext(context)
    veo por consola  el objeto user

Para no tener que hacer tantas importaciones en cada componente que use ese  user   creo un HOOK
Un HOOK PERSONALIZADO en   authContext    useAuth

en Home   Ya no tengo que importar    useContext  y  context [comentado]

en  authContext    importo el  useContext
dentro de la funcion  useAuth   ejecutamos el  useContext, le pasamos el  contexto
POR CLARIDAD   RENOMBRO    CONTEXT  COMO  AUTHCONTEXT   EN   authContext.js  (en   const  y  return)

Ahora si, el  useAuth   usa ese  useContext,  lo guardo en var   context
Exporto  el nuevo  context   y todo sigue funcionando, 
ahora solo tengo que llamar a  useAuth  desde cualquier lado y obtengo el context

Ahora en  home   solo ejecuto el  useAuth (importarlo) , devuelve un objeto, llamo  authContext

Mejorando, no traigo TODO el objeto   authContext  sino solo   user  {user}  y muestro por consola  (comentado ///)
ahora accedo directamente a los valores   no al objeto completo
[36:00]
dejo todo esto comentado en  home - era para entender la logica

en   authContext  se puede agregar 
    if (!context) throw new Error('No hay un Provider...') 
antes del return   por si no esta definido el  <Provider> ...  en App



REGISTER USER  [39:00]
