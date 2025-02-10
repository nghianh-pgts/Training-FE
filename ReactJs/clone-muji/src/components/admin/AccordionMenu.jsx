import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

const AccordionMenu = ({ title, items }) => {
  return (
    <Accordion className=" dark:bg-gray-950 primary-bg-color">
      <AccordionSummary expandIcon={<MdExpandMore />}>
        <span className=" font-medium dark:text-white ">{title}</span>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {items.map((item, index) => (
            <ListItem button key={index}>
              <ListItemText className="dark:text-white " primary={item} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenu;
