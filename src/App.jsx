import { Header } from './components/header'
import { Main } from './components/main'
import { Nav } from './components/nav'

function App() {
    return (
        <div className='h-screen w-full bg-white'>
            <div className='flex flex-col h-screen w-full sg:flex-row-reverse'>
                <div className='w-full flex justify-end flex-col h-full '>
                    <Header />
                    <Main />
                </div>
                <Nav />
            </div>
        </div>
    )
}

export default App
