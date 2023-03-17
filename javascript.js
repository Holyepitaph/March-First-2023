function openLightbox(){
    
    document.getElementById("main").style.overflow = "hidden";
    document.getElementById("nav").style.display = "flex";
    
}

function closeLightbox(){
    document.getElementById("main").style.overflow = "auto";
    document.getElementById("nav").style.display = "none";
}

const list = [
    ["The greatest glory in living lies not in never falling, but in rising every time we fall.","-Nelson Mandela"],
    ["The way to get started is to quit talking and begin doing.", "-Walt Disney"],
        ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking","Steve Jobs"],
        ["If life were predictable it would cease to be life, and be without flavor.",'-Eleanor Roosevelt'],
        ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough","-Oprah Winfrey"],
        ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",' -James Cameron'],
        ['The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart','-Helen Keller'],
        ['It is during our darkest moments that we must focus to see the light.','-Aristotle'],
        ['Whoever is happy will make others happy too.','-Anne Frank'],
        ['Do not go where the path may lead, go instead where there is no path and leave a trail.','-Ralph Waldo Emerson'],
        ['If life were predictable it would cease to be life and be without flavor.','-Eleanor Roosevelt'],
        ["In the end, it's not the years in your life that count. It's the life in your years",'-Abraham Lincoln'],
        ['Life is a succession of lessons which must be lived to be understood.','-Ralph Waldo Emerson'],
        ['You will face many defeats in life, but never let yourself be defeated.','-Maya Angelou'],
        ['Life is never fair, and perhaps it is a good thing for most of us that it is not.','-Oscar Wilde'],
        ['The only impossible journey is the one you never begin.','-Tony Robbins'],
        ['In this life we cannot do great things. We can only do small things with great love.','-Mother Teresa'],
        ['Only a life lived for others is a life worthwhile.','-Albert Einstein'],
        ['The purpose of our lives is to be happy.','-Dalai Lama'],
        ["Life is what happens when you're busy making other plans.",'-John Lennon']
  ];

  function onClick(){
    let x = list[Math.floor(Math.random() * 20)]
    document.getElementById("quoteA").innerHTML=x[0];
    document.getElementById("quoteB").innerHTML=x[1];    
  }

 window.onload = function hiddenTimerFunction() {
    hiddenNumber = 0;
    onClick();
    hiddenTimer = window.setInterval(function () {
      if (hiddenNumber < 400) {
        hiddenNumber += 1;
      }
      else {
        hiddenNumber = 0;
      }
    }, 39);
    hiddenFunction = window.setInterval(function () {
      if (hiddenNumber > 300) { }
      else if (hiddenNumber > 251) {  }
      else if (hiddenNumber > 250)  {  onClick() }
    }
      , 39)
  }
  
  