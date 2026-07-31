# 🎬 Multicine React/TypeScript

Proyecto de aprendizaje y plantilla base para aplicaciones React escalables.

> Este repositorio no busca únicamente construir una aplicación funcional, sino servir como una **plantilla reutilizable** para futuros proyectos desarrollados con React, TypeScript y una arquitectura modular.

---

# Objetivos

* Aprender React desde sus fundamentos.
* Dominar TypeScript aplicado a React.
* Construir una arquitectura escalable.
* Aplicar buenas prácticas de desarrollo profesional.
* Mantener una estructura reutilizable para futuros proyectos.

---

# Tecnologías

* React
* TypeScript
* Vite
* React Router DOM
* Tailwind CSS

---

# Filosofía del proyecto

Este proyecto se desarrolla siguiendo una premisa sencilla:

> **Comprender antes de implementar.**

Cada decisión de arquitectura debe tener un motivo claro.

No se agregan archivos, carpetas o librerías únicamente porque "así lo hacen los tutoriales".

---

# Estado del proyecto

## Sprint 0 - Arquitectura Base

### Completado

* Configuración inicial con Vite.
* Integración de Tailwind CSS.
* Configuración de React Router DOM.
* Configuración de alias (`@`).
* Primera estructura de carpetas.
* Primer Layout reutilizable.
* Primeras rutas anidadas.
* Primer uso de `Outlet`.

---

# Estructura actual

```text
src/

├── app/
│   ├── App.tsx
│   ├── layouts/
│   ├── providers/
│   ├── router/
│   └── README.md
│
├── assets/
├── config/
├── features/
├── hooks/
├── services/
├── shared/
├── store/
├── styles/
├── types/
└── utils/
```

---

# Arquitectura

La estructura sigue una separación clara de responsabilidades.

## app/

Responsable de ensamblar la aplicación.

Aquí viven:

* Router principal
* Providers
* Configuración inicial
* App.tsx

No debe contener lógica de negocio.

---

## features/

Contiene las funcionalidades del sistema.

Ejemplos futuros:

```text
features/

auth/

movies/

booking/

profile/

admin/
```

Cada feature es independiente del resto.

---

## shared/

Contiene recursos reutilizables.

Ejemplos:

```text
shared/

components/

layouts/

navigation/

ui/

icons/
```

Todo lo que pueda ser compartido entre distintas features pertenece aquí.

---

## services/

Comunicación con APIs.

Ejemplos futuros:

* Auth API
* Movies API
* Booking API

---

## store/

Estado global de la aplicación.

---

## hooks/

Hooks reutilizables.

---

## utils/

Funciones auxiliares.

---

## config/

Configuraciones globales.

---

## types/

Tipos compartidos.

---

## assets/

Recursos estáticos.

---

# Router

Actualmente el proyecto utiliza React Router DOM mediante:

* BrowserRouter
* Routes
* Route
* Outlet

La intención inicial es comprender el funcionamiento interno del enrutamiento antes de migrar a la API moderna basada en `createBrowserRouter`.

---

# Layouts

Actualmente existe:

## AuthLayout

Responsabilidad:

* Mostrar la estructura común de las páginas de autenticación.
* Renderizar el contenido mediante `<Outlet />`.

No contiene lógica de autenticación.

No valida permisos.

No conoce usuarios.

Solo organiza la interfaz.

---

# Alias

El proyecto utiliza el alias:

```ts
@
```

que apunta a:

```text
src/
```

Ejemplo:

```ts
import { LoginPage } from "@/features/auth/pages/LoginPage";
```

Esto evita imports largos con múltiples `../../`.

---

# Convenciones

## Una responsabilidad por archivo

Cada archivo debe tener un único propósito.

Ejemplos:

* `App.tsx` inicia la aplicación.
* `AppRouter.tsx` organiza las rutas.
* `AuthLayout.tsx` organiza la vista de autenticación.
* `LoginPage.tsx` representa la página de inicio de sesión.

---

## Componentes pequeños

Se priorizan componentes pequeños y fáciles de mantener sobre componentes grandes con múltiples responsabilidades.

---

## Organización modular

Cada funcionalidad debe mantenerse aislada dentro de su propia feature.

---

## Barrel Exports

Cuando una carpeta representa un módulo reutilizable se utiliza un `index.ts` como punto de entrada público.

Ejemplo:

```text
LoginPage/

LoginPage.tsx

index.ts
```

Desde otros módulos:

```ts
import { LoginPage } from "@/features/auth/pages/LoginPage";
```

---

# Próximos objetivos

## Sprint 0

* PublicLayout
* DashboardLayout
* RegisterPage
* NotFoundPage
* Rutas protegidas
* Placeholders
* Navbar
* Footer
* Sidebar
* Navegación modular

---

## Sprint 1

* Sistema de autenticación
* Formularios
* Validaciones
* Context API
* Persistencia de sesión

---

## Sprint 2

* Gestión de películas
* Consumo de API
* Listados
* Detalles

---

## Sprint 3

* Reservas
* Dashboard de usuario
* Dashboard de administrador
* Gestión de permisos

---

# Objetivo final

Construir una aplicación completamente funcional que sirva como:

* Proyecto de portafolio.
* Base para futuros desarrollos.
* Referencia de arquitectura en React + TypeScript.
* Material de estudio para comprender la relación entre componentes, rutas, layouts y organización del código.

---

# Aprendizaje esperado

Al finalizar este proyecto se espera comprender:

* Arquitectura de proyectos React.
* Organización por features.
* React Router.
* Layouts reutilizables.
* Componentes desacoplados.
* TypeScript aplicado a React.
* Buenas prácticas de desarrollo.
* Escalabilidad de aplicaciones frontend.

---

# Licencia

Proyecto desarrollado con fines educativos y de aprendizaje.
