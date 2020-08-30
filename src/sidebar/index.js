import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, Drawer, Tooltip, withStyles } from "@material-ui/core";
import CustomIcon from "./CustomIcon";
import { Theme } from "../utils";
const CustomToolTip = withStyles({
  arrow: {
    color: Theme.colors.black,
  },
  tooltip: {
    padding: 8,
    fontSize: 14,
    color: Theme.colors.white,
    fontWeight: Theme.weight.Medium,
    backgroundColor: Theme.colors.black,
  },
})(Tooltip);
const SideBar = ({ data, selected, onSelect }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="left" open={true} variant="persistent">
      {data.map((item, index) => (
        <CustomToolTip
          arrow
          className={classes.tip}
          title={item.title}
          placement="right"
        >
          <ListItem
            button
            key={item.id}
            className={classes.root}
            disableRipple={true}
            onClick={() => onSelect(index)}
          >
            <div
              className={
                index === selected ? classes.selectedStick : classes.stick
              }
            />
            <CustomIcon
              type={item.type}
              className={
                index === selected ? classes.selectedIcon : classes.icon
              }
            />
          </ListItem>
        </CustomToolTip>
      ))}
    </Drawer>
  );
};
export default SideBar;

const useStyles = makeStyles({
  root: {
    width: 72,
    padding: 0,
    marginTop: 8,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "white",
      "& $icon": {
        backgroundColor: "#E4E7EE",
        borderRadius: 16,
      },
      "& $stick": {
        visibility: "visible",
        height: "50%",
      },
    },
  },
  stick: {
    position: "absolute",
    left: 0,
    width: 4,
    height: "83%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Theme.colors.black,
    visibility: "hidden",
  },
  selectedStick: {
    position: "absolute",
    left: 0,
    width: 4,
    height: "83%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Theme.colors.black,
    visibility: "visible",
  },
  icon: {
    display: "flex",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedIcon: {
    display: "flex",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4E7EE",
    borderRadius: 24,
  },
});
