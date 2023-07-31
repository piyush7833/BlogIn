/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "images.pexels.com"  //by default next js not support any external domain acess we need to configure it
        ]
    }
}

module.exports = nextConfig
