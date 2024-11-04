export const getAssembly = (accession_id: string) => {
  return {
    name: accession_id,
    sequence: {
      type: 'ReferenceSequenceTrack',
      trackId: `${accession_id}-ReferenceSequenceTrack`,
      adapter: {
        type: 'IndexedFastaAdapter',
        fastaLocation: {
          uri: `http://localhost:5000/api/genome_fasta/${accession_id}`,
        },
        faiLocation: {
          uri: `http://localhost:5000/api/genome_fai/${accession_id}`,
        },
      },
    },
  };
};
