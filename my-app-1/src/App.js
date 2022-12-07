import { createRef, useEffect } from 'react';
import './App.css';
import IFrame from './components/IFrame/IFrame';
import { NavigationBar } from './components/NavigationBar';
import { broadcaster, listenerCreator } from './lib/messaging';

const frameProps = [
  {
    title: 'Child App 1',
    src: 'http://localhost:3001',
    style: {
      width: '50%',
      height: '100vh'
    },
  },
  {
    title: 'Child App 2',
    src: 'http://localhost:3002',
    style: {
      width: '50%',
      height: '100vh'
    },
  },
];

function App() {
  const ref = createRef();

  useEffect(() => {
    listenerCreator(window, e => console.log(e));

    //Sending message 
    broadcaster(window, {type: 'container', name: 'Parent'});
  }, []);

  return (
    <div className="App">
      <NavigationBar>
        <button>Child A</button>
        <button>Child B</button>
      </NavigationBar>
      <header className="App-header" style={{flexDirection:'row'}}>
        {
          frameProps.map((e, i) => {
            return <IFrame key={'child' + i} {...e} />
           })
        }
      </header>
    </div>
  );
}

export default App;
