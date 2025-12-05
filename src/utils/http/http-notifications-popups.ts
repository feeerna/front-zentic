import Notiflix from "notiflix/build/notiflix-aio";
const defaultParams = {
  position: "right-bottom",
  borderRadius: "3px",
  cssAnimationDuration: 200,
  fontSize: "14px",
  useIcon: false,
  failure: {
    background: "#841811",
  },
} as any;
const forbidden = (params?: { message?: string }) => {
  let message =
    params?.message ?? "No tiene permisos para realizar esta acción.";
  if (!import.meta.env.DEV) message = "403: " + message;
  Notiflix.Notify.failure(message, defaultParams);
};
const conflict = (params?: { message?: string }) => {
  let message =
    params?.message ??
    "Ha ocurrido un conflicto. No se pudo realizar la acción.";
  if (!import.meta.env.DEV) message = "409: " + message;
  Notiflix.Notify.failure(message, defaultParams);
};
const unauthorized = (params?: { message?: string }) => {
  let message = params?.message ?? "La sesión ha expirado";
  if (!import.meta.env.DEV) message = "401: " + message;
  Notiflix.Notify.failure(message, defaultParams);
};

export { forbidden, conflict, unauthorized };
