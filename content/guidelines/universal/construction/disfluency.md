---
title: Disfluency
scope:
  schema: SUD
type: construction
tags:
 - coordinating-conjunction
 - spoken
---


In oral language, speakers form sentences while speaking, which means that sometimes they might search for words while speaking.
They may repeat a word until they find the right one, or they may try with one word and then decide to change it.
In SUD, we use two relations for the annotations of this contructions:
 - [`reparandum`](guidelines/universal/deprel/reparandum) for repetition
 - [`conj:reform`](guidelines/universal/deprel/conj/conj:reform) for reformulation

> [!note]
> Up to version 2.18, the relation [`conj:dicto`](guidelines/universal/deprel/deprecated/conj:dicto) was used as a proxy for both repetitions and reformulations.
> Some SUD treebanks were not updated and still use [`conj:dicto`](guidelines/universal/deprel/deprecated/conj:dicto) even if the relation is deprecated for new annotations.

The next example shows French sentence with both annotations.

<conll>
# lang = French
# text = Euh, et c'était, bah c'était super bien, euh super spacieux.
# text_en = Um, it was, well it was really great, um super spacious.
1	euh	euh	INTJ	_	_	5	discourse	_	Gloss=um
2	,	,	PUNCT	_	_	1	punct	_	_
3	et	et	CCONJ	_	_	5	cc	_	Gloss=and
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	subj	_	SpaceAfter=No|Gloss=it
5	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	reparandum	_	Gloss=was|highlight=red
6	,	,	PUNCT	_	_	5	punct	_	_
7	bah	bah	INTJ	_	_	9	discourse	_	Gloss=well
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	subj	_	SpaceAfter=No|Gloss=it
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Gloss=was|highlight=red
10	super	super	ADJ	_	_	11	mod	_	Gloss=super
11	bien	bien	ADV	_	_	9	mod	_	Gloss=well|highlight=red
12	,	,	PUNCT	_	_	15	punct	_	_
13	euh	euh	INTJ	_	_	15	discourse	_	Gloss=um
14	super	super	ADV	_	_	15	mod	_	Gloss=super
15	spacieux	spacieux	ADJ	_	Gender=Masc	11	conj:reform	_	Gloss=spacious|highlight=red
16	.	.	PUNCT	_	_	9	punct	_	_
</conll>


The [`conj:reform`](guidelines/universal/deprel/conj/conj:reform) relation applies also when the linked words are not the same.

<conll>
# lang = French
# text = on sait euh la quantité euh le nombre de kilos de litres effectivement de produits
# text_en = we know uh the quantity uh the number of kilos of liters actually of products
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	subj	_	Gloss=we
2	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=know
3	euh	euh	INTJ	_	_	4	discourse	_	Gloss=um
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	quantité	quantité	NOUN	_	Gender=Fem|Number=Sing	2	comp:obj	_	Gloss=quantity|highlight=red
6	euh	euh	INTJ	_	_	5	discourse	_	Gloss=um
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Gloss=the
8	nombre	nombre	NOUN	conj:reform	Gender=Masc|Number=Sing	5	conj:reform	_	Gloss=number|highlight=red
9	de	de	ADP	_	_	11	reparandum	_	Gloss=of
10	kilos	kilo	NOUN	_	Gender=Masc|Number=Plur	9	comp	_	Gloss=kilos
11	de	de	ADP	_	_	8	udep	_	Gloss=of
12	litres	litre	NOUN	conj:reform	Gender=Masc|Number=Plur	11	comp	_	Gloss=liters
13	effectivement	effectivement	ADV	_	_	12	discourse	_	Gloss=actually
14	de	de	ADP	_	_	12	udep	_	Gloss=of
15	produits	produit	NOUN	_	Gender=Masc|Number=Plur	14	comp	_	Gloss=products
</conll>

## Unfinished constructions

Sometimes speakers utter a half-finished construction.
In this case, a word cannot be attached to its head, because the speaker decided not to say it.

<conll>
# lang = French
# text = Je lis son le portrait de notre de votre héros
# text_en = I'im reading his the portrayal of our of your hero
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	Gloss=I
2	lis	lire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=read
3	son	son	DET	_	_	4	reparandum	_	Gloss=his
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	portrait	portrait	NOUN	_	Gender=Masc|Number=Sing	2	comp:obj	_	Gloss=portrayal
6	de	de	ADP	_	_	8	reparandum	_	Gloss=of
7	notre	son	DET	_	_	6	comp	_	Gloss=our|Scrap=Yes|highlight=red
8	de	de	ADP	_	_	5	udep	_	Gloss=of
9	votre	son	DET	_	_	10	det	_	Gloss=your
10	héros	héros	NOUN	_	Gender=Masc	8	comp	_	Gloss=hero
</conll>

Below we can see an example when a speaker starts with one unfinished word *m~*, then decides it doesn't fit and searches for a more fitting word *virus*.

<conll>
# lang = French
# text = c'est-à-dire que le m~, le, le virus sait faire sa propre besogne de lui-même sur place.
1	c'est-à-dire	c'est-à-dire	CCONJ	_	ExtPos=CCONJ	10	cc	_	Idiom=Yes
2	que	que	SCONJ	_	_	1	unk	_	InIdiom=Yes
3	le	le	DET	_	_	4	det	_	_
4	m~	m~	X	_	_	9	reparandum	_	highlight=red
5	,	,	PUNCT	_	_	4	punct	_	_
6	le	le	DET	_	_	8	reparandum	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	le	le	DET	_	_	9	det	_	_
9	virus	virus	NOUN	_	_	10	subj	_	highlight=red
10	sait	savoir	VERB	_	_	0	root	_	_
11	faire	faire	VERB	_	_	10	comp:obj	_	_
12	sa	son	DET	_	_	14	det	_	_
13	propre	propre	ADJ	_	_	14	mod	_	_
14	besogne	besogne	NOUN	_	_	11	comp:obj	_	_
15	de	de	ADP	_	_	11	mod	_	_
16	lui-même	lui-même	PRON	_	_	15	comp	_	_
17	sur	sur	ADP	_	_	11	mod	_	_
18	place	place	NOUN	_	_	17	comp	_	_
19	.	.	PUNCT	_	_	10	punct	_	_
</conll>

> [!warning]
> In previous versions, the deep features [`@scrap`](guidelines/universal/deprel/deprecated/scrap) was used for unfinished constructions.
> This is now deprecated and should be used in SUD annotations.

