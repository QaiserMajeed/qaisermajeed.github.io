
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "7+ Years Experience",
      description: "Professional software development"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "MSc Advanced Computer Science",
      description: "University of Chester (2022-2023)"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Current Role",
      description: "Full Stack Developer at Insurwave"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Expertise",
      description: ".NET, React, Azure, and more"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies and cloud solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-4">
              <div className="relative w-full h-full bg-muted rounded-xl overflow-hidden">
                <Image
                  src="https://i.ytimg.com/vi/JTckTjJAE6s/maxresdefault.jpg"
                  alt="Qaisar Majeed working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Full Stack Developer with over 7 years of experience in building 
                robust, scalable web applications. Currently working at <span className="text-primary font-semibold">Insurwave</span> in 
                London, I specialize in creating end-to-end solutions using modern technologies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across <span className="text-primary font-semibold">C#/.NET</span>, 
                <span className="text-primary font-semibold"> React.js</span>, 
                <span className="text-primary font-semibold"> JavaScript/TypeScript</span>, and 
                <span className="text-primary font-semibold"> Azure cloud services</span>. I'm passionate about 
                writing clean, maintainable code and delivering exceptional user experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I hold an <span className="text-primary font-semibold">MSc in Advanced Computer Science</span> from 
                the University of Chester and continuously stay updated with the latest industry trends 
                and best practices in software development.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-background rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-xs mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
