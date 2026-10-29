---
title: conj:dbl
request: pattern { X -[conj:dbl]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - deprel
---

The deprel `conj:dbl` is used for dependency relation of cases of doubling. Doubling is the repetition of syntactic constituent. The present cases of doubling concers two identical elements, and the repetitions are not a result of disfluency. It can apply to a single repeated token or a repeated group of tokens, in this case the relation appears on the head of the constituent. In other Sign Languages, the use of doubling is related to questions of information structure and it rather typically signals emphatic or focus-related functions (Meurant 2026). However, this phenomenon is yet rather understudied in LSF.

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

This example illustrates a case of doubling of the interrogative pronoun, potentially as a way to emphasize on the importance of this constituent.
