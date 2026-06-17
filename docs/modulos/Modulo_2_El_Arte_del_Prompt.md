# MÓDULO 2 — El arte del prompt
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 45–55 min · 🎯 Objetivo: conseguir resultados de calidad y reproducibles aprendiendo a "hablarle" bien a la IA.

---

## 2.0. La diferencia entre una respuesta mediocre y una excelente... eres tú

La mayoría de la gente le pide a la IA cosas como *"hazme un plan de cuidados"* y luego se decepciona porque el resultado es genérico. **El problema casi nunca es la IA: es la instrucción.**

Un **prompt** es la instrucción que le das a la IA. Y aquí está la idea central del módulo:

> 🎯 **A mejor prompt, mejor respuesta.** La IA no lee tu mente: solo sabe lo que tú le cuentas.

Piensa en la IA como ese **becario brillante** del Módulo 0: si le dices "prepara algo sobre diabetes", te traerá cualquier cosa. Si le dices "prepara una charla de 20 minutos sobre alimentación en diabetes tipo 2 para pacientes mayores, en lenguaje sencillo", te traerá justo lo que necesitas. **La diferencia es el detalle.**

---

## 2.1. La anatomía de un buen prompt

Casi todos los buenos prompts contienen, en mayor o menor medida, estos ingredientes:

1. **Rol** — quién quieres que sea la IA ("actúa como enfermero/a experto/a en...").
2. **Contexto** — la situación, a quién va dirigido, para qué.
3. **Tarea/Acción** — qué quieres exactamente que haga (con un verbo claro: redacta, resume, compara, crea...).
4. **Formato** — cómo quieres el resultado (tabla, lista, 200 palabras, apartados...).
5. **Tono** — cómo debe sonar (formal, cercano, divulgativo...).
6. **Restricciones** — límites y avisos ("no inventes datos", "no uses tecnicismos", "máximo 1 página").

No hace falta usar siempre los seis, pero cuantos más incluyas (con sentido), mejor. Para recordarlos, usaremos **tres marcos** de menos a más completo. Quédate con el que más te guste.

---

## 2.2. Marco 1 · RTF — el de andar por casa (para empezar)

El más sencillo, ideal para tareas rápidas. Solo 3 piezas:

- **R**ol — quién es la IA.
- **T**area — qué tiene que hacer.
- **F**ormato — cómo lo quieres.

**Ejemplo:**
> *"Actúa como enfermero/a docente (**Rol**). Resume las 5 recomendaciones clave para el autocuidado del pie diabético (**Tarea**). Preséntalo como una lista numerada de frases cortas (**Formato**)."*

> 👍 Úsalo cuando tengas prisa o la tarea sea simple.

---

## 2.3. Marco 2 · CRAFT — el equilibrado

Cuando la tarea es más seria, añade contexto y tono. **CRAFT** (que en inglés significa "oficio, artesanía") es fácil de recordar y en español encaja perfecto:

| Letra | Significa | Pregúntate... |
|---|---|---|
| **C** | **Contexto** | ¿Cuál es la situación? ¿Para quién es? |
| **R** | **Rol** | ¿Qué papel debe adoptar la IA? |
| **A** | **Acción** | ¿Qué tiene que hacer exactamente? |
| **F** | **Formato** | ¿Cómo quiero el resultado? |
| **T** | **Tono** | ¿Cómo debe sonar? |

**Ejemplo CRAFT completo:**
> *"Trabajo en un centro de salud y voy a dar una charla a un grupo de personas mayores con hipertensión (**Contexto**). Actúa como enfermero/a experto/a en educación para la salud (**Rol**). Redacta un guion de charla de 15 minutos sobre cómo reducir la sal en la dieta (**Acción**). Organízalo en introducción, 3 ideas principales y un cierre con consejos prácticos (**Formato**). Usa un tono cercano, motivador y fácil de entender, sin tecnicismos (**Tono**)."*

> 👍 Tu marco "por defecto" para el 80 % de las tareas.

---

## 2.4. Marco 3 · RECETA — el completo (y el más fácil de recordar para sanitarios) 💊

Como tú "recetas" cuidados, vas a "recetar" prompts. **RECETA** incluye todo lo necesario para tareas importantes:

| Letra | Significa | Ejemplo |
|---|---|---|
| **R** | **Rol** | "Actúa como enfermero/a experto/a en heridas." |
| **E** | **Encargo** (la tarea) | "Crea una tabla comparativa de apósitos." |
| **C** | **Contexto** | "Para formar a estudiantes de enfermería de primer año." |
| **E** | **Ejemplos** | "Por ejemplo, incluye hidrocoloides y alginatos." |
| **T** | **Tono** | "Lenguaje claro y didáctico." |
| **A** | **Acotaciones** (formato + límites) | "En tabla, máximo 1 página, y no inventes marcas comerciales." |

**Ejemplo RECETA completo:**
> *"Actúa como enfermero/a experto/a en cuidado de heridas (**Rol**). Crea una tabla comparativa de tipos de apósitos según el tipo de herida (**Encargo**). Es para formar a estudiantes de enfermería de primer año que aún no conocen el tema (**Contexto**). Incluye al menos hidrocoloides, alginatos y espumas (**Ejemplos**). Usa un lenguaje claro y didáctico (**Tono**). Preséntalo en una tabla con columnas 'Tipo de apósito / Indicación / Precaución', máximo una página, y si no estás seguro de un dato, indícalo en lugar de inventarlo (**Acotaciones**)."*

> 👍 Úsalo para materiales docentes, programas, documentos importantes... lo que vayas a usar "de verdad".

---

## 2.5. Cuatro técnicas de experto (suben mucho la calidad)

Estas técnicas se combinan con cualquiera de los marcos anteriores:

**1. Dar ejemplos (la técnica más potente).**
Si quieres un resultado con un estilo concreto, **enséñale un ejemplo** de cómo lo quieres. *"Escribe los objetivos con este estilo: 'El paciente será capaz de...'. Ahora hazlo para estos 3 temas."* La IA imita patrones: dale el patrón.

**2. Pedir que razone paso a paso.**
Para tareas que requieren lógica (cálculos, planes), añade *"piensa paso a paso antes de responder"*. Suele reducir errores.

**3. Pedirle que TE pregunte antes de responder.**
Truco de oro para principiantes: *"Antes de redactar, hazme las preguntas que necesites para que el resultado sea lo mejor posible."* Así la IA recopila lo que le falta en vez de inventárselo.

**4. Iterar (¡no te quedes con la primera respuesta!).**
Un prompt es una **conversación**, no un botón. Si la respuesta no te convence, refínala:
> *"Está bien, pero hazlo más corto."* · *"Cámbialo a un tono más formal."* · *"Añade un ejemplo en cada punto."*

---

## 2.6. Errores típicos (y cómo evitarlos)

| ❌ Error | ✅ Solución |
|---|---|
| Prompt vago: *"háblame de la diabetes"* | Añade rol, contexto, formato y objetivo. |
| No decir el formato | Pide "tabla", "lista", "200 palabras"... |
| Conformarse con la 1ª respuesta | Itera: pide ajustes. |
| Pedir todo de golpe en un párrafo gigante | Trocea la tarea en pasos. |
| **Meter datos de pacientes** | 🚫 Nunca. Anonimiza siempre (Módulo 1). |
| Fiarse de datos sin verificar | Verifica cifras, citas y recomendaciones. |

---

## 2.7. Tu biblioteca de plantillas (cópialas y reutilízalas)

Guarda estas plantillas; solo tienes que rellenar los [corchetes]:

**📋 Plantilla — Material para pacientes:**
> *"Actúa como enfermero/a experto/a en educación para la salud. Redacta [un folleto / un texto] sobre [TEMA] dirigido a [POBLACIÓN]. Tono cercano y lenguaje sencillo, frases cortas, organizado en apartados con títulos. No uses tecnicismos sin explicarlos. Si das algún dato numérico, recuérdame que debo verificarlo."*

**📋 Plantilla — Resumen de un documento:**
> *"Actúa como enfermero/a. Resume el siguiente texto en [nº] puntos clave para [finalidad]. Mantén solo lo esencial y señala cualquier punto que requiera verificación. Texto: [pega aquí el texto anonimizado]."*

**📋 Plantilla — Lluvia de ideas:**
> *"Actúa como enfermero/a docente. Dame [nº] ideas para [objetivo, p. ej. una actividad de educación para la salud sobre tabaquismo]. Para cada idea, una frase explicando en qué consiste."*

---

## 2.8. Resumen del módulo

- A mejor prompt, mejor respuesta: **el detalle marca la diferencia**.
- Ingredientes: **Rol, Contexto, Tarea, Formato, Tono, Restricciones**.
- Tres marcos para recordarlos: **RTF** (rápido), **CRAFT** (equilibrado) y **RECETA** (completo y sanitario 💊).
- Técnicas pro: **dar ejemplos, pensar paso a paso, pedir que te pregunte, iterar**.
- Sigue vigente la regla del Módulo 1: **nunca datos de pacientes y verifica siempre**.

---

## 📝 Cuestionario del Módulo 2
*(8 preguntas. Se realiza en Moodle. Importa con el archivo "Test_Modulo_2_GIFT.txt".)*

## 📤 Entregable 2
Consulta el enunciado en **"Entregable_Modulo_2.md"**.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 2 · v1.0*
