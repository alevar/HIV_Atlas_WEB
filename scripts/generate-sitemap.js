#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for HIV Atlas
 * 
 * This script fetches ALL genome data from the repository and generates a comprehensive sitemap
 * following the exact same logic as the HIV Atlas application.
 * 
 * Usage: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import https from 'https';

// Function to fetch the database
function fetchDatabase() {
  return new Promise((resolve, reject) => {
    const url = 'https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/hiv_atlas.db.tsv';
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to generate sitemap
async function generateSitemap() {
  try {
    console.log('Fetching database...');
    const dbText = await fetchDatabase();
    
    const lines = dbText.split('\n').filter(line => line.trim());
    const genomes = [];
    
    // Parse database
    lines.forEach((line) => {
      const [accession_id, taxid, organism, is_reference, genome_annotation_score, description, name, subtype, country, year] = line.split('\t');
      if (!accession_id) return;
      
      genomes.push({
        accession_id,
        taxid,
        organism,
        is_reference: is_reference === '1',
        genome_annotation_score: parseFloat(genome_annotation_score),
        description,
        name,
        subtype,
        country,
        year: parseInt(year)
      });
    });
    
    // Generate sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main pages -->
  <url>
    <loc>https://ccb.jhu.edu/HIV_Atlas/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ccb.jhu.edu/HIV_Atlas/#/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ccb.jhu.edu/HIV_Atlas/#/tutorials</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://ccb.jhu.edu/HIV_Atlas/#/contact_us</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;

    // Group genomes by taxid
    const genomesByTaxid = {};
    genomes.forEach(genome => {
      if (!genomesByTaxid[genome.taxid]) {
        genomesByTaxid[genome.taxid] = [];
      }
      genomesByTaxid[genome.taxid].push(genome);
    });

    // Add genome pages with enhanced descriptions
    Object.keys(genomesByTaxid).forEach(taxid => {
      const taxidGenomes = genomesByTaxid[taxid];
      const organism = taxidGenomes[0].organism;
      
             taxidGenomes.forEach(genome => {
         // Create enhanced description for SEO
         const description = `${genome.accession_id} ${organism} genome annotation files (GTF/GFF), FASTA sequence, and interactive genome browser. ${genome.description || ''} Download ${genome.accession_id} genome data for HIV research. Available at HIV Atlas by Ales Varabyou.`;
        
        // Determine priority based on genome characteristics
        let priority = 0.6; // Default priority
        if (genome.is_reference) priority = 0.9; // Reference genomes get highest priority
        else if (genome.genome_annotation_score > 0.8) priority = 0.8; // High quality annotations
        else if (genome.genome_annotation_score > 0.6) priority = 0.7; // Medium quality annotations
        
        sitemap += `
  <url>
    <loc>https://ccb.jhu.edu/HIV_Atlas/#/${genome.taxid}/${genome.accession_id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
      });
    });

    sitemap += `
</urlset>`;

    // Write sitemap to file
    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log(`Sitemap generated successfully with ${genomes.length} genome pages`);
    console.log(`Total URLs: ${genomes.length + 4}`); // +4 for main pages
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Run the script
generateSitemap(); 