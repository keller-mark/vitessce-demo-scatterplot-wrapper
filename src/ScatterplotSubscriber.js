import React, { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';
/**
 * Import Vitessce components
 * using either production or development
 * bundles.
 */
import { Scatterplot } from 'vitessce/dist/es/production/scatterplot.min.js';

function ScatterplotSubscriber() {

    const [cellColors, setCellColors] = useState(null);

    const view = { target: [0, 0, 0], zoom: 4 };
    const mapping = "PCA";
    const cells = {
      1: { mappings: { [mapping]: [0, 0] } },
      2: { mappings: { [mapping]: [1, 1] } },
      3: { mappings: { [mapping]: [3, 3] } }
    };
    const selectedCellIds = new Set();

    useEffect(() => {
        const token = PubSub.subscribe('CELL_COLORS', (msg, data) => {
            setCellColors(data);
        });
        return () => {
            PubSub.unsubscribe(token);
        };
    }, []);

    return (
        <div className="vitessce-container vitessce-theme-light">
            <div className="card card-body bg-secondary" style={{ width: '400px', height: '400px', margin: '10px' }}>
                <Scatterplot 
                    uuid="my-vitessce-scatterplot-subscribed"
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

export default ScatterplotSubscriber;
