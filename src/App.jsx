import { Header } from './components/header'
import { Main } from './components/main'
import { Nav } from './components/nav'

function App() {
    return (
        <div className='bg-cyan-900 flex flex-col m-auto max-w-7xl h-[100vh] w-full sg:flex-row-reverse'>
            <div className='w-full flex justify-end flex-col h-full '>
                <Header />
                <Main />
            </div>
            <Nav />
        </div>
    )
}

// #FEFDFD #B4C3C7 #1C1433 #4A3E5C #C45D59 #F2C9B0

export default App
