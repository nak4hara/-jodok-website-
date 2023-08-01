import './RecipeImage.module.css'
import classnames from 'classnames';

export default function RecipeImage({ srcImage, altImage, sizeCard }) {
    const classes = classnames('recipe-image',{
        '.size-card': sizeCard})
    return (
        <img
            className={classes}
            src={srcImage}
            alt={altImage}
        />
    )
}