
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Exelsys for Microsoft Teams',
      description: 'HCM companion app for Microsoft Teams with comprehensive employee management features, real-time notifications, and seamless integration.',
      image: 'https://i.pinimg.com/736x/c5/6a/ef/c56aef6147b1fb658e59f89ccff377e2.jpg',
      technologies: ['React', '.NET', 'Microsoft Teams', 'Azure', 'SignalR'],
      category: 'enterprise',
      duration: 'Jul 2022 - Present',
      features: ['Real-time notifications', 'Employee management', 'Teams integration', 'Azure deployment']
    },
    {
      id: 2,
      title: 'EcoBreeze SMART IoT',
      description: 'IoT air purification device with comprehensive monitoring portal, real-time data analytics, and smart automation features.',
      image: 'https://lh5.googleusercontent.com/-BXAzS5zCgMe8YVU7-rhPhru6ZKnRG8mVRrxdCCl1XnhhSgB8eUq1zNndNrHXjolUuryuXrhydHjDgRQ6CYadrAJJYl73wOXHX7M5BZwanVtFobIJ9gOoY5Vjgq2NFrmwuoR2PB7Xq0YO6GKqg',
      technologies: ['React', 'Node.js', 'IoT', 'MongoDB', 'Real-time Analytics'],
      category: 'iot',
      duration: 'Sep 2022 - Aug 2024',
      features: ['Real-time monitoring', 'Data analytics', 'Smart automation', 'Mobile responsive']
    },
    {
      id: 3,
      title: 'Symcue Trading Platform',
      description: 'Comprehensive trading platform with advanced signal generation, portfolio management, and real-time market data integration.',
      image: 'https://s-media-cache-ak0.pinimg.com/originals/e8/74/0a/e8740a5d6d703e3231f59a00a4ca9479.jpg',
      technologies: ['React', 'C#', 'SQL Server', 'Web API', 'Real-time Data'],
      category: 'fintech',
      duration: 'Completed',
      features: ['Signal generation', 'Portfolio management', 'Real-time data', 'Advanced analytics']
    },
    {
      id: 4,
      title: 'Real Estate CRM',
      description: 'Custom CRM solution designed specifically for real estate agents with lead management, property tracking, and client communication tools.',
      image: 'https://i.pinimg.com/originals/d0/3b/26/d03b262cb501430117c36cb49f792455.png',
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'jQuery', 'Bootstrap'],
      category: 'crm',
      duration: 'Completed',
      features: ['Lead management', 'Property tracking', 'Client communication', 'Reporting system']
    },
    {
      id: 5,
      title: 'Straton Home Decor',
      description: 'E-commerce platform for home decor with modern design, shopping cart functionality, payment integration, and inventory management.',
      image: 'https://i.ytimg.com/vi/7zSR-CsDQTw/maxresdefault.jpg',
      technologies: ['React', '.NET Core', 'SQL Server', 'Payment Gateway', 'Azure'],
      category: 'ecommerce',
      duration: 'Completed',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Order management']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'iot', label: 'IoT' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'crm', label: 'CRM' },
    { id: 'ecommerce', label: 'E-commerce' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development across various industries
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-200"
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.duration}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
