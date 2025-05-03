![License](https://img.shields.io/badge/licencia-TheQAHub-green)
![Cypress](https://img.shields.io/badge/cypress-v14.0.3-blue)
![Release](https://img.shields.io/badge/version-Mayo_2025-yellowgreen)

# 🌐 Cypress – Curso desde cero | TheQAHub

Este repositorio contiene todos los archivos y ejemplos usados en los vídeos 
del canal **[TheQAHub](https://www.youtube.com/@theqahub_es)** sobre **Cypress**, 
el framework de testing end-to-end más popular para aplicaciones web.

---

## 📁 Estructura del Proyecto

```bash
/CYPRESS/
└── cypress/
    └── e2e/
        ├── primerSpec.cy.js
        └── ejemplos-de-comandos/
            └── querying/
                ├── cy.get.cy.js
                ├── cy.contains.cy.js
                ├── cy.root.cy.js
                ├── .within.cy.js
                └── mejoresPracticas.cy.js
```
---

## 📌 Contenido de los Archivos

### 🔹 `primerSpec.cy.js`
Archivo inicial para introducir la estructura básica de un test en Cypress.  
Contiene ejemplos sencillos como:
- Visitas a páginas
- Comprobaciones con `cy.contains()`
- Uso básico de `cy.get()`

---

## 📂 `ejemplos-de-comandos/querying/`

#### ✅ `cy.get.cy.js`
Ejemplos del uso de `cy.get()` con:
- Selectores por ID (`#id`)
- Clases (`.class`)
- Selectores combinados y jerárquicos
- Atributos personalizados (`[data-test-id]`)
- Acceso a atributos y estilos con `.invoke()`
- Encadenamiento de assertions (`.should()` + `.and()`)

#### ✅ `cy.contains.cy.js`
Explora `cy.contains()` para:
- Encontrar elementos por texto exacto
- Uso de expresiones regulares (RegExp)
- Restringir la búsqueda a un tipo de elemento (ej: `ul`, `button`)
- Verificar atributos o clases de los elementos encontrados

#### ✅ `cy.root.cy.js`
Demuestra cómo usar `cy.root()` para:
- Obtener el elemento raíz del DOM global (`html`)
- Usarlo dentro de `.within()` para acceder al elemento raíz del
contexto limitado (ej: un `ul` específico)

#### ✅ `.within.cy.js`
Explica el comando `.within()` para:
- Limitar el alcance de los comandos `cy.get()` a un contenedor específico
- Evitar ambigüedades cuando hay múltiples elementos similares
- Mejorar la precisión de las pruebas

#### ✅ `mejoresPracticas.cy.js`
Serie de ejemplos sobre **buenas y malas prácticas** al seleccionar elementos
en Cypress:
- ❌ Uso genérico de etiquetas (`button`)
- ⚠️ Selectores acoplados a estilos CSS
- ✅ Selectores por atributos semánticos (`name`, `id`, `role`)
- 💡 Uso recomendado de `data-cy` o `data-test-id` para pruebas robustas
y aisladas de cambios de UI

---

## 🎬 Videos

Cada archivo está vinculado a un vídeo específico del canal
[TheQAHub](https://www.youtube.com/@theqahub_es), donde se explica
detalladamente cómo usar Cypress desde cero y aplicarlo en proyectos reales.
Suscríbete para seguir el curso completo y recibir notificaciones de nuevos módulos.

---

## 🧪 Requisitos

- Tener **Node.js** instalado
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

## 🧠 Objetivo del Curso

- Aprender Cypress desde cero, paso a paso
- Entender los comandos de querying en profundidad
- Crear pruebas robustas, legibles y mantenibles
- Aplicar buenas prácticas de automatización en el frontend

---

## 📚 Licencia 

MIT – Libre para usar, compartir y mejorar.
Si compartes o reutilizas este contenido, por favor menciona o
enlaza a TheQAHub como fuente.

---

## 💬 Autor 

Creado por Diego – [TheQAHub](https://www.theqahub.es/)
Encuéntrame en Instagram, YouTube y más plataformas compartiendo
conocimientos sobre Testing y QA.



