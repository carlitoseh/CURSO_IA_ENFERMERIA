# MÓDULO 6 — Agentes a medida (GPTs, Gems, Proyectos de Claude y NotebookLM)
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 60–75 min · 🎯 Objetivo: crear tu propio asistente de IA especializado para una tarea real de tu servicio, con instrucciones y límites bien definidos.

> ⚠️ **Regla del módulo:** un agente hereda tus reglas. Configúralo para que **verifique**, **no invente** y **nunca maneje datos identificables de pacientes** (Módulos 1 y 3). Tú sigues siendo responsable de lo que produzca.

---

## 6.0. ¿Qué es un "agente"/GPT/Gem y cuándo merece crearlo?

Hasta ahora escribías un buen prompt cada vez. Un **agente personalizado** es como **guardar ese prompt convertido en un asistente reutilizable**: le das un rol fijo, unas instrucciones y, si quieres, unos documentos, y ya está listo para usarlo (y compartirlo) las veces que quieras.

Nombres según la herramienta:
- **GPT personalizado** → en ChatGPT *(crearlos suele requerir cuenta de pago)*.
- **Gem** → en Gemini (Google) *(gratis)*.
- **Proyecto** → en Claude *(gratis)*: una carpeta de trabajo con **instrucciones propias** y **documentos de apoyo**; todas las conversaciones dentro del proyecto heredan ese contexto.
- **Cuaderno** → en NotebookLM *(gratis)*: asistente que responde solo sobre tus documentos.

**¿Cuándo merece la pena crear uno?** Cuando repites una tarea con frecuencia:
- "Adaptar textos clínicos a lenguaje para pacientes."
- "Ayudarme a redactar planes de cuidados con nuestra estructura."
- "Responder dudas sobre nuestros protocolos" (NotebookLM).

Si es algo puntual, un prompt basta. Si lo harás muchas veces, **crea un agente**.

---

## 6.1. Anatomía de un buen agente

Da igual la herramienta; un buen agente define:

1. **Rol / identidad:** quién es ("Eres un enfermero/a docente experto/a en…").
2. **Objetivo:** para qué sirve exactamente.
3. **Instrucciones / cómo actuar:** tono, formato, pasos a seguir.
4. **Límites (lo más importante en sanidad):** qué **no** debe hacer.
5. **Conocimiento (opcional):** documentos que puede usar (guías, protocolos… **sin datos de pacientes**).

**Plantilla de instrucciones (sirve para GPT o Gem):**
> *"Eres un/a enfermero/a experto/a en [tema]. Tu objetivo es [tarea]. Actúa así: [pasos/estilo]. Usa un tono [tono]. IMPORTANTE: no inventes datos ni referencias; si no estás seguro, dilo. Nunca pidas ni utilices datos identificables de pacientes. Recuerda siempre al usuario que debe verificar el contenido clínico."*

---

## 6.2. Crear un GPT personalizado (ChatGPT) — paso a paso

> ℹ️ **Nota:** crear GPTs suele requerir una cuenta **de pago (ChatGPT Plus)**. Márcalo como opcional; si no la tienes, usa **Gems** (gratis) o **NotebookLM** (gratis).

1. En ChatGPT, ve a **"Explorar GPT" → "Crear"** (o *My GPTs → Create*).
2. En la pestaña **"Configure"**, rellena:
   - **Name:** p. ej. *"Traductor a lenguaje paciente"*.
   - **Description:** para qué sirve.
   - **Instructions:** pega tu plantilla (rol, objetivo, cómo actuar, límites).
   - **Conversation starters:** 3-4 ejemplos de preguntas.
3. **(Opcional) Knowledge:** sube documentos de apoyo (guías anónimas).
4. Prueba el GPT en el panel de la derecha e itera las instrucciones.
5. Guarda y elige quién puede usarlo (solo tú / con enlace / público).

---

## 6.3. Crear una Gem en Gemini — paso a paso *(gratis)*

1. En Gemini, abre el **gestor de Gems** ("Gems" / "Explorar Gems" → **"Nueva Gem"**).
2. Ponle **nombre** e **instrucciones** (misma plantilla: rol, objetivo, cómo actuar, límites).
3. **(Opcional)** adjunta archivos de apoyo.
4. **Vista previa**: prueba y ajusta las instrucciones.
5. **Guarda.** Ya la tienes disponible en tu lista de Gems para usarla cuando quieras.

---

## 6.4. Crear un Proyecto en Claude — paso a paso *(gratis)*

Un **Proyecto** de Claude es, en la práctica, un agente + un archivador. Es la opción más cómoda cuando el asistente necesita **trabajar siempre con los mismos documentos** (protocolos, guías, plantillas del servicio) durante semanas.

1. En Claude, ve a **"Proyectos" → "Nuevo proyecto"** y ponle nombre (p. ej. *"Educación para la salud – mi centro"*).
2. Añade las **instrucciones del proyecto** (mismo esquema: rol, objetivo, cómo actuar y **límites**). Todas las conversaciones dentro del proyecto las heredan.
3. **Sube los documentos de apoyo** al conocimiento del proyecto: guías, protocolos, plantillas… **nunca datos de pacientes**.
4. Abre una conversación dentro del proyecto y trabaja: recordará las instrucciones y podrá citar tus documentos.
5. Itera las instrucciones según veas los resultados.

> 💡 **¿Gem, GPT, Proyecto o cuaderno?** Para una tarea de redacción repetitiva, cualquiera sirve (elige el gratuito que te resulte cómodo). Si el asistente debe apoyarse en **muchos documentos propios**, elige **Proyecto de Claude** o **NotebookLM**. Si lo que quieres es **compartir con tu equipo** un consultor de protocolos, **NotebookLM** es la vía más sencilla.

---

## 6.5. Crear un cuaderno de NotebookLM — paso a paso *(gratis, ideal para protocolos)*

NotebookLM no es exactamente un "agente con personalidad", sino un **asistente experto en TUS documentos**:
1. Crea un **cuaderno nuevo** y **sube tus fuentes** (guías, protocolos del servicio, **sin datos de pacientes**).
2. Pregunta en lenguaje natural: responderá **solo con lo que hay en esas fuentes**, citándolas.
3. **Compártelo** con tu equipo para que todos consulten los mismos protocolos.

> 💡 Perfecto para: *"un asistente que responde dudas sobre nuestro protocolo de heridas"* → menos alucinaciones y respuestas trazables.

---

## 6.6. Buenas prácticas y límites (imprescindible en sanidad)

Al configurar cualquier agente, incluye instrucciones de seguridad como:
- *"No diagnostiques ni sustituyas el criterio profesional."*
- *"No inventes datos ni referencias; si no lo sabes, dilo."*
- *"No solicites ni proceses datos identificables de pacientes."*
- *"Recuerda al usuario que debe verificar el contenido clínico antes de usarlo."*
- *"Responde en lenguaje claro y adaptado a [tu público]."*

Y recuerda:
- **La responsabilidad es tuya** (Módulo 1): el agente es una herramienta, tú validas.
- **Revisa y actualiza** las instrucciones y los documentos cada cierto tiempo.
- **Cuidado al compartir:** si el agente es público, no incluyas nada confidencial en sus instrucciones o su conocimiento.

### 🧪 Pon a prueba tus límites (hazlo siempre antes de usar el agente)
Un agente serio es el que **aguanta cuando intentas romperlo**. Prueba estas tres cosas:
1. **Pídele un diagnóstico** → debe negarse y remitirte al criterio profesional.
2. **Pégale un caso con nombre y apellidos** → debe pedirte que retires los datos identificables.
3. **Pregúntale algo que no está en sus documentos** → debe decir que no lo sabe, no inventárselo.

Si supera las tres, tus límites funcionan. Si no, ajusta las instrucciones y vuelve a probar.

### ⚖️ Un apunte legal (agosto de 2026)
La **Agencia Española de Protección de Datos (AEPD)** publicó en **febrero de 2026** unas *orientaciones sobre inteligencia artificial agéntica* desde la perspectiva de protección de datos. Se refieren a sistemas que **actúan de forma autónoma** (no solo responden), y entre sus medidas destacan la **supervisión humana significativa**, la trazabilidad del dato, la evaluación continua del comportamiento del agente y procedimientos estándar para redactar prompts.

> 📌 **Qué significa para ti:** los agentes que creas en este curso son sencillos (responden, no ejecutan acciones por su cuenta), pero la dirección normativa es clara: **cuanta más autonomía tenga una IA, más obligatoria es la supervisión humana y el control del dato**. Tu costumbre de poner límites explícitos y verificar el resultado es exactamente lo que pide la norma.

---

## 6.7. Ejemplos de agentes útiles para enfermería

| Agente | Qué hace | Herramienta sugerida |
|---|---|---|
| **Traductor a lenguaje paciente** | Reescribe textos clínicos en lenguaje sencillo | GPT / Gem / Proyecto de Claude |
| **Asistente de protocolos** | Responde dudas sobre los protocolos del servicio | NotebookLM / Proyecto de Claude |
| **Ayudante de EpS** | Estructura programas de educación para la salud | GPT / Gem / Proyecto de Claude |
| **Corrector de estilo científico** | Mejora la redacción de trabajos (sin inventar citas) | Proyecto de Claude / GPT |
| **Generador de indicadores** | Propone indicadores y fórmulas para un tema | GPT / Gem |

---

## 6.8. Resumen del módulo

- Un **agente** es un prompt convertido en **asistente reutilizable**: rol + objetivo + instrucciones + **límites** (+ documentos opcionales).
- Opciones: **GPT** (ChatGPT, crear suele ser de pago), **Gem** (Gemini, gratis), **Proyecto de Claude** (gratis, ideal con documentos propios) y **NotebookLM** (gratis, experto en tus documentos).
- En sanidad, los **límites** son lo más importante: no diagnosticar, no inventar, **no datos de pacientes**, recordar verificar. **Pruébalos** antes de usar el agente.
- La AEPD exige **supervisión humana significativa** en sistemas que actúan con autonomía.
- **Tú eres responsable**; el agente ayuda, tú validas.

---

## 🎓 Conexión con el PROYECTO FINAL
El agente que crees aquí puede ser la pieza central de tu **proyecto final**: elige una tarea real de tu servicio y resuélvela combinando lo aprendido (prompt + búsqueda/verificación + un agente a medida).

---

## 📝 Cuestionario del Módulo 6
*(8 preguntas. Importa con "Test_Modulo_6_GIFT.txt".)*

## 📤 Entregable 6
Consulta el enunciado en **"Entregable_Modulo_6.md"**: crear un agente funcional para tu servicio.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 6 · v2.0 (Claude y AEPD, ago-2026)*
