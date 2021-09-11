import React from "react";

function Page() {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <h1 className="title">Pricing plans</h1>
          <div className="subtitle">The right price for you. Whoever you are.</div>
        </div>
      </div>

      <div className="cards-container">
        <div className="cards">
          <div className="card card-left">
            <div className="card-info">
              <div className="card-type">Hobby</div>
              <div className="card-price">
                $39<span className="card-price-span">/mo</span>
              </div>
            </div>
            <div className="card-itens-bg bg-left">
              <div className="card-itens">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Quisque ex mauris</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Pharetra vel consequat</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">
                    Vel molestie nisi posuere sit
                  </div>
                </div>
              </div>
              <div className="btn">
                <a href="#">Start your trial</a>
              </div>
            </div>
          </div>

          <div className="card card-center">
            <div className="card-info">
              <span className="banner">Popular!</span>
              <div className="card-type">Growth</div>
              <div className="card-price">
                $79<span className="card-price-span">/mo</span>
              </div>
            </div>
            <div className="card-itens-bg bg-center">
              <div className="card-itens">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Quisque ex mauris</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Pharetra vel consequat</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">
                    Vel molestie nisi posuere sit
            </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Nulla hendrerit</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Aenean in sapien metus</div>
                </div>
              </div>
              <div className="btn btn-blue">
                <a href="#">Start your trial</a>
              </div>
            </div>
          </div>

          <div className="card card-right">
            <div className="card-info">
              <div className="card-type">Enterprise</div>
              <div className="card-price">Custom</div>
            </div>
            <div className="card-itens-bg bg-right">
              <div className="card-itens">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Quisque ex mauris</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">Pharetra vel consequat</div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="item-description">
                    Vel molestie nisi posuere sit
            </div>
                </div>
              </div>
              <div className="btn">
                <a href="#">Contact sales</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;