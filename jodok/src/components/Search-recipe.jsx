import Lens from '../assets/magnifying-glass-solid.svg';
import '../index.css'

export default function SearchRecipe() {
    <div id="search-recipe">
        <input type="text" name="search" id="search"
        placeholder="Search here..." />
        <a href="">
            <img src={Lens} alt="Search button" />
        </a>
    </div>
}