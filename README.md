# Entitapp Web

Web publica d'Entitapp, separada de l'app mobil.

Es una web estatica sense dependències ni pas de build. Es pot publicar gratis a Cloudflare Pages, Netlify, Vercel o GitHub Pages.

## Fitxers principals

- `index.html`: contingut principal de la web.
- `styles.css`: disseny responsive.
- `images/`: icona i imatge de mostra.

## Com afegir fotos o captures

1. Copia les imatges dins la carpeta `images/`.
2. Recomanacio de noms: `captura-reunions.png`, `captura-activitats.png`, `captura-tasques.png`.
3. A `index.html`, busca la seccio `captures`.
4. Canvia la imatge de mostra:

```html
<img src="images/app-preview.svg" alt="Mostra visual d'Entitapp" />
```

per una imatge real:

```html
<img src="images/captura-reunions.png" alt="Pantalla de reunions d'Entitapp" />
```

També pots duplicar la linia per mostrar mes d'una captura.

## Es poden pujar videos?

Si. Pots crear una carpeta `videos/` i afegir un fitxer `.mp4` o `.webm`.

Exemple:

```html
<video controls poster="images/captura-reunions.png">
  <source src="videos/demo-entitapp.mp4" type="video/mp4" />
</video>
```

Per GitHub i Cloudflare Pages, millor que els videos siguin curts i optimitzats. Si el video pesa molt, es millor penjar-lo a YouTube, Vimeo o Drive i incrustar-lo o enllacar-lo.

## Pot ser una pagina interactiva?

Si. Com que aquesta web es estatica, es pot afegir interaccio amb JavaScript senzill: galeria de captures, preguntes frequents desplegables, botons per canviar entre pantalles, video demo o un formulari de contacte extern. No cal tocar l'app mobil per fer-ho.

## Publicacio recomanada

Cloudflare Pages:

- Framework preset: `None`
- Build command: deixar buit
- Output directory: `/`

Netlify:

- Build command: deixar buit
- Publish directory: `.`

GitHub Pages:

- Publicar des de la branca principal i carpeta root.

## Contingut pendent d'ajustar

- Afegir l'enllac real de l'APK quan estigui disponible.
- Afegir un correu real de contacte si es vol mostrar a la web.
- Substituir la imatge de mostra per captures reals de l'app.
