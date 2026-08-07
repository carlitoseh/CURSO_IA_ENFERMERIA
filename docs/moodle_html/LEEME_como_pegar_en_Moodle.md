# Lecciones en HTML para Moodle — cómo pegarlas

En esta carpeta tienes las **7 lecciones** convertidas a HTML, listas para pegar en Moodle **conservando el formato** (títulos, tablas, listas, avisos y bloques de prompt).

## Pasos (para cada módulo)

1. En tu curso de Moodle → **Activar edición**.
2. En la sección del módulo → **Añadir una actividad o recurso** → **Página**.
3. Pon el **nombre** (p. ej. *"Lección — Módulo 2: El arte del prompt"*).
4. En el editor de **"Contenido de la página"**, pulsa el botón **`<>`** (*Editar código HTML* / *HTML*).
   - En el editor **Atto**: icono `<>`.
   - En el editor **TinyMCE**: menú *Ver → Código fuente*, o el icono `</>`.
5. Abre el archivo `.html` de este módulo, **copia todo su contenido** y **pégalo** en esa ventana de código.
6. Acepta / cierra la vista de código y **guarda** la página. Se verá con formato.

## Correspondencia archivo ↔ módulo

| Archivo | Módulo |
|---|---|
| `Modulo_0_Bienvenida_y_Fundamentos.html` | 0 · Bienvenida y fundamentos |
| `Modulo_1_Etica_RGPD_Seguridad.html` | 1 · Ética, legislación y seguridad |
| `Modulo_2_El_Arte_del_Prompt.html` | 2 · El arte del prompt |
| `Modulo_3_Investigacion_y_Evidencia.html` | 3 · Investigación y evidencia científica |
| `Modulo_4_Educacion_para_la_Salud.html` | 4 · Educación para la Salud |
| `Modulo_5_Datos_Indicadores_Dashboards.html` | 5 · Datos, indicadores y dashboards |
| `Modulo_6_Agentes_a_Medida.html` | 6 · Agentes a medida |

## Notas
- La primera línea de cada archivo es un comentario `<!-- ... -->` con un recordatorio; puedes dejarlo o borrarlo, no se ve en la página.
- Si editas la lección original (`.md` en `docs/modulos/`), vuelve a generar el HTML con el conversor y pega de nuevo.
- Los **tests** (carpeta `docs/moodle/`, formato GIFT) se importan aparte, no se pegan como página.
