# MÓDULO 3 — Buscar y verificar evidencia
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 50–60 min · 🎯 Objetivo: usar la IA para encontrar información fiable **sin que se invente las fuentes**.

> ⚠️ **Idea que vertebra el módulo:** un ChatGPT "normal" puede sonar muy seguro y estar equivocado. Existen herramientas que **citan de dónde sacan la información** — y aun así, tu trabajo es **comprobarlo**. Aquí aprendes ambas cosas: qué herramienta usar y cómo verificar.

---

## 3.0. El problema: la IA que "sabe" pero no enseña sus fuentes

En el Módulo 0 vimos las **alucinaciones**: la IA puede inventarse datos, cifras y referencias con total seguridad. Para buscar información clínica, un chat generalista **no basta**, porque normalmente:
- No te dice de dónde sale lo que afirma.
- Puede mezclar información actual con desactualizada.
- Puede inventarse un estudio que no existe.

La solución tiene dos patas:
1. **Usar herramientas que buscan en fuentes reales y las citan.**
2. **Verificar siempre** esas fuentes (no fiarte del resumen).

---

## 3.1. Perplexity — búsqueda con fuentes citadas

**Perplexity** es como un buscador conversacional: respondes con lenguaje natural y te da una respuesta **con enlaces numerados a las fuentes**.

**Para qué te sirve en sanidad:**
- Ponerte al día rápido sobre un tema.
- Encontrar guías, documentos oficiales y artículos divulgativos.

**Cómo usarla bien:**
- Sé específico/a y pide fuentes recientes y fiables.
- **Pulsa en cada cita** y comprueba la fuente (¿es una sociedad científica, un ministerio, una revista... o un blog cualquiera?).

**Prompt de ejemplo:**
> *"Resume las recomendaciones actuales sobre prevención de úlceras por presión en pacientes encamados. Cita fuentes oficiales o de sociedades científicas y dame los enlaces."*

> 💡 Perplexity tiene un **modo académico/"Académico"** que prioriza artículos científicos. Útil cuando buscas evidencia, no divulgación.

---

## 3.2. Consensus — evidencia científica resumida

**Consensus** busca directamente en **artículos científicos** y te resume **qué dice la evidencia** sobre una pregunta, enlazando los estudios.

**Para qué te sirve:**
- Responder preguntas tipo *"¿funciona X para Y?"* apoyándote en estudios.
- Ver de un vistazo si la evidencia es favorable, mixta o escasa.

**Cómo usarla bien:**
- Formula preguntas claras y concretas (mejor si son tipo PICO, ver 3.4).
- **Abre los estudios** que cita y comprueba que dicen lo que resume.

**Prompt de ejemplo:**
> *"¿La movilización precoz reduce las complicaciones en pacientes posquirúrgicos? Resume la evidencia y dame los estudios con sus enlaces y tipo de estudio."*

> ⚠️ Que un resumen suene contundente no significa que la evidencia sea sólida. Mira el **tipo de estudio** y cuántos lo respaldan.

---

## 3.3. NotebookLM — pregúntale a TUS documentos

**NotebookLM** (de Google) es distinto: tú **subes tus documentos** (PDFs de guías, protocolos de tu centro, artículos) y la IA **responde solo con lo que hay en ellos**, citando la parte concreta.

**Por qué es oro para sanidad:**
- Responde **basándose únicamente en tus fuentes** → muchas menos alucinaciones.
- Te dice **en qué documento y dónde** está cada respuesta.
- Ideal para manejar protocolos largos, guías clínicas, apuntes.

**Cómo usarlo:**
1. Crea un cuaderno y **sube tus PDFs** (guías, protocolos).
2. Pregunta en lenguaje natural.
3. Revisa la cita que te da y **comprueba en el documento**.

**Prompt de ejemplo (con tus PDFs cargados):**
> *"Basándote ÚNICAMENTE en los documentos subidos, ¿cuál es el procedimiento recomendado para el lavado de manos quirúrgico? Cítame el documento y el apartado. Si no aparece, dímelo."*

> ⚠️ **Datos de pacientes: jamás** (Módulo 1). Sube guías y protocolos, no historias clínicas identificables.

---

## 3.4. Estrategia de búsqueda validada (introducción)

Para buscar evidencia con orden, formula la pregunta en formato **PICO**:

| Letra | Significa |
|---|---|
| **P** | Paciente / Población / Problema |
| **I** | Intervención |
| **C** | Comparación |
| **O** | Outcome (resultado) |

Y combina términos con **operadores booleanos**:
- **AND** → restringe (exige ambos): `higiene de manos AND infección`
- **OR** → amplía (sinónimos): `anciano OR mayor OR geriátrico`
- **NOT** → excluye: `úlcera NOT diabética`

La base de datos de referencia en salud es **PubMed** (gratuita). En español también **Scielo** y **Cuiden**.

**Prompt de ayuda (la búsqueda final la haces tú en PubMed):**
> *"Actúa como documentalista biomédico. Transforma esta duda en una pregunta PICO y propón una cadena de búsqueda con operadores booleanos para PubMed. Recuérdame ejecutarla yo y verificar los resultados. Mi duda es: [escríbela]."*

> 📌 Aquí lo vemos a nivel básico. La **estrategia de búsqueda rigurosa y reproducible** (términos MeSH/DeCS, niveles de evidencia, tabla de evidencia, Zotero) se trabaja a fondo en el **Módulo 6**.

---

## 3.5. Comprobar las fuentes (la habilidad que más vale)

Tengas la herramienta que tengas, **verifica**. Checklist rápida:

1. **¿La fuente existe?** Busca el título o el DOI en PubMed / Google Scholar.
2. **¿Coinciden** autores, año y revista con lo que dijo la IA?
3. **¿Dice lo que afirma?** Abre la fuente y compruébalo (no te quedes con el resumen).
4. **¿Es fiable?** Prioriza: sociedades científicas, organismos oficiales (Ministerio, OMS), revistas indexadas. Desconfía de blogs y webs comerciales.
5. **¿Está vigente?** Una guía de hace 15 años puede estar superada.

> 🚩 **Bandera roja:** una referencia "perfecta" para tu tema que no aparece en ninguna base de datos → trátala como **inventada** y descártala.

---

## 3.6. ¿Qué herramienta uso para qué? (resumen)

| Necesito... | Herramienta |
|---|---|
| Ponerme al día con fuentes citadas | **Perplexity** |
| Saber qué dice la evidencia científica | **Consensus** |
| Preguntar a mis propios protocolos/PDFs | **NotebookLM** |
| La búsqueda formal y reproducible | **PubMed** (+ PICO, Módulo 6) |

---

## 3.7. Resumen del módulo

- Un chat generalista **no cita fuentes**; para buscar evidencia, usa herramientas que sí lo hacen.
- **Perplexity** (fuentes citadas), **Consensus** (evidencia científica), **NotebookLM** (tus documentos).
- Formula la pregunta en **PICO** y combina con **booleanos**; la base es **PubMed**.
- **Verifica siempre**: que la fuente exista, coincida, diga lo que afirma, sea fiable y esté vigente.
- Datos de pacientes: **nunca**.

---

## 📝 Cuestionario del Módulo 3
*(10 preguntas. Importa con "Test_Modulo_3_GIFT.txt".)*

## 📤 Entregable 3
Consulta el enunciado en **"Entregable_Modulo_3.md"**: estrategia de búsqueda + 5 fuentes verificadas.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 3 · v1.0*
