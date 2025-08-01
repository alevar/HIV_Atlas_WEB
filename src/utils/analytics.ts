// Google Analytics utility functions for HIV Atlas - Table Interactions Only
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackTableSearch = (searchTerm: string, resultsCount: number, organism?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'table_search', {
      event_category: 'HIV_Atlas_Table',
      event_label: 'Genome Search',
      search_term: searchTerm,
      results_count: resultsCount,
      organism: organism,
      custom_parameter_1: 'Ales Varabyou',
      custom_parameter_2: 'Johns Hopkins University CCB'
    });
  }
};

export const trackTableRowClick = (accessionId: string, genomeName?: string, organism?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'table_row_click', {
      event_category: 'HIV_Atlas_Table',
      event_label: 'Genome Selection',
      accession_id: accessionId,
      genome_name: genomeName || 'Unknown',
      organism: organism,
      custom_parameter_1: 'Ales Varabyou',
      custom_parameter_2: 'Johns Hopkins University CCB'
    });
  }
};

export const trackGenomeDownload = (accessionId: string, genomeName?: string, organism?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'genome_download', {
      event_category: 'HIV_Atlas_Table',
      event_label: 'Single Genome Download',
      accession_id: accessionId,
      genome_name: genomeName || 'Unknown',
      organism: organism,
      download_type: 'single_genome',
      custom_parameter_1: 'Ales Varabyou',
      custom_parameter_2: 'Johns Hopkins University CCB'
    });
  }
};

export const trackBulkDownload = (accessionIds: string[], organism?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'bulk_download', {
      event_category: 'HIV_Atlas_Table',
      event_label: 'Bulk Genome Download',
      accession_count: accessionIds.length,
      accession_ids: accessionIds.join(','),
      organism: organism,
      download_type: 'bulk_genomes',
      custom_parameter_1: 'Ales Varabyou',
      custom_parameter_2: 'Johns Hopkins University CCB'
    });
  }
};