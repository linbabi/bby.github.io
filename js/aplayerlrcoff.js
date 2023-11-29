/*
*默认不显示歌词
*
*/
// function removelrc() {
//     //检测是否存在歌词按钮
//     if (!document.querySelector(".aplayer-icon-lrc"))
//         return;
//     else {
//         //触发以后立刻移除监听
//         document.removeEventListener("DOMNodeInserted", removelrc);
//         //稍作延时保证触发函数时存在按钮
//         setTimeout(function () {
//             //以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
//             document.querySelector(".aplayer-icon-lrc").click();
//         }, 1);
//         console.log("success");
//         return;
//     }
// }
// document.addEventListener('DOMNodeInserted', removelrc)


// 创建一个MutationObserver实例，用于监听DOM的变化
var aplayerlrcoff = new MutationObserver(function (mutations) {
    // 查找页面中class为"aplayer-icon-lrc"的元素
    var lrcButton = document.querySelector(".aplayer-icon-lrc");
    // 如果找到了lrcButton
    if (lrcButton && location.pathname != "/music/") {
        // 延迟1毫秒执行点击操作
        setTimeout(function () {
            lrcButton.click();
        }, 1);
        // 打印"success"到控制台
        console.log("aplayerlrcoff success");
        // 断开MutationObserver实例，停止监听DOM的变化
        aplayerlrcoff.disconnect();
    }
});
// 监听整个文档及其子节点的变化
aplayerlrcoff.observe(document, { childList: true, subtree: true });