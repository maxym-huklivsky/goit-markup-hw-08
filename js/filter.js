const cards = [
  { name: "Технокряк", type: "Веб-сайт", numOfPic: 1 },
  { name: "Постер New Orlean vs Golden Star", type: "Дизайн", numOfPic: 2 },
  { name: "Ресторан Seafood", type: "Приложение", numOfPic: 3 },
  { name: "Проект Prime", type: "Маркетинг", numOfPic: 4 },
  { name: "Проект Boxes", type: "Приложение", numOfPic: 5 },
  { name: "Inspiration has no Borders", type: "Веб-сайт", numOfPic: 6 },
  { name: "Издание Limited Edition", type: "Дизайн", numOfPic: 7 },
  { name: "Проект LAB", type: "Маркетинг", numOfPic: 8 },
  { name: "Growing Business", type: "Приложение", numOfPic: 9 },
];

const galaryEl = document.querySelector(".galary");
const markup = createGalary(cards);

galaryEl.insertAdjacentHTML("beforeend", markup);

function createGalary(galary, typeOfBtn = "all") {
  const filterGalary = galary.filter(({ type }) => {
    if (typeOfBtn === "all") {
      return true;
    }

    return typeOfBtn === type;
  });

  const markupFilterGalary = filterGalary
    .map(({ name, type, numOfPic }) => {
      return `<li class="galary__item">
              <a class="galary__link" href="">
                <div class="galary__overlay-container">
                  <picture>
                    <source
                      srcset="
                        ./images/portfolio/img-${numOfPic}-w370_ds.jpg  1x,
                        ./images/portfolio/img-${numOfPic}-w740_ds.jpg  2x,
                        ./images/portfolio/img-${numOfPic}-w1110_ds.jpg 3x
                      "
                      media="(min-width:1200px)"
                    />

                    <source
                      srcset="
                        ./images/portfolio/img-${numOfPic}-w354_lp.jpg  1x,
                        ./images/portfolio/img-${numOfPic}-w708_lp.jpg  2x,
                        ./images/portfolio/img-${numOfPic}-w1062_lp.jpg 3x
                      "
                      media="(min-width:768px)"
                    />

                    <source
                      srcset="
                        ./images/portfolio/img-${numOfPic}-w450_mb.jpg  1x,
                        ./images/portfolio/img-${numOfPic}-w900_mb.jpg  2x,
                        ./images/portfolio/img-${numOfPic}-w1350_mb.jpg 3x
                      "
                      media="(max-width:767px)"
                    />

                    <img
                      src="./images/portfolio/img-${numOfPic}-w450_mb.jpg"
                      alt="${name}"
                      width="450"
                    />
                  </picture>
                  <div class="galary__overlay">
                    <p>
                      Ресурс предлагает комплексные предложения с разным уровнем
                      функционала и сервисов. Все это позволит посетителю
                      получить исчерпывающие сведения о&nbsp;компании или
                      частном лице.
                    </p>
                  </div>
                </div>
                <div class="galary__wrapper">
                  <h2 class="galary__title">${name}</h2>
                  <p class="galary__text">${type}</p>
                </div>
              </a>
            </li>`;
    })
    .join("");

  return markupFilterGalary;
}

const filterEl = document.querySelector(".filter");

filterEl.addEventListener("click", onFilterGalary);

function onFilterGalary(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  galaryEl.innerHTML = createGalary(cards, e.target.dataset.type);
}
