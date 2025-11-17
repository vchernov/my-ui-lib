import {Box, CircularProgress} from "@mui/material";

const LoadingBar = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100px">
            <CircularProgress/>
        </Box>
    );
};

export {LoadingBar};
