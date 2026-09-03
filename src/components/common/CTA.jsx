import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind <br className="sm:block hidden" />
        Let's build someting together
      </p>
      <Link className="btn " to={"/contact"}> Contact </Link>
    </section>
  );
}
