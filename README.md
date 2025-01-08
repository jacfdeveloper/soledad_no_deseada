# Soledad no deseada - Seguimiento de Personas Mayores - Cruz Roja

Este proyecto es una aplicación web desarrollada para la Cruz Roja con el objetivo de llevar un registro de las interacciones entre voluntarios y personas mayores que experimentan soledad. Permite a los voluntarios documentar sus visitas, llamadas telefónicas u otras formas de contacto, facilitando el seguimiento y la coordinación de la asistencia.

## Características principales

* **Registro de interacciones:** Los voluntarios pueden registrar detalles de cada interacción, incluyendo la fecha, hora, tipo de contacto, duración y un breve resumen.
* **Gestión de voluntarios:** Permite agregar, editar y eliminar información de los voluntarios, incluyendo su nombre, datos de contacto y disponibilidad.
* **Gestión de personas mayores:** Permite agregar, editar y eliminar información de las personas mayores, incluyendo su nombre, datos de contacto, necesidades especiales y preferencias de contacto.
* **Informes y estadísticas:** Ordena la lista de las personas mayores que requieren mayor atención.
* **Autenticación segura:** Protege la información sensible con un sistema de autenticación robusto distinguiendo el acceso a la base de datos dependiendo del rol desde el que se accede.
* **Interfaz de usuario intuitiva:** Facilita la navegación y el uso de la aplicación tanto para voluntarios como para administradores.

## Tecnologías utilizadas

* **Backend:** Node.js, Express, MySQL
* **Frontend:** React
* **Testing:** Jest
* **Otros:**  (Aquí puedes añadir otras tecnologías o librerías utilizadas, como por ejemplo para la autenticación, manejo de fechas, etc.)

## Instalación

1. Clona el repositorio: `git clone https://github.com/jacfdeveloper/soledad_no_deseada.git`
2. Instala las dependencias del backend: `cd server && npm install`
3. Instala las dependencias del frontend: `cd client && npm install`
4. Configura las variables de entorno: Crea un archivo `.env` en la carpeta `server` y configura las siguientes variables:
MYSQL_URL=tu_host_de_mysql MYSQL_USER=tu_usuario_de_mysql MYSQL_PASS=tu_contraseña_de_mysql MYSQL_USER_VOLUNTEER=tu_usuario_de_mysql MYSQL_PASS_VOLUNTEER=tu_contraseña_de_mysql JWT_SECRET=tu_secreto_jwt

5. Inicia el servidor: `npm run dev` (en la carpeta `server`)
6. Inicia la aplicación frontend: `npm start` (en la carpeta `client`)

## Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando en la carpeta `server`:

```bash
npm test
