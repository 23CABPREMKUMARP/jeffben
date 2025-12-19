"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

import { Globe } from "@/src/registry/magicui/globe";
import { AuroraBackground } from "../src/components/ui/aurora-background";
import { ContainerScroll } from "../src/components/ui/container-scroll-animation";

export default function ProductPage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Logos */}
      <div className="absolute top-2 md:-top-12 left-2 md:left-4 z-50 flex items-center gap-0">
        <Image
          src="/logo2.png"
          alt="Logo 2"
          width={600}
          height={240}
          className="h-20 md:h-48 w-auto object-contain mix-blend-screen transition-transform hover:scale-105 duration-300"
        />
      </div>

      {/* ================= HERO SECTION ================= */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32"
        >
          <Image
            src="/hero-logo.png"
            alt="Hero Logo"
            width={600}
            height={600}
            className="mb-0 h-[10rem] sm:h-[25rem] md:h-[35rem] lg:h-[40rem] w-auto object-contain mix-blend-multiply transition-all duration-700 hover:scale-[1.02]"
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="-mt-8 sm:-mt-16 md:-mt-24 text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-b from-black to-gray-400 dark:from-white dark:to-slate-500 bg-clip-text text-transparent italic tracking-tighter"
          >
            Welcome to JEFFBEN
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-lg sm:text-2xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200"
          >
            Revolutionizing Public Transport with Smart Ticketing Solutions
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 rounded-full bg-black dark:bg-white px-8 py-3 text-white dark:text-black font-medium transition-shadow hover:shadow-xl dark:shadow-white/10"
          >
            Get Started
          </motion.button>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </AuroraBackground>

      {/* ================= CONTAINER SCROLL SECTION ================= */}
      <section className="flex flex-col overflow-hidden bg-background">
        <ContainerScroll
          titleComponent={
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
                Experience the Future of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Smart Boarding
                </span>
              </h1>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop"
            alt="Digital Bus Stand"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 max-w-4xl text-center pb-20 -mt-10 md:-mt-64"
        >
          <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
            DIGI BUS is an innovative startup focused on transforming the public transportation system in Tamil Nadu through advanced automated ticketing and real-time digital solutions. Our goal is to make bus travel smarter, faster and more transparent for passengers and transport authorities.
          </p>
        </motion.div>
      </section>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="relative py-12 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-y overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">What We Do</h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 italic">
              We develop and implement an Advanced Automated Ticketing System that provides:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
              {[
                "Instant arrival & departure updates",
                "Live bus tracking",
                "QR code-based bus information",
                "Digital LED display boards in bus stands",
                "Online and app-based E-ticketing"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300"
                >
                  <span className="text-blue-500 text-xl font-bold">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="mt-12 text-lg text-neutral-600 dark:text-neutral-400 italic">
              All our solutions are designed to improve passenger convenience and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR VISION SECTION ================= */}
      <section className="relative py-12 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 shadow-inner"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Vision</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
              To build a fully digital and intelligent public transport ecosystem across Tamil Nadu using modern technology and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT US PAGE CONTENT ================= */}
      <section className="relative py-12 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-y overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic text-blue-600 dark:text-blue-400">About DIGI BUS</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 font-medium">
                DIGI BUS is a technology-driven startup dedicated to modernizing public transportation through smart automation. We specialize in developing advanced ticketing and real-time information systems for buses.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                Our solutions bridge the gap between passengers and transport systems by providing accurate, instant, and accessible information through web platforms, mobile applications, QR codes and digital display boards.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Why DIGI BUS ?</h3>
                {[
                  "Smart & automated solutions",
                  "Real-time data accuracy",
                  "Passenger-friendly technology",
                  "Scalable for state-wide implementation",
                  "Designed for smart cities & smart transport initiatives"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative h-[300px] md:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
              <Globe className="relative z-10 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES PAGE CONTENT ================= */}
      <section className="relative py-12 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "1. Advanced Automated Ticketing System",
                desc: "A complete digital ticketing solution that allows passengers to: Book E-tickets online or via mobile application, Access tickets instantly using QR codes, Reduce manual ticketing and waiting time."
              },
              {
                title: "2. Real-Time Arrival & Departure Updates",
                desc: "Live bus arrival and departure status, Accurate timing information for passengers, Reduced uncertainty and waiting at bus stands."
              },
              {
                title: "3. Live Bus Tracking System",
                desc: "GPS-based real-time bus tracking, Passengers can track buses via web or app, Improved operational monitoring."
              },
              {
                title: "4. Digital LED Information Boards",
                desc: "Large LED boards installed in bus stands, Display live arrival, departure, route, and bus details, High visibility and passenger-friendly interface."
              },
              {
                title: "5. QR Code-Based Bus Information System",
                desc: "Each bus is assigned a unique QR code. By scanning the QR code, passengers can: View live bus location, Check route details and timings, Book or access E-tickets instantly."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-start gap-4 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{service.title.split('. ')[1]}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY OVERVIEW SECTION ================= */}
      <section className="relative py-12 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-y overflow-hidden text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Smart Transport Technology</h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12">
            DIGI BUS integrates modern technologies to ensure reliability, speed, and scalability for large transport networks:
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Web & Mobile Applications", "GPS-based tracking", "Cloud-based data systems", "Secure QR code technology", "Real-time information processing"].map((tech, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-neutral-700 dark:text-neutral-300 font-semibold shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT US PAGE CONTENT ================= */}
      <section className="flex flex-col items-center justify-center py-16 md:py-32 text-center px-6 bg-background">
        <h3 className="text-3xl md:text-5xl font-bold">
          Get in Touch with JEFFBEN
        </h3>

        <p className="mt-6 max-w-xl text-neutral-600 dark:text-neutral-300 text-lg">
          We are open to collaborations with transport authorities, government bodies and private operators.
        </p>

        <div className="mt-8 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <p className="text-xl font-medium text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-3">
            📧 Email: <a href="mailto:jeffbenofficial1@gmail.com" className="hover:text-blue-500 transition-colors">jeffbenofficial1@gmail.com</a>
          </p>
        </div>

        <p className="mt-16 text-2xl md:text-3xl font-bold italic text-blue-600 dark:text-blue-400">
          &quot;Your Bus. Your Time. Your Convenience.&quot;
        </p>
      </section>

    </main>
  );
}
