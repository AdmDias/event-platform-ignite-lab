import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <main className="flex flex-1">
                {
                    slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div> 
                }
                <Sidebar />
            </main>
            <Footer />
        </div>
    )
}