import { Menu } from "antd";
const items = [
  {
    key: "item1",
    label: <a href="#">PHIM ẢNH</a>,
    children: [
      {
        key: "item1:1",
        type: "group",
        label: "Trending",
        //   children: [
        //     {
        //       label: 'Option 1',
        //       key: 'setting:1',
        //     },
        //     {
        //       label: 'Option 2',
        //       key: 'setting:2',
        //     },
        //   ],
      },
      {
        key: "item1:2",
        type: "group",
        label: "Top Rated",
      },
    ],
  },
  {
    key: "item2",
    label: <a href="">TRUYỀN HÌNH</a>,
  },
  {
    key: "item3",
    label: <a href="">TV SHOW</a>,
  },
  {
    key: "item4",
    label: <a href="">NGƯỜI NỔI TIẾNG</a>,
  },
  // {
  //     key: 'item5',
  //     label: (
  //         <a href="">THỂ LOẠI</a>
  //     ),
  //     children: [
  //         {
  //             key: 'item5:1',
  //             type: 'group1',
  //             label: 'Phim Chiếu Rạp',
  //         },
  //         {
  //             key: 'item5:2',
  //             type: 'group2',
  //             label: 'Khoa học',
  //         },
  //         {
  //             key: 'item5:3',
  //             type: 'group3',
  //             label: 'Kinh dị',
  //         },
  //         {
  //             key: 'item5:4',
  //             type: 'group4',
  //             label: 'Tình cảm',
  //         },

  //     ],
  // },
  {
    key: "item6",
    label: <a href="">QUỐC GIA</a>,

    children: [
      {
        // type: 'group1',
        label: "Phim Châu Á",
        children: [
          {
            label: "Phim Trung Quốc",
          },
          {
            label: "Phim Nhật Bản",
          },
          {
            label: "Phim Đài Loan",
          },
          {
            label: "Phim Ấn Độ",
          },
        ],
      },

      {
        // type: 'group',
        label: "Phim Trung Quốc",
        children: [
          {
            label: "Phim Nhật Bản",
          },
          {
            label: "Phim Ấn Độ",
          },
        ],
      },
      {
        // type: 'group',
        label: "Phim Trung Quốc",
        children: [
          {
            label: "Phim Nhật Bản",
          },
          {
            label: "Phim Ấn Độ",
          },
        ],
      },
    ],
  },
];
export default function CustomMenuItem() {
  const handleChangeMenu = (value) => {
    console.log(value);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      items={items}
      className="header-menu"
      onClick={(e) => handleChangeMenu(e)}
    ></Menu>
  );
}
