import './App.css'

function App() {
  const profile = {
    name: 'Edward Gaston Sinche Cruz',
    yearsExperience: 15,
    role: 'Especialista en Ciberseguridad',
    email: 'esinche@edward-solutions.net',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/edward-gaston-sinche-cruz/',
      github: 'https://github.com/edgasinc2019'
    }
  }
  const certifications = [
    { name: 'Cisco', image: '/imagenes/cisco.png' },
    { name: 'F5', image: '/imagenes/f5.png' },
    { name: 'Palo Alto', image: '/imagenes/paloalto.png' },
    { name: 'Fortinet', image: '/imagenes/fortinet.png' },
    { name: 'Cloudflare', image: '/imagenes/cloudflare.png' }
  ]
  const professionalProfile = [
    'Soy un dedicado profesional autodidacta, que logra cumplir los objetivos propuestos en los tiempos planificados en cada proyecto asignado.',
    'Todos los clientes que administro a nivel de soporte siempre quedan satisfechos, porque logro diagnosticar y resolver los problemas de inmediato, además del desarrollo de implementación de pruebas de conceptos de pre venta.',
    'Especialista en telecomunicaciones con más de 15 años de experiencia en tecnología Cisco, F5 Network, Imperva, CheckPoint, Sophos, Palo Alto, Fortinet, Netskope, ademas de Telefonía IP con Asterisk y Elastic, Arquitectura de servidores Windows y Linux, como también programación en Python, Power Shell, HTTP, CSS y Java Script.'
  ]

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <div>
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
          </div>
          <div className="hero-photo-wrap">
            <img
              src="/imagenes/edward.PNG"
              alt="Edward Gaston Sinche Cruz"
              className="hero-photo"
            />
          </div>
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
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div className="cert-item" key={cert.name}>
                <img src={cert.image} alt={`Logo ${cert.name}`} />
                <span>{cert.name}</span>
              </div>
            ))}
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
      <section className="profile card">
        <h2>Perfil profesional</h2>
        {professionalProfile.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="skills card">
        <h2>Habilidades</h2>
        <ul>
          <li>Programación basica</li>
          <li>Networking</li>
          <li>Seguridades</li>
          <li>Análisis en Wireshark</li>
          <li>
            Servidores:
            <ul>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
          </li>
          <li>Balanceadores</li>
          <li>
            Protocolos:
            <ul>
              <li>DNS</li>
              <li>HTTP</li>
              <li>HTTPS</li>
            </ul>
          </li>
        </ul>
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
