---
title: Denominative features
request: pattern { X [Tense__denom] }
scope:
  schema: SUD
type: doc
tags:
  - feature
---

# Denominative features

Since version 2.18, some features are associated with a layered features `denom`. A denominative feature is a feature that is traditionally used for the denomination of particular form, but do not correspond to the comparative concept associated with this feature. For instance, so-called past participles in French are used for the passive voice without introducing a past tense (_une personne intéressée par la syntaxe_). Even in the so-called _passé composé_, past participle is the _régime_ imposed by the auxiliary without which we cannot have the value of past tense.

> [!note] Related publication:
> [Status of morphosyntactic features Illustration with written and spoken French UD treebanks](https://aclanthology.org/2025.tlt-1.18/) (Kahane et al., TLT-SyntaxFest 2025)

The following denominative feature is used (in French treebanks only for now):

 - `Tense[denom]` with values `Pres` or `Past`, used on participle (`VerbForm=Part`)

> [!note]
> UD-native treebanks do not use denominative features. Moreover the fact `Tense` is layered with `denom` moves it from FEATS to MISC. To avoid confusion in UD treebanks, we have decided not to use the extension `denom`in UD-converted treebanks. Thus `Tense[denom]` is converted in `Tense` with a feature `Status[Tense]=Denom`in MISC.
> 
> See also discussion [#30](https://github.com/UniversalDependencies/UD_French-GSD/issues/30)
