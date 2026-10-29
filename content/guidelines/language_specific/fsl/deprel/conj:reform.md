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

The deprel `conj:reform` is used for dependency relation in which the elements are similar but not identical, the second one is a reformulation of the first. They refer to the same action or the same entity. The reformulation can be used to introduce more modifiers to the entity.

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

In this example, similar signs are used [fly-away] and [FLY], the second as a reformulation of the first one. They refer to the same event.

<conll>
# sent_id = trajet-len-1-signerA_3_split1
# text = [LIGNE] [[CHIFFRE]] [LIGNE] [TRAM] [MONTER-dans-véhicule]
# source_file = ./Trajet_LEN_1.mp4
# text_fr = ligne [chiffre] du tram. Je monte dedans
# text_en = line [number] of the tram. I go sit on it
# speaker_id = A
1	[LIGNE]	[LIGNE]	NOUN	_	_	5	comp:obj	_	AlignBegin=19910|AlignEnd=20365|Gloss=[LINE]
2	[[CHIFFRE]]	[[CHIFFRE]]	NUM	_	_	1	mod	_	AlignBegin=20377|AlignEnd=20615|Gloss=[[NUMBER]]|toBlur=Yes
3	[LIGNE]	[LIGNE]	NOUN	_	_	1	conj:reform	_	AlignBegin=20631|AlignEnd=21107|Gloss=[LINE]
4	[TRAM]	[TRAM]	NOUN	_	_	3	mod	_	AlignBegin=21123|AlignEnd=21660|Gloss=[TRAM]
5	[MONTER-dans-véhicule]	[MONTER]	VERB	_	_	0	root	_	AlignBegin=21672|AlignEnd=22283|Gloss=[SIT-in-vehicule]|NMM=backward-tilt+eye-blink|Obj=ST|ST=tram|STReal=PRF(DH)[ANIMÉ]+PRF(NDH)[tram]|Subj=PRF(DH)[ANIMÉ]
</conll>

In this example, the sign [LINE] is repeated in order to introduce the specification that it is a 'tram line'. 
