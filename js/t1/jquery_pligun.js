/**
 * Created with JetBrains PhpStorm.
 * User: duph
 * Date: 13-3-11
 * Time: 上午9:24
 * To change this template use File | Settings | File Templates.
 */

define(function(require,exports,moudles){
   var $=require("jquery")
     return function(){
         (function($) {
             $.fn.pri= function() {
                 alert($("a").attr("href"))
                 // 代码区域。
             };
         })($);
     }

})