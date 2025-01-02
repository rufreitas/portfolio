import Box from "./components/about/Box"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Project from "./components/projects/Project"

const App: React.FC = () => {
  return (
    <div className="w-[1100px] m-auto">
        <Navbar />
      <div id="home" className="pb-20">
        <Hero />
      </div>

      <div id="about" className="space-y-36 pb-20 pt-28">
        <div className="flex justify-between">
        <Box title={'about'} text={'Hello there! I’m Ruhan Freitas, a Software Engineer passionate about turning ideas into robust and scalable digital solutions. With a strong focus on full-stack development, I am always on the lookout for new challenges that allow me to learn and innovate. '} />
        <Box title={'skills'} t1={'languages:'} t1Content={'javaScript, typeScript, python'} t2={'technologies:'} t2Content={'html, css, tailwindCSS, next.js, node.js, react'} t3={'databases:'} t3Content={'mongodb, mysql, postgresql'} />
        </div>
        <div className="flex justify-between">
        <Box title={'contact'} text={`If you’d like to get in touch, feel free to contact me either by email or through my social media profiles. I’m always open to connecting, whether it’s to discuss ideas, collaborate on projects, or simply have a conversation. email: ruhanfreitas@gmail.com`} />
        <Box title={'education'} t1={'Anhanguera'} t2={'Degree:'} t2Content={'bachelor of software engineering'} t3={'period:'} t3Content={'2024 - 2027'} />
        </div>
        
      </div>

      <div id="projects" className="space-y-20 pt-32 pb-24">
        <div className="flex justify-between">
          <Project image='./image.png' title='chernobly' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel scelerisque ligula. Suspendisse odio nunc, mattis nec ultricies et, rhoncus nec eros. Donec pharetra eros eu risus imperdiet eleifend.' />
          <Project image='./image.png' title='chernobly' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel scelerisque ligula. Suspendisse odio nunc, mattis nec ultricies et, rhoncus nec eros.' />
        </div>
        <div className="flex justify-between">
          <Project image='./image.png' title='chernobly' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel scelerisque ligula.' />
          <Project image='./image.png' title='chernobly' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel scelerisque ligula. Suspendisse odio nunc, mattis nec ultricies et, rhoncus nec eros. Donec pharetra eros eu risus imperdiet eleifend.' />
        </div>
        
      </div>
      
    </div>
  )
}

export default App