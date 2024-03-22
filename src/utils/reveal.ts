export const animReveal = () => {
  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0px)'
      }
    })
  }

  const options = {
    root: null,
    rootMargin: '100px',
    threshold: 1,
    //threshold = qué porcentaje de pixeles del componente se tienen que ver para que inicie la animación
  }

  const observer = new IntersectionObserver(callback, options)

  const reveals = document.querySelectorAll('[reveal]')
  reveals.forEach((element: HTMLElement) => {
    const delay = element.getAttribute('reveal') || '0'

    element.style.opacity = '1'
    element.style.transform = 'translateY(25px)'
    element.style.transition = `transform 1s ease ${delay}s, opacity 1s ease ${delay}s`

    observer.observe(element)
  })
}
