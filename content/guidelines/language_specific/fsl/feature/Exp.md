---
title: Exp
request: pattern { X [Exp] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Facial expression

The feature `Exp` is used to better describe the use of non-manual articulators, together with the signs. The value of `Exp` is usually a sentence type (as 'Int' for interrogative, 'Neg' for negative polarity...), an emotion or a gradation (as with the value 'Intensity'). This feature is used only when the facial expression is not required from the sign itself, i.e. it is not lexicalized. Otherwise, the feature `Exp[lex]` is used.

<conll>
# sent_id = STK_vacances-sud__17
# text = PNT[là] [NAGER] [AGRÉABLE]
# source_file = ./recit-agnieska.mp4
# text_fr = Nager dans la rivière, qu’est-ce que c’était agréable,
# text_en = Swimming in the river, how nice
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	PNT[là]	PNT	ADV	_	_	2	mod	_	AlignBegin=108687|AlignEnd=109322|Gloss=PNT[here]|ISMarker[Top]=NMM|ISRole=Top|NMM=eyebrow-raise+eye-blink|Tgt=PSSN
2	[NAGER]	[NAGER]	NOUN	_	_	3	subj	_	AlignBegin=109352|AlignEnd=111017|Exp=Positif|Gloss=[SWIM]
3	[AGRÉABLE]	[AGRÉABLE]	ADJ	_	_	0	root	_	AlignBegin=111017|AlignEnd=111722|Exp[lex]=Positif|Gloss=[PLEASANT]|NMM=eye-blink
</conll>

In this example, the sign [SWIM] in articulated with a positive facial expression. We can see conversely that the sign [PLEASANT], with the same facial expression, is annotated with the feature `Exp[lex]` because the expression is one of the lexicalized element of the sign.

