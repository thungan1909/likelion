import { Dropdown, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import "./actionDropdown.css";

import {
  UnorderedListOutlined,
  HeartOutlined,
  StarOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function ActionDropdown() {
  const navigate = useNavigate();
  const handleCreateList = () => {
    navigate("/list/new", { replace: true });
  };
  const items = [
    {
      key: "addList",
      label: "Add to list",
      icon: <UnorderedListOutlined />,
      children: [
        {
          key: "list1",
          label: (
            <a target="_blank" rel="createlist" onClick={handleCreateList}>
              Create new list
            </a>
          ),
          icon: <PlusOutlined />,
        },
      ],
    },
    {
      key: "favorite",
      label: "Favorite",
      icon: <HeartOutlined />,
    },
    {
      key: "watchlist",
      label: "Watchlist",
      icon: <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>,
    },
    {
      key: "rating",
      label: "Your rating",
      icon: <StarOutlined />,
    },
  ];

  return (
    <Dropdown className="more-action-btn" menu={{ items }}>
      <Space>
        <EllipsisOutlined />
      </Space>
    </Dropdown>
  );
}
