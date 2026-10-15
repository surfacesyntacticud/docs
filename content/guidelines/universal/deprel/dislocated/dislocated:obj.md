---
title: dislocated:obj
request: pattern { X -[dislocated:obj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Dislocated object

The `dislocated:obj` relation is used between a dislocated object and its head.

<conll>
# sent_id = ParisStories_2020_sortiesAdolescence_21
# text = ah, vous la connaissez tous cette euh, cette histoire.
1	ah	ah	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	vous	vous	PRON	_	Case=Nom|Emph=No|PronType=Prs	5	subj	_	Number[lex]=Plur|Person[lex]=2|Polite=Unknown
4	la	lui	PRON	_	Case=Acc|Emph=No|Gender=Fem|Number=Sing|PronType=Prs	5	comp:obj	_	Person[lex]=3
5	connaissez	connaître	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
6	tous	tous	PRON	_	Gender=Masc|PronType=Ind	5	mod	_	Number[lex]=Plur|Person[lex]=3
7	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	10	reparandum	_	HasSpokenGender=OnlySingExceptWithLiaison
8	euh	euh	INTJ	_	_	7	discourse:filler	_	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	cette	ce	DET	_	Number=Sing|PronType=Dem	11	det	_	Gender[ctxt]=Fem|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes
11	histoire	histoire	NOUN	_	_	5	dislocated:obj	_	Gender[lex]=Fem|LiaisonPossibleBefore=Yes|Number[ctxt]=Sing|SpaceAfter=No|highlight=red
12	.	.	PUNCT	_	_	5	punct	_	_
</conll>

<conll>
# sent_id = ParisStories_2020_concoursInstagram_28
# text = non, mais ça, on savait pas au début.
1	non	non	ADV	_	ExtPos=INTJ	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	mais	mais	CCONJ	_	_	7	cc	_	_
4	ça	ça	PRON	_	PronType=Dem	7	dislocated:obj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No|highlight=red
5	,	,	PUNCT	_	_	4	punct	_	_
6	on	on	PRON	_	Case=Nom|Emph=No|PronType=Ind	7	subj	_	Gender[ctxt]=Masc|Number[lex]=Sing|Person[lex]=3
7	savait	savoir	VERB	_	Mood=Ind|Tense=Imp|VerbForm=Fin	0	root	_	Number[ctxt]=Sing|Person[ctxt]=3|highlight=red
8	pas	pas	ADV	_	Polarity=Neg	7	mod	_	_
9	au	au	ADP	_	_	7	comp:obl	_	_
10	début	début	NOUN	_	_	9	comp	_	Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_
</conll>