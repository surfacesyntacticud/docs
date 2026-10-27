---
title: Rep
request: pattern { X [Rep] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Repetition

This feature `Rep` refers to the number of time a sign was repeated, if the repetition is not part of the standard realization of this sign. The values of `Rep` range from 2 to 5.

<conllu>
# sent_id = vacances-sud_26
# text = [TOUS]-[QUATRE] [REGARDER] [OUI] [DIFFÉRENT]
# source_file = ./recit-agnieska.mp4
# text_fr = Nous étions là tous les 4, à écouter les souvenirs de chacun, tous différents.
# text_en = We were all four here, listening to everyone's memories, each different.
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	[TOUS]-[QUATRE]	[TOUS]-[QUATRE]	PRON	_	PronType=Tot	2	subj	_	AlignBegin=153228|AlignEnd=153862|Gloss=[ALL]-[FOUR]|NMM=backward-tilt+eye-blink
2	[REGARDER]	[REGARDER]	VERB	_	_	0	root	_	AlignBegin=153869|AlignEnd=154648|Gloss=[LOOK]|Tgt=Rcp
3	[OUI]	[OUI]	ADV	_	_	4	discourse	_	AlignBegin=154662|AlignEnd=155055|Gloss=[YES]|Reported=Yes
4	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	2	parataxis	_	AlignBegin=155062|AlignEnd=156979|Gloss=[DIFFERENT]|NMM=eye-blink|Rep=3
</conllu>

In this example, the sign [DIFFERENT] is repeated 3 times, probably referring to the three different memories told previously.
