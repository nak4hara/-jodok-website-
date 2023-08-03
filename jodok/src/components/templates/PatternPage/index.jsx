import { Outlet } from "react-router-dom";

export default function PatternPage() {
    return(
        <main className="pb-16">
            <Outlet />
        </main>
    )
}