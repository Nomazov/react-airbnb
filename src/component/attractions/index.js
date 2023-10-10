import "./index.css";
import Heading from "../heading";
import Box from "../box";
import { Fragment } from "react";
import ListItem from "../list-item";




export default function NearbyAttractions({ title, list }) {
    return (
        <Box shadow className="attraction__box">
            <Heading border>{title}</Heading>

            <div className="attraction__list">
                {list.map(({ id, name, link }) => (
                    <Fragment key={id}>
                        <ListItem className="attraction__item">
                            <a href={link} className="attraction__item--link">{name}</a>
                        </ListItem>
                    </Fragment>
                ))}
            </div>
        </Box>
    )
}


