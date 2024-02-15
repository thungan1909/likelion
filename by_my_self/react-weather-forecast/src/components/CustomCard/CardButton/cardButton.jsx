import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
export default function CardButton ()
{
    return(
        <>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </>
    )
}