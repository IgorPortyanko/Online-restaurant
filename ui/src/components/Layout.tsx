import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return(
        <div className='layout'>
            <Header/>
            <main className='outlet'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout