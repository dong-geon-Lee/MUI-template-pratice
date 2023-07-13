import { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { ClickAwayListener, Fade } from '@mui/material';

const TestPopper = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: any) => {
    setOpen((prevState) => !prevState);
    setAnchorEl(open ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'block' }}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <button type="button" onClick={handleClick}>
          Popper
        </button>
      </ClickAwayListener>
      <Popper open={open} anchorEl={anchorEl} transition placement="right">
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: '#ececec' }}>The content of the Popper.</Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default TestPopper;
