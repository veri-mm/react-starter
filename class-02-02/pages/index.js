import React from 'react';

function NewsCard({ image, title, body, footer }) {
  return (
    <a href="#" className="news-card card card-padded">
      <div className="news-left">
        <img src={image} />
      </div>
      <div className="news-right">
        <h3 className="news-title">{title}</h3>
        <div className="news-body">{body}</div>
        <div className="news-footer">{footer}</div>
      </div>
    </a>
  );
}

function Page() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <img src="https://source.unsplash.com/108x30?brand" />
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="main-inner">
            <div className="mainbar">
              <h2 className="section-title">Latest news</h2>
              <div className="news-list">
                <NewsCard
                  image="https://source.unsplash.com/300x200"
                  title="Lorem ipsum dolor sit amet"
                  body="Maecenas commodo nec arcu nec iaculis. Phasellus ac efficitur est. Fusce et lacinia elit. Ut in odio vel orci malesuada."
                  footer="Interdum et malesuada."
                />
                <NewsCard
                  image="https://source.unsplash.com/300x200?2"
                  title="Duis sit amet lorem vel"
                  body="Maecenas sed sodales ipsum. Sed placerat metus at finibus luctus. Nullam blandit lectus nec fringilla sagittis. Nulla id elit et."
                  footer="Etiam in elit."
                />
                <NewsCard
                  image="https://source.unsplash.com/300x200?3"
                  title="Aliquam a tortor ut ante"
                  body="Suspendisse potenti. Aenean posuere, dui non porttitor consequat, magna ex tincidunt diam, non convallis ligula quam sed quam. Integer hendrerit."
                  footer="Aenean sit amet."
                />
              </div>
            </div>

            <div className="sidebar">
              <h2 className="section-title">Advertisement</h2>
              <div className="ad"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
