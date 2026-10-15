---
title: discourse main rel
request: pattern { X -[1=discourse]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

The `discourse` relation is used to link discourse markers.
These markers are not clearly linked to the structure of the sentence, except in an expressive way.

> [!hint]
> [Table of all SUD deprel with `discourse` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^discourse(@.*|:.*)?$)

The relation can be used:
 - without subrelation: [`discourse`](discourse)
 - with subrelation `tag` for tag questions: [`discourse:tag`](guidelines/universal/deprel/discourse/discourse:tag)
 - with subrelation `filler` for filler words: [`discourse:filler`](guidelines/universal/deprel/discourse/discourse:filler)

