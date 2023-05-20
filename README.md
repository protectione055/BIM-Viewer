# Install Libraries
npm i web-ifc-three --legacy-peer-deps
npm i three --legacy-peer-deps
npm i rollup --save-dev --legacy-peer-deps
npm i @rollup/plugin-node-resolve --save-dev --legacy-peer-deps


```/home/zzm/projects/BIM-Viewer/node_modules/three/examples/jsm/utils/BufferGeometryUtils
- import {mergeBufferGeometry} from 'three/examples/jsm/utils/BufferGeometryUtils'
+ import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
...
-      const merged = mergeBufferGeometries(geometriesByMaterial);
+      const merged = BufferGeometryUtils.mergeBufferGeometries(geometriesByMaterial);
...
-	const combinedGeometry = mergeBufferGeometries(geometries, true);
+    const combinedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries, true);
```

# Build bundle
npm run build