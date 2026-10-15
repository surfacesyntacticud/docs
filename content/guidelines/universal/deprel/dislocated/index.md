---
title: dislocated main rel
request: pattern { X -[1=dislocated]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfil the usual core grammatical relations of a sentence. Dislocated elements are attached to the same governor as the dependent that they double for.


The relation is frequently associated to a subrelation indicating the function corresponding to the dislocated element in the main clause:
 - [`dislocated:subj`](./dislocated:subj)
 - [`dislocated:obj`](./dislocated:obj)
 - [`dislocated:obl`](./dislocated:obl)
 - [`dislocated:mod`](./dislocated:mod)
 - [`dislocated:unk`](./dislocated:unk)
 - [`dislocated`](./dislocated) without subrelation is used when the function is not annotated or unclear. 

> [!hint]
> [Table of all SUD deprel with `dislocated` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^dislocated(@.*|:.*)?$)

