import React, { useState, useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view';

import { getDefaultSession } from './defaultSession';
import { getAssembly } from './assembly';
import { getTracks } from './tracks';

type ViewModel = ReturnType<typeof createViewState>;

interface BrowserProps {
  accession_id?: string | null;
}

const Browser: React.FC<BrowserProps> = ({ accession_id }) => {
  const [viewState, setViewState] = useState<ViewModel>();
  const [patches, setPatches] = useState('');
  const [stateSnapshot, setStateSnapshot] = useState('');

  useEffect(() => {
    if (!accession_id) {
      return;
    }

    const assembly = getAssembly(accession_id);
    const tracks = getTracks(accession_id);
    const defaultSession = getDefaultSession(accession_id);

    const state = createViewState({
      assembly,
      tracks,
      defaultSession,
      onChange: patch => {
        setPatches(previous => previous + JSON.stringify(patch) + '\n');
      },
      configuration: {
        rpc: {
          defaultDriver: 'WebWorkerRpcDriver',
        },
        disableAddTrack: true,   // Disables the menu button for adding tracks
        disableDrawer: true,     // Disables the drawer for more settings
      },
      makeWorkerInstance: () => {
        return new Worker(new URL('./rpcWorker', import.meta.url), {
          type: 'module',
        });
      },
      hydrateFn: hydrateRoot,
      createRootFn: createRoot,
    });

    setViewState(state);
  }, [accession_id]);

  if (!viewState) {
    return null;
  }

  return (
    <>
      <JBrowseLinearGenomeView viewState={viewState} />
    </>
  );
};

export default Browser;
