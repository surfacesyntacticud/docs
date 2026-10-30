---
title: Gaze
request: pattern { X [Gaze] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Gaze

The feature `Gaze` allows us to describe more precisely non-manual elements that can carry grammatical content. It describes where the gaze is pointing at. It is only used on the token expressed when this gaze was introduced. If the gaze was held, pointing at the same referent on a previous sign, the feature `GazeHeld` is used.

The element `Gaze` can then also be a value for other features. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF. In this way, the value of `Gaze` refers to the use of non-hand articulators (here with the eyes) with no grammatical specification. Then, `Gaze` can be the value for the features `Subj`, `Obj` or `Obl`, associating this form to its grammatical function.

<conll>
# sent_id = vacances-sud_5
# text = [MAMAN] [hep] [appel] PNT[VOUS] [ADORER] [VACANCES] PNT[étape1] PNT[étape2] PNT[étape3] [QUOI] [PRÉFÉRER] [QUOI]
# source_file = ./recit-agnieska.mp4
# text_fr = Maman a demandé à tout le monde : “Pendant les vacances, lequel des 3 lieux avez-vous préféré ?”
# text_en = Mom asked everyone: "During the holidays, which one of the 3 places did you prefer?"
# video_url = https://sharedocs.huma-num.fr/wl/?id=16cdvwTDWBmMIosQqwhaqa0oG4eg1FuU&fmode=open
1	[MAMAN]	[MAMAN]	NOUN	_	_	11	discourse:participant	_	AlignBegin=40019|AlignEnd=40690|Gloss=[MOM]
2	[hep]	[hep]	INTJ	_	_	11	discourse	_	AlignBegin=40718|AlignEnd=40940|Gloss=[hep]
3	[appel]	[appel]	INTJ	_	Number=Plur	11	discourse	_	AlignBegin=41009|AlignEnd=42824|Gloss=[call]|Tgt=Prs2
4	PNT[VOUS]	PNT	PRON	_	Number=Plur|PronType=Prs	11	vocative	_	AlignBegin=42843|AlignEnd=43389|Gloss=PNT[YOU]|NMM=eyebrow-frown|Tgt=Prs2
5	[ADORER]	[ADORER]	VERB	_	_	6	mod	_	AlignBegin=43407|AlignEnd=44222|Gloss=[ADORE]|NMM=eyebrow-frown
6	[VACANCES]	[VACANCES]	NOUN	_	_	11	mod	_	AlignBegin=44241|AlignEnd=45019|Gloss=[HOLIDAYS]|NMM=eyebrow-frown
7	PNT[étape1]	PNT	ADV	_	_	11	dislocated	_	AlignBegin=45046|AlignEnd=45339|Gloss=PNT[stop1]|ISMarker[Top]=Dlxn+NMM|ISRole=Top|NMM=eyebrow-frown|Tgt=PSS3l
8	PNT[étape2]	PNT	ADV	_	_	7	conj:coord	_	AlignBegin=45339|AlignEnd=45574|Gloss=PNT[stop2]|NDHHeld=PNT[étape1]|NMM=eyebrow-frown|Tgt=PSSN
9	PNT[étape3]	PNT	ADV	_	_	8	conj:coord	_	AlignBegin=45574|AlignEnd=45954|Gloss=PNT[stop3]|NDHHeld=PNT[étape1]|NMM=eyebrow-frown|Tgt=PSS3r
10	[QUOI]	[QUOI]	PRON	_	PronType=Int	11	comp:obj	_	AlignBegin=45986|AlignEnd=46412|Exp[lex]=Int|Gloss=[WHAT]|ISMarker[Foc]=Cxn-dbl+NMM|NMM=eyebrow-frown
11	[PRÉFÉRER]	[PRÉFÉRER]	VERB	_	_	0	root	_	AlignBegin=46421|AlignEnd=46917|Gaze=Prs2|Gloss=[PREFER]|NMM=eyebrow-frown|Reported=Yes|Subj=Gaze
12	[QUOI]	[QUOI]	PRON	_	PronType=Int	10	conj:dbl	_	AlignBegin=46935|AlignEnd=47648|Exp[lex]=Int|Gloss=[WHAT]|ISRole=Foc|NMM=forward-tilt+eyebrow-frown+eye-blink
</conll>

In this example, on the second to last sign [PREFER], the `Gaze` points towards the second person, realizing the role of `Subj`. 
