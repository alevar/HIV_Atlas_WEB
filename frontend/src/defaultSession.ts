const session = {
  "id": "MoEhmcAxUwmpuPBDxDdrl",
  "name": "this session",
  "margin": 0,
  "drawerPosition": "right",
  "drawerWidth": 384,
  "widgets": {
    "hierarchicalTrackSelector": {
      "id": "hierarchicalTrackSelector",
      "type": "HierarchicalTrackSelectorWidget",
      "view": "linearGenomeView",
      "faceted": {
        "filterText": "",
        "showSparse": false,
        "showFilters": true,
        "showOptions": false,
        "panelWidth": 400
      }
    }
  },
  "activeWidgets": {},
  "minimized": false,
  "connectionInstances": [],
  "sessionTracks": [],
  "view": {
    "id": "linearGenomeView",
    "minimized": false,
    "type": "LinearGenomeView",
    "offsetPx": 240828488,
    "bpPerPx": 0.12389974943192647,
    "displayedRegions": [
      {
        "refName": "10",
        "start": 0,
        "end": 133797422,
        "reversed": false,
        "assemblyName": "GRCh38"
      }
    ],
    "tracks": [
      {
        "id": "4aZAiE-A3",
        "type": "ReferenceSequenceTrack",
        "configuration": "GRCh38-ReferenceSequenceTrack",
        "minimized": false,
        "displays": [
          {
            "id": "AD3gqvG0_6",
            "type": "LinearReferenceSequenceDisplay",
            "heightPreConfig": 120,
            "configuration": "GRCh38-ReferenceSequenceTrack-LinearReferenceSequenceDisplay",
            "showForward": true,
            "showReverse": false,
            "showTranslation": true
          }
        ]
      },
      {
        "id": "mCdx9J1_uOSpW-jBh1zLm",
        "type": "FeatureTrack",
        "configuration": "genes",
        "minimized": false,
        "displays": [
          {
            "id": "Gt6r3d-aiCyyT6r6rxI6i",
            "type": "LinearBasicDisplay",
            "configuration": "genes-LinearBasicDisplay"
          }
        ]
      }
    ],
    "hideHeader": true,
    "hideHeaderOverview": true,
    "hideNoTracksActive": true,
    "trackSelectorType": "hierarchical",
    "showCenterLine": false,
    "showCytobandsSetting": false,
    "trackLabels": "overlapping",
    "showGridlines": true,
    "highlight": [],
    "colorByCDS": true,
    "showTrackOutlines": true
  }
}

export default session
