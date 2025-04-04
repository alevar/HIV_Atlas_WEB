export interface DBRow {
    accession_id: string;
    taxid: string;
    organism: string;
    is_reference: boolean;
    genome_annotation_score: number;
    description: string;
    name: string;
    subtype: string;
    country: string;
    year: number;
}

export interface OrganismData {
    organism: string;
    reference: string;
    map: Record<string, number>;
    rows: DBRow[];
}

export interface DB {
    [taxid: string]: OrganismData;
}

export interface Genome {
    accession_id: string;
    description: string;
}