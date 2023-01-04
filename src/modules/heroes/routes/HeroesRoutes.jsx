import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "../../shared/components";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";


export const HeroesRoutes = () => {
  return (
    <>
        <NavbarComponent />
        <div className="container">
            <Routes>
                <Route path="superheroes/marvel" element={ <MarvelPage /> } />
                <Route path="superheroes/dc" element={ <DcPage/> } />
                <Route path="superheroes/search" element={ <SearchPage/> } />
                <Route path="superheroes/:id" element={ <HeroPage/> } />
                <Route path="/" element={ <Navigate to="superheroes/marvel" /> } />
                <Route path="superheroes/*" element={ <Navigate to='superheroes/marvel' /> } />
            </Routes>
        </div>
    </>
  )
}
