
import AccessData from './AccessData';
import AxiosAPI from './API_CALL/AxiosAPI';
import AxiosApiClass from './API_CALL/AxiosApiClass';
import FetchAPI from './API_CALL/FetchAPI';
import './App.css';
// import ComponentA from './components/ComponentA';
import ComponentA from './component2/ComponentA';
import ChildForm from './Component3/ChildForm';
import NoteState from './ContextAPI/NoteState';
import Parent from './Form/Parent';
import SimpleModal from './Models/SimpleModal';

import AxiosGet from './NewsAPI_Axios/AxiosGet';


function App() {
  return (
    <>
      <h2>Hello APP</h2>
      <NoteState>
    {/* <ComponentA data = "Data From Parent to child"/> */}
    {/* <ComponentA/> */}
    {/* <Parent/> */}
    {/* <ChildForm/> */}
    {/* <FetchAPI/> */}
    {/* <AxiosAPI/> */}
    {/* <AxiosApiClass/> */}
    {/* <AxiosGet/> */}
    {/* <SimpleModal/> */}
    
    </NoteState>
    <AccessData/>
    </>
    
  );
}

export default App;
