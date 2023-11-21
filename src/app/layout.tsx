import { Metadata } from "next"

export const metadata :Metadata= {
  title: {
    absolute:"",
    default:"Learn Nextjs -Codevolution",
    template:"%s | Codevolution"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  style={{display:'flex',flexDirection:"column",height:"100vh", margin:0}}>
        <header style={{backgroundColor:"orangered" ,padding:'10px',color:"#fff",fontWeight:"bold",textTransform:"uppercase",fontFamily:"sans-serif"}}>This is a header</header>
        {children}
        <footer style={{backgroundColor:"green" ,padding:'10px',color:"#fff",fontWeight:"bold",textTransform:"uppercase",fontFamily:"sans-serif"}}>This is a footer</footer>
        </body>
    </html>
  )
}
