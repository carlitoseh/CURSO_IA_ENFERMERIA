# MÓDULO 6 — Investigación rigurosa asistida por IA
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 60–75 min (+ ruta avanzada opcional) · 🎯 Objetivo: acelerar el trabajo de investigación **sin perder ni un gramo de rigor**.

> ⚠️ **Doble regla del módulo:** (1) la IA **nunca** sustituye la lectura crítica del profesional; (2) **toda cita o dato debe verificarse en la fuente original**. La IA acelera; tú garantizas el rigor.

---

## 6.0. ¿Qué significa "investigación rigurosa" con IA?

Rigor = **reproducibilidad** + **verificación** + **transparencia**.

- **Reproducible:** otra persona, con tu estrategia de búsqueda, llega a los mismos resultados.
- **Verificada:** cada afirmación se apoya en una fuente real que has comprobado (no en lo que "dijo el chat").
- **Transparente:** declaras qué herramientas de IA usaste y para qué.

La IA es excelente para **buscar, organizar, resumir y redactar borradores**. Es peligrosa si le pides que "tenga razón sola": **inventa citas** (alucinaciones, Módulo 0). Por eso el flujo de este módulo siempre termina en **verificación humana**.

---

## 6.1. Paso 1 — De la duda clínica a la pregunta PICO

Una buena investigación empieza por una **pregunta bien formulada**. En sanidad usamos el formato **PICO**:

| Letra | Significa | Ejemplo |
|---|---|---|
| **P** | Paciente / Problema / Población | Adultos hospitalizados con catéter venoso periférico |
| **I** | Intervención | Cura con clorhexidina |
| **C** | Comparación | Cura con povidona yodada |
| **O** | Outcome (resultado) | Incidencia de flebitis |

> Pregunta PICO resultante: *"En adultos hospitalizados con catéter venoso periférico (P), ¿la cura con clorhexidina (I) frente a povidona yodada (C) reduce la incidencia de flebitis (O)?"*

**Prompt para afinar tu PICO:**
> *"Actúa como enfermero/a investigador/a. Ayúdame a transformar esta duda clínica en una pregunta PICO bien estructurada y señálame cada componente (P, I, C, O). Mi duda es: [escribe tu duda]."*

---

## 6.2. Paso 2 — Estrategia de búsqueda validada

Aquí está el corazón del rigor. Una estrategia de búsqueda **reproducible** combina:

1. **Términos libres + lenguaje controlado (MeSH/DeCS):** los descriptores MeSH (PubMed) y DeCS (en español) normalizan los conceptos.
2. **Operadores booleanos:** `AND` (restringe), `OR` (amplía, sinónimos), `NOT` (excluye).
3. **Bases de datos adecuadas:**
   - **PubMed/MEDLINE** (biomédica general)
   - **CINAHL** (enfermería y afines)
   - **Cochrane Library** (revisiones sistemáticas)
   - **Cuiden** y **Scielo** (enfermería en español/iberoamérica)
4. **Límites:** años, idioma, tipo de estudio, población.

**Prompt para construir la estrategia (luego la pega TÚ en la base de datos real):**
> *"Actúa como documentalista biomédico. A partir de esta pregunta PICO [pega tu PICO], propón una estrategia de búsqueda para PubMed: identifica los términos MeSH de cada concepto, sus sinónimos en texto libre, y combínalos con operadores booleanos (AND/OR). Devuélvemela como una cadena de búsqueda lista para pegar, y explica cada parte. Recuérdame que debo ejecutarla y verificar los resultados yo mismo/a."*

> ⚠️ **Clave de rigor:** la IA **propone** la estrategia; **la ejecutas tú** en PubMed/CINAHL real. Guarda la cadena de búsqueda y la fecha: eso hace tu trabajo **reproducible**.

---

## 6.3. Paso 3 — Herramientas de IA para encontrar evidencia (con fuentes reales)

Estas herramientas buscan en literatura real y **citan fuentes** (que igualmente debes comprobar):

| Herramienta | Para qué | Aviso de verificación |
|---|---|---|
| **Consensus** | Respuestas basadas en artículos científicos reales, con enlaces | Comprueba que el artículo dice lo que resume |
| **Perplexity** (modo académico) | Búsqueda con citas y enlaces | Abre cada enlace; descarta fuentes no fiables |
| **Elicit** | Tablas de extracción de datos de papers | Revisa los datos extraídos |
| **NotebookLM** | Pregunta a TUS PDFs/protocolos ya descargados (responde solo con lo que hay en ellos → menos alucinaciones) | Sigue verificando contra el documento |
| **PubMed** (buscador) | La fuente primaria; siempre la referencia final | — |

> 💡 **Combo recomendado:** usa Consensus/Perplexity para **descubrir** estudios → confírmalos en **PubMed** → descárgalos y úsalos en **NotebookLM** para **interrogarlos** con seguridad.

---

## 6.4. Paso 4 — Cómo detectar una cita inventada (verificación de fuentes)

Una IA generalista puede darte una referencia perfecta... que no existe. Verifica SIEMPRE:

1. **Busca el DOI o el título exacto** en PubMed o Google Scholar.
2. **Comprueba autores, año y revista**: ¿coinciden?
3. **Abre el artículo** y confirma que **realmente dice** lo que la IA afirma.
4. Si no encuentras la fuente en 2 intentos → **trátala como falsa** y descártala.

> 🚩 Señal de alarma: referencias "demasiado perfectas" para tu tema, o que no aparecen en ninguna base de datos.

---

## 6.5. Paso 5 — Síntesis y niveles de evidencia

Organiza lo encontrado en una **tabla de evidencia** (autor/año, diseño, población, resultados, nivel de evidencia). Recuerda jerarquizar: revisiones sistemáticas/metaanálisis > ensayos clínicos > estudios observacionales > opinión de expertos.

**Prompt de síntesis (sobre material ya verificado):**
> *"Actúa como enfermero/a investigador/a. A partir de estos 5 resúmenes de estudios que YA he verificado [pégalos], crea una tabla de evidencia con columnas: Autor y año | Diseño del estudio | Población | Resultado principal | Limitaciones. No añadas estudios que no te haya dado yo."*

---

## 6.6. Paso 6 — Gestión bibliográfica con Zotero (gratis)

**Zotero** es un gestor de referencias gratuito y de código abierto. Te permite:
- Guardar referencias con un clic desde el navegador.
- Organizar por carpetas y etiquetas.
- **Insertar citas y bibliografía automáticamente** en Word/Google Docs (estilos APA, Vancouver, etc.).

**Flujo básico:**
1. Instala Zotero + el conector del navegador.
2. Al encontrar un artículo verificado, guárdalo en Zotero (un clic).
3. En tu documento, usa el complemento de Zotero para citar y generar la bibliografía.

> 💡 Esto resuelve el 90% de la gestión bibliográfica sin tocar nada técnico. Lo siguiente (apéndice) es **opcional y avanzado**.

---

## 6.7. 🔌 APÉNDICE AVANZADO (OPCIONAL) — Conectar la IA con tus fuentes: MCP, Skills y Zotero

> ⚠️ **Solo para alumnado con soltura técnica.** Esta parte **no es necesaria** para aprobar el curso. Requiere instalar programas en tu ordenador y manejar archivos de configuración. **Verifica siempre la documentación oficial actualizada de cada herramienta**, porque estas tecnologías cambian rápido (datos a junio 2026).

### ¿Qué es el MCP (Model Context Protocol)?
Es un **estándar abierto** que permite conectar asistentes de IA (como **Claude**) con **herramientas y fuentes de datos externas** (tu gestor bibliográfico, bases de datos, tus documentos). En la práctica: instalas un pequeño programa llamado **"servidor MCP"** y Claude puede usarlo como una herramienta más.
- En **Claude Desktop** los MCP se añaden como **conectores**.
- Esto permite que la IA, por ejemplo, **busque dentro de tu biblioteca de Zotero** o consulte **PubMed** directamente.

### ¿Qué son las "Skills"?
Una **Skill** es una carpeta con instrucciones (un archivo guía) que la IA **carga solo cuando la tarea lo necesita**. Sirve para enseñarle un procedimiento repetible —por ejemplo, *"cómo hacer una revisión bibliográfica con nuestro método y nuestro estilo de citas"*— sin tener que explicárselo cada vez.

### Conectar Claude con Zotero (vía servidor MCP)
Idea general del montaje (consulta la guía oficial del conector que elijas para los pasos exactos):
1. **En Zotero:** consigue tu **clave de API** y tu **ID de usuario** (en la web de Zotero → *Settings → Security/Feeds → API keys*).
2. **Instala un servidor MCP de Zotero** (existen conectores de la comunidad, p. ej. proyectos tipo *"zotero-mcp"*). Suele requerir Python o Node.
3. **Conéctalo a Claude Desktop** añadiéndolo como conector/servidor MCP (editando el archivo de configuración de Claude Desktop con la clave de API de Zotero).
4. Reinicia Claude Desktop. Ahora podrás pedirle cosas como: *"busca en mi biblioteca de Zotero los artículos sobre úlceras por presión y haz una tabla de evidencia"*, y trabajará **sobre tus propias referencias**.

> 🔎 **Igual para PubMed:** existen servidores MCP que conectan Claude directamente con PubMed para buscar y recuperar metadatos de artículos reales.

### Avisos imprescindibles de esta ruta avanzada
- ⚠️ **Sigue verificando.** Aunque la IA acceda a tu Zotero o a PubMed, debes **comprobar que las citas y los datos son correctos**. La conexión reduce alucinaciones, no las elimina al 100%.
- 🔒 **Datos de pacientes: jamás** (Módulo 1). Trabaja con referencias y textos científicos, no con información clínica identificable.
- 🧩 **Es frágil y cambiante:** versiones, claves y formatos de configuración cambian. Si algo no funciona, vuelve al **flujo básico** (Consensus/Perplexity/NotebookLM + Zotero manual): da resultados excelentes sin complicaciones.
- 📚 **Transparencia:** si usaste estas herramientas en una investigación, decláralo en el apartado de métodos.

---

## 6.8. Paso 7 — Redacción asistida con integridad

La IA puede ayudarte a redactar la introducción, mejorar el estilo o estructurar el texto. Reglas de integridad:
- **No plagies:** la IA redacta borradores; las ideas y su validación son tuyas.
- **No inventes citas:** cada referencia, verificada (6.4).
- **Declara el uso de IA:** muchas revistas y normas de integridad lo exigen.
- **Tú eres responsable** del texto final (Módulo 1).

---

## 6.9. Resumen del módulo

- Rigor = **reproducibilidad + verificación + transparencia**.
- Empieza por una **pregunta PICO** y una **estrategia de búsqueda validada** (MeSH/DeCS + booleanos) que **ejecutas tú**.
- Usa **Consensus, Perplexity, Elicit y NotebookLM** para descubrir/interrogar evidencia, y **confirma en PubMed**.
- **Verifica todas las citas**; descarta las que no encuentres.
- Gestiona la bibliografía con **Zotero** (básico) y, opcionalmente, **conéctalo a la IA vía MCP** (avanzado).
- Redacta con **integridad**: sin plagio, sin citas inventadas, declarando el uso de IA.

---

## 📝 Cuestionario del Módulo 6
*(10 preguntas. Importa con "Test_Modulo_6_GIFT.txt".)*

## 📤 Entregable 6
Consulta el enunciado en **"Entregable_Modulo_6.md"**: mini-revisión con estrategia, fuentes verificadas y síntesis.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 6 · v1.0*
