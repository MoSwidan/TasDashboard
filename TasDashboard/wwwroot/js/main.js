function sidebar() {
    document.querySelectorAll(".e-level-1").forEach((e) => {
        e.addEventListener("click", () => {
            let attr = e.getAttribute('aria-expanded');
            if (attr == "true") {
                e.setAttribute('aria-expanded', false);
            } else {
                e.setAttribute('aria-expanded', true);
            }
        });
    });
}