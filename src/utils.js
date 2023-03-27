export function scrollToSelectedSection(){
  const links = document.querySelectorAll('.nav-item');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const currentLink = event.currentTarget;
      const currentTarget = document.querySelector(currentLink?.getAttribute("href"));
      const currentTargetOffsetTop = currentTarget.offsetTop - 112;

      links.forEach(link => {
        link.classList.remove('active');
      });

      currentLink?.classList?.add('active');

      window.scrollTo({
        top: currentTargetOffsetTop,
        behavior: 'smooth'
      });
    });
  });
}

export function changeSelectionOnScroll(){
  const links = document.querySelectorAll('.nav-item');
  window.addEventListener('scroll', () => {
    const currentPos = window.pageYOffset + 300; // +300 to make the section active when it's 300px above the viewport
  
    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= currentPos + 100 &&
        section.offsetTop + section.offsetHeight > currentPos + 100
      ) {
        links.forEach(link => {
          link.classList.remove('active');
        });
        link.classList.add('active');
        window.history.pushState(null, null, link.hash);
      }
    });
  });
}
export function scrollOnPageLoad(){  
  window.addEventListener('DOMContentLoaded', function() {    
      var target = window.location.hash;
      if (target) {
        const element = document.querySelector(target);
        if (element) {
          window.addEventListener('load', function() {
            let offset = element.offsetTop - 112;
            window.scrollTo({
              top: offset,
              behavior: 'smooth'
            });
          });
        }
      }
  });
  window.addEventListener('hashchange', function() {
    var target = window.location.hash;
      if (target) {
        const element = document.querySelector(target);
        if (element) {
          let offset = element.offsetTop - 112;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }
  });
}

export function changeBackgroundColor(){
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    let bg = document.querySelector('.bg');
    if (bg.style.scale === "2"){
      bg.style.scale = "60%";
    }
    else{
      bg.style.scale = "200%";
    }
  });
}