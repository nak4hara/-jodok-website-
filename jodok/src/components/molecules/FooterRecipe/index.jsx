
export default function FooterRecipe({ originalURL, children }) {
    return (
        <footer className="text-center text-chestnut hover:text-denim p-3 leading-relaxed">
            <a target="_blank" href={originalURL}>
                {children}
            </a>
        </footer>
    )
}