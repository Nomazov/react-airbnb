import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";




export default function AdditionalProperties({ title, rules, policy, transportation, languages, offers }) {
    return (
        <Box shadow className="details__box">
            <Heading border>{title}</Heading>
            <ListItem title="Правила дому">
                <span>{rules}</span>
            </ListItem>
            <ListItem title="Правила дому">
                <span>{policy}</span>
            </ListItem>
            <ListItem title="Правила дому">
                <span>{transportation}</span>
            </ListItem>
            <ListItem title="Правила дому">
                {languages.map((item) => (
                    <span className="details__value">{item}</span>
                ))}
            </ListItem>
            <ListItem title="Правила дому">
                <span>{offers}</span>
            </ListItem>

        </Box>
    )
}


