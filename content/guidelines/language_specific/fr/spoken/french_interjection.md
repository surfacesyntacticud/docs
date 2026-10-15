---
status: "DRAFT: to be revised"
---

# Interjections and other discourse markers

> [!todo]
> BOUGER cette section dans les INTJ

Pure interjections (such as _ah_, _hein_, _ouais_, _euh_, etc.) are analysed as `INTJ`s. Discourse markers coming from other POS (such as _enfin_, _chouette_, _disons_, etc.), as well as idioms (such as _en fait_, _tu sais_, etc.), keep their original POS but have an additional `ExtPos = INTJ` feature. Except 4 of them which are frequent and are analysed as pure INTJs: _bon_, _ben_, _quoi_, and _tiens_.

<conll>
# lang = fr
# text_en = So it was the price of, I mean, the price of a full course you know. 
# sent_id = ParisStories_2019_voyageItalie_23
# text = donc le prix d'un, enfin ouais c'était, le prix d'un repas en fait hein.
1	donc	donc	ADV	_	_	10	mod	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	prix	prix	NOUN	_	_	10	dislocated:subj	_	Gender[lex]=Masc|Number[ctxt]=Sing
4	d'	de	ADP	_	_	3	udep	_	SpaceAfter=No
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	comp	_	Scrap=Yes|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	enfin	enfin	ADV	_	ExtPos=INTJ	3	discourse	_	_
8	ouais	ouais	INTJ	_	_	3	discourse	_	highlight=red
9	c'	ce	PRON	_	PronType=Dem	10	subj	_	Gender[lex]=Masc|Number[lex]=Sing|Person[lex]=3|SpaceAfter=No
10	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	prix	prix	NOUN	_	_	10	comp:pred	_	Gender[lex]=Masc|Number[ctxt]=Sing
14	d'	de	ADP	_	_	13	udep	_	SpaceAfter=No
15	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	repas	repas	NOUN	_	_	14	comp	_	Gender[lex]=Masc|Number[ctxt]=Sing
17	en	en	ADP	_	ExtPos=ADV	10	discourse	_	Idiom=Yes
18	fait	fait	NOUN	_	_	17	comp	_	Gender[lex]=Masc|InIdiom=Yes|Number[ctxt]=Sing
19	hein	hein	INTJ	_	_	10	discourse	_	SpaceAfter=No|highlight=red
20	.	.	PUNCT	_	_	10	punct	_	_
</conll>

<conll>
# text_en = uh so actually uh you'll see then.
# sent_id = ParisStories_2020_histoireHorreur_18
# text = euh ben en fait juste euh tu verras après.
1	euh	euh	INTJ	_	_	8	discourse:filler	_	highlight=red
2	ben	ben	INTJ	_	_	8	discourse	_	highlight=red
3	en	en	ADP	_	ExtPos=ADV	8	discourse	_	Idiom=Yes
4	fait	fait	NOUN	_	_	3	comp	_	Gender[lex]=Masc|InIdiom=Yes|Number[ctxt]=Sing
5	juste	juste	ADV	_	_	8	mod	_	_
6	euh	euh	INTJ	_	_	5	discourse:filler	_	highlight=red
7	tu	toi	PRON	_	Case=Nom|Emph=No|PronType=Prs	8	subj	_	Number[lex]=Sing|Person[lex]=2
8	verras	voir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	0	root	_	_
9	après	après	ADV	_	_	8	mod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_
</conll>
