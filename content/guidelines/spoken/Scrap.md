---
title: Scrap
request: pattern { X [Scrap=Yes] }
scope:
  schema: SUD
type: doc
tags:
  - feature
---

# `Scrap`

In spoken data, sometimes speakers utter a half-finished construction.
In that case, it may happen that a word cannot be attached to its head, because the speaker decided not to utter it.

<conll>
# lang = French
# sent_id = Rhap_D2008-156
# text = Je lis son le portrait de notre de votre héros
# text_en = I'im reading his the portrayal of our of your hero
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	Gloss=I
2	lis	lire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=read
3	son	son	DET	_	_	4	reparandum	_	Gloss=his
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	portrait	portrait	NOUN	_	Gender=Masc|Number=Sing	2	comp:obj	_	Gloss=portrayal
6	de	de	ADP	_	_	8	reparandum	_	Gloss=of|highlight=red
7	notre	son	DET	_	_	6	comp	_	Gloss=our|Scrap=Yes|highlight=red
8	de	de	ADP	_	_	5	udep	_	Gloss=of
9	votre	son	DET	_	_	10	det	_	Gloss=your
10	héros	héros	NOUN	_	Gender=Masc	8	comp	_	Gloss=hero
</conll>

In this example, the construction *Je lis son le portrait de notre de votre héros* (English: *I’m reading his the portrayal of our of your hero*) causes some issues because the word *notre* cannot be attached to its semantic head *héros* because of the presence of the second *de*.
For these cases, the two words *de* are linked with a [`reparandum`](guidelines/universal/deprel/reparandum) relation and the word *notre* is linked to the first *de* as an incomplete complement (`comp`) with the feature `Scrap=Yes`.
