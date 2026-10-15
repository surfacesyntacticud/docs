---
title: "Reported speech"
request: pattern { X [Reported=Yes] }
scope:
  schema: SUD
  lang: fr
type: doc
status: "DRAFT: to be revised"
---


# Reported speech

Reported speech has a feature `Reported=Yes` on its head.
It is generally the `comp:obj`of a speech verb, such as _dire_ 'to say'.

<conll>
# sent_id = Rhap_D2007-18
# prosodic_annotation = yes
# speaker = L1
# speaker_id = §LM22
# macrosyntax = j'ai dit [ un mois //  ] //
# text = j'ai dit un mois ?
# text_en = I've said one month ?
1	j'	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	2	subj	_	AlignBegin=19618|AlignEnd=19698|Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=19698|AlignEnd=19778
3	dit	dire	VERB	_	Gender=Masc|VerbForm=Part|Voice=Act	2	comp:aux@tense	_	AlignBegin=19778|AlignEnd=19986|Number[ctxt]=Sing|PastPartHasSpokenGender=Yes|Tense[denom]=Past
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	AlignBegin=19986|AlignEnd=20141
5	mois	mois	NOUN	_	_	3	comp:obj	_	AlignBegin=20141|AlignEnd=20491|Gender[lex]=Masc|Number[ctxt]=Sing|Reported=Yes|highlight=red
6	?	?	PUNCT	_	_	2	punct	_	AlignBegin=20491|AlignEnd=20491
</conll>

Reported speech can be introduced by the idomatic preposition _en mode_.


<conll>
# sent_id = ParisStories_2021_rencontreMourinho_40
# text = il était là en mode mais vous êtes sûre madame, euh.
# text_en = he was like are you really sure miss, uh.
1	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	2	subj	_	Person[lex]=3
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	là	là	ADV	_	_	2	comp:pred	_	_
4	en	en	ADP	_	ExtPos=ADP	2	mod	_	Idiom=Yes
5	mode	mode	NOUN	_	_	4	comp	_	Gender[lex]=Masc|InIdiom=Yes|Number[ctxt]=Sing
6	mais	mais	CCONJ	_	_	8	cc	_	_
7	vous	vous	PRON	_	Case=Nom|Emph=No|PronType=Prs	8	subj	_	Number[lex]=Plur|Person[lex]=2|Polite=Yes
8	êtes	être	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	5	comp:obj	_	Reported=Yes|highlight=red
9	sûre	sûr	ADJ	_	_	8	comp:pred	_	Gender[ctxt]=Fem|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|Number[ctxt]=Sing
10	madame	madame	NOUN	_	_	8	vocative	_	Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	euh	euh	INTJ	_	_	8	discourse:filler	_	SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	_

</conll>

The idiom _être là_ (en: _to be here_) can also introduce the reported speech:

<conll>
# sent_id = ParisStories_2021_pireSoireeHorrible_30
# speaker = L1
# text = ah, et moi, je me, j'étais là, mon dieu mais c'est quoi ce gars.
1	ah	ah	INTJ	_	_	10	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	et	et	CCONJ	_	_	10	cc	_	_
4	moi	moi	PRON	_	Emph=Yes|PronType=Prs	10	dislocated:subj	_	Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	je	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	9	reparandum	_	Number[lex]=Sing|Person[lex]=1
7	me	moi	PRON	_	Emph=No|PronType=Prs	6	unk	_	Number[lex]=Sing|Person[lex]=1|Scrap=Yes|SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	j'	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	10	subj	_	Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
10	étais	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
11	là	là	ADV	_	_	10	comp:pred	_	SpaceAfter=No
12	,	,	PUNCT	_	_	10	punct	_	_
13	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	14	det	_	_
14	dieu	dieu	NOUN	_	ExtPos=INTJ	17	discourse	_	Gender[lex]=Masc|Number[ctxt]=Sing
15	mais	mais	CCONJ	_	_	17	cc	_	_
16	c'	ce	PRON	_	PronType=Dem	17	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
17	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	comp:obj	_	Reported=Yes|highlight=red
18	quoi	quoi	PRON	_	PronType=Int	17	comp:pred	_	_
19	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	20	det	_	_
20	gars	gars	NOUN	_	_	17	dislocated:subj	_	Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
21	.	.	PUNCT	_	_	17	punct	_	_
</conll>