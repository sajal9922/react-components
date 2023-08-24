// import ListGroup from './components/ListGroup';

// function App() {
//   let items = ['Kokkola', 'Turku', 'Helsinki', 'Vaasa', 'Oulu'];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// import Alert from './components/Alert';
// function App() {
//   return (
//     <div>
//       <Alert>
//         <span>Hello world</span>
//       </Alert>
//     </div>
//   );
// }
// export default App;

import Alert from './components/Alert';
import Button from './components/Button';
import React, { useState } from 'react';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>Alert!</strong>
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        React Button
      </Button>
    </div>
  );
}

export default App;
