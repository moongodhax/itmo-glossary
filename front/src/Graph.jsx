import { useState, useEffect } from 'react';
import { Graph as VisxGraph } from '@visx/network';

function Graph() {
  const [links, setLinks] = useState([]);
  const [glossary, setGlossary] = useState([]);
  const [relations, setRelations] = useState([]);

  useEffect(() => {
    fetch("/api/glossary")
      .then((response) => response.json())
      .then((data) => setGlossary(data));

    fetch("/api/relations")
      .then((response) => response.json())
      .then((data) => setRelations(data));
  }, []);

  useEffect(() => {
    if (glossary.length && relations.length) {
      setLinks(relations.map((rel) => (
        {
          source: glossary.find((term) => term.id == rel.firstTermId),
          target: glossary.find((term) => term.id == rel.secondTermId),
          relation: rel.relationType,
        }
      )));
    }
  }, [glossary, relations]);

  return (
    !glossary.length || !relations.length
    ? 'Загрузка...'
    : (
      <svg width='100%' height='900' >
        {/* <defs>
          <marker
            id='arrow'
            orient="auto"
            markerWidth='5'
            markerHeight='6'
            refX='0.1'
            refY='2'
          >
            <path d='M0,0 V4 L2,2 Z' fill="#999" opacity="0.6"/>
          </marker>
        </defs> */}

        <VisxGraph
          top={100}
          left={100}
          graph={ { nodes: glossary, links } }

          nodeComponent={({ node: { name } }) => (
            <>
              <circle r="60" fill="#1a1a1a"></circle>
              <text fill="#fff" dominantBaseline="middle" textAnchor="middle">{ name }</text>
            </>
          )}

          linkComponent={({ link: { source, target, relation } }) => (
            <>
              <line
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                strokeWidth={2}
                stroke="#999"
                strokeOpacity={0.6}
              />
              {/* <path
                d={`M${source.x},${source.y}, L${target.x - 30},${target.y - 30}`}
                strokeWidth='2'
                markerEnd='url(#arrow)'
                fill='none'
                stroke="#999"
                strokeOpacity='0.6'
              /> */}
              <g>
                <rect
                  x={ (source.x + target.x) / 2 - 5 }
                  y={ (source.y + target.y) / 2 - 5 }
                  width="10px"
                  height="10px"
                  fillOpacity="0"
                />
                <text
                  x={ (source.x + target.x) / 2 }
                  y={ (source.y + target.y) / 2 }
                  fill="#fff"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >{ relation }</text>
              </g>
            </>
          )}
        />
      </svg>
    )
  )
};

export default Graph