import { heroes } from "../data/heroes";


export function getHeroesByPublisher( publisher ) {
    const validPublisher = ['DC Comics', 'Marvel Comics'].includes( publisher );
    if( !validPublisher ) throw new Error(`${ publisher } no existe`);

    return heroes.filter(heroe => heroe.publisher === publisher);
}