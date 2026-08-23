function wireProfileDialogs(){
  document.querySelectorAll('[data-dialog]').forEach(trigger=>{
    if(trigger.dataset.dialogBound==='true') return;
    trigger.dataset.dialogBound='true';
    trigger.addEventListener('click',()=>{
      const dialog=document.getElementById(trigger.dataset.dialog);
      if(dialog?.showModal) dialog.showModal();
    });
  });
  document.querySelectorAll('.profile-dialog').forEach(dialog=>{
    if(dialog.dataset.dialogBound==='true') return;
    dialog.dataset.dialogBound='true';
    dialog.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=>{
      const rect=dialog.getBoundingClientRect();
      const outside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;
      if(outside) dialog.close();
    });
  });
}

/* Board of Directors — replaces the original future-board placeholder. */
const governanceSection=document.querySelector('.governance-section');
if(governanceSection){
  governanceSection.innerHTML=`
    <div class="container">
      <div class="section-heading board-heading">
        <div><p class="eyebrow">Governance</p><h2>Board of Directors</h2></div>
        <p>HealthONE's Board brings together senior experience in healthcare, technology, pharmaceuticals, medtech, innovation, business development and international leadership.</p>
      </div>

      <div class="board-grid">
        <article class="profile-card board-profile-card">
          <img src="/Board-Amira.jpg" alt="Portrait of Dr. Amira Sharon" width="600" height="600">
          <div class="profile-card-body">
            <p class="profile-role">Board Member</p>
            <h3>Dr. Amira Sharon</h3>
            <p>International innovation and technology expert focused on disruptive and emerging breakthrough technologies, strategy and translating advanced ideas into practical impact.</p>
            <div class="profile-links"><button class="profile-button" type="button" data-dialog="amira-board-profile">Read full profile</button></div>
          </div>
        </article>

        <article class="profile-card board-profile-card">
          <img src="/Board-Almog.jpeg" alt="Portrait of Almog Aley-Raz" width="600" height="600">
          <div class="profile-card-body">
            <p class="profile-role">Board Member</p>
            <h3>Almog Aley-Raz</h3>
            <p>Medtech entrepreneur and executive with extensive experience developing, financing and commercializing innovative medical technologies, particularly in ophthalmology.</p>
            <div class="profile-links"><button class="profile-button" type="button" data-dialog="almog-board-profile">Read full profile</button></div>
          </div>
        </article>

        <article class="profile-card board-profile-card">
          <img src="/Board-Tina.jpeg" alt="Portrait of Tina Meerry" width="600" height="600">
          <div class="profile-card-body">
            <p class="profile-role">Board Member</p>
            <h3>Tina Meerry</h3>
            <p>Senior pharmaceutical executive with more than 25 years of global leadership experience spanning specialty care, market access, marketing, public affairs and strategic management.</p>
            <div class="profile-links"><button class="profile-button" type="button" data-dialog="tina-board-profile">Read full profile</button></div>
          </div>
        </article>

        <article class="profile-card board-profile-card">
          <img src="/Board-Yair.jpeg" alt="Portrait of Yair Sharon" width="600" height="600">
          <div class="profile-card-body">
            <p class="profile-role">Board Member</p>
            <h3>Yair Sharon</h3>
            <p>Marketing and business development professional with experience connecting advanced manufacturing technologies, including additive manufacturing and 3D printing, with industrial markets.</p>
            <div class="profile-links"><button class="profile-button" type="button" data-dialog="yair-board-profile">Read full profile</button></div>
          </div>
        </article>

        <article class="profile-card board-profile-card">
          <img src="/Board-Yaniv.jpg" alt="Portrait of Yaniv Garty" width="600" height="600">
          <div class="profile-card-body">
            <p class="profile-role">Board Member</p>
            <h3>Yaniv Garty</h3>
            <p>Senior technology executive and board leader with extensive experience in global business, innovation ecosystems and U.S.–Israel economic and technology collaboration.</p>
            <div class="profile-links"><button class="profile-button" type="button" data-dialog="yaniv-board-profile">Read full profile</button></div>
          </div>
        </article>
      </div>

      <div class="advisory-preview">
        <span class="future-label">In formation</span>
        <h3>Partners Advisory Board</h3>
        <p>HealthONE is establishing a Partners Advisory Board of senior healthcare leaders, innovators, researchers and industry executives to strengthen strategic direction, cross-system collaboration and international reach. Individual profiles will be published as the board is formed.</p>
      </div>
    </div>

    <dialog class="profile-dialog" id="amira-board-profile" aria-labelledby="amira-board-name">
      <button class="dialog-close" type="button" aria-label="Close profile">×</button>
      <div class="dialog-profile-header"><img src="/Board-Amira.jpg" alt="" width="180" height="180"><div><p class="profile-role">Board Member</p><h2 id="amira-board-name">Dr. Amira Sharon</h2></div></div>
      <div class="dialog-copy">
        <p>Dr. Amira Sharon is an international expert in disruptive and emerging breakthrough technologies and the founder of Loop-Impact. Her work focuses on innovation strategy, technology assessment and helping organizations understand how new technologies can be translated into meaningful business and societal impact.</p>
        <p>She brings a cross-disciplinary perspective spanning technology, innovation and executive decision-making, with experience engaging leaders and organizations around the strategic implications of rapid technological change. Her background includes executive education at Harvard Business School.</p>
        <h3>Professional focus</h3>
        <ul><li>Disruptive and emerging technologies</li><li>Innovation and technology strategy</li><li>Executive decision-making and transformation</li></ul>
      </div>
    </dialog>

    <dialog class="profile-dialog" id="almog-board-profile" aria-labelledby="almog-board-name">
      <button class="dialog-close" type="button" aria-label="Close profile">×</button>
      <div class="dialog-profile-header"><img src="/Board-Almog.jpeg" alt="" width="180" height="180"><div><p class="profile-role">Board Member</p><h2 id="almog-board-name">Almog Aley-Raz</h2></div></div>
      <div class="dialog-copy">
        <p>Almog Aley-Raz is a medtech entrepreneur and executive with extensive experience in the development, financing and commercialization of innovative medical technologies. He is CEO and VP of R&amp;D of CorNeat Vision, an ophthalmic medical-device company developing technologies for corneal, glaucoma and ocular-surface surgery.</p>
        <p>His work has included advancing novel ophthalmic solutions from concept and product development through clinical programs, international exposure, investor engagement and commercialization pathways. He brings HealthONE practical experience in entrepreneurship, medtech innovation, product development and the translation of breakthrough technologies toward clinical use.</p>
        <h3>Professional focus</h3>
        <ul><li>Medical-device entrepreneurship and management</li><li>Ophthalmic innovation and product development</li><li>Clinical translation, financing and commercialization</li></ul>
      </div>
    </dialog>

    <dialog class="profile-dialog" id="tina-board-profile" aria-labelledby="tina-board-name">
      <button class="dialog-close" type="button" aria-label="Close profile">×</button>
      <div class="dialog-profile-header"><img src="/Board-Tina.jpeg" alt="" width="180" height="180"><div><p class="profile-role">Board Member</p><h2 id="tina-board-name">Tina Meerry</h2></div></div>
      <div class="dialog-copy">
        <p>Tina Meerry is a senior executive leader with more than 25 years of experience in the global pharmaceutical industry. She currently serves as VP and General Manager, Israel at Rafa, where she contributes to the company's growth and efforts to bring innovative therapies to patients.</p>
        <p>Her career includes senior leadership roles at Sanofi, Novo Nordisk and MSD, with responsibilities spanning specialty care, marketing, market access, public affairs and strategic leadership. She brings HealthONE deep experience in healthcare markets, patient access, pharmaceutical strategy, organizational leadership and the implementation of innovation within complex health systems.</p>
        <h3>Professional focus</h3>
        <ul><li>Pharmaceutical and healthcare leadership</li><li>Market access, marketing and public affairs</li><li>Strategic growth and patient access to innovation</li></ul>
      </div>
    </dialog>

    <dialog class="profile-dialog" id="yair-board-profile" aria-labelledby="yair-board-name">
      <button class="dialog-close" type="button" aria-label="Close profile">×</button>
      <div class="dialog-profile-header"><img src="/Board-Yair.jpeg" alt="" width="180" height="180"><div><p class="profile-role">Board Member</p><h2 id="yair-board-name">Yair Sharon</h2></div></div>
      <div class="dialog-copy">
        <p>Yair Sharon is an experienced marketing and business development professional working at the interface between advanced technologies and industrial markets. His professional activity includes Sharon Tuvia, an Israeli precision-manufacturing company with capabilities in advanced machining, additive manufacturing and metal 3D printing.</p>
        <p>His experience includes identifying commercial opportunities, building market relationships and connecting innovative manufacturing technologies with real operational needs. He contributes to HealthONE a practical industrial perspective on technology adoption, commercialization, business development and the role of advanced manufacturing in medical and other high-precision applications.</p>
        <h3>Professional focus</h3>
        <ul><li>Marketing and business development</li><li>Advanced and additive manufacturing</li><li>Technology commercialization and industrial partnerships</li></ul>
      </div>
    </dialog>

    <dialog class="profile-dialog" id="yaniv-board-profile" aria-labelledby="yaniv-board-name">
      <button class="dialog-close" type="button" aria-label="Close profile">×</button>
      <div class="dialog-profile-header"><img src="/Board-Yaniv.jpg" alt="" width="180" height="180"><div><p class="profile-role">Board Member</p><h2 id="yaniv-board-name">Yaniv Garty</h2></div></div>
      <div class="dialog-copy">
        <p>Yaniv Garty is a senior technology executive and board leader who served as Intel Vice President and CEO of Intel Israel. He joined Intel following the acquisition of Envara and subsequently held senior positions within Intel's global organization before being appointed to lead Intel Israel.</p>
        <p>From 2018 to 2023, Yaniv served as Chairman of the Israel-America Chamber of Commerce, helping advance U.S.–Israel commercial cooperation and strategic initiatives, including collaboration frameworks in healthcare. He brings HealthONE extensive experience in global technology leadership, innovation ecosystems, corporate strategy, governance and international partnership building.</p>
        <h3>Professional focus</h3>
        <ul><li>Global technology and corporate leadership</li><li>Governance and strategic management</li><li>Innovation ecosystems and international collaboration</li></ul>
      </div>
    </dialog>`;
}

wireProfileDialogs();
