---
title: Obj
request: pattern { X [Obj] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Object

The feature `Obj` is used, similarly to `Subj`, `Obl` or `Instr`, to indicate the grammatical function of a certain element in a predicate, realized simultaneously with the glossed sign. 

It presents with values such as: `Src`, `Tgt`, `Gaze`, `ST` or PRF. The four former are also features in our annotation. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF. In this way, the value of `ST` or `Src` refer to different strategies of LSF regarding iconicity or spatialization with no semantic or grammatical specification. Then, `ST` or `Src` can be the value for the features `Obj` associating this form to its grammatical function.

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

In this example, on the last sign [bandage-leg], we see that the `Obj` is encoded by the use of a 'proform' with the non-dominant hand (NDH). 
