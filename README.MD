# Aplicación de Tareas - Angular 19 con Backend en Java 17

## Descripción
Este proyecto es una aplicación web para gestionar una lista de tareas. El frontend está desarrollado con Angular 19 y el backend en Java 17. La estructura del proyecto está dividida en dos carpetas:

- **frontend/** - Contiene la aplicación Angular 19.
- **backend/** - Contiene la API en Java 17 empaquetada como un archivo `.jar`.

## Requisitos
Para ejecutar correctamente este proyecto, asegúrate de tener instaladas las siguientes dependencias:

### Frontend
- Node.js (versión recomendada: 16 o superior)
- Angular CLI (versión compatible con Angular 19)

### Backend
- Java 17

## Instalación y Ejecución
### Backend
1. Navega a la carpeta `backend/`:
   ```sh
   cd backend
   ```
2. Ejecuta el archivo `.jar`:
   ```sh
   java -jar nombre-del-archivo.jar
   ```
3. El backend se ejecutará en `http://localhost:8080`.

### Frontend
1. Navega a la carpeta `frontend/`:
   ```sh
   cd frontend
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   ng serve
   ```
4. La aplicación estará disponible en `http://localhost:4200`.

## Características de la Aplicación
### Frontend
- Formulario para agregar tareas con:
  - Campo de texto para el nombre de la tarea.
  - Botón para agregar la tarea.
- Lista de tareas agregadas con opción para eliminarlas.
- Validaciones:
  - No permite agregar tareas vacías.
  - Muestra un mensaje si se intenta agregar una tarea sin nombre.
- Servicio Angular para consumir la API.

### Backend
- Endpoints REST para gestionar tareas:
  - **GET** `/demo/task` - Obtener todas las tareas.
  - **GET** `/demo/task/{id}` - Obtener una tarea por su ID.
  - **POST** `/demo/task` - Agregar una tarea.
  - **PUT** `/demo/task/{id}` - Actualizar una tarea.
  - **DELETE** `/demo/task/{id}` - Eliminar una tarea.
- Modelo de Tarea con:
  - ID único.
  - Nombre de hasta 100 caracteres.
  - Descripción.
  - Estado (Por hacer, en progreso, completado).

### Ejemplo de Endpoints
#### Obtener todas las tareas:
```json
GET /demo/task
Response: [{ "id": 1, "title": "Comprar leche", "description": "Ir al supermercado", "status": "Por hacer" }]
```

#### Obtener una tarea por ID:
```json
GET /demo/task/1
Response: { "id": 1, "title": "Comprar leche", "description": "Ir al supermercado", "status": "Por hacer" }
```

#### Agregar una tarea:
```json
POST /demo/task
Body: { "title": "Prueba1", "description": "Prueba 2", "status": "Por hacer" }
Response: { "id": 1, "title": "Prueba1", "description": "Prueba 2", "status": "Por hacer" }
```

#### Actualizar una tarea:
```json
PUT /demo/task/4
Body: { "title": "actualizado 4", "description": "Prueba 2", "status": "Por hacer" }
Response: { "id": 4, "title": "actualizado 4", "description": "Prueba 2", "status": "Por hacer" }
```

#### Eliminar una tarea:
```json
DELETE /demo/task/4
Response: 200 OK
```

## Configuración
Si es necesario, ajusta los valores de configuración del backend en el archivo `application.properties` o `application.yml` dentro de `backend/src/main/resources/`.

Para el frontend, verifica los valores en `environment.ts` y `environment.prod.ts` dentro de `frontend/src/environments/`.

## Contribución
1. Realiza un fork del repositorio.
2. Crea una rama con el nombre de tu función o bugfix: `git checkout -b feature/nueva-funcion`.
3. Realiza tus cambios y haz un commit: `git commit -m 'Agrega nueva función'`.
4. Sube tu rama al repositorio remoto: `git push origin feature/nueva-funcion`.
5. Abre un Pull Request.

## Entrega
1. Publicar el código fuente del frontend (Angular) y backend (Java) en un repositorio público de GitHub o GitLab.
2. Incluir este archivo README con instrucciones detalladas para ejecutar el proyecto.
3. Opcional: Capturas de pantalla o un video corto demostrando la funcionalidad.

## Licencia
Este proyecto está bajo la licencia MIT.

