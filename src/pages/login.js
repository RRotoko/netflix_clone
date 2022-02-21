import React, { useContext, useState } from 'react';
import homeImage from'../assets/images/Tela-Login.jpg';
import { HeaderContainer, ContainerFullScreen, Shadows, FormContainer, EnterButton, HomeFormContainer, FlexDiv } from "../components/UI";
import { FormH1, FormInput, FormLoginContainer } from '../components/UI/Forms';
import { GeneralContext } from '../context/LoginContext';

function Login() {
    const { validarEmail } = useContext(GeneralContext);
    const [email, setEmail] = useState('');
    const [emailWarning, setEmailWarning] = useState({});
    return(
        <>
            <HeaderContainer>
                <div className="header--logo">
                    <a href="/browse">
                        <img alt="logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
                    </a>
                </div>
            </HeaderContainer>
            <ContainerFullScreen style={{
                backgroundImage: `url(${homeImage})`
            }}>
                <FormContainer>
                    <FormLoginContainer>
                        <form 
                            onSubmit={(event)=>{
                                event.preventDefault();
                            }}
                        >
                            <FormH1>Nastúpiť</FormH1>
                            <FormInput
                                placeholder={'Email'}
                                type={'email'}
                                name={'email'}
                                value={email}
                                onChange={(event)=>{
                                    setEmail(event.target.value);
                                }}
                                onBlur={()=>{
                                    setEmailWarning(validarEmail(email));
                                }}
                            />
                            {emailWarning.valido && <span style={{color: 'red', marginBottom: '5px'}}>{emailWarning.message}</span>}
                            <FormInput placeholder={'Senha'} type={'password'} name={'password'}/>
                            <EnterButton className='form' type={'submit'} name={'entrar'}>Nastúpiť</EnterButton>
                            <HomeFormContainer>
                                <input type={'checkbox'} defaultChecked/>
                                <label style={{color: '#8c8c8c'}}>Pamätáš si ma</label>
                            </HomeFormContainer>
                            <FlexDiv>
                                <p>Ste tu nový?</p>
                                <a href='/signup'>Odoberaj teraz</a>
                            </FlexDiv>
                        </form>
                    </FormLoginContainer>
                </FormContainer>
                <Shadows />
            </ContainerFullScreen>
        </>
    );
}

export default Login;