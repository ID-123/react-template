# Layout Configuration

## ¿Qué contiene esta carpeta?

Centraliza la configuración estructural de todos los layouts de la aplicación.

## Objetivo

Evitar que los componentes conozcan medidas fijas.

Los layouts consumen la configuración desde `dimensions.ts`, permitiendo modificar la estructura visual desde un único punto.

## Archivos

### interfaces.ts

Define los modelos utilizados por la configuración.

### dimensions.ts

Implementa la configuración de Navbar, Sidebar, Content y Footer.

### index.ts

Punto de entrada del módulo.