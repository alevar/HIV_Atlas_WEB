export interface DBRow {
    accession_id: string;
    is_reference: boolean;
    description: string;
    file_path: string;
}

export interface DB {
    rows: DBRow[];
    reference: string;
    map: Record<string, number>;
}

export interface Genome {
    accession_id: string;
    description: string;
}