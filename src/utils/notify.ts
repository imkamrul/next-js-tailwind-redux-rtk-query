import { toast, ToastOptions } from "react-toastify";

type NotifyType = "success" | "info" | "warning" | "error" | string;

interface NotifyOptions extends ToastOptions {
  // Define any additional options specific to your application if necessary
}

export const notify = (
  type: NotifyType,
  message: string,
  options: NotifyOptions = {}
): void => {
  try {
    if (!type || !message) {
      return console.log("Error For Notify:-----------Invalid Input");
    }

    let optionsObject: NotifyOptions = {
      hideProgressBar: false,
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      closeOnClick: true,
      ...options,
    };

    switch (type) {
      case "success":
        toast.success(message, optionsObject);
        break;
      case "info":
        toast.info(message, optionsObject);
        break;
      case "warning":
        toast.warning(message, optionsObject);
        break;
      case "error":
        toast.error(message, optionsObject);
        break;
      default:
        toast(message, optionsObject);
        break;
    }
  } catch (error) {
    console.log("Error For Notify:-----------", error);
  }
};
