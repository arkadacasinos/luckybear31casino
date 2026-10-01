export function BearHeader() {
  return (
    <header className="lb7-header">
      <a className="lb7-brand" href="#top" aria-label="Lucky Bear — начало страницы">
        <img src="/icon.png" width="44" height="44" alt="" />
        <span>LUCKY BEAR<small>CASINO GUIDE</small></span>
      </a>
      <nav className="lb7-nav" aria-label="Основная навигация">
        <a href="#overview">О казино</a>
        <a href="#access">Доступ к сайту</a>
        <a href="#rules">Что важно знать</a>
        <a href="#questions">Вопросы</a>
      </nav>
      <a className="lb7-header-link" href="#guide">Читать гид <span className="lb7-arrow" aria-hidden="true" /></a>
      <span className="lb7-age" aria-label="Только для лиц старше 18 лет">18+</span>
    </header>
  )
}

export function BearFooter() {
  return (
    <footer className="lb7-footer">
      <section className="lb7-footer-top">
        <a className="lb7-brand" href="#top"><img src="/icon.png" width="40" height="40" alt="" loading="lazy" /><span>LUCKY BEAR<small>CASINO GUIDE</small></span></a>
        <p>Не официальный сайт и не игровая платформа.<br />Независимый информационный материал для взрослых.</p>
        <a className="lb7-up" href="#top">Наверх <span aria-hidden="true">↑</span></a>
      </section>
      <nav className="lb7-tags" aria-label="Поиск по темам: хештеги">
        <a href="#overview">#Lucky_Bear_Casino</a>
        <a href="#overview">#Luckybear_Casino</a>
        <a href="#access">#Luckybear_Casino_зеркало</a>
        <a href="#official">#Luckybear_Casino_официальный</a>
        <a href="#official">#Luckybear_Casino_официальный_сайт</a>
        <a href="#names">#Lucky_Bear_казино</a>
        <a href="#names">#Лаки_Бир_казино</a>
        <a href="#online">#Лакибир_казино</a>
        <a href="#access">#Лаки_Бир_казино_зеркало</a>
        <a href="#online">#Лаки_Бир_казино_онлайн</a>
        <a href="#rules">#Лаки_Бир_казино_официальный</a>
        <a href="#rules">#Лаки_Бир_казино_официальный_сайт</a>
        <a href="#site">#Лакибир_казино_официальный_сайт</a>
        <a href="#site">#Лаки_Бир_казино_сайт</a>
      </nav>
      <section className="lb7-footer-bottom"><p>© 2026 Lucky Bear Guide</p><p>Азартные игры — не способ заработка. 18+</p></section>
    </footer>
  )
}
