import { ArrowUpRight, Clock, EyeOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { type Project } from './data'
import { getStackIcon } from './stackIcons'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56
        0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7
        1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68
        0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49
        3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.17
        0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

interface ProjectCardProps {
  project: Project
  lang:    'pt' | 'en'
  onLearnMore: (project: Project) => void
}

export default function ProjectCard({ project, lang, onLearnMore }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <article
      onClick={() => onLearnMore(project)}
      className="group flex flex-col rounded-2xl border border-[var(--color-line)]
        bg-[var(--color-surface)] overflow-hidden cursor-pointer
        transition-all duration-300
        hover:-translate-y-2 hover:border-[var(--color-accent)]"
      style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}
    >
      <div
        className="relative h-44 flex items-end p-4 overflow-hidden"
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

        <div
          className="absolute z-10 top-4 right-4 w-9 h-9 rounded-full
            flex items-center justify-center
            bg-[var(--color-accent)] text-[var(--color-on-accent)]
            opacity-0 translate-y-1
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300"
        >
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-semibold text-[var(--color-text)] text-xl mb-2">
          {project.title[lang]}
        </h3>

        <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1 line-clamp-3">
          {project.description[lang]}
        </p>

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

        <div className="flex items-center gap-4 mt-5">
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
              onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5
              font-semibold text-sm text-[var(--color-muted)]
              transition-colors duration-200
              hover:text-[var(--color-text)]"
          >
            <GithubIcon size={15} />
            {t('projects.viewRepo')}
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onLearnMore(project)
            }}
            className="inline-flex items-center gap-1.5 ml-auto
              font-semibold text-sm text-[var(--color-muted)]
              transition-colors duration-200 cursor-pointer
              hover:text-[var(--color-text)]"
          >
            {t('projects.learnMore')}
          </button>
        </div>
      </div>
    </article>
  )
}