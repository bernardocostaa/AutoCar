export default function carrosel() {
  const carrosel = document.querySelectorAll(".carro-slide");

  let carousels = {
    0: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },

    1: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    2: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    3: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    4: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    5: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    6: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    7: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
    8: {
      currentSlideIndex: 0,
      lastSlideIndex: 0,
    },
  };

  function ativarSlide(slides, currentSlideIndex) {
    slides.forEach((slide) => slide.classList.remove("ativo"));
    slides[currentSlideIndex].classList.add("ativo");
  }

  function ativarBola(currentCarroselIndex, currentSlideIndex) {
    const carrosel =
      document.querySelectorAll(".carro-slide")[currentCarroselIndex];
    const bolasIndex = carrosel.querySelectorAll(".bola");

    bolasIndex.forEach((slide) => slide.classList.remove("ativo"));
    bolasIndex[currentSlideIndex].classList.add("ativo");

    carousels[currentCarroselIndex].currentSlideIndex = currentSlideIndex;
  }

  function next(slides, currentCarroselIndex) {
    if (
      carousels[currentCarroselIndex].currentSlideIndex ===
      carousels[currentCarroselIndex].lastSlideIndex
    ) {
      carousels[currentCarroselIndex].currentSlideIndex = 0;
      carousels[currentCarroselIndex].currentBolaIndex = 0;
    } else {
      carousels[currentCarroselIndex].currentSlideIndex++;
      carousels[currentCarroselIndex].currentBolaIndex++;
    }

    ativarSlide(slides, carousels[currentCarroselIndex].currentSlideIndex);
    ativarBola(
      currentCarroselIndex,
      carousels[currentCarroselIndex].currentSlideIndex
    );
  }

  function prev(slides, currentCarroselIndex) {
    if (carousels[currentCarroselIndex].currentSlideIndex === 0) {
      carousels[currentCarroselIndex].currentSlideIndex =
        carousels[currentCarroselIndex].lastSlideIndex;
    } else {
      carousels[currentCarroselIndex].currentSlideIndex =
        carousels[currentCarroselIndex].currentSlideIndex - 1;
    }

    ativarSlide(slides, carousels[currentCarroselIndex].currentSlideIndex);
    ativarBola(
      currentCarroselIndex,
      carousels[currentCarroselIndex].currentSlideIndex
    );
  }

  function initSlide(carrosel, currentCarroselIndex) {
    const slides = carrosel.querySelectorAll(".produto-carro");
    const nextBnt = carrosel.querySelector(".btn-next");
    const prevBtn = carrosel.querySelector(".btn-prev");
    const bolinhasSlide = carrosel.querySelectorAll(".bola");

    carousels[currentCarroselIndex].lastSlideIndex = slides.length - 1;
    carousels[currentCarroselIndex].currentSlideIndex = 0;

    nextBnt.addEventListener("click", () => {
      next(slides, currentCarroselIndex);
    });
    prevBtn.addEventListener("click", () => {
      prev(slides, currentCarroselIndex);
    });

    bolinhasSlide.forEach((bolinhaSlide, index) => {
      bolinhaSlide.addEventListener("click", () => {
        ativarSlide(slides, index);
        ativarBola(currentCarroselIndex, index);
      });
    });
  }

  const initSlides = () => {
    const carouselsElements = document.querySelectorAll(".carro-slide");
    carouselsElements.forEach((_, index) => initSlide(carrosel[index], index));
  };

  initSlides();
}
