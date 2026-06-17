# MÓDULO 1 — Ética, legislación y seguridad del dato
### Lección para el alumnado (lista para pegar en Moodle)

> ⏱️ Tiempo estimado: 55–70 min · 🎯 Objetivo: usar la IA sin meterte en un problema legal ni deontológico. **Este es el módulo más importante del curso.**

> ⚠️ **AVISO DE ACTUALIZACIÓN (leer):** la legislación de IA está en pleno desarrollo. El **Reglamento Europeo de IA (AI Act)** se aplica **por fases entre 2025 y 2027**, y en EE. UU. el marco cambia con cada administración. Los datos de esta lección están actualizados a **junio de 2026**. *Antes de impartir el curso, verifica si ha habido cambios* (especialmente en las fechas de aplicación del AI Act y en la normativa española de desarrollo).

---

## 1.0. Por qué este módulo va primero

Antes de aprender *qué* puede hacer la IA, tienes que aprender *qué NO debes hacer con ella*. En sanidad manejamos lo más sensible que existe: **la información de salud de las personas**. Un mal uso de la IA puede suponer una **brecha de datos**, una **sanción** y, sobre todo, una **falta a la confianza del paciente** y a tu **deber deontológico**.

La buena noticia: con unas pocas reglas claras, usar la IA es perfectamente seguro. Vamos a ellas.

---

## 1.1. Datos personales y datos de salud: por qué son especiales

Un **dato personal** es cualquier información que permite identificar a una persona: nombre, DNI, teléfono, número de historia clínica, una foto, etc.

Los **datos de salud** (diagnósticos, tratamientos, pruebas, etc.) son, según el **RGPD**, una **"categoría especial" de datos** (artículo 9). Esto significa que tienen una **protección reforzada**: su tratamiento está prohibido salvo excepciones (como la asistencia sanitaria con las debidas garantías).

> ⚠️ **Traducción práctica:** los datos de pacientes NO pueden acabar, bajo ningún concepto, escritos en un ChatGPT o Gemini público.

---

## 1.2. El marco normativo en España (mapa completo)

Cuando usas IA en sanidad en España, te afectan **varias normas a la vez**. Esta es la foto completa:

| Norma | Qué regula | Por qué te afecta |
|---|---|---|
| **RGPD** — Reglamento (UE) 2016/679 | Protección de datos personales en toda la UE | Los datos de salud son "categoría especial" (art. 9) |
| **LOPDGDD** — Ley Orgánica 3/2018 | Adapta y completa el RGPD en España | Detalla deberes, derechos digitales y régimen sancionador en España |
| **AI Act** — Reglamento (UE) 2024/1689 | Primer reglamento integral de IA del mundo | Clasifica los usos sanitarios de IA como sensibles/alto riesgo |
| **Ley 41/2002** de autonomía del paciente | Historia clínica, confidencialidad y consentimiento informado | Refuerza el deber de secreto y el control sobre la información clínica |
| **EHDS** — Espacio Europeo de Datos Sanitarios (Reglamento UE 2025) | Uso primario y secundario de datos de salud en la UE | Marco europeo para compartir y reutilizar datos sanitarios con garantías |
| **MDR** — Reglamento (UE) 2017/745 de productos sanitarios | Software y dispositivos médicos (incluida IA como "producto sanitario") | Una IA que diagnostica o decide puede ser un "producto sanitario" regulado |
| **Códigos deontológicos** (enfermería, medicina...) | Deberes profesionales | El secreto profesional sigue vigente uses o no uses IA |

> 💡 No tienes que memorizar artículos. Quédate con la idea: **en España, sobre la IA en salud, manda primero el RGPD/LOPDGDD (datos) y, además, el AI Act (uso de la IA).**

---

## 1.3. RGPD y LOPDGDD para sanitarios (lo esencial)

No necesitas ser jurista. Quédate con estos principios del RGPD:

- **Minimización:** usa los **mínimos datos** necesarios. Para la mayoría de tareas con IA, ese mínimo es **CERO datos identificables**.
- **Finalidad y confidencialidad:** los datos del paciente son para su asistencia, no para "probar" herramientas.
- **Secreto profesional:** además de la ley, tu **código deontológico** te obliga a guardar secreto. Esto no desaparece al usar IA.

En España, el RGPD se complementa con la **LOPDGDD (Ley Orgánica 3/2018)**, que añade los **derechos digitales** y concreta el **régimen de sanciones** (que pueden ser muy elevadas). Para tu día a día, la regla operativa es siempre la misma: **anonimiza antes de usar**.

> 🔑 **Idea clave:** cuando usas una IA pública gratuita, debes asumir que **lo que escribes puede ser almacenado y/o usado** para entrenar el sistema. Por eso, datos de pacientes → jamás.

---

## 1.4. El AI Act europeo: qué es, cómo te afecta y en qué punto está

El **Reglamento Europeo de Inteligencia Artificial (AI Act, Reglamento UE 2024/1689)** es la primera ley integral del mundo sobre IA. **Entró en vigor el 1 de agosto de 2024** y se aplica **de forma escalonada**.

### Clasificación por niveles de riesgo
- **Riesgo inaceptable:** prohibido (ej. puntuación social de personas, manipulación).
- **Alto riesgo:** muchos usos sanitarios y los productos sanitarios con IA entran aquí → requisitos estrictos de seguridad, gestión de riesgos, **supervisión humana**, calidad de datos y transparencia.
- **Riesgo limitado:** obligación de **transparencia** (avisar de que algo está hecho con IA, p. ej. un chatbot).
- **Riesgo mínimo:** la mayoría de usos cotidianos (sin obligaciones especiales).

### 📅 Calendario de aplicación por fases
| Fecha | Qué empieza a aplicarse |
|---|---|
| **Ago 2024** | Entrada en vigor del reglamento |
| **Feb 2025** | Prohibiciones de IA de "riesgo inaceptable" + obligación de **alfabetización en IA** del personal |
| **Ago 2025** | Reglas para modelos de IA de **propósito general** (como los que hay tras ChatGPT/Gemini), gobernanza y sanciones |
| **Ago 2026** | Se aplican la mayoría de obligaciones, incluidos muchos sistemas de **alto riesgo** |
| **Ago 2027** | Alto riesgo ligado a **productos sanitarios** y otros productos regulados (transición más larga) |

> ⚠️ **Estas fechas pueden ajustarse.** Verifica el calendario vigente antes de impartir el curso.

### Y en España, ¿quién vigila esto?
- **AESIA** — la **Agencia Española de Supervisión de la Inteligencia Artificial** (con sede en A Coruña) es la autoridad encargada de supervisar el cumplimiento del AI Act en España. Fue de las primeras de su tipo en la UE.
- España trabaja además en una **ley nacional de gobernanza y buen uso de la IA** que adapta el reglamento europeo (en tramitación). *Comprueba su estado actualizado.*

> 📌 **Lo que te llevas:** en sanidad, la IA que **apoya decisiones clínicas** se considera sensible y exige **supervisión humana** siempre. Como principio general: **sé transparente** cuando un material esté generado con IA, y recuerda que ya existe la obligación de que el personal tenga **formación básica en IA** (¡como este curso!).

---

## 1.5. Normativa específica del ámbito sanitario

Además de lo anterior, en salud hay normas propias que conviene conocer:

- **Historia clínica y confidencialidad (Ley 41/2002):** la información clínica está especialmente protegida; el acceso debe estar justificado y el secreto es obligatorio.
- **Producto sanitario con IA (MDR, Reglamento UE 2017/745):** si una herramienta de IA tiene una finalidad médica (diagnosticar, decidir tratamiento), puede ser un **producto sanitario** que necesita marcado CE y evaluación. Las herramientas generalistas tipo ChatGPT **no** lo son y **no deben usarse como tales**.
- **Espacio Europeo de Datos Sanitarios (EHDS):** marco europeo (aprobado en 2025) que regula cómo se comparten y reutilizan los datos de salud, con garantías para el ciudadano.

---

## 1.6. Comparativa rápida: Unión Europea / España 🇪🇺 vs Estados Unidos 🇺🇸

Es útil entender que **no todo el mundo regula la IA igual**. Resumen para sanitarios:

| Aspecto | 🇪🇺 UE / España | 🇺🇸 Estados Unidos |
|---|---|---|
| **Enfoque general** | Una **ley integral** basada en niveles de riesgo (AI Act) | **Sectorial y fragmentado**: no hay ley federal integral de IA; varía por estados y sectores |
| **Protección de datos de salud** | RGPD + LOPDGDD (muy garantista, derechos amplios para todos los datos personales) | **HIPAA** (protege datos de salud, pero **más limitada**: solo ciertas entidades sanitarias y aseguradoras) |
| **Filosofía** | **Precaución**: proteger derechos fundamentales primero | **Innovación**: facilitar el desarrollo, menos restricciones federales |
| **IA como producto sanitario** | MDR + marcado CE | La **FDA** autoriza dispositivos médicos con IA (SaMD) |
| **Marcos voluntarios** | Códigos de conducta + obligaciones legales | **NIST AI Risk Management Framework** (voluntario), guías y órdenes ejecutivas cambiantes |
| **Quién vigila** | AESIA (España) y autoridades de protección de datos | Mezcla de agencias (FDA, FTC...) y leyes estatales (p. ej. Colorado, California) |

> 🧭 **En una frase:** la UE pone **primero los derechos del ciudadano** (más reglas, más garantías); EE. UU. pone **primero la innovación** (menos reglas federales, más fragmentación). Como profesional en España, **tu marco de referencia es el europeo: RGPD + AI Act.**

> ⚠️ El marco de EE. UU. es especialmente cambiante (depende de órdenes ejecutivas de cada administración). Verifícalo si lo mencionas en clase.

---

## 1.7. Anonimización práctica (cómo preparar un caso ANTES de usar IA)

Esta es la habilidad estrella del módulo. Antes de pegar cualquier caso en una IA, **quita o sustituye** todo lo que identifique a la persona:

| ❌ NO escribas | ✅ Sustitúyelo por |
|---|---|
| Nombre y apellidos | "paciente", "un varón", "una mujer" |
| Edad exacta (si es rara/identificable) | franja de edad ("entre 70 y 80 años") |
| Fechas concretas | "hace unos meses", "en la última semana" |
| Nº de historia, DNI, teléfono | (eliminar por completo) |
| Hospital/centro y unidad concretos | "un centro de salud", "una planta de hospitalización" |
| Profesión o rasgos únicos que delaten | descripción genérica |

**Ejemplo:**
- ❌ *"María García, 82 años, ingresada el 3/5 en la planta 4ª del Hospital X con úlcera por presión en sacro..."*
- ✅ *"Mujer de unos 80 años, ingresada en hospitalización por una úlcera por presión en sacro..."*

> 💡 Regla mental rápida: si un compañero leyera tu texto, **¿podría adivinar de qué paciente hablas?** Si la respuesta es "quizá sí", sigue anonimizando.

---

## 1.8. Sesgos, equidad y responsabilidad profesional

- **Sesgos:** la IA aprende de datos humanos, que contienen desigualdades. Puede dar respuestas sesgadas por sexo, edad u origen. **Revisa siempre** desde la equidad.
- **No discrimines sin querer:** un material generado por IA puede dar por hecho cosas (idioma, nivel cultural, género). Adáptalo a tu población real.
- **La responsabilidad es tuya.** Si usas una salida de la IA en tu trabajo, **tú respondes** de ella, igual que de cualquier otra herramienta. La IA no firma nada; firmas tú.

---

## 1.9. Checklist de uso seguro (imprímela y pégala en tu mesa)

✅ **Antes de escribir en la IA, comprueba:**
1. ¿He quitado **todos** los datos identificables del paciente? (nombre, fechas, nº historia, centro...)
2. ¿Estoy usando los **mínimos** datos necesarios?
3. ¿El resultado lo voy a **verificar** antes de usarlo?
4. ¿Soy **transparente** sobre que se ha usado IA cuando corresponde?
5. Si tengo dudas, ¿he consultado la **política de mi centro** sobre uso de IA?

> Si todas son "sí", adelante. Si alguna es "no", para y corrige.

---

## 1.10. Resumen del módulo

- Los datos de salud son **categoría especial**: máxima protección.
- En España te afectan **a la vez**: RGPD + LOPDGDD (datos), AI Act (uso de IA) y normas sanitarias (Ley 41/2002, MDR, EHDS).
- En IA pública: **CERO datos identificables de pacientes**. Asume que lo que escribes puede guardarse.
- **Anonimiza siempre** antes de usar.
- El **AI Act** se aplica por fases (2025–2027), exige **supervisión humana** y transparencia, y en España lo vigila la **AESIA**.
- **UE/España = más garantías; EE. UU. = más innovación y fragmentación.** Tu marco es el europeo.
- Ojo con los **sesgos**. Y recuerda: **la responsabilidad profesional es siempre tuya.**

---

## 📝 Cuestionario del Módulo 1
*(12 preguntas. Se realiza en Moodle. Importa con el archivo "Test_Modulo_1_GIFT.txt".)*

## 📤 Entregable 1
Consulta el enunciado en **"Entregable_Modulo_1.md"**: anonimizar un caso clínico de ejemplo.

---
*Curso de IA aplicada a la Enfermería y la Sanidad · Módulo 1 · v1.1 (legislación ampliada, jun-2026)*
