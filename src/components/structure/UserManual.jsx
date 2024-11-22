import { FaBook } from "react-icons/fa";

const UserManual = () => {
  return (
    <a href="content/UserManual.html" target="contentIframe">
      <div className="container_items">
        <p className="content_icon"><FaBook /></p>
        <span className="content_description_1">Manual de usuario</span>
      </div>
    </a>
  )
}

export default UserManual;