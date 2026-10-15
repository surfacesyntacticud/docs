---
title: Single root
request: |
  pattern {
    ANCHOR [form="__0__"];
    ANCHOR -[root]-> X1;
    ANCHOR -[root]-> X2;
  }
scope:
  schema: SUD
level: error
type: valid
---

Only one node must be attached to the anchor with the `root` deprel.
