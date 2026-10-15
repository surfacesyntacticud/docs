---
title: Contextual features
request: pattern { X [Gender__lex]|[Number__ctxt] }
scope:
  schema: SUD
type: doc
tags:
  - feature
---

# Contextual features

Since version 2.18, a system of contextual features has been introduced for some morphosyntactic features that are not marked on a word but can be deduced from the context.  

> [!note] Related publication:
> [Status of morphosyntactic features Illustration with written and spoken French UD treebanks](https://aclanthology.org/2025.tlt-1.18/) (Kahane et al., TLT-SyntaxFest 2025)

The following lexical features are used (in French treebanks only for now):

 - `Gender[ctxt]`
 - `Number[ctxt]`

In French, many adjectives do not mark the gender (_autre_, _utile_, … as well as _noir_, _joli_, … in Spoken French). In Spoken French, most adjectives and nouns do not mark the number (_un petit chat_ vs _des petits chats_, both pronounced /pǝtiʃa/). Using `Gender[ctxt]` and `Number[ctxt]` to keep the information and to have a better parallelism between written and spoken data. It is also useful for the maintenance, to be sure that `Gender` and `Number` have not been forgotten.

> [!note]
> These lexical feature are not kept in conversion to UD. `Gender[ctxt]=Fem`is replaced in UD by `Gender=Fem` and `Exponence[Gender]=Absent`.
>
> See also [UD issue 985](https://github.com/UniversalDependencies/docs/issues/985).
