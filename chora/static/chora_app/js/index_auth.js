
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
    AppBar,
    IconButton,
    Card,
    Toolbar,
    CardContent,
    CardActionArea
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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ bgcolor: '#ffffff' }}>
                    <svg sx={{ flexGrow: 1 }} width="15%" height="15%" viewBox="0 0 523 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_2)">
                            <path d="M47.14 131.948C31.2371 126.855 18.4995 118.465 11.9764 102.784C0.00738049 74.0103 12.9565 44.4541 42.6276 34.1344C69.4371 24.8101 96.395 26.952 123.049 35.3417C135.372 39.2206 135.301 39.4448 135.01 53.3901C130.536 51.3925 126.275 49.2977 121.874 47.5567C99.2725 38.6163 76.1521 35.5937 52.6006 43.122C28.5958 50.7952 17.5513 72.0906 25.0161 95.4389C30.0606 111.217 42.0965 119.481 57.3494 122.702C84.9247 128.525 111.012 125.471 133.636 106.747C134.103 106.36 134.667 106.089 135.81 105.371C135.81 107.232 135.515 108.569 135.857 109.717C138.285 117.869 133.475 121.474 127.197 124.884C108.15 135.228 87.7101 137.227 66.6563 135.426C60.2325 134.877 53.9054 133.196 47.14 131.948Z" fill="#050505" />
                            <path d="M226.993 107.004C226.718 100.534 227.064 94.4548 226.054 88.6103C222.669 69.0265 200.743 61.0624 184.956 73.4797C176.578 80.0696 172.454 89.0636 171.997 99.4345C171.5 110.711 171.884 122.027 171.884 133.666C166.785 133.666 162.221 133.666 157.602 133.666C157.602 97.9376 157.602 62.0681 157.602 25.8223C162.15 25.1078 167.15 24.3223 172.197 23.5294C171.477 44.7282 170.756 65.9472 170.035 87.1662C170.391 87.2773 170.747 87.3883 171.103 87.4994C171.723 85.9568 172.342 84.4139 172.963 82.8719C180.27 64.7323 198.365 54.3425 216.857 57.6685C230.63 60.1456 239.292 69.4839 239.852 84.3002C240.473 100.701 239.994 117.143 239.994 133.791C236.444 133.791 232.011 133.791 226.993 133.791C226.993 125.022 226.993 116.262 226.993 107.004Z" fill="#050505" />
                            <path d="M471.209 135.262C462.86 134.887 454.755 135.377 447.086 133.776C437.988 131.877 432.953 124.699 432.636 116.293C432.317 107.811 436.442 101.761 445.301 97.9079C454.851 93.7541 465.029 93.4169 475.198 93.2699C484.486 93.1357 493.779 93.2415 503.036 93.2415C503.822 76.5276 496.163 68.0837 479.612 67.0855C463.785 66.1311 448.855 68.9684 434.789 78.8261C434.789 74.8444 434.572 71.599 434.907 68.4116C435.024 67.2967 436.287 65.8583 437.386 65.3566C455.849 56.934 475.068 54.5324 494.87 59.2075C507.534 62.1974 514.832 70.7626 516.05 83.8641C517.036 94.4655 517.039 105.156 517.953 115.767C518.463 121.69 519.941 127.53 521.093 134.025C517.464 134.025 513.709 134.258 510.014 133.887C508.878 133.772 507.312 132.179 506.966 130.97C505.618 126.263 504.681 121.438 503.472 116.133C495.32 126.997 484.776 133.324 471.209 135.262ZM500.324 115.724C507.283 110.959 502.142 104.168 503.819 98.663C492.112 98.663 480.991 98.3148 469.908 98.8161C464.696 99.0518 459.416 100.497 454.428 102.172C449.619 103.787 447.054 107.723 447.101 112.967C447.147 118.167 449.751 121.836 454.433 123.867C456.692 124.846 459.147 125.635 461.58 125.908C475.492 127.471 488.395 124.855 500.324 115.724Z" fill="#060606" />
                            <path d="M335.967 65.9806C350.512 77.2137 352.976 92.0628 348.946 108.337C344.937 124.523 332.732 132.001 317.302 134.869C306.208 136.931 295.081 136.611 284.205 133.231C266.753 127.808 257.379 114.733 257.53 96.1943C257.68 77.7817 267.321 64.5821 285.141 60.0013C302.555 55.5249 319.752 55.7646 335.967 65.9806ZM331.915 114.244C342.736 94.9047 335.051 73.2208 315.331 68.4691C309.936 67.1691 304.058 66.8813 298.515 67.3813C284.624 68.6343 275.896 75.7099 272.704 87.2426C269.148 100.093 273.125 113.717 282.184 120.832C293.028 129.348 321.007 130.574 331.915 114.244Z" fill="#050505" />
                            <path d="M369.102 60.0686C373.819 59.4549 378.088 58.9015 382.852 58.284C382.272 67.8953 381.68 77.7239 381.087 87.5524C388.222 68.7142 400.229 56.9601 421.929 57.9653C421.929 62.668 421.929 67.0608 421.929 71.1857C417.096 71.1857 412.29 70.6742 407.631 71.282C393.891 73.0747 384.428 83.1645 383.064 97.3881C382.494 103.331 382.55 109.352 382.617 115.334C382.684 121.318 383.12 127.299 383.411 133.642C378.546 133.642 373.512 133.642 369.062 133.642C369.062 126.693 369.148 119.768 369.045 112.846C368.801 96.5434 368.454 80.2425 368.193 63.9402C368.173 62.6725 368.492 61.3994 369.102 60.0686Z" fill="#060606" />
                        </g>
                    </svg>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button href="/accounts/logout" >Sign Out</Button>
                </Toolbar>
            </AppBar>
            <Grid sx={{ bgcolor: '#FFFFFF' }} sx={{ margin: '30px' }}>
                <Typography variant="h4" sx={{ color: '#4f6269' }}>
                    Choose Your Energy Provider:
                </Typography>
                <Stack direction="row" spacing={5}>
                    <Card sx={{ minWidth: 275 }}>
                     <a href="https://sharemydata.pge.com/myAuthorization?client_id=c4eb4044861240838a5de4bba1c9eda1&redirect_uri=https://app.chora.network/auth/callback&response_type=code"> 
			<CardActionArea>
	    			<CardContent>
                            		<img src="static/chora_app/img/pge.png" width="250" />
                        	</CardContent>
	    		</CardActionArea>
	    	    </a>
                    </Card>
                    <Card sx={{ minWidth: 275 }}    >
 			<a href="https://test3.dms.sce.com/mysce/datasharing/authorizeavendor?thirdPartyId=BUNHJEAVDBUMXV"> 
			<CardActionArea>
	    		<CardContent>
                            <svg id="Group_1249" data-name="Group 1249" width="250" height="auto" viewBox="0 0 177.277 48">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_523" data-name="Rectangle 523" width="177.277" height="48" fill="none" />
                                    </clipPath>
                                </defs>
                                <path id="Path_9541" data-name="Path 9541" d="M0,0V40.847H.016l19.793-4.433L.029,29.4l20.02,1.7L5.372,20.349,22.2,26.49,6.015,5.993,26.506,22.065,20.349,5.371,30.571,19.554,29.66.023l6.411,19.591L40.847,0Z" transform="translate(0 0)" fill="#1a1818" />
                                <path id="Path_9542" data-name="Path 9542" d="M40.847,0V40.872H0V48H47.926V0Z" transform="translate(0 0)" fill="#1a1818" />
                                <g id="Group_840" data-name="Group 840" transform="translate(0 0)">
                                    <g id="Group_839" data-name="Group 839" transform="translate(0 0)" clipPath="url(#clip-path)">
                                        <path id="Path_9543" data-name="Path 9543" d="M163.937,23.584a2.56,2.56,0,1,1,2.56-2.559A2.562,2.562,0,0,1,163.937,23.584Zm0-4.869a2.31,2.31,0,1,0,2.31,2.31A2.312,2.312,0,0,0,163.937,18.715Z" transform="translate(10.77 1.24)" fill="#1a1818" />
                                        <path id="Path_9544" data-name="Path 9544" d="M163.425,19.6c0-.094.021-.1.158-.1.8,0,.891.39.891.769,0,.274-.114.716-.848.716-.073,0-.146,0-.2-.007Zm-.777,2.824c.192-.013.391-.022.575-.022.15,0,.35.01.543.022v-.1h-.1c-.192,0-.238-.044-.238-.266v-.947c.353,0,.361.026.519.229l.83,1.085a2.992,2.992,0,0,1,.341-.022,3.144,3.144,0,0,1,.35.022v-.1c-.172-.013-.256-.03-.427-.253l-.607-.789a1.637,1.637,0,0,0-.252-.256.85.85,0,0,0,.759-.841c0-.666-.5-.838-1.063-.838-.2,0-.393.025-.653.025-.183,0-.383-.012-.575-.025v.1h.1c.191,0,.238.042.238.265v2.344c0,.222-.047.266-.238.266h-.1Z" transform="translate(10.847 1.29)" fill="#1a1818" />
                                        <path id="Path_9545" data-name="Path 9545" d="M55.394,39.953V18.5H68.072v1.39h-8.64v8.276h8.144v1.39H59.432v9H68.2v1.391Z" transform="translate(3.694 1.234)" fill="#1a1818" />
                                        <path id="Path_9546" data-name="Path 9546" d="M72.384,18.5h6.985c7.745,0,11.42,5.495,11.42,11.123,0,6.852-4.4,10.328-10.658,10.328H72.384Zm4.037,20.06h2.515c6.457,0,7.815-4.668,7.815-8.871,0-5.4-2.517-9.8-7.615-9.8H76.421Z" transform="translate(4.827 1.234)" fill="#1a1818" />
                                        <rect id="Rectangle_520" data-name="Rectangle 520" width="4.038" height="21.451" transform="translate(100.627 19.736)" fill="#1a1818" />
                                        <path id="Path_9547" data-name="Path 9547" d="M105.223,36.15c1.126,1.788,2.318,2.747,4.436,2.747a3.832,3.832,0,0,0,3.84-3.707c0-6.224-10.064-3.278-10.064-10.958,0-3.442,2.88-6.29,6.884-6.29a7.185,7.185,0,0,1,6.457,3.84l-1.391.895a4.673,4.673,0,0,0-4.4-3.045,3.469,3.469,0,0,0-3.508,3.741c0,5.031,10.064,2.912,10.064,10.659,0,3.938-3.443,6.554-7.051,6.554-2.914,0-5.264-.86-6.754-3.344Z" transform="translate(6.898 1.197)" fill="#1a1818" />
                                        <path id="Path_9548" data-name="Path 9548" d="M130.669,17.942c6.224,0,10.659,5,10.659,11.321s-4.435,11.323-10.659,11.323c-6.191,0-10.626-5-10.626-11.323s4.435-11.321,10.626-11.321m0,21.254c5.165,0,6.323-5.761,6.323-9.933s-1.158-9.93-6.323-9.93-6.289,5.759-6.289,9.93S125.5,39.2,130.669,39.2" transform="translate(8.005 1.197)" fill="#1a1818" />
                                        <path id="Path_9549" data-name="Path 9549" d="M144.292,39.953V18.5H147.9l11.221,14.764h.067V18.5h1.721V39.953h-1.788L146.08,22.838h-.067V39.953Z" transform="translate(9.623 1.234)" fill="#1a1818" />
                                        <path id="Path_9550" data-name="Path 9550" d="M55.877,12.908a1.576,1.576,0,0,0,1.449.9,1.252,1.252,0,0,0,1.255-1.212c0-2.033-3.289-1.071-3.289-3.58a2.124,2.124,0,0,1,2.25-2.056A2.344,2.344,0,0,1,59.65,8.213l-.454.292a1.527,1.527,0,0,0-1.438-1,1.134,1.134,0,0,0-1.147,1.222c0,1.644,3.288.953,3.288,3.483a2.215,2.215,0,0,1-2.3,2.141,2.339,2.339,0,0,1-2.207-1.091Z" transform="translate(3.687 0.464)" fill="#1a1818" />
                                        <path id="Path_9551" data-name="Path 9551" d="M63.905,6.959a3.514,3.514,0,0,1,3.484,3.7,3.484,3.484,0,1,1-6.956,0,3.512,3.512,0,0,1,3.472-3.7m0,6.945c1.688,0,2.066-1.884,2.066-3.245s-.379-3.245-2.066-3.245S61.851,9.3,61.851,10.659s.367,3.245,2.054,3.245" transform="translate(4.03 0.464)" fill="#1a1818" />
                                        <path id="Path_9552" data-name="Path 9552" d="M69.408,7.142V12.15A1.483,1.483,0,0,0,70.9,13.632c.618,0,1.687-.215,1.687-1.417V7.142h.563v5.235c0,.9-.683,1.968-2.457,1.968-1.156,0-2.606-.443-2.606-2.227V7.142Z" transform="translate(4.541 0.476)" fill="#1a1818" />
                                        <path id="Path_9553" data-name="Path 9553" d="M75.3,14.15V7.6H73.9V7.142h4.11V7.6h-1.4V14.15Z" transform="translate(4.928 0.476)" fill="#1a1818" />
                                        <path id="Path_9554" data-name="Path 9554" d="M78.8,14.15V7.142h1.319v3.082H83V7.142h1.319V14.15H83V10.776H80.118V14.15Z" transform="translate(5.255 0.476)" fill="#1a1818" />
                                        <path id="Path_9555" data-name="Path 9555" d="M85.625,14.15V7.142h4.143V7.6H86.944V10.3H89.6v.453H86.944V13.7h2.867v.453Z" transform="translate(5.71 0.476)" fill="#1a1818" />
                                        <path id="Path_9556" data-name="Path 9556" d="M90.85,14.15V7.142h3.028a1.933,1.933,0,0,1,1.989,2.065c0,1.072-.778,1.537-1.827,1.666L95.9,14.15h-1.45l-1.915-3.59h.087c1.168,0,1.925-.454,1.925-1.5a1.462,1.462,0,0,0-1.666-1.568h-.714V14.15Z" transform="translate(6.059 0.476)" fill="#1a1818" />
                                        <path id="Path_9557" data-name="Path 9557" d="M96.732,14.15V7.142H97.91l3.667,4.824h.02V7.142h.563V14.15h-.583L97.315,8.559h-.021V14.15Z" transform="translate(6.451 0.476)" fill="#1a1818" />
                                        <path id="Path_9558" data-name="Path 9558" d="M112.808,8.69a2.58,2.58,0,0,0-2.022-1.276c-1.709,0-2.575,1.254-2.575,3.277,0,1.579.8,3.115,2.413,3.115a2.523,2.523,0,0,0,2.325-1.536l.465.227a3.128,3.128,0,0,1-3.051,1.86,3.61,3.61,0,0,1-3.569-3.612,3.646,3.646,0,0,1,3.7-3.787,3.332,3.332,0,0,1,2.705,1.45Z" transform="translate(7.122 0.464)" fill="#1a1818" />
                                        <path id="Path_9559" data-name="Path 9559" d="M118.975,14.162h-1.353l-.746-1.828h-2.412l-.7,1.828h-.617L116,6.959h.023Zm-3.31-4.857-1.018,2.575h2.046Z" transform="translate(7.545 0.464)" fill="#1a1818" />
                                        <path id="Path_9560" data-name="Path 9560" d="M119.535,14.15V7.142h1.318V13.6h2.814v.551Z" transform="translate(7.972 0.476)" fill="#1a1818" />
                                        <rect id="Rectangle_521" data-name="Rectangle 521" width="1.321" height="7.008" transform="translate(132.687 7.618)" fill="#1a1818" />
                                        <path id="Path_9561" data-name="Path 9561" d="M127.413,14.15V7.142h4.022V7.6h-2.7V10.3H131.2v.453h-2.467v3.4Z" transform="translate(8.497 0.476)" fill="#1a1818" />
                                        <path id="Path_9562" data-name="Path 9562" d="M135.205,6.959a3.514,3.514,0,0,1,3.484,3.7,3.484,3.484,0,1,1-6.956,0,3.512,3.512,0,0,1,3.472-3.7m0,6.945c1.688,0,2.066-1.884,2.066-3.245s-.379-3.245-2.066-3.245S133.15,9.3,133.15,10.659s.369,3.245,2.056,3.245" transform="translate(8.785 0.464)" fill="#1a1818" />
                                        <path id="Path_9563" data-name="Path 9563" d="M139.388,14.15V7.142h3.029a1.932,1.932,0,0,1,1.989,2.065c0,1.072-.779,1.537-1.827,1.666l1.86,3.277h-1.45l-1.915-3.59h.086c1.168,0,1.926-.454,1.926-1.5a1.463,1.463,0,0,0-1.667-1.568h-.714V14.15Z" transform="translate(9.296 0.476)" fill="#1a1818" />
                                        <path id="Path_9564" data-name="Path 9564" d="M145.271,14.15V7.142h1.179l3.667,4.824h.02V7.142h.563V14.15h-.583l-4.261-5.592h-.022V14.15Z" transform="translate(9.688 0.476)" fill="#1a1818" />
                                        <rect id="Rectangle_522" data-name="Rectangle 522" width="1.318" height="7.008" transform="translate(162.24 7.618)" fill="#1a1818" />
                                        <path id="Path_9565" data-name="Path 9565" d="M160.239,14.162h-1.352l-.747-1.828h-2.412l-.7,1.828h-.617l2.855-7.2h.021Zm-3.31-4.857-1.017,2.575h2.044Z" transform="translate(10.297 0.464)" fill="#1a1818" />
                                    </g>
                                </g>
                            </svg>
                       	 </CardContent>
			</CardActionArea>
	    	    </a>
                    </Card>
                    <Card sx={{ minWidth: 275 }}>
	    <CardContent>
                            <svg version="1.1" id="Layer_1"
                                viewBox="0 0 461.7 131.9"  width="250" height="auto" >
                                <g>
                                    <path sx={{fill: '#001689'}} d="M187.5,104.3c-11.1,0-22.3-3.9-31.1-11.7l9.5-11.4c6.6,5.4,13.5,8.9,21.9,8.9c6.6,0,10.6-2.6,10.6-6.9v-0.2
                                    c0-4.1-2.5-6.2-14.8-9.3c-14.8-3.8-24.3-7.8-24.3-22.4V51c0-13.3,10.7-22.1,25.6-22.1c10.7,0,19.8,3.3,27.2,9.3l-8.4,12.1
                                    c-6.5-4.5-12.9-7.2-19-7.2c-6.2,0-9.4,2.8-9.4,6.4v0.2c0,4.8,3.1,6.4,15.8,9.6c14.9,3.9,23.2,9.2,23.2,22v0.2
		C214.4,96.1,203.3,104.3,187.5,104.3z"/>
                                            <path sx={{fill: '#001689'}} d="M252.6,103.2H224V30h28.6c23,0,38.9,15.8,38.9,36.4v0.2C291.5,87.2,275.6,103.2,252.6,103.2z M274.7,66.6
		c0-13-8.9-22.1-22.1-22.1h-12.5v44.2h12.5c13.2,0,22.1-8.9,22.1-21.9V66.6z"/>
                                    <path sx={{fill: '#58B847'}} d="M335.9,104.5c-22.8,0-38.5-16-38.5-37.7v-0.2c0-20.8,16.2-37.9,38.4-37.9c13.2,0,21.1,3.6,28.8,10L354.4,51
                                    c-5.7-4.7-10.7-7.4-19.1-7.4c-11.7,0-21,10.4-21,22.8v0.2c0,13.4,9.2,23.2,22.2,23.2c5.9,0,11.1-1.5,15.2-4.4V75h-16.2V61.1h31.8
		v31.8C359.6,99.3,349.3,104.5,335.9,104.5z"/>
                                    <path sx={{fill: '#58B847'}} d="M379,103.2V30h55.3v14.3H395v14.9h34.5v14.3H395v15.4h39.8v14.3H379z"/>
                                    <g>
                                        <path sx={{fill: '#001689'}} d="M443.8,39.5h-1.7v-8h-3V30h7.7v1.6h-3V39.5z"/>
                                        <path sx={{fill: '#001689'}} d="M453.4,37.2L453.4,37.2l-3-4.5v6.8h-1.6V30h1.8l2.9,4.5l2.9-4.5h1.8v9.5h-1.7v-6.8L453.4,37.2z"/>
                                    </g>
                                </g>
                                <g>
                                    <path sx={{fill: '#58B847'}} d="M120.4,39.7C107.8,51.7,61,82.1,5.4,80c3.2,14.9,11.3,24.2,11.3,24.2c34.7-2.4,89.8-39.6,108-52.9
		C123.7,47.4,122.2,43.3,120.4,39.7z"/>
                                    <path sx={{fill: '#001689'}} d="M124.8,51.4c0,0-26,42-90.9,68.1c5.9,3.5,16.7,8.5,29.1,8.6c15.8,0.2,26.5-3.6,37.3-10.8
		c8.9-5.9,17.6-16.6,21.8-27.3c3-7.5,4.7-15.5,4.7-23.5C126.7,61.4,126,56.2,124.8,51.4z"/>
                                    <path sx={{fill: '#FED600;'}} d="M105.3,20.2C94.5,11,80.6,5.4,65.3,5.4C31.4,5.4,4,32.8,4,66.7c0,4.5,0.5,9.1,1.4,13.3
		C5.4,80,74,70.4,105.3,20.2z"/>
                                </g>
                            </svg>
                        </CardContent>
	   
                    </Card>
                </Stack>
            </Grid>
        </Box>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(username)
root.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
);
