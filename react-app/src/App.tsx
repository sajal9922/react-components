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
import Alert from './components/Alert';
function App() {
  return (
    <div>
      <Alert>
        <span>Hello world</span>
      </Alert>
    </div>
  );
}
export default App;
