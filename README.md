# xiaoyu-ch.github.io

Personal site for Xiaoyu (Tom) Chen: about, CV, publications, projects, personal, and contact.

Built on [al-folio](https://github.com/alshedivat/al-folio) (Jekyll). Deploys automatically to GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml) on every push to `main`.

## Local development

Requires Ruby + Bundler, or Docker.

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000/
```

Or with Docker:

```bash
docker compose up -d
# http://localhost:8080/
```

## Structure

- `_pages/about.md` - home page bio
- `_pages/cv.md` + `_data/cv.yml` - CV page
- `_pages/publications.md` + `_bibliography/papers.bib` - publications
- `_pages/projects.md` + `_projects/` - project write-ups
- `_pages/personal.md` - personal page
- `_pages/contact.md` - contact info
- `_config.yml` - site-wide settings

## To do

- [ ] Add real headshot to `assets/img/prof_pic.jpg`
- [x] Resume PDF: auto-generated from `_data/cv.yml` by `.github/workflows/render-cv.yml` on every push to `main`
