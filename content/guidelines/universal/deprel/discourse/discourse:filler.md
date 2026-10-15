---
title: discourse:filler
request: pattern { X -[discourse:filler]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
 - spoken
---

In spoken treebanks, the `discourse:filler` subtype of the `discourse` relation is used for filler words.

In French, only one wordform *euh* is used.
It is the canonical way to transcribe a filler word.

<conll>
# sent_id = ParisStories_2021_adoptionMouts_1
# text = euh, on y est allé.
1	euh	euh	INTJ	_	_	5	discourse:filler	_	SpaceAfter=No|highlight=red
2	,	,	PUNCT	_	_	1	punct	_	_
3	on	on	PRON	_	Case=Nom|Emph=No|PronType=Ind	5	subj	_	Gender[ctxt]=Masc|Number[lex]=Sing|Person[lex]=3
4	y	y	PRON	_	PronType=Prs	6	comp:obl	_	Person[lex]=3
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
6	allé	aller	VERB	_	VerbForm=Part	5	comp:aux@tense	_	Gender[ctxt]=Masc|Number[ctxt]=Sing|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
7	.	.	PUNCT	_	_	5	punct	_	_
</conll>



