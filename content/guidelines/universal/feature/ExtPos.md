---
title: ExtPos
request: pattern { X [ExtPos] }
scope:
  schema: SUD
type: doc
tags:
  - feature
---

`ExtPos` gives the external POS of a token or a phrase.

`ExtPos` was first introduced for the POS of idioms: _de plus_, _en fait_, _à côté_ are `ExtPos=ADV`, _ainsi que_ is `ExtPos=CCONJ`, _quand même_ is `ExtPos=ADV`, _en tant que_ or _quant à_ are `ExtPos=ADP`, _bien que_ or _alors que_ are `ExtPos=SCONJ`, _de la_ in _je mange de la salade_ is `ExtPos=DET`.

Some words can also have an `ExtPos`: For instance, _face_ in _je suis face à la poste_ has `upos=NOUN`, `ExtPos=ADV`; _cf._ is `upos=X`, `ExtPos=VERB`.

Unfinished words in spoken production are `upos=X` but receives an `ExtPos`: _f~_ is `ExtPos=VERB` in _je f~_ and `ExtPos=NOUN` in _le f~_.

Numerals receive an `ExtPos` features indicating if they are used as cardinals (_two cats_, `ExtPos=DET`), proper names (_the year 2026_, _room 421_, _page 21_, _53 Regent Street_, `ExtPos=PROPN`), or pronouns (_les deux autres_, `ExtPos=PRON`).

Discourse markers are `ExtPos=INTJ`, such as the nouns _bonjour_, _attention_, _merci_, or _genre_ (_on a perdu genre au moins dix minutes_), the adverb _enfin_, or the verb _écoute_, _allez_, or _voilà_.

In the French "ADV de NOUN" construction (_trop de gens_, _plus d'argent_), the adverb which is the head of a noun phrase is `ExtPos=PRON`.

Symbols such as _\%_ or _\$_ are `upos=SYM`, `ExtPos=NOUN` in _20%_ or _3000$_.

Titles are `ExtPos=PROPN`: _Gone with the Wind_, _Le Rouge et le Noir_

Grafts are `ExtPos=NOUN`: _I bought it is called a dowel_, the graft _it is called a dowel_ occupies the position of noun phrase.
