const movies = document.querySelector('.movies');
const start = document.querySelector('.start');
const end = document.querySelector('.end');

end.style.display = 'flex';

end.addEventListener('click', () =>{
    movies.scrollBy({
        behavior: 'smooth',
        left: 1200
    });
});



start.addEventListener('click', () =>{
    movies.scrollBy({
        behavior: 'smooth',
        left: -1200
    });
});



movies.addEventListener('scroll', () => {
  const pos = getScrollPosition(movies);
  console.log('Scroll is at:', pos);
});



function getScrollPosition(el) {
  const scrollLeft = el.scrollLeft;
  const scrollWidth = el.scrollWidth;
  const clientWidth = el.clientWidth;

  if (scrollLeft === 0) { // start
    start.style.display = 'none';
    end.style.display = 'flex';
  } else if (scrollLeft + clientWidth >= scrollWidth - 1) { //end
    start.style.display = 'flex';
    end.style.display = 'none';
  } else { //middle
    start.style.display = 'flex';
    end.style.display = 'flex';
  }
}