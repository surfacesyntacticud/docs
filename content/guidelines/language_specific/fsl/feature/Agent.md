---
title: Agent
request: pattern { X [Agent] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Agent

The feature `Agent` is used to describe the semantic role in case of passive construction. This feature is used because of the simultaneous articulation of different constituents in Sign Languages. The different arguments of a verb can be encoded simultaneously with the verb itself, we thus us the feature to describe the different arguments encoded.

<conll>
# sent_id = crdo-fsl-cuc022__11
# text = [bander-patte] [rester-sans-bouger]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = [Le cheval se fait soigner par la vache] et il se laisse faire.
# text_en = [The horse is being treated by the cow] and it lets it happen.
1	[bander-patte]	[bander-patte]	VERB	_	Voice=Pass	0	root	_	Agent=PRF(DH)[patte-vache]|AlignBegin=63195|AlignEnd=65355|Exp=Douleur|Gloss=[bandage-leg]|Obj=PRF(NDH)[patte-cheval]|PT=cheval|PTReal=mimique+posture|Subj=PT|Trs=Left
2	[rester-sans-bouger]	[rester-sans-bouger]	VERB	_	_	1	conj:chaining	_	AlignBegin=65355|AlignEnd=66955|Exp=Douleur|Gloss=[remain-still]|PT=cheval|PTReal=mimique+patte|Subj=PT
</conll>

In this example, the feature `Agent` is used on the token [bandage-leg] because the passive voice is used. The `PT` feature, carrying the role of `Subj` is referring to the horse, while the action is realized by the cow, encoded in the feature `Agent` by the proform [cow-leg] with the dominant hand (PRF(DH)[patte-vache]).



