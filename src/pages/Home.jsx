import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home  = ()=>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden " >
            
            {/* Theme Toggle*/}
            <ThemeToggle/>

            {/*BackGround Effects*/}
            <StarBackground/>

            {/* NavBar */}
            <Navbar/>

            {/* Main Content*/}
            <main>
                <HeroSection/>
                <AboutSection/>
                <ProjectsSection/>
                <ContactSection/>

            </main>

            {/* Footer */}
            <Footer/>

        </div>
    );
}