"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Home,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { anton, bebasNeue } from "@/app/fonts";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const floatingIcons = [
  { icon: Home, delay: 0 },
  { icon: User, delay: 0.1 },
  { icon: FileText, delay: 0.2 },
  { icon: Briefcase, delay: 0.3 },
  { icon: MessageSquare, delay: 0.4 },
  { icon: Mail, delay: 0.5 },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yellowRectWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["60px", "220px"],
  );

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden md:px-20"
    >
      {/* Yellow accent bar - left */}
      {/* <motion.div
        style={{ width: yellowRectWidth }}
        className="absolute hidden md:block left-0 top-1/4 h-70 bottom-0 bg-primary z-10"
      /> */}

      {/* Yellow accent bar - right */}
      {/* <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute hidden md:block right-0 top-1/4 w-8 h-70 bg-primary"
      /> */}

      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="pt-20 lg:pt-0"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 ${anton.variable}`}
            >
              HI THERE!
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl tracking-wide mb-2"
            >
              I&apos;M {siteConfig.name.split(" ")[0].toUpperCase()}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl bg-primary px-4 md:w-[29rem] font-medium mb-4"
            >
              {siteConfig.title}
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl md:text-2xl text-primary bg-black px-4 md:w-[21rem] font-medium mb-6 ${bebasNeue.className} tracking-wide`}
            >
              READY TO HANDLE YOUR NEW PROJECT
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              I build exceptional digital experiences that combine beautiful
              design with powerful functionality. Let&apos;s create something
              amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => onNavigate("portfolio")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={() => onNavigate("contact")}
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-3 rounded-full font-medium"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Profile image with decorative elements */}
          <div className="relative md:h-[25rem] flex justify-center lg:justify-end">
            {/* Curved line with icons */}
            {/* <svg
              className="absolute inset-0 w-full h-full border-green-600 border-2"
              viewBox="0 0 400 400"
              fill="none"
            >
              <motion.path
                d="M 320 50 Q 380 200 320 350"
                stroke="#f5b52e"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                // className="border-red-600 border-2"
              />
            </svg> */}

            {/* Floating icons around the image */}
            {/* <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around py-8 rounded-full border-purple-600 border-2"> */}
            {/* <div className="absolute right-0 top-0 w-[25rem] h-[25rem] bottom-0 flex flex-col justify-around py-8 rounded-full border-purple-600 border-2">
              {floatingIcons.map(({ icon: Icon, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + delay }}
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer border-red-600 border-2"
                >
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </motion.div>
              ))}
            </div> */}

            {/* Profile image */}
            <motion.div
              layoutId="profile-image-hero"
              style={{ scale: imageScale, y: imageY }}
              className="relative"
            >
              {/* Image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 md:w-[25rem] md:h-[25rem] rounded-full overflow-hidden border-4 border-card shadow-2xl"
              >
                <Image
                  src="/me.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
