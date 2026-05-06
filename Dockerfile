FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Configurar usuario root para evitar problemas de permisos
USER root

# Instalar dependencias globales si es necesario
RUN npm install -g pnpm

# Configurar directorio de trabajo
WORKDIR /workspace

# Optimizamos: No instalamos aquí si lo haremos en el postCreateCommand, 
# o lo dejamos aquí pero quitamos el del json para ganar velocidad.
COPY package*.json ./
RUN npm install

# Copiar resto del código
COPY . .

# Exponer puerto
EXPOSE 3000

# EL CAMBIO CLAVE: --host 0.0.0.0
# Esto permite que el puerto sea accesible desde fuera del contenedor.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]