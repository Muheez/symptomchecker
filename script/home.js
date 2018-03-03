var App = function() {
    this.topNavLinks = document.querySelectorAll(".top-nav .nav-links .link");
    this.closeButtons = document.querySelectorAll(".close-btn");
}

App.prototype = {
    init: function() {
        this.topNavLinksClick(this);
        this.closeButtonsClick(this);
    },
    topNavLinksClick: function(app) {
        app.topNavLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                var ref = this.getAttribute("data-ref"),
                modal = document.querySelector("." + ref);
                modal.classList.add("active");
            })
        })
    },
    closeButtonsClick: function(app) {
        app.closeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                this.parentNode.classList.remove("active");
            })
        })
    }
}

var app = new App();
app.init();