# MÓDULO 3 — Investigación y evidencia científica con IA
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 90–110 min (+ apéndice avanzado opcional) · 🎯 Objetivo: usar la IA para **buscar, verificar y sintetizar evidencia científica** sin que se invente ni una sola fuente.

> ⚠️ **Doble regla del módulo:** (1) la IA **nunca** sustituye tu lectura crítica; (2) **toda cita o dato se verifica en la fuente original**. La IA acelera; **tú garantizas el rigor**.

---

## 3.0. El problema: la IA que "sabe" pero no enseña sus fuentes

En el Módulo 0 vimos las **alucinaciones**: la IA puede inventarse datos, cifras y referencias con total seguridad. Para buscar información clínica, un chat generalista **no basta**, porque normalmente:
- No te dice de dónde sale lo que afirma.
- Puede mezclar información actual con desactualizada.
- Puede inventarse un estudio que no existe (con autores, revista y año perfectos).

La solución tiene dos patas: **usar herramientas que buscan en fuentes reales y las citan**, y **verificar siempre** esas fuentes.

### ¿Qué significa hacerlo "con rigor"?
Rigor = **reproducibilidad + verificación + transparencia**.

- **Reproducible:** otra persona, con tu estrategia de búsqueda, llega a los mismos resultados.
- **Verificada:** cada afirmación se apoya en una fuente real que **has comprobado** (no en lo que "dijo el chat").
- **Transparente:** declaras qué herramientas de IA usaste y para qué.

> 📌 Este módulo recorre **el flujo completo**, de la duda clínica a la síntesis final. Sirve tanto para resolver una duda del día a día como para preparar un trabajo de investigación.

---

## 3.1. Paso 1 — De la duda clínica a la pregunta PICO

Una buena búsqueda empieza por una **pregunta bien formulada**. En sanidad usamos el formato **PICO**:

| Letra | Significa | Ejemplo |
|---|---|---|
| **P** | Paciente / Problema / Población | Adultos hospitalizados con catéter venoso periférico |
| **I** | Intervención | Cura con clorhexidina |
| **C** | Comparación | Cura con povidona yodada |
| **O** | Outcome (resultado) | Incidencia de flebitis |

> Pregunta PICO resultante: *"En adultos hospitalizados con catéter venoso periférico (P), ¿la cura con clorhexidina (I) frente a povidona yodada (C) reduce la incidencia de flebitis (O)?"*

**Prompt para afinar tu PICO:**
> *"Actúa como enfermero/a investigador/a. Ayúdame a transformar esta duda clínica en una pregunta PICO bien estructurada y señálame cada componente (P, I, C, O). Si mi duda es ambigua, hazme las preguntas que necesites antes de responder. Mi duda es: [escribe tu duda]."*

> 💡 No todas las preguntas son PICO. Si tu duda es de tipo "¿cómo viven los pacientes X situación?" (cualitativa), existen variantes como **PICo** o **SPIDER**. Para el curso, PICO es suficiente.

---

## 3.2. Paso 2 — La estrategia de búsqueda (aquí está el corazón del rigor)

### a) Empieza por lo básico: los operadores booleanos
- **AND** → restringe (exige ambos): `higiene de manos AND infección`
- **OR** → amplía (sinónimos): `anciano OR mayor OR geriátrico`
- **NOT** → excluye: `úlcera NOT diabética` *(úsalo con cuidado: puede eliminar artículos relevantes)*

### b) Sube un nivel: el lenguaje controlado (MeSH / DeCS)
Los **descriptores** normalizan los conceptos: da igual cómo lo escriba cada autor, el descriptor los agrupa a todos.
- **MeSH** es el vocabulario de PubMed (en inglés).
- **DeCS** es su equivalente en español/portugués.

**Ejemplo:** buscar `"Myocardial Infarction"[Mesh]` recupera también los artículos que dicen *heart attack*, *MI* o *infarto*, porque todos están indexados bajo el mismo descriptor.

### c) Elige la base de datos adecuada
| Base de datos | Para qué |
|---|---|
| **PubMed/MEDLINE** | Biomédica general (la referencia, gratuita) |
| **CINAHL** | Enfermería y afines |
| **Cochrane Library** | Revisiones sistemáticas |
| **Cuiden** y **Scielo** | Enfermería en español / iberoamérica |

### d) Aplica límites
Años, idioma, tipo de estudio, edad de la población…

**Prompt para construir la estrategia (la búsqueda la ejecutas TÚ):**
> *"Actúa como documentalista biomédico. A partir de esta pregunta PICO [pega tu PICO], propón una estrategia de búsqueda para PubMed: identifica los términos MeSH de cada concepto, sus sinónimos en texto libre, y combínalos con operadores booleanos (AND/OR). Devuélvemela como una cadena de búsqueda lista para pegar y explica cada parte. Recuérdame que debo ejecutarla y verificar los resultados yo mismo/a."*

**Ejemplo de cadena resultante (para el PICO de la flebitis):**
```
("Catheterization, Peripheral"[Mesh] OR "peripheral catheter*"[tiab])
AND ("Chlorhexidine"[Mesh] OR chlorhexidine[tiab])
AND ("Phlebitis"[Mesh] OR phlebitis[tiab])
```

> ⚠️ **Clave de rigor:** la IA **propone** la estrategia; **la ejecutas tú** en PubMed/CINAHL real. **Guarda la cadena exacta, la base de datos y la fecha**: eso es lo que hace tu trabajo reproducible.

---

## 3.3. Paso 3 — Herramientas de IA que sí citan fuentes

Estas herramientas buscan en literatura real y **citan** (lo que igualmente debes comprobar):

| Herramienta | Para qué destaca | Aviso de verificación |
|---|---|---|
| **Perplexity** | Búsqueda conversacional con **fuentes citadas** y enlaces numerados. Tiene un **modo académico** que prioriza artículos científicos | Pulsa cada cita: ¿es una sociedad científica, un ministerio, una revista… o un blog cualquiera? |
| **Consensus** | Responde preguntas tipo *"¿funciona X para Y?"* resumiendo **qué dice la evidencia**, con los estudios enlazados | Que un resumen suene contundente no significa que la evidencia sea sólida: mira el tipo de estudio y cuántos lo respaldan |
| **NotebookLM** | Pregunta **a TUS documentos** (PDFs, guías, protocolos): responde solo con lo que hay en ellos y cita el punto exacto | Sigue comprobando la cita contra el documento |
| **Claude** | Analiza en profundidad los **PDFs que le subes**: compara estudios, extrae datos a tablas y detecta contradicciones entre artículos | Solo trabaja sobre lo que le das; verifica igualmente sus interpretaciones |
| **Elicit** | Tablas de extracción de datos de artículos | Revisa los datos extraídos uno a uno |
| **PubMed** | La fuente primaria: siempre la referencia final | — |

### 🔄 El combo recomendado (apréndetelo así)
> **Consensus / Perplexity** para *descubrir* → **PubMed** para *confirmar* → **NotebookLM / Claude** para *interrogar y analizar* lo confirmado → **Zotero** para *guardar y citar*.

**Prompt para descubrir evidencia (Consensus / Perplexity):**
> *"¿Qué dice la evidencia científica sobre [tu pregunta]? Resume los hallazgos y dame los estudios concretos con sus enlaces. Indica el tipo de estudio (revisión, ensayo clínico, observacional) y el año de cada uno, priorizando revisiones sistemáticas y estudios de los últimos 5 años. Señala si hay resultados contradictorios entre estudios."*

**Prompt para interrogar tus documentos (NotebookLM, con tus PDFs cargados):**
> *"Basándote ÚNICAMENTE en los documentos que he subido, resume qué dice cada estudio sobre [tu outcome]. Para cada afirmación, cita el documento y la página. Si algo no aparece en los documentos, dilo explícitamente."*

**Prompt para analizar y comparar estudios (Claude, con los PDFs adjuntos):**
> *"Te adjunto [nº] artículos que ya he verificado. Compáralos en una tabla con estas columnas: autor y año, diseño, población, resultado principal y limitaciones. Después, en 3 líneas, dime en qué coinciden y en qué se contradicen. No añadas ningún estudio que no esté entre los archivos que te he dado."*

> 💡 **Sobre Claude:** es especialmente bueno trabajando con **documentos largos** (guías completas, varios artículos a la vez) y manteniendo el matiz de lo que dice cada uno. Puedes crear un **Proyecto** en Claude para tu revisión: guardas ahí los PDFs y las instrucciones ("cita siempre el documento de origen; no inventes"), y todas las conversaciones de ese proyecto parten de ese material. Es la forma más cómoda de trabajar una revisión durante varias semanas.

> ⚠️ **Datos de pacientes: jamás** (Módulo 1). Sube guías, protocolos y artículos, nunca historias clínicas identificables.

---

## 3.4. Paso 4 — Verificar: cómo detectar una cita inventada

Tengas la herramienta que tengas, **verifica**. Checklist de 5 comprobaciones:

1. **¿Existe?** Busca el título exacto o el **DOI** en PubMed o Google Scholar.
2. **¿Coinciden** autores, año y revista con lo que dijo la IA?
3. **¿Dice lo que afirma?** Abre la fuente y compruébalo (no te quedes con el resumen del chat).
4. **¿Es fiable?** Prioriza en este orden:
   1. Organismos oficiales (Ministerio de Sanidad, OMS, AEMPS).
   2. Sociedades científicas (GNEAUPP, semFYC, SEEN…).
   3. Revistas indexadas (PubMed, Cochrane, Scielo, Cuiden).
   4. Divulgación y prensa: solo como pista, nunca como fuente final.
   5. Blogs y webs comerciales: desconfía por defecto (¿quién escribe? ¿qué vende?).
5. **¿Está vigente?** Una guía de hace 15 años puede estar superada.

> 🚩 **Bandera roja:** una referencia "perfecta" para tu tema que **no aparece en ninguna base de datos** tras 2 intentos → trátala como **inventada** y descártala.

---

## 3.5. Paso 5 — Sintetizar: niveles de evidencia y tabla de evidencia

No todos los estudios pesan igual. Jerarquía simplificada (de más a menos peso):

> **Revisiones sistemáticas y metaanálisis > Ensayos clínicos aleatorizados > Estudios observacionales** (cohortes > casos-controles > transversales) **> Series de casos > Opinión de expertos**

Organiza lo que has verificado en una **tabla de evidencia**:

| Autor y año | Diseño | Población | Resultado principal | Limitaciones |
|---|---|---|---|---|
| *Ejemplo:* García et al., 2023 | Ensayo clínico aleatorizado | 240 adultos hospitalizados | La clorhexidina redujo la flebitis del 12 % al 7 % | Un solo centro; seguimiento corto |

**Prompt de síntesis (sobre material que YA has verificado):**
> *"Actúa como enfermero/a investigador/a. A partir de estos 5 resúmenes de estudios que YA he verificado [pégalos], crea una tabla de evidencia con columnas: Autor y año | Diseño del estudio | Población | Resultado principal | Limitaciones. No añadas estudios que no te haya dado yo."*

---

## 3.6. Paso 6 — Gestión bibliográfica con Zotero (gratis)

**Zotero** es un gestor de referencias gratuito y de código abierto. Te permite:
- Guardar referencias con un clic desde el navegador.
- Organizar por carpetas y etiquetas.
- **Insertar citas y bibliografía automáticamente** en Word/Google Docs (APA, Vancouver, etc.).

**Flujo básico:**
1. Instala Zotero + el conector del navegador.
2. Al encontrar un artículo verificado, guárdalo en Zotero (un clic).
3. En tu documento, usa el complemento de Zotero para citar y generar la bibliografía.

> 💡 Esto resuelve el 90 % de la gestión bibliográfica sin tocar nada técnico. Lo siguiente (apéndice) es **opcional y avanzado**.

---

## 3.7. Redacción asistida con integridad

La IA puede ayudarte a redactar la introducción, mejorar el estilo o estructurar el texto. Reglas de integridad:
- **No plagies:** la IA redacta borradores; las ideas y su validación son tuyas.
- **No inventes citas:** cada referencia, verificada (3.4).
- **Declara el uso de IA:** muchas revistas y normas de integridad lo exigen. Frase modelo para el apartado de métodos:
  > *"Se utilizó [herramienta] como apoyo para [la construcción de la estrategia de búsqueda / la síntesis inicial]. Todas las referencias y afirmaciones fueron verificadas en las fuentes originales por los autores."*
- **Tú eres responsable** del texto final (Módulo 1).

---

## 3.8. 🔌 APÉNDICE AVANZADO (OPCIONAL) — Conectar la IA con tus fuentes: MCP y Skills

> ⚠️ **Solo para alumnado con soltura técnica.** Esta parte **no es necesaria** para aprobar el curso. Requiere instalar programas y manejar archivos de configuración. **Verifica siempre la documentación oficial actualizada**, porque estas tecnologías cambian rápido (datos a agosto de 2026).

### ¿Qué es el MCP (Model Context Protocol)?
Es un **estándar abierto** —creado por Anthropic, la empresa de **Claude**, y hoy adoptado por otras plataformas— que permite conectar asistentes de IA con **herramientas y fuentes de datos externas**: tu gestor bibliográfico, bases de datos, tus documentos. En la práctica: instalas un pequeño programa llamado **"servidor MCP"** y la IA puede usarlo como una herramienta más.

- En **Claude** (aplicación de escritorio) los MCP se añaden como **conectores**.
- Esto permite que la IA, por ejemplo, **busque dentro de tu biblioteca de Zotero** o consulte **PubMed** directamente.

### ¿Qué son las "Skills"?
Una **Skill** es una carpeta con instrucciones que la IA **carga solo cuando la tarea lo necesita**. Sirve para enseñarle un procedimiento repetible —por ejemplo, *"cómo hacer una revisión bibliográfica con nuestro método y nuestro estilo de citas"*— sin explicárselo cada vez.

### Conectar Claude con Zotero (vía servidor MCP)
Idea general del montaje (consulta la guía oficial del conector que elijas para los pasos exactos):
1. **En Zotero:** consigue tu **clave de API** y tu **ID de usuario** (web de Zotero → *Settings → Security → API keys*).
2. **Instala un servidor MCP de Zotero** (hay conectores de la comunidad, p. ej. proyectos tipo *"zotero-mcp"*). Suele requerir Python o Node.
3. **Conéctalo a Claude** añadiéndolo como conector/servidor MCP con tu clave de API.
4. Reinicia la aplicación. Ahora podrás pedirle: *"busca en mi biblioteca de Zotero los artículos sobre úlceras por presión y haz una tabla de evidencia"*, y trabajará **sobre tus propias referencias**.

> 🔎 **Igual para PubMed:** existen servidores MCP que conectan la IA directamente con PubMed para buscar y recuperar metadatos de artículos reales.

### Avisos imprescindibles de esta ruta
- ⚠️ **Sigue verificando.** Aunque la IA acceda a tu Zotero o a PubMed, comprueba que las citas y los datos son correctos. La conexión reduce alucinaciones, no las elimina.
- 🔒 **Datos de pacientes: jamás.** Trabaja con referencias y textos científicos.
- 🧩 **Es frágil y cambiante:** si algo no funciona, vuelve al **flujo básico** (Consensus/Perplexity/NotebookLM/Claude + Zotero manual): da resultados excelentes sin complicaciones.
- 📚 **Transparencia:** si usaste estas herramientas, decláralo en métodos.

---

## 3.9. Resumen del módulo

- Rigor = **reproducibilidad + verificación + transparencia**.
- Empieza por una **pregunta PICO** y construye una **estrategia de búsqueda** (booleanos + MeSH/DeCS) que **ejecutas tú** en PubMed, guardando cadena, base y fecha.
- Usa herramientas que **citan fuentes**: **Perplexity** (búsqueda), **Consensus** (evidencia), **NotebookLM** (tus documentos), **Claude** (análisis y comparación de PDFs), **Elicit** (extracción).
- **Verifica todas las citas** con la checklist de 5 puntos; si no aparece en 2 intentos, es falsa.
- **Sintetiza** con niveles de evidencia y tabla de evidencia; **gestiona** con **Zotero**.
- Redacta con **integridad**: sin plagio, sin citas inventadas y **declarando el uso de IA**.
- Datos de pacientes: **nunca**.

---

## 📝 Cuestionario del Módulo 3
*(14 preguntas. Se realiza en Moodle. Importa con el archivo "Test_Modulo_3_GIFT.txt".)*

## 📤 Entregable 3
Consulta el enunciado en **"Entregable_Modulo_3.md"**: mini-revisión con estrategia de búsqueda, fuentes verificadas y tabla de evidencia.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 3 · v2.0 (módulo unificado de investigación, ago-2026)*
