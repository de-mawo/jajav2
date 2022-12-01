
import { Providers } from "../providers";
import DashLayoutWrapper from "./DashLayoutWrapper";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    

    return (
        <>
        {/* <Providers >  */}
            <DashLayoutWrapper>
              {children}
            </DashLayoutWrapper>
        {/* </Providers> */}
        </>
     
    )
  }
  