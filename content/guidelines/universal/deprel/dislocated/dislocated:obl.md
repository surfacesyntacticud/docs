---
title: dislocated:obl
request: pattern { X -[dislocated:obl]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Dislocated oblique

The `dislocated:obl` relation is used between a dislocated oblique and its head.

<conll>
# sent_id = ParisStories_2019_experienceFac_78
# text = enfin moi ça m'apporte euh beaucoup.
1	enfin	enfin	ADV	_	ExtPos=INTJ	5	discourse	_	_
2	moi	moi	PRON	_	Emph=Yes|PronType=Prs	5	dislocated:obl	_	Number[lex]=Sing|Person[lex]=1|highlight=red
3	ça	ça	PRON	_	PronType=Dem	5	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3
4	m'	moi	PRON	_	Case=Dat|Emph=No|PronType=Prs	5	comp:obl	_	Number[lex]=Sing|Person[lex]=1|SpaceAfter=No
5	apporte	apporter	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Number[ctxt]=Sing|Person[ctxt]=3|highlight=red
6	euh	euh	INTJ	_	_	7	discourse:filler	_	_
7	beaucoup	beaucoup	ADV	_	_	5	mod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_
</conll>

<conll>
# sent_id = Rhap_D2007-140
# prosodic_annotation = yes
# speaker = L3
# speaker_id = §LM23
# macrosyntax = $L3 toi < ça t'est déjà arrivé //
# text = toi, ça t'est déjà arrivé ?
1	toi	toi	PRON	_	Emph=Yes|PronType=Prs	5	dislocated:obl	_	AlignBegin=217251|AlignEnd=217366|Number[lex]=Sing|Person[lex]=2|SpaceAfter=No|highlight=red
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=217366|AlignEnd=217366
3	ça	ça	PRON	_	PronType=Dem	5	subj	_	AlignBegin=217366|AlignEnd=217496|Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3
4	t'	toi	PRON	_	Case=Acc|Emph=No|PronType=Prs	7	comp:obj	_	AlignBegin=217496|AlignEnd=217566|Number[lex]=Sing|Person[lex]=2|SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=217566|AlignEnd=217646|highlight=red
6	déjà	déjà	ADV	_	_	5	mod	_	AlignBegin=217646|AlignEnd=217856
7	arrivé	arriver	VERB	_	VerbForm=Part|Voice=Act	5	comp:aux@tense	_	AlignBegin=217856|AlignEnd=218110|Gender[ctxt]=Masc|Number[ctxt]=Sing|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
8	?	?	PUNCT	_	_	5	punct	_	AlignBegin=218110|AlignEnd=218110
</conll>