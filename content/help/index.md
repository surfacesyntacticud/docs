---
title: Help
---

This area describes how new SUD documentation (starting in Oct 2026) is organised and how to contribute to it.

The source of the documentation is maintained on GitHub: https://github.com/surfacesyntacticud/docs.
The documentation main page is available on https://docs.surfacesyntacticud.org.

The two main areas contains:
 - SUD specific guidelines
 - Validation peebles

This **help** area does not contains specific guidelines or validation pebbles but give some help for the contributors.

The main specificities in this documentation is that most of the pages are associated to a Grew request, describing in a format way what the page is about.
Such a page, is called a **pebble** and it helps to connect the documentation to the existing annotated data.

Currently two kinds of peebles are used:
 - regular guidelines pages, like for the [`reparandum`](guidelines/universal/deprel/reparandum) dependency relation or for the [`Shared`](guidelines/universal/feature/shared) feature.
 - validation pages, where the Grew request describes a *forbidden* or *unexpected* pattern that we do not expect to find in the data.

Nevertheless, a page can come without a Grew request, for instance for a construction description like [Idioms and Titles](guidelines/universal/construction/idioms_titles).

The general principle is to give more details and examples in contruction page, where a more global view of the annotation is explained and dicsussed, and to add links from the relevant pebbles pages to the *contruction* page.
The quartz system automatically generated **backlinks** (on the right of the page) where all pages linked to the current page are listed.
This is then easy to navigate from construction pages to dependency or feature related pages.

Example:
- Construction page: [Idioms and Titles](guidelines/universal/construction) 
- Pebbles pages: 
  - [Idiom & InIdiom](guidelines/universal/feature/idiom_inidiom)
  - [Title & InTitle](guidelines/universal/feature/title_intitle)
