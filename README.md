# Api Rest - Mascotas y Mascotas

## Objetivos del Proyecto

-Construir una Api Rest con Express, nodejs, sequelize y mysql.
-Afirmar y conectar los conceptos aprendidos.
-Aprender mejores prácticas.
-Aprender y practicar el workflow de GIT.

## Ejecutar API

El proyecto cuenta con una carpeta: `api`. En esta carpeta estará el código del back-end.
En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=youruser
DB_PASSWORD=yourpassword
DB_NAME=dbname
DB_HOST=localhost
PORT=3000
```
Reemplazar `youruser`, `yourpassword`, `dbname` con tus propias credenciales para conectarte a la base de datos. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen una base de datos mysql con el nombre que deseen.

Vamos a instalar todas las dependencias usando `npm` sobre la carpeta `api`:

```bash
npm install
```
Seguido y sobre la carpeta `api` vamos a ejecutar `npm start` para que nodemon corra nuestra servidor:

```bash
npm start
```
Luego en nuestro navegador ingresamos a cualquiera de las siguientes rutas que contiene nuestra ApiRest:

- `http://localhost:3000/mascotas`
- `http://localhost:3000/usuarios`

Y finalmente veremos la Api en funcionamiento!.

Se creó un archivo `consumir.json` para tener datos de prueba en nuestra base de datos, serán los datos que veremos en nuestras rutas.

## Enunciado

La idea general es Construir una Api Rest en NODE JS que cumpla con lo siguiente:
- listar mascotas 
- listar usuarios
- filtrar mascotas y usuarios

#### Tecnologías necesarias

- [ ] Nodejs
- [ ] Express
- [ ] Sequelize
- [ ] Mysql


## Base de datos

El modelo de la base de datos tiene las siguientes entidades (Aquellas propiedades marcadas con asterísco son
obligatorias):

- [ ] Mascotas con las siguientes propiedades:
  - id (autoIncremental)*
  - nombre *
  - foto *
  - edad *
  - talla (pequeño, mediano o grande) *
  - adoptada (boolean) *
  - detalles

- [ ] Usuarios con las siguientes propiedades:
 - id (autoIncremental)*
  - nombre *
  - apellido *
  - email *
  - cedula *
  - telefono *
  - edad *
  - direccion *
  - trabajoActual *
  - numeroSeguridadSocial *
  - mascotasAdoptadas *

La relación entre ambas entidades es de uno a muchos ya que un Usuario puede adoptar varias Mascotas y, a su vez, una Mascota solo puede ser adopta por un Usuario.
## Backend

Se desarrolló un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /mascotas__:
  - Obtener un listado de todas las mascotas.
- [ ] __GET /mascotas?adoptada=false__:
  - Obtener las mascotas que esten en disponibles para adopción pasado como query parameter.
  - Si no existe ninguna mascota en adopción muestra un mensaje.
  - [ ] __GET /usuarios__:
  - Obtener un listado de todos los usuarios.
- [ ] __GET /usuarios?cantidad=2__:
  - Obtener los usuarios que tienen en adopción 2 mascotas pasado como query parameter.
  - Si no existe ningún usuario muestra un mensaje.


