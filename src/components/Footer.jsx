export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold">Vishu Yadav</h3>
          <p className="text-sm mt-2 text-white/70">
            Frontend / React Developer passionate about building clean and responsive user interfaces.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1 text-white/70">
            <li><a href="#education" className="hover:text-white transition">Education</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm text-white/70">vishuyadav0109@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-xs pb-6 text-white/60">
        © 2025 Vishu Yadav. All rights reserved.
      </div>
    </footer>
  )
}
