---
title: Reported
request: pattern { X [Reported] }
scope:
  schema: SUD
type: doc
tags:
  - feature
---

The feature `Reported=Yes` is used on the root of the utterance which is a reported speech.

<conll>
# lang = French
# text = Ce qui est horrible c'est de se dire je n'en sortirai jamais
# text_en = What is horrible is to think I will never get out
1	Ce	ce	PRON	_	_	6	dislocated	_	Gloss=this
2	qui	qui	PRON	_	_	3	subj	_	Gloss=that
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	mod@relcl	_	Gloss=is
4	horrible	horrible	ADJ	_	Gender=Masc|Number=Sing	3	comp:pred	_	Gloss=horrible
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	subj	_	Gloss=that
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
7	de	de	ADP	_	_	6	comp:pred	_	Gloss=to
8	se	se	PRON	_	Person=3|PronType=Prs	9	comp	_	Gloss=yourself|InIdiom=Yes
9	dire	dire	VERB	_	ExtPos=VERB|VerbForm=Inf	7	comp	_	Gloss=say|InIdiom=Yes
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	13	subj	_	Gloss=I
11	n'	ne	ADV	_	Polarity=Neg	13	mod	_	Gloss=not
12	en	en	PRON	_	Person=3|PronType=Prs	13	comp:obj	_	Gloss=of
13	sortirai	sortir	VERB	_	Number=Sing|Person=1	9	comp:obj	_	Gloss=get_out|Reported=Yes|highlight=red
14	jamais	jamais	ADV	_	_	13	mod	_	Gloss=never
</conll>

