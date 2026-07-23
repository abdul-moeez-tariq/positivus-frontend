import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiSparkles,
  HiGlobeAlt,
  HiDevicePhoneMobile,
  HiCloud,
  HiCpuChip,
  HiCheckCircle,
  HiCodeBracket,
} from "react-icons/hi2";

const services = [
  { icon: HiGlobeAlt, title: "Web Development" },
  { icon: HiDevicePhoneMobile, title: "Mobile Apps" },
  { icon: HiCloud, title: "Cloud Solutions" },
  { icon: HiCpuChip, title: "AI Integration" },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "40+", label: "Happy Clients" },
  { value: "8+", label: "Countries Served" },
];

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20">
      {/* Background Grid + Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

        <div className="absolute -left-40 top-12 h-[32rem] w-[32rem] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-12 h-[36rem] w-[36rem] rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT COLUMN - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/30">
              <HiSparkles className="text-lg" />
              Premium Digital Studio
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-black leading-[1.05] tracking-tighter text-slate-900 md:text-6xl lg:text-7xl">
              Turning Bold{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ideas
              </span>{" "}
              Into Scalable Digital Reality
            </h1>

            {/* Subheadline */}
            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              We craft premium websites, mobile applications, AI-powered
              platforms, and cloud infrastructure that drive growth and deliver
              exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Your Free Quote
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-800 transition-all hover:border-cyan-400 hover:text-cyan-600"
              >
                View Our Work
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-cyan-200"
                >
                  <div className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                  <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-20 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Main Device Mockup */}
              <div className="relative rounded-[3rem] border-8 border-slate-900 bg-slate-950 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-[2.25rem] bg-white">
                  {/* Mock Screen Content */}
                  <div className="relative h-[520px] w-full bg-gradient-to-br from-slate-50 to-white p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        in2next-solutions.com
                      </div>
                    </div>

                    {/* Fake Dashboard */}
                    <div className="space-y-8">
                      <div>
                        <div className="h-8 w-3/4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600" />
                        <div className="mt-3 h-2.5 w-1/2 rounded bg-slate-200" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {services.map((service, i) => {
                          const Icon = service.icon;
                          return (
                            <div
                              key={i}
                              className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:border-cyan-300 transition-all"
                            >
                              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white">
                                <Icon className="text-3xl" />
                              </div>
                              <span className="text-sm font-semibold text-slate-700">
                                {service.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="absolute bottom-6 left-6 right-6 h-14 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2 text-emerald-500">
                        <HiCheckCircle className="text-xl" />
                        <span className="text-xs font-medium">Live</span>
                      </div>
                      <div className="h-5 w-px bg-slate-200" />
                      <div className="text-xs text-slate-500 font-medium">
                        98% Uptime • AI Optimized
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-12 hidden rounded-3xl border border-white bg-white/95 p-6 shadow-2xl backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <HiCodeBracket className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Clean &amp; Scalable Code
                    </p>
                    <p className="text-sm text-slate-500">Enterprise Ready</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity }}
                className="absolute -right-8 bottom-16 hidden rounded-3xl border border-white bg-white/95 p-6 shadow-2xl backdrop-blur-xl lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <HiCheckCircle className="text-3xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      98% Satisfaction
                    </p>
                    <p className="text-sm text-slate-500">Trusted by Leaders</p>
                  </div>
                </div>
              </motion.div>

              {/* Subtle Glow Orbs */}
              <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/10 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
