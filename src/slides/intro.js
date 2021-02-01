import bgImage from "../static/images/bg.png";

export default function Introduction() {
    return (
        <section className="bg-primary aligncenter">
            <span className="background auto" style={{ backgroundImage: `url(${bgImage})` }}></span>
            <div className="wrap">
                <h1 className="text-landing">Dime.Scheduler</h1>
                <p className="text-symbols">Stop puzzling. Start planning.</p>

                <br />
                <b>PREVIEW</b>
            </div>


        </section>
    )
}