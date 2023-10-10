import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import guest_img from "./guests.svg";
import bedrooms_img from "./bedrooms.svg";
import beds_img from "./beds.svg";
import baths_img from "./baths.svg";



export default function RoomDetails({ title, guests, bedrooms, beds, baths }) {
    return (
        <Box shadow className="details__box">
            <Heading border>{title}</Heading>
            <ListItem imageSrc={guest_img}>
                <span>{guests}</span>
                {guests > 1 ? <span>гості</span> : <span>гість</span>}
            </ListItem>
            <ListItem imageSrc={bedrooms_img}>
                <span>{bedrooms}</span>
                {bedrooms > 1 ? <span>спальні</span> : <span>спальня</span>}
            </ListItem>
            <ListItem imageSrc={beds_img}>
                <span>{beds}</span>
                {beds > 1 ? <span>ліжка</span> : <span>ліжко</span>}
            </ListItem>
            <ListItem imageSrc={baths_img}>
                <span>{baths}</span>
                {baths > 1 ? <span>ванних кімнат</span> : <span>ванна кімната</span>}
            </ListItem>
        </Box>
    )
}


