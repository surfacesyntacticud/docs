---
title: subj
request: pattern { X -[1=subj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---


In SUD, the `subj` main relation is used for all subjects (either nominal which are `nsubj` in UD or clausal which are `csubj` in UD).
`subj` is never used with a subrelation.

Most of the times, it is used without deep feature.
Possible deep feature extensions are:
 - `subj@expl`: See [`@expl`](guidelines/universal/deprel/deep_features/expl)
 - `subj@caus`: See [`@caus`](guidelines/universal/deprel/deep_features/caus)
 - `subj@pass`: See [`@pass`](guidelines/universal/deprel/deep_features/pass)

Other extensions appear during conversion from UD => SUD, UD subrelation are kept as "deep" SUD relation for information preserving.
For instance UD:`nsubj:cop` => SUD:`subj@cop`.

> [!hint]
> [Table of all SUD deprel with `subj` as main rel](https://tables.grew.fr/?data=sud_deps/DEPS&cols=^subj(@.*|:.*)?$)

Example of `subj` relation for nominal subject:

<conll>
# lang = English
1	A	a	DET	_	_	2	det	_	_
2	man	man	NOUN	_	_	3	subj	_	highlight_dep=red
3	walks	walk	VERB	_	_	0	root	_	_
</conll>

Example of clausal subject:

<conll>
# lang = English
# sent_id = GUM_whow_joke-55
# text = Practicing your joke is crucial.
# s_type=decl
1	Practicing	practice	VERB	VBG	VerbForm=Ger	4	subj	_	highlight_dep=red
2	your	your	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	3	mod@poss	_	_
3	joke	joke	NOUN	NN	Number=Sing	1	comp:obj	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	crucial	crucial	ADJ	JJ	Degree=Pos	4	comp:pred	_	SpaceAfter=No
</conll>
