
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Insurwave',
      location: 'London, England, United Kingdom',
      period: 'Aug 2023 - Present',
      type: 'Full-time',
      description: 'Leading full-stack development initiatives for innovative insurance technology solutions.',
      responsibilities: [
        'Developing and maintaining scalable web applications using .NET and React',
        'Implementing Azure cloud solutions for improved performance and reliability',
        'Collaborating with cross-functional teams to deliver high-quality software',
        'Mentoring junior developers and conducting code reviews',
        'Optimizing application performance and implementing best practices'
      ],
      technologies: ['C#/.NET', 'React', 'Azure', 'SQL Server', 'TypeScript'],
      current: true
    },
    {
      id: 2,
      title: 'Senior Software Developer',
      company: 'Previous Company',
      location: 'London, England, United Kingdom',
      period: 'Jan 2021 - Jul 2023',
      type: 'Full-time',
      description: 'Specialized in building enterprise-level applications and leading development teams.',
      responsibilities: [
        'Architected and developed complex web applications using .NET framework',
        'Led a team of 5 developers in agile development environment',
        'Implemented CI/CD pipelines and DevOps practices',
        'Designed and optimized database schemas and queries',
        'Integrated third-party APIs and services'
      ],
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'Azure'],
      current: false
    },
    {
      id: 3,
      title: 'Software Developer',
      company: 'Tech Solutions Ltd',
      location: 'London, England, United Kingdom',
      period: 'Jun 2018 - Dec 2020',
      type: 'Full-time',
      description: 'Focused on full-stack development and client-facing application development.',
      responsibilities: [
        'Developed responsive web applications using modern frameworks',
        'Collaborated with UX/UI designers to implement user-friendly interfaces',
        'Maintained and enhanced existing applications',
        'Participated in requirement analysis and technical documentation',
        'Provided technical support and troubleshooting'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'HTML/CSS'],
      current: false
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'StartUp Innovations',
      location: 'London, England, United Kingdom',
      period: 'Sep 2016 - May 2018',
      type: 'Full-time',
      description: 'Started my professional journey focusing on web development and learning industry best practices.',
      responsibilities: [
        'Assisted in developing web applications using various technologies',
        'Learned and implemented coding standards and best practices',
        'Participated in team meetings and project planning sessions',
        'Contributed to testing and quality assurance processes',
        'Gained experience in version control and collaborative development'
      ],
      technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'jQuery'],
      current: false
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7+ years of progressive experience in software development and team leadership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                experience.current ? 'bg-primary' : 'bg-muted-foreground'
              }`} />

              {/* Content card */}
              <div className="ml-20 bg-background rounded-lg shadow-lg border border-border p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-primary font-medium mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      {experience.company}
                    </div>
                  </div>
                  
                  {experience.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Current Role
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {experience.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {experience.location}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-muted/30 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
            <GraduationCap className="h-5 w-5 mr-2 text-primary" />
            Education
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-foreground">MSc Advanced Computer Science</h4>
              <p className="text-muted-foreground">University of Chester • 2022-2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
