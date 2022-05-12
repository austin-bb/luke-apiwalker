
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planet from './views/Planet';

function App() {
    
    return (
        <BrowserRouter>
            <h1 className='App'>Luke APIWalker</h1>
            <HeaderForm />

            <Routes>
                
                <Route path='/people/:id' element={<People />} />
                <Route path='/planets/:id' element={<Planet />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
