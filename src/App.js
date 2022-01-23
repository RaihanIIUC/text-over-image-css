 import './App.css';
import BlockSticker from './components/BlockSticker';
import ImageBlockOverImage from './components/ImageBlockOverImage';
  import TextBlockOverImage from './components/TextBlockOverImage';
import W3SchoolImage from './components/W3SchoolImage';
import W3SchoolTraparentText from './components/W3SchoolTraparentText';
import W3SchoolTraparentTextSelf from './components/W3SchoolTraparentTextSelf';
import ZindexImageOverImage from './components/ZindexImageOverImage';
 
function App() {
  return (
    <div className="App">
   <W3SchoolImage />
   <W3SchoolTraparentText />
   <BlockSticker />
   <W3SchoolTraparentTextSelf />
   <TextBlockOverImage />
    <ImageBlockOverImage />
    {/* <ZindexImageOverImage /> */}
    </div>
  );
}

export default App;
