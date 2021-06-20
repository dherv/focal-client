import { IFocus } from '../types/interfaces';

export const fetchFocuses = () => {
  return fetch("/focuses", {
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) return response.json();
    return response;
  });
};

export const postFocus = (text: string) => {
  return fetch("/focuses", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) return response.json();
    return response;
  });
};

export const putFocus = (f: IFocus) => {
  return fetch(`/focuses/${f.id}`, {
    method: "PUT",
    body: JSON.stringify(f),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) return response.json();
    return response;
  });
};

export const deleteFocus = (id: number) => {
  return fetch(`/focuses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.ok) return response.json();
    return response;
  });
};
