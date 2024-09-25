// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'

// const ParticleBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden z-0">
//       <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob" />
//       <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000" />
//       <div className="absolute -top-1/4 left-1/3 w-[700px] h-[700px] bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000" />
//     </div>
//   )
// }

// const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
//   return (
//     <div className={`backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl shadow-lg ${className}`}>
//       {children}
//     </div>
//   )
// }

// export default function Component() {
//   const [currentSection, setCurrentSection] = useState(0)
//   const { scrollYProgress } = useScroll()
//   const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

//   const sections = ['Home', 'Journey', 'Projects', 'Skills', 'Contact']

//   const projects = [
//     {
//       name: 'Leave Management App',
//       shortDesc: 'HR department application',
//       tech: 'Flutter, Firebase',
//       detailedTech: 'Flutter 2.5, Firebase Realtime Database, Firebase Authentication, Provider for state management',
//       year: 2021,
//     },
//     {
//       name: 'Guava Pay Mobile',
//       shortDesc: 'Mobile payment solution',
//       tech: 'Kotlin',
//       detailedTech: 'Kotlin 1.5, Android Jetpack, Retrofit for API calls, Room for local database, Coroutines for async operations',
//       year: 2022,
//     },
//     {
//       name: 'Guava Pay Web Portal',
//       shortDesc: 'Web interface for payment system',
//       tech: 'Angular',
//       detailedTech: 'Angular 12, NgRx for state management, RxJS for reactive programming, Angular Material for UI components',
//       year: 2022,
//     },
//     {
//       name: 'Afrocodemy',
//       shortDesc: 'Learning platform similar to Udemy',
//       tech: 'React',
//       detailedTech: 'React 17, Redux for state management, React Router for navigation, Styled Components for styling',
//       year: 2023,
//     },
//     {
//       name: 'E-Pay',
//       shortDesc: 'Mobile payment application',
//       tech: 'Flutter',
//       detailedTech: 'Flutter 2.8, Bloc pattern for state management, Firebase Cloud Firestore, Firebase Cloud Functions',
//       year: 2023,
//     },
//     {
//       name: 'Propsearch',
//       shortDesc: 'Real estate marketplace',
//       tech: 'Next.js',
//       detailedTech: 'Next.js 12, React 18, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL database',
//       year: 2023,
//     },
//   ]

//   const skills = [
//     { name: 'Flutter', level: 90 },
//     { name: 'Firebase', level: 85 },
//     { name: 'Kotlin', level: 80 },
//     { name: 'Angular', level: 75 },
//     { name: 'React', level: 85 },
//     { name: 'Next.js', level: 80 },
//     { name: 'Python', level: 70 },
//     { name: 'TypeScript', level: 85 },
//     { name: 'Node.js', level: 75 },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       const newSection = Math.floor((window.scrollY / window.innerHeight) + 0.5)
//       setCurrentSection(newSection)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen font-sans">
//       <ParticleBackground />

//       <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
//         <ul className="space-y-4">
//           {sections.map((section, index) => (
//             <li key={section}>
//               <button
//                 onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
//                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSection === index ? 'bg-white' : 'bg-gray-500'}`}
//               >
//                 <span className="sr-only">{section}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <section className="h-screen flex items-center justify-center relative overflow-hidden">
//         <GlassCard className="p-8 max-w-2xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//               Tatenda Mhaka
//             </h1>
//             <p className="text-2xl mb-8 text-gray-300">Innovative Software Developer | Mobile App Developer | Web Developer</p>
//             <motion.button
//               className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-6 rounded-full transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Explore My Work
//             </motion.button>
//           </motion.div>
//         </GlassCard>
//       </section>

//       <section className="min-h-screen flex items-center justify-center relative py-20">
//         <GlassCard className="p-8 max-w-4xl">
//           <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
//           <div className="space-y-8">
//             {[
//               { year: 2018, title: 'The Beginning', description: 'Started with Visual Basic in high school' },
//               { year: 2021, title: 'Expanding Horizons', description: 'Completed Python course on Udemy' },
//               { year: 2021, title: 'Professional Growth', description: 'Joined Afrosoft Holdings' },
//               { year: 2023, title: 'Mastering Web Dev', description: 'Created Propsearch using Next.js' },
//             ].map((event, index) => (
//               <motion.div
//                 key={event.year}
//                 className="flex items-center space-x-4"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <div className="flex-shrink-0 w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                   <span className="text-2xl font-bold">{event.year}</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">{event.title}</h3>
//                   <p className="text-gray-300">{event.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </GlassCard>
//       </section>

//       <section className="min-h-screen flex items-center justify-center relative py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.name}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <GlassCard className="p-6 h-full flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//                     <p className="text-gray-300 mb-4">{project.shortDesc}</p>
//                     <p className="text-sm text-blue-300 mb-4">{project.tech}</p>
//                   </div>
//                   <div>
//                     <details className="text-sm text-gray-400">
//                       <summary className="cursor-pointer hover:text-white transition-colors duration-300">Detailed Tech Stack</summary>
//                       <p className="mt-2">{project.detailedTech}</p>
//                     </details>
//                     <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold mt-4">
//                       {project.year}
//                     </span>
//                   </div>
//                 </GlassCard>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="min-h-screen flex items-center justify-center relative py-20">
//         <GlassCard className="p-8 max-w-4xl w-full">
//           <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
//           <div className="space-y-6">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 className="relative pt-1"
//                 initial={{ opacity: 0, width: 0 }}
//                 whileInView={{ opacity: 1, width: "100%" }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: index * 0.1 }}
//               >
//                 <div className="flex mb-2 items-center justify-between">
//                   <div>
//                     <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-white bg-opacity-20">
//                       {skill.name}
//                     </span>
//                   </div>
//                   <div className="text-right">
//                     <span className="text-xs font-semibold inline-block text-white">
//                       {skill.level}%
//                     </span>
//                   </div>
//                 </div>
//                 <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white bg-opacity-20">
//                   <motion.div
//                     style={{ width: `${skill.level}%` }}
//                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-400 to-purple-600"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: index * 0.1 }}
//                   ></motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </GlassCard>
//       </section>

//       <section className="min-h-screen flex items-center justify-center relative py-20">
//         <GlassCard className="p-8 max-w-md w-full">
//           <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={4}
//               className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             ></textarea>
//             <motion.button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white font-bold py-2 px-4 rounded-md hover:from-blue-500 hover:to-purple-700 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </GlassCard>
//       </section>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
//         body {
//           font-family: 'Inter', sans-serif;
//         }

//         .animate-blob {
//           animation: blob-bounce 7s infinite;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }

//         @keyframes blob-bounce {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }



'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob" />
      <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -top-1/4 left-1/3 w-[700px] h-[700px] bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000" />
    </div>
  )
}

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  )
}

export default function Component() {
  const [currentSection, setCurrentSection] = useState(0)
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  const sections = ['Home', 'Journey', 'Projects', 'Skills', 'Contact']

  const projects = [
    {
      name: 'Leave Management App',
      shortDesc: 'HR department application',
      tech: 'Flutter, Firebase',
      detailedTech: 'Flutter 2.5, Firebase Realtime Database, Firebase Authentication, Provider for state management',
      year: 2021,
      image: '/images/afrosoft.png',
      link: 'https://example.com/leave-management-app'
    },
    {
      name: 'Guava Pay Mobile',
      shortDesc: 'Mobile payment solution',
      tech: 'Kotlin',
      detailedTech: 'Kotlin 1.5, Android Jetpack, Retrofit for API calls, Room for local database, Coroutines for async operations',
      year: 2022,
      image: '/images/guava.png',
      link: 'https://example.com/guava-pay-mobile'
    },
    {
      name: 'Guava Pay Web Portal',
      shortDesc: 'Web interface for payment system',
      tech: 'Angular',
      detailedTech: 'Angular 12, NgRx for state management, RxJS for reactive programming, Angular Material for UI components',
      year: 2022,
      image: '/images/guava.png',
      link: 'https://example.com/guava-pay-web'
    },
    {
      name: 'Afrocodemy',
      shortDesc: 'Learning platform similar to Udemy',
      tech: 'React',
      detailedTech: 'React 17, Redux for state management, React Router for navigation, Styled Components for styling',
      year: 2023,
      image: '/images/afrocodemy.png',
      link: 'https://www.afrocodemy.co.zw'
    },
    {
      name: 'E-Pay',
      shortDesc: 'Mobile payment application',
      tech: 'Flutter',
      detailedTech: 'Flutter 2.8, Bloc pattern for state management, Firebase Cloud Firestore, Firebase Cloud Functions',
      year: 2023,
      image: '/images/e-pay.jpeg',
      link: 'https://example.com/e-pay'
    },
    {
      name: 'Propsearch',
      shortDesc: 'Real estate  website marketplace',
      tech: 'Next.js',
      detailedTech: 'Next.js 12, React 18, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL database',
      year: 2024,
      image: '/images/prop.png',
      link: 'https://example.com/propsearch'
    },
    {
      name: 'Swiftly Mobile Application',
      shortDesc: 'City Council mobile application for easier reports and communication with user',
      tech: 'Flutter',
      detailedTech: 'Flutter, Pocketbase, Firebase, PostgreSQL database',
      year: 2024,
      image: '/images/green.jpeg',
      link: 'https://example.com/propsearch'
    },
  ]

  const skills = [
    { name: 'Flutter', level: 90 },
    { name: 'Firebase', level: 85 },
    { name: 'Kotlin', level: 80 },
    { name: 'Angular', level: 95 },
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 85 },
    
  ]

  useEffect(() => {
    const handleScroll = () => {
      const newSection = Math.floor((window.scrollY / window.innerHeight) + 0.5)
      setCurrentSection(newSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen font-sans">
      <ParticleBackground />

      <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        <ul className="space-y-4">
          {sections.map((section, index) => (
            <li key={section}>
              <button
                onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSection === index ? 'bg-white' : 'bg-gray-500'}`}
              >
                <span className="sr-only">{section}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <GlassCard className="p-8 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Tatenda Mhaka
            </h1>
            <p className="text-2xl mb-8 text-gray-300">Innovative Software Developer | Mobile App Developer | Web Developer</p>
            <motion.button
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </GlassCard>
      </section>

      <section className="min-h-screen flex items-center justify-center relative py-20">
        <GlassCard className="p-8 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-8">
            {[
              { year: 2018, title: 'The Beginning', description: 'Started with Visual Basic in high school' },
              { year: 2021, title: 'Expanding Horizons', description: 'Completed Python course on Udemy' },
              { year: 2021, title: 'Professional Growth', description: 'Joined Afrosoft Holdings' },
              { year: 2021, title: 'Mastering Mobile Dev', description: 'Started Mobile App Development' },
              { year: 2024, title: 'Mastering Web Dev', description: 'Created Propsearch using Next.js' },
            ].map((event, index) => (
              <motion.div
                key={event.year}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">{event.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <img src={project.image} alt={project.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-300 mb-4">{project.shortDesc}</p>
                    <p className="text-sm text-blue-300 mb-4">{project.tech}</p>
                  </div>
                  <div>
                    <details className="text-sm text-gray-400">
                      <summary className="cursor-pointer hover:text-white transition-colors duration-300">Detailed Tech Stack</summary>
                      <p className="mt-2">{project.detailedTech}</p>
                    </details>
                    <div className="flex justify-between items-center mt-4">
                      <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold">
                        {project.year}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <GlassCard className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.shortDesc}</p>
              <p className="text-sm text-blue-300 mb-4">{project.tech}</p>
            </div>
            <div>
              <details className="text-sm text-gray-400">
                <summary className="cursor-pointer hover:text-white transition-colors duration-300">
                  Detailed Tech Stack
                </summary>
                <p className="mt-2">{project.detailedTech}</p>
              </details>
              <div className="flex justify-between items-center mt-4">
                <span className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold">
                  {project.year}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <section className="min-h-screen flex items-center justify-center relative py-20">
        <GlassCard className="p-8 max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative pt-1"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-white bg-opacity-20">
                      {skill.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-white">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white bg-opacity-20">
                  <motion.div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-400 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white font-bold py-2 px-4 rounded-md hover:from-blue-500 hover:to-purple-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </GlassCard>
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/+263780630422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-green-400 transition-colors duration-300"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+263780630422"
                  className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300"
                >
                  <FaPhone className="text-2xl" />
                  <span>+263 780 630 422</span>
                </a>
                <a
                  href="mailto:tatendamhaka22@gmail"
                  className="flex items-center space-x-3 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>tatendamhaka22@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tatenda-mhaka-a9ba671b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-blue-600 transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        .animate-blob {
          animation: blob-bounce 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob-bounce {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  )
}