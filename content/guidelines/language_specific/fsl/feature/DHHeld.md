---
title: DHHeld
request: pattern { X [DHHeld] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Dominant Hand Held

DH stands for Dominant Hand. The feature `DHHeld` allows us to describe more precisely how the sign is articulated. It is used when the dominant hand (‘main dominante’ in the French literature) keeps the handshape of a sign previously articulated, while a the non-dominant hand refers to a different semantic entity, interacting or not with the content from the dominant hand. A similar process is possible conversely with a Non-Dominant Hand Held, described as the feature `NDHHeld`. 

<conll>
# sent_id = crdo-fsl-cuc022__9
# text = [prendre-VALISE] [apporter] PNT[valise] [PHARMACIE] [apporter] [ouvrir]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = [Il va] chercher une valisette de pharmacie, la dépose et l'ouvre.
# text_en = It goes to grab the medecine chest, it drops it off and opens it.
1	[prendre-VALISE]	[VALISE]	VERB	_	_	0	root	_	AlignBegin=54155|AlignEnd=54595|Gloss=[take-CHEST]|Loc=PSSXr|PT=oiseau|Subj=PT
2	[apporter]	[apporter]	VERB	_	_	1	conj:chaining	_	AlignBegin=54595|AlignEnd=55875|Gloss=[bring]|Obj=PRF(DH)[VALISE]|PT=oiseau|Src=PSSXr|Subj=PT|Tgt=PSSN
3	PNT[valise]	PNT	PRON	_	_	2	comp:obj	_	AlignBegin=55875|AlignEnd=56115|DHHeld=PRF[VALISE]|Gloss=PNT[chest]|NMM=eyebrow-raise|PT=oiseau|Tgt=PSSN
4	[PHARMACIE]	[PHARMACIE]	NOUN	_	_	3	mod	_	AlignBegin=56115|AlignEnd=56795|DHHeld=PRF[VALISE]|Gloss=[PHARMACY]|NMM=eyebrow-raise|PT=oiseau
5	[apporter]	[apporter]	VERB	_	_	2	conj:reform	_	AlignBegin=56795|AlignEnd=57435|Gloss=[bring]|Obj=PRF[VALISE]|PT=oiseau|Src=PSSN|Subj=PT|Tgt=PSS3l
6	[ouvrir]	[ouvrir]	VERB	_	_	5	conj:chaining	_	AlignBegin=57435|AlignEnd=59355|Gloss=[open]|Loc=PSS3l|Obj=PRF[VALISE]|PT=oiseau|Subj=PT
</conll>

In this example, the proform for [CHEST], articulated within the sign [bring] is held over the next two signs (PNT[chest] [PHARMACY]), serving as a comment to describe the type of chest present here. 
