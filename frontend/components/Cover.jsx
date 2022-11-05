import style from "../styles/cover.module.css";
function Cover() {
  return (
    <div>
      <div className={style.parallaxSection}>
        <section>
          <div className={style.parallaxOne}>
            <h2 className="font-bold">Welcome to Flight Studio</h2>
            <br/>
            <h3 className="font-bold">
              All in one place for all your flight needs.
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cover;
