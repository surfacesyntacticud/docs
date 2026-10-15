---
title: discourse:tag
request: pattern { X -[discourse:tag]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
 - spoken
---

# Tag questions

In spoken treebanks, the `discourse:tag` subtype of the `discourse` relation is used for questions tags.

In French, most frequent questions tags are *hein* or *non*.

<conll>
# sent_id = ParisStories_2022_10_frèreHyperDifférent__22
# speaker = L1
# text = pourtant c'était il y a longtemps, hein ?
1	pourtant	pourtant	ADV	_	_	3	mod	_	AlignBegin=59496|AlignEnd=59624
2	c'	ce	PRON	_	PronType=Dem	3	subj	_	AlignBegin=59624|AlignEnd=59752|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=59752|AlignEnd=59880
4	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	6	subj	_	AlignBegin=59880|AlignEnd=60009|InIdiom=Yes|Person[lex]=3
5	y	y	PRON	_	PronType=Prs	6	comp	_	AlignBegin=60009|AlignEnd=60137|InIdiom=Yes|Person[lex]=3
6	a	avoir	VERB	_	ExtPos=ADP|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	mod	_	AlignBegin=60137|AlignEnd=60265|Idiom=Yes
7	longtemps	longtemps	ADV	_	_	6	mod	_	AlignBegin=60265|AlignEnd=60393|SpaceAfter=No|highlight=red
8	,	,	PUNCT	_	_	9	punct	_	AlignBegin=60393|AlignEnd=60393
9	hein	hein	INTJ	_	_	7	discourse:tag	_	AlignBegin=60393|AlignEnd=60521|highlight=red
10	?	?	PUNCT	_	_	3	punct	_	AlignBegin=60521|AlignEnd=60521
</conll>

But a question tag can be a larger phrase like *tu imagines ?*:

<conll>
# sent_id = Rhap_D2007-156
# prosodic_annotation = yes
# speaker = L1
# speaker_id = §LM22
# macrosyntax = ^enfin surtout si elle dit oui  " tu imagines "  //
# text = enfin surtout si elle dit oui, tu imagines ?
1	enfin	enfin	ADV	_	_	5	discourse	_	AlignBegin=252383|AlignEnd=252678
2	surtout	surtout	ADV	_	_	3	mod	_	AlignBegin=252678|AlignEnd=252938
3	si	si	SCONJ	_	_	0	root	_	AlignBegin=252938|AlignEnd=253048
4	elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|PronType=Prs	5	subj	_	AlignBegin=253048|AlignEnd=253128|Person[lex]=3
5	dit	dire	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	3	comp	_	AlignBegin=253128|AlignEnd=253229|Person[ctxt]=3
6	oui	oui	INTJ	_	_	5	comp:obj	_	AlignBegin=253229|AlignEnd=253448|Reported=Yes|SpaceAfter=No|highlight=red
7	,	,	PUNCT	_	_	9	punct	_	AlignBegin=253448|AlignEnd=253448
8	tu	toi	PRON	_	Case=Nom|Emph=No|PronType=Prs	9	subj	_	AlignBegin=253448|AlignEnd=253553|Number[lex]=Sing|Person[lex]=2
9	imagines	imaginer	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	6	discourse:tag	_	AlignBegin=253553|AlignEnd=254091|Person[ctxt]=2|highlight=red
10	?	?	PUNCT	_	_	3	punct	_	AlignBegin=254091|AlignEnd=254091
</conll>



