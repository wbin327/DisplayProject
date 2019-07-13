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
    render_image_group(page_data.typeList[0].projectList)
}
function render_company(_data) {
    let company_html = doT.template($("#company-template").html())(_data)
    $(".company-content").html(company_html)
}
function render_display(_data){
    let display_html = doT.template($("#display-template").html())(_data)
    $(".footer-display").html(display_html)
}
function render_image_group(_data){
    let image_group_html = doT.template($("#image-group-template").html())(_data)
    $(".image-box").html(image_group_html)
}

// 图片幕布
$(".picture").hover(
    inFun, outFun
)
function inFun(e){
    e.currentTarget.children[1].style.cssText = "visibility: visible"
}
function outFun(e){
    e.currentTarget.children[1].style.cssText = "visibility: hidden"
}

// 左右按钮
$(".pre-img").click(
    function () {
        let lastChild = $('.image-box .picture:last')
        lastChild.remove()
        $(".image-box").prepend(lastChild)
        // 这里一定要重新绑定hover事件
        $(".image-box .picture:first").bind({
            "mouseover": inFun,
            "mouseout": outFun,
        })
    }
)
$(".next-img").click(
    function () {
        let firstChild = $('.image-box .picture:nth-child(1)')
        firstChild.remove()
        $(".image-box").append(firstChild)
        // 这里一定要重新绑定hover事件
        $(".image-box .picture:last").bind({
            "mouseover": inFun,
            "mouseout": outFun,
        })
    }
)

// 导航栏按钮
$(".type-block").click(
    function () {
        // 获取当前点击的元素index
        let index = parseInt($(this).index())
        // 删除所有元素
        $(".image-box").empty()
        // 重新渲染
        render_image_group(page_data.typeList[index].projectList)
        // 这里一定要重新绑定hover事件
        $(".image-box .picture").bind({
            "mouseover": inFun,
            "mouseout": outFun,
        })
    }
)