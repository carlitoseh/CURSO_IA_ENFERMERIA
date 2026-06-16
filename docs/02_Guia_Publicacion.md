# Guía de publicación de la web (gratis con GitHub + Netlify)

Esta guía te lleva de "tengo los archivos en mi ordenador" a "mi web está en internet".
No necesitas saber programar. Sigue los pasos en orden.

---

## Opción rápida (para ver tu web hoy mismo) — Netlify Drop

Ideal para tu **primera publicación** sin complicarte.

1. Entra en **https://app.netlify.com/drop**
2. Crea una cuenta gratuita (puedes usar tu email o tu cuenta de Google).
3. Arrastra **la carpeta `web`** completa a la zona que pone "Drag and drop your site".
4. ¡Listo! Netlify te da una dirección tipo `https://nombre-aleatorio.netlify.app`.

> Inconveniente: para actualizarla tendrás que volver a arrastrar la carpeta cada vez.
> Por eso, para el día a día, usa la **Opción recomendada** de abajo.

---

## Opción recomendada — GitHub + Netlify (se actualiza sola)

Con esto, cada vez que cambies algo y lo "subas", la web se actualiza automáticamente.

### Parte A · Crear el repositorio en GitHub

1. Crea una cuenta gratuita en **https://github.com** (si no la tienes).
2. Pulsa el **+** (arriba a la derecha) → **New repository**.
3. Ponle un nombre, por ejemplo: `curso-ia-sanidad`.
4. Déjalo en **Public** (público) o **Private** (privado), como prefieras.
5. **No** marques "Add a README" (ya tenemos uno).
6. Pulsa **Create repository**.
7. Copia la URL que te muestra, será algo así:
   `https://github.com/TU-USUARIO/curso-ia-sanidad.git`

### Parte B · Subir tus archivos a GitHub

El repositorio local ya está preparado (commit inicial hecho). Solo falta conectarlo y subirlo.
Abre una terminal **en la carpeta del proyecto** y ejecuta (cambia la URL por la tuya):

```bash
git remote add origin https://github.com/TU-USUARIO/curso-ia-sanidad.git
git branch -M main
git push -u origin main
```

> La primera vez te pedirá identificarte en GitHub (se abre una ventana del navegador). Acepta.

### Parte C · Conectar Netlify con GitHub

1. Entra en **https://app.netlify.com** e inicia sesión (puedes entrar con tu cuenta de GitHub).
2. Pulsa **Add new site** → **Import an existing project**.
3. Elige **GitHub** y autoriza el acceso.
4. Selecciona tu repositorio `curso-ia-sanidad`.
5. En la configuración de publicación, Netlify leerá el archivo `netlify.toml` y usará la carpeta `web`.
   Si te lo pregunta manualmente:
   - **Build command:** (déjalo vacío)
   - **Publish directory:** `web`
6. Pulsa **Deploy**. En unos segundos tendrás tu web online.

### Parte D · Personalizar la dirección (opcional)

En Netlify: **Site configuration → Change site name** para cambiar
`nombre-aleatorio.netlify.app` por algo como `curso-ia-sanidad.netlify.app`.

---

## Cómo actualizar la web a partir de ahora

Cada vez que añadas o cambies algo (un flujo nuevo, una corrección):

```bash
git add .
git commit -m "Describe brevemente el cambio"
git push
```

Netlify detecta el cambio y **republica la web automáticamente** en 1–2 minutos.

---

## Resumen visual del flujo

```
Tu ordenador  →  git push  →  GitHub  →  (automático)  →  Netlify  →  Internet
```

---
*Si algo falla, copia el mensaje de error y lo resolvemos juntos.*
