import './App.css'

function App() {
  const profile = {
    name: 'Edward Gaston Sinche Cruz',
    yearsExperience: 15,
    role: 'Especialista en Ciberseguridad',
    email: 'esinche@edward-solutions.net',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tu-perfil',
      github: 'https://github.com/tu-usuario',
      portfolio: 'https://tuportafolio.com'
    }
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="tag">{profile.role}</p>
        <p className="name">{profile.name}</p>
        <h1>Protección integral para infraestructura crítica</h1>
        <p className="subtitle">
          {profile.yearsExperience}+ años de experiencia en seguridad de redes, diseño de
          arquitecturas seguras y programación aplicada a entornos empresariales.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary">
            Contactar
          </a>
          <a href="#experiencia" className="btn btn-secondary">
            Ver experiencia
          </a>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Áreas de dominio</h2>
          <ul>
            <li>Administración avanzada de Firewall perimetral</li>
            <li>Implementación y ajuste de WAF para aplicaciones web</li>
            <li>Programación para automatización y hardening</li>
            <li>Monitoreo, análisis y respuesta ante incidentes</li>
          </ul>
        </article>

        <article className="card">
          <h2>Certificaciones y plataformas</h2>
          <div className="badges">
            <span>F5</span>
            <span>Palo Alto</span>
            <span>Fortinet</span>
            <span>Cisco</span>
          </div>
        </article>

        <article className="card" id="experiencia">
          <h2>Experiencia destacada</h2>
          <p>
            Trayectoria sólida gestionando infraestructuras de alta disponibilidad, segmentación
            de redes, control de tráfico y políticas de seguridad en entornos corporativos.
          </p>
          <p>
            Capacidad para integrar seguridad de red con prácticas de desarrollo seguro para
            reducir riesgos operativos y elevar la resiliencia del negocio.
          </p>
        </article>
      </section>
      <section className="projects" id="proyectos">
        <h2>Proyectos destacados</h2>
        <div className="project-grid">
          <article className="project-card">
            <h3>Hardening de perímetro corporativo</h3>
            <p>
              Diseño e implementación de políticas de firewall multinivel, segmentación por zonas
              y control de acceso para reducir superficie de ataque.
            </p>
          </article>
          <article className="project-card">
            <h3>Protección avanzada con WAF</h3>
            <p>
              Configuración de WAF con reglas personalizadas, mitigación de OWASP Top 10 y
              monitoreo continuo para aplicaciones críticas.
            </p>
          </article>
          <article className="project-card">
            <h3>Automatización de seguridad</h3>
            <p>
              Desarrollo de scripts para auditoría de configuraciones, validación de cambios y
              generación de reportes técnicos para equipos de operaciones.
            </p>
          </article>
        </div>
      </section>

      <section className="social">
        <h2>Redes profesionales</h2>
        <div className="social-links">
          <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
          <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub
          </a>
          <a href={profile.socialLinks.portfolio} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Portafolio
          </a>
        </div>
      </section>

      <section className="contact" id="contacto">
        <h2>¿Buscas fortalecer la seguridad de tu organización?</h2>
        <p>
          Diseño soluciones robustas y escalables basadas en buenas prácticas de ciberseguridad y
          experiencia real en campo.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          {profile.email}
        </a>
      </section>
    </main>
  )
}

export default App
