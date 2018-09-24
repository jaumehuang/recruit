/**
 * author:jamehaung
 * time:2018-09-23
 */
(function (w,undefined) {
    /**
     * 构造一个imi对象
     */
    var imi=function(){
        return new imi();
    };
    /**
     * 消息提示框
     * @param {提示文字} title 
     * @param {新的对象参数} object 
     */
    imi.toast=function(title,object){
        var defaults={
            title:title
         };
         if(!object){
            object={}   
          }
        var data= Object.assign(defaults,object);
        wx.showToast(data);
    };
    /**
     * 显示加载
     * @param {提示文字} title 
     * @param {新的对象参数} object 
     */
    imi.showLoading=function(title,object){
        var defaults={
            title:title||'数据加载中',
            mask:true
         };
         if(!object){
            object={}   
          }
        var data= Object.assign(defaults,object);
    };
    /**
     * 隐藏加载
     */
    imi.hideLoading=function(){
        wx.hideLoading()
    };


    

})(window);