console.log('running script......');

//Call skipfunction in every 6 second
setInterval(clickskip, 6000);

//clicks youtubes skip button by it's class
//usually after first skip it will skip the add before the 5 second
function clickskip(){
  document.querySelector('.ytp-ad-skip-button.ytp-button').click();
}
