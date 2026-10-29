---
title: PT
request: pattern { X [PT] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Personal Transfer

The feature `PT` allows us to describe better the iconic processes of LSF. This terminology was introduced by Cuxac (2000). The Personal Transfer refers to the embodiment of one of the participant (usually animate) of the event. It is closely related to the notion of Role Shift, used in the broader Sign Language literature. All the body and face are involved to encode the `PT`, these elements are described in the feature `PTReal`. `PT` and `ST` (Situation Transfer) can be used simultenously, for example depicting a situation while embodying one of the character of this situation. The transfers (personal or situational) are usually characterized by the gaze, which is much less directed to the interlocutor.

<conll>
# sent_id = crdo-fsl-cuc022__5
# text = [estimer] [VOULOIR] PNT[MOI] [sauter]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Le cheval observe la barrière : "Moi, je veux sauter par dessus..."
# text_en = The horse observes the fence: "I want to jump over it..."
1	[estimer]	[estimer]	VERB	_	_	0	root	_	AlignBegin=40755|AlignEnd=43595|Gloss=[evaluate]|PT=cheval|PTReal=posture-fière+deux-pattes|Subj=PT
2	[VOULOIR]	[VOULOIR]	VERB	_	_	1	conj:chaining	_	AlignBegin=43595|AlignEnd=43809|Gloss=[WANT]|NMM=eye-blink|PT=cheval|PTReal=posture-fière|Subj=PT
3	PNT[MOI]	PNT	PRON	_	PronType=Prs	2	subj	_	AlignBegin=43809|AlignEnd=44035|Gloss=PNT[ME]|PT=cheval|PTReal=posture-fière|Tgt=Prs1
4	[sauter]	[sauter]	VERB	_	_	2	comp:obj	_	AlignBegin=44035|AlignEnd=45235|Gloss=[jump]|NMM=eye-blink|PT=cheval|PTReal=posture-fière|ST=cheval-qui-saute|STReal=PRF(DH)[cheval]|Subj=PT
</conll>

In this example, the `PT` has the value horse, meaning that the signer is embodying a horse. 

The use of `PT` usually realizes the function of subject. However, the features `PT` and `Subj` are two distinctive features in our annotation. When the `PT` realizes the subject, it becomes then the value of the feature `Subj`. The same annotation choice was conducted for elements such as `Src` and `Tgt`. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF.

However, `Subj` and `PT` don't always coincide. `PT` is the value of `Subj` when the token is a noun, because the noun does not require a subject argument. Furthermore, the `Subj` can be realized in different ways, using rather (or additionnally) a proform (PRF) or encoded as the source of the movement `Src`. 

<conll>
# sent_id = crdo-fsl-cuc022__4
# text = [VACHE] [MÂCHER] [ruminer]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = une vache rumine.
# text_en = a cow is grazing.
1	[VACHE]	[VACHE]	NOUN	_	_	2	subj	_	AlignBegin=36465|AlignEnd=37715|Gloss=[COW]|PT=vache|PTReal=posture-avachi|Trs=Left
2	[MÂCHER]	[MÂCHER]	VERB	_	_	0	root	_	AlignBegin=37715|AlignEnd=38875|Gloss=[CHEW]|PT=vache|PTReal=posture-avachi+rumination|Subj=PT
3	[ruminer]	[ruminer]	VERB	_	_	2	conj:illustrate	_	AlignBegin=38875|AlignEnd=40755|Gloss=[graze]|PT=vache|PTReal=posture-avachi+rumination+deux-pattes|Subj=PT
</conll>

In this example, on the first sign [COW], the signer is already embodying the cow, however this `PT` cannot be considered as its subject argument.

<conll>
# sent_id = crdo-fsl-cuc022__8
# text = [OISEAU] [s'envoler] [VOLER]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = L'oiseau, voyant la chute, s'envole
# text_en = The bird, seeing the fall, flies away
1	[OISEAU]	[OISEAU]	NOUN	_	_	2	subj	_	AlignBegin=51995|AlignEnd=52755|Gloss=[BIRD]
2	[s'envoler]	[s'envoler]	VERB	_	_	0	root	_	AlignBegin=52755|AlignEnd=53555|Gloss=[fly-away]|PT=oiseau|PTReal=deux-ailes|Subj=PT
3	[VOLER]	[VOLER]	VERB	_	_	2	conj:reform	_	AlignBegin=53555|AlignEnd=54155|Gloss=[FLY]|Subj=PRF[oiseau]|Tgt=PSSXr
</conll>

In this example, the `PT` is not realized on the last sign, and the subject argument is rather expressed by a proform (PRF), only with hands and no body engagment.
