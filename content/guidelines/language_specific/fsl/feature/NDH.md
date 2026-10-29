---
title: NDH
request: pattern { X [NDH] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Non-Dominant Hand

NDH stands for Non-Dominant Hand. This feature is used when a different semantic entity is realized simultaneously by the non-dominant hand ('main dominée' in the French literature). It is only use on the token where this element was introduced. To describe an element encoded previously on the NDH and then held, the feature `NDHHeld` is used. 

<conll>
# user_id = lg565
# timestamp = 1793291827379
# sent_id = crdo-fsl-cuc022_90
# text = [par-là]~ [VERSER] [mettre-SAUCE] [LAISSER] [CHAUFFER] [MÉLANGER] [LAISSER] [JUSQUE] [EAU] [en-surface] [ABSORBER-totalement] [NON] [ABSORBER-un-peu]~
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Lorsque c'est à mi-cuisson, verser le bol de sauce dans la poëlle, laisser chauffer, mélanger et laisser jusqu'à ce que le liquide en surface soit un peu absorbé, il ne faut pas le laisser absorber entièrement.
# text_en = When it's halfway through cooking, pour the bowl of sauce in the pan, let warm up, mix and let it until the liquide on the surface is a little bit absorbed, it shouldn't be absorbed completely.
1	[par-là]~	[par-là]	ADV	_	_	2	mod	_	AlignBegin=1168279|AlignEnd=1168939|Gloss=[over-there]~|Scrap=Yes
2	[VERSER]	[VERSER]	VERB	_	_	0	root	_	AlignBegin=1168939|AlignEnd=1169499|Gloss=[POUR]|Loc=PSS3l[poêle]|NDH=PRF[POÊLE]|NMM=eyebrow-raise+eye-contact|Obl=NDH+Loc|PT=tu-générique|Subj=PT
3	[mettre-SAUCE]	[SAUCE]	VERB	_	_	2	conj:coord	_	AlignBegin=1169499|AlignEnd=1170099|Gloss=[put-SAUCE]
4	[LAISSER]	[LAISSER]	VERB	_	_	3	conj:coord	_	AlignBegin=1170099|AlignEnd=1170499|Gloss=[LET]
5	[CHAUFFER]	[CHAUFFER]	VERB	_	_	4	comp:obj	_	AlignBegin=1170499|AlignEnd=1170744|Gloss=[WARM]
6	[MÉLANGER]	[MÉLANGER]	VERB	_	_	4	conj:coord	_	AlignBegin=1170744|AlignEnd=1171214|Gloss=[MIX]
7	[LAISSER]	[LAISSER]	VERB	_	_	6	conj:coord	_	AlignBegin=1171214|AlignEnd=1171894|Gloss=[LET]
8	[JUSQUE]	[JUSQUE]	ADP	_	_	7	mod	_	AlignBegin=1171894|AlignEnd=1173539|Gloss=[UNTIL]|NMM=forward-tilt+eyebrow-raise
9	[EAU]	[EAU]	NOUN	_	_	11	comp:obj	_	AlignBegin=1173539|AlignEnd=1173739|Gloss=[WATER]
10	[en-surface]	[en-surface]	ADJ	_	_	9	mod	_	AlignBegin=1173739|AlignEnd=1174179|Gloss=[on-surface]
11	[ABSORBER-totalement]	[ABSORBER]	VERB	_	_	12	subj	_	AlignBegin=1174179|AlignEnd=1174899|Gloss=[ABSORB-completely]|Manner=totalement|NMM=eyebrow-raise
12	[NON]	[NON]	ADV	_	_	8	comp	_	AlignBegin=1174899|AlignEnd=1175424|Gloss=[NO]|ISMarker[CFoc]=Cxn-corel|NMM=eyebrow-raise
13	[ABSORBER-un-peu]~	[ABSORBER]	VERB	_	_	12	conj:contr	_	AlignBegin=1175424|AlignEnd=1175979|Gloss=[ABSORB-a-little]|ISRole=CFoc|Manner=pas-totalement|NMM=eyebrow-raise+head-nod|Scrap=Yes
</conll>

In this example, on the sign [POUR], the NDH is the proform PRF[PAN] and it is used as the expression of its oblique argument.

`NDH` can sometimes appear as a value for other features. Indeed the use of `NDH` can be the introduction of referent with which the DH (dominant hand) will interact, it can thus become a value of `Src` or `Tgt`. This use is commonly described as a 'buoy'.

<conll>
# sent_id = crdo-fsl-cuc022_76_split1
# text = PNT[QUATRIEMEMENT] [POIVRE]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Quatrièmement, du poivre.
# text_en = Fourthly, pepper.
1	PNT[QUATRIEMEMENT]	PNT	ADV	_	_	2	mod	_	AlignBegin=1127859|AlignEnd=1128499|Gloss=PNT[FOURTHLY]|NDH=[LISTE]|Tgt=NDH
2	[POIVRE]	[POIVRE]	NOUN	_	_	0	root	_	AlignBegin=1128499|AlignEnd=1129179|Gloss=[PEPPER]|NMM=forward-tilt+eye-contact
</conll>

In this example, the NDH is a list buoy, keeping track of the list. To say 'fourthly', the DH is pointing to the fourth finger of the NDH, meaning 'the fourth element is pepper'. 


