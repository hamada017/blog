
       //sidebar responsive
       const menuIcon = document.querySelector('.menu-icon');
       const sidebar = document.querySelector('.sidebar');
       const navOverlay = document.querySelector('.nav-overlay');

       function togglesidebare(){
           sidebar.classList.toggle('open');
           navOverlay.classList.toggle('open');
       }

       menuIcon.addEventListener('click', togglesidebare);
       navOverlay.addEventListener('click', togglesidebare);