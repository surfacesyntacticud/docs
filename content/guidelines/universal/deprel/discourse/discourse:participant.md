---
title: discourse:participant
request: pattern { X -[discourse:participant]-> Y }
scope:
  schema: SUD
  lang: 
    - fsl
    - gya
type: doc
tags:
 - deprel
---

The deprel `discourse:participant` is used to attach the reference to the speaker of some reported speech when there is no verb to introduce it.

It is used in Gbaya and in French sign language:

<conll>
# sent_id = GYA_PRD_NARR_T35-C301_023-023
# speaker_id = @SP
# lang = Northwest Gbaya
# sound_url = https://corporan.huma-num.fr/Archives/media/GYA/WAV/GYA_PRD_NARR_T35-C301.WAV
# text = ʔá̰ wàntò hó
# text_fr = Voilà que Wanto fait oh! //
# text_en = And now Wanto (says) ‘Oh!’
1	ʔá̰	ʔá̰	CCONJ	COORD	_	3	cc	_	GE=voilà_que|Gloss=and_now|MGloss=voilà_que|MSeg=ʔá̰|RX=[COORD]|WordAlignmentBegin=82831|WordAlignmentEnd=84054
2	wàntò	wàntò	PROPN	NPR	_	3	discourse:participant	_	GE=[Wàntò]|Gloss=Wàntò|MGloss=Wàntò|MSeg=wàntò|RX=[NPR]|WordAlignmentBegin=84054|WordAlignmentEnd=85277|highlight_dep=red
3	hó	hó	INTERJ	INTERJ	_	0	root	_	GE=oh_non|Gloss=oh_non|MGloss=oh|MSeg=hó|RX=[INTERJ]|WordAlignmentBegin=85277|WordAlignmentEnd=86500
</conll>


<conll>
# sent_id = vacances-sud_27
# text = [hep] [MAMAN] [OUI] [DIFFÉRENT] [DONNER] [DÉCOUVERTE] [DIFFÉRENT] [RICHE] [INTÉRESSANT]
# lang = French sign language
# text_fr = Maman a terminé en disant : “Avec ces endroits différents, les découvertes étaient variées et riches. C’était très intéressant,
# text_en = Mom finished (saying): "With the different places, the discoveries where diverse and riche. It was very interesting,
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&amp;fmode=open
1	[hep]	[hep]	INTJ	_	_	6	discourse	_	AlignBegin=157083|AlignEnd=157550|Gloss=[hep]|NMM=leftward-tilt+eyebrow-raise
2	[MAMAN]	[MAMAN]	NOUN	_	_	6	discourse:participant	_	AlignBegin=157550|AlignEnd=158014|Gloss=[MOM]|highlight_dep=red
3	[OUI]	[OUI]	ADV	_	_	6	discourse	_	AlignBegin=158028|AlignEnd=159214|Gloss=[YES]|NMM=eyebrow-raise
4	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	6	amod	_	AlignBegin=159228|AlignEnd=160186|Gloss=[DIFFERENT]|Rep=2
5	[DONNER]	[DONNER]	VERB	_	_	6	acl	_	AlignBegin=160207|AlignEnd=160862|Gloss=[GIVE]|NMM=eyebrow-raise
6	[DÉCOUVERTE]	[DÉCOUVERTE]	NOUN	_	_	0	root	_	AlignBegin=160897|AlignEnd=161621|Gloss=[DISCOVERY]|NMM=forward-tilt+eyebrow-frown|Reported=Yes
7	[DIFFÉRENT]	[DIFFÉRENT]	ADJ	_	_	6	amod	_	AlignBegin=161641|AlignEnd=162690|Gloss=[DIFFERENT]
8	[RICHE]	[RICHE]	ADJ	_	_	7	conj	_	AlignBegin=162724|AlignEnd=164179|Gloss=[RICH]|NMM=eyebrow-rf
9	[INTÉRESSANT]	[INTÉRESSANT]	ADJ	_	_	7	conj	_	AlignBegin=164207|AlignEnd=164966|Gloss=[INTERESTING]|NMM=head-nod
</conll>