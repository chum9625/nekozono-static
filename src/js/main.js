//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 10,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
    },
    function() {
      $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
    }
);

$(function() {
  var webStorage = function () {
    if(sessionStorage.getItem('visited')) {
      // 2回目以降アクセス
    $(".loading").addClass('is-active');
  } else {
    // 初回アクセス
    sessionStorage.setItem('visited', 'true');

    $(window).on('load',function(){
      $("#splash_logo").delay(3000).fadeOut('slow')
      stroke.play();
      $("#splash").delay(3000).fadeOut('slow');
    });
  }
}
  webStorage();
});
