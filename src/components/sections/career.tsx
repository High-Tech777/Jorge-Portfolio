"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/achievements";
import { experienceData } from "@/data/experience";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

export function Career() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Career</span>
          </h1>
          <p className="text-muted-foreground">Professional experience and education</p>
        </motion.div>

        <h2 className="text-2xl font-display font-semibold mb-8">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              
              <div className="ml-8 md:ml-0 md:w-5/12 p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>                
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
        <motion.section
          aria-labelledby="education-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="mt-16"
        >
          <h2 id="education-heading" className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
            Education
          </h2>
          <div className="relative pl-8 border-l-2 border-border">
            <span className="absolute -left-[9px] top-7 w-4 h-4 bg-primary rounded-full border-4 border-background" aria-hidden="true" />
            {educationData.map((education) => (
            <article key={education.id} className="p-6 md:p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold">{education.degree}</h3>
              <p className="text-primary font-medium mt-2">{education.institution}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" />{education.duration}</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" />{education.location}</span>
              </div>
            </article>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}