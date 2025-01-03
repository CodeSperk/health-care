import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DrawerItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItem;
};

const SidebarItems = ({ item }: IProps) => {
  const LinkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();

  return (
    <Link href={LinkPath}>
      <ListItem
        disablePadding
        sx={{
          transition: "all 0.9 ease",
          ...(pathname === LinkPath
            ? {
                backgroundColor: "#F4F7FE",
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
