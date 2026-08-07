# IA para Enfermería y Sanidad — Curso práctico

Curso práctico, ético y realista de Inteligencia Artificial para profesionales sanitarios.
Material docente completo (7 módulos) + web pública de flujos de trabajo.
Curso 100 % online y a tu ritmo: cada flujo de trabajo tiene un **vídeo explicativo** en el que se
realiza el flujo completo usando los recursos y prompts publicados en la web.

- 🌐 **Web publicada:** https://carlitosiacursoenfermeria.netlify.app
- 📦 **Repositorio:** https://github.com/carlitoseh/CURSO_IA_ENFERMERIA

## Estructura del proyecto

```
DOCENCIA IA/
├── docs/                          Documentación y material docente (NO se publica en la web)
│   ├── 01_Programa_del_Curso.md      Programa, cronograma, itinerario y objetivos
│   ├── 02_Guia_Publicacion.md        Cómo publicar la web (GitHub + Netlify)
│   ├── 03_Guia_Montaje_Moodle.md     Cómo montar el curso en Moodle, paso a paso
│   ├── modulos/                      Lecciones (Modulo_0 a Modulo_6) y entregables con rúbrica
│   ├── moodle/                       Tests en formato GIFT (importables en Moodle)
│   └── moodle_html/                  Lecciones en HTML listas para pegar en Moodle (+ LEEME)
├── web/                           Página web pública (lo que publica Netlify)
│   ├── index.html                    Página de inicio
│   ├── programa.html                 Programa del curso (resumen público)
│   ├── css/estilo.css                Estilos
│   ├── js/copiar.js                  Botón "copiar" en los prompts
│   └── flujos/                       Flujos de trabajo paso a paso
│       ├── investigacion.html           Investigación rigurosa (PICO, verificación, Zotero)
│       ├── educacion-salud.html         Programa de Educación para la Salud
│       ├── presentacion-canva.html      Presentaciones con IA (Canva + NotebookLM + OCR)
│       ├── dashboard-excel.html         Dashboard de indicadores (datos anónimos)
│       └── agentes.html                 Crear agentes: GPTs, Gems, Proyectos de Claude
├── netlify.toml                   Configuración de publicación (carpeta web)
├── .gitignore
└── README.md                      Este archivo
```

> 🔒 **División pública/privada:** Netlify publica **solo** la carpeta `web/`. Las lecciones, los tests
> (con sus respuestas) y las rúbricas viven en `docs/` y van a **Moodle** (privado).

## Contenido del curso (7 módulos)

| Módulo | Tema |
|---|---|
| 0 | Bienvenida y fundamentos de la IA (ChatGPT, Claude, Gemini…) |
| 1 | Ética, legislación (RGPD, AI Act con el «Digital Omnibus», ley española de IA) y seguridad del dato |
| 2 | El arte del prompt (RTF, CRAFT, RECETA) |
| 3 | Investigación y evidencia científica (PICO, MeSH, verificación, síntesis, Zotero, MCP) |
| 4 | Programa de Educación para la Salud (3 niveles + Canva) |
| 5 | Datos, indicadores y dashboards (datos anónimos) |
| 6 | Agentes a medida (GPTs, Gems, Proyectos de Claude, NotebookLM) |

Cada módulo incluye: **lección** + **test tipo test (GIFT)** + **entregable con rúbrica de corrección**.
Cada flujo de trabajo (módulos 3 a 6) tiene además un **vídeo explicativo** del docente.

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
Material con fines educativos. Versión 2.0 (agosto 2026): toda la investigación unificada en el Módulo 3,
formación en **Claude** integrada en todo el curso (documentos, análisis, Proyectos y MCP) y legislación
actualizada a agosto de 2026 (Reglamento (UE) 2026/1744, transparencia ya aplicable, ley española en
tramitación y orientaciones de la AEPD sobre IA agéntica).
