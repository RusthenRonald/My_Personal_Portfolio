import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CV() {
  const { t, i18n } = useTranslation()
  const resumeHref = i18n.language.startsWith('pt') ? '/curriculo_ofc.pdf' : '/curriculo_ofc_en.pdf'

  return (
    <section id="cv" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16
            border border-[var(--color-line)]"
          style={{ background: 'var(--color-surface)' }}
        >

          <div
            className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full"
            style={{
              background: 'var(--color-accent)',
              opacity:    0.10,
              filter:     'blur(48px)',
            }}
          />

          <div
            className="pointer-events-none absolute -bottom-16 -left-16 w-52 h-52 rounded-full"
            style={{
              background: 'var(--color-magenta)',
              opacity:    0.07,
              filter:     'blur(40px)',
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">

            <div className="max-w-xl">

              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-6 h-[2px] bg-[var(--color-accent)]" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
                  {t('cv.eyebrow')}
                </span>
              </div>

              <h2
                className="font-display font-bold text-[var(--color-text)] tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
              >
                {t('cv.title')}
              </h2>

              <p className="text-[var(--color-muted)] leading-relaxed">
                {t('cv.text')}
              </p>

            </div>

            <div className="shrink-0">
              <a
                href={resumeHref}
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                  font-bold text-sm whitespace-nowrap
                  bg-[var(--color-accent)] text-[var(--color-on-accent)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_-10px_var(--color-accent)]
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[var(--color-accent)]"
              >
                <Download size={18} />
                {t('cv.button')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}