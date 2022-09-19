var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks";
          form.reset()

        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    const xButton = document.getElementsByClassName('x-button')[0]
    
    
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
        toggleButton.classList.toggle('active')
        xButton.classList.toggle('active')
      })

    navbarLinks.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
      toggleButton.classList.toggle('active')
      xButton.classList.toggle('active')
    })

    xButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
      toggleButton.classList.toggle('active')
      xButton.classList.toggle('active')
    })

    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 50) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#0f08cf ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

window.addEventListener("scroll", function(){
  const navbar = document.getElementsByClassName('navbar')[0]
  navbar.classList.toggle("sticky", window.scrollY > 50)
})



  