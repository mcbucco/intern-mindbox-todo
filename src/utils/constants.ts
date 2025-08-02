import { TTabs } from "./types";

export const TABS: TTabs[] = ['ALL_ITEMS', 'ACTIVE_ITEMS', 'COMPLETED_ITEMS'];

export const TAB_LABELS: Record<TTabs, string> = {
  ACTIVE_ITEMS: 'Active',
  ALL_ITEMS: 'All',
  COMPLETED_ITEMS: 'Completed'
}