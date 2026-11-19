---
title: Subject
request: pattern { X [Subject] }
scope:
  schema: SUD
type: doc
tags:
 - feature
---

The `Subject` feature is specific to SUD.
It is used to annotate the control of infinitive subject.

> [!info]
> See discussion [#29](https://github.com/surfacesyntacticud/guidelines/issues/29) on GitHub.

> [!warning]
> ⚠️ In previous versions of SUD, control were annotated with the deep edge feature `@x`.

## Values

### `Subject=SubjRaising`

<conll>
# lang = French
# sent_id = fr-ud-train_00024
# text = Les experts sont unanimes pour dater ce manuscrit du VIe siècle.
# text_en = Experts are unanimous in dating this manuscript to the 6th century.
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	wordform=les
2	experts	expert	NOUN	_	Number=Plur	3	subj	_	Gender[lex]=Masc
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	unanimes	unanime	ADJ	_	Number=Plur	3	comp:pred	_	Gender[ctxt]=Masc
5	pour	pour	ADP	_	_	3	mod	_	_
6	dater	dater	VERB	_	VerbForm=Inf	5	comp	_	Subject=SubjRaising|highlight=red
7	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	manuscrit	manuscrit	NOUN	_	Number=Sing	6	comp:obj	_	Gender[lex]=Masc
9	du	du	ADP	_	_	8	udep	_	_
10	VIe	VIe	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	11	mod	_	_
11	siècle	siècle	NOUN	_	Number=Sing	9	comp	_	Gender[lex]=Masc|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_
</conll>

### `Subject=ObjRaising` 

<conll>
# lang = French
# sent_id = fr-ud-train_00044
# text = D'un coup de pied, il le fait tomber de la main du prêtre, par terre.
# text_en = With a kick, he knocked it out of the priest’s hand and onto the floor.
1	D'	de	ADP	_	_	9	mod	_	SpaceAfter=No|wordform=d'
2	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	coup	coup	NOUN	_	Number=Sing	1	comp	_	Gender[lex]=Masc
4	de	de	ADP	_	_	3	udep	_	_
5	pied	pied	NOUN	_	Number=Sing	4	comp	_	Gender[lex]=Masc|SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	subj@caus	_	_
8	le	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	comp:obj@agent	_	_
9	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	tomber	tomber	VERB	_	VerbForm=Inf	9	comp:aux@caus	_	Subject=ObjRaising|highlight=red
11	de	de	ADP	_	_	10	comp:obl	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	main	main	NOUN	_	Number=Sing	11	comp	_	Gender[lex]=Fem
14	du	du	ADP	_	_	13	udep	_	_
15	prêtre	prêtre	NOUN	_	Number=Sing	14	comp	_	Gender[lex]=Masc|SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	par	par	ADP	_	_	9	mod	_	_
18	terre	terre	NOUN	_	Number=Sing	17	comp	_	Gender[lex]=Fem|SpaceAfter=No
19	.	.	PUNCT	_	_	9	punct	_	_
</conll>

### `Subject=OblRaising`

<conll>
# lang = French
# sent_id = fr-ud-train_00036
# text = Ce mécanisme peut permettre à la fraude de durer plusieurs années ;
# text_en = This mechanism can allow fraud to continue for several years;
1	Ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	wordform=ce
2	mécanisme	mécanisme	NOUN	_	Number=Sing	3	subj	_	Gender[lex]=Masc
3	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	permettre	permettre	VERB	_	VerbForm=Inf	3	comp:obj	_	Subject=SubjRaising
5	à	à	ADP	_	_	4	comp:obl	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	fraude	fraude	NOUN	_	Number=Sing	5	comp	_	Gender[lex]=Fem
8	de	de	ADP	_	_	4	comp:obj	_	_
9	durer	durer	VERB	_	VerbForm=Inf	8	comp	_	Subject=OblRaising|highlight=red
10	plusieurs	plusieurs	DET	_	Number=Plur|PronType=Ind	11	det	_	_
11	années	année	NOUN	_	Number=Plur	9	comp:obj	_	Gender[lex]=Fem
12	;	;	PUNCT	_	_	3	punct	_	_
</conll>

### `Subject=Generic`

<conll>
# lang = French
# sent_id = fr-ud-train_00237
# text = Dieu (Ned Flanders) leur apprend qu'il est interdit de manger les fruits de l'arbre.
# text_en = God (Ned Flanders) tells them that they must not eat the fruits of the tree.
1	Dieu	Dieu	PROPN	_	_	7	subj	_	Gender[lex]=Unknown
2	(	(	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	Ned	Ned	PROPN	_	_	1	conj:appos	_	Gender[lex]=Unknown
4	Flanders	Flanders	PROPN	_	_	3	flat@name	_	Gender[lex]=Unknown|SpaceAfter=No
5	)	)	PUNCT	_	_	3	punct	_	_
6	leur	lui	PRON	_	Case=Dat|Emph=No|Number=Plur|Person=3|PronType=Prs	7	comp:obl	_	_
7	apprend	apprendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	qu'	que	SCONJ	_	_	7	comp:obj	_	SpaceAfter=No
9	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	subj@expl	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	comp	_	_
11	interdit	interdit	ADJ	_	Gender=Masc|Number=Sing	10	comp:pred	_	_
12	de	de	ADP	_	_	10	comp:obj@agent	_	_
13	manger	manger	VERB	_	VerbForm=Inf	12	comp	_	Subject=Generic|highlight=red
14	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	15	det	_	_
15	fruits	fruit	NOUN	_	Number=Plur	13	comp:obj	_	Gender[lex]=Masc
16	de	de	ADP	_	_	15	udep	_	_
17	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	18	det	_	Gender[ctxt]=Masc|SpaceAfter=No
18	arbre	arbre	NOUN	_	Number=Sing	16	comp	_	Gender[lex]=Masc|SpaceAfter=No
19	.	.	PUNCT	_	_	7	punct	_	_
</conll>

### `Subject=Instantiated`

<conll>
# lang = French
# sent_id = fr-ud-train_00032
# text = Condamné à dix ans, il passe le reste de sa vie en prison.
# text_en = Sentenced to ten years, he spent the rest of his life in prison.
1	Condamné	condamner	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	7	mod	_	Subject=Instantiated|Tense[denom]=Past|highlight=red
2	à	à	ADP	_	_	1	comp:obl	_	_
3	dix	dix	NUM	_	ExtPos=DET	4	det	_	Number[lex]=Plur
4	ans	an	NOUN	_	Number=Plur	2	comp	_	Gender[lex]=Masc|SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	subj	_	_
7	passe	passer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	reste	reste	NOUN	_	Number=Sing	7	comp:obj	_	Gender[lex]=Masc
10	de	de	ADP	_	_	9	udep	_	_
11	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	12	det	_	_
12	vie	vie	NOUN	_	Number=Sing	10	comp	_	Gender[lex]=Fem
13	en	en	ADP	_	_	7	mod	_	_
14	prison	prison	NOUN	_	Number=Sing	13	comp	_	Gender[lex]=Fem|SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	_
</conll>

> [!info]
> Sometimes, the feature `Subject=NoRaising` is used.
> It corresponds to an undespecified annotation covering both `Subject=Generic` or `Subject=Instantiated`.
> You can find this annotation in the treebank [**French-Rhapsodie**](https://universal.grew.fr/?corpus=SUD_French-Rhapsodie@latest) and [**French_ParisStories**](https://universal.grew.fr/?corpus=SUD_French-ParisStories@latest).

<conll>
# lang = French
# sent_id = ParisStories_2022_3_petitDuCentre__5
# text = au début, il voulait pas venir dans la salle pour faire des activités.
# text_en = At first, he didn’t want to come into the room to take part in the activities.
1	au	au	ADP	_	_	5	mod	_	_
2	début	début	NOUN	_	_	1	comp	_	Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	5	subj	_	Person[lex]=3
5	voulait	vouloir	VERB	_	Mood=Ind|Tense=Imp|VerbForm=Fin	0	root	_	Number[ctxt]=Sing|Person[ctxt]=3
6	pas	pas	ADV	_	Polarity=Neg	5	mod	_	_
7	venir	venir	VERB	_	VerbForm=Inf	5	comp:obj	_	Subject=SubjRaising
8	dans	dans	ADP	_	_	7	comp:obl	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	HasSpokenGender=OnlySingExceptWithLiaison
10	salle	salle	NOUN	_	_	8	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing
11	pour	pour	ADP	_	_	7	mod	_	_
12	faire	faire	VERB	_	VerbForm=Inf	11	comp	_	Subject=NoRaising|highligh=red
13	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	14	det	_	LiaisonAfter=Yes
14	activités	activité	NOUN	_	_	12	comp:obj	_	Gender[lex]=Fem|LiaisonPossibleBefore=Yes|Number[ctxt]=Plur|SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_
</conll>
