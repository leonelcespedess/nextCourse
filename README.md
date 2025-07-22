# Proyecto de Aplicación de Cursos de Next.js y TypeScript

Este proyecto es una instancia práctica para aplicar y consolidar los conocimientos adquiridos a través de los siguientes cursos y tutoriales sobre Next.js, Prisma y TypeScript:

### Cursos y Tutoriales de Referencia

**Next.js y Prisma:**

- **Estructura de Next.js:** [Ver video en YouTube](https://www.youtube.com/watch?v=6jQdZcYY8OY)
- **Next.js con Prisma (Primeros Pasos):** [Ver video en YouTube](https://www.youtube.com/watch?v=QXxy8Uv1LnQ)
- **Documentación oficial de Prisma:** [Leer documentación](https://www.prisma.io/docs/guides/nextjs)

**TypeScript:**

- **Curso de TypeScript (YouTube):** [Ver video en YouTube](https://www.youtube.com/watch?v=K01hLNDdqg4)
- **Curso de seguimiento (Boot.dev):** [Ir al curso](https://www.boot.dev/lessons/9ff0528f-d79d-45b1-80a2-6ff34aae3785)

El objetivo principal fue construir una aplicación rapida y basica para probar estas tecnologías.

## Cómo Probar el Proyecto

Para iniciar y probar este proyecto en tu entorno local, sigue estos pasos:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/leonelcespedess/nextCourse.git
cd nextCourse
```

### 2. Instalar Dependencias

Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias del proyecto:

```bash
npm install
```

### 3. Configurar la Base de Datos

Este proyecto utiliza Prisma como ORM. Para configurar tu base de datos, ejecuta la migración:

```bash
npx prisma migrate dev
```

Esto creará la base de datos SQLite y aplicará el esquema definido.

### 4. (Opcional) Poblar la Base de Datos con Datos de Ejemplo

Puedes poblar la base de datos con datos iniciales ejecutando el script de seed:

```bash
npx prisma db seed
```

### 5. Iniciar el Servidor de Desarrollo

Una vez completados los pasos anteriores, puedes iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto en funcionamiento.

## Variables de Entorno

Para conectar la aplicación a una base de datos (especialmente en un entorno de producción o si no usas el SQLite local), es necesario configurar un archivo `.env` en la raíz del proyecto.

### Ejemplo de `.env`

Crea un archivo llamado `.env` y añade la URL de conexión a tu base de datos. Por ejemplo, para una base de datos PostgreSQL:

```env
# Ejemplo de URL de conexión para PostgreSQL
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

**Nota:** El archivo `prisma/schema.prisma` ya está configurado para usar esta variable de entorno. Asegúrate de que tu proveedor de base de datos sea compatible.
