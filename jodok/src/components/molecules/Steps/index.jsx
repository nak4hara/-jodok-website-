import Subtitle from "../../atoms/Subtitle"


export default function Steps({ steps, subtitle }) {
    return (
        <section className="pb-4 flex flex-col items-center w-full gap-3 sm:w-3/5">
            <Subtitle>
                {subtitle}
            </Subtitle>
            <ol className="list-decimal list-inside">
                {steps.map((step, index) => { return(
                    <li key={index} className=" text-eerie-black font-light">
                        {step}
                    </li>
                )
                })}
            </ol>
        </section>
    )
}