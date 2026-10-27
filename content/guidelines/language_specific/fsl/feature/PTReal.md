---
title: PTReal
request: pattern { X [PTReal] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Personal Transfer Realisation

The feature `PTReal` allows us to provide more detail about the elements used to signal the Personal Transfer (PT or Role Shift). 

<conll>
# sent_id = crdo-fsl-cuc022__2
# text = PRF[cheval] SST[deux-oreilles] PRF[cheval] SST[queue] SST[crinière] PRF[cheval] [CHEVAL]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = un animal se tient là, avec deux oreilles, une queue, une crinière : c'est un cheval.
# text_en = an animal is standing here, with two ears, a tail, a mane: it's a horse.
1	PRF[cheval]	PRF	NOUN	_	_	0	root	_	AlignBegin=12190|AlignEnd=13435|Gloss=PRF[horse]|PT=cheval|PTReal=posture-fière
2	SST[deux-oreilles]	SST	NOUN	_	_	1	conj:coord	_	AlignBegin=13435|AlignEnd=14885|Gloss=SST[two-ears]|PT=cheval|PTReal=posture-fière
3	PRF[cheval]	PRF	PRON	_	PronType=Prs	4	conj:illustrate	_	AlignBegin=14885|AlignEnd=15875|Gloss=PRF[horse]|PT=cheval|PTReal=posture-fière+deux-pattes
4	SST[queue]	SST	NOUN	_	_	2	conj:coord	_	AlignBegin=15875|AlignEnd=17195|Gloss=SST[tail]|PT=cheval|PTReal=posture-fière+NDH-patte
5	SST[crinière]	SST	NOUN	_	_	4	conj:coord	_	AlignBegin=17195|AlignEnd=18355|Gloss=SST[mane]|PT=cheval|PTReal=posture-fière+NDH-patte
6	PRF[cheval]	PRF	PRON	_	PronType=Prs	7	conj:illustrate	_	AlignBegin=18355|AlignEnd=20035|Gloss=PRF[horse]|PT=cheval|PTReal=posture-fière+deux-pattes
7	[CHEVAL]	[CHEVAL]	NOUN	_	_	1	conj:appos	_	AlignBegin=20035|AlignEnd=21235|Gloss=[HORSE]|ISMarker[Foc]=NMM+Dlxn?|ISRole=Foc|NMM=eyebrow-raise+eye-contact|PT=cheval|PTReal=posture-fière
</conll>

In this example, the `PT` throughout the full sentence is the embodiment of a 'horse'. While the PT is stable, its realization changes along the sentence, realized by one or several elements. If multiple elements are used, they are annotated separated by a plus sign (+). The dash (-) is used when the words used refer to the same element. On the second to last sign, the value of `PTReal` means 'the PT is signified by the proud posture (posture-fière) together with the two legs (deux-pattes)'.   
