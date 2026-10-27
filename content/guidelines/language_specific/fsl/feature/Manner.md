---
title: Manner
request: pattern { X [Manner] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Manner

The feature `Manner` allows to describe additional semantic information conveyed simultaneously with a predicative unit about the manner the event takes place. 

<conll>
# user_id = lg565
# timestamp = 1793016292370
# sent_id = crdo-fsl-cuc022_92
# text = [POIVRE] [ENCORE] [COUPER-en-morceaux] [répandre] [FEUILLE] [FLEUR] [répandre]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Mettre encore du poivre, le hacher et le répandre sur la préparation ainsi que les feuilles-fleurs.
# text_en = Put pepper again, chop it and spread it on the preparation as well as the flower-leaves.
1	[POIVRE]	[POIVRE]	NOUN	_	_	3	comp:obj	_	AlignBegin=1179219|AlignEnd=1179659|Gloss=[PEPPER]
2	[ENCORE]	[ENCORE]	ADV	_	_	3	mod	_	AlignBegin=1179659|AlignEnd=1179899|Gloss=[AGAIN]|NMM=forward-tilt+eye-contact
3	[COUPER-en-morceaux]	[COUPER]	VERB	_	_	0	root	_	AlignBegin=1179899|AlignEnd=1180499|Gloss=[CUT-in-pieces]|Instr=PRF(DH)[lame]|Manner=en-morceaux|NMM=leftward-tilt+head-nod+eye-blink
4	[répandre]	[répandre]	VERB	_	_	3	conj:coord	_	AlignBegin=1180499|AlignEnd=1181259|Gloss=[spread]|ISRole=Foc|NMM=eye-blink
5	[FEUILLE]	[FEUILLE]	NOUN	_	_	4	comp:obj	_	AlignBegin=1181259|AlignEnd=1181699|Gloss=[LEAF]|NMM=forward-tilt
6	[FLEUR]	[FLEUR]	NOUN	_	_	5	mod	_	AlignBegin=1181699|AlignEnd=1182059|Gloss=[FLOWER]
7	[répandre]	[répandre]	VERB	_	_	4	conj:dbl	_	AlignBegin=1182059|AlignEnd=1182779|Gloss=[spread]|ISMarker[Foc]=Cxn-dbl|NMM=head-nod+eye-blink
</conll>

In this example, the sign [CUT] is modified to describe more specifically the manner, i.e. 'in pieces'.
