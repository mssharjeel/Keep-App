import react, {useState} from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Notes from './Notes'

function App() {
  const [addItem, setaddItem] = useState([]);

  function addNote(notes){
    // alert("Eys");

    setaddItem((preValue) => {
      return [...preValue, notes]
    })

    console.log(notes)
  }

  function deleteitem(id){
    setaddItem((olditems) => {
      return olditems.filter((arrElem, index) => {
          return index !== id;
      });
  });
  }
  return (
    <>
      <Header/>
      <CreateNote onSelect= {addNote}/>
      {/* <Notes/> */}
      {addItem.map((val, index)=>{
        return(
          <Notes
            key = {index}
            id = {index}
            title = {val.title}
            para = {val.para}
            onSelect = {deleteitem}
          />
        );
      })}
    </>
  );
}

export default App;
