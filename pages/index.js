import { useTheme } from 'next-themes'

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      Theme: {theme}
      <br/>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default ChangeTheme