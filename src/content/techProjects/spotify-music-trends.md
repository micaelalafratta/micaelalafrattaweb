---
title: Music Trend Analysis — Spotify & Last.fm APIs
publishDate: 2024-04-01 00:00:00
img: /assets/spotify-trends.png
img_alt: Music trend analysis visualisation showing genre and listening patterns across pre-pandemic, pandemic and post-pandemic years
description: |
  API data extraction, cleaning and MySQL database construction to analyse how the COVID-19 pandemic shaped music consumption trends across five genres and five years.
tags:
  - Python
  - SQL
  - API
  - MySQL
  - Data Extraction
---

## The Project

Did global lockdowns change what people listened to — and how? This project uses the Spotify and Last.fm developer APIs to extract music data across five genres (pop, rock, metal, country, R&B) and five years (2018–2022), spanning the pre-pandemic, pandemic, and post-pandemic periods. The extracted data is cleaned, structured, and loaded into a relational MySQL database for analysis.

The underlying question is cultural as much as technical: major world events leave traces in data. Music consumption is one place where those traces are surprisingly visible.

## Approach & Technical Execution

**Data extraction:** Two APIs queried simultaneously — Spotify for Developers and Last.fm — using `spotipy` and `python-dotenv` for credential management. Data was extracted across five genres with consistent parameters to allow cross-genre comparison.

**Data cleaning:** Python (Pandas) for standardising, deduplicating and structuring the raw API responses into a format suitable for relational storage.

**Database construction:** MySQL relational database built from the cleaned dataset, with a schema designed to support genre-level, year-level and cross-period queries.

## What This Project Demonstrates

Working with APIs requires more than calling an endpoint — it involves understanding rate limits, authentication flows, response structures, and how to handle inconsistent or incomplete data at scale. This project covers the full extraction-to-database pipeline, from raw API responses to a queryable relational schema.

It also demonstrates practical credential management with `python-dotenv` — a standard pattern for keeping API keys out of version control.

## Stack

`Python` `API` `Pandas` `Spotipy` `MySQL` `python-dotenv`

[View on GitHub](https://github.com/micaelalafratta/Spotify-API-extraction)
