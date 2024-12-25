import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="bg-blue-600">
        <IconButton edge="start" color="inherit" aria-label="menu" className="mr-2">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="flex-1">
          Logistics Tracker
        </Typography>
        <Button color="inherit" className="bg-white text-blue-600 px-4 py-2 rounded">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
