import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AlertService = {
  success: (message = "Operation successful", title = "Success") => {
    return MySwal.fire({
      icon: "success",
      title,
      text: message,
      confirmButtonColor: "#307401",
    });
  },

  error: (message = "Something went wrong", title = "Error") => {
    return MySwal.fire({
      icon: "error",
      title,
      text: message,
      confirmButtonColor: "#EF4444",
    });
  },

  loading: (message = "Please wait...", timeout = null) => {
    Swal.fire({
      icon: "info",
      title: message,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        if (timeout) {
          setTimeout(() => Swal.close(), timeout);
        }
      },
    });
  },

  closeLoading: () => {
    Swal.close();
  },

  confirm: (message = "Are you sure?", title = "Confirmation") => {
    return MySwal.fire({
      title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#307401",
      cancelButtonColor: "#f38604",
      confirmButtonText: "Yes, proceed",
      cancelButtonText: "Cancel",
    });
  },
};

export default AlertService;
