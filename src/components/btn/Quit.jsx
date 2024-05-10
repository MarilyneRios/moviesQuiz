import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCloseCircleOutline } from "react-icons/io5";

const Quit = ({ onClick }) => {
  return (
    <div>
      <button type="button" className="btn btn-outline-danger rounded-circle p-2" style={{border: "none"}} onClick={onClick}>
        <IoCloseCircleOutline size={35} />
      </button>
    </div>
  )
}

export default Quit

