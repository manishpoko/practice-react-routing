//lazy loading incorporated using react suspense and react lazy

import {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))

function App() {

    return (
        <div>
            
            <BrowserRouter>
            <Appbar />
                <Routes>
                    <Route path = "/dashboard" element = {<Suspense fallback = {"loading...."}> <Dashboard /> </Suspense>} />

                    <Route path ="*" element = {<Suspense fallback = {"loading, wait..."}> <Landing /> </Suspense>} />
                </Routes>
            </BrowserRouter>

        </div>
        
    )
}

function Appbar() {
    const navigate = useNavigate();

    return <div>
        <div>
                <button onClick={() => {
                    navigate ('/');
                }}> landing page</button>

                <button onClick={() => {
                    navigate('/dashboard');
                }}>dashboard</button>
        </div>

    </div>
}

export default App;