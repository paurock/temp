 
 
 
 {/* AVATAR BLOCK */}
 <Box sx={{ flexGrow: 0 }}>
 <Tooltip title="Open settings">
   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
   </IconButton>
 </Tooltip>
 {/* AVATAR SETTINGS MENU START */}
 <Menu
   sx={{ mt: '45px' }}
   id="menu-appbar"
   anchorEl={anchorElUser}
   anchorOrigin={{
     vertical: 'top',
     horizontal: 'right',
   }}
   keepMounted
   transformOrigin={{
     vertical: 'top',
     horizontal: 'right',
   }}
   open={Boolean(anchorElUser)}
   onClose={handleCloseUserMenu}
 >
   {settings.map((setting) => (
     <MenuItem key={setting} onClick={handleCloseUserMenu}>
       <Typography textAlign="center">{setting}</Typography>
     </MenuItem>
   ))}
 </Menu>
 {/* AVATAR SETTINGS MENU END */}
</Box>
{/* AVATAR BLOCK END */}