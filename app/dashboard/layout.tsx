

import DashLayoutWrapper from "./DashLayoutWrapper";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    

    return (
        <>
      
            <DashLayoutWrapper>
              {children}
            </DashLayoutWrapper>
    
        </>
     
    )
  }
  