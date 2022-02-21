import React from "react";
import homeImage from'../assets/images/Tela-Login.jpg';
import { HeaderContainer, ContainerFullScreen, Shadows, EnterButton, HomeContainer, HomeHead, FormContainer, HomeSubhead, FormTitle, HomeFormContainer, HomeInput, HomeButton } from "../components/UI";

function Start() {

    return (
        <>
            <HeaderContainer>
                <div className="header--logo">
                    <a href="/browse">
                        <img alt="logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
                    </a>
                </div>
                <EnterButton href={'/login'}>Nastúpiť</EnterButton>
            </HeaderContainer>
            <ContainerFullScreen style={{
                backgroundImage: `url(${homeImage})`
            }}>
                <HomeContainer>
                    <FormContainer>
                        <HomeHead>Filmy, seriály a ďalšie. Neobmedzene.</HomeHead>
                        <HomeSubhead>Sledujte kdekoľvek chcete. Zrušte kedykoľvek budete chcieť.</HomeSubhead>
                        <form 
                            onSubmit={(event)=>{
                                event.preventDefault();
                            }}
                        >
                            <FormTitle>Ste pripravení pozerať? Zadajte svoj e-mail na vytvorenie alebo reštartovanie odberu.</FormTitle>
                            <HomeFormContainer>
                                <HomeInput type={'email'} name={'email'} placeholder={'Email'} autoComplete="email"></HomeInput>
                                <HomeButton type="submit"><span>Poďme</span></HomeButton>
                            </HomeFormContainer>
                        </form>
                    </FormContainer>
                </HomeContainer>
                <Shadows />
            </ContainerFullScreen>
        </>
    );
}

export default Start;