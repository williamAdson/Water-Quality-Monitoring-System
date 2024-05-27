import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthData } from '../../auth/AuthWrapper'

export const Account = () => {
    const { user } = AuthData();

    return (
        <div>
            <h2>Your Account</h2>
            <p>Username: {user.name}</p>
        </div>
    )
}