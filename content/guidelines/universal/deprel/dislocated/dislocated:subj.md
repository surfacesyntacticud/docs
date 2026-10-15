---
title: dislocated:subj
request: pattern { X -[dislocated:subj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Dislocated subject

The `dislocated:subj` relation is used between a dislocated subject and its head.

<conll>
# sent_id = ParisStories_2021_maintenantJeSais_6
# text = elles sont belles, ses mains!
1	elles	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Plur|PronType=Prs	2	subj	_	Person[lex]=3
2	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
3	belles	beau	ADJ	_	Gender=Fem	2	comp:pred	_	HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|Number[ctxt]=Plur|SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	ses	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	mains	main	NOUN	_	_	2	dislocated:subj	_	Gender[lex]=Fem|Number[ctxt]=Plur|SpaceAfter=No|highlight=red
7	!	!	PUNCT	_	_	2	punct	_	_
</conll>

<conll>
# sent_id = Rhap_D0009-200
# prosodic_annotation = no
# speaker = L1
# speaker_id = §LM5
# macrosyntax = $- $L1 moi < je travaille ESPERLUETTE //
# text = moi, je travaille…
1	moi	moi	PRON	_	Emph=Yes|PronType=Prs	4	dislocated:subj	_	AlignBegin=304292|AlignEnd=304862|Number[lex]=Sing|Overlap=Rhap_D0009-201|Person[lex]=1|SpaceAfter=No|highlight=red
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=304862|AlignEnd=304292|Overlap=Rhap_D0009-159
3	je	moi	PRON	_	Case=Nom|Emph=No|PronType=Prs	4	subj	_	AlignBegin=304292|AlignEnd=304862|Number[lex]=Sing|Overlap=Rhap_D0009-201|Person[lex]=1
4	travaille	travailler	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=304292|AlignEnd=304862|Overlap=Rhap_D0009-201|Person[ctxt]=1|SpaceAfter=No|highlight=red
5	…	…	PUNCT	_	_	4	punct	_	AlignBegin=304862|AlignEnd=304862|Overlap=Rhap_D0009-159
</conll>