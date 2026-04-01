## Descripción clara del proyecto
# NETWORKX-API
API REST desarrollada con Node.js, Express y MongoDB.  
Incluye registro, login con JWT y ruta protegida para obtener el perfil del usuario.
## Requisitos previos
# Requisitos
- Node.js v18 o superior
- MongoDB instalado y corriendo en local
- Postman para pruebas
## Instalación paso a paso
# Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/pachodavid1988/NETWORKX-API.git
## Entrar a la carpeta:
cd NETWORKX-API
## Instalar dependencias:
npm install
## Crear archivo .env con:
- 
MONGO_URI=mongodb://127.0.0.1:27017/networkx
JWT_SECRET=miclaveultrasecreta
PORT=4000
- 
## Levantar servidor:
npm run dev

- Rutas de la API
## Rutas
- `POST /api/auth/register` → Registro de usuario
- `POST /api/auth/login` → Login y obtención de token
- `GET /api/users/me` → Perfil del usuario (requiere token en el header)

## Evidencia con capturas

<img width="1922" height="1125" alt="image" src="https://github.com/user-attachments/assets/9fa481e8-1ff9-407b-aa87-449942086446" />
<img width="1908" height="1125" alt="image" src="https://github.com/user-attachments/assets/b74c2d5e-02ae-4fd2-8433-7f4a853fd0b5" />
<img width="1898" height="1125" alt="image" src="https://github.com/user-attachments/assets/85171adb-30b4-4307-9292-4f75e440d2fc" />



