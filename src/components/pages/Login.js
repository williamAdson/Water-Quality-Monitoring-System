import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../auth/AuthWrapper';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = AuthData();
    const [ formData, setFormData ] = useReducer((formData, newItem) => { 
        return ( 
            {...formData, ...newItem} 
        )}, {userName: "", password: ""}
    )
    const [ errMsg, setErrMsg ] = useState(null)

    const doLogin = async () => {
        try{
            await login(formData.userName, formData.password)
            navigate('/account')
        }catch(err){
            setErrMsg(err)
        }
    }

    return (
        <div className='login-wrapper'>
            <div>
                <form>
                    <h2>用户登录</h2>
                    <input 
                        value={formData.userName}
                        onChange={(e)=>setFormData({userName: e.target.value})}
                        type='text' placeholder='输入用户名' /> <br />
                    <input 
                        value={formData.password}
                        onChange={(e)=>setFormData({password: e.target.value})}
                        type='password' placeholder='输入密码'/> <br />
                    <button onClick={doLogin}>登录</button>
                    <a href='#' className='login-link'>忘记密码？</a>
                    <div>
                        {errMsg ? {errMsg} : null }
                    </div>
                </form>
            </div>
        </div>
    )
}