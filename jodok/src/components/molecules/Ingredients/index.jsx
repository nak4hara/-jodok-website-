import Subtitle from "../../atoms/Subtitle"


export default function Ingredients({ listIngredients, subtitle }) {
    return (
        <section className="pb-4 flex flex-col items-center gap-3">
            <Subtitle>
                {subtitle}
            </Subtitle>

            <table className="table-auto font-light">
                <tbody className="p-2">
                    {listIngredients.map((ingredient, index) => {
                        return (
                            <tr key={index} className="border-b-[1px] leading-relaxed">
                                <td className="pr-5 flex justify-end">{ingredient.quantity}</td>
                                <td>{ingredient.name}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </section>
    )
}