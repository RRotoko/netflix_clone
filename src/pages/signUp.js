import React from 'react';
import homeImage from'../assets/images/Tela-Login.jpg';
import { HeaderContainer, ContainerFullScreen, Shadows, FormContainer, EnterButton, HomeFormContainer } from "../components/UI";
import { FormH1, FormInput, FormLoginContainer } from '../components/UI/Forms';

function SignUp() {
    return (
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
                            <FormH1>Registrovať</FormH1>
                            <FormInput placeholder={'Používateľ'} type={'name'} name={'username'}/>
                            <FormInput placeholder={'Email'} type={'email'} name={'email'}/>
                            <FormInput placeholder={'Heslo'} type={'password'} name={'password'}/>
                            <FormInput placeholder={'Potvrďte heslo'} type={'password'} name={'confirmpassword'}/>
                            <EnterButton className='form' type={'submit'} name={'register'}>Registrovať</EnterButton>
                            <HomeFormContainer>
                                <input type={'checkbox'} defaultChecked/>
                                <label style={{color: '#8c8c8c'}}>Pamätáš si ma</label>
                            </HomeFormContainer>
                        </form>
                    </FormLoginContainer>
                </FormContainer>
                <Shadows />
            </ContainerFullScreen>
        </>
    );
}

export default SignUp;