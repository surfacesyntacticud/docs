---
title: parataxis:insert
request: pattern { X -[parataxis:insert]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---


# inserted clause

The relation `parataxis:insert` is used for inserted clause.
Contrary to a parenthetical clause, an inserted clause could not form an independent sentence.

<conll>
# lang = French
# text = La France est rose constate La Voix du Nord
# text_en = France is pink notes La Voix du Nord
# sent_id = Rhap_D2013-6
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	France	France	PROPN	_	_	3	subj	_	Gloss=France
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is|highlight=red
4	rose	rose	ADJ	_	Number=Sing	3	comp:pred	_	Gloss=pink
5	constate	constater	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis:insert	_	Gloss=notes|highlight=red
6	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	Gloss=the
7	Voix	Voix	NOUN	_	ExtPOS=PROPN|Gender=Fem|Number=Sing	5	subj	_	Gloss=voice
8	du	du	ADP	_	_	7	mod	_	Gloss=of_the
9	Nord	Nord	PROPN	_	_	8	comp	_	Gloss=north
</conll>

<conll>
# lang = French
# text = Il faudra encore du temps », avait-il déclaré.
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	subj@expl	_	_
2	faudra	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	highlight=red
3	encore	encore	ADV	_	_	2	mod	_	_
4	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	temps	temps	NOUN	_	Gender=Masc|Number=Sing	2	comp:obj	_	_
6	»	»	PUNCT	_	_	8	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	parataxis:insert	_	SpaceAfter=No|highlight=red
9	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	subj	_	_
10	déclaré	déclarer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	comp:aux@tense	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_
</conll>

<conll>
# lang = English
# text = Kim couldn't spend the night, I told you.
1	Kim	Kim	PROPN	NNP	Number=Sing	2	subj	_	_
2-3	couldn't	_	_	_	_	_	_	_	_
2	could	could	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	0	root	_	highlight=red
3	n't	not	PART	RB	Polarity=Neg	2	mod	_	_
4	spend	spend	VERB	VB	VerbForm=Inf	2	comp:aux	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	night	night	NOUN	NN	Number=Sing	4	comp:obj	_	_
7	,	,	PUNCT	,	_	9	punct	_	_
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	subj	_	_
9	told	tell	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	parataxis:insert	_	highlight=red
10	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	9	comp:obl	_	_
11	.	.	PUNCT	.	_	2	punct	_	_
</conll>

