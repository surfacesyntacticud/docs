---
title: conj:reform
request: pattern { X -[1=conj, 2=reform]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - spoken
 - deprel
---

The `conj:reform` relation is specific to spoken language and it is used to link elements in a reformulation.
Whereas the relation [`conj:coord`](./conj:coord.md) links two different objects, two referents (ex: *Mary and John* are two different referents).
The relation `conj:reform`, on the other hand, is used to link two denotations of the same referent (ex: *the desert in Kenya, the Kenya desert* is denoting the same referent).

The first element contains at least one content word. The second element is a reformulation of the first one : it generally makes more precise the meaning of the first element by the choice of a more specific term or by giving more details. 

Reformulation is distinguished on one side from repairs (encoded in the reverse direction by [`reparandum`](guidelines/universal/deprel/reparandum)), where the first element is incomplete or do not contain content words, and on the other side, from apposition ([`conj:appos`](./conj:appos)), when the second element is a new denotation taking another point of view and not a pure reformulation.

<conll>
# lang = French
# text = en fait j'habite dans une maison en banlieue, la banlieue parisienne.
# sent_id = ParisStories_2019_histoireDeBanlieue_2
# speaker = non_native
1	en	en	ADP	_	ExtPos=ADV	4	discourse	_	Idiom=Yes
2	fait	fait	NOUN	_	_	1	comp	_	Gender[lex]=Masc|InIdiom=Yes|Number[ctxt]=Sing
3	j'	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	4	subj	_	Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
4	habite	habiter	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	Person[ctxt]=1
5	dans	dans	ADP	_	_	4	comp:obl	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	maison	maison	NOUN	_	_	5	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing
8	en	en	ADP	_	_	4	discourse	_	_
9	banlieue	banlieue	NOUN	_	_	8	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No|highlight=red
10	,	,	PUNCT	_	_	12	punct	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	HasSpokenGender=OnlySingExceptWithLiaison
12	banlieue	banlieue	NOUN	_	_	9	conj:reform	_	Gender[lex]=Fem|Number[ctxt]=Sing|highlight=red
13	parisienne	parisien	ADJ	_	Gender=Fem	12	mod	_	HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|Number[ctxt]=Sing|SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_
</conll>

<conll>
# lang = French
# text = puisque les les les les c~ les capitales les grandes villes ne me disaient rien du tout
# text_en = since I didn't know anything at all about the the the the c ~ the capitals the big cities
1	puisque	puisque	SCONJ	_	_	0	root	_	Gloss=since
2	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	reparandum	_	Gloss=the
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	reparandum	_	Gloss=the
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	reparandum	_	Gloss=the
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	Gloss=the
6	c~	c~	X	_	_	8	reparandum	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	Gloss=the
8	capitales	capitale	NOUN	_	Gender=Fem|Number=Plur	14	subj	_	Gloss=capitals|highlight=red
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	Gloss=the
10	grandes	grand	ADJ	_	Gender=Fem|Number=Plur	11	mod	_	Gloss=big
11	villes	ville	NOUN	_	Gender=Fem|Number=Plur	8	conj:reform	_	Gloss=cities|highlight=red
12	ne	ne	ADV	_	Polarity=Neg	14	mod	_	Gloss=not
13	me	lui	PRON	_	_	14	comp:obl	_	Gloss=me
14	disaient	dire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	1	comp	_	Gloss=tell
15	rien	rien	PRON	_	_	14	comp:obj	_	Gloss=nothing
16	du	du	ADP	_	_	15	mod	_	Gloss=of_the
17	tout	tout	ADV	_	_	16	comp	_	Gloss=all
</conll>

We also use `conj:reform` for a rebuttal, as well as a request of confirmation or a confirmation, when we consider dependencies beyond the speech turn. Such examples, where the second conjunct generally repeats the first one, must not be confused with reparandum:

<conll>
# lang = French
# sent_id = Rhap_D0005-27
# text = et, euh, bon, ben, ça pose des problèmes de maintenan~, enfin, de maintenance, euh, de, de mise à jour, et tout ça, euh, voilà.
# text_en = and, um, well, it causes problems with maintenan~, well, with maintenance, um, with, with updates, and all that, um, you know.
1	et	et	CCONJ	_	_	10	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	euh	euh	INTJ	_	_	10	discourse:filler	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	bon	bon	INTJ	_	_	10	discourse	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ben	ben	INTJ	_	_	10	discourse	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	ça	ça	PRON	_	PronType=Dem	10	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3
10	pose	poser	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Number[ctxt]=Sing|Person[ctxt]=3
11	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	12	det	_	_
12	problèmes	problème	NOUN	_	_	10	comp:obj	_	Gender[lex]=Masc|Number[ctxt]=Plur
13	de	de	ADP	_	_	12	udep	_	_
14	maintenan~	maintenan~	X	_	ExtPos=NOUN	13	comp	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	enfin	enfin	ADV	_	_	18	discourse	_	SpaceAfter=No
17	,	,	PUNCT	_	_	16	punct	_	_
18	de	de	ADP	_	_	13	conj:reform	_	_
19	maintenance	maintenance	NOUN	_	_	18	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	euh	euh	INTJ	_	_	25	discourse:filler	_	SpaceAfter=No
22	,	,	PUNCT	_	_	25	punct	_	_
23	de	de	ADP	_	_	25	reparandum	_	SpaceAfter=No
24	,	,	PUNCT	_	_	23	punct	_	_
25	de	de	ADP	_	_	18	conj:reform	_	_
26	mise	mise	NOUN	_	_	25	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing
27	à	à	ADP	_	_	26	udep	_	_
28	jour	jour	NOUN	_	_	27	comp	_	Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
29	,	,	PUNCT	_	_	32	punct	_	W
30	et	et	CCONJ	_	_	32	cc	_	_
31	tout	tout	ADJ	_	Gender=Masc	32	mod	_	Number[ctxt]=Sing
32	ça	ça	PRON	_	PronType=Dem	26	conj:coord	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
33	,	,	PUNCT	_	_	34	punct	_	_
34	euh	euh	INTJ	_	_	32	discourse:filler	_	SpaceAfter=No
35	,	,	PUNCT	_	_	36	punct	_	_
36	voilà	voilà	VERB	_	ExtPos=INTJ	32	discourse	_	SpaceAfter=No
37	.	.	PUNCT	_	_	10	punct	_	_
</conll>



