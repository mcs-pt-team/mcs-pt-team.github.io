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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="preface.html"><strong aria-hidden="true">1.</strong> 序言</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="part01/welcome/welcome.html"><strong aria-hidden="true">2.</strong> 欢迎来到MCS</a></li><li class="chapter-item expanded "><a href="part01/regulation/regulation.html"><strong aria-hidden="true">3.</strong> 学术规则介绍</a></li><li class="chapter-item expanded "><a href="part01/experience/experience.html"><strong aria-hidden="true">4.</strong> 学习方法与心得</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="part02/mcs-courses-intro.html"><strong aria-hidden="true">5.</strong> MCS课程概述</a></li><li class="chapter-item expanded "><a href="part02/math/intro.html"><strong aria-hidden="true">6.</strong> 数学课程简介</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="part02/math/resources.html"><strong aria-hidden="true">6.1.</strong> 数学学习资源</a></li><li class="chapter-item "><a href="part02/math/remarks.html"><strong aria-hidden="true">6.2.</strong> 数学课程评析</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="part02/math/remarks/prep.html"><strong aria-hidden="true">6.2.1.</strong> PRE-ACADAMIC SEMESTER (预备学期)</a></li><li class="chapter-item "><a href="part02/math/remarks/discrete/basic.html"><strong aria-hidden="true">6.2.2.</strong> 104002 - BASIC CONCEPTS OF MATHEMATICS</a></li><li class="chapter-item "><a href="part02/math/remarks/analysis/infi1.html"><strong aria-hidden="true">6.2.3.</strong> 104195 - INFINITESIMAL CALCULUS 1</a></li><li class="chapter-item "><a href="part02/math/remarks/analysis/infi2.html"><strong aria-hidden="true">6.2.4.</strong> 104281 - INFINITESIMAL CALCULUS 2</a></li><li class="chapter-item "><a href="part02/math/remarks/algebra/alg-a.html"><strong aria-hidden="true">6.2.5.</strong> 104066 - ALGEBRA A</a></li><li class="chapter-item "><a href="part02/math/remarks/algebra/alg-b.html"><strong aria-hidden="true">6.2.6.</strong> 104168 - ALGEBRA B</a></li><li class="chapter-item "><a href="part02/math/remarks/discrete/combi.html"><strong aria-hidden="true">6.2.7.</strong> 104286 - COMBINATORICS</a></li><li class="chapter-item "><a href="part02/math/remarks/applied/ode.html"><strong aria-hidden="true">6.2.8.</strong> 104285 - ORDINARY DIFFERENTIAL EQUATIONS A</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="part02/cs/intro.html"><strong aria-hidden="true">7.</strong> 计算机课程简介</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="part02/cs/resources.html"><strong aria-hidden="true">7.1.</strong> 计算机学习资源</a></li><li class="chapter-item "><a href="part02/cs/remarks.html"><strong aria-hidden="true">7.2.</strong> 计算机课程评析</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="part02/cs/remarks/prog-languages/intro-cs.html"><strong aria-hidden="true">7.2.1.</strong> 104814 - Introduction to Computer Science M</a></li><li class="chapter-item "><a href="part02/cs/remarks/prog-languages/intro-sys.html"><strong aria-hidden="true">7.2.2.</strong> 104824 - Introduction to Systems Programming</a></li><li class="chapter-item "><a href="part02/cs/remarks/algorithms/ds1.html"><strong aria-hidden="true">7.2.3.</strong> 104918 - Data Structures 1</a></li><li class="chapter-item "><a href="part02/cs/remarks/algorithms/combi-algos.html"><strong aria-hidden="true">7.2.4.</strong> 104291 - Combinatorial Algorithms</a></li><li class="chapter-item "><a href="part02/cs/remarks/systems/digital.html"><strong aria-hidden="true">7.2.5.</strong> 104952 - Digital Systems and  Computer Structure</a></li><li class="chapter-item "><a href="part02/cs/remarks/systems/org.html"><strong aria-hidden="true">7.2.6.</strong> 104818 - Computer Organization and Programming</a></li><li class="chapter-item "><a href="part02/cs/remarks/systems/os.html"><strong aria-hidden="true">7.2.7.</strong> 104823 - Operating Systems</a></li><li class="chapter-item "><a href="part02/cs/remarks/other/embedded.html"><strong aria-hidden="true">7.2.8.</strong> Embedded Systems 嵌入式系统</a></li><li class="chapter-item "><a href="part02/cs/remarks/other/graphics.html"><strong aria-hidden="true">7.2.9.</strong> Computer Graphics &amp; Rendering 计算机图形学与渲染</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="part03/apply-career.html"><strong aria-hidden="true">8.</strong> 申研与职业发展</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="part03/career-lectures/2025-mcs-schoolfellow.html"><strong aria-hidden="true">8.1.</strong> 2025 数学系校友专场</a></li><li class="chapter-item "><a href="part03/career-lectures/2025-5-7-apply.html"><strong aria-hidden="true">8.2.</strong> 2025届申研经验分享会</a></li><li class="chapter-item "><a href="part03/career-lectures/2025-6-7-apply.html"><strong aria-hidden="true">8.3.</strong> 2025.6.7 升研升博指导会</a></li><li class="chapter-item "><a href="part03/career-lectures/2025-mcs-outcome.html"><strong aria-hidden="true">8.4.</strong> 2025数学系升学去向</a></li><li class="chapter-item "><a href="part03/career-lectures/2025-3-6-IELTS.html"><strong aria-hidden="true">8.5.</strong> 2025.3.6 雅思讲座会议笔记</a></li></ol></li></ol>';
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
