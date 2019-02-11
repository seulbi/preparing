(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{302:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-버전-관리-도구"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-버전-관리-도구","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 버전 관리 도구")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EB%B2%84%EC%A0%84_%EA%B4%80%EB%A6%AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("버전 관리"),s("OutboundLink")],1),t._v(" 도구 "),s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),s("OutboundLink")],1),t._v("을 설치합니다.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/git.png"),alt:""}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"mac-os-사용자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-사용자","aria-hidden":"true"}},[t._v("#")]),t._v(" Mac OS 사용자")]),t._v(" "),s("p",[t._v("Mac OS는 기본적으로 Git이 설치되어 있습니다. 아래 명령을 실행하여 "),s("code",[t._v("git")]),t._v(" 버전을 출력할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git version 2.17.2 (Apple Git-113)")]),t._v("\n")])])]),s("p",[t._v("Homebrew 설치 명령을 사용해 Git을 설치합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("p",[t._v("Git 정보를 출력해 Dependencies 목록에 ✘ 표시된 의존 모듈를 설치합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ brew info "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ——————————————————————————————")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 출력된 Dependencies 예시")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ——————————————————————————————")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ==> Dependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required: gettext ✔, pcre2 ✘")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional: openssl ✔, curl ✘")]),t._v("\n")])])]),s("p",[t._v("설치된 Git 버전을 확인합니다. 만약 설치 이전과 버전이 동일하다면?")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git version 2.17.2 (Apple Git-113)")]),t._v("\n")])])]),s("p",[s("code",[t._v(".bash_profile")]),t._v(" 파일을 "),s("router-link",{attrs:{to:"./Editor.html"}},[t._v("VSCode")]),t._v("로 연 후,")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ code ~/.bash_profile\n")])])]),s("p",[t._v("아래 코드를 복사 붙여넣고 저장합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PATH")]),t._v("\n")])])]),s("p",[s("code",[t._v("source")]),t._v(" 명령을 사용해 "),s("code",[t._v(".bash_profile")]),t._v(" 파일에 설정된 모든 변수들이 현재 쉘의 일부가 되도록 설정합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" ~/.bash_profile\n")])])]),s("p",[t._v("다시 한 번 Git 버전을 출력하면 이전 버전이 아닌 설치된 버전 정보가 정상적으로 출력됩니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git version 2.20.1")]),t._v("\n")])])]),s("br"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"windows-사용자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-사용자","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows 사용자")]),t._v(" "),s("p",[t._v("아래 방법 중 하나를 선택해 Git, Bash Shell을 사용할 수 있는 환경을 구성하세요.")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#cmder"}},[t._v("Cmder")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#git-for-windows"}},[t._v("Git for Windows")])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("주의!")]),t._v(" "),s("p",[t._v("수업에서는 "),s("a",{attrs:{href:"https://goo.gl/tuS1TR",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bash Shell"),s("OutboundLink")],1),t._v("을 사용합니다. Windows 사용자는 Cmder 또는 Git Bash를 사용하거나,\n"),s("router-link",{attrs:{to:"./WSL.html"}},[t._v("리눅스 서브 시스템(WSL)")]),t._v("을 설정해 Bash를 사용할 수 있습니다. (WSL은 Windows 10 이상 설정 가능)")],1)]),t._v(" "),s("h3",{attrs:{id:"cmder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmder","aria-hidden":"true"}},[t._v("#")]),t._v(" Cmder")]),t._v(" "),s("p",[t._v("Cmder 명령 프롬프트 확장 도구를 설치하면 Windows 명령 프롬프트의 사용성을 향상 시켜\n아래와 같은 장점을 제공합니다.")]),t._v(" "),s("ul",[s("li",[t._v("복사("),s("code",[t._v("Ctrl+C")]),t._v("), 붙여넣기("),s("code",[t._v("Ctrl+V")]),t._v(")가 가능해집니다.")]),t._v(" "),s("li",[t._v("Bash Shell 명령어를 사용할 수 있습니다.")]),t._v(" "),s("li",[t._v("Git 설치까지 한 번에 진행 가능해 별도의 Git 클라이언트를 추가 설치할 필요가 없습니다.")])]),t._v(" "),s("iframe-wrapper",{attrs:{src:"http://cmder.net/"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h4",{attrs:{id:"설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설치","aria-hidden":"true"}},[t._v("#")]),t._v(" 설치")]),t._v(" "),s("p",[t._v("Chocolatey를 사용해 "),s("a",{attrs:{href:"https://chocolatey.org/packages/Cmder",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cmder"),s("OutboundLink")],1),t._v("를 설치하거나,")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ choco "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmder\n")])])]),s("br"),t._v(" "),s("p",[s("a",{attrs:{href:"http://cmder.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cmder.net"),s("OutboundLink")],1),t._v(" 사이트에서 "),s("code",[t._v("Download Full")]),t._v(" 버튼을 클릭해 Cmder를 설치합니다.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Mini 버전과 Full 버전의 차이는 "),s("a",{attrs:{href:"#git-for-windows"}},[t._v("Git for Windows")]),t._v(" 설치가 포함되는지 여부입니다.")])]),t._v(" "),s("p",[t._v("설치 및 설정은 아래 영상을 참고하세요.")]),t._v(" "),s("iframe-wrapper",{attrs:{src:"https://www.youtube-nocookie.com/embed/b4prTPHXEow"}}),t._v(" "),s("h4",{attrs:{id:"설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정","aria-hidden":"true"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),s("p",[t._v("설정(Settings...) 메뉴를 찾거나, 단축키("),s("code",[t._v("Win+Alt+P")]),t._v(")를 눌러 설정 창을 띄웁니다.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/cmder-01.png"),alt:""}}),t._v(" "),s("p",[s("strong",[t._v("설정 > Startup > Environment")]),t._v("를 선택한 후, 아래 설정 코드를 추가합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" LANG"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ko_KR.UTF-8\n")])])]),s("img",{attrs:{src:t.$withBase("/cmder-02.png"),alt:""}}),t._v(" "),s("p",[s("strong",[t._v("설정 > Startup > Task")]),t._v("를 선택한 후, 아래 그림을 참고하여 "),s("strong",[t._v("{bash::bash as Admin}")]),t._v(" 을\n새로운 기본 작업 콘솔(Default task new console)로 설정 체크한 후, Save settings를 눌러 설정을 저장합니다.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/cmder-03.png"),alt:""}}),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"./WSL.html"}},[t._v("WSL")]),t._v(" 설정을 마친 Windows 10 사용자는 "),s("strong",[t._v("{WSL::bash}")]),t._v(" 를 기본 작업 콘솔로 사용할 수 있습니다.")],1)]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"git-for-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-for-windows","aria-hidden":"true"}},[t._v("#")]),t._v(" Git for Windows")]),t._v(" "),s("p",[t._v("Chocolatey를 사용해 "),s("a",{attrs:{href:"https://chocolatey.org/packages/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 패키지"),s("OutboundLink")],1),t._v("를 설치하거나,")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ choco "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for Windows"),s("OutboundLink")],1),t._v("를 사용해 설치할 수 있습니다.\n설치가 완료되면 Git, Git Bash를 사용할 수 있습니다.")]),t._v(" "),s("iframe-wrapper",{attrs:{src:"https://gitforwindows.org/"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"git-사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-사용법","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 사용법")]),t._v(" "),s("p",[t._v("Git 사용법은 "),s("a",{attrs:{href:"https://rogerdudler.github.io/git-guide/index.ko.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git - 간편 안내서"),s("OutboundLink")],1),t._v(" 또는\n"),s("a",{attrs:{href:"https://online.fastcampus.co.kr/courses/291242/lectures/4964603",target:"_blank",rel:"noopener noreferrer"}},[t._v("야무의 Git 영상 강의"),s("OutboundLink")],1),t._v("를 참고하세요.")]),t._v(" "),s("iframe-wrapper",{attrs:{src:"https://rogerdudler.github.io/git-guide/index.ko.html"}})],1)},[],!1,null,null,null);a.default=r.exports}}]);