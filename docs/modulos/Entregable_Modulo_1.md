# 📤 Entregable 1 — Anonimizar un caso clínico

> Sube tu respuesta a Moodle (Word o PDF). Tiempo estimado: 20 minutos.

## Caso de partida (ficticio)

> *"Antonio Pérez Ruiz, de 78 años, con DNI 12345678-X, fue ingresado el 12 de marzo en la planta 5ª de Cardiología del Hospital Universitario de Getafe (nº de historia 0098771). Vive en la calle Mayor 4 de Leganés y su teléfono es 600 123 456. Diagnóstico: insuficiencia cardíaca descompensada. Es el único panadero del pueblo. Su enfermera responsable es Laura M."*

## Qué tienes que hacer

1. **Reescribe el caso anonimizado**, listo para poder usarlo con seguridad en una IA pública. Elimina o sustituye todos los datos identificables conservando la información clínica útil.
2. **Haz una lista** de los datos que has quitado o cambiado y, en cada uno, **explica por qué** era identificable.
3. **Responde:** ¿por qué el dato "es el único panadero del pueblo" es un problema, aunque no sea un nombre ni un número?

## Qué entregar
- El caso reescrito (versión anonimizada).
- La lista de cambios con su justificación.
- La respuesta a la pregunta final.

---

## Solución orientativa (para el docente)

**Caso anonimizado correcto (ejemplo):**
> *"Varón de unos 75-80 años ingresado en una planta de Cardiología por insuficiencia cardíaca descompensada."*

**Datos que deben eliminarse/sustituirse:**
- Nombre y apellidos → "varón / paciente".
- DNI → eliminar.
- Fecha concreta de ingreso → "recientemente" o eliminar.
- Planta y hospital concretos → "una planta de Cardiología".
- Nº de historia → eliminar.
- Dirección y teléfono → eliminar.
- "único panadero del pueblo" → eliminar (rasgo único que **identifica indirectamente** a la persona aunque no haya nombre).
- Nombre de la enfermera → eliminar (también es dato personal de un tercero).

**Clave de la última pregunta:** un dato puede identificar a alguien **indirectamente** (cuasi-identificador). En un pueblo pequeño, "el único panadero" señala a una sola persona, igual que lo haría su nombre.

| Criterio | Apto | No apto |
|---|---|---|
| Elimina todos los identificadores directos | Sí | Deja alguno |
| Detecta el identificador indirecto (panadero) | Sí | No lo ve |
| Conserva la información clínica útil | Sí | Borra de más o de menos |
| Justifica los cambios | Sí | No justifica |
