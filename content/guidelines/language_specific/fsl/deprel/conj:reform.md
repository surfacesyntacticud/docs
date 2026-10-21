---
title: conj:reform
request: pattern { X -[conj:reform]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - deprel
---

The deprel `conj:reform` is used for dependency relation in which the elements are similar but not identical, the second one is used as a reformulation.

<conll>
# sent_id = crdo-fsl-cuc022__8
# text = [OISEAU] [s'envoler] [VOLER]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = L'oiseau, voyant la chute, s'envole
# text_en = The bird, seeing the fall, flies away
1	[OISEAU]	[OISEAU]	NOUN	_	_	2	nsubj	_	AlignBegin=51995|AlignEnd=52755|Gloss=[BIRD]
2	[s'envoler]	[s'envoler]	VERB	_	_	0	root	_	AlignBegin=52755|AlignEnd=53555|Gloss=[fly-away]|PT=oiseau|PTReal=deux-ailes|Subj=PT
3	[VOLER]	[VOLER]	VERB	_	_	2	conj:reform	_	AlignBegin=53555|AlignEnd=54155|Gloss=[FLY]|Subj=PRF[oiseau]|Tgt=PSSXr
</conll>
