import { ref } from 'vue'

const cookieName = 'casec_theme'
const isDark = ref(false)
let initialized = false

const readThemeCookie = () => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split('=')[1]
}

const writeThemeCookie = (theme) => {
  const maxAge = 60 * 60 * 24 * 365
  document.cookie = `${cookieName}=${theme}; path=/; max-age=${maxAge}; SameSite=Lax`
}

const applyTheme = (dark) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  writeThemeCookie(dark ? 'dark' : 'light')
}

export const useTheme = () => {
  if (!initialized) {
    initialized = true
    applyTheme(readThemeCookie() === 'dark')
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  return {
    isDark,
    toggleTheme,
  }
}
