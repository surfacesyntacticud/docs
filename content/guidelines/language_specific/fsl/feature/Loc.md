---
title: Loc
request: pattern { X [Loc] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Locus

The feature `Loc` refers to the part of the signing space in which the sign is articulated. Contrarely to `Src` and `Tgt`, it is use for static signs. Using a specific locus to articulate a sign can allow to define a new referent in the signing space or place a sign in relation to a previous referent associated to this same locus (or oppose it to another signed in a different part of the signing space).  

Similarly to the feature `Src` or `Tgt`, the values of these features are placements in the signing space. The conventions used to describe them are based on the grammar of LSF of Millet (2019): they start with the acronym PSS standing for Pre-Semantized Space, the next character indicated the vertical placement (‘3’ is the lowest, used for 3rd person reference, then ‘L’ as a locative PSS and finally ‘X’ is the highest placement), the next character indicated the horizontal placement (either left ‘l’ or right ‘r’). The acronym ‘PSSN’ stands for ‘neutral PSS’, articulated in the middle of the signing space. 

<conll>
# sent_id = Alpha_entretien_etudiant_trajet__7
# text = PNT[MOI] [PROCHE] [DEUX] [MINUTE] [MARCHER] [TRAM]
# source_file = ./Trajet_LEN_1.mp4
# text_fr = À côté, à 2 minutes de marche, il y a le tram,
# text_en = Next by, in a 2 minute walk, there is the tram,
# speaker_id = A
1	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	dislocated	_	AlignBegin=16486|AlignEnd=16871|Gloss=PNT[ME]|Tgt=Prs1
2	[PROCHE]	[PROCHE]	ADJ	_	_	6	mod	_	AlignBegin=16886|AlignEnd=17601|Gloss=[NEAR]|NMM=eyebrow-frown+eye-contact
3	[DEUX]	[DEUX]	NUM	_	_	4	mod	_	AlignBegin=17607|AlignEnd=17829|Gloss=[TWO]|NMM=eyebrow-frown
4	[MINUTE]	[MINUTE]	NOUN	_	_	5	mod	_	AlignBegin=17829|AlignEnd=18171|Gloss=[MINUTE]|NMM=eyebrow-frown+eye-blink
5	[MARCHER]	[MARCHER]	VERB	_	_	6	mod	_	AlignBegin=18177|AlignEnd=18502|Gloss=[WALK]|NMM=rightward-tilt|Tgt=PSSXr
6	[TRAM]	[TRAM]	NOUN	_	_	0	root	_	AlignBegin=18506|AlignEnd=19910|Gloss=[TRAM]|Loc=PSSXr|NMM=eyebrow-raise
</conll>

In this example, we see that the last sign [TRAM] is articulated at the locus PSSXr, i.e. the pre-semantized space X, on the right side. This value corresponds with the one observed in the feature `Tgt` of the previous sign [MARCHER]. The meaning here is spatially represented. Indeed, if only the locus of [TRAM] was changed to the left side (PSSXl), it would be understood as "walking away from the tram".
