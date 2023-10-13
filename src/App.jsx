import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./utils/Toast";

function App() {
    const notify = () => Toast.error("hello");
    const notify2 = () => Toast.info("hello");
    const notify3 = () => Toast.success("hello");
    const notify4 = () => Toast.warning("hello");

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <button onClick={notify2}>Notify!</button>
            <button onClick={notify3}>Notify!</button>
            <button onClick={notify4}>Notify!</button>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default App;
