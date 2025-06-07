
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  const skills = [
    { name: 'C#/.NET', level: 95, color: 'bg-purple-500' },
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript/TypeScript', level: 92, color: 'bg-yellow-500' },
    { name: 'ASP.NET MVC/Web API', level: 93, color: 'bg-green-500' },
    { name: 'SQL Server', level: 88, color: 'bg-red-500' },
    { name: 'Azure Cloud', level: 85, color: 'bg-indigo-500' },
    { name: 'MongoDB', level: 80, color: 'bg-emerald-500' },
    { name: 'Node.js', level: 82, color: 'bg-lime-500' },
    { name: 'Entity Framework', level: 90, color: 'bg-orange-500' },
    { name: 'Git/TFS', level: 87, color: 'bg-pink-500' },
    { name: 'HTML/CSS', level: 94, color: 'bg-cyan-500' },
    { name: 'DevOps', level: 78, color: 'bg-violet-500' },
  ]

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const animated: { [key: string]: number } = {}
        skills.forEach(skill => {
          animated[skill.name] = skill.level
        })
        setAnimatedSkills(animated)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [inView, skills])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${animatedSkills[skill.name] || 0}%` : 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">Frontend</h3>
            <p className="text-sm text-muted-foreground">
              React, JavaScript, TypeScript, HTML5, CSS3, jQuery, Responsive Design
            </p>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">Backend</h3>
            <p className="text-sm text-muted-foreground">
              C#/.NET, ASP.NET MVC, Web API, Node.js, Entity Framework, SignalR
            </p>
          </div>
          
          <div className="text-center p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3">Cloud & Tools</h3>
            <p className="text-sm text-muted-foreground">
              Azure Functions, Azure AD, SQL Server, MongoDB, Git/TFS, DevOps
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
