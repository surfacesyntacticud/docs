---
title: comp
request: pattern { X -[comp]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Complement relation without subrel

> [!warning]
> Until 2026, the complement of `ADP` and `SCONJ` were annotated with the relation `comp:obj`.
> In version 2.18, it is still the case and it will change in version 2.19 (November 2026).
> See the difference on Sequoia for instance (version 2.18 and latest): [Grew-match](https://universal.grew.fr/?custom=6a71def028c58)

## Main usage
The `comp` relation is mainly used to introduce the complement of `ADP` and `SCONJ` (and also more rarely of `PART` of `CCONJ`).

### Examples with ADP

<conll>
# lang = French
# sent_id = annodis.er_00150
# text = Une pluie d'étoiles
# text_en = A shower of stars (lit: a rain of stars)
1	Une	un	DET	_	_	2	det	_	Gloss=a
2	pluie	pluie	NOUN	_	_	0	root	_	Gloss=rain
3	d'	de	ADP	_	_	2	udep	_	Gloss=of|SpaceAfter=No|highlight=red
4	étoiles	étoile	NOUN	_	_	3	comp	_	Gloss=stars|highlight=red
</conll>

<conll>
# lang = French
# text = On a décidé d'aller au CROUS de Censier
# text_en = We decided to go to the Censier CROUS
1	on	on	PRON	_	_	2	subj	_	Gloss=we
2	a	avoir	AUX	_	_	0	root	_	Gloss=have
3	décidé	décider	VERB	_	_	2	comp:aux	_	Gloss=decided
4	d'	de	ADP	_	_	3	comp:obj	_	Gloss=to
5	aller	aller	VERB	_	_	4	comp	_	Gloss=go|Subject=SubjRaising
6	à	à	ADP	_	_	5	comp:obl	_	Gloss=to|highlight=red
7	le	le	DET	_	_	8	det	_	Gloss=the
8	CROUS	CROUS	PROPN	_	_	6	comp	_	Gloss=CROUS|highlight=red
9	de	de	ADP	_	_	8	mod	_	Gloss=of
10	Censier	Censier	PROPN	_	_	9	comp	_	Gloss=Censier
</conll>

<conll>
# lang = English
1	Get	get	VERB	VB	VerbForm=Inf	0	root	_	_
2	feedback	feedback	NOUN	NN	Number=Sing	1	comp:obj	_	Entity=(abstract-120
3	from	from	ADP	IN	_	2	udep	_	_
4	librarians	librarian	NOUN	NNS	Number=Plur	3	comp	_	Entity=(person-119)
5	on	on	ADP	IN	_	2	udep	_	highlight=red
6	possible	possible	ADJ	JJ	Degree=Pos	7	mod	_	Entity=(abstract-105
7	subjects	subject	NOUN	NNS	Number=Plur	5	comp	_	Entity=abstract-120)abstract-105)|SpaceAfter=No|highlight=red
8	,	,	PUNCT	,	_	9	punct	_	_
9	based	base	VERB	VBN	Tense=Past|VerbForm=Part	1	mod	_	_
10	on	on	ADP	IN	_	9	udep	_	_
11	already	already	ADV	RB	_	12	mod	_	_
12	known	know	VERB	VBN	Tense=Past|VerbForm=Part	13	mod	_	Entity=(abstract-121
13	gaps	gap	NOUN	NNS	Number=Plur	10	comp	_	_
14	in	in	ADP	IN	_	13	udep	_	highlight=red
15	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	16	mod@poss	_	Entity=(abstract-122(person-119)
16	knowledge	knowledge	NOUN	NN	Number=Sing	14	comp	_	Entity=abstract-122)|highlight=red
17	and	and	CCONJ	CC	_	18	cc	_	_
18	skills	skill	NOUN	NNS	Number=Plur	16	conj	_	Entity=(abstract-123)abstract-121)|SpaceAfter=No
</conll>

<conll>
# lang = Russian
# sent_id = dev-s184
# text = С запада к храму примыкала трапезная часть с колокольней
# text_en = From the west, the refectory part with the bell tower was adjoining the temple
1	С	с	ADP	IN	_	5	comp:obl	_	Gloss=From
2	запада	запад	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	comp	_	Gloss=west
3	к	к	ADP	IN	_	5	comp:obl	_	Gloss=to|highlight=red
4	храму	храм	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	3	comp	_	Gloss=temple|highlight=red
5	примыкала	примыкать	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=was adjoining
6	трапезная	трапезный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	mod	_	Gloss=refectory
7	часть	часть	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	subj	_	Gloss=part
8	с	с	ADP	IN	_	7	udep	_	Gloss=with
9	колокольней	колокольня	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	8	comp	_	Gloss=bell tower
</conll>

### Examples with SCONJ

<conll>
# lang = English
1	this	this	PRON	_	_	2	subj	_	_
2	means	mean	VERB	_	_	0	root	_	_
3	that	that	SCONJ	_	_	2	comp:obj	_	_|highlight=red
4	you	you	PRON	_	_	5	subj	_	_
5	have	have	VERB	_	_	3	comp	_	highlight=red
6	to	to	PART	_	_	5	comp:obj	_	_
7	make	make	VERB	_	_	6	comp	_	_
8	one	one	PRON	_	_	7	comp:obj	_	_
9	of	of	ADP	_	_	8	udep	_	_
10	two	two	NUM	_	_	11	det	_	_
11	sacrifices	sacrifice	NOUN	_	_	9	comp	_	_
</conll>

In the previous example, there is also an example of `comp` linking the `PART` *to* and the `VERB` *make*.


<conll>
# lang = Spanish
# text = Afirmó que sigue el criterio europeo y que trata de incentivar el mercado
# text_en = He stated that he follows the European criterion and tries to encourage the market
1	Afirmó	afirmar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=affirmed
2	que	que	SCONJ	SCONJ	_	1	comp:obj	_	Gloss=that|highlight=red
3	sigue	seguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	comp	_	Gloss=follows|highlight=red
4	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	criterio	criterio	NOUN	NOUN	Gender=Masc|Number=Sing	3	comp:obj	_	Gloss=criterion
6	europeo	europeo	ADJ	ADJ	Gender=Masc|Number=Sing	5	mod	_	Gloss=European
7	y	y	CCONJ	CCONJ	_	8	cc	_	Gloss=and
8	que	que	SCONJ	SCONJ	_	2	conj	_	Gloss=that|highlight=red
9	trata	tratar	VERB	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	comp	_	Gloss=try|highlight=red
10	de	de	ADP	ADP	AdpType=Prep	9	comp:obl	_	Gloss=of
11	incentivar	incentivar	VERB	VERB	VerbForm=Inf	10	comp	_	Gloss=to_incentivize|Subject=SubjRaising
12	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	Gloss=the
13	mercado	mercado	NOUN	NOUN	Gender=Masc|Number=Sing	11	comp:obj	_	Gloss=market
</conll>

<conll>
# lang = French
# text = il faut que tu deviennes script girl.
# text_en = You need to become a script girl.
1	il	il	PRON	_	_	2	subj	_	Gloss=it is
2	faut	falloir	VERB	_	_	0	parataxis:parenth	_	Gloss=necessary
3	que	que	SCONJ	_	_	2	comp:obj	_	Gloss=that|highlight=red
4	tu	tu	PRON	_	_	5	subj	_	Gloss=you
5	deviennes	devenir	VERB	_	_	3	comp	_	Gloss=become|highlight=red
6	script	script	NOUN	_	_	7	compound	_	Gloss=script
7	girl	girl	NOUN	_	_	5	comp:pred	_	Gloss=girl
</conll>



<conll>
# lang = French
# sent_id = ParisStories_2019_experienceFac_83
# text = je trouve que c'est agréable.
# text_en = I think that it's nice.
1	je	moi	PRON	_	_	2	subj	_	Gloss=I
2	trouve	trouver	VERB	_	_	0	root	_	Gloss=think
3	que	que	SCONJ	_	_	2	comp:obj	_	Gloss=that|highlight=red|highlight=red
4	c'	ce	PRON	_	_	5	subj	_	SpaceAfter=No|Gloss=it
5	est	être	AUX	_	_	3	comp	_	Gloss=be|highlight=red|highlight=red
6	agréable	agréable	ADJ	_	_	5	comp:pred	_	SpaceAfter=No|Gloss=nice
</conll>




## Other usage
The `comp` relation (without subrel) is used when one has difficulty deciding between `comp:obj` and `comp:obl`.

In **French**, the `comp` label is frequently used to annotate reflexive pronouns and other pronominal clitics which contribute to the formation of pronominal verbs when it is difficult to determine the role of the pronoun.
In constructions such as *Il s'en sort* (en: *He's doing well*) the pronoun *se* no longer provides the semantic value of an argument of the verb.
However, it fits so well into the typical argument structure that it is hard to recognize that it cannot be de-pronominalized.
For this reason, it is annotated with the `comp` relation.

<conll>
# lang = French
# text = Il s'en sort bien
# text_en = He's doing well
1	Il	il	PRON	_	_	4	subj	_	Gloss=he
2	s'	se	PRON	_	_	4	comp	_	Gloss=himself
3	en	en	PRON	_	_	4	comp	_	Gloss=of|highlight=red
4	sort	sortir	VERB	_	_	0	root	_	Gloss=go_out|highlight=red
5	bien	bien	ADV	_	_	4	mod	_	Gloss=well
</conll>

<conll>
# lang = French
# text = Il se souvient
# text_en = He remembers
1	Il	il	PRON	_	_	3	subj	_	Gloss=he
2	se	se	PRON	_	_	3	comp	_	Gloss=himself|highlight=red
3	souvient	souvenir	VERB	_	_	0	root	_	Gloss=remembers|highlight=red
</conll>

<conll>
# lang = French
# text = Christine en veut à son amie
# text_en = Christine is angry at her friend
1	Christine	Christine	PROPN	_	_	3	subj	_	Gloss=Christine
2	en	en	PRON	_	_	3	comp	_	Gloss=of|highlight=red
3	veut	vouloir	VERB	_	_	0	root	_	Gloss=want|highlight=red
4	à	à	ADP	_	_	3	comp:obl	_	Gloss=to
5	son	son	DET	_	_	6	det	_	Gloss=her
6	amie	ami	NOUN	_	_	4	comp	_	Gloss=friend
</conll>

## Deep syntactic features

### `@pass`

In the case of **passive reflexive constructions**, the reflexive pronoun is attached with `comp` and the deep syntactic feature [`@pass`](guidelines/universal/deprel/deep_features/pass).

<conll>
# lang = French
# text = Il se situe à environ 13 kilomètres au nord-ouest
# text_en = It is situated about 13 kilometers to the north-west
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	subj@pass	_	Gloss=it
2	se	se	PRON	_	Person=3|PronType=Prs	3	comp@pass	_	Gloss=is|highlight=red
3	situe	situer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=situated|highlight=red
4	à	à	ADP	_	_	3	comp:obl	_	Gloss=at
5	environ	environ	ADV	_	_	6	mod	_	Gloss=about
6	13	13	NUM	_	_	7	det	_	Gloss=13
7	kilomètres	kilomètre	NOUN	_	Gender=Masc|Number=Plur	4	comp	_	Gloss=kilometers
8	au	au	ADP	_	_	7	udep	_	Gloss=to_the
9	nord-ouest	nord-ouest	NOUN	_	Gender=Masc|Number=Sing	8	comp	_	Gloss=north-west
</conll>

### `@expl`

We can also have the deep syntactic feature [`@expl`](guidelines/universal/deprel/deep_features/expl) for the label `comp`. 

<conll>
# lang = French
# text = euh, il y a un stade aussi à côté.
1	euh	euh	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	subj@expl	_	_
4	y	y	PRON	_	Person=3|PronType=Prs	5	comp@expl	_	highlight=red
5	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	stade	stade	NOUN	_	Gender=Masc|Number=Sing	5	comp:obj	_	_
8	aussi	aussi	ADV	_	_	5	mod	_	_
9	à	à	ADP	_	_	5	mod	_	_
10	côté	côté	NOUN	_	Gender=Masc|Number=Sing	9	comp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_
</conll>


More information can be found on the French [pronomional verb](@@@../../../language/French/syntax/french_pronominal_verb.md) page or on the page about the annotation of the idiom [*il y a*](@@@../../../language/French/syntax/il_y_a.md).

