import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../shared/hooks/useForm"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";
import { HeroItemComponent } from "../components/HeroItemComponent";


export const SearchPage = () => {
  const navigate = useNavigate();
  /** se usa el useLocation para leer los query parameters ?q */
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const showErrorAlert = (q.length && !heroes.length)

  function onSearchSubmit(e) {
    e.preventDefault();
    const value = searchText.trim();
    navigate(`?q=${ value }`);
  }

  return (
    <>
      <h1>Buscador de heróes</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-5">
          <h2>Buscando</h2>
          <hr />
          <form onSubmit={ onSearchSubmit } data-testid='form'>
            <input type="text" placeholder="Buscar heroe" className="form-control" name="searchText" autoComplete="off" value={ searchText } onChange={ onInputChange } />
            <button type="submit" className="btn btn-outline-primary mt-1">Buscar</button>  
          </form>
        </div>
        <div className="col-12 col-sm-7">
          <h2>Results</h2>
          <hr />
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: q !== '' ? 'none' : 'block' }}>
            Buscar un heroe
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showErrorAlert ? 'block': 'none' }} data-testid='alert-danger'>
            No se encontró el heroe <strong>{ q }</strong>
          </div>
          {
            heroes.map(hero => (
              <div className="col-12 mb-4" key={ hero.id }>
                <HeroItemComponent hero={ hero } />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
