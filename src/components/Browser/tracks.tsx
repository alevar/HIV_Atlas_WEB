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
          uri: `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.gff.gz`,
        },
        index: {
          location: {
            uri: `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.gff.gz.tbi`,
          },
          indexType: 'TBI',
        },
      },
    }
  ];
};
