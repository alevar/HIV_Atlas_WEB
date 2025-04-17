import React, { useState, useEffect, createContext } from 'react';
import { createHashRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Tutorials from './components/Tutorials/Tutorials';
import ContactUs from './components/ContactUs/ContactUs';
import Spinner from './components/Spinner/Spinner';
import { DB } from './types';


// Context
export const DBContext = createContext<{
  db: DB;
  selectedTaxid: string;
  setSelectedTaxid: (taxid: string) => void;
  selectedAccession: string | null;
  setSelectedAccession: (accession: string) => void;
}>({
  db: {},
  selectedTaxid: '',
  setSelectedTaxid: () => {},
  selectedAccession: null,
  setSelectedAccession: () => {},
});

const Layout: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const App: React.FC = () => {
  const [db, setDB] = useState<DB>({});
  const [selectedTaxid, setSelectedTaxid] = useState<string>('');
  const [selectedAccession, setSelectedAccession] = useState<string | null>('K03455.1');
  const [loading, setLoading] = useState(true);
  const [defaultRoute, setDefaultRoute] = useState<string>('');

  console.log({
    BASE_URL: import.meta.env.BASE_URL,
    location: window.location.href,
    pathname: window.location.pathname
  });

  useEffect(() => {
    const loadDB = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/alevar/HIV_Atlas_Data/main/hiv_atlas.db.tsv'
        );
        const text = await response.text();
        const tempDB: DB = {};

        // First pass: organize rows by taxid
        text.split('\n').forEach((line) => {
          if (!line) return;
          const [accession_id, taxid, organism, is_reference, genome_annotation_score, description, name, subtype, country, year] = line.split('\t');
          if (!accession_id) return;

          if (!tempDB[taxid]) {
            tempDB[taxid] = {
              organism,
              reference: '',
              map: {},
              rows: []
            };
          }

          const rowIndex = tempDB[taxid].rows.length;
          tempDB[taxid].map[accession_id] = rowIndex;
          tempDB[taxid].rows.push({
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

          // Set reference if this is a reference genome
          if (is_reference === '1') {
            tempDB[taxid].reference = accession_id;
          }
        });

        // Set default reference for organisms without one
        Object.keys(tempDB).forEach(taxid => {
          if (!tempDB[taxid].reference && tempDB[taxid].rows.length > 0) {
            tempDB[taxid].reference = tempDB[taxid].rows[0].accession_id;
          }
        });

        setDB(tempDB);
        
        // Find the taxid that contains K03455.1 or use the first taxid
        const defaultTaxid = Object.keys(tempDB).find(
          taxid => tempDB[taxid].rows.some(row => row.accession_id === 'K03455.1')
        ) || Object.keys(tempDB)[0];

        setSelectedTaxid(defaultTaxid);
        setDefaultRoute(`/${defaultTaxid}/K03455.1`);

      } catch (error) {
        console.error('Error fetching database:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDB();
  }, []);

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { 
          path: '/', 
          element: <Navigate to={defaultRoute} replace /> 
        },
        { 
          path: '/:taxid/:accession',
          element: <Home />
        },
        { 
          path: 'about', 
          element: <About /> 
        },
        { 
          path: 'contact_us', 
          element: <ContactUs /> 
        },
        {
          path: 'tutorials',
          element: <Tutorials />
        },
      ]
    }
  ];

  const router = createHashRouter(routes);

  if (loading) {
    return <Spinner />;
  }

  return (
    <DBContext.Provider 
      value={{ 
        db, 
        selectedTaxid, 
        setSelectedTaxid,
        selectedAccession, 
        setSelectedAccession 
      }}
    >
      <RouterProvider router={router} />
    </DBContext.Provider>
  );
};

export default App;