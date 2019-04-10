export {
  types,
  actions,
  default as createGeneReducer,
  byGeneName,
  allGeneNames,
  isFetching,
  geneNotFound,
  geneData,
  currentGene,
  currentTissue,
  currentChromosome,
  currentTranscript,
  canonicalTranscript,
  maxTissueExpressions,
  transcriptFanOut,
  currentExon,
  exonPadding,
  transcripts,
  strand,
} from './genes'

export {
  default as GenePageHoc
} from './GenePageHoc'
