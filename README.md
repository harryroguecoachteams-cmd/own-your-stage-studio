# Own Your Stage Studio

Node.js website prototype for the Own Your Stage Studio brand.

## Run Locally

```bash
npm start
```

The server runs at `http://localhost:5174` by default.

To use another port:

```bash
PORT=3000 npm start
```

## Project Structure

- `server.js` serves the static website from `public/`.
- `public/index.html` contains the redesigned landing page.
- `public/styles.css` contains the full responsive visual system.
- `public/assets/` contains brand and stage imagery.

## Notes

The application form is front-end only. Connect it to GHL, HubSpot, Airtable, or another workflow before launch.
