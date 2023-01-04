import { heroes } from "../data/heroes";


export function getHeroesByName(search) {
    search = search.toLowerCase().trim();

    if ( !search.length ) return [];
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(search) );
}