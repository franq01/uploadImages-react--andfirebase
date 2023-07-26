 import {UploadFile} from './firebase/config'
 import {useState} from 'react'

function App() {
  const [file, setfile] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault ();
    try {
    const result = await UploadFile(file);
    console.log(result);
    } catch (error) {
      console.log(error);
      alert ('Fallo al subir la imagen. intente mas tarde')
      
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="" id="" onChange={(e)=> setfile(e.target.files[0])}/>
      <button>
        upload
      </button>
    </form>
  )
}

export default App