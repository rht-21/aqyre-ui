export interface SidebarItemData {
  label: string;
  href: string;
  alias?: string;
}

export interface SidebarProps {
  [section: string]: SidebarItemData[];
}
