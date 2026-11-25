---
title: mod:clf
request: pattern { X -[mod:clf]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Classifier

In SUD, the classifiers is the head of the classifier phrase, because, generally, a numeral cannot directly modify a noun. Moreover sometimes a classifier phrase can occupy the position of a NP.

<conll>
# sent_id = train-s3407
# text = 雨水最少淹浸了40間房屋
# translit = yǔshuǐzuìshǎoyānjìnle40jiānfángwū
# text_en = The rain flooded at least 40 homes
1	雨水	雨水	NOUN	NN	_	3	nubj	_	LTranslit=yǔshuǐ|SpaceAfter=No|Translit=yǔshuǐ|Gloss=rain
2	最少	最少	ADV	RB	_	3	mod	_	LTranslit=zuìshǎo|SpaceAfter=No|Translit=zuìshǎo|Gloss=at_least
3	淹浸	淹浸	VERB	VV	_	0	root	_	LTranslit=yānjìn|SpaceAfter=No|Translit=yānjìn|Gloss=flood
4	了	了	AUX	AS	Aspect=Perf	3	discourse	_	LTranslit=le|SpaceAfter=No|Translit=le|Gloss=PERF
5	40	40	NUM	CD	NumType=Card	6	mod	_	LTranslit=40|SpaceAfter=No|Translit=40|Gloss=40
6	間	間	NOUN	NNB	_	7	mod:clf	_	LTranslit=jiān|SpaceAfter=No|Translit=jiān|Gloss=CLF
7	房屋	房屋	NOUN	NN	_	3	obj	_	LTranslit=fángwū|SpaceAfter=No|Translit=fángwū|Gloss=home
</conll>

SUD `mod:clf` relation corresponds to UD `clf` relation in the reverse direction:

<conll schema="ud">
# sent_id = train-s3407
# text = 雨水最少淹浸了40間房屋
# translit = yǔshuǐzuìshǎoyānjìnle40jiānfángwū
# text_en = The rain flooded at least 40 homes
1	雨水	雨水	NOUN	NN	_	3	nsubj	_	LTranslit=yǔshuǐ|SpaceAfter=No|Translit=yǔshuǐ|Gloss=rain
2	最少	最少	ADV	RB	_	3	advmod	_	LTranslit=zuìshǎo|SpaceAfter=No|Translit=zuìshǎo|Gloss=at_least
3	淹浸	淹浸	VERB	VV	_	0	root	_	LTranslit=yānjìn|SpaceAfter=No|Translit=yānjìn|Gloss=flood
4	了	了	AUX	AS	Aspect=Perf	3	aux	_	LTranslit=le|SpaceAfter=No|Translit=le|Gloss=PERF
5	40	40	NUM	CD	NumType=Card	7	nummod	_	LTranslit=40|SpaceAfter=No|Translit=40|Gloss=40
6	間	間	NOUN	NNB	_	5	clf	_	LTranslit=jiān|SpaceAfter=No|Translit=jiān|Gloss=CLF
7	房屋	房屋	NOUN	NN	_	3	obj	_	LTranslit=fángwū|SpaceAfter=No|Translit=fángwū|Gloss=home
</conll>

