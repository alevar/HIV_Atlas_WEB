export const getAssembly = (accession_id: string) => {
  return {
    name: accession_id,
    sequence: {
      type: 'ReferenceSequenceTrack',
      trackId: `${accession_id}-ReferenceSequenceTrack`,
      adapter: {
        type: 'IndexedFastaAdapter',
        fastaLocation: {
          uri: `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.fasta`,
        },
        faiLocation: {
          uri: `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accession_id}/${accession_id}.fasta.fai`,
        },
      },
    },
  };
};
