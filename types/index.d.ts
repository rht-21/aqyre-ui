export interface SidebarItemData {
  label: string;
  href: string;
}

export interface SidebarProps {
  [section: string]: SidebarItemData[];
}
