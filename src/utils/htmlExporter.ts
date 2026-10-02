/**
 * Senior utility to export the entire website as a 100% self-contained, standalone single HTML5 file.
 * Exactly as requested by the user: "умести все в 1 хтмл5 файл".
 */

export function exportSingleFileHtml(): void {
  const htmlContent = `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Фестиваль-ярмарок «Курсантська Юшка» | ДФК НУ ОМА • 611 група</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #040e1a;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      padding-bottom: 60px;
    }
    .container { max-width: 1040px; margin: 0 auto; padding: 0 20px; }
    header {
      background: linear-gradient(180deg, #07192f 0%, #040e1a 100%);
      border-bottom: 3px solid #d4af37;
      text-align: center;
      padding: 45px 20px 35px 20px;
      position: relative;
    }
    .ribbon {
      background: #0f2e54;
      color: #fef08a;
      display: inline-block;
      padding: 6px 18px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      border: 1px solid #d4af37;
      margin-bottom: 14px;
    }
    h1 {
      color: #ffffff;
      font-size: 2.6rem;
      letter-spacing: 1px;
      margin-bottom: 8px;
      text-transform: uppercase;
      font-weight: 900;
    }
    .college-name {
      color: #93c5fd;
      font-size: 1.05rem;
      max-width: 780px;
      margin: 0 auto 16px auto;
    }
    .charity-banner {
      background: #0b274c;
      border: 2px dashed #f59e0b;
      padding: 16px 24px;
      border-radius: 14px;
      display: inline-block;
      color: #fef08a;
      font-weight: 800;
      font-size: 1.15rem;
      margin: 16px 0;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin: 25px 0 10px 0;
    }
    .info-card {
      background: #07192f;
      border: 1px solid #1e3a5f;
      border-radius: 12px;
      padding: 16px;
      text-align: center;
    }
    .info-card h4 { color: #f59e0b; font-size: 0.85rem; margin-bottom: 4px; text-transform: uppercase; }
    .info-card p { font-size: 1.15rem; font-weight: 700; color: #fff; }
    
    .section-title {
      font-size: 2rem;
      color: #fef08a;
      text-align: center;
      margin: 45px 0 20px 0;
      text-transform: uppercase;
      font-weight: 800;
    }
    .section-sub {
      text-align: center;
      color: #94a3b8;
      max-width: 650px;
      margin: 0 auto 30px auto;
      font-size: 0.95rem;
    }
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .dish-card {
      background: #07192f;
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-radius: 16px;
      padding: 22px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .dish-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
    .dish-title { font-size: 1.2rem; color: #ffffff; font-weight: 700; line-height: 1.3; }
    .dish-price {
      background: rgba(245, 158, 11, 0.2);
      border: 1px solid #f59e0b;
      color: #fef08a;
      font-weight: 800;
      font-size: 1rem;
      padding: 4px 12px;
      border-radius: 9999px;
      white-space: nowrap;
    }
    .dish-desc { color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin-bottom: 12px; }
    .dish-tag { color: #38bdf8; font-size: 0.8rem; font-style: italic; }
    
    .cauldron-box {
      background: #081d38;
      border: 2px solid #f59e0b;
      border-radius: 18px;
      padding: 28px;
      margin: 40px 0;
      text-align: center;
    }
    .cauldron-box h3 { color: #ffffff; font-size: 1.6rem; margin-bottom: 10px; }
    .cauldron-box p { color: #cbd5e1; font-size: 0.95rem; max-width: 700px; margin: 0 auto; line-height: 1.6; }
    
    .footer {
      text-align: center;
      margin-top: 50px;
      padding-top: 25px;
      border-top: 1px solid #1e3a5f;
      color: #64748b;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div class="ribbon">⚓ ВСП ДФК НУ ОМА • 611 ГРУПА ⚓</div>
      <h1>Фестиваль-ярмарок «Курсантська Юшка»</h1>
      <p class="college-name">Відокремлений структурний підрозділ Дунайський фаховий коледж Національного університету «Одеська морська академія»</p>
      
      <div class="charity-banner">
        💖 БЛАГОДІЙНА АКЦІЯ: УСІ ГРОШІ З ЯРМАРКИ БУДУТЬ ВІДПРАВЛЕНІ ДО ДИТЯЧОГО БУДИНКУ
      </div>

      <div class="info-grid">
        <div class="info-card">
          <h4>📅 Дата</h4>
          <p>2 жовтня (п'ятниця)</p>
        </div>
        <div class="info-card">
          <h4>⏰ Початок</h4>
          <p>11:00 ранку</p>
        </div>
        <div class="info-card">
          <h4>📍 Локація</h4>
          <p>Проспект Миру, 9</p>
        </div>
        <div class="info-card">
          <h4>⚓ Організатор</h4>
          <p>611 група курсантів</p>
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="cauldron-box">
      <h3>🍲 Справжня Курсантська Юшка в казані</h3>
      <p>Юшка вариться наживо курсантами 611 групи на плацу коледжу у великому казані на дубових дровах. Навариста дунайська риба, польовий димок та традиційний часниковий саламаур!</p>
    </div>

    <h2 class="section-title">Ярмарковий Стіл 611 Групи</h2>
    <p class="section-sub">Домашня свіжа випічка та смаколики за доступними цінами на підтримку дитячого будинку:</p>

    <div class="menu-grid">
      <div class="dish-card" style="border: 2px solid #f59e0b;">
        <div>
          <div class="dish-header">
            <div class="dish-title">Курсантська Юшка від 611 групи</div>
            <div class="dish-price">Благодійний внесок</div>
          </div>
          <div class="dish-desc">Навариста гаряча юшка на дубових дровах з димком березової головешки, часниковим саламауром та скибкою свіжого хліба.</div>
        </div>
        <div class="dish-tag">★ Головна страва ярмарку в чавунному казані</div>
      </div>

      <div class="dish-card">
        <div>
          <div class="dish-header">
            <div class="dish-title">Ніжні Кекси від 611 групи</div>
            <div class="dish-price">20 грн / шт</div>
          </div>
          <div class="dish-desc">Свіжі ароматні домашні кекси з шоколадними краплями та ваніллю. Приготовані з теплом курсантами.</div>
        </div>
        <div class="dish-tag">★ 20 грн за штуку на благодійність</div>
      </div>

      <div class="dish-card">
        <div>
          <div class="dish-header">
            <div class="dish-title">Пиріжки з соковитою вишнею</div>
            <div class="dish-price">30 грн / шт</div>
          </div>
          <div class="dish-desc">Домашнє пишне дріжджове тісто, щедра начинка зі стиглої соковитої вишні, притрушені цукровою пудрою.</div>
        </div>
        <div class="dish-tag">★ 30 грн за штуку на благодійність</div>
      </div>

      <div class="dish-card">
        <div>
          <div class="dish-header">
            <div class="dish-title">Пиріжки з яблуками та корицею</div>
            <div class="dish-price">30 грн / шт</div>
          </div>
          <div class="dish-desc">Запашні пиріжки з дунайськими яблуками, корицею та золотавою скоринкою прямо з печі.</div>
        </div>
        <div class="dish-tag">★ 30 грн за штуку на благодійність</div>
      </div>

      <div class="dish-card">
        <div>
          <div class="dish-header">
            <div class="dish-title">Домашня солодка здоба</div>
            <div class="dish-price">25 грн / шт</div>
          </div>
          <div class="dish-desc">Рум'яні рогалики з повидлом, макові булочки та смаколики від родин курсантів 611 групи.</div>
        </div>
        <div class="dish-tag">★ Домашня випічка</div>
      </div>

      <div class="dish-card">
        <div>
          <div class="dish-header">
            <div class="dish-title">Гарячий чай з лимоном</div>
            <div class="dish-price">15 грн / стакан</div>
          </div>
          <div class="dish-desc">Зігріваючий запашний чай з скибочкою лимона для затишного осіннього дня біля казана.</div>
        </div>
        <div class="dish-tag">★ Зігріваючий напій</div>
      </div>
    </div>

    <div class="footer">
      <p>ВСП Дунайський фаховий коледж Національного університету «Одеська морська академія»</p>
      <p>Організовано курсантами 611 групи • 2 жовтня (п'ятниця) об 11:00 • Проспект Миру, 9</p>
      <p style="margin-top: 6px; color: #f59e0b;">Усі виручені гроші будуть відправлені до дитячого будинку 💖</p>
    </div>
  </main>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kursantska-yushka-611-grupa.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
