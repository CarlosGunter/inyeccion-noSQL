# 🛡️ NoSQL Injection - Proyecto de Demostración

Este proyecto muestra un ejemplo de vulnerabilidades de inyección NoSQL usando el [Sample AirBnB Listings Dataset](https://www.mongodb.com/docs/atlas/sample-data/sample-airbnb/).

## 📋 Requisitos previos

- Node.js (se recomienda la version 22 o superior)
- pnpm o npm

## ⚙️ Instalación

### 📌 Recomendación: Usar pnpm

#### 🛠️ Instalación de pnpm

Actualizar corepack:
```bash
npm install --global corepack@latest
```

Habilitar pnpm:
```bash
corepack enable pnpm
```

### 📂 Clonar el repositorio

```bash
git clone https://github.com/CarlosGunter/inyeccion-noSQL
cd inyeccion-noSQL
```

### 📦 Instalar dependencias

Con pnpm:
```bash
pnpm install
```

Con npm:
```bash
npm install
```

### 📝 Configuración del entorno

1. Crea un archivo `.env` en la raíz del proyecto basándote en el ejemplo `.env.example`:

```bash
cp .env.example .env
```

2. Edita el archivo `.env` para configurar las variables de entorno necesarias, como la URL de conexión a MongoDB.

## 🚀 Ejecución del proyecto

### 🧑‍💻 Modo desarrollo

Con pnpm:
```bash
pnpm dev
```

Con npm:
```bash
npm run dev
```
