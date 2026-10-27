---
title: Src
request: pattern { X [Src] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Source

The feature `Src` refers to the starting localization in the signing space of a non-static sign. It is closely related with the feature `Tgt`, which is its ending localization. It is used for description of movement. The source can thus refer to the person/objet in movement or the localization of origin, this element has to be ealier associated with a specific place of the signing space.

Similarly to the feature `Loc` or `Tgt`, the values of these features are placements in the signing space. The conventions used to describe them are based on the grammar of LSF of Millet (2019): they start with the acronym PSS standing for Pre-Semantized Space, the next character indicated the vertical placement ('3' is the lowest, used for 3rd person reference, then 'L' as a locative PSS and finally 'X' is the highest placement), the next character indicated the horizontal placement (either left 'l' or right 'r'). The acronym 'PSSN' stands for 'neutral PSS', articulated in the middle of the signing space. Two other values are possible, namely 'Prs1' and 'Prs2', when the placement are directly refering to the 1st and 2nd person in the given situation.

The element `Src` can then also be a value for other features. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF. In this way, the value of `Src` refers to the form of the sign (here its localization) with no semantic or grammatical specification. Then, `Src` can be the value for the features `Subj`, `Obj` and `Obl`, associating this form to its grammatical function.

<conll>
# sent_id = crdo-fsl-cuc022_84_85
# text = [PRENDRE] [CHAMPIGNON] [DÉPLACER] [METTRE-dans-poêle] [MÉLANGER] [LAISSER]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Prendre les champignons et les mettre dans la poëlle et bien mélanger. Puis les laisser.
# text_en = Take the mushrooms and put them in the pan et stir well. And leave them.
1	[PRENDRE]	[PRENDRE]	VERB	_	_	0	root	_	AlignBegin=1155024|AlignEnd=1155454|Gloss=[TAKE]|Obj=Src|Src=PSS3r
2	[CHAMPIGNON]	[CHAMPIGNON]	NOUN	_	_	1	comp:obj	_	AlignBegin=1155454|AlignEnd=1155739|Gloss=[MUSHROOM]
3	[DÉPLACER]	[DÉPLACER]	VERB	_	_	1	conj:reform	_	AlignBegin=1155739|AlignEnd=1156339|Gloss=[MOVE]|Obj=Src|Obl=Tgt|Src=PSS3r|Tgt=PSS3l
4	[METTRE-dans-poêle]	[METTRE]	VERB	_	_	3	conj:coord	_	AlignBegin=1156339|AlignEnd=1156739|Gloss=[PUT]|Obl=Tgt|Tgt=PSS3l
5	[MÉLANGER]	[MÉLANGER]	VERB	_	_	4	conj:coord	_	AlignBegin=1156739|AlignEnd=1157859|Gloss=[MIX]|NMM=eye-blink
6	[LAISSER]	[LAISSER]	VERB	_	_	5	conj:coord	_	AlignBegin=1157859|AlignEnd=1158139|Gloss=[LET]|NMM=head-nod
</conll>

In this example, we see the feature `Src` used to describe the initial localization of the movement for the signs [TAKE] and [MOVE]. It is further specified that `Src` signals the `Obj`, as this part of the signing space was previously assigned the referent [MUSHROOM] (a piece of information which is also repeated with the second sign).

The use of feature `Src` (and `Tgt`) is extended to directional verbs, i.e. verbs which change their movement and/or orientation to express their arguments, in the grammaticalized signing space.

<conll>
# sent_id = trajet-len-1-signerB_2_split2
# text = PNT[TOI] [TRAJET] [POUVOIR] [EXPLIQUER] [PRÉCIS]
# source_file = ./Trajet_LEN_1.mp4
# text_fr = Tu peux m’expliquer ton trajet précisément ?
# text_en = Can you explain me precisely your route?
# speaker_id = B
1	PNT[TOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	mod	_	AlignBegin=9099|AlignEnd=9344|Gloss=PNT[YOU]|Tgt=Prs2
2	[TRAJET]	[TRAJET]	NOUN	_	_	4	comp:obj	_	AlignBegin=9358|AlignEnd=10033|Gloss=[ROUTE]
3	[POUVOIR]	[POUVOIR]	VERB	_	_	0	root	_	AlignBegin=10047|AlignEnd=10467|Gloss=[CAN]
4	[EXPLIQUER]	[EXPLIQUER]	VERB	_	_	3	comp:obj	_	AlignBegin=10476|AlignEnd=10939|Gloss=[EXPLAIN]|Obj=Tgt|Src=Prs2|Subj=Src|Tgt=Prs1
5	[PRÉCIS]	[PRÉCIS]	ADJ	_	_	4	mod	_	AlignBegin=10953|AlignEnd=11425|Gloss=[PRECISE]
</conll>

In this example, we can see the directional verb [EXPLAIN]. The articulation of the verb from 2nd person to 1st person presents the arguments of the verb and their functions, respectively `Subj` and `Obj`, thus meaning 'you explain to me'.
