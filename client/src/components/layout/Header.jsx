import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >

          <Toolbar>

            <Typography sx={{
              display: { xs: "none", sm:"block" }
            }} >
              Unhinged
            </Typography>


          </Toolbar>

        </AppBar>
      </Box>
    </>
  );
};

export default Header;
