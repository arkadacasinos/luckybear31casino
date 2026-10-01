import { BearGuide } from '@/components/bear-guide'
import { BearFooter, BearHeader } from '@/components/bear-navigation'

export default function Page() {
  return (
    <>
      <a className="lb7-skip" href="#guide">Перейти к содержанию</a>
      <BearHeader />
      <main id="top">
        <section className="lb7-hero" aria-labelledby="hero-heading">
          <section className="lb7-hero-copy">
            <p className="lb7-eyebrow">ЗНАКОМСТВО НАЧИНАЕТСЯ ЗДЕСЬ</p>
            <h1 id="hero-heading">Lucky Bear Casino.<br /><span>Всё по делу.</span></h1>
            <p className="lb7-lead">Без громких обещаний и мелкого шрифта. Разбираемся в названиях, доступе к сайту и правилах, которые стоит знать до первой игры.</p>
            <a className="lb7-action" href="#guide">Познакомиться с казино <span className="lb7-arrow" aria-hidden="true" /></a>
            <p className="lb7-hero-note">Информационный гид <span aria-hidden="true">·</span> Только для совершеннолетних</p>
          </section>
          <figure className="lb7-hero-art">
            <img src="/images/bear-lounge.webp" width="1200" height="800" alt="Медведь за зелёным игровым столом с картами и фишками — иллюстрация Lucky Bear" fetchPriority="high" decoding="async" />
          </figure>
        </section>
        <aside className="lb7-principles" aria-label="О чём этот гид">
          <p>Как проверить адрес</p>
          <p>Что важно в правилах</p>
          <p>Как сохранить контроль</p>
          <p className="lb7-principles-age">18+ <span>Играйте ответственно</span></p>
        </aside>
        <BearGuide />
      </main>
      <BearFooter />
    </>
  )
}
