import { useState } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Tooltip, Box } from '@mui/material'
import { MdExpandLess, MdExpandMore, MdInsertDriveFile } from 'react-icons/md'

const SidebarSection = ({ section, collapsed, onExpandRequest, selectedHref, onSelect }) => {
  const [open, setOpen] = useState(false)
  const Icon = section.icon

  const handleClick = () => {
    collapsed ? onExpandRequest(section.id) : setOpen((prev) => !prev)
  }

  const button = (
    <ListItemButton onClick={handleClick} sx={{ justifyContent: collapsed ? 'center' : 'flex-start', gap: 0.5 }}>
      <ListItemIcon sx={{ minWidth: collapsed ? 'auto' : 36, justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
        <Icon />
      </ListItemIcon>

      {!collapsed && (
        <ListItemText
          primary={section.label}
          primaryTypographyProps={{ fontSize: 14, noWrap: true }}
          sx={{ minWidth: 0 }}
        />
      )}

      {/* Flecha AL FINAL — categoría principal */}
      {!collapsed && (
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, color: 'text.secondary' }}>
          {open ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
        </Box>
      )}
    </ListItemButton>
  )

  return (
    <>
      {collapsed ? <Tooltip title={section.label} placement="right">{button}</Tooltip> : button}

      {!collapsed && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 2 }}>
            {section.groups.map((group) => (
              <GroupItem key={group.title} group={group} selectedHref={selectedHref} onSelect={onSelect} />
            ))}
          </Box>
        </Collapse>
      )}
    </>
  )
}

const GroupItem = ({ group, selectedHref, onSelect }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ListItemButton onClick={() => setOpen((prev) => !prev)} sx={{ py: 0.25, gap: 0.5 }}>
        {/* Flecha AL INICIO — subcategoría */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, color: 'text.secondary' }}>
          {open ? <MdExpandLess size={16} /> : <MdExpandMore size={16} />}
        </Box>

        <ListItemText
          primary={group.title}
          primaryTypographyProps={{ fontSize: 13, color: 'text.secondary', noWrap: true }}
          sx={{ minWidth: 0 }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding sx={{ pl: 1 }}>
          {group.links.map((link) => (
            <ListItemButton
              key={link.href + link.label}
              component="a"
              href={link.href}
              target="contentIframe"
              selected={selectedHref === link.href}
              onClick={() => onSelect(link.href)}
              sx={{
                pl: 3,
                py: 0.3,
                my: 0.3,
                mx: 0.5,
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'common.white',
                  color: 'common.black',
                  '& .MuiListItemIcon-root': { color: 'common.black' },
                },
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                },
                '&.Mui-selected:hover': {
                  bgcolor: 'primary.dark',
                  color: 'primary.contrastText',
                  '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                <MdInsertDriveFile size={14} />
              </ListItemIcon>
              <ListItemText primary={link.label} primaryTypographyProps={{ fontSize: 12.5, noWrap: true }} sx={{ minWidth: 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default SidebarSection