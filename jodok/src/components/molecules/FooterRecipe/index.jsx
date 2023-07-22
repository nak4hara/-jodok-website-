

export default function FooterRecipe({ originalURL }) {
    return (
        <footer>
            <a target="_blank" href={originalURL}>
                Click here to see the original recipe
            </a>
        </footer>
    )
}