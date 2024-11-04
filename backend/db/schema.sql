CREATE TABLE genome (
    accession_id TEXT PRIMARY KEY,
    description TEXT,
    fasta_file TEXT,
    gtf_file TEXT,
    gff_file TEXT,
    is_reference INTEGER DEFAULT 0, -- 0 = not a reference, 1 = is a reference
    UNIQUE (is_reference) WHERE is_reference = 1 -- Ensure only one reference
);
