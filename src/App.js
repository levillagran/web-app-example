import './App.css';
import EcMap from 'map-apd-ecuador';

function App() {

  const data = [
    { province: 9, value: 4387434 }, // Guayas
    { province: 13, value: 1562079 }, // Manabi
    { province: 17, value: 3228233 }, // Pichincha
    { province: 12, value: 921763 }, // Los Rios
  ];

  return (
    <div className="App">
      <body>
        <EcMap
          title="Provincias y sus densidades poblacionales"
          data={data}
        />
      </body>
    </div>
  );
}

export default App;
