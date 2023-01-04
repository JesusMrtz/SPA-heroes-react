import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {
  const navigate = useNavigate();
  /** Obtener los parámetros de la URL */
  const { id } = useParams();
  const hero =  useMemo(() => getHeroById(id), [ id ]);

  
  useEffect(() => {
    if ( !hero ) {
      return onNavigateBack();
    }
  }, []);

  if ( !hero ) {
    return onNavigateBack();
  }
  
  const heroImageURL = `/assets/img/heroes/${ id }.jpg`;

  function onNavigateBack() {
    navigate(-1);
    return;
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-sm-4 mb-2 mb-sm-0">
          <img src={ heroImageURL } alt={ hero.superhero } className="img-thumbnail animate__animated animate__fadeInLeft" loading="lazy" />
        </div>
        <div className="col text-center animate__animated animate__fadeIn">
          <h1>{ hero.superhero }</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Alter ego: </strong> { hero.alter_ego }
            </li>
            <li className="list-group-item">
              <strong>Publisher: </strong> { hero.publisher }
            </li>
            <li className="list-group-item">
              <strong>First appearance: </strong> { hero.first_appearance }
            </li>
          </ul>
          <h2 className="mt-3">Characters</h2>
          <p>
            { hero.characters }
          </p>
          <button className="btn btn-outline-primary" onClick={ onNavigateBack } >
            Regresar
          </button>
        </div>
      </div>
    </>
  )
}