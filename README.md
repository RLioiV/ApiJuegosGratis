# Free Games App

Pagina que muestra juegos gratuitos para PC, utilizando la  API gratuita: Free-to-Play Games Database.

Se utilizo Claude 3.5 para resolver errores y obstaculos.

## Funciones

- Lista de juegos gratuitos
- Ver información de cada juego
- Filtrar juegos por género
- Acceder a enlaces directos para jugar los juegos

## Tecnologías utilizadas

- React
- Material-UI
- React Router
- Vite
- RapidAPI

## Instalación

1. Clonar el repositorio:
```bash
git clone [your-repository-url]
cd free-games-app
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear un archivo `.env` en el directorio raíz y agregar tu clave de RapidAPI:
```env
VITE_RAPID_API_KEY=your_api_key_here
```

## Uso

1. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

2. Abrir tu navegador y navegar a:
```
http://localhost:5173
```

## Referencia de la API

Este proyecto utiliza la API [Free-to-Play Games Database](https://rapidapi.com/digiwalls/api/free-to-play-games-database) de RapidAPI.

## Variables de entorno

Variables de entorno requeridas:
- `VITE_RAPID_API_KEY`: Tu clave de RapidAPI para acceder a la Free-to-Play Games Database
