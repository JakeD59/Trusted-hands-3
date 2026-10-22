document.querySelectorAll("form").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();var ok=f.querySelector(".ok");if(ok)ok.classList.add("show");f.reset();});});
