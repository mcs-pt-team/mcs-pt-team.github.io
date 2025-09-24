// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="preface/preface.html"><strong aria-hidden="true">1.</strong> 前言</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="part01/welcome/welcome.html"><strong aria-hidden="true">2.</strong> 欢迎来到MCS</a></li><li class="chapter-item expanded "><a href="part01/regulation/regulation.html"><strong aria-hidden="true">3.</strong> 学术规则介绍</a></li><li class="chapter-item expanded "><a href="part01/experience/experience.html"><strong aria-hidden="true">4.</strong> 学习方法与心得</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="part02/mcs-courses.html"><strong aria-hidden="true">5.</strong> MCS课程概述</a></li><li class="chapter-item expanded "><a href="part02/math/math-courses-intro.html"><strong aria-hidden="true">6.</strong> 数学课程简介</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="part02/math/math-resources.html"><strong aria-hidden="true">6.1.</strong> 数学学习资源</a></li><li class="chapter-item expanded "><a href="part02/math/math-courses-remarks.html"><strong aria-hidden="true">6.2.</strong> 数学课程评析</a></li></ol></li><li class="chapter-item expanded "><a href="part02/cs/cs-courses-intro.html"><strong aria-hidden="true">7.</strong> 计算机课程简介</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="part02/cs/cs-resources.html"><strong aria-hidden="true">7.1.</strong> 计算机学习资源</a></li><li class="chapter-item expanded "><a href="part02/cs/cs-courses-remarks.html"><strong aria-hidden="true">7.2.</strong> 计算机课程评析</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="part03/apply-career.html"><strong aria-hidden="true">8.</strong> 申研与职业发展</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
