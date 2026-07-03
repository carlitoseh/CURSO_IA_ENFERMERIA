# IA para Enfermería y Sanidad — Curso práctico

Curso práctico, ético y realista de Inteligencia Artificial para profesionales sanitarios.
Material docente completo (8 módulos) + web pública de flujos de trabajo.

- 🌐 **Web publicada:** https://carlitosiacursoenfermeria.netlify.app
- 📦 **Repositorio:** https://github.com/carlitoseh/CURSO_IA_ENFERMERIA

## Estructura del proyecto

```
DOCENCIA IA/
├── docs/                          Documentación y material docente (NO se publica en la web)
│   ├── 01_Programa_del_Curso.md      Programa, cronograma, itinerario y objetivos
│   ├── 02_Guia_Publicacion.md        Cómo publicar la web (GitHub + Netlify)
│   ├── 03_Guia_Montaje_Moodle.md     Cómo montar el curso en Moodle, paso a paso
│   ├── modulos/                      Lecciones (Modulo_0 a Modulo_7) y entregables con rúbrica
│   ├── moodle/                       Tests en formato GIFT (importables en Moodle)
│   └── moodle_html/                  Lecciones en HTML listas para pegar en Moodle (+ LEEME)
├── web/                           Página web pública (lo que publica Netlify)
│   ├── index.html                    Página de inicio
│   ├── programa.html                 Programa del curso (resumen público)
│   ├── css/estilo.css                Estilos
│   ├── js/copiar.js                  Botón "copiar" en los prompts
│   └── flujos/                       Flujos de trabajo paso a paso
│       ├── educacion-salud.html         Programa de Educación para la Salud
│       ├── presentacion-canva.html      Presentaciones con IA (Canva + NotebookLM + OCR)
│       ├── dashboard-excel.html         Dashboard de indicadores (datos anónimos)
│       ├── investigacion.html           Investigación rigurosa (PICO, verificación, Zotero)
│       └── agentes.html                 Crear agentes, GPTs y Gems
├── netlify.toml                   Configuración de publicación (carpeta web)
├── .gitignore
└── README.md                      Este archivo
```

> 🔒 **División pública/privada:** Netlify publica **solo** la carpeta `web/`. Las lecciones, los tests
> (con sus respuestas) y las rúbricas viven en `docs/` y van a **Moodle** (privado).

## Contenido del curso (8 módulos)

| Módulo | Tema |
|---|---|
| 0 | Bienvenida y fundamentos de la IA |
| 1 | Ética, legislación (RGPD, AI Act) y seguridad del dato |
| 2 | El arte del prompt (RTF, CRAFT, RECETA) |
| 3 | Buscar y verificar evidencia (Perplexity, Consensus, NotebookLM) |
| 4 | Programa de Educación para la Salud (3 niveles + Canva) |
| 5 | Datos, indicadores y dashboards (datos anónimos) |
| 6 | Investigación rigurosa (PICO, Zotero, MCP) |
| 7 | Agentes a medida (GPTs, Gems, NotebookLM) |

Cada módulo incluye: **lección** + **test tipo test (GIFT)** + **entregable con rúbrica de corrección**.

## Ver la web en tu ordenador (sin publicar)

Abre con doble clic el archivo `web/index.html` en tu navegador. ¡Ya está!

## Actualizar la web publicada

Cada cambio subido a GitHub se publica solo (1–2 min):

```bash
git add .
git commit -m "Describe brevemente el cambio"
git push
```

Guía completa: [docs/02_Guia_Publicacion.md](docs/02_Guia_Publicacion.md)

## Añadir un nuevo flujo de trabajo

1. Copia un flujo existente de `web/flujos/` y renómbralo.
2. Cambia el título, la introducción y los pasos/prompts.
3. Añade su tarjeta en `web/index.html` (sección "Flujos de trabajo").
4. Guarda, sube los cambios (`git push`) y Netlify lo publica solo.

## Montar el curso en Moodle

Sigue [docs/03_Guia_Montaje_Moodle.md](docs/03_Guia_Montaje_Moodle.md): secciones, lecciones en HTML
(`docs/moodle_html/`), importación de tests GIFT (`docs/moodle/`) y tareas con rúbrica.

---
Material con fines educativos. Versión 1.1 (junio 2026)
