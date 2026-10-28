---
title: GazeHeld
request: pattern { X -[GazeHeld]-> Y }
scope:
  schema: SUD
  lang: fsl
type: doc
tags:
 - feature
---

# Gaze Held

The feature `GazeHeld` allows us to describe more precisely non-manual elements that can carry grammatical content. It describes the same as the feature `Gaze`, i.e. where the gaze is pointing at, but specifying that it was not introduced in this token but rather held with the same form since before. 

<conll>
# sent_id = crdo-fsl-cuc022__3
# text = [gambader] [s'arrêter-brusquement] SST[piquet] SST[barrière-entre-piquets] PRF[piquet] [OISEAU] [être-sur] [regarder] [regarder] PNT[loin]
# video_url = https://cocoon.huma-num.fr/data/cuxac/CUC022_low.mp4
# text_fr = Il galope, puis soudain s'arrête, intrigué : des piquets qui soutiennent une barrière. Un oiseau est perché sur la barrière, le cheval le regarde et loin devant lui
# text_en = It is galloping, then suddently stops, intrigued: stakes holding up a fence. A bird is one the fence, the horse observes it and far away
1	[gambader]	[gambader]	VERB	_	_	0	root	_	AlignBegin=21235|AlignEnd=24715|Gloss=[gambol]|PT=cheval|PTReal=posture-fière+deux-pattes|Subj=PT
2	[s'arrêter-brusquement]	[s'arrêter-brusquement]	VERB	_	_	1	conj:chaining	_	AlignBegin=24715|AlignEnd=26275|Gloss=[stop-suddently]|NMM=foward-tilt|PT=cheval|PTReal=posture-fière+deux-pattes|Subj=PT
3	SST[piquet]	SST	NOUN	_	_	2	conj:chaining	_	AlignBegin=26275|AlignEnd=28075|Gloss=SST[stake]|NMM=eyebrow-frown|PT=cheval|PTReal=posture|Rep=5|ST=barrière|TwoH=Yes
4	SST[barrière-entre-piquets]	SST	NOUN	_	_	3	mod	_	AlignBegin=28075|AlignEnd=30595|Gloss=SST[fence-between-stakes]|NDHHeld=SST[piquet]|NMM=eyebrow-raise|PT=cheval|PTReal=posture|ST=barrière
5	PRF[piquet]	PRF	NOUN	_	_	7	comp:obj	_	AlignBegin=30595|AlignEnd=31675|Gloss=PRF[stake]|Loc=PSS3r|NMM=eyebrow-frown|ST=oiseau-sur-piquet
6	[OISEAU]	[OISEAU]	NOUN	_	_	7	subj	_	AlignBegin=31675|AlignEnd=32355|DHHeld=PRF[piquet]|GazeHeld=PSS3r|Gloss=[BIRD]|NMM=eyebrow-frown|ST=oiseau-sur-piquet
7	[être-sur]	[être-sur]	VERB	_	_	3	conj:chaining	_	AlignBegin=32355|AlignEnd=33755|GazeHeld=PSS3r|Gloss=[be-on]|NMM=eyebrow-frown|Obj=PRF(DH)[piquet]|ST=oiseau-sur-piquet|Subj=PRF(NDH)[oiseau]
8	[regarder]	[regarder]	VERB	_	_	7	conj:chaining	_	AlignBegin=33755|AlignEnd=34700|Gaze=oiseau|Gloss=[look]|NMM=eyebrow-frown|Obj=Gaze|PT=cheval|PTReal=posture-fière+deux-pattes|Subj=PT|Tgt=PSS3r
9	[regarder]	[regarder]	VERB	_	_	8	conj:chaining	_	AlignBegin=34700|AlignEnd=35315|Gaze=loin|Gloss=[look]|NMM=eyebrow-frown|Obj=Gaze|PT=cheval|PTReal=posture-fière+deux-pattes|Subj=PT|Tgt=PSS3re
10	PNT[loin]	PNT	ADV	_	_	9	comp:obj	_	AlignBegin=35315|AlignEnd=36465|GazeHeld=PSS3re|Gloss=PNT[far]|ISMarker[CFoc]=NMM+Spatial|ISRole=CFoc|NMM=eyebrow-raise|Tgt=PSS3re
</conll>

The use of `GazeHeld` in this example is particularly interesting. It works almost as a pointing gesture, helping to keep referents in mind. The same gaze is held over three signs from PRF[stake] to [be-on] and later over [regarder] and PNT[loin].
