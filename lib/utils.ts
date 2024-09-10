export const scrollToSection = (sectionId: string, margin: number): void => {
  const section = document.getElementById(sectionId)
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: sectionTop - margin,
      behavior: 'smooth'
    })
  }
}

export const handleOpenCV = (): void => {
  window.open('/CV.pdf', '_blank')
}
