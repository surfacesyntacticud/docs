---
title: conj:zoom
request: pattern { X -[conj:zoom]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - deprel
---

The deprel `conj:zoom` is used for dependency relation in which the second element is describing the referent more in details, as if we were zooming on the element/notion.

<conll>
# sent_id = STK_vacances-sud__5
# text = PNT[changement-temporel?] [PASSÉ-PROCHE] [DIMANCHE]-[AVANT] [FAMILLE] [RÉUNIR] [MANGER] [BAVARDER] [ÉCHANGER]
# source_file = ./recit-agnieska.mp4
# text_fr = Dimanche dernier, toute la famille s’est réunie pour prendre un bon repas, bavarder et échanger.
# text_en = Last sunday, all the family gathers to have a good meal, chat and exchange.
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	PNT[changement-temporel?]	PNT	PRON	_	_	5	discourse	_	AlignBegin=31435|AlignEnd=31917|Gloss=PNT[time-change?]|NMM=eyebrow-raise|Tgt=PSSN
2	[PASSÉ-PROCHE]	[PASSÉ-PROCHE]	ADV	_	_	5	mod	_	AlignBegin=31954|AlignEnd=32634|Gloss=[RECENT-PAST]|ISMarker[Top]=Dlxn+NMM|ISRole=Top|NMM=eyebrow-raise
3	[DIMANCHE]-[AVANT]	[DIMANCHE]-[AVANT]	NOUN	_	_	2	conj:zoom	_	AlignBegin=32634|AlignEnd=33472|Gloss=[SUNDAY]-[BEFORE]|NMM=eye-blink
4	[FAMILLE]	[FAMILLE]	NOUN	_	_	5	subj	_	AlignBegin=33532|AlignEnd=34282|Gloss=[FAMILY]
5	[RÉUNIR]	[RÉUNIR]	VERB	_	_	0	root	_	AlignBegin=34338|AlignEnd=35745|Gloss=[GATHER]|NMM=forward-tilt
6	[MANGER]	[MANGER]	VERB	_	_	5	conj:coord	_	AlignBegin=35787|AlignEnd=37657|Exp=Intensité|Gloss=[EAT]
7	[BAVARDER]	[BAVARDER]	VERB	_	_	6	conj:coord	_	AlignBegin=37681|AlignEnd=38449|Gloss=[CHAT]
8	[ÉCHANGER]	[ÉCHANGER]	VERB	_	_	7	conj:coord	_	AlignBegin=38468|AlignEnd=39542|Gloss=[EXCHANGE]|NMM=eyebrow-raise+eye-blink
</conll>

In this example, the deprel `conj:zoom` can be seen between [RECENT-PAST] and [SUNDAY]-[BEFORE], the second one being a more detailed specification of the time frame than presented with the first.
