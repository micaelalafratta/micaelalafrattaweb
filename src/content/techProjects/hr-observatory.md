---
title: Spain Data & AI Labour Observatory
publishDate: 2026-07-06 00:00:00
img: /assets/viz-observatory.png
img_alt: Data pipeline diagram showing job postings flowing from the Adzuna API through category-based extraction into a governed BigQuery layer, annotated with DAMA data-quality dimensions
featured: true
description: |
  A labour-market observatory for data, technology and governance roles in Spain — built as a working demonstration of DAMA/CDMP data-governance practice applied to its own pipeline. Currently in Phase 1 (foundation and extraction).
tags:
  - Python
  - SQL
  - BigQuery
  - Adzuna API
  - Data Governance
  - DAMA/CDMP
---

## The Project

The Spanish labour market is opaque: salaries are rarely disclosed, what is actually required in technical roles is buried in unstructured text, and the way automation and AI regulation are reshaping demand is unevenly documented. This project measures that with real job-posting data and, just as importantly, documents the whole pipeline with governance criteria — treating the process itself as the deliverable, not only the analysis.

It is deliberately built as a demonstration of DAMA/CDMP practice: every extraction, cleaning and scope decision is recorded as it is made, with its rationale, so the repository reads as evidence of how data is managed, not just what was found.

*This is an in-progress project. This page documents the foundation and extraction work completed in Phase 1; analysis and public findings will be added as the project advances.*

## Approach & Technical Execution

**Phase 1 — Foundation, Extraction & Governance (in progress)**

The current phase establishes a reproducible, fully documented extraction pipeline before any analysis is run — the sequence matters, because a governed pipeline is what the project is meant to demonstrate.

- **Source and scope defined deliberately.** Job postings are retrieved from the Adzuna API (Spain) by *category*, not by free-text keyword. An early exploratory version used keyword search; it was replaced because the search universe then depended on individual word choice and missed bilingual variants (a search for "data" misses "datos"; "rrhh" misses "recursos humanos"). The category-based universe is stable and documentable: four in-scope categories (`it-jobs`, `hr-jobs`, `legal-jobs`, `consultancy-jobs`), each chosen for a stated reason, with two categories excluded on purpose and logged as a Phase 1 limitation.

- **Extraction validated against reality, not documentation.** Before building the full extractor, test calls confirmed what Adzuna *actually* returns — which does not fully match its public docs. This surfaced the project's central empirical finding early: salary data is present in roughly 2% of postings, confirming the structural salary-opacity hypothesis that motivates the whole observatory. Geographic coordinates appear in only ~50% of postings, and the `description` field is a truncated snippet, not the full text.

- **First full extraction complete.** ~1,000 raw postings extracted across the four categories (5 pages × 50 results per call, the Adzuna maximum), saved as immutable timestamped JSON with an integrity check confirming no pages were lost. Raw data is never edited by hand — a strict extract/transform/load separation.

**Phase 2 onward (planned)**

Cross-source analysis (INE-EPA microdata, the ILO AI-exposure index), a sector-by-sector regulatory table mapped to the EU AI Act, pipeline automation, and a Looker Studio dashboard.

## Governance Decisions Made

The point of the project is that these are documented as they happen, not reconstructed at the end:

- **Data Dictionary** — every extracted field defined empirically, including its real presence rate and known limitations (sparse salary, inconsistent coordinates, truncated descriptions).
- **Data Quality Dimensions (DAMA)** — completeness written up with its own trade-offs (dispersed data roles, governance roles split across categories), plus an extraction-integrity check; accuracy documented for partial geocoding.
- **Data Lineage** — a chronological record of every pipeline event and decision, including the discarded keyword-search approach, retained deliberately: the raw files were deleted, but the reasoning is kept.
- **Two-tier confidence for text analysis** — a methodological decision to report keyword mentions from truncated descriptions as an explicit lower bound, separated from high-confidence structured-field analysis, rather than presenting one blended figure.

## What's Built So Far

- Repository scaffolding with an extract/transform/load structure and a documented Python virtual environment
- Adzuna API integration validated; category catalogue downloaded and stored as reference evidence of the inclusion criteria
- ~1,000 postings extracted and organised, with test and reference data separated from the active pipeline for transparency
- Three core governance documents (data dictionary, data quality, data lineage) written and kept current with every decision

## Stack

`Python` `Pandas` `SQL` `BigQuery` `Adzuna API` `Looker Studio`

[View on GitHub](https://github.com/micaelalafratta/hr-observatory) *(private during Phase 1 — made public on completion)*
