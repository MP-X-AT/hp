# MP-X ONE Homepage V7

Komplettes Copy Paste Package für die neue ONE Homepage.

Enthalten:
- src/app/page.tsx
- src/app/page.module.css
- src/app/layout.tsx
- src/app/globals.css
- public/robots.txt
- public/sitemap.xml
- public/favicon.ico
- public/apple-touch-icon.png

## Einbau

Diese Dateien und Ordner in dein Next Projekt kopieren und vorhandene Dateien ersetzen:

```text
src/app/page.tsx
src/app/page.module.css
src/app/layout.tsx
src/app/globals.css
public/robots.txt
public/sitemap.xml
public/favicon.ico
public/apple-touch-icon.png
```

Danach:

```powershell
npm run dev
```

## Demo Button

Alle Demo Buttons öffnen eine vorausgefüllte E-Mail an:

```text
office@mp-x.at
```

## Hinweis

Die Domain in Metadata, robots.txt und sitemap.xml ist aktuell auf:

```text
https://demo.mp-x.at
```

Wenn die finale Homepage später auf einer anderen Domain liegt, diese Domain in `layout.tsx`, `robots.txt` und `sitemap.xml` anpassen.
