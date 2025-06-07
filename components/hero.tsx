
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Hi, I'm{' '}
              <span className="text-primary">Qaisar Majeed</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl sm:text-3xl font-semibold text-muted-foreground"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Specializing in <span className="text-primary font-semibold">C#/.NET</span>, 
              <span className="text-primary font-semibold"> React</span>, 
              <span className="text-primary font-semibold"> JavaScript</span>, and 
              <span className="text-primary font-semibold"> Azure</span> cloud solutions with 7+ years of experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>London, England, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>qaiser_majeed@live.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+447440189478</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="group" asChild>
                <a href="#contact">
                  Hire Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full p-8 float-animation">
              <div className="relative w-full h-full bg-muted rounded-full overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/67/eb/28/67eb28e989c6b1d208152e0a3b025a99.jpg"
                  alt="Qaisar Majeed - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-primary/10 backdrop-blur-sm rounded-lg p-3"
            >
              <span className="text-sm font-semibold text-primary">7+ Years</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 bg-purple-500/10 backdrop-blur-sm rounded-lg p-3"
            >
              <span className="text-sm font-semibold text-purple-600">Full Stack</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
