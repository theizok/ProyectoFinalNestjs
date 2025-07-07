
# ProyectoFinalNestjs
Proyecto Biblioteca 

### Requisitos

Antes de iniciar, asegúrate de tener instalado:

- Node.js >= 18.x
- npm >= 9.x
- MySQL
- Git


## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio
git clone https://github.com/theizok/ProyectoFinalNestjs.git 
Dirigirse al directorio clonado

### 2. Instala dependencias
npm install

### 3. Configura el entorno
Crea el archivo .env en la raíz del proyecto con la configuración de la base de datos:

DB_HOST=host

DB_PORT=puerto

DB_USERNAME=username

DB_PASSWORD=tu_contraseña

DB_DATABASE=tubasededatos

Ademas de esto deberas crear la base de datos con el mismo nombre que tienes en el archivo de configuración para que el proyecto funcione correctamente. 

### 4. Corre el proyecto

npm run start:dev


### 🏗 Estructura General

src/

├── autor/

├── libro/

├── editorial/

├── prestamo/

├── usuario/

├── app.module.ts

├── main.ts

## Entidades

📦 autor/

Archivos clave:

    autor.controller.ts: Define las rutas HTTP (GET, POST, PATCH, DELETE) para autores.

    autor.service.ts: Contiene la lógica de negocio (crear, obtener, actualizar, eliminar).

    entities/autor.entity.ts: Define la entidad Autor (relaciones, columnas).

    dto/: Define los DTOs para validación y transformación de datos (por ejemplo, CreateAutorDto, AutorDto).

📚 libro/

Archivos clave:

    libro.controller.ts: Endpoints REST para libros.

    libro.service.ts: Lógica para manejar libros (crear, editar, eliminar).

    entities/libro.entity.ts: Entidad Libro, con relaciones a Autor, Editorial y Prestamo.

    dto/: DTOs que manejan los datos de entrada/salida, como CreateLibroDto, LibroDto.


🏢 editorial/

Archivos clave:

    editorial.controller.ts: Rutas HTTP para manipular editoriales.

    editorial.service.ts: Lógica relacionada con la creación, lectura y eliminación de editoriales.

    entities/editorial.entity.ts: Define la entidad Editorial (muchos a muchos con Libro).

    dto/: DTOs como CreateEditorialDto, EditorialDto.

🔄 prestamo/

Archivos clave:

    prestamo.controller.ts: Rutas para crear, listar, actualizar y eliminar préstamos.

    prestamo.service.ts: Lógica de negocio para manejar préstamos (asociación libro-usuario).

    entities/prestamo.entity.ts: Entidad Prestamo con relaciones ManyToOne a Usuario y Libro.

    dto/: DTOs como CreatePrestamoDto, CreatePrestamoFinalDto, PrestamoDto.

👤 usuario/

Archivos clave:

    usuario.controller.ts: API endpoints para usuarios.

    usuario.service.ts: CRUD de usuarios.

    entities/usuario.entity.ts: Entidad Usuario relacionada con Prestamo.

    dto/: CreateUsuarioDto, UsuarioDto.
    
---



### Colección de Postman
En la carpeta raiz del repositorio se encuentra el archivo con la colección de postman para probar los endpoints de las entidades.

### Autor

Isaac Ramirez
=======
