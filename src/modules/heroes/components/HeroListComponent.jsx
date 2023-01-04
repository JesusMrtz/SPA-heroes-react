import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroItemComponent } from "./index"


export const HeroListComponent = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher) );

  return (
    <div className='row g-3'>
        {
          heroes.map(hero => (
            <div className="col-12 col-sm-6 col-md-4" key={ hero.id }>
              <HeroItemComponent hero={ hero } />
            </div>
          ))
        }
    </div>
  )
}


HeroListComponent.propTypes = {
    publisher: PropTypes.string.isRequired
}