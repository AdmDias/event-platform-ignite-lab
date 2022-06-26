import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

export default function Event() {
    return (
        <div>
            <Header />
            <main className="flex">
                <Video />
                <Sidebar />
            </main>
        </div>
    )
}