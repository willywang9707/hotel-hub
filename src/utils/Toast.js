import { toast } from "react-toastify";

const options = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

const Toast = {
    success: (message) => {
        toast.success(message, options);
    },

    error: (message) => {
        toast.error(message, options);
    },

    info: (message) => {
        toast.info(message, options);
    },

    warning: (message) => {
        toast.warning(message, options);
    },
};

export default Toast;
