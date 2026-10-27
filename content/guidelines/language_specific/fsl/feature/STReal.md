---
title: STReal
request: pattern { X [STReal] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Situational Transfer Realisation

The feature `STReal` allows us to provide more detail about the elements used to signal the Situational Transfer (ST).

<conll>
# sent_id = crdo-fsl-cuc022__6_split2
# text = [sauter] [heurter-barrière]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Il galope, saute [et] heurte la barrière
# text_en = It gallops, jumps and hits the fence
1	[sauter]	[sauter]	VERB	_	_	0	root	_	AlignBegin=47195|AlignEnd=47715|Gloss=[jump]|PT=cheval|PTReal=détermination+mimique-effort|ST=cheval-qui-saute|STReal=PRF(DH)[cheval]|Subj=PT
2	[heurter-barrière]	[heurter-barrière]	VERB	_	_	1	conj:chaining	_	AlignBegin=47715|AlignEnd=48675|Gloss=[hit-fence]|Obj=PRF(NDH)[barrière]|PT=cheval|PTReal=détermination+mimique-effort|ST=cheval-qui-heurte-barrière|STReal=PRF(DH)[cheval]+PRF(NDH)[barrière]|Subj=PRF(DH)[cheval]
</conll>

In this example, the ST represents a horse jumping over a fence. In the feature `STReal`, we find the information about the form of this transfer, namely the use of two different proforms. The dominant hand (DH) represents the horse, while non-dominant hand (NDH) represents the fence. If multiple elements are used, they are annotated separated by a plus sign (+). The dash (-) is used when the words used refer to the same element. 
