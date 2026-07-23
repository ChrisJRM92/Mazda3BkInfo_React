import { IconButton } from '@mui/material'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const ThemeToggle = ({ mode, setMode }) => (
  <IconButton onClick={() => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))}>
    {mode === 'dark' ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
  </IconButton>
)

export default ThemeToggle