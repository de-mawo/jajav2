import 'bootstrap/dist/css/bootstrap.css';
import { unstable_getServerSession } from 'next-auth';
import '../styles/main.scss'
import '../styles/responsive.scss'
import { Providers } from './providers';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await unstable_getServerSession();
  return (
    <html>
      <head />
      <body>
    <Providers sessions={session}>

        {children}
    </Providers>

        </body>
    </html>
  )
}
