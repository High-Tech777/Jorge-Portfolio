"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const achievements = [
 { icon: Award, metric: "8+ years", title: "Full Stack & AI Engineering", description: "Enterprise applications and AI-enabled solutions across AI, fintech, and retail.", url: "/about", color: "rgba(139,92,246,0.15)" },
 { icon: Award, metric: "8 engineers", title: "Engineering Leadership", description: "Led a development pod, coordinated technical execution, enforced standards, and reviewed code.", url: "/career", color: "rgba(139,92,246,0.15)" },
 { icon: Award, metric: "Eureka AI", title: "Enterprise AI Platform", description: "Contributed to industry-specific models, AI agents, data pipelines, and orchestration capabilities.", url: "/career", color: "rgba(139,92,246,0.15)" },
 { icon: Award, metric: "2014 - 2018", title: "Computer Science Degree", description: "Bachelor\u2019s degree from the Technological University of Peru in Lima, Peru.", url: "/about", color: "rgba(139,92,246,0.15)" }
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background text-foreground py-20"
    >

      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_85%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)",
            top: "10%",
            right: "5%",
          }}
          animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)",
            bottom: "10%",
            left: "5%",
          }}
          animate={{ y: [20, -20, 20], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold gradient-text drop-shadow-lg"
        >
          Achievements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Highlights from my engineering experience and education.
        </motion.p>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{
                opacity: 0,
                rotateY: -30,
                scale: 0.85,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="flex"
              style={{ perspective: 1000 }}
            >
              <Card className="relative group bg-gradient-to-b from-card/70 to-muted/30 backdrop-blur-xl border border-border shadow-[0_0_25px_rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col justify-between w-full h-full hover:border-white/20 transition-all duration-500 min-h-[360px] overflow-hidden">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${achievement.color}, transparent 60%)`,
                  }}
                />

                <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                  <Link href={achievement.url}>
                    <motion.div
                      className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: achievement.color }}
                      />
                        <div className="relative z-10 flex items-center justify-center w-full h-full">
                          <Icon />
                        </div>
                    </motion.div>
                  </Link>

                  <div>
                    <h3 className="font-bold text-2xl mb-2">
                      {achievement.metric}
                    </h3>
                    <p className="font-semibold text-lg mb-2">
                      {achievement.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
