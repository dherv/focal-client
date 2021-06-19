export const addFocus = (text: string) => ({
  type: "focuses/focusAdded",
  payload: text,
});

export const toggleFocus = (focusId: number) => ({
  type: "focuses/focusToggled",
  payload: focusId,
});

export const deleteFocus = (focusId: number) => ({
  type: "focuses/focusDeleted",
  payload: focusId,
});

export const statusFilterChanged = (filter: string) => ({
  type: "filter/statusFilterChanged",
  payload: filter
});
