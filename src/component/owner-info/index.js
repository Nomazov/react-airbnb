import "./index.css";
import Heading from "../heading";

export default function OwnerInfo({
    name, info, img, phone, rate, time
}) {
    return (
        <div className="owner__box">
            <div className>
                <img className="owner__img" src={img} alt="owner" />
                <Heading className="owner__title">Господар - {name}</Heading>
                <div className="owner__box-about">
                    <span className="owner__box-about--value">{phone}</span>
                    <span className="owner__box-about--value">{time}</span>
                    <span className="owner__box-about--value">{rate}% response speed</span>
                </div>
            </div>
            <span className="owner__box-info">{info}</span>
        </div>
    )
}