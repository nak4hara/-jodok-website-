import { Outlet } from "react-router-dom";

export default function PatternPage() {
    return(
        <main className="pt-20 pb-16">
            <Outlet />
        </main>
    )
}