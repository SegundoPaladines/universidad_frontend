import React from 'react';
import './App.css';
import { facultades } from './api/facultades';
import { TypeFacultad } from './interfaces/facultad.interface';
import { CardComponent } from './components';

function App() {

  const [allFacultades, setAllFacultades] = React.useState<TypeFacultad[] | null>(null);

  React.useEffect(()=>{
    facultades.getAll().then((r) => {setAllFacultades(r.data)}).catch((e) =>{console.error(e)});
  }, []);

  return (
    <div className="App">
        <div>
        {
          allFacultades?.length !== 0 ? (
          <div>
            {
              allFacultades?.map((f)=>(
                <CardComponent 
                  pk={f.pk}
                  universidad={f.universidad}
                  name={f.name}
                  logo={f.logo}
                  pub_date={f.pub_date}
                />
              ))
            }
          </div>):""
        }
        </div>
    </div>
  );
}

export default App;
