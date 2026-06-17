# Guía paso a paso para montar el curso en Moodle

> Esta guía es tu manual de consulta. Cuando te habiliten el acceso a Moodle, ábrela y ve siguiéndola en orden.
> No necesitas experiencia previa: cada paso está explicado desde cero.
>
> ℹ️ Moodle cambia un poco de aspecto según la versión y el "tema" que tenga tu institución, pero los nombres de los menús son casi siempre los mismos. Si algo no se llama exactamente igual, busca la palabra clave (p. ej. "Importar", "Página", "Tarea").

---

## ÍNDICE
1. Conceptos básicos de Moodle (vocabulario)
2. Preparar la estructura del curso (los módulos)
3. Subir las lecciones (recurso "Página")
4. Importar los test desde los archivos GIFT
5. Crear los cuestionarios (quiz) con esas preguntas
6. Crear los entregables (actividad "Tarea")
7. Configurar las dos sesiones en directo
8. Ajustes de evaluación y seguimiento
9. Checklist final antes de abrir el curso a los alumnos

---

## 1. Conceptos básicos de Moodle (vocabulario)

| Palabra | Qué significa |
|---|---|
| **Curso** | El espacio completo de tu formación. |
| **Tema / Sección** | Cada bloque dentro del curso. Usaremos uno por módulo. |
| **Recurso** | Material que el alumno solo consulta (una Página, un PDF, un enlace). |
| **Actividad** | Algo que el alumno hace y que se puede calificar (Cuestionario, Tarea). |
| **Banco de preguntas** | Almacén donde viven las preguntas de los test. Se rellena una vez y se reutiliza. |
| **Activar edición** | Botón (arriba a la derecha) que te permite añadir y mover cosas. **Sin esto no puedes editar.** |

> 👉 Norma de oro: casi todo empieza pulsando **"Activar edición"** arriba a la derecha.

---

## 2. Preparar la estructura del curso (los módulos)

Vamos a crear una sección por cada módulo del curso.

1. Entra en tu curso y pulsa **"Activar edición"**.
2. Cada curso trae secciones llamadas "Tema 1", "Tema 2"... Si necesitas más, pulsa **"+ Añadir sección"** (o "Añadir temas") al final.
3. Renombra cada sección con el lápiz ✏️ que aparece junto al título. Crea estas secciones:

   - **Bienvenida** (información general del curso)
   - **Módulo 0 — Bienvenida y fundamentos**
   - **Módulo 1 — Ética, RGPD y seguridad**
   - **Módulo 2 — El arte del prompt**
   - **Módulo 3 — Buscar y verificar evidencia**
   - **Módulo 4 — Programa de Educación para la Salud**
   - **Módulo 5 — Datos, indicadores y dashboards**
   - **Módulo 6 — Investigación asistida por IA**
   - **Módulo 7 — Agentes a medida**
   - **Proyecto final**

4. **(Recomendado)** En *Configuración del curso → Formato de curso*, elige **"Formato de pestañas"** o **"Formato por temas"** y activa la opción de mostrar **"una sección por página"**: así el alumno ve un módulo cada vez y no se agobia.

> 💡 En la sección **Bienvenida** pon: una etiqueta de saludo, el enlace a la web de prácticas
> (**https://carlitosiacursoenfermeria.netlify.app/**) y el documento del programa del curso.

---

## 3. Subir las lecciones (recurso "Página")

Cada módulo tiene una lección (los archivos `Modulo_X_....md` de la carpeta `docs/modulos`).

1. Con la edición activada, dentro de la sección del módulo pulsa **"+ Añadir una actividad o recurso"**.
2. Elige **"Página"**.
3. Rellena:
   - **Nombre:** p. ej. *"Lección — Módulo 0: Fundamentos"*.
   - **Contenido de la página:** copia y pega aquí el texto de la lección.
4. Pulsa **"Guardar y volver al curso"**.

> ⚠️ **Sobre el formato:** si pegas el texto Markdown tal cual, los símbolos `#`, `|` o `**` se verán "en crudo".
> Tienes dos soluciones:
> - **Opción fácil:** pídeme que te entregue la lección en **HTML**; entonces en el editor de la Página pulsas el botón **`<>`** ("Editar código HTML") y pegas. Se verá perfecta.
> - **Opción manual:** pega el texto normal y dale formato con los botones del editor (negritas, títulos, tablas).
>
> 👉 Cuando llegue el momento, dime "pásame las lecciones en HTML" y te las dejo listas para pegar.

---

## 4. Importar los test desde los archivos GIFT

Esta es la parte que te ahorra horas. **No escribirás las preguntas a mano.**

1. Dentro de tu curso, ve al menú del curso → **"Banco de preguntas"** → **"Importar"**.
   *(Si no lo ves: rueda de ajustes ⚙ o menú "Más" → Banco de preguntas → Importar.)*
2. En **"Formato de archivo"**, marca **"Formato GIFT"**.
3. En **"General"**, opcional: elige o crea una **Categoría** (p. ej. "Módulo 0") para tener las preguntas ordenadas.
4. Arrastra el archivo del test (ej. `Test_Modulo_0_GIFT.txt`) a la zona de subida, o pulsa "Seleccionar un archivo".
5. Pulsa **"Importar"**. Moodle te mostrará las preguntas detectadas. Pulsa **"Continuar"**.
6. ✅ Listo: las preguntas ya están en tu banco, con la respuesta correcta y la retroalimentación marcadas.

> 🔁 Repite esto con cada archivo `Test_Modulo_X_GIFT.txt`, idealmente en una categoría distinta por módulo.

---

## 5. Crear los cuestionarios (quiz) con esas preguntas

Ya tienes las preguntas; ahora creas el examen que las usa.

1. En la sección del módulo: **"+ Añadir una actividad o recurso"** → **"Cuestionario"**.
2. **Nombre:** p. ej. *"Test — Módulo 0"*.
3. Ajustes recomendados (puedes dejar casi todo por defecto):
   - **Temporalización:** sin límite de tiempo (o el que quieras).
   - **Calificación → Intentos permitidos:** 2 o 3 (es formativo, que aprendan).
   - **Método de calificación:** "Calificación más alta".
   - **Comportamiento de las preguntas:** "Retroalimentación diferida" o "Interactivo con varios intentos".
   - **Revisión:** deja que vean la retroalimentación tras enviar.
4. Guarda. Ahora entra al cuestionario → pestaña **"Preguntas"** → **"Agregar"** → **"+ del banco de preguntas"**.
5. Marca las preguntas del módulo (las que importaste) y añádelas.
6. Fija la **"Calificación máxima"** (p. ej. 10) y guarda.

> 💡 Para el aprobado del curso sugerimos exigir ≥ 70 % en cada test.

---

## 6. Crear los entregables (actividad "Tarea")

Para cada módulo con entregable (archivos `Entregable_Modulo_X.md`).

1. En la sección del módulo: **"+ Añadir una actividad o recurso"** → **"Tarea"**.
2. **Nombre:** p. ej. *"Entregable — Módulo 0"*.
3. **Descripción:** pega el enunciado del entregable.
   - ⚠️ **IMPORTANTE:** pega solo la parte para el alumno. **La "Rúbrica de corrección / Solución" NO la pongas** aquí: esa es solo para ti.
4. **Tipos de entrega:** marca **"Archivos enviados"** (para que suban Word/PDF) y/o "Texto en línea".
5. **Fecha de entrega:** la que decidas según tu ritmo.
6. **(Opcional pero recomendado) Rúbrica:** en *Calificación → Método de calificación* elige **"Rúbrica"** y créala con los criterios de la tabla del entregable. Así corriges marcando casillas, mucho más rápido y justo.
7. Guarda.

---

## 7. Configurar las dos sesiones en directo

El curso tiene 2 directos (tras el Módulo 3 y tras el Módulo 7/proyecto).

**Opción A — Si tu Moodle tiene "BigBlueButton" (videollamada integrada):**
1. **"+ Añadir una actividad o recurso"** → **"BigBlueButton"**.
2. Ponle nombre (*"Directo 1 — Dudas y demo"*), fecha y guarda. Se graba dentro de Moodle.

**Opción B — Con una herramienta externa (Zoom, Google Meet, Teams):**
1. Crea la reunión en esa herramienta y copia el enlace.
2. En Moodle: **"+ Añadir una actividad o recurso"** → **"URL"**, pega el enlace y ponle nombre.
3. Tras el directo, sube la grabación o su enlace en la misma sección.

> 📌 Recuerda anunciar la fecha/hora con antelación en el **Foro de avisos** del curso.

---

## 8. Ajustes de evaluación y seguimiento

- **Finalización de actividad:** en *Configuración del curso* activa **"Rastreo de finalización"**. Así cada actividad muestra una casilla ✅ que el alumno va completando (muy motivador).
- **Restricciones de acceso (opcional):** puedes hacer que el Módulo 1 no se abra hasta completar el Módulo 0 (en cada actividad → *Restringir acceso*). Útil para que vayan en orden.
- **Calificador:** en *Calificaciones* verás una tabla con la nota de cada alumno en test y entregables. Ahí defines los pesos (Test 30 %, Entregables 50 %, Proyecto 20 %, según el programa).
- **Foro de dudas:** añade un **Foro** en la sección Bienvenida para que pregunten entre semana.

---

## 9. Checklist final antes de abrir el curso

Antes de dar de alta a los alumnos, comprueba:

- [ ] Están creadas todas las secciones (módulos).
- [ ] Sección de Bienvenida con: saludo, programa del curso y enlace a la web de prácticas.
- [ ] Cada módulo tiene: Lección (Página) + Test (Cuestionario) + Entregable (Tarea) cuando corresponda.
- [ ] Las preguntas GIFT están importadas y asignadas a su cuestionario.
- [ ] En los entregables **no** aparece la solución/rúbrica para el alumno.
- [ ] Fechas de directos publicadas y enlaces puestos.
- [ ] Rastreo de finalización activado.
- [ ] Has hecho una **vista previa como estudiante** (menú del curso → "Cambiar rol a… Estudiante") para ver cómo lo verán ellos.

---

## Orden recomendado de montaje (resumen rápido)

```
1. Crear secciones (módulos)            →  paso 2
2. Rellenar la Bienvenida               →  paso 2 + 3
3. Importar TODOS los GIFT al banco     →  paso 4
4. Por cada módulo:
      a) subir Lección (Página)         →  paso 3
      b) crear Cuestionario + preguntas →  paso 5
      c) crear Tarea (entregable)       →  paso 6
5. Crear los 2 directos                 →  paso 7
6. Activar finalización y revisar       →  paso 8 + 9
```

---
*Guía de montaje en Moodle · Curso de IA para Enfermería y Sanidad · v1.0*
*Cuando tengas acceso, avísame y lo montamos juntos siguiendo esta guía.*
