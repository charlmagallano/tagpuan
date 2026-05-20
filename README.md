# Tagpuan Theatre Company

Class website for a mock nonprofit theatre company in NYC. Single-page site built with HTML, CSS, and a little JavaScript.

## What's on the site

- Hero with cast photo
- Now Playing (*On This Side of the World*)
- About, budget chart, leadership photos
- Support / donate section

Content comes from the Tagpuan Theatre Company organizational plan (PDF).

## Run it locally

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

You can also open `index.html` directly in a browser, but a local server is better for fonts and images.

If port 8080 is busy, use another port (e.g. `8081`) and change the URL to match.

## GitHub Pages

Repo: [github.com/charlmagallano/tagpuan](https://github.com/charlmagallano/tagpuan)

Live site: [charlmagallano.github.io/tagpuan](https://charlmagallano.github.io/tagpuan/)

Pages is set to deploy from the `main` branch, root folder.

## Files

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Main page |
| `budget.html` | Budget & impact infographic (linked from main page) |
| `styles.css` | Layout and colors |
| `script.js` | Mobile menu |
| `Tagpuan.png`, `actors.png`, `OTSOTW.png` | Logo and images |
| `Cubao/` | Display font |
| `images/team/` | Leadership headshots |
