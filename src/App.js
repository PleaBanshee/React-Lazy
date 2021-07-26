import React, { useState, Suspense } from 'react';
import './App.css';

import Page1 from './Components/Page1';

function App() {
  const [route,routeChange] = useState('page1');
  // React.lazy: lets you render a dynamic import as a regular component
  const Page2 = React.lazy(() => import("./Components/Page2"));
  const Page3 = React.lazy(() => import("./Components/Page3"))

  const onRouteChange = (route) => {
    routeChange(route); 
  }

  if (route === 'page1') {
    return <Page1 onRouteChange={onRouteChange} />
  } else if (route === 'page2') {
    return (
      // Lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator)
      // while we’re waiting for the lazy component to load.
      <Suspense fallback={<div>Loading...</div>}>
        <Page2 onRouteChange={onRouteChange} />
      </Suspense>
    )
  } else {
    return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page3 onRouteChange={onRouteChange} />
    </Suspense>
    )
  }
}

export default App;
