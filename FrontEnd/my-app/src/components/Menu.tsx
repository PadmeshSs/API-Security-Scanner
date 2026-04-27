import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { type MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    color: theme.palette.text.primary,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': { padding: '4px 0' },
    '& .MuiMenuItem-root': {
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

// Types
type HttpMethod = 'GET' | 'POST';

type DropdownItem = {
  label: HttpMethod;
  onclick: (m: HttpMethod) => void;
};

type SelectionItem = {
  label: string;
  onclick: () => void;
};

type Proptype = 
  | { role: 'selection'; items: SelectionItem[] } 
  | { role: 'dropdown'; items: DropdownItem[] };

export default function CustomizedMenus({ items, role }: Proptype) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>(undefined);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: DropdownItem | SelectionItem) => {
    if (role === 'dropdown') {
      const dropdownItem = item as DropdownItem;
      setSelectedOption(dropdownItem.label);
      dropdownItem.onclick(dropdownItem.label);
    } else {
      (item as SelectionItem).onclick();
    }
    handleClose();
  };

  return (
    <div style={{ width: role === 'selection' ? '100%' : 'auto' }}>
      <Button
        id="customized-button"
        aria-controls={open ? 'customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant={role === 'selection' ? 'outlined' : 'contained'}
        disableElevation
        onClick={handleClick}
        endIcon={role === 'selection' ? <AddIcon /> : <KeyboardArrowDownIcon />}
        color="secondary"
        sx={{ width: '100%', justifyContent: 'space-between' }}
      >
        {role === 'dropdown' ? (selectedOption ?? 'Options') : 'ADD Headers'}
      </Button>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem 
            key={`${item.label}-${index}`} 
            onClick={() => handleItemClick(item)} 
            disableRipple
          >
            {item.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}