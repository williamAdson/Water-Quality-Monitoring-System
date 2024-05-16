import { Link, Route, Routes } from 'react-router-dom'
import { AuthData } from '../../auth/AuthWrapper'
import { nav } from './navigation'

export const RenderRoutes = () => {

    const { user } = AuthData();

    return (
        <Routes>
            {
                nav.map((value, index)=>{
                    if(value.isPrivate && user.isAuthenticated){
                        return <Route key={index} path={value.path} element={value.element} />
                    }else if(!value.isPrivate){
                        return <Route key={index} path={value.path} element={value.element} />
                    }else return false
                })
            }
        </Routes>
    )
}

export const RenderMenu = () => {

    const {user, logout} = AuthData();

    const MenuItem = ({value}) => {
        return (
            <div className='navigation-childItem'>
                <Link to={value.path}>{value.name}</Link>
            </div>
        )
    }

    return (
        <div className='navigation-wrapper'>
            { 
            nav.map((value, index)=>{
                if(!value.isPrivate && value.isMenu){
                    return(
                        <MenuItem key={index} value={value} />
                    )
                }else if(user.isAuthenticated && value.isMenu){
                    return (
                        <MenuItem key={index} value={value} />
                    )
                }else return false
            })
            }
            <div>
                { user.isAuthenticated ? <div> <Link to='#' onClick={logout}>Logout</Link></div> : <div> <Link to={'login'}>Login</Link> </div>}
            </div>
        </div>
    )

}