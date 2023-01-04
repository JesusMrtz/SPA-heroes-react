import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const HeroItemComponent = ({ hero }) => {
  const heroImageURL = `/assets/img/heroes/${ hero.id }.jpg`;

  return (
      <div className="card">
        <div className="row no-gutter">
          <div className="col-12 col-md-4">
            <img className='card-img'loading='lazy' src={ heroImageURL } alt={ hero.superhero } />
          </div>
          <div className="col">
            <div className="card-body text-center">
              <h2 className='card-title'>{ hero.superhero }</h2>
              <p className='card-text'>
                { hero.alter_ego }
              </p>
              {
                ( hero.alter_ego !== hero.characters ) && (<p>{ hero.characters }</p>)
              }
              <p className="card-text">
                <small className='text-muted'>{ hero.first_appearance }</small>
              </p>
              <Link to={`/superheroes/${ hero.id }`}>
                Más..
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}


HeroItemComponent.propTypes = {
  hero: PropTypes.object.isRequired
}