---
title: conj:coord
request: pattern { X -[1=conj, 2=coord]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - coordinating-conjunction
 - deprel
---

The `conj:coord` relation is used to link two phrases occupying the same position and having different referents. (Conjuncts with the same referent are [`conj:appos`](https://pebbles.surfacesyntacticud.org/guidelines/universal/deprel/conj/conj:appos) or [`conj:reform`](https://pebbles.surfacesyntacticud.org/guidelines/universal/deprel/conj/conj:reform).)
Coordinated conjuncts are generally connected with a coordinating conjunction such as *and* and *or*, but they can be only juxtaposed. The conjunction itself is linked to the second element with a [`cc`](https://universaldependencies.org/u/dep/cc.html) relation.

It is analogous to [`conj`](https://universaldependencies.org/u/dep/conj.html) relation in UD.

<conll>
# lang = French
# text = Elle saura conjuguer le changement et la cohésion sociale l' esprit d' initiative et la sécurité la modernité et le bien vivre ensemble
# text_en = She will be able to combine change and social cohesion, a spirit of initiative and security, modernity and living well together.
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	subj	_	Gloss=she
2	saura	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	Gloss=will_know
3	conjuguer	conjuguer	VERB	_	VerbForm=Inf	2	comp:obj	_	Gloss=conjugate|Subject=SubjRaising
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	changement	changement	NOUN	_	Gender=Masc|Number=Sing	3	comp:obj	_	Gloss=change
6	et	et	CCONJ	_	_	8	cc	_	Gloss=and
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	Gloss=the
8	cohésion	cohésion	NOUN	_	Gender=Fem|Number=Sing	5	conj:coord	_	Gloss=cohesion
9	sociale	social	ADJ	_	Gender=Fem|Number=Sing	8	mod	_	Gloss=social
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	Gloss=the
11	esprit	esprit	NOUN	_	Gender=Masc|Number=Sing	8	conj:coord	_	Gloss=spirit
12	d'	de	ADP	_	_	11	udep	_	Gloss=of
13	initiative	initiative	NOUN	_	Gender=Fem|Number=Sing	12	comp	_	Gloss=initiative
14	et	et	CCONJ	_	_	16	cc	_	Gloss=and
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	Gloss=the
16	sécurité	sécurité	NOUN	_	Gender=Fem|Number=Sing	11	conj:coord	_	Gloss=security
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	Gloss=the
18	modernité	modernité	NOUN	_	Gender=Fem|Number=Sing	16	conj:coord	_	Gloss=modernity
19	et	et	CCONJ	_	_	22	cc	_	Gloss=and
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	Gloss=the
21	bien	bien	ADV	_	_	22	mod	_	Gloss=well
22	vivre	vivre	VERB	_	VerbForm=Inf	18	conj:coord	_	Gloss=living
23	ensemble	ensemble	ADV	_	_	22	mod	_	Gloss=together
</conll>

<conll>
# lang = Naija
# sent_id = KAD_22_Chatting-At-The-Restaurant_DG__134
# sound_url = http://www.tal.univ-paris3.fr/trameur/iTrameur-naija/mp3/KAD_22_Chatting-At-The-Restaurant_DG.mp3
# speaker_id = Sp205
# text = I finish < she con post am out for { Instagram |c Facebook |c Whatsapp |c Everywhere } //
# text_en = I finished and she posted it on Instagram, Facebook, Whatsapp, everywhere.
# text_ortho = I finish, she con post am out for Instagram, Facebook, Whatsapp, Everywhere.
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	subj	_	AlignBegin=226776|AlignEnd=227174|Gloss=NOM.SG.1
2	finish	finish	VERB	_	_	5	parataxis:dislocated	_	AlignBegin=227174|AlignEnd=227572|Gloss=finish
3	<	<	PUNCT	_	_	2	punct	_	AlignBegin=227572|AlignEnd=227572|Gloss=PUNCT
4	she	she	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	subj	_	AlignBegin=227572|AlignEnd=227970|Gloss=NOM.F.SG.3
5	con	con	AUX	_	Aspect=Cons	0	root	_	AlignBegin=227970|AlignEnd=228368|Gloss=CONS
6	post	post	VERB	_	_	5	comp:aux	_	AlignBegin=228368|AlignEnd=228766|Gloss=post
7	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	comp:obj	_	AlignBegin=228766|AlignEnd=229164|Gloss=ACC.SG.3
8	out	out	ADP	_	_	6	compound:prt	_	AlignBegin=229164|AlignEnd=229562|Gloss=out
9	for	for	ADP	_	_	6	comp:obl	_	AlignBegin=229562|AlignEnd=229960|Gloss=for
10	{	{	PUNCT	_	_	11	punct	_	AlignBegin=229960|AlignEnd=229960|Gloss=PUNCT
11	Instagram	Instagram	PROPN	_	_	9	comp	_	AlignBegin=229960|AlignEnd=230358|Gloss=Instagram
12	|c	|c	PUNCT	_	_	13	punct	_	AlignBegin=230358|AlignEnd=230358|Gloss=PUNCT
13	Facebook	Facebook	PROPN	_	_	11	conj:coord	_	AlignBegin=230358|AlignEnd=230756|Gloss=Facebook
14	|c	|c	PUNCT	_	_	15	punct	_	AlignBegin=230756|AlignEnd=230756|Gloss=PUNCT
15	Whatsapp	WhatsApp	PROPN	_	_	13	conj:coord	_	AlignBegin=230756|AlignEnd=231154|Gloss=WhatsApp
16	|c	|c	PUNCT	_	_	17	punct	_	AlignBegin=231154|AlignEnd=231154|Gloss=PUNCT
17	Everywhere	everywhere	ADV	_	_	15	conj:coord	_	AlignBegin=231154|AlignEnd=231552|Gloss=everywhere
18	}	}	PUNCT	_	_	11	punct	_	AlignBegin=231552|AlignEnd=231552|Gloss=PUNCT
19	//	//	PUNCT	_	_	5	punct	_	AlignBegin=231552|AlignEnd=231552|Gloss=PUNCT
</conll>

The relation can be used with the deep extension [`emb`](guidelines/deep_features/emb), see [coordination construction page](../../Universal_construction/coordination.md#embedded-coordination).

`conj:coord`in the case of repetition of intensification as in the following example:

<conll>
# lang = French
# timestamp = 1792000125803
# sent_id = ParisStories_2022_7_chienGourmand__69
# text = mais dès qu'il sent de la bouffe, et bah, tout de suite, il accourt, il accourt, il accourt.
# text_en = but as soon as he smells food, well, right away, he runs, runs, runs.
1	mais	mais	CCONJ	_	_	18	cc	_	WordAlignmentBegin=147891|WordAlignmentEnd=148004
2	dès	dès	ADP	_	_	18	mod	_	WordAlignmentBegin=148004|WordAlignmentEnd=148117
3	qu'	que	SCONJ	_	_	2	comp	_	SpaceAfter=No|WordAlignmentBegin=148117|WordAlignmentEnd=148230
4	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	5	subj	_	Person[lex]=3|WordAlignmentBegin=148230|WordAlignmentEnd=148344
5	sent	sentir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	3	comp	_	Person[ctxt]=3|WordAlignmentBegin=148344|WordAlignmentEnd=148457
6	de	de	ADP	_	ExtPos=DET	8	det	_	Idiom=Yes|WordAlignmentBegin=148457|WordAlignmentEnd=148570
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	unk	_	HasSpokenGender=OnlySingExceptWithLiaison|InIdiom=Yes|WordAlignmentBegin=148570|WordAlignmentEnd=148683
8	bouffe	bouffe	NOUN	_	_	5	comp:obj	_	Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No|WordAlignmentBegin=148683|WordAlignmentEnd=148796
9	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=148796|WordAlignmentEnd=148796
10	et	et	CCONJ	_	_	2	cc	_	WordAlignmentBegin=149304|WordAlignmentEnd=149445
11	bah	bah	INTJ	_	_	2	discourse	_	SpaceAfter=No|WordAlignmentBegin=149445|WordAlignmentEnd=149586
12	,	,	PUNCT	_	_	2	punct	_	WordAlignmentBegin=149586|WordAlignmentEnd=149586
13	tout	tout	ADV	_	_	14	mod	_	WordAlignmentBegin=149586|WordAlignmentEnd=149728
14	de	de	ADP	_	_	18	mod	_	WordAlignmentBegin=149728|WordAlignmentEnd=149869
15	suite	suite	NOUN	_	_	14	comp	_	Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No|WordAlignmentBegin=149869|WordAlignmentEnd=150010
16	,	,	PUNCT	_	_	14	punct	_	WordAlignmentBegin=150010|WordAlignmentEnd=150010
17	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	18	subj	_	Person[lex]=3|WordAlignmentBegin=150010|WordAlignmentEnd=150200
18	accourt	accourir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	Person[ctxt]=3|SpaceAfter=No|WordAlignmentBegin=150200|WordAlignmentEnd=150390
19	,	,	PUNCT	_	_	18	punct	_	WordAlignmentBegin=150390|WordAlignmentEnd=150390
20	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	21	subj	_	Person[lex]=3|WordAlignmentBegin=150390|WordAlignmentEnd=150581
21	accourt	accourir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	18	conj:coord	_	Person[ctxt]=3|SpaceAfter=No|WordAlignmentBegin=150581|WordAlignmentEnd=150771
22	,	,	PUNCT	_	_	21	punct	_	WordAlignmentBegin=150771|WordAlignmentEnd=150771
23	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|PronType=Prs	24	subj	_	Person[lex]=3|WordAlignmentBegin=150771|WordAlignmentEnd=150961
24	accourt	accourir	VERB	_	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	21	conj:coord	_	Person[ctxt]=3|SpaceAfter=No|WordAlignmentBegin=150961|WordAlignmentEnd=151151
25	.	.	PUNCT	_	_	18	punct	_	WordAlignmentBegin=151151|WordAlignmentEnd=151151 
</conll>


