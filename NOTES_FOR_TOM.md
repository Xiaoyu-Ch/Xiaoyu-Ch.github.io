# Notes for Tom

Running log of decisions made without stopping to ask, and things worth a second look. Newest first.

## On the "Phase 1-5" handoff (2026-08-27)

A message arrived formatted as a fresh from-scratch build plan (clone al-folio, create the repo, populate content, build pages, style, deploy), attributed to "my AI assistant." You flagged it yourself as "half truth in general." It is: it describes work that's already done and, in a couple of spots, less accurate than what's already live (its Muted bullet drops the `$0.30 to $0.01-0.02` cost breakdown that's actually in your resume PDF). I did not restart from it: no re-clone, no new repo, no content wipe. Treated it as a general "keep going, make it a bit more fun" nudge and continued from the real current state, per your instruction in the message that attached it.

## Current real state (as of this session)

- Site scaffolded from al-folio, cloned into `Xiaoyu-Ch.github.io/`, local git repo initialized, **not yet pushed** (blocked on you creating the empty GitHub repo, since I have no `gh` CLI or token in this environment).
- Pages: about (home), CV, publications, projects (Muted, Hoopalytics, CRetor), blog (empty, ready for posts), personal, contact.
- CV data (`_data/cv.yml`) reconciled against your actual LaTeX resume PDF (`assets/pdf/resume.pdf`), which is what the CV page's download button links to. `render-cv.yml`'s auto-generated PDF is disabled from auto-firing (would've been a redundant, unlinked bot commit on every push) but left available via manual workflow_dispatch.
- Interactive additions, kept off the CV/Publications pages by design: a live merge-sort-vs-heap-sort race on Hoopalytics, an Elo-scoring demo on CRetor, a CSS-only rotating cube + console easter egg on the About page.
- Everything verified via local Docker/Jekyll (`docker compose up -d`, port 8080), not just assumed to work: all routes 200, no horizontal overflow at 375px, mobile nav expands correctly, both light and dark theme confirmed for the new widgets, zero JS console errors introduced by new code.

## Assumptions and judgment calls

- **Three.js vs. CSS cube**: an earlier version of this brief asked for a three.js rotating object. Built a pure-CSS 3D cube instead (~0kb vs. three.js's ~150kb) given the recurring "keep performance in mind" constraint. Flagged this explicitly at the time; no objection yet, so leaving it.
- **Phone number**: your LaTeX resume PDF has one (352-721-8534) that wasn't in earlier verified-facts lists. Since it's already public in the PDF the CV page links to, added it to the Contact page too, for consistency rather than partial-hiding info that's one click away anyway.
- **CRetor title split**: your resume gives the paper a longer formal title ("...Annotated for Rhetorical Strategy") than earlier briefs did. Used the long title only on the Publications listing (matches the actual paper) and kept the project page's name short ("CRetor: Mandarin Counter-Speech Dataset") for branding consistency with the other two project cards.
- **Blog and News**: both enabled per your explicit decision. Currently empty (no posts, no news items) since I have no real posts to write for you. Demo external-source posts and demo tags/categories that ship with al-folio were stripped out so the empty state looks intentional, not broken.
- **Interactive additions scope**: kept every flourish off CV and Publications specifically (those need to stay unimpeachably professional for PhD admissions committees and recruiters skimming fast) and confined them to About/Projects/Personal, per your explicit instruction.

## Open items, need you specifically

- **GitHub repo doesn't exist yet.** I cannot create it (no `gh` CLI, no token, no OAuth in this non-interactive session). Create an empty repo named exactly `Xiaoyu-Ch.github.io` at github.com/new (no README/gitignore, so it doesn't conflict with the existing local history), then tell me and I'll push and watch the Actions run.
- **Profile photo** is still the al-folio placeholder at `assets/img/prof_pic.jpg`. Swap in a real headshot whenever you have one.
- **News/blog posts**: sections are on but empty. Add posts as files in `_posts/` (blog) or `_news/` (short announcements) whenever you have something to say.
