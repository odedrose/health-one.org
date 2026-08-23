document.querySelectorAll('[data-dialog]').forEach(trigger=>{trigger.addEventListener('click',()=>{const dialog=document.getElementById(trigger.dataset.dialog);if(dialog?.showModal)dialog.showModal();});});
document.querySelectorAll('.profile-dialog').forEach(dialog=>{dialog.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();const outside=event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom;if(outside)dialog.close();});});

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
        <article class="board-card">
          <div class="board-monogram" aria-hidden="true">AS</div>
          <div class="board-card-body"><p class="profile-role">Board Member</p><h3>Dr. Amira Sharon</h3><p>Innovation and technology leader with international expertise in disruptive and emerging technologies. Her work through Loop-Impact focuses on innovation, technology strategy and the translation of breakthrough ideas into practical impact.</p><a class="linkedin-link" href="https://www.linkedin.com/in/amira-sharon-loop-impact/" target="_blank" rel="noopener noreferrer" aria-label="Amira Sharon on LinkedIn">LinkedIn profile <span aria-hidden="true">↗</span></a></div>
        </article>
        <article class="board-card">
          <div class="board-monogram" aria-hidden="true">AA</div>
          <div class="board-card-body"><p class="profile-role">Board Member</p><h3>Almog Aley-Raz</h3><p>Medtech entrepreneur and executive with extensive experience developing, financing and commercializing innovative medical technologies. He has led CorNeat Vision as CEO and VP R&amp;D, advancing novel ophthalmic solutions from development toward clinical application.</p><a class="linkedin-link" href="https://www.linkedin.com/in/almog-aley-raz-87559a/" target="_blank" rel="noopener noreferrer" aria-label="Almog Aley-Raz on LinkedIn">LinkedIn profile <span aria-hidden="true">↗</span></a></div>
        </article>
        <article class="board-card">
          <div class="board-monogram" aria-hidden="true">TM</div>
          <div class="board-card-body"><p class="profile-role">Board Member</p><h3>Tina Meerry</h3><p>Senior pharmaceutical executive with more than 25 years of global industry leadership. She is VP and General Manager, Israel at Rafa, following senior roles at Sanofi, Novo Nordisk and MSD spanning specialty care, market access, marketing and strategic leadership.</p><a class="linkedin-link" href="https://www.linkedin.com/in/tina-meerry-melusyan-64616423/" target="_blank" rel="noopener noreferrer" aria-label="Tina Meerry on LinkedIn">LinkedIn profile <span aria-hidden="true">↗</span></a></div>
        </article>
        <article class="board-card">
          <div class="board-monogram" aria-hidden="true">YS</div>
          <div class="board-card-body"><p class="profile-role">Board Member</p><h3>Yair Sharon</h3><p>Marketing and business development executive with experience connecting advanced technologies with industrial and commercial markets. His work includes leadership at Sharon Tuvia and activity around advanced manufacturing and 3D-printing technologies.</p><a class="linkedin-link" href="https://www.linkedin.com/in/yair-sharon/" target="_blank" rel="noopener noreferrer" aria-label="Yair Sharon on LinkedIn">LinkedIn profile <span aria-hidden="true">↗</span></a></div>
        </article>
        <article class="board-card">
          <div class="board-monogram" aria-hidden="true">YG</div>
          <div class="board-card-body"><p class="profile-role">Board Member</p><h3>Yaniv Garty</h3><p>Technology executive and board leader who served as Vice President and General Manager of Intel Israel. He serves on public-company boards and has chaired the Israel-America Chamber of Commerce, bringing extensive experience in technology, global business and innovation ecosystems.</p><a class="linkedin-link" href="https://www.linkedin.com/in/yaniv-garty/" target="_blank" rel="noopener noreferrer" aria-label="Yaniv Garty on LinkedIn">LinkedIn profile <span aria-hidden="true">↗</span></a></div>
        </article>
      </div>
      <div class="advisory-preview">
        <span class="future-label">In formation</span>
        <h3>Partners Advisory Board</h3>
        <p>HealthONE is establishing a Partners Advisory Board of senior healthcare leaders, innovators, researchers and industry executives to strengthen strategic direction, cross-system collaboration and international reach. Individual profiles will be published as the board is formed.</p>
      </div>
    </div>`;
}
