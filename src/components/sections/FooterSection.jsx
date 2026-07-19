export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-white/45 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-white/70">Nabadeep Talukdar</p>
          <a href="mailto:nabadeeptalukdarbusiness@gmail.com" className="block transition hover:text-white">Email: nabadeeptalukdarbusiness@gmail.com</a>
          <a href="tel:+917002969984" className="block transition hover:text-white">Phone: +91 7002969984</a>
          <p>Based in Guwahati, Assam, India</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#projects" className="transition hover:text-white">Portfolio</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="https://github.com/nabadeeptalukdar" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/nabadeeptalukdar817/" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
        </div>
        <p>© 2026 Designed & Developed by Naba</p>
      </div>
    </footer>
  );
}
