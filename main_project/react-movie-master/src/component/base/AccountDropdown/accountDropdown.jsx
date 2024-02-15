import { Dropdown, Space, Divider, Button } from "antd";
import "../ActionDropdown/actionDropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import CheckTokenServices from "../../../service/checkTokenServices";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AuthenApi from "../../../api/AuthenApi";

export default function AccountDropdown({ sessionId }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthenApi.DeleteSession({ sessionId });
    localStorage.removeItem("token");
    localStorage.removeItem("approve_token");
    localStorage.removeItem("session_id");
    navigate(`/login`, { replace: true });
  };
  const handleLogin = () => {
    navigate(`/login`, { replace: true });
  };
  const items = [
    {
      key: "1",
      label: <a target="_blank">Discussion</a>,
    },
    {
      key: "2",
      label: <a target="_blank">Lists</a>,
    },
    {
      key: "3",
      label: <a target="_blank">Rating</a>,
    },
    {
      key: "4",
      label: (
        <a target="_blank">
          Watchlist
          <Divider
            style={{
              marginBlock: "4px",
            }}
          />
        </a>
      ),
    },
    {
      key: "5",
      label: <a target="_blank">Edit Profile </a>,
    },
    {
      key: "6",
      label: <a target="_blank">Settings </a>,
    },
    {
      key: "7",
      label: (
        <a target="_blank" rel="register" onClick={handleLogout}>
          Log out
        </a>
      ),
    },
  ];
  if (sessionId) {
    return (
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
        className="dropdown"
      >
        <Space>
          <FontAwesomeIcon icon={faCircleUser} fontSize={36}></FontAwesomeIcon>
        </Space>
      </Dropdown>
    );
  } else {
    return (
      <>
        <Button onClick={handleLogin}>Login</Button>
      </>
    );
  }
}
