---
title: conj:contr
request: pattern { X -[conj:contr]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - deprel
---

The deprel `conj:contr` is used for dependency relation presented in a contrastive relation. It is used in order to focalize an element. This element is preceded by an alternative, which is negated, thus it focuses on the second element, excluding alternatives. The pattern appears to always be ’Alternative-A/Negation/Alternative-B’, to express an contrastive focus on Alternative-B. This suite is, in most cases, uninterrupted by other constituents.

<conll>
# sent_id = vacances-sud_23
# text = [AUSSI] PNT[là-bas-en-bas] [EAU] [SABLE] [non] [ROCHER] [rocher]
# source_file = ./recit-agnieska.mp4
# text_fr = Et dans l’eau, pas de sable mais des rochers,
# text_en = And in the water, not sand but rocks,
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	[AUSSI]	[AUSSI]	ADV	_	_	5	cc	_	AlignBegin=134500|AlignEnd=134960|Gloss=[ALSO]|NMM=eye-blink
2	PNT[là-bas-en-bas]	PNT	ADV	_	_	3	mod	_	AlignBegin=134960|AlignEnd=135278|Gloss=PNT[down-there]|Tgt=PSSN
3	[EAU]	[EAU]	NOUN	_	_	5	mod	_	AlignBegin=135278|AlignEnd=136174|Gloss=[WATER]|NMM=forward-tilt+eyebrow-raise+eye-blink
4	[SABLE]	[SABLE]	NOUN	_	_	5	subj	_	AlignBegin=136187|AlignEnd=136816|Gloss=[SAND]
5	[non]	[non]	ADV	_	_	0	root	_	AlignBegin=136187|AlignEnd=136816|DHHeld=[SABLE]|Exp[lex]=Neg|Gloss=[no]|ISMarker[CFoc]=Cxn-corel+NMM|NDHHeld=[SABLE]|NMM=eyebrow-raise
6	[ROCHER]	[ROCHER]	NOUN	_	_	5	conj:contr	_	AlignBegin=137317|AlignEnd=138026|Gloss=[ROCK]|ISRole=CFoc|NMM=forward-tilt+eyebrow-rf
7	[rocher]	[rocher]	NOUN	_	_	6	conj:illustrate	_	AlignBegin=138035|AlignEnd=139774|Exp=Intensité|Gloss=[rock]|NMM=eye-blink
</conll>

In this example, to focus on [ROCHER], it is first stated 'it is not sand' with the alternative [SAND] and its negation [no].

<conll>
# sent_id = vacances-sud_21
# text = PNT[lieu3] [QUOI] [MER] [MAIS] [PLAGE] [DIFFÉRENT] [CALANQUE] [ROCHER] [rocher]
# source_file = ./recit-agnieska.mp4
# text_fr = Le bord de mer mais pas la plage, les calanques avec les rochers tout autour.
# text_en = The seashore but not the beach, the rocky inlet with the rocks around.
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	PNT[lieu3]	PNT	ADV	_	_	0	root	_	AlignBegin=124939|AlignEnd=125296|Exp=Int|Gloss=PNT[place3]|NDHHeld=[ADORER2]|NMM=forward-tilt+eyebrow-raise|Tgt=PSS3r
2	[QUOI]	[QUOI]	PRON	_	PronType=Int	3	mod	_	AlignBegin=125300|AlignEnd=125913|Exp[lex]=Int|Gloss=[WHAT]|ISMarker[Foc]=Cxn-fq|NDHHeld=[ADORER2]|NMM=eye-blink
3	[MER]	[MER]	NOUN	_	_	1	mod	_	AlignBegin=125913|AlignEnd=127078|Gloss=[SEA]|ISRole=Foc
4	[MAIS]	[MAIS]	CCONJ	_	_	5	cc	_	AlignBegin=127091|AlignEnd=127635|Gloss=[BUT]|NDHHeld=[MER]|NMM=eyebrow-raise
5	[PLAGE]	[PLAGE]	NOUN	_	_	6	subj	_	AlignBegin=127657|AlignEnd=128383|Gloss=[BEACH]
6	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	3	conj:coord	_	AlignBegin=128396|AlignEnd=128987|Gloss=[DIFFERENT]
7	[CALANQUE]	[CALANQUE]	NOUN	_	_	6	conj:contr	_	AlignBegin=129013|AlignEnd=130809|Gloss=[ROCKY-INLET]|ISMarker[CFoc]=Cxn-corel|ISRole=CFoc|NMM=eyebrow-rf|TransfertType=Situation
8	[ROCHER]	[ROCHER]	NOUN	_	_	9	mod	_	AlignBegin=130817|AlignEnd=131152|Gloss=[ROCK]|NMM=eyebrow-rf
9	[rocher]	[rocher]	NOUN	_	_	7	conj:illustrate	_	AlignBegin=131170|AlignEnd=132813|Exp=Intensité|Gloss=[rock]|NMM=eyebrow-rf|TwoH=Yes
</conll>

Furthermore, we can see with this example, that the central ’Negation’ constituent, doesn’t have to be the sign [NO] but can any sign with a negative reading, like here with [DIFFERENT]. Here, the focus in on [ROCKY-INLET], since the alternative of the setting of [BEACH] is excluded.
