import React from 'react';
import { DescriptionHighlight, MovieName, Info, Overview, ButtonContainer, ButtonsDetails } from '../../UI/Detalhes';
import { ContainerFullScreen } from '../../UI';
import './FilmFeatured.css'

function FilmFeatured({item}){

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push( item.genres[i].name );
    }

    return(
        <ContainerFullScreen style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <div className="destaque--vertical">
                <DescriptionHighlight>
                    <MovieName>{item.original_name}</MovieName>
                    <Info className="destaque--info">
                        <div className="destaque--points">{item.vote_average} bodov</div>
                        <div className="destaque--year">{firstDate.getFullYear()}</div>
                        <div className="destaque--seasons">{item.number_of_seasons} sezóna{item.number_of_seasons > 1 && 's'}</div>
                    </Info>
                    <Overview className="destaque--description">{item.overview}</Overview>
                    <ButtonContainer>
                        <ButtonsDetails primary href={`/watch/${item.id}`}>&#9658; Sledujte</ButtonsDetails>
                        <ButtonsDetails className="destaque--myListButton" href={`/list/add/${item.id}`}>&#x2b; Môj zoznam</ButtonsDetails>
                    </ButtonContainer>
                    <div className="destaque--genres">
                        <strong>Žánre:</strong> {genres.join(', ')}
                    </div>
                </DescriptionHighlight>
            </div>
        </ContainerFullScreen>
    );
}

export default FilmFeatured;