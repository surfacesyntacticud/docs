---
title: Lexical features
request: pattern { X [Gender__lex]|[Number__lex]|[Person__lex]|[Tense__lex] }
scope:
  schema: SUD
type: doc
tags:
  - feature
---

# Lexical features

Since version 2.18, a system of lexical features has been introduced to have a more fine-grained annotation of the status of the corresponding features. A lexical feature is an inherent feature associated with a lexeme, as opposed to a true morphosyntactic feature corresponding to an inflection of the morpheme. 

> [!note] Related publication:
> [Status of morphosyntactic features Illustration with written and spoken French UD treebanks](https://aclanthology.org/2025.tlt-1.18/) (Kahane et al., TLT-SyntaxFest 2025)

The following lexical features are used (in French treebanks only for now):

 - `Gender[lex]` for nouns;
 - `Number[lex]` for pronouns such as _moi_;
 - `Person[lex]` for pronouns such as _moi_.

Has been also been considered and could appear:
 - `Tense[lex]` for auxiliaries such as En. _will_, Haitian _pral_, or Fr. _aller_.

Note that a word can have both `Tense` and `Tense[lex]`, such as _vais_ in _je vais rentrer_ (which is `Tense=Pres` and `Tense[lex]=Fut`).

> [!note]
> These lexical feature are not kept in conversion to UD. `Gender[lex]=Fem`is replaced in UD by `Gender=Fem` and `Exponence[Gender]=Inherent`.
>
> Such a conversion would not be possible if a word has both both `Tense` and `Tense[lex]`. In such a case, `Tense[lex]` would be suppressed in UD.
>
> See also [UD issue 985](https://github.com/UniversalDependencies/docs/issues/985).

