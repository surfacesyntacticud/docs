---
title: "Pebble example: subj"
request: pattern { X -[subj]-> Y }
scope:
  schema: SUD
type: doc
tags:
 - deprel
status: "DRAFT: to be revised"
---

# Subj without extension

The `subj` relation is used for nominal subject:

<conll>
# lang = English
1	A	a	DET	_	_	2	det	_	_
2	man	man	NOUN	_	_	3	subj	_	_
3	walks	walk	VERB	_	_	0	root	_	_
</conll>

