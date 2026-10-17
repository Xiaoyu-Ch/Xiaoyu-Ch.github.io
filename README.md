# xiaoyu-ch.github.io

**Source for my personal site: research, CV, publications, and project write-ups.**

Live at **[xiaoyu-ch.github.io](https://xiaoyu-ch.github.io)**.

---

## What is here

A Jekyll site built on the [al-folio](https://github.com/alshedivat/al-folio) theme, served
by GitHub Pages.

- **about**: what I work on now
- **CV**: generated from `_data/cv.yml`, with the PDF linked from the same page
- **publications**: rendered from a BibTeX file, so citations stay consistent
- **projects**: one page per project, each with a small interactive demo built into it
- **blog**, **personal**, **contact**

The demos are the part worth clicking. They are written by hand in plain JavaScript, no
framework and no charting library, and each one runs the actual idea from the project it
sits on rather than showing a picture of it:

- the Hoopalytics page races a merge sort against a heap sort on a freshly shuffled array
  and counts the comparisons each one makes
- the CRetor page runs the Elo-style update rule live: vote for a response and watch both
  scores move by the amount the rule says they should
- the Muted page replays a grammar-correction pass on sentences a learner would plausibly
  write

All three respect `prefers-reduced-motion`.

## Running it locally

```bash
docker compose up -d        # site on http://localhost:8080, rebuilds on save
```

Or without Docker:

```bash
bundle install
bundle exec jekyll serve
```

## Editing it

| What             | Where                                             |
| ---------------- | ------------------------------------------------- |
| CV content       | `_data/cv.yml`                                    |
| Publications     | `_bibliography/papers.bib`                        |
| Project pages    | `_projects/`                                      |
| Blog posts       | `_posts/` (create the folder with the first post) |
| Short news items | `_news/`                                          |
| Site-wide config | `_config.yml`                                     |

## Built with

`Jekyll` · `Liquid` · `SCSS` · `vanilla JavaScript` · `GitHub Pages` · `Docker`

Theme: [al-folio](https://github.com/alshedivat/al-folio), MIT licensed.
