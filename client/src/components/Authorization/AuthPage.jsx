import './AuthPage.scss'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATALOG } from '../../utils/const';

const AuthPage = () => {

    const [isAuth, setIsAuth] = useState(false)

    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/catalog')
    }

    return (
        <section className='main-block' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', width: '100%'}}>
            <div className='form-box'>
                <div className="form-value">
                    <form action="">
                        {
                            isAuth == true
                            ?
                            <h2 className='title'>Login</h2>
                            :
                            <h2 className='title'>Registration</h2>
                        }
                        <div className="inputbox">
                            <input type='email' required/>
                            <label htmlFor="">E-mail</label>
                        </div>
                        <div className="inputbox">
                            <input type='password' required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="forget">
                            {
                                isAuth == true
                                ?
                                <label>Нет аккаунта ?<a style={{marginLeft: '10px'}} href='#' onClick={() => setIsAuth(false)}>Зарегестрируйтесь!</a></label>
                                :
                                <label>Есть аккаунт ?<a style={{marginLeft: '10px'}} href='#' onClick={() => setIsAuth(true)}>Войдите!</a></label>
                                
                            }
                            
                            
                        </div>
                        {
                            isAuth == true
                            ?
                            <button className='btn-log' onClick={navigateTo}>Sign in</button>
                            :
                            <button className='btn-log' onClick={navigateTo}>Sign up</button>
                        }
                        
                        <Link to={CATALOG} style={{textDecoration: 'none'}}>
                            <div className="register">
                                <p><a href='#'>Sbook</a></p>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AuthPage;