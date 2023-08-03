import { useState } from "react"


export default function Message() {
    const [open, setOpen] = useState(false)

    return (
        <main className="p-6">
            <div className="h-96 flex flex-col items-center gap-8">

                <p>Are you Jodok? If yes, press the button.</p>
                <button
                    className="relative bg-denim p-3 w-full sm:w-24 rounded-md hover:text-white"
                    onClick={() => { setOpen(!open) }}
                >
                    I am Jodok.
                </button>
                {open && (
                    <div className="text-sm p-4 max-w-xs sm:max-w-xl absolute top-56">
                        <h1 className="pb-2">Hi, my lovely Jodoko,</h1>
                        <p className="font-light">
                            I am proud to show you this project.
                            It was made entirely for you :)<br />
                            I hope you like this online recipe book,
                            it might reminds you of one of the things
                            we appreciate the most in our lives,
                            cooking together!<br />
                            Thank you for being supportive, loving and caring. You are the love of my life!<br />
                            Ich liebe dich sehr,<br /><br />
                            deine Karina.
                        </p>
                    </div>
                )}
            </div>
        </main>

    )
}