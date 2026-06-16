# IA para Enfermería y Sanidad — Curso práctico

Curso práctico, ético y realista de Inteligencia Artificial para profesionales sanitarios.
Material docente + web pública de flujos de trabajo.

## Estructura del proyecto

```
DOCENCIA IA/
├── docs/                       Documentación del curso
│   └── 01_Programa_del_Curso.md   Programa, cronograma, itinerario y objetivos
├── web/                        Página web pública (lo que se publica en Netlify)
│   ├── index.html                 Página de inicio
│   ├── css/estilo.css             Estilos
│   ├── js/copiar.js               Botón "copiar" en los prompts
│   └── flujos/                    Guías paso a paso
│       └── educacion-salud.html      Flujo: Programa de Educación para la Salud
├── netlify.toml                Configuración de publicación (carpeta web)
├── .gitignore
└── README.md                   Este archivo
```

## Ver la web en tu ordenador (sin publicar)

Abre con doble clic el archivo `web/index.html` en tu navegador. ¡Ya está!

## Publicar en internet (gratis)

Se publica con **GitHub + Netlify**. Ver la guía paso a paso en
[docs/02_Guia_Publicacion.md](docs/02_Guia_Publicacion.md) *(se creará en el siguiente paso)*.

## Añadir un nuevo flujo de trabajo

1. Copia `web/flujos/educacion-salud.html` y renómbralo (ej. `dashboard-excel.html`).
2. Cambia el título, la introducción y los pasos/prompts.
3. Añade su tarjeta en `web/index.html` (sección "Flujos de trabajo").
4. Guarda, sube los cambios y Netlify lo publica solo.

---
Material con fines educativos. Versión 1.0
