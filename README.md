# SORIYA // Futuristic Anime Developer Portfolio

A static HTML/CSS/JavaScript/JSON portfolio built from the supplied portfolio specification.

## Structure

```text
portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── animations.js
│   └── data-loader.js
├── data/
│   ├── profile.json
│   ├── images.json
│   ├── projects.json
│   ├── skills.json
│   └── site.json
└── assets/
```

## Important: run with a local server

Because the site uses `fetch()` to load JSON files, do **not** open `index.html` directly with `file://`.

### XAMPP

Put the `portfolio` folder inside:

```text
C:\xampp\htdocs\
```

Then open:

```text
http://localhost/portfolio/
```

### VS Code

Use Live Server, or any simple local HTTP server.

## Change all images

Edit:

```text
data/images.json
```

You can replace:

- `avatar`
- `heroBackground`
- `aboutImage`
- `contactBackground`
- project image URLs

The HTML does not contain hardcoded portfolio image URLs.

## Change contact/social links

Edit:

```text
data/site.json
```

Replace the placeholder email and add your real:

- GitHub
- LinkedIn
- Telegram
- Facebook

Blank social URLs are intentionally not displayed.

## Change portfolio content

Edit:

```text
data/profile.json
data/projects.json
data/skills.json
data/site.json
```

## Language

The UI supports English and Khmer. Khmer uses Battambang.

The language choice is saved in localStorage.

## Theme

Dark/light mode is included and saved in localStorage.

## Easter eggs

- Click the avatar four times quickly to open the developer HUD.
- Press `K` on desktop to open/close the HUD.

## Safety/content rules followed

The site intentionally does not include:

- Grade 12
- Bac II
- Cambodian National Examination
- Examination results
- Subject grades
- Academic scores
- Invented qualifications
- Invented jobs/companies/awards/certifications
- Invented professional experience

The developer XP display is explicitly a visual progress indicator, not a real qualification.

## Note about source portfolio

The URL in the specification could not be reliably retrieved as the user's personal portfolio during build, so this implementation uses the information explicitly supplied in the specification rather than inventing additional personal details.
