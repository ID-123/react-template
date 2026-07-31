# app

## ¿Qué responsabilidad tiene?

Inicializar y ensamblar toda la aplicación.

Desde aquí se conectan el router, los layouts, los providers y la configuración global.

---

## Contiene

- App.tsx
- Router
- Layouts
- Providers

---

## No contiene

- Componentes de negocio
- Servicios
- Hooks específicos
- Formularios
- Features

---

## Regla

Si un archivo conoce cómo funciona una película, una reserva o un usuario, NO pertenece aquí.