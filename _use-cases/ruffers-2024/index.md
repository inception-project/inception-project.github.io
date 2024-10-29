---
title: RUFFERS 2024
subheadline: Recognizing Ultra Fine-grained Entities, Events, and Relations
permalink: /use-cases/ruffers-2024/
hidden: false
---

**Source**: <i>This use-case was kindly contributed by Shudong Huang, U.S. National Institute of Standards and Technology, USA.</i>

The Text Analysis Conference (TAC) is a well-established series of evaluation workshops designed to advance research in Natural Language Processing (NLP) by providing a standardized framework for testing, evaluating, and comparing various NLP systems. 
TAC fosters innovation by offering large datasets, unified evaluation procedures, and a platform for participants to showcase and discuss their results.

Within TAC, specific challenges, or *tracks,* are organized around different NLP problems. 
These tracks not only focus on real-world end-user tasks but also include evaluations of critical components required for solving these tasks.

One such track, the RUFEERS track, is aimed at extracting information about entities, events, and relations in a way that can be used as input for knowledge bases. 
This track addresses real-world needs, such as disaster relief and technical support, where systems must accurately recognize a wide range of entity, event, and relation types—often with limited training data. 
The challenge for participating systems lies in identifying mentions of approximately 55 event types, 30 relation types, and 350 entity types, spanning diverse topics, in news articles.

To prepare the dataset for the RUFEERS track, the annotation tool INCEpTION was used to facilitate the task of marking up entities, events, and relations in the provided news articles, based on a predefined ontology. 
INCEpTION was used to prepare the gold-standard data for the following tasks within the track:

1. **Task 1**: Extract one mention of each event, relation, and event/relation argument from each document.
2. **Task 2**: Extract all mentions of events, relations, and their arguments from each document.
3. **Task 3**: Extract all mentions of each entity from each document.

Key reasons for choosing INCEpTION as the annotation tool to prepare the task data were the ability to support custom annotation layers and being able to link data against knowledge bases.


##### References

[1]: https://tac.nist.gov/2024/RUFEERS/
