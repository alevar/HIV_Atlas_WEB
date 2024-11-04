const tracks = [
  {
    type: 'FeatureTrack',
    trackId: 'genes',
    name: 'NCBI RefSeq Genes',
    assemblyNames: ['K03455.1'],
    category: ['Genes'],
    adapter: {
      type: 'Gff3TabixAdapter',
      gffGzLocation: {
        uri: 'http://localhost:5000/api/genome_gtf',
      },
      index: {
        location: {
          uri: 'http://localhost:5000/api/genome_tbi',
        },
      },
    },
  }
]

export default tracks