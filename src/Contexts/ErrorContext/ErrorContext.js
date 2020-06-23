import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export const Error = (type, msg) => {
	if (type === 'info') {
		toast.info(msg);
	}
	if (type === 'warn') {
		toast.warn(msg);
	}
	if (type === 'success') {
		toast.success(msg);
	}
	if (type === 'error') {
		toast.error(msg);
	}
};
