---
title: udep
request: pattern { X -[1=udep]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - coordinating-conjunction
 - deprel
---

The `udep` relation is used for complements when one does not wish to or is unable to distinguish between arguments and modifiers. This relationship can notably be used in cases where the complement's relationship with its governor is ambiguous. When there is little debate about the nature of the relationship, the more specific label is preferred.
 
The governor and the dependent of a `udep` relation can have any POS. The `udep` relation is frequently given to the complements of nouns, since it is generally more difficult to distinguish between arguments and modifiers for nouns than it is for verbs.

As shown in the @@@ [correspondences between SUD and UD](../../../../_index.md#correspondences-between-ud-and-sud), the `udep` label is used while automatically converting an [`obl`](https://universaldependencies.org/u/dep/obl.html) label from a UD annotation.
This is because `obl` in UD can correspond to both [`comp:obl`](guidelines/universal/deprel/comp/comp:obj) and [`mod`](guidelines/universal/deprel/mod) in SUD.

<conll>
# lang = English
1	An	a	DET	_	_	2	det	_	_
2	act	act	NOUN	_	_	0	root	_	_
3	of	of	ADP	_	_	2	udep	_	highlight_dep=red
4	creation	creation	NOUN	_	_	3	comp	_	_
</conll>

<conll>
# lang = English
1	She	she	PRON	_	_	2	subj	_	_
2	smiles	smile	VERB	_	_	0	root	_	_
3	at	at	ADP	_	_	2	udep	_	highlight_dep=red
4	this	this	DET	_	_	5	det	_	_
5	discomfiture	discomfiture	NOUN	_	_	3	comp	_	_
</conll>

<conll>
# lang = Spanish
# text = Ficha de Juanjo Ciércolen en Don Balón
# text_en = File of Juan Ciércoles in Don Balón
1	Ficha	ficha	NOUN	_	_	0	root	_	Gloss=file
2	de	de	ADP	_	_	1	udep	_	Gloss=of|highlight_dep=red
3	Juanjo	juanjo	PROPN	_	_	2	comp:obl	_	Gloss=Juanjo
4	Ciércoles	ciércoles	PROPN	_	_	3	flat@name	_	Gloss=Ciércoles
5	en	en	ADP	_	_	1	udep	_	Gloss=in|highlight_dep=red
6	Don	don	PROPN	_	_	5	comp	_	Gloss=Don
7	Balón	balón	PROPN	_	_	6	flat@name	_	Gloss=Balón
</conll>

<conll>
# lang = Haitian Creole
# sent_id = 24__11
# text = Gen 17 misyonè ki moun Etazini ak Kanada ke yon gang te kenbe pou ranson an 2021 pandan yo tap travay pou Christian Aid Ministries ki gen katye jeneral li nan eta Ohio nan sant wès Etazini.
# text_fr = Il y a 17 missionnaires qui sont des américains et canadiens qu'un gang a capturé pour de l'argent en 2021 pendant qu'ils étaient en train de travailler pour Christian Aid Ministrie qui a son quartier général dans l'Etat Ohio dans le centre Ouest des Etats-Unis.
1	Gen	Gen	VERB	_	_	0	root	_	Gloss=Avoir
2	17	17	NUM	_	_	3	det	_	Gloss=17
3	misyonè	misyonè	NOUN	_	_	1	comp:obj	_	Gloss=missionnaire
4	ki	ki	PRON	_	PronType=Rel	5	subj	_	Gloss=qui
5	moun	moun	NOUN	_	_	3	mod@relcl	_	Gloss=personne
6	Etazini	Etazini	PROPN	_	_	5	udep	_	Gloss=États-Unis|highlight_dep=red
7	ak	ak	CCONJ	_	_	8	cc	_	Gloss=et
8	Kanada	Kanada	PROPN	_	_	6	conj:coord	_	Gloss=Kanada
9	ke	ke	PRON	_	PronType=Rel	13	comp:obj	_	Gloss=que
10	yon	yon	DET	_	PronType=Art	11	det	_	Gloss=un
11	gang	gang	NOUN	_	_	13	subj	_	Gloss=gang
12	te	te	AUX	_	Tense=Past	13	aux	_	Gloss=PAST
13	kenbe	kenbe	VERB	_	_	5	mod@relcl	_	Gloss=capturer
14	pou	pou	ADP	_	_	13	udep	_	Gloss=pour|highlight_dep=red
15	ranson	ranson	NOUN	_	_	14	comp	_	Gloss=raison
16	an	an	ADP	_	_	13	udep	_	Gloss=en|highlight_dep=red
17	2021	2021	NUM	_	_	16	comp	_	Gloss=2021
18	pandan	pandan	ADP	_	_	13	mod	_	Gloss=pendant
19	yo	yo	PRON	_	Number=Plur|Person=3|PronType=Prs	22	subj	_	Gloss=3PL
20	t	te	AUX	_	Tense=Past	22	aux	_	Gloss=PAST|SpaceAfter=No
21	ap	ap	AUX	_	Aspect=Prog	22	aux	_	Gloss=PROG
22	travay	travay	VERB	_	_	18	comp	_	Gloss=travailler
23	pou	pou	ADP	_	_	22	udep	_	Gloss=pour|highlight_dep=red
24	Christian	Christian	PROPN	_	_	23	comp	_	Gloss=Christian
25	Aid	Aid	PROPN	_	_	24	flat@name	_	Gloss=Aid
26	Ministries	Ministries	PROPN	_	_	25	flat@name	_	Gloss=Ministries
27	ki	ki	PRON	_	PronType=Rel	28	subj	_	Gloss=qui
28	gen	gen	VERB	_	_	24	mod@relcl	_	Gloss=avoir
29	katye	katye	NOUN	_	_	28	comp:obj	_	Gloss=quartier
30	jeneral	jeneral	ADJ	_	_	29	mod	_	Gloss=général
31	li	li	PRON	_	Number=Sing|Person=3|PronType=Prs	29	udep	_	Gloss=3SG|highlight_dep=red
32	nan	nan	ADP	_	_	29	udep	_	Gloss=dans|highlight_dep=red
33	eta	eta	NOUN	_	_	32	comp	_	Gloss=état
34	Ohio	Ohio	PROPN	_	_	33	flat@name	_	Gloss=Ohio
35	nan	nan	ADP	_	_	33	mod	_	Gloss=dans
36	sant	sant	NOUN	_	_	35	comp	_	Gloss=centre
37	wès	wès	NOUN	_	_	36	mod	_	Gloss=ouest
38	Etazini	Etazini	PROPN	_	_	36	udep	_	Gloss=États-Unis|SpaceAfter=No|highlight_dep=red
39	.	.	PUNCT	_	_	1	punct	_	_
</conll>

