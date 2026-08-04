import './style.css'

document.querySelector('#app').innerHTML = `
  <button class="side-tab" id="menuToggle" aria-label="Open navigation" aria-expanded="false" aria-controls="sideNav">
    MENU
  </button>

  <aside class="side-nav" id="sideNav" aria-hidden="true">
    <button class="close-nav" id="closeNav" aria-label="Close navigation">X</button>
    <nav>
      <a href="#home" class="nav-link">Home</a>
      <a href="#services" class="nav-link">Services</a>
      <a href="#contact" class="nav-link">Contact Us</a>
      <a href="tel:+13862748568" class="nav-link nav-call">Call 386-274-8568</a>
    </nav>
  </aside>
  <div class="menu-overlay" id="menuOverlay"></div>

  <header class="top-header" id="home">
    <div class="logo-wrap">
      <img src="/coast-logo.png" alt="Coast to Coast Paving logo" class="brand-logo" />
      <div class="brand-copy">
        <p class="eyebrow">Florida Asphalt Specialists</p>
        <h1>Coast to Coast Paving</h1>
        <p class="brand-slogan">Proudly Paving Florida from Coast to Coast</p>
      </div>
      <a href="tel:+13862748568" class="header-phone">Call 386-274-8568</a>
    </div>
  </header>

  <section class="hero-video">
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="https://irp.cdn-website.com/eef3abea/dms3rep/multi/xImFdkIcRNiq8cdjljZV_Untitled+design+%283%29.v2.0000000.jpg"
    >
      <source src="https://vid.cdn-website.com/eef3abea/videos/xImFdkIcRNiq8cdjljZV_Untitled+design+%283%29-v.mp4" type="video/mp4" />
    </video>
    <div class="hero-overlay">
      <p class="hero-kicker">Asphalt Paving and Repair</p>
      <h2>Commercial and Residential Asphalt Solutions Serving Florida</h2>
      <p>
        Built for driveways, parking lots, private roads, and property upgrades with dependable timelines and durable finishes.
      </p>
      <div class="hero-actions">
        <a href="#quote" class="btn btn-primary">Get a Quote</a>
        <a href="tel:+13862748568" class="btn btn-secondary">Call 386-274-8568</a>
      </div>
    </div>
  </section>

  <main>
    <section class="services" id="services">
      <div class="section-head">
        <p class="eyebrow">What We Do</p>
        <h3>Professional Asphalt and Sealcoating Services</h3>
        <p class="services-subline">for commercial and residential</p>
      </div>
      <div class="service-grid">
        <article class="service-card">
          <figure class="service-media">
            <img src="https://lirp.cdn-website.com/eef3abea/dms3rep/multi/opt/s2+-+2024-05-20T154757.567-1920w.jpg" alt="Asphalt paving machine applying a new roadway surface" loading="lazy" />
            <figcaption class="service-hover">
              <h5>Asphalt Paving</h5>
              <p>Full-depth paving for new lots and drive lanes with proper base prep, tight grading control, and smooth final compaction for long-term durability.</p>
            </figcaption>
          </figure>
          <h4>Asphalt Paving</h4>
          <p class="service-brief">New asphalt installation for commercial lots, business frontage, and residential driveways.</p>
        </article>
        <article class="service-card">
          <figure class="service-media">
            <img src="https://lirp.cdn-website.com/eef3abea/dms3rep/multi/opt/screen_2x+-+2024-05-20T160044.646-1920w.jpg" alt="Asphalt resurfacing equipment restoring road surface" loading="lazy" />
            <figcaption class="service-hover">
              <h5>Asphalt Resurfacing</h5>
              <p>A renewed top layer that restores ride quality and appearance without full replacement, ideal when the existing base remains structurally sound.</p>
            </figcaption>
          </figure>
          <h4>Asphalt Resurfacing</h4>
          <p class="service-brief">A fresh overlay layer that renews worn pavement while extending service life.</p>
        </article>
        <article class="service-card">
          <figure class="service-media">
            <img src="https://lirp.cdn-website.com/eef3abea/dms3rep/multi/opt/Asphalt-Overlay-by-Lakeridge-Paving-jdtgjhndg-1920w.jpeg" alt="Freshly layered asphalt overlay on roadway section" loading="lazy" />
            <figcaption class="service-hover">
              <h5>Asphalt Overlays</h5>
              <p>Engineered asphalt lifts applied over prepared pavement to boost structural capacity, seal minor imperfections, and improve drainage profile.</p>
            </figcaption>
          </figure>
          <h4>Asphalt Overlays</h4>
          <p class="service-brief">Cost-effective surface enhancement to strengthen and refresh existing asphalt.</p>
        </article>
        <article class="service-card">
          <figure class="service-media">
            <img src="https://lirp.cdn-website.com/eef3abea/dms3rep/multi/opt/screen_2x+-+2024-05-20T161126.950-1920w.jpg" alt="Sealcoating application on asphalt parking area" loading="lazy" />
            <figcaption class="service-hover">
              <h5>Asphalt Sealcoating</h5>
              <p>Protective coating that helps shield asphalt from UV oxidation, water intrusion, and chemical drips while restoring a clean black finish.</p>
            </figcaption>
          </figure>
          <h4>Asphalt Sealcoating</h4>
          <p class="service-brief">Surface protection that helps preserve appearance and reduce weather damage.</p>
        </article>
        <article class="service-card">
          <figure class="service-media">
            <img src="https://lirp.cdn-website.com/eef3abea/dms3rep/multi/opt/screen_2x+-+2024-05-20T161441.144-1920w.jpg" alt="Crew repairing cracked and damaged asphalt" loading="lazy" />
            <figcaption class="service-hover">
              <h5>Asphalt Repair</h5>
              <p>Targeted crack sealing, patching, and corrective repairs designed to stop deterioration early and restore safe, reliable pavement performance.</p>
            </figcaption>
          </figure>
          <h4>Asphalt Repair</h4>
          <p class="service-brief">Fast corrective repairs to resolve cracks, failures, and high-risk surface defects.</p>
        </article>
      </div>
    </section>

    <section class="why-choose" id="why-choose">
      <div class="section-head">
        <p class="eyebrow">Why Choose Coast to Coast</p>
        <h3>One Team. Clear Accountability. Results That Hold Up.</h3>
      </div>
      <p class="why-intro">
        We run every job with disciplined crews, transparent communication, and standards that do not bend under pressure. From first estimate to final striping, you get predictable execution and pavement built to last.
      </p>
      <div class="why-grid">
        <article>
          <h4>Experienced Field Teams</h4>
          <p>Seasoned operators and supervisors who know how to prevent problems before they become delays or costly rework.</p>
        </article>
        <article>
          <h4>Quality Control on Every Phase</h4>
          <p>Grade, base, compaction, and finish are checked with intent so your surface performs in heat, rain, and traffic.</p>
        </article>
        <article>
          <h4>Straightforward Pricing</h4>
          <p>Detailed scopes, honest recommendations, and no vague line items so you understand exactly what your property needs.</p>
        </article>
        <article>
          <h4>Reliable Delivery Windows</h4>
          <p>Efficient scheduling and active coordination to keep projects moving and minimize disruptions for homes and businesses.</p>
        </article>
      </div>
    </section>

    <section class="benefits" id="benefits">
      <div class="section-head">
        <p class="eyebrow">Why Seal Asphalt</p>
        <h3>Benefits of Sealing Asphalt</h3>
      </div>
      <ul class="benefit-list">
        <li><strong>Water Resistance:</strong> Prevents moisture penetration and pothole formation.</li>
        <li><strong>UV Protection:</strong> Reduces fading and oxidation.</li>
        <li><strong>Improved Aesthetics:</strong> Gives the surface a fresh, black finish.</li>
        <li><strong>Chemical Resistance:</strong> Shields against oil, gas, and salt damage.</li>
        <li><strong>Extended Lifespan:</strong> With proper maintenance, the surface can last for years.</li>
      </ul>
    </section>

    <section class="quote" id="quote">
      <div class="quote-copy">
        <p class="eyebrow">Fast Estimate</p>
        <h3>Request Your Free Quote</h3>
        <p>
          Tell us about your project and we will follow up quickly with recommendations for paving, repair, or sealcoating.
        </p>
        <ul>
          <li>Residential driveways</li>
          <li>Commercial parking lots</li>
          <li>Maintenance plans</li>
        </ul>
      </div>
      <form class="quote-form" id="quoteForm">
        <input type="hidden" name="_subject" value="New Coast to Coast Quote Request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" class="hp-field" tabindex="-1" autocomplete="off" />
        <label>
          Full Name
          <input type="text" name="name" required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Service Needed
          <select name="service" required>
            <option value="">Select service</option>
            <option>Asphalt Paving</option>
            <option>Asphalt Repair</option>
            <option>Sealcoating</option>
            <option>Commercial Property</option>
            <option>Residential Property</option>
          </select>
        </label>
        <label>
          Project Details
          <textarea name="details" rows="4" required></textarea>
        </label>
        <button type="submit" class="btn btn-primary btn-submit">Submit Quote Request</button>
        <p class="form-note" id="formNote" aria-live="polite"></p>
      </form>
    </section>

    <section class="contact" id="contact">
      <div>
        <p class="eyebrow">Contact Us | Serving Florida</p>
        <h3>Ready to Protect and Upgrade Your Asphalt?</h3>
        <p>
          Coast to Coast Paving serves Florida clients with quality work, transparent communication, and long-term surface performance.
        </p>
      </div>
      <div class="contact-card">
        <img src="/new-logo.jpg" alt="Coast to Coast Paving" class="contact-mini-logo" />
        <p><strong>Phone:</strong> <a href="tel:+13862748568">386 274 8568</a></p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>Coast to Coast Paving. Serving Florida with asphalt paving, repair, and sealcoating for commercial and residential properties.</p>
  </footer>
  <div class="phone-below-footer">
    <a href="tel:+13862748568">386 274 8568</a>
  </div>
`

const sideNav = document.getElementById('sideNav')
const menuOverlay = document.getElementById('menuOverlay')
const menuToggle = document.getElementById('menuToggle')
const closeNav = document.getElementById('closeNav')
const navLinks = document.querySelectorAll('.nav-link')

function openMenu() {
  sideNav.classList.add('open')
  menuOverlay.classList.add('show')
  menuToggle.setAttribute('aria-expanded', 'true')
  sideNav.setAttribute('aria-hidden', 'false')
}

function closeMenu() {
  sideNav.classList.remove('open')
  menuOverlay.classList.remove('show')
  menuToggle.setAttribute('aria-expanded', 'false')
  sideNav.setAttribute('aria-hidden', 'true')
}

menuToggle.addEventListener('click', openMenu)
closeNav.addEventListener('click', closeMenu)
menuOverlay.addEventListener('click', closeMenu)

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
})

const quoteForm = document.getElementById('quoteForm')
const formNote = document.getElementById('formNote')
const submitBtn = quoteForm.querySelector('.btn-submit')

quoteForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  submitBtn.disabled = true
  formNote.textContent = 'Sending your quote request...'

  try {
    const formData = new FormData(quoteForm)
    const response = await fetch('https://formsubmit.co/ajax/brandon@floridasiteservices.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Request failed')
    }

    formNote.textContent = 'Thanks. Your quote request was sent. We will follow up soon.'
    quoteForm.reset()
  } catch {
    formNote.textContent = 'We could not send the form right now. Please call 386 274 8568 for immediate scheduling.'
  } finally {
    submitBtn.disabled = false
  }
})
