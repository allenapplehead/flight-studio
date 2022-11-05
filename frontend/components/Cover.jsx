import style from "../styles/cover.module.css";
function Cover() {
  return (
    <div>
      <div className={style.parallaxSection}>
        <section>
          <div className={style.parallaxOne}>
            <h2 className="font-bold">University of Toronto</h2>
            <h2 className="font-bold">
              Engineering Students Consulting Association
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cover;
