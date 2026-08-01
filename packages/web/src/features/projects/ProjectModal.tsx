import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ArrowUpRight, Clock, EyeOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { type Project } from './data'
import { getStackIcon } from './stackIcons'

interface ProjectModalProps {
  project: Project
  lang:    'pt' | 'en'
  onClose: () => void
}

type DescriptionSection = { label?: string; text: string }

const SECTION_LABELS = [
  'O que é',
  'Problema que resolve',
  'Resultado',
  'What it is',
  'Problem it solves',
  'Result',
]

function parseDescription(text: string): DescriptionSection[] {
  const labelRegex = new RegExp(`(${SECTION_LABELS.join('|')})\\s*:\\s*`, 'g')
  const matches = [...text.matchAll(labelRegex)]

  if (matches.length === 0) return [{ text }]

  return matches.map((match, i) => {
    const start = match.index! + match[0].length
    const end   = i + 1 < matches.length ? matches[i + 1].index! : text.length
    return { label: match[1], text: text.slice(start, end).trim() }
  })
}

export default function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
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
          className="relative h-32 flex items-end p-4 overflow-hidden"
          style={{ background: project.gradient }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title[lang]}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <span
            className="relative z-10 font-mono text-[11px] font-bold tracking-[0.08em] uppercase
              px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.88)', color: '#0A0A0B' }}
          >
            {project.tag[lang]}
          </span>

          <button
            onClick={onClose}
            aria-label={t('projects.close')}
            className="absolute z-10 top-4 right-4 w-9 h-9 rounded-full
              flex items-center justify-center
              bg-white/90 text-[#0A0A0B] cursor-pointer
              transition-transform duration-200 hover:scale-105"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="font-display font-semibold text-[var(--color-text)] text-xl mb-3">
            {project.title[lang]}
          </h3>

          <div className="max-h-[45vh] overflow-y-auto pr-1 space-y-3">
            {parseDescription(project.description[lang]).map((section, i) => (
              <p key={i} className="text-sm text-[var(--color-muted)] leading-relaxed">
                {section.label && (
                  <span className="font-semibold text-[var(--color-text)]">
                    {section.label}:{' '}
                  </span>
                )}
                {section.text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((tech) => {
              const Icon = getStackIcon(tech)
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md
                    border border-[var(--color-line)] text-[var(--color-muted)]"
                >
                  {Icon && <Icon size={12} />}
                  {tech}
                </span>
              )
            })}
          </div>

          {project.coldStart && (
            <p className="flex items-center gap-1.5 mt-4 font-mono text-[11px] text-[var(--color-muted)]">
              <Clock size={12} className="shrink-0" />
              {t('projects.coldStart')}
            </p>
          )}

          <div className="flex items-center gap-4 mt-6">
            {project.unavailable ? (
              <span
                className="inline-flex items-center gap-1.5
                  font-semibold text-sm text-[var(--color-muted)] cursor-not-allowed"
              >
                <EyeOff size={15} />
                {t('projects.unavailable')}
              </span>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5
                  font-semibold text-sm text-[var(--color-accent)]
                  transition-gap duration-200
                  hover:gap-2.5"
              >
                {t('projects.viewProject')}
                <ArrowUpRight size={15} />
              </a>
            )}

            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5
                font-semibold text-sm text-[var(--color-muted)]
                transition-colors duration-200
                hover:text-[var(--color-text)]"
            >
              {t('projects.viewRepo')}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
