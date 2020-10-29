const resButton = document.getElementById('resButton');
const comButton = document.getElementById('comButton');

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

const showmenu = document.getElementById('showmenu2');
const check = document.getElementById('showmenu');
const line = document.getElementById('line');


const subHead = document.getElementById('subHead');
const subMenu = document.querySelector('.sub-navigation-list');
const chevron = document.querySelector('.chevron');
let menuToggler = false;

const subHead2 = document.getElementById('subHead2');
const subMenu2 = document.querySelector('.sub-navigation-list2');
const chevron2 = document.querySelector('.chevron2');
let menuToggler2 = false;

function activateButton(buttonName) {
  buttonName.style.backgroundColor = "#FFC320";
  if (buttonName === resButton) {
    document.querySelector('.home-icon.i1').style.display = "block";
    document.querySelector('.home-icon.i2').style.display = "none";
    document.getElementById('resSpan').style.color = "black";
    form1.style.display = "block";
    form2.style.display = "none";
  } else {
    document.querySelector('.commercial-icon.i2').style.display = "block";
    document.querySelector('.commercial-icon.i1').style.display = "none";
    document.getElementById('comSpan').style.color = "black";
    form1.style.display = "none";
    form2.style.display = "block";
  }
}

function deactivateButton(buttonName) {
  buttonName.style.backgroundColor = "#8C773D";
  if (buttonName === resButton) {
    document.querySelector('.home-icon.i2').style.display = "block";
    document.querySelector('.home-icon.i1').style.display = "none";
    document.getElementById('resSpan').style.color = "white";
  } else {
    document.querySelector('.commercial-icon.i1').style.display = "block";
    document.querySelector('.commercial-icon.i2').style.display = "none";
    document.getElementById('comSpan').style.color = "white";
  }
}

resButton.addEventListener('click', () => {
  activateButton(resButton);
  deactivateButton(comButton);
})

comButton.addEventListener('click', () => {
  activateButton(comButton);
  deactivateButton(resButton);
})


showmenu.addEventListener('click', () => {
  if(check.checked) {
    showmenu.setAttribute('class', 'nav-showmenu back');
  } else {
    showmenu.setAttribute('class', 'nav-showmenu no-back');
  }
})

subHead.addEventListener('click', () => {
  if(!menuToggler) {
    subMenu.style.maxHeight = "700px";
    menuToggler = true;
    chevron.style.transform = "rotate(-180deg)";
  } else {
    subMenu.style.maxHeight = "0px";
    menuToggler = false;
    chevron.style.transform = "rotate(0deg)";
  }
})

subHead2.addEventListener('click', () => {
  if(!menuToggler2) {
    subMenu2.style.maxHeight = "700px";
    menuToggler2 = true;
    chevron2.style.transform = "rotate(-180deg)";
  } else {
    subMenu2.style.maxHeight = "0px";
    menuToggler2 = false;
    chevron2.style.transform = "rotate(0deg)";
  }
})








































function isElementVisible(element) {
  let rect = element.getBoundingClientRect();
  let vWidth = window.innerWidth || doc.documentElement.clientWidth;
  let vHeight = window.innerHeight || doc.documentElement.clientHeight;
    elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
  if (rect.right < 0 || rect.bottom < 0
    || rect.left > vWidth || rect.top > vHeight)
    return false;
  return (
    element.contains(elemFromPoint(rect.left, rect.top))
    || element.contains(elemFromPoint(rect.right, rect.top))
    || element.contains(elemFromPoint(rect.right, rect.bottom))
    || element.contains(elemFromPoint(rect.left, rect.bottom))
  );
}

    const mainElement2 = document.getElementById('sliderMini');
    let sliderWrapper2 = document.getElementById('sliderWrapperMini');
    let sliderItems2 = mainElement2.querySelectorAll('.slider-item-mini');
    let sliderControls = mainElement2.querySelectorAll('.slider-control');
    let sliderControlLeft = document.getElementById('sliderControlLeft');
    let sliderControlRight = document.getElementById('sliderControlRight');
    let wrapperWidth2 = parseFloat(getComputedStyle(sliderWrapper2).width);
    let itemWidth2 = parseFloat(getComputedStyle(sliderItems2[0]).width);
    let html2 = mainElement2.innerHTML;
    let positionLeftItem2 = 0;
    let transform2 = 0;
    let step2 = itemWidth2 / wrapperWidth2 * 100;
    let items2 = [];
    let interval2 = 0;
    let states2 = [
      { active: false, minWidth: 0, count: 1 },
      { active: false, minWidth: 576, count: 2 },
      { active: false, minWidth: 992, count: 3 },
      { active: false, minWidth: 1200, count: 4 },
    ]
    let config2 = {
      isCycling: false,
      direction: 'right',
      interval: 5000,
      pause: true
    };

  sliderItems2.forEach(function (item, index) {
    items2.push({ item: item, position: index, transform: 0 });
  });

  let setActive = function () {
    let _index = 0;
    let width = parseFloat(document.body.clientWidth);
    states2.forEach(function (item, index, arr) {
      states2[index].active = false;
      if (width >= states2[index].minWidth)
        _index = index;
    });
    states2[_index].active = true;
  }

  let getActive = function () {
    let _index;
    states2.forEach(function (item, index, arr) {
      if (states2[index].active) {
        _index = index;
      }
    });
    return _index;
  }

  let position2 = {
    getItemMin: function () {
      let indexItem = 0;
      items2.forEach(function (item, index) {
        if (item.position < items2[indexItem].position) {
          indexItem = index;
        }
      });
      return indexItem;
    },
    getItemMax: function () {
      let indexItem = 0;
      items2.forEach(function (item, index) {
        if (item.position > items2[indexItem].position) {
          indexItem = index;
        }
      });
      return indexItem;
    },
    getMin: function () {
      return items2[position2.getItemMin()].position;
    },
    getMax: function () {
      return items2[position2.getItemMax()].position;
    }
  }

  let transformItem2 = function (direction) {
    let nextItem;
    if (direction === 'right') {
      positionLeftItem2++;
      if ((positionLeftItem2 + wrapperWidth2 / itemWidth2 - 1) > position2.getMax()) {
        nextItem = position2.getItemMin();
        items2[nextItem].position = position2.getMax() + 1;
        items2[nextItem].transform += items2.length * 100;
        items2[nextItem].item.style.transform = 'translateX(' + items2[nextItem].transform + '%)';
      }
      transform2 -= step2;
    }
    if (direction === 'left') {
      positionLeftItem2--;
      if (positionLeftItem2 < position2.getMin()) {
        nextItem = position2.getItemMax();
        items2[nextItem].position = position2.getMin() - 1;
        items2[nextItem].transform -= items2.length * 100;
        items2[nextItem].item.style.transform = 'translateX(' + items2[nextItem].transform + '%)';
      }
      transform2 += step2;
    }
    sliderWrapper2.style.transform = 'translateX(' + transform2 + '%)';
  }

  let controlClick = function (e) {
    if (e.target.classList.contains('slider-control') || e.target.classList.contains('arrow-button')) {
      e.preventDefault();
      var direction = e.target.classList.contains('slider-control-right') || e.target.classList.contains('right') ? 'right' : 'left';
      transformItem2(direction);
      clearInterval(interval2);
    }
  };

  let handleVisibilityChange = function () {
    if (document.visibilityState === "hidden") {
      clearInterval(interval2);
    } else {
      clearInterval(interval2);
    }
  }

  let refresh = function () {
    clearInterval(interval2);
    mainElement2.innerHTML = html2;
    sliderWrapper2 = document.getElementById('sliderWrapperMini');
    sliderItems2 = mainElement2.querySelectorAll('.slider-item-mini');
    sliderControls = mainElement2.querySelectorAll('.slider-control');
    sliderControlLeft =document.getElementById('sliderControlLeft');
    sliderControlRight = document.getElementById('sliderControlRight');
    wrapperWidth2 = parseFloat(getComputedStyle(sliderWrapper2).width);
    itemWidth2 = parseFloat(getComputedStyle(sliderItems2[0]).width);
    positionLeftItem2 = 0;
    transform2 = 0;
    step2 = itemWidth2 / wrapperWidth2 * 100;
    items2 = [];
    sliderItems2.forEach(function (item, index) {
      items2.push({ item: item, position: index, transform: 0 });
    });
  }

  let setUpListeners = function () {
    mainElement2.addEventListener('click', controlClick);
    if (config2.pause) { 
      mainElement2.addEventListener('mouseenter', function () {
        clearInterval(interval2);
      });
      mainElement2.addEventListener('mouseleave', function () {
        clearInterval(interval2);
      });
    }
    document.addEventListener('visibilitychange', handleVisibilityChange, false);
    window.addEventListener('resize', function () {
      let _index = 0;
      let width = parseFloat(document.body.clientWidth);
      states2.forEach(function (item, index, arr) {
        if (width >= states2[index].minWidth)
          _index = index;
      });
      if (_index !== getActive()) {
        setActive();
        refresh();
      }
    });
  }

  setUpListeners();

  setActive();
  




let x0 = null;

function lock(e) { x0 = unify(e).clientX; };

let i = 0;

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

function move(e) {
  if(x0 || x0 === 0) {
    const unifiedE = unify(e);
    if(typeof unifiedE === 'undefined') return;
    
    let dx = unifiedE.clientX - x0, s = Math.sign(dx);
    let nextItem;
    if (s < 0) {
      positionLeftItem2++;
      if ((positionLeftItem2 + wrapperWidth2 / itemWidth2 - 1) > position2.getMax()) {
        nextItem = position2.getItemMin();
        items2[nextItem].position = position2.getMax() + 1;
        items2[nextItem].transform += items2.length * 100;
        items2[nextItem].item.style.transform = 'translateX(' + items2[nextItem].transform + '%)';
      }
      transform2 -= step2;
    sliderWrapper2.style.transform = 'translateX(' + transform2 + '%)';
    } else if (s > 0) {
      positionLeftItem2--;
      if (positionLeftItem2 < position2.getMin()) {
        nextItem = position2.getItemMax();
        items2[nextItem].position = position2.getMin() - 1;
        items2[nextItem].transform -= items2.length * 100;
        items2[nextItem].item.style.transform = 'translateX(' + items2[nextItem].transform + '%)';
      }
      transform2 += step2;
    sliderWrapper2.style.transform = 'translateX(' + transform2 + '%)';
    }
    x0 = null
  }
};


sliderWrapper2.addEventListener('touchstart', event => {
  lock(event);
});

sliderWrapper2.addEventListener('touchend', event => {
  move(event)
});

//sliderWrapper2.addEventListener('mousedown', event => {
  // lock(event);
 //}
 //, false);

 sliderWrapper2.addEventListener('mouseup', event => {
  move(event)
 }, false);

//sliderWrapper2.addEventListener('touchmove', e => {e.preventDefault()}, false);