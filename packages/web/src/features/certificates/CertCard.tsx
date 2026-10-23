import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { type Certificate } from './data'

interface CertCardProps {
  cert: Certificate
  lang: 'pt' | 'en'
  onLearnMore: (cert: Certificate) => void
}

export default function CertCard({ cert, lang, onLearnMore }: CertCardProps) {
  const { t } = useTranslation()

  return (
    <div
      onClick={() => onLearnMore(cert)}
      className="group flex flex-col gap-3 p-6 rounded-2xl cursor-pointer
        border border-[var(--color-line)] bg-[var(--color-surface)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[var(--color-accent)]"
    >
      <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-accent)]">
        {cert.year}
      </span>

      <h3
        className="font-display font-semibold text-[var(--color-text)] leading-snug"
        style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}
      >
        {cert.name[lang]}
      </h3>

      <span className="text-sm text-[var(--color-muted)] font-medium">
        {cert.issuer}
      </span>

      <div className="h-px bg-[var(--color-line)] mt-auto" />

      <div className="flex items-center gap-4">
        {cert.link && cert.link !== '#' ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5
              font-semibold text-sm text-[var(--color-accent)]
              transition-all duration-200 hover:gap-2.5"
          >
            {t('certs.credential')}
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onLearnMore(cert)
            }}
            className="inline-flex items-center gap-1.5
              font-semibold text-sm text-[var(--color-accent)]
              transition-all duration-200 hover:gap-2.5 cursor-pointer"
          >
            {t('certs.viewPhoto')}
            <ArrowUpRight size={15} />
          </button>
        )}
      </div>
    </div>
  )
}
