import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef(null);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .showAtmosphere(true)
      .atmosphereColor('lightskyblue')
      .atmosphereAltitude(0.25)
      .pointsData([
        { lat: 37.7749, lng: -122.4194, size: 0.5, color: 'red', description: 'San Francisco is a cultural, commercial, and financial center in the U.S. state of California. San Francisco is the 16th most populous city in the United States.' },
        { lat: 40.7128, lng: -74.0060, size: 0.5, color: 'blue', description: 'New York City, often simply called New York, is the most populous city in the United States. It is known for its significant impact on commerce, finance, media, art, fashion, research, technology, education, and entertainment.' }
      ])
      .pointAltitude('size')
      .pointColor('color')
      .onPointClick((point, event) => {
        setTooltipContent(point.description);
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      });

    // Cleanup function to remove event listeners if the component is unmounted
    return () => {
      globe.controls().dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={globeEl} style={{ width: '100%', height: '100%' }} />
      {tooltipContent && (
        <div
          style={{
            position: 'absolute',
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Location Info</div>
          <div style={{ fontSize: '12px', lineHeight: '1.5' }}>{tooltipContent}</div>
        </div>
      )}
    </div>
  );
};

export default GlobeComponent;
