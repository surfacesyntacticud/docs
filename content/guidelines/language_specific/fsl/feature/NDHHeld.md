---
title: NDHHeld
request: pattern { X [NDHHeld] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Non-Dominant Hand Held

NDH stands for Non-Dominant Hand. The feature `NDHHeld` allows us to describe more precisely how the sign is articulated. It is used when the non-dominant hand (‘main dominée’ in the French literature) keeps the handshape of a sign previously articulated, while a the dominant hand refers to a different semantic entity, interacting or not with the content from the non-dominant hand. A similar process is possible conversely with a Dominant Hand Held, described as the feature `DHHeld`. This feature is specifying that the element was not introduced in this token but rather held with the same form since before, otherwise the feature `NDH` is used.

<conll>
# sent_id = crdo-fsl-cuc022_91
# text = [COUPER] [prendre-POÊLE] [verser] [forme-arrondie/saladier] [verser-dans-saladier]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Eteindre le feu et verser le contenu de la poêle dans un saladier.
# text_en = Turn off the burner and pour the content in the pan in a bowl.
1	[COUPER]	[COUPER]	VERB	_	_	0	root	_	AlignBegin=1175979|AlignEnd=1176779|Gloss=[CUT]
2	[prendre-POÊLE]	[POÊLE]	VERB	_	_	1	conj:coord	_	AlignBegin=1176779|AlignEnd=1177259|Gloss=[take-PAN]
3	[verser]	[verser]	VERB	_	_	2	conj:coord	_	AlignBegin=1177259|AlignEnd=1177939|DHHeld=PRF[POÊLE]|Gloss=[pour]|NDH=PRF[contenant]|NMM=eyebrow-raise+head-nod|Obj=DHHeld|Obl=NDH
4	[forme-arrondie/saladier]	[forme-arrondie/saladier]	NOUN	_	_	3	comp:obl	_	AlignBegin=1177939|AlignEnd=1178499|Gloss=[round-shape/bowl]|NMM=eye-blink
5	[verser-dans-saladier]	[verser-dans-saladier]	VERB	_	_	3	conj:dbl	_	AlignBegin=1178499|AlignEnd=1179219|Gloss=[pour-in-bowl]|NDHHeld=[saladier]|NMM=head-nod+eye-blink
</conll>

In this example, the second to last sign is articulated with two hands and on the last sign the NDH hold this previous sign, thus the feature `NDHHeld` is used, describing the semantic content, namely [bowl].
