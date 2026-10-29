---
title: conj:chaining
request: pattern { X -[conj:chaining]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
  - deprel
---

The deprel `conj:chaining` is used for dependency relation in chains: the different elements in the chain exhibit the personal transfer `PT` or situation transfer `ST`.

<conll>
# sent_id = crdo-fsl-cuc022__7
# text = [tomber] [DOULEUR] [gésir-sol]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = [Il] tombe. Il a mal, à la jambe.
# text_en = It falls. Its legs is hurt.
1	[tomber]	[tomber]	VERB	_	_	0	root	_	AlignBegin=48675|AlignEnd=49795|Gloss=[fall]|PT=cheval|PTReal=exp-douleur+deux-pattes|Subj=PT
2	[DOULEUR]	[DOULEUR]	NOUN	_	_	1	conj:chaining	_	AlignBegin=49795|AlignEnd=50515|Exp[lex]=Douleur|Gloss=[PAIN]|PT=cheval|PTReal=exp-douleur+deux-pattes
3	[gésir-sol]	[gésir-sol]	VERB	_	_	2	conj:chaining	_	AlignBegin=50515|AlignEnd=51995|Gloss=[lay-on-ground]|PT=cheval|PTReal=exp-douleur+deux-pattes|Subj=PT
</conll>

In this example, along the three verbs, the subject is a realized throught a role shift or personal transfer `PT`, namely 'horse'. This relation is occurring mostly in narration, where `PT` and `ST`, i.e. iconic processes, are common.
