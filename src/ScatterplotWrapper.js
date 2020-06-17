import React from 'react';
/**
 * Import Vitessce components
 * using either production or development
 * bundles.
 */
import { Scatterplot } from 'vitessce/dist/es/production/scatterplot.min.js';

function ScatterplotWrapper(props) {
    const {
        view, mapping, cells, selectedCellIds, cellColors
    } = props;

    return (
        <div className="vitessce-container vitessce-theme-light">
            <div className="card card-body bg-secondary" style={{ width: '400px', height: '400px', margin: '10px' }}>
                <Scatterplot 
                    uuid="my-vitessce-scatterplot-wrapped"
                    view={view}
                    mapping={mapping}
                    cells={cells}
                    selectedCellIds={selectedCellIds}
                    cellColors={cellColors}
                    updateStatus={(message) => {}}
                    updateCellsSelection={(selectedIds) => {}}
                    updateCellsHover={(hoverInfo) => {}}
                    updateViewInfo={(viewInfo) => {}}
                    clearPleaseWait={(layerName) => {}}
                />
            </div>
        </div>
    );
}

export default ScatterplotWrapper;
