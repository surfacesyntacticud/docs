---
title: Embedded morph rel
request: |
  pattern { 
    e: X -[!type]-> Y ;   % A relation `e` without "/m"
    m: T$ -[type=m]-> U$; % and a relation `m` with "/m"
    e << m;               % such that `e` is "below" `m`
  }
  % Note: the notation with '$' in "T$" and "U$" means 
  % that the two new nodes can be identical to X and/or Y
  % If we write m: T -[type=m]-> U, many examples are lost.
scope:
  schema: mSUD
level: error
type: valid
---

Morph-based relations should be embedded.
It is not possible to have a "morph-based" relation (with `/m`) under non-morph based relation.

> [!info]
> See doc: https://grew.fr/doc/request/#injectivity-in-nodes-matching for explanation about `$` notation
