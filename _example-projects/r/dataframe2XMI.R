##### export text files stored in a data frame                                         #####
##### into single XML files for import to INCEpTION                                    #####
##### and retain the meta data                                                         #####
#####                                                                                  #####
##### Source: https://groups.google.com/g/inception-users/c/LRH4haQlpq4/m/ehE_Zs6fAAAJ #####

library(XML)
library(tidyverse)
library(rvest)
library(stringr)
library(stringi)
rm(list=ls())

# load data
textdataframe <- read.csv(file.choose(), fileEncoding = "utf-8")

# the structure of the data frame used here is the following
# textdataframe <- data.frame(id = "0123uniqueID",                 # a unique text id
#                             text = "the actual text",            # the actual text
#                             md1  = "some meta data information", # e.g. name of the author
#                             md2  = "more meta data",             # e.g. publication date
#                             md3  = "and even more meta data")    # e.g. publisher
# 

# create a random data frame for the example
textdataframe <- data.frame(id = sample(1:1000, 10, replace=FALSE),
                            text = stri_rand_lipsum(10),            # the actual text
                            md1  = stri_rand_strings(10, 15),
                            md2  = sample(seq(as.Date('2000/01/01'), as.Date('2020/12/31'), by="day"), 10),
                            md3  = stri_rand_strings(10, 15))    


# xmi function
xmiTop <- function(){XMI = newXMLNode("XMI",
                                      namespace = "xmi",
                                      namespaceDefinitions = c("xmi" = "http://www.omg.org/XMI"))
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/lexmorph/type/pos.ecore", "pos")
newXMLNamespace(XMI, "http:///uima/tcas.ecore", "tcas")
newXMLNamespace(XMI, "http:///uima/cas.ecore", "cas")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/lexmorph/type/pos/tweet.ecore", "tweet")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/lexmorph/type/morph.ecore", "morph")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/syntax/type/dependency.ecore", "dependency")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/semantics/type.ecore", "type5")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/transform/type.ecore", "type8")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/syntax/type.ecore", "type7")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/metadata/type.ecore", "type2")
newXMLNamespace(XMI, "http:///org/dkpro/core/api/xml/type.ecore", "type9")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/ner/type.ecore", "type3")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/segmentation/type.ecore", "type4")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/coref/type.ecore", "type")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/structure/type.ecore", "type6")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/syntax/type/constituent.ecore", "constituent")
newXMLNamespace(XMI, "http:///de/tudarmstadt/ukp/dkpro/core/api/syntax/type/chunk.ecore", "chunk")
newXMLNamespace(XMI, "http:///webanno/custom.ecore", "custom")
return(XMI)}

# write separate XML files
for (i in 1:nrow(textdataframe)) {
  XMI <- xmiTop()
  doc <- newXMLDoc(node=XMI)
  newXMLNode("cas:NULL", attrs = c("xmi:id" = "0"), parent = XMI)
  newXMLNode("custom:Doclevel_metadata", attrs = c("xmi:id"="2", 
                                                   "sofa"="1", 
                                                   "id"=textdataframe$id[[i]], 
                                                   "md1"=textdataframe$md1[[i]], 
                                                   "md2"=textdataframe$md2[[i]], 
                                                   "md3"=textdataframe$md3[[i]]),
             parent = XMI)
  
  newXMLNode("cas:Sofa", attrs = c("xmi:id"="1",
                                   "sofaNum"="1",
                                   "sofaID"="_InitialView",
                                   "mimeType"="text",
                                   "sofaString"=textdataframe$text[[i]]),
             parent = XMI)
  newXMLNode("cas:View", attrs = c("sofa"="1", "members"="2"), parent = XMI)
  saveXML(doc, file = paste0("articles", textdataframe$id[[i]], ".xmi"), encoding = "UTF-8")
  rm(XMI, doc)
}

