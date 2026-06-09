---
title: Strategic Talent Retention Analysis
publishDate: 2026-01-15 00:00:00
img: /assets/churn-analysis-viz.png
img_alt: Power BI dashboard showing workforce stability metrics, attrition benchmarks by role, and correlation between overtime and employee turnover
featured: true
description: |
  End-to-end people analytics project identifying the behavioural and structural drivers behind employee churn in ABC Corporation — from raw data to executive-ready insights in 3 weeks.
tags:
  - Python
  - SQL
  - Power BI
  - People Analytics
---

## The Business Problem

Employee turnover is one of the most expensive and preventable challenges organisations face. ABC Corporation had a 16% global attrition rate — and 259 high-performing employees had already left, representing an estimated replacement cost of **$22,122,795**.

The question wasn't just "who is leaving?" but "what is the organisation doing — or not doing — that is driving them out?"

## Approach & Technical Execution

This was an end-to-end group project completed in 3 weeks, covering the full analytics pipeline:

**Data processing:** Python (Pandas, NumPy) for data cleaning, feature engineering, and exploratory analysis. SQL queries to validate data integrity and cross-reference behavioural patterns across employee segments.

**Analysis:** Descriptive statistics and correlation analysis across variables including overtime, compensation, promotion history, stock options, travel frequency, contract type, and distance to work — identifying which factors most strongly predict attrition.

**Visualisation:** Multi-page interactive Power BI dashboard (DAX, Power Query) designed for HR leadership — translating complex multivariate findings into role-by-role attrition benchmarks with drill-down capability.

## Key Findings

### Who is leaving — and why

**Overtime is the strongest structural driver of churn.** Sales Representatives showed the highest attrition rate (37.8%) and the highest proportion of overtime hours. The correlation between excess workload and turnover holds across roles — the more overtime, the higher the exit rate.

**Professional stagnation is equally critical.** Employees who go 4+ years without a promotion show significantly higher attrition — even those with high stock option levels. Among top performers with maximum benefits, the probability of leaving spikes sharply after 4–5 years without career progression.

**Part-time employees represent 62% of churned staff**, pointing to structural instability in non-standard contracts — lower benefits, fewer development opportunities, and weaker organisational attachment.

**Compensation alone does not predict turnover** — but relative positioning within a pay band does. Employees with below-average salary increases for their performance rating are significantly more likely to leave than peers at the same performance level.

**Distance to work matters from 12km onwards.** Employees living further away show higher attrition, while those living nearby tend to stay. Remote work availability does not offset this effect significantly.

### The Talent Abyss — the highest-risk segment

The analysis identified a critical employee segment combining:
- High performance rating (≥3)
- Zero stock options
- 4+ years without promotion
- Low work-life balance

**This group shows a 31.82% attrition rate** — the most costly profile to lose and replace.

A secondary high-risk segment (performance ≥3, no stock options, 4+ years without promotion) shows a 23.57% attrition rate.

### Additional patterns

- The **18–22 age bracket** has by far the highest attrition rate, tapering significantly from 38 onwards.
- **Human Resources and Laboratory Technicians** are structurally under-promoted relative to their attrition risk.
- **Frequent business travel** correlates with higher turnover in high-performers, even though it does not directly correlate with lower satisfaction — suggesting the issue is lack of recognition or compensation for travel burden, not the travel itself.

## Recommendations

The analysis surfaces five priority actions for HR leadership:

1. **Promotion pipelines for high-risk roles** — Sales Representatives, Lab Technicians, HR, and Research Scientists need structured career paths with defined timelines.
2. **Stock option review for high performers** — incentive allocation should account for performance trajectory, not only seniority.
3. **Overtime audit in Sales** — headcount or workload redistribution to reduce the structural burnout driving the highest-attrition role in the company.
4. **Travel compensation policy** — frequent travellers in high-performance roles need explicit recognition; data on actual travel costs and compensation is currently missing.
5. **Hybrid work for employees beyond 15km** — distance-related attrition is addressable with remote flexibility, particularly in roles where it is operationally viable.

## Open Questions

The analysis also surfaces data gaps that limit current conclusions:

- `numberchildren` column contains no data — family care dynamics remain an untested hypothesis
- No data on internal compensation vs. market benchmarks — external competitiveness by role is unknown
- No breakdown of workload beyond overtime hours — volume and complexity of tasks not captured

## Stack

`Python` `Pandas` `NumPy` `SQL` `Power BI` `DAX` `Power Query`

[View on GitHub](https://github.com/micaelalafratta/Strategic-Talent-Retention-Analysis-Minimizing-Employee-Churn)
