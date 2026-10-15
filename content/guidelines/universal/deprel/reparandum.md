---
title: reparandum
request: pattern { X -[reparandum]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
 - spoken
---

This relation is used to indicate difluencies, such as when a speaker corrects their speech.
It is similar to the [`reparandum` UD relation](https://universaldependencies.org/u/dep/reparandum.html), but in SUD, especially for spoken data, it is in in concurrence with [`conj:reform`](https://pebbles.surfacesyntacticud.org/guidelines/universal/deprel/conj/conj:reform). 

`reparandum` is a relation between a reparandum and its repair. Two cases are possible :

1) the reparandum that do not contain a complete content word (it can contain an unfinished content word): 

<conll>
# lang = French
# sent_id = ParisStories_2019_stagePrimaire_15
# text = j'ai j'ai vraiment adoré ce côté là .
# text_en = I did I did really like that part
1	j'	moi	PRON	_	Number[lex]=Sing|Person[lex]=1|PronType=Prs	2	subj	_	SpaceAfter=No|Gloss=I
2	ai	avoir	AUX	_	Number=Sing|Person=1	4	reparandum	_	Gloss=have|highlight=red
3	j'	moi	PRON	_	Number[lex]=Sing|Person[lex]=1|PronType=Prs	4	subj	_	SpaceAfter=No|Gloss=I
4	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=have|highlight=red
5	vraiment	vraiment	ADV	_	_	6	mod	_	Gloss=really
6	adoré	adorer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	comp:aux	_	Gloss=loved
7	ce	ce	DET	_	_	8	det	_	Gloss=that
8	côté	côté	NOUN	_	Gender=Masc|Number=Sing	6	comp:obj	_	Gloss=part
9	là	là	ADV	_	_	8	mod	_	Gloss=that
10	.	.	PUNCT	_	_	_	_	_	_
</conll>

2) the reparandum contains content words, but all the content words are repeated in the repair. Note: We exclude some repetitions, such as rebuttal or confirmation, which are analyzed with [`conj:reform`](https://pebbles.surfacesyntacticud.org/guidelines/universal/deprel/conj/conj:reform). It can also be a repetition of intensification, which is analyzed with [`conj:coord`](https://pebbles.surfacesyntacticud.org/guidelines/universal/deprel/conj/conj:coord).

<conll>
# lang = French
# sent_id = Rhap_D2008-126
# text = donc, euh, le scénario auquel on peut s'attendre encore une fois avec toutes les précautions qu'il faut, d'usage, qu'il faut mettre …
# text_en = So, um, the scenario we can expect once again taking all the precautions that need, required, that need to be taken …
1	donc	donc	ADV	_	_	32	mod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	euh	euh	INTJ	_	_	32	discourse:filler	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	scénario	scénario	NOUN	_	_	32	dislocated:subj	_	Gender[lex]=Masc|Number[ctxt]=Sing
7	auquel	lequel	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	11	comp:obl	_	_
8	on	on	PRON	_	Case=Nom|Emph=No|PronType=Ind	9	subj	_	Gender[ctxt]=Masc|Number[lex]=Sing|Person[lex]=3
9	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	6	mod@relcl	_	Person[ctxt]=3
10	s'	soi	PRON	_	PronType=Prs|Reflex=Yes	11	comp@expl	_	Person[lex]=3|SpaceAfter=No
11	attendre	attendre	VERB	_	VerbForm=Inf	9	comp:obj	_	Subject=SubjRaising
12	encore	encore	ADV	_	_	9	mod	_	_
13	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	fois	fois	NOUN	_	_	12	mod	_	Gender[lex]=Fem|Number[ctxt]=Sing
15	avec	avec	ADP	_	_	9	mod	_	_
16	toutes	tout	ADJ	_	Gender=Fem	18	mod	_	Number[ctxt]=Plur
17	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	18	det	_	_
18	précautions	précaution	NOUN	_	_	15	comp	_	Gender[lex]=Fem|Number[ctxt]=Plur
19	qu'	que	PRON	_	PronType=Rel	21	comp:obj	_	SpaceAfter=No
20	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs|Shared=No	21	subj@expl	_	Person[lex]=3
21	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	28	reparandum	_	Person[ctxt]=3|SpaceAfter=No|highlight=red
22	,	,	PUNCT	_	_	21	punct	_	_
23	d'	de	ADP	_	_	18	udep	_	SpaceAfter=No
24	usage	usage	NOUN	_	_	23	comp	_	Gender[lex]=Masc|LiaisonPossibleBefore=Yes|Number[ctxt]=Sing|SpaceAfter=No
25	,	,	PUNCT	_	_	23	punct	_	_
26	qu'	que	PRON	_	PronType=Rel	29	comp:obj	_	SpaceAfter=No
27	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	28	subj@expl	_	Person[lex]=3
28	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	18	mod@relcl	_	Person[ctxt]=3|highlight=red
29	mettre	mettre	VERB	_	VerbForm=Inf	28	comp:obj	_	Subject=NoRaising
30	,	,	PUNCT	_	_	6	punct	_	_
31	c'	ce	PRON	_	PronType=Dem	32	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
32	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
33	…	…	PUNCT	_	_	32	punct	_	_
</conll>

Note that the reparandum has been attached to its repair in the previous example, even if the result is non projective.

<conll>
# lang = French
# sent_id = ParisStories_2021_couruLaVoir_18
# text = euh, ouais, enfin je, on, c'était XXX, ça faisait un peu comme dans les films, à vrai dire.
# text_en =  uh, yeah, well I, we, it was XXX, it was kind of like in the movies, to tell the truth..
1	euh	euh	INTJ	_	_	3	discourse:filler	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	ouais	ouais	INTJ	_	_	15	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	enfin	enfin	ADV	_	ExtPos=INTJ	15	discourse	_	_
6	je	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	8	reparandum	_	Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	on	on	PRON	_	PronType=Ind	10	reparandum	_	Gender[ctxt]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	c'	ce	PRON	_	PronType=Dem	11	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
11	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	reparandum	_	_
12	XXX	XXX	X	_	_	11	unk	_	Scrap=Yes|SpaceAfter=No
13	,	,	PUNCT	_	_	11	punct	_	_
14	ça	ça	PRON	_	PronType=Dem	15	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3
15	faisait	faire	VERB	_	Mood=Ind|Tense=Imp|VerbForm=Fin	0	root	_	Number[ctxt]=Sing|Person[ctxt]=3
16	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	peu	peu	NOUN	_	_	18	mod	_	Gender[lex]=Masc|Number[ctxt]=Sing
18	comme	comme	SCONJ	_	_	15	mod	_	_
19	dans	dans	ADP	_	_	18	comp	_	_
20	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	21	det	_	HasSpokenGender=OnlySingExceptWithLiaison
21	films	film	NOUN	_	_	19	comp	_	Gender[lex]=Masc|Number[ctxt]=Plur|SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	à	à	ADP	_	_	15	discourse	_	_
24	vrai	vrai	ADJ	_	_	25	mod	_	Gender[ctxt]=Masc|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison|Number[ctxt]=Sing
25	dire	dire	VERB	_	VerbForm=Inf	23	comp	_	SpaceAfter=No|Subject=SubjRaising
26	.	.	PUNCT	_	_	15	punct	_	_
</conll>

The reparandum forms a unit, even if it is incomplete. In the following example, _d'autres_ (`DET ADJ`) is repeated. It is then a reparandum. As the unit is incomplete and the head noun is missing, the adjective _autres_ is promoted  (`Promotion=mod`) and the determiner _d'_ is attached to the position occupied by _autres_ (`Head=Position`)

<conll>
# lang = French
# sent_id = ParisStories_2019_experienceFac_67
# text = et là en fait en arrivant à la fac bah j'ai découvert un peu d'autres d'autres mondes, des gens qui venaient de partout ailleurs.
# text_en = and then, actually, when I got to college, I discovered a new a new world, people who came from all over.
1	et	et	CCONJ	_	_	12	cc	_	_
2	là	là	ADV	_	_	12	mod	_	_
3	en	en	ADP	_	ExtPos=ADV	12	discourse	_	Idiom=Yes
4	fait	fait	NOUN	_	_	3	comp	_	Gender[lex]=Masc|InIdiom=Yes|Number[ctxt]=Sing
5	en	en	ADP	_	_	12	mod	_	_
6	arrivant	arriver	VERB	_	VerbForm=Part	5	comp	_	Tense[denom]=Pres
7	à	à	ADP	_	_	6	mod	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fac	fac	NOUN	_	_	7	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing
10	bah	bah	INTJ	_	_	5	discourse	_	_
11	j'	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	12	subj	_	Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
12	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	découvert	découvrir	VERB	_	Gender=Masc|VerbForm=Part|Voice=Act	12	comp:aux@tense	_	Number[ctxt]=Sing|Tense[denom]=Past
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	InIdiom=Yes
15	peu	peu	NOUN	_	ExtPos=ADV	13	mod	_	Gender[lex]=Masc|Idiom=Yes|Number[ctxt]=Sing
16	d'	un	DET	_	Definite=Ind|Number=Plur|PronType=Art|Shared=No	17	det	_	Head=Position|LiaisonAfter=Yes|SpaceAfter=No|highlight=red
17	autres	autre	ADJ	_	_	20	reparandum	_	Gender[ctxt]=Masc|Number[ctxt]=Plur|Promotion=mod|Scrap=Yes|highlight=red
18	d'	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	20	det	_	LiaisonAfter=Yes|SpaceAfter=No
19	autres	autre	ADJ	_	_	20	mod	_	Gender[ctxt]=Masc|Number[ctxt]=Plur
20	mondes	monde	NOUN	_	_	13	comp:obj	_	Gender[lex]=Masc|Number[ctxt]=Plur|SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	23	det	_	_
23	gens	gens	NOUN	_	_	20	conj:appos	_	Gender[lex]=Masc|Number[ctxt]=Plur
24	qui	qui	PRON	_	PronType=Rel	25	subj	_	_
25	venaient	venir	VERB	_	Mood=Ind|Person=3|Shared=No|Tense=Imp|VerbForm=Fin	23	mod@relcl	_	Number[ctxt]=Plur
26	de	de	ADP	_	_	25	comp:obl	_	_
27	partout	partout	ADV	_	_	28	mod	_	_
28	ailleurs	ailleurs	ADV	_	_	26	comp	_	SpaceAfter=No
29	.	.	PUNCT	_	_	12	punct	_	_
</conll>

> [!note] Instead of `reparandum` which goes from right to left, it would have been possible to use a relation, that would have been named `repair`, going from left to right, as `conj:reform`.
> But this may result in some problems, especially when the `reparandum` is incomplete or headed by a interrupted word.

> [!tips]
> For more examples on disfluencies, you can refer to the [disfluency](guidelines/universal/construction/disfluency) page.

