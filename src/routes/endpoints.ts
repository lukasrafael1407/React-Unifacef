import { RouteProps } from 'react-router-dom';
import Sobre from '../containers/sobre';
import Home from '../containers/home';
import Combustivel from '../containers/combustivel';
import StarWars from '../containers/star-wars';
import StarWarsDetails from '../containers/star-wars-details';

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/star-wars/`, name: 'Star Wars', component: StarWars, exact: true },
  { path: `${publicUrl}/star-wars/:id`, component: StarWarsDetails },
  { path: `${publicUrl}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },  
  { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },  
];