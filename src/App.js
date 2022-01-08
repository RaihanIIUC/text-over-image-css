 import './App.css';
import FormBoxOnImage from './components/FormBoxOnImage';
import TextBlockOverImage from './components/TextBlockOverImage';
import W3SchoolImage from './components/W3SchoolImage';
import W3SchoolTraparentText from './components/W3SchoolTraparentText';
import W3SchoolTraparentTextSelf from './components/W3SchoolTraparentTextSelf';

function App() {
  return (
    <div className="App">
   <W3SchoolImage />
   <W3SchoolTraparentText />
   <W3SchoolTraparentTextSelf />
   <TextBlockOverImage />
   <FormBoxOnImage />

   
    </div>
  );
}

export default App;
