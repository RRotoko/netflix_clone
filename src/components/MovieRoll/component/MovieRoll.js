import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ItemMovie, Title } from '../../UI';
import './MovieRoll.css'

/**
 * 
 * @param { object } info_movies Objekt obsahujúci názov zoznamu a položky, ktoré pochádzajú z API
 * @returns Vráti komponent reakciu, ktorá bude zoznamom obsahujúcim filmy/seriály tejto kategórie
 */
function MovieRoll({ title, items, onClickMovie }) {
    const [scrollX, setScrollX] = useState(0);

    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth) / 2; // získanie šírky obrazovky

        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth) / 2;
        let screenW = -Math.round(window.innerWidth);
        let listW = -items.results.length * 150;

        if (x < (listW - screenW)) {
            x = (listW - screenW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <Title>{title}</Title>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => {
                        return (
                            <ItemMovie key={key} onClick={() => { onClickMovie(item) }}>
                                <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                            </ItemMovie>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default MovieRoll;