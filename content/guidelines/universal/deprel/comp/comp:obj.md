---
title: comp:obj
request: pattern { X -[comp:obj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
---

# Object complement
 
The relation `comp:obj` is used for direct object complements.

Direct complements of an adposition or a subordinating conjunction were previously annotated with `comp:obj`, but this is deprecated, the simple relation [`comp`](comp) should be used in this case

`comp:obj` can have the following deep features:
 - [`@agent`](guidelines/universal/deprel/deep_features/agent)
 - [`@lvc`](guidelines/universal/deprel/deep_features/lvc)

### Direct object complements

<conll>
# lang = English
1	Norton	Norton	PROPN	_	_	2	subj	_	_
2	spent	spend	VERB	_	_	0	root	_	_
3	most	most	ADV	_	_	2	comp:obj	_	highlight=red
4	of	of	ADP	_	_	3	comp:obl	_	highlight=red
5	his	his	PRON	_	_	7	udep	_	_
6	early	early	ADJ	_	_	7	mod	_	_
7	life	life	NOUN	_	_	4	comp	_	_
</conll>

<conll>
# lang = French
# text = j'adore ce bar
# text_en = I love this bar
1	j'	I	PRON	_	Number=Sing|Person=1|PronType=Prs	2	subj	_	SpaceAfter=No
2	adore	love	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	highlight=red
3	ce	this	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	bar	bar	NOUN	_	Gender=Masc|Number=Sing	2	comp:obj	_	highlight=red
</conll>

<conll>
# lang = Russian
# text = Я ставлю точку
# text_en = I put a point
1	Я	я	PRON	_	Animacy=Anim|Case=Nom|Number=Sing	2	subj	_	Gloss=I
2	ставлю	ставить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=put|highlight=red
3	точку	точка	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	comp:obj	_	Gloss=point|highlight=red
</conll>

Usually, in order to determine whether an object is direct or not, it suffices to know if it forms a construction with a preposition. If it doesn't, the object is direct. According to different languages, this criterion may be insufficient.

In the following examples we can see direct objects of the Spanish verb *ver*.
With animate objects this verb takes the preposition *a*, however the object is still considered direct and therefore the relation stays `comp:obj`.

<conll>
# lang = Spanish
# text = Veo su foto
# text_en = I see his photo
1	Veo	ver	VERB	_	_	0	root	_	Gloss=I see|highlight=red
2	su	su	DET	_	_	3	det	_	Gloss=his
3	foto	foto	NOUN	_	_	1	comp:obj	_	Gloss=photo|highlight=red
</conll>

<conll>
# lang = Spanish
# text = Veo a Clinton
# text_en = I see Clinton
1	Veo	ver	VERB	_	_	0	root	_	Gloss=I see|highlight=red
2	a	a	ADP	_	_	1	comp:obj	_	highlight=red
3	Clinton	Clinton	PROPN	_	_	2	comp	_	Gloss=Clinton
</conll>

### Complement of an adverb of comparison

Constructions such as: *plus... que* (French), *more... than* (English), *più... di* (Italian), *bardziej... niż* (Polish), *более... чем* (Russian).


<conll>
# lang = English
# text = techniques far more assertive than his predecessors
1	techniques	technique	NOUN	NNS	Number=Plur	0	root	_	_
2	far	far	ADV	RB	Degree=Pos	3	mod	_	_
3	more	more	ADV	RBR	_	4	mod	_	highlight=red
4	assertive	assertive	ADJ	JJ	Degree=Pos	1	mod	_	_
5	than	than	ADP	IN	_	3	comp:obj	_	highlight=red
6	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	mod@poss	_	_
7	predecessors	predecessor	NOUN	NNS	Number=Plur	5	comp	_	_
</conll>

<conll>
# lang = Russian
# text = электроны имеют отклик намного более быстрый, чем атомы
1	электроны	электрон	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	subj	_	_
2	имеют	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	отклик	отклик	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	comp:obj	_	_
4	намного	намного	ADV	_	Degree=Pos	5	mod	_	_
5	более	более	ADV	_	Degree=Cmp	6	mod	_	highlight=red
6	быстрый	быстрый	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	mod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	чем	чем	SCONJ	_	_	5	comp:obj	_	highlight=red
9	атомы	атом	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	8	comp	_	_
</conll>

### Complement in consecutive constructions

Constructions such as: *tellement... que* (French), *so... that* (English), *così... che* (Italian), *tak... że* (Polish), *настолько... что* (Russian).

<conll>
# lang = French
# text_en = so vast that you get lost
1	tellement	tellement	ADV	_	_	2	mod	_	Gloss=so|highlight=red
2	vaste	vaste	ADJ	_	_	0	root	_	Gloss=vast
3	qu'	que	SCONJ	_	_	1	comp:obj	_	Gloss=that|highlight=red
4	on	on	PRON	_	_	7	subj	_	Gloss=one
5	s'	se	PRON	_	_	7	comp	_	_
6	y	y	PRON	_	_	7	mod	_	Gloss=there
7	perd	perd	VERB	_	_	3	comp	_	Gloss=lost
</conll>

<conll>
# lang = Russian
# sent_id = 2007Tele.xml_38
# text = Изображение настолько хорошее, что все забыли о тестировании
# text_en = The image was so good that everyone forgot about testing
1	Изображение	изображение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	subj	_	Gloss=image
2	настолько	настолько	ADV	_	Degree=Pos	3	mod	_	Gloss=so|highlight=red
3	хорошее	хороший	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Gloss=good
4	,	,	PUNCT	_	_	5	punct	_	_
5	что	что	SCONJ	_	_	2	comp:obj	_	Gloss=that|highlight=red
6	все	все	PRON	_	Animacy=Anim|Case=Nom|Number=Plur	7	subj	_	Gloss=everyone
7	забыли	забыть	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	comp	_	Gloss=forgot
8	о	о	ADP	_	_	7	comp:obl	_	Gloss=about
9	тестировании	тестирование	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	8	comp	_	Gloss=testing
</conll>


### Deep subjects of impersonal constructions

Deep subjects of impersonal constructions are annotated with `comp:obj` relation, with the [`@agent`](guidelines/universal/deprel/deep_features/agent) deep feature.

<conll>
# lang = French
# text_en = There exist by the way many different types of cleats.
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	subj@expl	_	Gloss=it
2	existe	exister	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=exists|highlight=red
3	d'	de	ADP	_	_	2	mod	_	Gloss=of
4	ailleurs	ailleurs	ADV	_	_	3	comp	_	Gloss=elsewhere
5	beaucoup	beaucoup	ADV	_	_	2	comp:obj@agent	_	Gloss=many|highlight=red
6	de	de	ADP	_	_	5	comp:obl	_	Gloss=of
7	types	type	NOUN	_	Gender=Masc|Number=Plur	6	comp	_	Gloss=types
8	de	de	ADP	_	_	7	udep	_	Gloss=of
9	crampons	crampon	NOUN	_	Gender=Masc|Number=Plur	8	comp	_	Gloss=cleats
10	différents	différent	ADJ	_	Gender=Masc|Number=Plur	9	mod	_	Gloss=different
</conll>

<conll>
# lang = Russian
# sent_id = uppsalaGrekova_3.xml_179
# text = Прошло много времени, пока я к ней приспособилась
# text_en = It took a lot of time until I got used to her
1	Прошло	пройти	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=passed|highlight=red
2	много	много	ADV	_	Degree=Pos	1	comp:obj@agent	_	Gloss=a lot of|highlight=red
3	времени	время	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	comp:obl	_	Gloss=time
4	,	,	PUNCT	_	_	5	punct	_	_
5	пока	пока	SCONJ	_	_	1	mod	_	Gloss=until
6	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	9	subj	_	Gloss=I
7	к	к	ADP	_	_	9	comp:obl	_	Gloss=to
8	ней	она	PRON	_	Case=Dat|Gender=Fem|Number=Sing|Person=3	7	comp	_	Gloss=her
9	приспособилась	приспособиться	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	5	comp	_	Gloss=got used
</conll>

### Direct Speech

Direct discourse is attached to its governor by the relation `comp:obj`.
The head of the reported phrase has the features [`Reported=Yes`](guidelines/universal/feature/Reported).

<conll>
# lang = French
# text = Ce qui est horrible c'est de se dire je n'en sortirai jamais
# text_en = What is horrible is to think I will never get out
1	Ce	ce	PRON	_	_	6	dislocated	_	Gloss=this
2	qui	qui	PRON	_	_	3	subj	_	Gloss=that
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	mod@relcl	_	Gloss=is
4	horrible	horrible	ADJ	_	Gender=Masc|Number=Sing	3	comp:pred	_	Gloss=horrible
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	subj	_	Gloss=that
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=is
7	de	de	ADP	_	_	6	comp:pred	_	Gloss=to
8	se	se	PRON	_	Person=3|PronType=Prs	9	comp	_	Gloss=yourself|InIdiom=Yes
9	dire	dire	VERB	_	ExtPos=VERB|VerbForm=Inf	7	comp	_	Gloss=say|InIdiom=Yes|highlight=red
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	13	subj	_	Gloss=I
11	n'	ne	ADV	_	Polarity=Neg	13	mod	_	Gloss=not
12	en	en	PRON	_	Person=3|PronType=Prs	13	comp:obj	_	Gloss=of
13	sortirai	sortir	VERB	_	Number=Sing|Person=1	9	comp:obj	_	Gloss=get_out|Reported=Yes|highlight=red
14	jamais	jamais	ADV	_	_	13	mod	_	Gloss=never
</conll>

<conll>
# lang = Naija
# sent_id = ABJ_GWA_02_Market-Food-Church_DG__58
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/ABJ_GWA_02_Market-Food-Church_DG.mp3
# speaker_id = Sp275
# text = eh e say [ you go parboil di banga //] //
# text_en = She said you'll parboil the banga.
# text_ortho = Eh e say you go parboil di banga.
1	eh	eh	INTJ	_	_	3	discourse	_	AlignBegin=84260|AlignEnd=84598|Gloss=eh
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	subj	_	AlignBegin=84598|AlignEnd=84935|Gloss=NOM.SG.3
3	say	say	VERB	_	_	0	root	_	AlignBegin=84935|AlignEnd=85272|Gloss=say|highlight=red
4	[	[	PUNCT	_	_	6	punct	_	AlignBegin=85272|AlignEnd=85272|Gloss=PUNCT
5	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	subj	_	AlignBegin=85272|AlignEnd=85610|Gloss=NOM.2
6	go	go	AUX	_	Aspect=Prosp	3	comp:obj	_	AlignBegin=85610|AlignEnd=85948|Gloss=PROSP|Reported=Yes|highlight=red
7	parboil	parboil	VERB	_	_	6	comp:aux	_	AlignBegin=85948|AlignEnd=86285|Gloss=parboil
8	di	di	DET	_	Definite=Def|PronType=Art	9	det	_	AlignBegin=86285|AlignEnd=86622|Gloss=DEF.ART
9	banga	banga	NOUN	_	_	7	comp:obj	_	AlignBegin=86622|AlignEnd=86960|Gloss=palm_kernel
10	//]	//]	PUNCT	_	_	6	punct	_	AlignBegin=86960|AlignEnd=86960|Gloss=PUNCT
11	//	//	PUNCT	_	_	3	punct	_	AlignBegin=86960|AlignEnd=86960|Gloss=PUNCT
</conll>



