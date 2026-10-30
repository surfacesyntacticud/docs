---
title: Trs
request: pattern { X [Trs] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Torso movement

The feature `Trs` allows us to describe more precisely non-manual elements when they are relevant to the present discourse. `Trs` is often involved in the change of `PT` or role shift. The values of the feature can either be 'Left' or 'Right' indicating the side towards which the torso is moved. 

<conll>
# sent_id = LS-Colin_cheval__11
# text = [VACHE] [s'approcher] [prendre] [bander-patte]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = La vache s'approche de la boite et prend quelque chose. La vache soigne le cheval
# text_en = The cow comes to the chest and takes something. The cow is treating the horse
1	[VACHE]	[VACHE]	NOUN	_	_	2	subj	_	AlignBegin=59355|AlignEnd=60635|Gloss=[COW]|PT=vache|PTReal=mimique|Trs=Right
2	[s'approcher]	[s'approcher]	VERB	_	_	0	root	_	AlignBegin=60635|AlignEnd=61595|Gloss=[get-closer]|PT=vache|PTReal=mimique+deux-pattes|Subj=PT|Tgt=PSS3r[valise]
3	[prendre]	[prendre]	VERB	_	_	2	conj:chaining	_	AlignBegin=61595|AlignEnd=62275|Gloss=[take]|Loc=PSS3r[valise]|PT=vache|PTReal=mimique+deux-pattes|Subj=PT
4	[bander-patte]	[bander-patte]	VERB	_	_	3	conj:chaining	_	AlignBegin=62275|AlignEnd=63195|Gloss=[bandage-leg]|Obj=PRF(NDH)[patte-cheval]|PT=vache|PTReal=mimique|Subj=PT
</conll>

In this example, the first sign is marked with the feature `Trs` to signal the movement of the torso while articulating the sign [COW]. This is here employed because the `PT` change from a horse in the previous sentence, to a cow because compared to the previous sentence to a cow here. 
