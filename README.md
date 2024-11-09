<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```bash
pnpm install
```

3. Tener Nest CLI instalado
```bash
pnpm i -g @nestjs/cli
```

4. Levantar la base de datos
```bash
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrarlo a `.env`

6. Asigar valor a las variables de entorno definidas en el archivo `.env`

7. Ejecutar la aplicación en dev:
```bash
pnpm run start:dev
```

8. Reconstruir la base de datos con la semilla (seed)
```bash
http://localhost:3000/api/v2/seed # Añadir el token de autenticación solo para administradores, desarrolladores, etc.
```

<!-- 5. Ejecutar
```bash
nest start
```

6. Abrir el navegador
```bash
http://localhost:3000/api/v2/pokemons
```

7. Para cerrar la base de datos
```bash
docker-compose down
``` -->

## Stack utilizado

- NestJS
- TypeScript
- Docker
- Docker Compose
- MongoDB
- @nestjs/mongoose
<!-- - TypeORM -->

## Autor

[Ahriman](https://github.com/ahriman)