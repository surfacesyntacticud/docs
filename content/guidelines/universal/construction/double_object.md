---
title: "Double object"
request: pattern { X -[comp:obj@R|comp:obj@T]-> Y }
scope:
  schema: SUD
type: construction
---

In some language, the double object construction is annotated with deep features `@R` and `@L`.

<conll>
# lang = Haitian Creole
# sent_id = 01__30
# text = M pa bezwen di n kijanm santi m.
# text_fr = je n'ai pas besoin de vous dire comment je me sens.
# text_en = I don't have to tell you how I feel.
1	M	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	3	subj	_	Gloss=1SG
2	pa	pa	ADV	_	Polarity=Neg	3	mod	_	Gloss=NEG
3	bezwen	bezwen	NOUN	_	_	0	root	_	Gloss=besoin
4	di	di	VERB	_	_	3	comp:obj	_	Gloss=dire
5	n	nou	PRON	_	Number=Plur|Person=2|PronType=Prs	4	comp:obj@R	_	Gloss=1PL|highlight_dep=red
6	kijanm	kijanm	SCONJ	_	_	4	comp:obj@T	_	Gloss=comment|highlight_dep=red
7	santi	santi	NOUN	_	_	6	comp	_	Gloss=sentir
8	m	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	7	udep	_	Gloss=1SG|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_
</conll>

<conll>
# lang = Western Hausa
# sent_id = BC_HAU_Gouffé_2_02_GreenBeans_139-139_split1
# text = yac cêː taː baː shì jìmɓiriː .
# text_en = He said she has given him green beans.
# text_ortho = yac ceè taa baa šì jìmɓiᵲii,
1	ya-	ya	PRON	_	Gender=Masc|Person=3|PronType=ProSubj	2	subj/m	_	Gloss=3Masc|SpaceAfter=No
2	C	kà	AUX	_	Aspect=Perf|Mood=Rel|Number=Sing	0	root	_	Gloss=Perf.Rel.Sing|wordform=yac
3	cêː	cêː	VERB	_	_	2	comp:aux	_	Gloss=say
4	t-	ta	PRON	_	Gender=Fem|Person=3|PronType=ProSubj	5	subj/m	_	Gloss=3Fem|SpaceAfter=No
5	aː	aː	AUX	_	Aspect=Perf|Number=Sing	3	comp:obj@T	_	Gloss=Perf.Sing|wordform=taː
6	baː	baː	VERB	_	_	5	comp:aux	_	Gloss=give
7	shì	shi	PRON	_	Gender=Masc|Person=3	6	comp:obj@R	_	Gloss=3Masc|highlight_dep=red
8	jìmɓiriː	jìmɓiriː	NOUN	_	Gender=Masc	6	comp:obj@T	_	Gloss=green_beans.Masc|highlight_dep=red
9	.	.	PUNCT	_	_	2	punct	_	Gloss=PUNCT
</conll>


In UD, relation `iobj` and `obj` are used. For exmaple:

<conll schema="ud">
# lang = Haitian Creole
# sent_id = 01__30
# text = M pa bezwen di n kijanm santi m.
# text_fr = je n'ai pas besoin de vous dire comment je me sens.
# text_en = I don't have to tell you how I feel.
1	M	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=1SG
2	pa	pa	ADV	_	Polarity=Neg	3	advmod	_	Gloss=NEG
3	bezwen	bezwen	NOUN	_	_	0	root	_	Gloss=besoin
4	di	di	VERB	_	_	3	ccomp	_	Gloss=dire
5	n	nou	PRON	_	Number=Plur|Person=2|PronType=Prs	4	iobj	_	Gloss=1PL|highlight_dep=red
6	kijanm	kijanm	SCONJ	_	_	7	case	_	Gloss=comment
7	santi	santi	NOUN	_	_	4	obj	_	Gloss=sentir|highlight_dep=red
8	m	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nmod	_	Gloss=1SG|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_
</conll>