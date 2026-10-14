export type Certificate = {
  year:        string
  name:        { pt: string; en: string }
  issuer:      string
  link:        string
  description?: { pt: string; en: string }
  image?:      string
  gradient?:   string
}

export const certificatesData: Certificate[] = [
    {
    year:   '2026',
    name:   { pt: 'Fundamentos do Google Cloud Computing', en: 'Google Cloud Computing Foundations' },
    issuer: 'Google',
    description: {pt: 'Concluí o Skill Badge "Implement Load Balancing on Compute Engine", emitido pela Google Cloud. Essa conquista demonstra conhecimentos práticos no uso de comandos gcloud e Cloud Shell, criação e implantação de máquinas virtuais utilizando o Compute Engine, execução de aplicações conteinerizadas no Google Kubernetes Engine (GKE) e configuração de balanceadores de carga de rede e HTTP em ambientes da Google Cloud.' , en: 'Completed the "Implement Load Balancing on Compute Engine" Skill Badge, issued by Google Cloud. This achievement demonstrates hands-on knowledge of using gcloud commands and Cloud Shell, creating and deploying virtual machines with Compute Engine, running containerized applications on Google Kubernetes Engine (GKE), and configuring network and HTTP load balancers in Google Cloud environments.'},
    image: '/google_cloud_certificate.png',
    link:   'https://www.credly.com/badges/f89c1ba3-98f8-4d6b-8ae7-00acf288f7b2/linked_in_profile',
  },
  {
    year:   '2025',
    name:   { pt: 'Trilha de Formação em Tecnologia Banese-labs 2° fase', en: 'Technology Training Program – Banese Labs (Phase 2)' },
    issuer: 'Banese',
    description: {pt: 'Concluí a segunda fase da Trilha de Formação em Tecnologia, promovida pelo Tiradentes Innovation Center em parceria com o BANESE, como parte do programa Inovar-SE. Realizado em Aracaju, entre 10/12/2024 e 20/12/2024, o curso teve carga horária de 36 horas, abordando temas como Inteligência Artificial, Metodologias Ágeis, Scrum, Cibersegurança e Inovação.' , en: 'Completed the second phase of the Technology Training Track, promoted by the Tiradentes Innovation Center in partnership with BANESE as part of the Inovar-SE program. Held in Aracaju from December 10, 2024, to December 20, 2024, the course consisted of 36 hours of training covering topics such as Artificial Intelligence, Agile Methodologies, Scrum, Cybersecurity, and Innovation.'},
    image: '/banese_labs_certificate_2.png',
    link:   'https://doity.com.br/certificados/imprimir_do_evento/0aaadfd7fd1850c4fe74e105dd919bb048b0ae41',
  },
   {
    year:   '2025',
    name:   { pt: 'Trilha de Formação em Tecnologia Banese-labs 1° fase', en: 'Technology Training Program – Banese Labs (Phase 1)' },
    issuer: 'Banese',
    description: {pt: 'Trilha de Formação em Tecnologia - Primeira Fase Concluí a primeira fase da Trilha de Formação em Tecnologia, promovida pelo Tiradentes Innovation Center em parceria com o Banco do Estado de Sergipe - BANESE, como parte do programa InovarSE. O treinamento foi realizado entre os dias 10/12/2024 e 20/12/2024, com uma carga horária total de 20 horas.Essa formação me proporcionou conhecimentos fundamentais em tecnologia e inovação, alinhados às demandas do mercado atual.' , en: 'Technology Training Track – Phase One Completed the first phase of the Technology Training Track, promoted by the Tiradentes Innovation Center in partnership with the State Bank of Sergipe (BANESE) as part of the InovarSE program. The training was conducted from December 10, 2024, to December 20, 2024, with a total workload of 20 hours.This program provided me with fundamental knowledge in technology and innovation, aligned with the demands and challenges of current market.'},
    image: '/banese_labs_certificate_1.png',
    link:   'https://doity.com.br/certificados/imprimir_do_evento/528fe68060de3c00f4bfe3a7c04a533affdcc61e',
  },
  {
    year:   '2026',
    name:   { pt: 'Proficiência em Inglês – Benchmark Test (B1)', en: 'English Proficiency – Benchmark Test (B1)' },
    issuer: 'Benchmark',
    description: {pt: 'Resultado do Benchmark Test indicando nível B1 de proficiência em inglês, com habilidades intermediárias de leitura, escrita, compreensão auditiva e conversação. Atualmente, meu nível de inglês está em B1+, com foco no desenvolvimento contínuo da comunicação em contextos profissionais e na compreensão de documentações técnicas.' , en: 'Benchmark Test result indicating B1 English proficiency, with intermediate reading, writing, listening, and speaking skills. My current English level is B1+, and I am continuously improving my communication skills in professional contexts and my ability to understand technical documentation.'},
    image: '/benchmark_test.jpeg',
    link:   '#',
  },
  {
    year:   '2022',
    name:   { pt: 'Curso de Inglês', en: 'English Course' },
    issuer: 'Wizard',
    description: {pt: 'Conclusão do programa Wizard Teens, com foco em comunicação em inglês, incluindo speaking, listening, reading e writing, além de vocabulário e gramática aplicados ao dia a dia.' , en: 'Completion of the Wizard Teens program, focused on English communication skills, including speaking, listening, reading, and writing, as well as vocabulary and grammar applied to everyday situations.'},
    image: '/english_certificate.jpg',
    link:   '#',
  },
  {
    year:   '2024',
    name:   { pt: 'Oficina Git e GitHub - Circuito Tecnológico', en: 'Git and GitHub Workshop – Technology Circuit' },
    issuer: 'Even3',
    description: {pt: 'Concluí a oficina "Git e GitHub" durante o Circuito Tecnológico 2024, organizado pela Universidade Tiradentes (UNIT). Realizada em 8 de maio de 2024, a oficina proporcionou conhecimentos sobre controle de versão, gerenciamento de repositórios e boas práticas utilizando Git e GitHub, totalizando 3 horas de capacitação.' , en: 'Completed the workshop "Git and GitHub" during Circuito Tecnológico 2024, organized by Universidade Tiradentes (UNIT). Held on May 8, 2024, the workshop provided knowledge about version control, repository management, and best practices using Git and GitHub, totaling 3 hours of training.'},
    image: '/github_git_certificate.png',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357816.84983623.546777.8.8357816849836235467778&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
  {
    year:   '2024',
    name:   { pt: 'Python-Explorando Web Scraping', en: 'Python - Exploring Web Scraping' },
    issuer: 'Even3',
    description: {pt: 'Concluí a oficina "Python - Explorando Web Scraping" durante o Circuito Tecnológico 2024, organizado pela Universidade Tiradentes (UNIT). Realizada em 7 de maio de 2024, a oficina proporcionou conhecimentos práticos sobre técnicas de Web Scraping utilizando Python, totalizando 3 horas de capacitação.' , en: 'Completed the workshop "Python - Exploring Web Scraping" during Circuito Tecnológico 2024, organized by Universidade Tiradentes (UNIT). Held on May 7, 2024, the workshop provided practical knowledge about Web Scraping techniques using Python, totaling 3 hours of training.'},
    image: '/web_scraping_certificate.png',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357816.84983623.546707.8.8357816849836235467078&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
   {
    year:   '2024',
    name:   { pt: 'Aprofundamento em Python- Circuito Tecnológico', en: 'Advanced Python Training – Technology Circuit' },
    issuer: 'Even3',
    description: {pt: 'Concluí a oficina "Conceitos Básicos para Aprofundamento em Python" durante o Circuito Tecnológico 2024, organizado pela Universidade Tiradentes (UNIT). Realizada em 10 de maio de 2024, a oficina proporcionou conhecimentos fundamentais para o desenvolvimento contínuo em programação Python, totalizando 3 horas de capacitação.' , en: 'Completed the workshop "Basic Concepts for Advanced Python Learning" during Circuito Tecnológico 2024, organized by Universidade Tiradentes (UNIT). Held on May 10, 2024, the workshop provided foundational knowledge for further development in Python programming and contributed a total of 3 hours of training.'},
    image: '/python_certificate.png',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357816.84983623.546703.8.8357816849836235467038&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
   {
    year:   '2024',
    name:   { pt: 'Participação - Circuito Tecnológico', en: 'Participation in the Technology Circuit' },
    issuer: 'Even3',
    description: {pt: 'Concluí minha participação no evento "Circuito Tecnológico 2024", organizado pela Coordenação dos Cursos de Computação da Universidade Tiradentes (UNIT). Realizado em Aracaju, entre os dias 7 e 10 de maio de 2024, o evento proporcionou contato com conteúdos e experiências relacionadas à área de tecnologia, totalizando 24 horas de atividades.' , en: 'Completed my participation in the event "Circuito Tecnológico 2024", organized by the Computer Science Courses Coordination of Universidade Tiradentes (UNIT). Held in Aracaju from May 7 to May 10, 2024, the event provided exposure to content and experiences related to the technology field, totaling 24 hours of activities.'},
    image: '/technology_circuit_certificate.png',
    link:   'https://www.even3.com.br/documentos/imprimir?i=18357851.84983623.6.8.83578518498362368&cc=8FFCA4F0-4A64-4A58-97FE-1E314B688210',
  },
]