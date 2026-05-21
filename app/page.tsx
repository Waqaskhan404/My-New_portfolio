import Preloader from '@/components/Preloader'
import ScrollProgress from '@/components/ScrollProgress'
import CursorTrail from '@/components/CursorTrail'
import CustomCursor from '@/components/CustomCursor'
import Particles from '@/components/Particles'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import SocialSidebar from '@/components/SocialSidebar'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CursorTrail />
      <CustomCursor />
      <Particles />
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <SocialSidebar />
      <StructuredData />
    </>
  )
}
