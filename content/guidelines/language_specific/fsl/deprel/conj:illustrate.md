---
title: conj:illustrate
request: pattern { X -[conj:illustrate]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - deprel
---

The deprel `conj:illustrate` is used for dependency relation when the two elements refer to the same semantic entity and one uses a more iconic process than the other (Sallandre 2001). It contributes to the visual representation of the discourse. This syntactic relation is specific to Sign Languages since they use a visual-gestual modality, leading to a lot of iconic processes. 

<conll>
# user_id = lg565
# timestamp = 1792503066055
# sent_id = vacances-sud_15
# text = [PERSONNE] [PEU] PRF[PERSONNE]
# source_file = ./recit-agnieska.mp4
# text_fr = (et surtout) très peu de monde.
# text_en = (and especially) very little people.
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	[PERSONNE]	[PERSONNE]	NOUN	_	_	2	subj	_	AlignBegin=105470|AlignEnd=105978|Gloss=[PERSON]|NMM=eyebrow-rf
2	[PEU]	[PEU]	ADV	_	_	0	root	_	AlignBegin=105991|AlignEnd=106787|Exp[lex]=Intensité|Gloss=[LITTLE]|NMM=eyebrow-rf
3	PRF[PERSONNE]	PRF	NOUN	_	_	2	conj:illustrate	_	AlignBegin=106791|AlignEnd=108683|Exp=Intensité|Gloss=PRF[PERSON]|NMM=eyebrow-rf|Rep=4|TwoH=Yes
</conll>

In this example, the presence of a little number of people is encoded with two standardized signs [PERSON] [LITTLE], then the last sign constitutes a visual representation of the same meaning, through an iconic process, namely the use of proform.

