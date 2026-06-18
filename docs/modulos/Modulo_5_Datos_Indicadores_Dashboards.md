# MÓDULO 5 — Datos, indicadores y dashboards con IA
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 70–90 min · 🎯 Objetivo: convertir datos en información visual útil (indicadores y dashboards) usando la IA como copiloto, **con datos siempre anónimos y conforme a la ley**.

> ⚠️ **Regla de oro del módulo (legal):** trabaja **solo con datos ficticios o anonimizados**. **Nunca** subas a una IA pública una tabla con datos identificables de pacientes (nombres, nº de historia, fechas concretas, DNI…). Repasa el Módulo 1: los datos de salud son de **categoría especial** (RGPD).

---

## 5.0. De los datos a la información

Tener datos no es tener información. Un Excel con 500 registros no dice nada hasta que lo conviertes en **indicadores** (cifras que miden algo) y los muestras en un **dashboard** (panel visual). La IA te ayuda a hacerlo **rápido y sin saber fórmulas de memoria**, pero tú decides qué medir y compruebas que los números cuadran.

---

## 5.1. ¿Qué medir? Indicadores en sanidad

Un **indicador** es una medida que informa sobre algo. En gestión sanitaria se clasifican en tres tipos (modelo de Donabedian):

| Tipo | Mide… | Ejemplo de enfermería |
|---|---|---|
| **Estructura** | Recursos disponibles | Nº de enfermeras por turno; camas disponibles |
| **Proceso** | Cómo se hacen las cosas | % de pacientes con valoración del dolor registrada |
| **Resultado** | Qué se consigue | % de pacientes con HTA controlada; tasa de flebitis |

Un buen indicador es **SMART**: específico, medible, alcanzable, relevante y temporal. Ejemplo: *"% de pacientes diabéticos del cupo con HbA1c < 7% en el último año"*.

> **Prompt:** *"Actúa como enfermero/a de gestión. Propón 5 indicadores (de estructura, proceso y resultado) para evaluar [tu programa/unidad]. Para cada uno: nombre, qué mide, fórmula de cálculo y fuente del dato."* → ✅ Verifica que encajan con tu realidad.

---

## 5.2. Preparar datos anónimos (la parte legal, en serio)

Antes de tocar la IA, prepara los datos **sin información identificable**. Tres opciones válidas:

1. **Datos ficticios:** inventados para practicar (lo que usaremos en los ejercicios). ✔️ Siempre seguro.
2. **Datos anonimizados:** datos reales a los que **se les ha quitado de forma irreversible** todo identificador (directo e indirecto). Ya no permiten reidentificar a nadie.
3. **Datos agregados:** trabajas con totales/porcentajes, no con registros individuales (p. ej. "32 pacientes" en vez de la lista).

**Cómo anonimizar una tabla (checklist):**
- ❌ Quita: nombre, apellidos, DNI, nº de historia, teléfono, dirección, fechas exactas.
- 🔁 Sustituye: identificadores por un **código** (Paciente 001, 002…); edad exacta por **franjas** (60-69, 70-79); fecha por **mes** o "semana 1, 2…".
- 👀 Cuidado con los **cuasi-identificadores**: una combinación rara (única mujer de 99 años de un pueblo) puede reidentificar aunque no haya nombre.

> 🔑 **Idea clave (RGPD):** si tras tu trabajo alguien **podría** averiguar de qué paciente se trata, **no está bien anonimizado**. Ante la duda, agrega o usa datos ficticios.

---

## 5.3. Usar la IA con Excel y Google Sheets

Tienes varias vías, de la más sencilla (gratis) a la más integrada:

### Opción A — La IA como copiloto en el navegador *(gratis, recomendada para empezar)*
No necesitas instalar nada. En **ChatGPT, Claude o Gemini**:
- **Describe tus columnas** (sin datos reales) y pide la **fórmula**:
  > *"En Excel tengo estas columnas: A=código paciente, B=edad, C=tensión sistólica, D=¿controlada? (Sí/No). Dame la fórmula para calcular el % de pacientes con la tensión controlada. Explícame dónde escribirla."*
- Pide **tablas dinámicas, gráficos o pasos**:
  > *"Explícame, paso a paso, cómo crear una tabla dinámica que muestre el nº de pacientes controlados por franja de edad."*
- Si pegas datos, que sean **ficticios o anonimizados**.

### Opción B — Copilot en Excel *(si tu institución tiene Microsoft 365)*
**Copilot** está integrado en Excel: le pides en lenguaje natural *"crea una columna que clasifique la tensión en normal/alta"* o *"resume estos datos y sugiéreme un gráfico"* y lo hace sobre tu hoja. Muy potente; recuerda igualmente la **regla de datos anónimos**.

### Opción C — Gemini en Google Sheets / ChatGPT con análisis de archivos
- **Gemini** está integrado en Google Workspace (Sheets) y ayuda con fórmulas y análisis.
- **ChatGPT o Claude** permiten **subir un archivo CSV** (¡anónimo!) y analizarlo, generar gráficos y resúmenes.

### Opción D — Complementos (add-ins) de IA en Excel *(opcional / a veces de pago)*
Existen complementos que añaden funciones de IA dentro de Excel (p. ej. fórmulas tipo `=IA(...)`). Suelen requerir una clave de API y/o pago. **Opcional**; márcalo como avanzado.

> ⚠️ **Verificación imprescindible:** los modelos de IA **pueden equivocarse haciendo cálculos**. Por eso, **pide la fórmula y ejecútala en Excel** (fiable) en lugar de fiarte de un número que "calcula" el chat. Comprueba siempre los totales.

---

## 5.4. Construir el dashboard paso a paso

Un dashboard es un panel con los indicadores clave y sus gráficos. Receta:
1. **Limpia y ordena** los datos (anónimos) en una hoja.
2. **Calcula los indicadores** con fórmulas (pídeselas a la IA): `CONTAR.SI`, `SUMAR.SI`, `PROMEDIO.SI`, tablas dinámicas…
3. **Crea los gráficos** adecuados: barras (comparar), líneas (evolución), circular (proporción), tarjetas de KPI (cifra grande).
4. **Monta el panel:** coloca KPIs arriba y gráficos debajo; añade un título y la fecha.
5. **Interpreta y narra** (5.5).

> **Prompt para el diseño:** *"Tengo indicadores de [tema]. Sugiéreme qué gráfico usar para cada uno y cómo organizar un dashboard de una página en Excel, con los KPIs principales arriba."*

---

## 5.5. Interpretar y narrar (data storytelling)

Un dashboard sin lectura no sirve. La IA te ayuda a **redactar la interpretación** (tú la validas):
> *"A partir de estos resultados [pega los indicadores, anónimos], redáctame un párrafo de conclusiones para un informe de gestión: qué destaca, qué ha mejorado y qué requiere acción. Tono profesional y prudente; no inventes causas."*

✅ Verifica que la interpretación no afirme causas que tus datos no demuestran.

---

## 5.6. 🧪 Ejercicios prácticos (con datos ficticios)

> Copia esta tabla **ficticia** a Excel o Google Sheets (es inventada, totalmente segura). Filas = pacientes de un programa de control de hipertensión.

```
Codigo | Franja_edad | Sexo | TA_sistolica | Controlada | Adherencia
P001   | 60-69       | M    | 130          | Si         | Alta
P002   | 70-79       | F    | 155          | No         | Baja
P003   | 60-69       | F    | 128          | Si         | Alta
P004   | 80-89       | M    | 160          | No         | Media
P005   | 70-79       | M    | 138          | Si         | Media
P006   | 60-69       | F    | 142          | No         | Baja
P007   | 80-89       | F    | 135          | Si         | Alta
P008   | 70-79       | M    | 150          | No         | Baja
P009   | 60-69       | M    | 125          | Si         | Alta
P010   | 80-89       | F    | 158          | No         | Media
```

**Ejercicio 1 — Fórmula con ayuda de IA.**
Pídele a ChatGPT/Claude/Gemini la fórmula para calcular el **% de pacientes "Controlada = Si"**. Escríbela en Excel y comprueba el resultado (pista: deberían ser 5 de 10 = 50%).
> Prompt sugerido: *"En Excel, la columna E ('Controlada') tiene 'Si'/'No' en E2:E11. Dame la fórmula para el porcentaje de 'Si' y explícame dónde ponerla."*

**Ejercicio 2 — Tabla dinámica.**
Crea una tabla dinámica que muestre **cuántos pacientes están controlados por franja de edad**. Pídele a la IA los pasos.

**Ejercicio 3 — Gráfico.**
Crea un **gráfico de barras** de "Controlada (Sí/No)" y un **gráfico** del nº de pacientes por nivel de adherencia. Pregunta a la IA qué gráfico es mejor para cada caso y por qué.

**Ejercicio 4 — Dashboard + narrativa.**
Monta un mini-dashboard de una página con: KPI "% controlados", gráfico por edad y gráfico por adherencia. Después, pide a la IA un párrafo de conclusiones y **corrígelo** tú.

**Ejercicio 5 — Anonimización (legal).**
Te dan este registro real (ficticio para el ejercicio):
> *"Lucía Gómez, 82 años, HC 44521, ingresó el 3/4, TA 158, no controlada, vive en Sigüenza."*
Reescríbelo como **una fila anónima** válida para tu tabla y explica qué quitaste y por qué.

---

## 5.7. Resumen del módulo

- Los datos se vuelven útiles como **indicadores** (estructura/proceso/resultado) y **dashboards**.
- **Solo datos ficticios, anonimizados o agregados**; cuidado con los **cuasi-identificadores** (RGPD, Módulo 1).
- Usa la IA como **copiloto**: en el navegador (gratis), con **Copilot** en Excel, **Gemini** en Sheets, o subiendo CSV **anónimos**.
- **Pide la fórmula y ejecútala en Excel**: la IA puede fallar en cálculos → verifica.
- Cierra con **interpretación** validada por ti.

---

## 📝 Cuestionario del Módulo 5
*(8 preguntas. Importa con "Test_Modulo_5_GIFT.txt".)*

## 📤 Entregable 5
Consulta el enunciado en **"Entregable_Modulo_5.md"**: dashboard de indicadores con datos ficticios + anonimización.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 5 · v1.0*
