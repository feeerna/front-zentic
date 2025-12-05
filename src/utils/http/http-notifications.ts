import { forbidden, conflict, unauthorized } from "./http-notifications-popups";

import { HttpErrors, HttpErrorsAndExceptions } from "./interfaces";

const messages = new Map<number, Function>();

messages.set(409, (params?: { message: string }) => {
  conflict({ message: params?.message ?? undefined });
});

messages.set(403, (params?: { message: string }) => {
  forbidden({ message: params?.message ?? undefined });
});
messages.set(401, (params?: { message: string }) => {
  unauthorized({ message: params?.message ?? undefined });
});

const showError = (httpErrors: Array<HttpErrors>, status: number) => {
  const notification = messages.get(status);
  if (notification) {
    const customMessage = httpErrors.find((httpError: HttpErrors) => {
      return httpError.code == status;
    });
    if (customMessage) notification({ message: customMessage.message });
    else notification();
  }
};

const showNotification = (params: {
  status: number;
  httpErrors?: Array<HttpErrors> | HttpErrorsAndExceptions;
}) => {
  if (!params.httpErrors) {
    showError([], params.status);
    return;
  }
  if (Array.isArray(params.httpErrors)) {
    showError(params.httpErrors, params.status);
    return;
  }
  const exceptions = params.httpErrors.exceptions ?? [];
  if (!exceptions.includes(params.status))
    showError(params.httpErrors.httpErrors ?? [], params.status);
};
export { showNotification };
