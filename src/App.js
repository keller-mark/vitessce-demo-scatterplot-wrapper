import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';
import ScatterplotSubscriber from './ScatterplotSubscriber';
import ScatterplotWrapper from './ScatterplotWrapper';
/**
 * Import Vitessce CSS.
 */
import 'vitessce/dist/es/production/static/css/index.css';

function getRandomColor() {
    return [Math.random()*255, Math.random()*255, Math.random()*255];
}

function App() {

    const [cellColors, setCellColors] = useState({
        1: [0, 0, 255],
        2: [0, 255, 0],
        3: [255, 0, 0],
    });
    const view = { target: [0, 0, 0], zoom: 4 };
    const mapping = "PCA";
    const cells = {
      1: { mappings: { [mapping]: [0, 0] } },
      2: { mappings: { [mapping]: [1, 1] } },
      3: { mappings: { [mapping]: [3, 3] } }
    };
    const selectedCellIds = new Set();

    function updateColors() {
        setCellColors({
            1: getRandomColor(),
            2: getRandomColor(),
            3: getRandomColor(),
        });
    }

    useEffect(() => {
        PubSub.publish('CELL_COLORS', cellColors);
    }, [cellColors]);

    return (
        <div>
            <button onClick={updateColors}>Update scatterplot colors</button>
            <ScatterplotSubscriber
                /* subscriber pattern rather than props */
            />
            <ScatterplotWrapper
                view={view}
                mapping={mapping}
                cells={cells}
                selectedCellIds={selectedCellIds}
                cellColors={cellColors}
            />
            
        </div>
    );
}

export default App;
