import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { type Certificate } from './data'

interface CertModalProps {
  cert:    Certificate
  lang:    'pt' | 'en'
  onClose: () => void
}

export default function CertModal({ cert, lang, onClose }: CertModalProps) {
  const { t } = useTranslation()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        className="relative w-full max-w-lg rounded-2xl border border-[var(--color-line)]
          bg-[var(--color-surface)] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative h-[250px] flex items-end p-4 overflow-hidden"
          style={{ background: cert.gradient ?? 'linear-gradient(135deg, #1d2a10, #8fbf1a)' }}
        >
          {cert.image && (
            <img
              src={cert.image}
              alt={cert.name[lang]}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <span
            className="relative z-10 font-mono text-[11px] font-bold tracking-[0.08em] uppercase
              px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.88)', color: '#0A0A0B' }}
          >
            {cert.year}
          </span>

          <button
            onClick={onClose}
            aria-label={t('certs.close')}
            className="absolute z-10 top-4 right-4 w-9 h-9 rounded-full
              flex items-center justify-center
              bg-white/90 text-[#0A0A0B] cursor-pointer
              transition-transform duration-200 hover:scale-105"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="font-display font-semibold text-[var(--color-text)] text-xl mb-1">
            {cert.name[lang]}
          </h3>

          <span className="text-sm text-[var(--color-muted)] font-medium">
            {cert.issuer}
          </span>

          <div className="max-h-[45vh] overflow-y-auto pr-1 mt-4 space-y-3">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              {cert.description?.[lang] ?? t('certs.noDescription')}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            {cert.link && cert.link !== '#' ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5
                  font-semibold text-sm text-[var(--color-accent)]
                  transition-all duration-200 hover:gap-2.5"
              >
                {t('certs.credential')}
                <ArrowUpRight size={15} />
              </a>
            ) : cert.image ? (
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5
                  font-semibold text-sm text-[var(--color-accent)]
                  transition-all duration-200 hover:gap-2.5"
              >
                {t('certs.viewPhoto')}
                <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
