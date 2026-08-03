const button=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
button?.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button?.setAttribute('aria-expanded','false');}));

// Google Analytics 4
window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-NJ0D8KHJHN');

const analyticsScript=document.createElement('script');
analyticsScript.async=true;
analyticsScript.src='https://www.googletagmanager.com/gtag/js?id=G-NJ0D8KHJHN';
document.head.appendChild(analyticsScript);
