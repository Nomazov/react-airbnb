import "./index.css";
import Heading from "../heading"
import { Fragment } from "react";
import Box from "../box";


export default function Rewiews({ list }) {
    return (
        <div className="rewiews__block">
            <Heading>Відгуки клієнтів</Heading>

            <div className="rewiews__list">
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

function Item({ guestName: name, rating, review }) {
    return (
        <Box className="rewiews">
            <div className="rewiews__header">
                <span className="rewiews__title">{name}</span>
                <span className="rewiews__rating">Рейтинг: {rating}</span>
            </div>
            <p className="rewiews__text">{review}</p>
        </Box>
    )
}

