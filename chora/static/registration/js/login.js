
const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    createTheme,
    Box,
    SvgIcon,
    Link,
    Button,
    Grid,
    Stack,
    TextField
} = MaterialUI;

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors.red.A400,
        },
    },
});

function LightBulbIcon(props) {
    return
    <SvgIcon {...props}>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
        ;
}

function ProTip() {
    return (
        <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
            <LightBulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            {'Pro tip: See more '}
            <Link href="https://mui.com/material-ui/getting-started/templates/">templates</Link>
            {' in the Material UI documentation.'}
        </Typography>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function App() {
    return (
        <Grid container alignItems="center" sx={{ bgcolor: '#FFFFFF', width: '100vw', height: '100vh' }}>
            <Grid container item xs={12} sx={{ justifyContent: 'center'}}>
            <Stack spacing={3} >
                <svg width="523" height="153" viewBox="0 0 523 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_2)">
                    <path d="M47.14 131.948C31.2371 126.855 18.4995 118.465 11.9764 102.784C0.00738049 74.0103 12.9565 44.4541 42.6276 34.1344C69.4371 24.8101 96.395 26.952 123.049 35.3417C135.372 39.2206 135.301 39.4448 135.01 53.3901C130.536 51.3925 126.275 49.2977 121.874 47.5567C99.2725 38.6163 76.1521 35.5937 52.6006 43.122C28.5958 50.7952 17.5513 72.0906 25.0161 95.4389C30.0606 111.217 42.0965 119.481 57.3494 122.702C84.9247 128.525 111.012 125.471 133.636 106.747C134.103 106.36 134.667 106.089 135.81 105.371C135.81 107.232 135.515 108.569 135.857 109.717C138.285 117.869 133.475 121.474 127.197 124.884C108.15 135.228 87.7101 137.227 66.6563 135.426C60.2325 134.877 53.9054 133.196 47.14 131.948Z" fill="#050505"/>
                    <path d="M226.993 107.004C226.718 100.534 227.064 94.4548 226.054 88.6103C222.669 69.0265 200.743 61.0624 184.956 73.4797C176.578 80.0696 172.454 89.0636 171.997 99.4345C171.5 110.711 171.884 122.027 171.884 133.666C166.785 133.666 162.221 133.666 157.602 133.666C157.602 97.9376 157.602 62.0681 157.602 25.8223C162.15 25.1078 167.15 24.3223 172.197 23.5294C171.477 44.7282 170.756 65.9472 170.035 87.1662C170.391 87.2773 170.747 87.3883 171.103 87.4994C171.723 85.9568 172.342 84.4139 172.963 82.8719C180.27 64.7323 198.365 54.3425 216.857 57.6685C230.63 60.1456 239.292 69.4839 239.852 84.3002C240.473 100.701 239.994 117.143 239.994 133.791C236.444 133.791 232.011 133.791 226.993 133.791C226.993 125.022 226.993 116.262 226.993 107.004Z" fill="#050505"/>
                    <path d="M471.209 135.262C462.86 134.887 454.755 135.377 447.086 133.776C437.988 131.877 432.953 124.699 432.636 116.293C432.317 107.811 436.442 101.761 445.301 97.9079C454.851 93.7541 465.029 93.4169 475.198 93.2699C484.486 93.1357 493.779 93.2415 503.036 93.2415C503.822 76.5276 496.163 68.0837 479.612 67.0855C463.785 66.1311 448.855 68.9684 434.789 78.8261C434.789 74.8444 434.572 71.599 434.907 68.4116C435.024 67.2967 436.287 65.8583 437.386 65.3566C455.849 56.934 475.068 54.5324 494.87 59.2075C507.534 62.1974 514.832 70.7626 516.05 83.8641C517.036 94.4655 517.039 105.156 517.953 115.767C518.463 121.69 519.941 127.53 521.093 134.025C517.464 134.025 513.709 134.258 510.014 133.887C508.878 133.772 507.312 132.179 506.966 130.97C505.618 126.263 504.681 121.438 503.472 116.133C495.32 126.997 484.776 133.324 471.209 135.262ZM500.324 115.724C507.283 110.959 502.142 104.168 503.819 98.663C492.112 98.663 480.991 98.3148 469.908 98.8161C464.696 99.0518 459.416 100.497 454.428 102.172C449.619 103.787 447.054 107.723 447.101 112.967C447.147 118.167 449.751 121.836 454.433 123.867C456.692 124.846 459.147 125.635 461.58 125.908C475.492 127.471 488.395 124.855 500.324 115.724Z" fill="#060606"/>
                    <path d="M335.967 65.9806C350.512 77.2137 352.976 92.0628 348.946 108.337C344.937 124.523 332.732 132.001 317.302 134.869C306.208 136.931 295.081 136.611 284.205 133.231C266.753 127.808 257.379 114.733 257.53 96.1943C257.68 77.7817 267.321 64.5821 285.141 60.0013C302.555 55.5249 319.752 55.7646 335.967 65.9806ZM331.915 114.244C342.736 94.9047 335.051 73.2208 315.331 68.4691C309.936 67.1691 304.058 66.8813 298.515 67.3813C284.624 68.6343 275.896 75.7099 272.704 87.2426C269.148 100.093 273.125 113.717 282.184 120.832C293.028 129.348 321.007 130.574 331.915 114.244Z" fill="#050505"/>
                    <path d="M369.102 60.0686C373.819 59.4549 378.088 58.9015 382.852 58.284C382.272 67.8953 381.68 77.7239 381.087 87.5524C388.222 68.7142 400.229 56.9601 421.929 57.9653C421.929 62.668 421.929 67.0608 421.929 71.1857C417.096 71.1857 412.29 70.6742 407.631 71.282C393.891 73.0747 384.428 83.1645 383.064 97.3881C382.494 103.331 382.55 109.352 382.617 115.334C382.684 121.318 383.12 127.299 383.411 133.642C378.546 133.642 373.512 133.642 369.062 133.642C369.062 126.693 369.148 119.768 369.045 112.846C368.801 96.5434 368.454 80.2425 368.193 63.9402C368.173 62.6725 368.492 61.3994 369.102 60.0686Z" fill="#060606"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_2">
                    <rect width="523" height="153" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <TextField
                    id="id_username"
                    name="username"
                    label="Username"
                    variant="outlined"/>
                <TextField
                    id="id_password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button variant="contained" type="submit">Sign In</Button>
            </Stack>
            </Grid>
        </Grid>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
);

