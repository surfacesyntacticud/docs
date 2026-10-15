---
title: mod main rel
request: pattern { X -[1=mod]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---


In SUD, the `mod` relation is used for all modifiers (as opposed to UD set of label `amod`, `advmod`…).

> [!hint]
> [Table of all SUD deprel with `mod` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^mod(@.*|:.*)?$)

Most of the times, [`mod`](./mod) is used without extension or deep feature.
Possible extension or deep features:
 - [`mod:clf`](./mod:clf) for classifiers
 - [`mod@relcl`](./mod@relcl)

Other deep features appear during conversion from UD => SUD, UD subrelation are kept as "deep" SUD relation for information preserving.
For instance, UD:`nmod:tmod` => SUD:`mod@tmod`.
