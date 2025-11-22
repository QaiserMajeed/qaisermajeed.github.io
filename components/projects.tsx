
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
      description: 'Enterprise HCM companion app seamlessly integrated with Microsoft Teams, featuring real-time notifications, comprehensive employee management, and Azure cloud deployment.',
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop',
      technologies: ['React', '.NET', 'Microsoft Teams', 'Azure', 'SignalR'],
      category: 'enterprise',
      duration: 'Jul 2022 - Present',
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'EcoBreeze SMART IoT',
      description: 'Cutting-edge IoT air purification system with comprehensive monitoring portal, real-time analytics, intelligent automation, and mobile-responsive design.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'IoT', 'MongoDB', 'Real-time Analytics'],
      category: 'iot',
      duration: 'Sep 2022 - Aug 2024',
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Symcue Trading Platform',
      description: 'Advanced trading platform with AI-powered signal generation, comprehensive portfolio management, and real-time market data integration.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      technologies: ['React', 'C#', 'SQL Server', 'Web API', 'Real-time Data'],
      category: 'fintech',
      duration: 'Completed',
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Real Estate CRM',
      description: 'Custom CRM solution designed for real estate professionals with advanced lead management, property tracking, and client communication tools.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      technologies: ['ASP.NET MVC', 'C#', 'SQL Server', 'jQuery', 'Bootstrap'],
      category: 'crm',
      duration: 'Completed',
      featured: false,
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Straton Home Decor',
      description: 'Modern e-commerce platform featuring elegant design, seamless shopping experience, secure payment integration, and efficient inventory management.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      technologies: ['React', '.NET Core', 'SQL Server', 'Payment Gateway', 'Azure'],
      category: 'ecommerce',
      duration: 'Completed',
      featured: false,
      link: '#',
      github: '#'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'enterprise', label: 'Enterprise', count: 1 },
    { id: 'iot', label: 'IoT', count: 1 },
    { id: 'fintech', label: 'FinTech', count: 1 },
    { id: 'crm', label: 'CRM', count: 1 },
    { id: 'ecommerce', label: 'E-commerce', count: 1 }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing expertise in full-stack development across various industries
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'gradient-primary text-white shadow-lg scale-105'
                  : 'bg-background hover:bg-accent border border-border'
              }`}
            >
              {filter.label}
              <span className={`ml-2 text-xs ${
                activeFilter === filter.id ? 'opacity-80' : 'opacity-60'
              }`}>
                ({filter.count})
              </span>
            </button>
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
              className="group relative card-hover"
            >
              <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="gradient-primary border-0 text-white">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      size="sm"
                      className="gradient-primary border-0 shadow-xl"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-xl"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 blur-xl -z-10" />
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
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-3xl glass border border-primary/20">
            <h3 className="text-2xl font-bold mb-3">Interested in collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and bring ideas to life
            </p>
            <Button size="lg" className="gradient-primary border-0 shadow-lg hover:shadow-xl transition-all">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
