---
title: Tgt
request: pattern { X [Tgt] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Target

The feature `Tgt` refers to the ending localization in the signing space of a non-static sign. It is closely related with the feature `Src`, which is its starting localization. It is used for description of movement. The source can thus refer to the person/objet in movement or the localization of destination, this element has to be ealier associated with a specific place of the signing space.

Similarly to the feature `Loc` or `Src`, the values of these features are placements in the signing space. The conventions used to describe them are based on the grammar of LSF of Millet (2019): they start with the acronym PSS standing for Pre-Semantized Space, the next character indicated the vertical placement ('3' is the lowest, used for 3rd person reference, then 'L' as a locative PSS and finally 'X' is the highest placement), the next character indicated the horizontal placement (either left 'l' or right 'r'). The acronym 'PSSN' stands for 'neutral PSS', articulated in the middle of the signing space. Two other values are possible, namely 'Prs1' and 'Prs2', when the placement are directly refering to the 1st and 2nd person in the given situation.

The element `Tgt` can then also be a value for other features. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF. In this way, the value of `Tgt` refers to the form of the sign (here its localization) with no semantic or grammatical specification. Then, `Tgt` can be the value for the features `Subj`, `Obj` and `Obl`, associating this form to its grammatical function.

The most common example of the use of the feature `Tgt` is on the pointing gesture (PNT). 

<conll>
# sent_id = Alpha_entretien_etudiant_souvenir__14
# text = [NON] SignedName[Macron] PNT[MOI] [PRÉFÉRER] PNT[LUI]
# source_file = ./Souvenir_JAN_1.mp4
# text_fr = [qui disaient] non pas Macron, je préfère celui-là.
# text_en = they were saying no not Macron, I prefer this one.
1	[NON]	[NON]	ADV	_	_	0	root	_	AlignBegin=62267|AlignEnd=62779|Gloss=[NO]|NMM=eyebrown-frown|Reported=Yes
2	SignedName[Macron]	SignedName	PROPN	_	_	1	mod	_	AlignBegin=62791|AlignEnd=63140|Gloss=SignedName[Macron]|NMM=eyebrown-frown
3	PNT[MOI]	PNT	PRON	_	Number=Sing|PronType=Prs	4	subj	_	AlignBegin=63157|AlignEnd=63651|Gloss=PNT[ME]|Tgt=Prs1
4	[PRÉFÉRER]	[PRÉFÉRER]	VERB	_	_	1	conj:coord	_	AlignBegin=63157|AlignEnd=63651|Gloss=[PREFER]
5	PNT[LUI]	PNT	PRON	_	Number=Sing|PronType=Prs	4	comp:obj	_	AlignBegin=63663|AlignEnd=63884|Gloss=PNT[HIM]|Tgt=PSS3r
</conll>

In this example, we see that the PNT, either [ME] or [HIM] have a `Tgt` feature, respectively with values of 'Prs1' (first person) and PSS3r (pre-semantized space 3, on the right side).  

The use of feature `Tgt` (and `Src`) is extended to directional verbs, i.e. verbs which change their movement and/or orientation to express their arguments, in the grammaticalized signing space.

<conll>
# user_id = lg565
# timestamp = 1793374358884
# sent_id = STK_vacances-sud__27
# text = [TOUS]-[QUATRE] [REGARDER] [OUI] [DIFFÉRENT]
# source_file = ./recit-agnieska.mp4
# text_fr = Nous étions là tous les 4, à écouter les souvenirs de chacun, tous différents.
# text_en = We were all four here, listening to everyone's memories, each different.
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	[TOUS]-[QUATRE]	[TOUS]-[QUATRE]	PRON	_	PronType=Tot	2	subj	_	AlignBegin=153228|AlignEnd=153862|Gloss=[ALL]-[FOUR]|NMM=backward-tilt+eye-blink
2	[REGARDER]	[REGARDER]	VERB	_	_	0	root	_	AlignBegin=153869|AlignEnd=154648|Gloss=[LOOK]|Obj=Tgt|Tgt=Rcp
3	[OUI]	[OUI]	ADV	_	_	4	discourse	_	AlignBegin=154662|AlignEnd=155055|Gloss=[YES]|Reported=Yes
4	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	2	parataxis	_	AlignBegin=155062|AlignEnd=156979|Gloss=[DIFFERENT]|NMM=eye-blink|Rep=3
</conll>

In this example, the sign [LOOK] is marked with the feature `Tgt`, with the value 'Rcp' for 'reciprocal'. In this case, both hands are used with configuration meaning 'gaze' and one hand is repeatedly pointed at the other one and conversely. The element `Tgt` is then reused as a value of `Obj`

