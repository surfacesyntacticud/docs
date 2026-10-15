---
title: dislocated:mod
request: pattern { X -[dislocated:mod]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Dislocated modifier

The `dislocated:mod` relation is used between a dislocated modifier and its head.

<conll>
# sent_id = Rhap_D0001-50
# prosodic_annotation = yes
# speaker = L3
# speaker_id = §LF2
# macrosyntax = $L3 "euh" "ben" une journée "euh" &lt; je vais travailler //
# text = euh, ben, une journée, euh, je vais travailler.
1	euh	euh	INTJ	_	_	11	discourse:filler	_	AlignBegin=101454|AlignEnd=102096|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=102096|AlignEnd=102096
3	ben	ben	INTJ	_	_	11	discourse	_	AlignBegin=102096|AlignEnd=102396|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=102396|AlignEnd=102396
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	AlignBegin=102396|AlignEnd=102616
6	journée	journée	NOUN	_	_	11	dislocated:mod	_	AlignBegin=102616|AlignEnd=103366|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No|highlight=red
7	,	,	PUNCT	_	_	8	punct	_	AlignBegin=103366|AlignEnd=103366
8	euh	euh	INTJ	_	_	6	discourse:filler	_	AlignBegin=103366|AlignEnd=103689|SpaceAfter=No
9	,	,	PUNCT	_	_	6	punct	_	AlignBegin=103689|AlignEnd=103689
10	je	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	11	subj	_	AlignBegin=103689|AlignEnd=103974|Number[lex]=Sing|Person[lex]=1
11	vais	aller	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=103974|AlignEnd=104094|highlight=red
12	travailler	travailler	VERB	_	VerbForm=Inf	11	comp:obj	_	AlignBegin=104094|AlignEnd=104685|SpaceAfter=No|Subject=SubjRaising
13	.	.	PUNCT	_	_	11	punct	_	AlignBegin=104685|AlignEnd=104685
</conll>

