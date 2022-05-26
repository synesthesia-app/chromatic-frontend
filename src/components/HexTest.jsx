import React from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
// import './App.css';

export default function HexTest() {
  return (
    <div
      // className="App"
    >
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        {/* Grid with manually inserted hexagons */}
        <Layout size={{ x: 3, y: 3 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>


          <Hexagon q={0} r={-5} s={0} />
          <Hexagon q={0} r={-4} s={0} />
          <Hexagon q={0} r={-3} s={0} />
          <Hexagon q={0} r={-2} s={0} />
          <Hexagon q={0} r={-1} s={0} />
          <Hexagon q={0} r={0} s={0} />
          <Hexagon q={0} r={1} s={0} />
          <Hexagon q={0} r={2} s={0} />
          <Hexagon q={0} r={3} s={0} />
          <Hexagon q={0} r={4} s={0} />
          <Hexagon q={0} r={5} s={0} />
          <Hexagon q={0} r={6} s={0} />

          <Hexagon q={1} r={-5} s={0} />
          <Hexagon q={1} r={-4} s={0} />
          <Hexagon q={1} r={-3} s={0} />
          <Hexagon q={1} r={-2} s={0} />
          <Hexagon q={1} r={-1} s={0} />
          <Hexagon q={1} r={0} s={0} />
          <Hexagon q={1} r={1} s={0} />
          <Hexagon q={1} r={2} s={0} />
          <Hexagon q={1} r={3} s={0} />
          <Hexagon q={1} r={4} s={0} />
          <Hexagon q={1} r={5} s={0} />
          <Hexagon q={1} r={6} s={0} />

          <Hexagon q={2} r={-6} s={0} />
          <Hexagon q={2} r={-5} s={0} />
          <Hexagon q={2} r={-4} s={0} />
          <Hexagon q={2} r={-3} s={0} />
          <Hexagon q={2} r={-2} s={0} />
          <Hexagon q={2} r={-1} s={0} />
          <Hexagon q={2} r={0} s={0} />
          <Hexagon q={2} r={1} s={0} />
          <Hexagon q={2} r={2} s={0} />
          <Hexagon q={2} r={3} s={0} />
          <Hexagon q={2} r={4} s={0} />
          <Hexagon q={2} r={5} s={0} />

          <Hexagon q={3} r={-6} s={0} />
          <Hexagon q={3} r={-5} s={0} />
          <Hexagon q={3} r={-4} s={0} />
          <Hexagon q={3} r={-3} s={0} />
          <Hexagon q={3} r={-2} s={0} />
          <Hexagon q={3} r={-1} s={0} />
          <Hexagon q={3} r={0} s={0} />
          <Hexagon q={3} r={1} s={0} />
          <Hexagon q={3} r={2} s={0} />
          <Hexagon q={3} r={3} s={0} />
          <Hexagon q={3} r={4} s={0} />
          <Hexagon q={3} r={5} s={0} />

          <Hexagon q={4} r={-6} s={0} />
          <Hexagon q={4} r={-5} s={0} />
          <Hexagon q={4} r={-4} s={0} />
          <Hexagon q={4} r={-3} s={0} />
          <Hexagon q={4} r={-2} s={0} />
          <Hexagon q={4} r={-1} s={0} />
          <Hexagon q={4} r={0} s={0} />
          <Hexagon q={4} r={1} s={0} />
          <Hexagon q={4} r={2} s={0} />
          <Hexagon q={4} r={3} s={0} />
          <Hexagon q={4} r={4} s={0} />
          <Hexagon q={4} r={5} s={0} />

          {/* <Hexagon q={5} r={-5} s={0} />
          <Hexagon q={5} r={-4} s={0} />
          <Hexagon q={5} r={-3} s={0} />
          <Hexagon q={5} r={-2} s={0} />
          <Hexagon q={5} r={-1} s={0} />
          <Hexagon q={5} r={0} s={0} />
          <Hexagon q={5} r={1} s={0} />
          <Hexagon q={5} r={2} s={0} />
          <Hexagon q={5} r={3} s={0} />
          <Hexagon q={5} r={4} s={0} />
          <Hexagon q={5} r={5} s={0} />
          <Hexagon q={5} r={6} s={0} />

          <Hexagon q={6} r={-6} s={0} />
          <Hexagon q={6} r={-5} s={0} />
          <Hexagon q={6} r={-4} s={0} />
          <Hexagon q={6} r={-3} s={0} />
          <Hexagon q={6} r={-2} s={0} />
          <Hexagon q={6} r={-1} s={0} />
          <Hexagon q={6} r={0} s={0} />
          <Hexagon q={6} r={1} s={0} />
          <Hexagon q={6} r={2} s={0} />
          <Hexagon q={6} r={3} s={0} />
          <Hexagon q={6} r={4} s={0} />
          <Hexagon q={6} r={5} s={0} /> */}
          

  

          {/* Using pattern (defined below) to fill the hexagon */}
          
          {/* <Hexagon q={0} r={-1} s={1} fill="pat-1" />
          <Hexagon q={0} r={1} s={-1} /> */}
          {/* <Hexagon q={1} r={-1} s={0}>

            <Text>1, -1, 0</Text>

          </Hexagon> */}
          {/* <Hexagon q={1} r={0} s={-1}>

            <Text>1, 0, -1</Text>

          </Hexagon> */}

          {/* Pattern and text */}

          {/* <Hexagon q={-1} r={1} s={0} fill="pat-2">

            <Text>-1, 1, 0</Text>

          </Hexagon> */}
          {/* <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-2} r={0} s={1} /> */}
        </Layout>
      </HexGrid>
    </div>
  )
}