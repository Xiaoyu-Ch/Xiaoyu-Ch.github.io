# Redesign plan, branch `redesign-2026`

Written 2026-10-17 at the start of the overnight session. Scope: turn the al-folio
starter clone into a personal, memorable site that still reads as a serious research
and engineering profile. Build on the existing repo, do not start over.

<!--ts-->

<!--te-->

## 1. Inventory of the site as found

### Repo shape

This is a **full clone of the al-folio v1.x starter repo**, used as Tom's personal
site. That matters, because the starter carries its own `AGENTS.md` contract:

- `npm run lint:style-contract` (`test/style_contract.js`) fails if this repo ever
  owns `_layouts/`, `_includes/`, `_sass/`, `_scripts/`, `assets/tailwind/`,
  `tailwind.config.js` or `assets/webfonts/`. All runtime lives in `al_*` gems.
- `assets/js/` and `assets/css/` are **not** on that forbidden list, so every new
  feature in this redesign ships as a plain static stylesheet and script under
  `assets/`, pulled in per page. No new layouts, no new includes, no Sass.
- `_config.yml` already has `baseurl:` blank (correct for a `*.github.io` user
  page), so the `/al-folio` baseurl note in `AGENTS.md` no longer applies here.
  Local preview is `http://127.0.0.1:8080/`, not `.../al-folio/`.

### Pages as found

| Path                     | State                                                                     |
| ------------------------ | ------------------------------------------------------------------------- |
| `_pages/about.md`        | Real bio text, but an **Einstein placeholder photo** and a CSS cube bolted on |
| `_pages/cv.md`           | Real, but points at `assets/pdf/resume.pdf` (has phone number)            |
| `_pages/publications.md` | Real, wired to `_bibliography/papers.bib` (3 real entries, no demo bib)   |
| `_pages/projects.md`     | Real, 3 real projects, **no images at all**                               |
| `_pages/personal.md`     | Real, photos of family and friends                                        |
| `_pages/contact.md`      | Real, but **publishes Tom's phone number**                                |
| `_pages/blog.md`         | Enabled, zero posts                                                       |
| `_pages/news.md`         | Enabled, zero news items                                                  |
| `_pages/404.md`          | Stock                                                                     |

A previous session already stripped al-folio's demo blog posts, demo bibliography
and demo news. So "remove sample news and dummy publications" is **already done**;
what is actually left of the template is the Einstein photo, the demo images in
`assets/img/` (`1.jpg`..`12.jpg`, `rhino.png`, the two publication-preview GIFs,
`prof_pic_color.png`, `template_error.png`) and the stock al-folio footer text.

### Privacy problems found

1. `_pages/contact.md` publishes `352-721-8534`.
2. `_data/cv.yml` carries the same number in `cv.phone`.
3. `assets/pdf/resume.pdf` is the LaTeX resume. `NOTES_FOR_TOM.md` records that
   this PDF contains the phone number, and `profile.yaml`'s `known_issue_for_tom`
   records that the resume PDF shows a wrong `GPA 4.0/4.0` for UMich.
4. `_data/cv.yml` repeats that wrong `GPA 4.0/4.0` on the UMich education entry,
   against Tom's own rule in `profile.yaml` (`gpa: null  # no completed grades yet`).

### Research-disclosure problems found

`_data/cv.yml` contains material beyond `profile.yaml`, including an unpublished
statistical result and a named PhD supervisor. Trimmed to resume level, see
`DECISIONS.md`.

### Toolchain on this machine

- Ruby / Bundler / Jekyll: **not installed**.
- Docker Desktop: installed, daemon was stopped, started for this session.
- Node 22.18.0, npm 10.9.3, Python 3.13.6 available.

So the build path is Docker. Fallbacks are recorded in `BLOCKERS.md`.

## 2. Work plan

### Phase A, cleanup and foundation

- Delete the Einstein photo and every unused al-folio demo image.
- Draw an original SVG avatar for Tom and use it as the profile image, with a
  `TODO: Tom` note to swap in a real headshot.
- Strip the phone number from `_pages/contact.md` and `_data/cv.yml`.
- Unpublish `assets/pdf/resume.pdf`; replace the CV download with a visible
  `TODO: Tom uploads public resume` note.
- Blank the wrong UMich GPA.
- Add a site-wide stylesheet (`assets/css/tom.css`) for typography, motion and
  the shared card/panel look used by the three new features.

### Phase B, pages

- Rewrite `about.md` around a one-line identity: ML safety and reliability, plus
  builder. Keep it short, move detail to `/research/`.
- New `/research/` page at resume level only.
- Rework `/projects/` so each project card carries an original SVG illustration.
- Rework `/cv/`, `/publications/`, `/personal/`, `/contact/` for the new look.
- Seed `_news/` with real, dated items taken only from `profile.yaml`.

### Phase C, the three interactive features

Each gets its own page, its own CSS file, its own JS file, and a nav entry.

1. `/map/` "Where I've been". Original inline SVG map (no Leaflet, no tiles, no
   third-party requests), four pins, animated connecting path, click or keyboard
   to open a card per city.
2. `/languages/` "Guess the language". 10 rounds, scored, seven languages,
   multi-answer accepted where a spelling is genuinely shared, reveal with
   meaning and a note.
3. `/memory/` "Memory corner". Speed memory challenge plus an animated memory
   palace walkthrough, all original SVG/CSS.

### Phase D, build, test, polish

- `docker compose up -d`, verify every route, check light and dark, check 375px.
- Fix broken links.
- Lighthouse via the repo's `lighthouse_results` setup if it will run.
- Screenshots of every page in both themes for `SUMMARY.md`.

## 3. Things only Tom can finish

Tracked in `MORNING_TODO.md`: Shanghai and Chapel Hill dates, a headshot, a
public resume PDF, and real project screenshots.
