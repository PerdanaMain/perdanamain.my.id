export default function Home() {
  return (
    <div className="div">
      <header>
        <div id="particles"></div>
        <div class="info-text">
          <h1>perdanamain</h1>
          <h3>Greetings, I am Fullstack Developer</h3>
          <a href="#about" class="scroll">
            <i class="bx bxs-down-arrow"></i>
          </a>
        </div>
      </header>

      <section id="about">
        <div class="header">
          <h1>About Me</h1>
          <a href="#">Hire Me</a>
        </div>

        <div class="card">
          <img src="assets/logo.png" />
          <div class="info">
            <h1>It's AsmrProg</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptates error in dolorum dolor rerum reiciendis consequuntur
              tenetur maxime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
