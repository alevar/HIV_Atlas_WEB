import React, { useEffect } from 'react';
import { DBRow } from '../../types';

interface SEOProps {
  accessionData: DBRow | null;
  organism: string;
}

const SEO: React.FC<SEOProps> = ({ accessionData, organism }) => {
  useEffect(() => {
    if (!accessionData) return;

    // Update document title
    const title = `${accessionData.accession_id} ${accessionData.name ? `(${accessionData.name})` : ''} - ${organism} Genome | HIV Atlas`;
    document.title = title;

    // Update meta description
    const description = `Download ${accessionData.accession_id} ${organism} genome annotation files (GTF/GFF), FASTA sequence, and view interactive genome browser. ${accessionData.description || ''} Available at HIV Atlas by Ales Varabyou at Johns Hopkins University.`;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', `${accessionData.accession_id}, ${organism}, genome annotation, GTF, GFF, FASTA, HIV research, genome browser, Ales Varabyou, Johns Hopkins University, ${accessionData.subtype || ''}, ${accessionData.country || ''}, ${accessionData.year || ''}`);

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:url', `https://ccb.jhu.edu/HIV_Atlas/#/${accessionData.taxid}/${accessionData.accession_id}`);
    updatePropertyTag('og:type', 'article');

    // Update Twitter Card tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:url', `https://ccb.jhu.edu/HIV_Atlas/#/${accessionData.taxid}/${accessionData.accession_id}`);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://ccb.jhu.edu/HIV_Atlas/#/${accessionData.taxid}/${accessionData.accession_id}`;

    // Add structured data for the genome
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": `${accessionData.accession_id} ${organism} Genome`,
      "description": description,
      "url": `https://ccb.jhu.edu/HIV_Atlas/#/${accessionData.taxid}/${accessionData.accession_id}`,
      "identifier": accessionData.accession_id,
      "keywords": [
        accessionData.accession_id,
        organism,
        "genome annotation",
        "GTF",
        "GFF", 
        "FASTA",
        "HIV research",
        "genome browser",
        "Ales Varabyou",
        "Johns Hopkins University"
      ],
      "creator": {
        "@type": "Person",
        "name": "Ales Varabyou",
        "affiliation": {
          "@type": "Organization",
          "name": "Johns Hopkins University Center for Computational Biology"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Johns Hopkins University",
        "url": "https://www.jhu.edu/"
      },
      "distribution": [
        {
          "@type": "DataDownload",
          "encodingFormat": "GTF",
          "contentUrl": `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accessionData.accession_id}/${accessionData.accession_id}.gff.gz`
        },
        {
          "@type": "DataDownload", 
          "encodingFormat": "FASTA",
          "contentUrl": `https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/data/${accessionData.accession_id}/${accessionData.accession_id}.fasta`
        }
      ],
      "temporalCoverage": accessionData.year ? `${accessionData.year}` : undefined,
      "spatialCoverage": accessionData.country ? {
        "@type": "Place",
        "name": accessionData.country
      } : undefined,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Subtype",
          "value": accessionData.subtype
        },
        {
          "@type": "PropertyValue", 
          "name": "Annotation Score",
          "value": accessionData.genome_annotation_score
        },
        {
          "@type": "PropertyValue",
          "name": "Reference Genome",
          "value": accessionData.is_reference ? "Yes" : "No"
        }
      ].filter(prop => prop.value)
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[data-seo-structured]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-structured', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [accessionData, organism]);

  return null; // This component doesn't render anything
};

export default SEO; 