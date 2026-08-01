import { useTranslation } from 'react-i18next'
import { ArrowRight, Download } from 'lucide-react'
import PhotoFrame from './PhotoFrame'

const stats = [
  { value: '2+',  key: 'stats.years'    },
]

const resumeByLang: Record<string, string> = {
  en: '/curriculum_en.pdf',
  pt: '/curriculum.pdf',
}

export default function Hero() {
  const { t, i18n } = useTranslation()
  const resumeHref = resumeByLang[i18n.language] ?? resumeByLang.en

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-[74px] overflow-hidden"
    >

      <div
        className="pointer-events-none absolute -top-10 right-[-120px] w-[520px] h-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          opacity: 0.09,
          filter: 'blur(24px)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 -left-20 w-[320px] h-[320px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--color-magenta) 0%, transparent 70%)',
          opacity: 0.06,
          filter: 'blur(24px)',
        }}
      />

      <div className="max-w-[1120px] mx-auto px-7 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.9fr] gap-14 md:gap-20 items-center">

          {/* ── Left col ── */}
          <div>

            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 mb-7">
              <span
                className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"
              />
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--color-accent)]">
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* headline */}
            <h1
              className="font-display font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)' }}
            >
              {/* Replace [Seu Nome] with your actual name */}
              <span className="text-[var(--color-text)]">Rusthen,</span>
              <br />
              <span className="relative inline-block text-[var(--color-accent)]">
                {t('hero.role')}
                {/* underline accent bar */}
                <span
                  className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full opacity-40"
                  style={{ background: 'var(--color-accent)' }}
                />
              </span>
            </h1>

            {/* lede */}
            <p
              className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-[520px]"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
            >
              {t('hero.lede')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                  font-semibold text-sm
                  bg-[var(--color-accent)] text-[var(--color-on-accent)]
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_var(--color-accent)]
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                {t('hero.cta1')}
                <ArrowRight size={16} />
              </a>
              <a
                href={resumeHref}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                  font-semibold text-sm
                  border border-[var(--color-line)] text-[var(--color-text)]
                  transition-all duration-200
                  hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <Download size={16} />
                {t('hero.cta2')}
              </a>
            </div>

            {/* stats */}
            <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-[var(--color-line)]">
              {stats.map(({ value, key }) => (
                <div key={key}>
                  <div
                    className="font-display font-bold text-[var(--color-accent)]"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}
                  >
                    {value}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-muted)] mt-0.5">
                    {t(key)}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right col — photo ── */}
          {/* on mobile it renders above the text via order */}
          <div className="order-first md:order-last">
            <PhotoFrame />
          </div>

        </div>
      </div>
    </section>
  )
}