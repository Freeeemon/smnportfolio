document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }






var tl = gsap.timeline({ repeat: -1 });
tl.to("h2", 30, { backgroundPosition: "-960px 0" });







var text = $('.text').text(),
    textArr = text.split('');

$('.text').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.text').append('<span class="space"></span>');}
  $('.text').append('<span>'+v+'</span>');
})