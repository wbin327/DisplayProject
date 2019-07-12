// 动态修改背景图高度
document.ready = setBgImgHeight()
window.onresize = setBgImgHeight
function setBgImgHeight(){
    let height = document.documentElement.clientHeight;
    // console.log(height)
    $(".bg-img img").css({"height": height});
}

// 页面渲染
let page_data = JSON.parse(data);
render_page()
function render_page() {
    render_company(page_data.companyMsg)
    render_display(page_data.typeList)
}
function render_company(_data) {
    let company_html = doT.template($("#company-template").html())(_data)
    $(".company-content").html(company_html)
}
function render_display(_data){
    let display_html = doT.template($("#display-template").html())(_data)
    $(".footer-display").html(display_html)
}

// 图片幕布
// $(".picture").hover(
//     function (e) {
//         // debugger
//         e.currentTarget.children[1].style.cssText = "visibility: visible"
//     },
//     function (e) {
//         e.currentTarget.children[1].style.cssText = "visibility: hidden"
//     }
// )
