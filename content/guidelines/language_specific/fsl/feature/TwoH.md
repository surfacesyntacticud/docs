---
title: TwoH
request: pattern { X [TwoH] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Two Hands

This feature `TwoH` refers to an articulation of the sign with two hands, when the standard realization of this sign is one handed. The only possible value for this feature is 'Yes'. 

<conll>
# sent_id = vacances-sud_14
# text = PNT[là] [QUOI] [MER] [NON] [à-l'avant] PNT-SURFACE[derrière] [FORÊT] PNT[là] [RIVIÈRE-petite-sinueuse]
# source_file = ./recit-agnieska.mp4
# text_fr = dans les terres, la forêt avec la petite rivière sinueuse
# text_en = inland, the forest with a small winding river
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	PNT[là]	PNT	ADV	_	_	3	subj	_	AlignBegin=97161|AlignEnd=97791|Gloss=PNT[here]|NMM=eyebrow-raise+eye-blink|Tgt=PSSN|TwoH=Yes
2	[QUOI]	[QUOI]	PRON	_	PronType=Int	3	mod	_	AlignBegin=97791|AlignEnd=98926|Exp[lex]=Int|Focus=Yes|Gloss=[WHAT]|ISMarker[Foc]=Cxn-fq|NMM=backward-tilt
3	[MER]	[MER]	NOUN	_	_	0	root	_	AlignBegin=98926|AlignEnd=99826|Exp=Int|Gloss=[SEA]
4	[NON]	[NON]	ADV	_	_	3	mod	_	AlignBegin=99826|AlignEnd=100096|Exp[lex]=Neg|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel|NDHHeld=[MER]|NMM=eyebrow-raise
5	[à-l'avant]	[à-l'avant]	NOUN	_	_	6	mod	_	AlignBegin=100100|AlignEnd=100513|Gloss=[at-the-front]|Loc=PSSN
6	PNT-SURFACE[derrière]	PNT-SURFACE	ADV	_	_	3	conj:coord	_	AlignBegin=100522|AlignEnd=101504|Gloss=PNT-SURFACE[behind]|ISRole=Foc+CFoc|Loc=PSS1|NDHHeld=[à-l'avant]|NMM=eyebrow-frown+eye-blink
7	[FORÊT]	[FORÊT]	NOUN	_	_	6	mod	_	AlignBegin=101509|AlignEnd=103165|Gloss=[FOREST]|NMM=eyebrow-rf
8	PNT[là]	PNT	ADV	_	_	6	conj:coord	_	AlignBegin=103174|AlignEnd=103439|Gloss=PNT[here]|NMM=eyebrow-raise|Tgt=PSS1
9	[RIVIÈRE-petite-sinueuse]	[RIVIÈRE]	NOUN	_	_	8	mod	_	AlignBegin=103448|AlignEnd=105461|Gloss=[RIVER-small-winding]
</conll>

In this example, the feature `TwoH` specifies that the sign PNT[here] is realized with two hands, pointing to the same point.
