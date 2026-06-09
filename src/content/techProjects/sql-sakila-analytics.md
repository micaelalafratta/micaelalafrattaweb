---
title: Movie Rental SQL Analytics
publishDate: 2024-12-01 00:00:00
img: /assets/sakila.png
img_alt: Query results showing rental counts per customer and category aggregations from the Sakila database
description: |
  24-exercise SQL assessment over the Sakila relational database — filtering, aggregation, multi-table JOINs, subqueries, and pattern matching across a movie rental schema.
tags:
  - SQL
  - MySQL
  - Relational Databases
  - JOINs
  - Subqueries
---

## The Project

Sakila is MySQL's canonical sample database: a movie rental business with 16 related tables covering films, actors, customers, inventory, rentals, payments, and staff. This assessment uses it as a substrate for demonstrating SQL fluency across increasing levels of complexity — from single-table queries to four-way JOINs and correlated subqueries.

## Approach & Technical Execution

**Scope of the assessment**

24 exercises structured around three levels of complexity:

- **Filtering and retrieval** — `DISTINCT`, `WHERE`, `LIKE`, `BETWEEN`, `NOT IN`, `REGEXP`
- **Aggregation** — `COUNT`, `AVG`, `GROUP BY`, `HAVING`, `ROUND`
- **Multi-table logic** — `INNER JOIN`, `LEFT JOIN`, subqueries with `IN` and `NOT EXISTS`, `DATEDIFF`

**Notable technical decisions**

For exercises where multiple approaches were valid, both were implemented and compared. Exercise 14 — finding films with "dog" or "cat" in the description — includes a `LIKE` solution and a `REGEXP` alternative, with a note on when each is preferable. Exercise 23 — actors who have never appeared in a Horror film — is solved twice: once with `NOT IN` and a derived set, once with `NOT EXISTS` and a correlated subquery, which performs better on large datasets by short-circuiting evaluation per row.

The intermediate queries are preserved alongside final queries throughout the file. This reflects the actual working process: exploring table structure, verifying joins before aggregating, and confirming results before trimming columns. The exploratory steps are part of the work, not noise to be removed.

**Multi-table JOIN chain (Exercise 11)**

Rental counts by category required traversing four tables — `rental → inventory → film_category → category` — with no direct key between rentals and categories. Building the chain in stages, verifying intermediate results at each join, confirmed the logic before applying `GROUP BY`.

## Key Queries

**Rentals per customer with customer details** — `LEFT JOIN` between `customer` and `rental` preserves customers with zero rentals, rather than silently excluding them.

**Films rented for more than 5 days** — subquery isolates `rental_id`s where `DATEDIFF(return_date, rental_date) > 5`, then the outer query joins to film titles. Separation of concerns: the duration logic stays contained.

**Actors not in Horror films** — `NOT EXISTS` with a correlated subquery is semantically cleaner than `NOT IN` when the excluded set could be large or contain NULLs, which would cause `NOT IN` to return no results.

**Average film length by category, filtered to >120 min** — `HAVING` rather than `WHERE`, since the filter applies to an aggregate computed after grouping, not to individual rows.

## Stack

`MySQL` `Sakila Database`

[View on GitHub](https://github.com/micaelalafratta/movie-rental-sql-analytics)
