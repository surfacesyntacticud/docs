---
title: conj main rel
request: pattern { X -[1=conj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - coordinating-conjunction
 - deprel
---

In **SUD**, the basic `conj` relation is used with three different subtypes:
 - [`conj:coord`](guidelines/universal/deprel/conj/conj:coord) for elements connected by a coordinating conjunction (parallel to [`conj`](https://universaldependencies.org/u/dep/conj.html) in UD)
 - [`conj:appos`](guidelines/universal/deprel/conj/conj:appos) for appositional modifiers that serve to define better the previous noun (parallel to [`appos`](https://universaldependencies.org/u/dep/appos.html) in UD)
 - [`conj:reform`](guidelines/universal/deprel/conj/conj:reform) for a reformulation: the first part is a complete utterance and the second part is a reformulation of the first (often, with more precisions). In UD the relation `conj:reform` is kept.

These three relations work as paradigmatic lists.
That's why in SUD, we decided to gather these three relations under the main relation `conj` to underline the similarity between the three.

In the three cases, the relation relates the first conjunct to the second one, the conjunction itself [`upos=CCONJ`](guidelines/universal/upos/CCONJ) is attached to the second conjunct with the relation [`cc`](cc).




> [!tips]
> See also a global view of `conj` usage in the last SUD release in this [table](https://tables.grew.fr/?data=sud_deps/conj).

> [!warning]
> Previously, the relation `conj:dicto` was used both for reformulation ans for disluencies.
> `conj:dicto` is now deprecated and should be replaced by [`conj:reform`](conj:reform) for reformulations and by[`reparandum`](reparandum) for disfluencies.