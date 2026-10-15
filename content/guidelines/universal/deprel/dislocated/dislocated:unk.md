---
title: dislocated:unk
request: pattern { X -[dislocated:unk]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Dislocated with unknown function

The `dislocated:unk` relation is used when the function cannot be guessed from the context

<conll>
# lang = fr
# sent_id = Rhap_D2011-56
# prosodic_annotation = yes
# speaker = L1
# speaker_id = §LM30
# macrosyntax = ensuite <+ nos chaussures qui sont ici "waouh" //
# text = ensuite, nos chaussures qui sont ici, waouh.
1	ensuite	ensuite	ADV	_	_	9	mod	_	AlignBegin=148128|AlignEnd=148543|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=148543|AlignEnd=148543
3	nos	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	AlignBegin=148543|AlignEnd=148673|HasSpokenGender=OnlySingExceptWithLiaison
4	chaussures	chaussure	NOUN	_	_	9	dislocated:unk	_	AlignBegin=148673|AlignEnd=149113|Gender[lex]=Fem|Number[ctxt]=Plur|highlight=red
5	qui	qui	PRON	_	PronType=Rel	6	subj	_	AlignBegin=149113|AlignEnd=149193
6	sont	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	mod@relcl	_	AlignBegin=149193|AlignEnd=149403
7	ici	ici	ADV	_	_	6	comp:obl	_	AlignBegin=149403|AlignEnd=149770|SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	AlignBegin=149770|AlignEnd=150068
9	waouh	waouh	INTJ	_	_	0	root	_	AlignBegin=150068|AlignEnd=150870|SpaceAfter=No|highlight=red
10	.	.	PUNCT	_	_	9	punct	_	AlignBegin=150870|AlignEnd=150870
</conll>