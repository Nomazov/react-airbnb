import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import pool_img from "./pool_img.svg"
import gym_img from "./gym_img.svg"
import breakfast_img from "./breakfast_img.svg"
import wifi_img from "./wifi_img.svg"
import parking_img from "./parking_img.svg"
import pets_img from "./pets_img.svg"
import transfer_img from "./transfer_img.svg"
import concierge_img from "./concierge_img.svg"
import child_img from "./child_img.svg"

export default function Amenities({ title, pool, gym, breakfast, wifi, parking, pets, transfer, concierge, child }) {
    return (
        <Box shadow className="details__box">
            <Heading border>{title}</Heading>
            {pool > 0 &&
                <ListItem imageSrc={pool_img}>
                    <span>Басейн</span>
                </ListItem>}

            {gym > 0 &&
                <ListItem imageSrc={gym_img}>
                    <span>Спортивний зал</span>
                </ListItem>}

            {breakfast > 0 &&
                <ListItem imageSrc={breakfast_img}>
                    <span>Безкоштовний сніданок</span>
                </ListItem>}

            {wifi > 0 &&
                <ListItem imageSrc={wifi_img}>
                    <span>Безкоштовний Wi-Fi</span>
                </ListItem>}

            {parking > 0 &&
                <ListItem imageSrc={parking_img}>
                    <span>Безкоштовний вуличний паркінг</span>
                </ListItem>}

            {pets > 0 &&
                <ListItem imageSrc={pets_img}>
                    <span>Дозволено розміщення з домашніми тваринами</span>
                </ListItem>}

            {transfer > 0 &&
                <ListItem imageSrc={transfer_img}>
                    <span>Трансфер до/з аеропорту</span>
                </ListItem>}

            {concierge > 0 &&
                <ListItem imageSrc={concierge_img}>
                    <span>Консьєрж-сервіс</span>
                </ListItem>}

            {child > 0 &&
                <ListItem imageSrc={child_img}>
                    <span>Підходить для дітей</span>
                </ListItem>}

        </Box>
    )
}


