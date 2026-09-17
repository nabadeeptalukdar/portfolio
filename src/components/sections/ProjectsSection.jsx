"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/siteData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Websites Built to Solve Real Business Problems."
            description="A selection of websites and digital products built around different goals — from stronger brand presentation and better customer journeys to ecommerce, performance and custom functionality."
          />
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
            View All Work
            <HiArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}
