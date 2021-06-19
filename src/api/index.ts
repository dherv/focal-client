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

export const putFocus = (id: number) => {
  return fetch(`/focuses/${id}`, {
    method: "PUT",
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
