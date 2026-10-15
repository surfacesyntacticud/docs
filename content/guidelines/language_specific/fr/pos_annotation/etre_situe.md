---
request: pattern { X[lemma="être"]; X -[comp:pred]-> Y; Y[upos=VERB] }
scope:
  schema: SUD
  lang: fr
type: doc
status: "DRAFT: to be revised"
---

# `comp:pred` introduced by _être_

For `VERB` that are in relation of `comp:pred` with the `AUX` _être_, we chose this analysis: 

<conll>
# text = Le village est située sur une hauteur, à 5 km environ au sud de Soissons
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	village	village	NOUN	_	Gender=Masc|Number=Sing	3	subj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	située	situer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|Typo=Yes|VerbForm=Part	3	comp:pred	_	CorrectForm=situé|CorrectGender=Masc
5	sur	sur	ADP	_	_	4	comp:obl	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	hauteur	hauteur	NOUN	_	Gender=Fem|Number=Sing	5	comp:obj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	à	à	ADP	_	_	4	comp:obl	_	_
10	5	5	NUM	_	Number=Plur	11	det	_	_
11	km	km	NOUN	_	Gender=Masc|Number=Plur	9	comp:obj	_	_
12	environ	environ	ADV	_	_	11	mod	_	_
13-14	au	_	_	_	_	_	_	_	_
13	à	à	ADP	_	_	11	udep	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	sud	sud	NOUN	_	Gender=Masc|Number=Sing	13	comp:obj	_	_
16	de	de	ADP	_	_	15	udep	_	_
17	Soissons	Soissons	PROPN	_	_	16	comp:obj	_	_
</conll>

> [!info]
> See [#8](https://github.com/surfacesyntacticud/guidelines/issues/8)

