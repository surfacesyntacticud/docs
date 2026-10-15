---
title: SUD deprels
type: general
tags:
 - deprel
---

# SUD dependency relations

## Structure of dependency relations

In SUD, each dependency relation is made of up to three parts:
 - a required **main** relation 
 - an optional **subrelation** (prefixed by `:`)
 - an optional **deep_feature** (prefixed by `@`)

Some examples of the four possible cases:
 - Only **main** relation: [cc](./cc)
 - with a **subrelation** only: [comp:obj](guidelines/universal/deprel/comp/comp:obj)
 - with a **deep feature** only: [subj@expl](guidelines/universal/deprel/subj/subj@expl)
 - with both: [comp:aux@tense](guidelines/universal/deprel/comp/comp:aux)

> [!note]- about mSUD
> In mSUD, there is a fourth part called `type` and prefixed by `/`

## SUD specific main relations
In SUD there are three specific (i.e. not used in UD) main relation:
[`subj`](guidelines/universal/deprel/subj),
[`comp`](guidelines/universal/deprel/comp) and 
[`mod`](guidelines/universal/deprel/mod).

The schema below shows these relations and their standard extensions (possible combination of subrelations and deep features.

![SUD deprel taxonomie](/static/images/drawio/SUD_deprel_taxo.png)

The schema also introduce two underspecified relation specificaly used in SUD:
 - [`udep`](guidelines/universal/deprel/udep) with stands for a relation which is either a `comp` or a `mod`. It is typically used for noun complements for which distinction is not done in most of the cases. See for example in [SUD_French-GSD](https://universal.grew.fr/?custom=6a73172592f8f).
 - `unk` with stands for a relation which is unkonwn: no specific dependency could be identified. It is mainly used in annotation of [idioms](guidelines/universal/construction/idioms_titles).


## Other common relations and extensions

Here is a list of commonly used main relations in SUD, with their common extensions.

 - [`cc`](guidelines/universal/deprel/cc)
 - [`compound`](guidelines/universal/deprel/compound)
 - [`conj`](guidelines/universal/deprel/conj)
   - [`conj:coord`](guidelines/universal/deprel/conj/conj:coord)
   - [`conj:appos`](guidelines/universal/deprel/conj/conj:appos)
   - [`conj:reform`](guidelines/universal/deprel/conj/conj:reform)
 - `det`
 - [`discourse`](guidelines/universal/deprel/discourse/discourse)
   - [`discourse:filler`](guidelines/universal/deprel/discourse/discourse:filler)
   - [`discourse:tag`](guidelines/universal/deprel/discourse/discourse:tag)
 - [`dislocated`](guidelines/universal/deprel/dislocated)
   - [`dislocated:mod`](guidelines/universal/deprel/dislocated/dislocated:mod)
   - [`dislocated:obj`](guidelines/universal/deprel/dislocated/dislocated:obj)
   - [`dislocated:obl`](guidelines/universal/deprel/dislocated/dislocated:obl)
   - [`dislocated:subj`](guidelines/universal/deprel/dislocated/dislocated:subj)
 - [`flat`](guidelines/universal/deprel/flat)
   - [`flat@foreign`](guidelines/universal/deprel/deep_features/foreign)
   - [`flat@name`](guidelines/universal/deprel/deep_features/name)
 - `goeswith`
 - `orphan`
 - [`parataxis`](guidelines/universal/deprel/parataxis/parataxis)
   - [`parataxis:insert`](guidelines/universal/deprel/parataxis/parataxis:insert)
   - [`parataxis:parenth`](guidelines/universal/deprel/parataxis/parataxis:parenth)
 - `punct`
 - [`reparandum`](guidelines/universal/deprel/reparandum)
 - `root`
 - [`vocative`](guidelines/universal/deprel/vocative)

> [!note]
> In treebanks converted from UD to SUD, other deep extensions may appear.
> See examples in [English treebanks](https://universal.grew.fr/?custom=6a3cf64743620): `@desc`, `@npmod`, `@poss`, `@tmod`and `@unmarked` are used to keep track of UD subrelations.

 