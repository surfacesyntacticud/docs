---
title: Obl
request: pattern { X [Obl] }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---


# Oblique

The feature `Obl` is used, similarly to `Subj`, `Obj` or `Instr`, to indicate the grammatical function of a certain element in a predicate, realized simultaneously with the glossed sign. In our annotation, the relation `comp:obl` or the feature `Obl` are used for a complement that would be replace by the interrogative pronoun [WHERE].

It presents with values such as: `Src`, `Tgt`, `Loc`. These values are also features in our annotation. This annotation choice (using the same elements as features and as values) allows us to describe independently forms and functions since glossing in written French challenges our ability to represent accurately LSF. In this way, the value of `Src` or `Tgt` refer to the strategie of LSF regarding spatialization with no semantic or grammatical specification. Then, `Src` or `Tgt` can be the value for the features `Obl` associating this form to its grammatical function.

<conll>
# user_id = lg565
# timestamp = 1793117316939
# sent_id = LS-Colin_champignon__24
# text = [COUPER] [prendre-POÊLE] [verser] [forme-arrondie/saladier] [verser-dans-saladier]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Eteindre le feu et verser le contenu de la poêle dans un saladier.
# text_en = Turn off the burner and pour the content in the pan in a bowl.
1	[COUPER]	[COUPER]	VERB	_	_	0	root	_	AlignBegin=1175979|AlignEnd=1176779|Gloss=[CUT]
2	[prendre-POÊLE]	[POÊLE]	VERB	_	_	1	conj:coord	_	AlignBegin=1176779|AlignEnd=1177259|Gloss=[take-PAN]
3	[verser]	[verser]	VERB	_	_	2	conj:coord	_	AlignBegin=1177259|AlignEnd=1177939|DHHeld=PRF[POÊLE]|Gloss=[pour]|NDH=PRF[contenant]|NMM=eyebrow-raise+head-nod|Obj=DHHeld|Obl=NDH
4	[forme-arrondie/saladier]	[forme-arrondie/saladier]	NOUN	_	_	3	comp:obl	_	AlignBegin=1177939|AlignEnd=1178499|Gloss=[round-shape/bowl]|NMM=eye-blink
5	[verser-dans-saladier]	[verser-dans-saladier]	VERB	_	_	3	conj:dbl	_	AlignBegin=1178499|AlignEnd=1179219|Gloss=[pour-in-bowl]|NDHHeld=[saladier]|NMM=head-nod+eye-blink
</conll>

In this example, the feature `Obl` is present on the sign [pour], meaning that the 'proform' shaped as a container is the place where the content of the pan has to be poured. 
