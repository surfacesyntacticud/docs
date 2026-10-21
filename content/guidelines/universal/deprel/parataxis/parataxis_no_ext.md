---
title: parataxis
request: pattern { X -[parataxis]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

The `parataxis` relation is used to analyse two elements that are placed side by side with no explicit marker of coordination, subordination, or argument relation with the head word. 

<conll>
# sent_id = fr-ud-train_08333
# text = Allez-y, le site vaut le voyage.
1	Allez	aller	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|wordform=allez
2	-y	y	PRON	_	Emph=No|Person=3|PronType=Prs	1	comp:obl	_	SpaceAfter=No|wordform=y
3	,	,	PUNCT	_	_	6	punct	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	site	site	NOUN	_	Number=Sing	6	subj	_	Gender[lex]=Masc
6	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	voyage	voyage	NOUN	_	Number=Sing	6	comp:obj	_	Gender[lex]=Masc|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_
</conll>




<conll>
# lang = French
# text = Très demandé, vous le connaissez sûrement, Jean M est toujours dévoué, un vrai professionnel qui ne compte pas ses heures pour nous soigner.
1	Très	très	ADV	_	_	2	mod	_	_
2	demandé	demander	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	mod	_	SpaceAfter=No|Subject=Instantiated
3	,	,	PUNCT	_	_	2	punct	_	_
4	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	6	subj	_	_
5	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	comp:obj	_	_
6	connaissez	connaître	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	highlight=red
7	sûrement	sûrement	ADV	_	_	6	mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	Jean	Jean	PROPN	_	Gender=Masc|Number=Sing	11	subj	_	_
10	M	M	SYM	_	ExtPos=PROPN	9	mod	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	|highlight=red
12	toujours	toujours	ADV	_	_	11	mod	_	_
13	dévoué	dévoué	ADJ	_	Gender=Masc|Number=Sing	11	comp:pred	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
16	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	17	mod	_	_
17	professionnel	professionnel	NOUN	_	Gender=Masc|Number=Sing	9	conj:appos	_	_
18	qui	qui	PRON	_	PronType=Rel	20	subj	_	_
19	ne	ne	ADV	_	Polarity=Neg	20	mod	_	_
20	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	mod@relcl	_	_
21	pas	pas	ADV	_	Polarity=Neg	20	mod	_	_
22	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	23	det	_	_
23	heures	heure	NOUN	_	Gender=Fem|Number=Plur	20	comp:obj	_	_
24	pour	pour	ADP	_	_	20	mod	_	_
25	nous	le	PRON	_	Number=Plur|Person=1|PronType=Prs	26	comp:obj	_	_
26	soigner	soigner	VERB	_	VerbForm=Inf	24	comp:obj	_	SpaceAfter=No|Subject=SubjRaising
27	.	.	PUNCT	_	_	11	punct	_	_
</conll>




