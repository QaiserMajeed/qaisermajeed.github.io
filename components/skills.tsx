
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Cloud, Zap } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 93 },
        { name: 'HTML/CSS', level: 94 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Backend Development',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C#/.NET', level: 95 },
        { name: 'ASP.NET MVC', level: 93 },
        { name: 'Web API', level: 92 },
        { name: 'Node.js', level: 82 },
        { name: 'Entity Framework', level: 90 },
        { name: 'SignalR', level: 85 },
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Database & Storage',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQL Server', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Redis', level: 75 },
      ]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Azure Cloud', level: 85 },
        { name: 'Azure Functions', level: 83 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Git/TFS', level: 87 },
      ]
    },
  ]

  const tools = [
    'Visual Studio',
    'VS Code',
    'Azure DevOps',
    'Postman',
    'Figma',
    'Git',
    'Docker',
    'Jira'
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Skills & <span className="holographic">Technologies</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="relative group tilt-card"
            >
              <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden tilt-card-inner scanlines">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-heading font-bold mb-8">Tools & Software</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="px-6 py-3 rounded-full glass border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-default magnetic-button"
              >
                <span className="font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '20+', label: 'Technologies' },
            { value: '50+', label: 'Projects' },
            { value: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
