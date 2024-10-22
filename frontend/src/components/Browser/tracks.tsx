export const getTracks = (accession_id: string) => {
  return [
    {
      type: 'FeatureTrack',
      trackId: 'genes',
      name: 'Atlas',
      assemblyNames: [accession_id],
      category: ['Genes'],
      adapter: {
        type: 'Gff3TabixAdapter',
        gffGzLocation: {
          uri: `http://localhost:5000/api/genome_gff/${accession_id}`,
        },
        index: {
          location: {
            uri: `http://localhost:5000/api/genome_tbi/${accession_id}`,
          },
          indexType: 'TBI',
        },
      },
    }
  ];
};
