import { Button, IconButton, Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ButtonMenu = ({ label, icon: Icon, url, printData, profile, avatarSrc, avatarAlt, color = 'neutral' }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const handleClick = () => {
    if (printData) {
      const iframe = document.getElementById('print')
      iframe.contentWindow.focus()
      iframe.contentWindow.print()
    }
  }

  // 🟢 Variante Perfil (avatar circular, sin texto ni borde)
  if (profile) {
    return (
      <IconButton component="a" href={url} target="_blank" rel="noopener noreferrer">
        <Avatar src={avatarSrc} alt={avatarAlt} sx={{ width: 28, height: 28 }} />
      </IconButton>
    )
  }

  // 🟠 Paleta según la variante de color solicitada
  const palettes = {
    neutral: {
      text: isDark ? 'rgba(255, 255, 255, 0.85)' : 'text.primary',
      border: isDark ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
      hoverText: isDark ? '#ffffff' : 'primary.main',
      hoverBorder: 'primary.main',
      hoverBg: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(9, 86, 210, 0.04)',
    },
    warning: {
      text: isDark ? '#ffb74d' : '#b45309',
      border: isDark ? 'rgba(255, 183, 77, 0.5)' : 'rgba(180, 83, 9, 0.4)',
      hoverText: isDark ? '#ffcc80' : '#92400e',
      hoverBorder: isDark ? '#ffb74d' : '#b45309',
      hoverBg: isDark ? 'rgba(255, 183, 77, 0.08)' : 'rgba(180, 83, 9, 0.06)',
    },
  }
  const p = palettes[color] || palettes.neutral

  // 🟢 Variante estándar (texto + ícono opcional): Advertencia, VIN, DTCs, Imprimir
  return (
    <Button
      onClick={handleClick}
      component={url ? 'a' : 'button'}
      href={url}
      target={url ? 'contentIframe' : undefined}
      variant="outlined"
      size="small"
      startIcon={Icon && <Icon />}
      sx={{
        color: p.text,
        borderColor: p.border,
        '&:hover': {
          borderColor: p.hoverBorder,
          color: p.hoverText,
          backgroundColor: p.hoverBg,
        },
      }}
    >
      {label}
    </Button>
  )
}

export default ButtonMenu