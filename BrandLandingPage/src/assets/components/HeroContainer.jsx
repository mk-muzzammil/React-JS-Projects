function HeroContainer() {
  return (
    <div className="mainHeroContainer">
      <div className="heroContentContainer">
        <h1 className="primary-heading">YOUR FEET DESERVE THE BEST</h1>
        <div className="contentContainer">
          <p className="primary-Paragraph">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="buttonContainer">
            <button type="button" className="primary-button">
              Shop now
            </button>
            <button type="button" className="button">
              Category
            </button>
          </div>

          <p className="SecondaryParagraph">Also Available on</p>
          <div className="brandLogoscontainer">
            <img src="/images/flipkart.png" alt="FlipCart" />
            <img src="/images/amazon.png" alt="Amazon" />
          </div>
        </div>
      </div>
      <div className="heroImageContainer">
        <img src="/images/heroimage.png" alt="Hero Image" />
      </div>
    </div>
  );
}
export default HeroContainer;
