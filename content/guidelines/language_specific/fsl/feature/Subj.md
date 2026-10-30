---
title: Subj • French Sign Language
request: pattern { X [Subj] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Subject

The feature `Subj` is used, similarly to `Obj`, `Obl` or `Instr`, to indicate the grammatical function of a certain element in a predicate, realized simultaneously with the glossed sign. 

It presents with values such as: `PT`, `Src`, `Gaze` or PRF. The three former are also features in our annotation. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF. In this way, the value of `PT` or `Src` refer to different strategies of LSF regarding iconicity or spatialization with no semantic or grammatical specification. Then, `PT` or `Src` can be the value for the features `Subj` associating this form to its grammatical function.

<conll>
# sent_id = LS-Colin_cheval__4
# text = [VACHE] [MÂCHER] [ruminer]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = une vache rumine.
# text_en = a cow is grazing.
1	[VACHE]	[VACHE]	NOUN	_	_	2	subj	_	AlignBegin=36465|AlignEnd=37715|Gloss=[COW]|PT=vache|PTReal=posture-avachi|Trs=Left
2	[MÂCHER]	[MÂCHER]	VERB	_	_	0	root	_	AlignBegin=37715|AlignEnd=38875|Gloss=[CHEW]|PT=vache|PTReal=posture-avachi+rumination|Subj=PT
3	[ruminer]	[ruminer]	VERB	_	_	2	conj:illustrate	_	AlignBegin=38875|AlignEnd=40755|Gloss=[graze]|PT=vache|PTReal=posture-avachi+rumination+deux-pattes|Subj=PT
</conll>

In this example, the feature `Subj` is used on the last two signs. In this case, the subject role is encode by the use of a PT, which meaning is encoded in the feature `PT` and the realization in `PTReal`.



