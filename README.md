
![Licencia](https://img.shields.io/badge/licencia-TheQAHub-green)
![Cypress](https://img.shields.io/badge/cypress-v14.0.3-blue)
![Versión](https://img.shields.io/badge/version-Mayo_2025-yellowgreen)

# 🌐 Cypress – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos y ejemplos utilizados en los vídeos del canal [TheQAHub](https://www.youtube.com/@theqahub_es) sobre **Cypress**, el framework de testing end-to-end más popular para aplicaciones web.

---

## 📁 Estructura del Proyecto

```bash
/cypress/
└── e2e/
    ├── primerSpec.cy.js
    └── ejemplos-de-comandos/
        ├── querying/
        │   ├── cy.get().cy.js
        │   ├── cy.contains().cy.js
        │   ├── cy.root().cy.js
        │   ├── .within().cy.js
        │   └── mejoresPracticas.cy.js
        ├── traversal/
        │   ├── cy.children().cy.js
        │   ├── cy.closest().cy.js
        │   ├── cy.eq().cy.js
        │   ├── cy.filter().cy.js
        │   ├── cy.find().cy.js
        │   ├── cy.first().cy.js
        │   ├── cy.last().cy.js
        │   ├── cy.next().cy.js
        │   ├── cy.nextAll().cy.js
        │   ├── cy.nextUntil().cy.js
        │   ├── cy.not().cy.js
        │   ├── cy.parent().cy.js
        │   ├── cy.parents().cy.js
        │   ├── cy.parentsUntil().cy.js
        │   ├── cy.prev().cy.js
        │   ├── cy.prevAll().cy.js
        │   ├── cy.prevUntil().cy.js
        │   └── cy.siblings().cy.js
        ├── actions/
        │   ├── cy.blur().cy.js
        │   ├── cy.check().cy.js
        │   ├── cy.clear().cy.js
        │   ├── cy.click().cy.js
        │   ├── cy.dblclick().cy.js
        │   ├── cy.focus().cy.js
        │   ├── cy.rightclick().cy.js
        │   ├── cy.scrollIntoView().cy.js
        │   ├── cy.scrollTo().cy.js
        │   ├── cy.select().cy.js
        │   ├── cy.submit().cy.js
        │   ├── cy.trigger().cy.js
        │   ├── cy.type().cy.js
        │   └── cy.uncheck().cy.js
        ├── window/
        │   ├── cy.document().cy.js
        │   ├── cy.title().cy.js
        │   └── cy.window().cy.js
        ├── viewport/
        │   └── cy.viewport().cy.js
        ├── location/
        │   ├── cy.hash().cy.js
        │   ├── cy.location().cy.js
        │   └── cy.url().cy.js
        ├── navigation/
        │   ├── cy.go().cy.js
        │   ├── cy.reload().cy.js
        │   └── cy.visit().cy.js
        └── misc/
            ├── cy.end().cy.js
            ├── cy.exec().cy.js
            ├── cy.focused().cy.js
            ├── cy.screenshot().cy.js
            └── cy.wrap().cy.js
```

---

## 📌 Contenido de los Ejemplos

### 📂 `querying/` – **Lección: Querying**

Comandos para seleccionar y encontrar elementos en el DOM:

- `cy.get()` – Selección por selectores CSS (`#id`, `.clase`, `[attr=value]`).
- `cy.contains()` – Busca elementos por texto visible.
- `cy.root()` – Accede al elemento raíz del DOM o contexto `.within()`.
- `.within()` – Limita los comandos dentro de un contenedor específico.
- `mejoresPracticas.cy.js` – Recomendaciones para selectores estables (`data-cy`, `id`, `role`).

---

### 📂 `traversal/` – **Lección: Traversal**

Comandos para navegar el DOM desde un elemento base:

- `cy.children()` – Hijos directos.
- `cy.closest()` – Ancestro más cercano.
- `cy.eq()` – Elemento por índice.
- `cy.filter()` – Filtrado por selector.
- `cy.find()` – Buscar descendientes.
- `cy.first()` – Primer elemento.
- `cy.last()` – Último elemento.
- `cy.next()` / `nextAll()` / `nextUntil()` – Hermanos siguientes.
- `cy.not()` – Excluir elementos que coincidan con un selector.
- `cy.parent()` – Padre inmediato.
- `cy.parents()` – Todos los ancestros.
- `cy.parentsUntil()` – Ancestros hasta un selector.
- `cy.prev()` / `prevAll()` / `prevUntil()` – Hermanos anteriores.
- `cy.siblings()` – Todos los hermanos.

---

### 📂 `actions/` – **Lección: Actions**

Comandos que simulan acciones del usuario:

- `cy.blur()` – Quita el enfoque.
- `cy.check()` / `uncheck()` – Interactúa con checkboxes y radios.
- `cy.clear()` – Limpia un campo de texto.
- `cy.click()` – Simula un clic.
- `cy.dblclick()` – Doble clic.
- `cy.focus()` – Enfoca manualmente.
- `cy.rightclick()` – Clic derecho.
- `cy.scrollIntoView()` – Hace scroll hasta un elemento.
- `cy.scrollTo()` – Hace scroll a una coordenada o posición.
- `cy.select()` – Selecciona una opción en un `<select>`.
- `cy.submit()` – Envía formularios.
- `cy.trigger()` – Dispara eventos personalizados.
- `cy.type()` – Escribe texto.
- `cy.uncheck()` – Desmarca un checkbox o radio.

### 📂 `window/` – **Lección: Window-Viewport-Location-Navigation**

Comandos para acceder al contexto global del navegador:

- `cy.window()` – Accede al objeto global `window`.
- `cy.document()` – Obtiene el `document` actual.
- `cy.title()` – Obtiene el título de la página.

### 📂 `viewport/` – **Lección: Window-Viewport-Location-Navigation**

Comando para simular distintos tamaños de pantalla:

- `cy.viewport()` – Ajusta el tamaño de la ventana del navegador para simular diferentes dispositivos.

### 📂 `location/` – **Lección: Window-Viewport-Location-Navigation**

Comandos para obtener información de la URL actual:

- `cy.hash()` – Obtiene el fragmento hash de la URL (`#...`).
- `cy.location()` – Accede a propiedades como `pathname`, `host`, `protocol`, etc.
- `cy.url()` – Retorna la URL completa actual.

### 📂 `navigation/` – **Lección: Window-Viewport-Location-Navigation**

Comandos para controlar la navegación en la aplicación:

- `cy.visit()` – Carga una nueva URL.
- `cy.go()` – Navega hacia adelante o atrás en el historial del navegador.
- `cy.reload()` – Recarga la página actual.

### 📂 `misc/` – Lección: Misc

Comandos misceláneos para utilidades y control avanzado:

- `cy.end()` – Termina la cadena de comandos en curso.
- `cy.exec()` – Ejecuta comandos del sistema directamente desde Cypress.
- `cy.focused()` – Devuelve el elemento actualmente enfocado.
- `cy.screenshot()` – Toma capturas de pantalla durante la prueba.
- `cy.wrap()` – Envuelve un objeto o valor para integrarlo en la cadena de Cypress.

---

## 🎬 Videos del Curso

Cada carpeta está asociada a una lección del canal [TheQAHub](https://www.youtube.com/@theqahub_es), donde explicamos todos los comandos de forma clara y práctica.  
Suscríbete y activa la campanita 🔔 para no perderte nuevas lecciones.

---

## 🧪 Requisitos

- Tener **Node.js** instalado.
- Cypress como dependencia de desarrollo:

```bash
npm install cypress --save-dev
```

---

## 🚀 Cómo ejecutar los tests

Desde la raíz del proyecto:

```bash
npx cypress open
```

---

## 🎯 Objetivo del Curso

- Aprender Cypress desde cero.
- Dominar comandos esenciales de automatización.
- Escribir pruebas claras y mantenibles.
- Aplicar buenas prácticas en testing frontend.

---

## 📚 Licencia

MIT – Libre para usar, compartir y mejorar. Si reutilizas este contenido, menciona o enlaza a TheQAHub como fuente.

---

## 💬 Autor

Creado por Diego – [TheQAHub](https://www.theqahub.es/)  
Encuéntrame en Instagram, YouTube y más, compartiendo contenido sobre Testing y QA.
