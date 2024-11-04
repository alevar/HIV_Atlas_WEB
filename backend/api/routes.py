from flask import Blueprint, jsonify, request, send_from_directory, send_file
from io import BytesIO
from zipfile import ZipFile
from pathlib import Path

from db import get_db
from utils.utils import safe_send_from_directory

# Blueprint for genome routes
hiv_atlas_bp = Blueprint('genome', __name__)

# download api  
@hiv_atlas_bp.route('/api/download/genome_', methods=['POST'])
def download_multi_genome_data():
    # Parse the accession_ids from the request body
    accession_ids = request.json.get('accessions', [])
    
    if not accession_ids:
        return jsonify({'error': 'No accession IDs provided'}), 400
    
    # Get database cursor
    cur = get_db().cursor()

    stream = BytesIO()
    with ZipFile(stream, 'w') as zf:
        for accid in accession_ids:
            # Query the database to get the directory path for each genome
            cur.execute("SELECT dir FROM genome WHERE accession_id=?", (accid,))
            row = cur.fetchone()
            genome_dir = None
            if row:
                genome_dir = Path(row[0])
            else:
                continue  # Skip if genome not found

            # Check that the required files exist
            fasta_fname = genome_dir / f"{accid}.fasta"
            gtf_fname = genome_dir / f"{accid}.gtf"
            
            if fasta_fname.exists() and gtf_fname.exists():
                zf.write(fasta_fname, fasta_fname.name)
                zf.write(gtf_fname, gtf_fname.name)
            else:
                print(f"Genome files not found for {accid}")
    stream.seek(0)
    
    # Send the compressed zip file
    return send_file(
        stream,
        as_attachment=True,
        download_name='hiv_atlas.zip',
        mimetype='application/zip'
    )

# API to retrieve genome data
@hiv_atlas_bp.route('/api/genomes', methods=['GET'])
def get_genomes():
    cur = get_db().cursor()
    cur.execute("SELECT accession_id, description FROM genome")
    rows = cur.fetchall()
    genomes = [{'accession_id': row[0], 'description': row[1]} for row in rows]
    return jsonify(genomes)

# API to retrieve genome files (fasta, gtf, gff)
@hiv_atlas_bp.route('/api/genome/<accession_id>', methods=['GET'])
def get_genome_files(accession_id):
    cur = get_db().cursor()
    cur.execute("SELECT fasta_file, gtf_file, gff_file FROM genome WHERE accession_id=?", (accession_id,))
    row = cur.fetchone()
    if row:
        genome_data = {
            'fasta_file': row[0],
            'gtf_file': row[1],
            'gff_file': row[2]
        }
        return jsonify(genome_data)
    return jsonify({'error': 'Genome not found'}), 404

# API endpoint for genome data
@hiv_atlas_bp.route('/api/reference_accid', methods=['GET'])
def reference_accid_api():
    cur = get_db().cursor()
    cur.execute("SELECT accession_id FROM genome WHERE is_reference=1")
    rows = cur.fetchone()
    accid = rows[0] if rows else None
    if accid is None:
        return jsonify({'error': 'Reference genome not found'}), 404
    
    return jsonify(accid)

@hiv_atlas_bp.route('/api/genome_fasta/<accession_id>', methods=['GET'])
def genome_fasta_api(accession_id):
    cur = get_db().cursor()
    cur.execute("SELECT dir FROM genome WHERE accession_id=?", (accession_id,))
    rows = cur.fetchone()
    genome_dir = rows[0] if rows else None
    if genome_dir is None:
        return jsonify({'error': 'Genome not found'}), 404
    return safe_send_from_directory(genome_dir, f"{accession_id}.fasta")

@hiv_atlas_bp.route('/api/genome_fai/<accession_id>', methods=['GET'])
def genome_fai_api(accession_id):
    cur = get_db().cursor()
    cur.execute("SELECT dir FROM genome WHERE accession_id=?", (accession_id,))
    rows = cur.fetchone()
    genome_dir = rows[0] if rows else None
    if genome_dir is None:
        return jsonify({'error': 'Genome not found'}), 404
    return safe_send_from_directory(genome_dir, f"{accession_id}.fasta.fai")

@hiv_atlas_bp.route('/api/genome_gff/<accession_id>', methods=['GET'])
def genome_gff_api(accession_id):
    cur = get_db().cursor()
    cur.execute("SELECT dir FROM genome WHERE accession_id=?", (accession_id,))
    rows = cur.fetchone()
    genome_dir = rows[0] if rows else None
    print(genome_dir+"/" + f"{accession_id}.gff.gz")
    if genome_dir is None:
        return jsonify({'error': 'Genome not found'}), 404
    return safe_send_from_directory(genome_dir, f"{accession_id}.gff.gz")

@hiv_atlas_bp.route('/api/genome_tbi/<accession_id>', methods=['GET'])
def genome_tbi_api(accession_id):
    cur = get_db().cursor()
    cur.execute("SELECT dir FROM genome WHERE accession_id=?", (accession_id,))
    rows = cur.fetchone()
    genome_dir = rows[0] if rows else None
    if genome_dir is None:
        return jsonify({'error': 'Genome not found'}), 404
    return safe_send_from_directory(genome_dir, f"{accession_id}.gff.gz.tbi")
